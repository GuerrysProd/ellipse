'use client';

import { useRef, useState } from 'react';
import { validateFields, type FieldErrors, type LeadKind, type LeadRequest } from '@/lib/leads';
import { getAttribution, track } from '@/lib/tracking';

type Status = 'idle' | 'sending' | 'sent' | 'failed';

/** Envoi d'une demande à /api/lead : contrôle de saisie, champ piège, origine de la visite, suivi d'audience. */
export function useLeadSubmit(kind: LeadKind, source: string) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [website, setWebsite] = useState('');
  const mountedAt = useRef(Date.now());

  function clearError(name: string) {
    setErrors((previous) => {
      if (!(name in previous)) return previous;
      const { [name]: _corrected, ...rest } = previous;
      return rest;
    });
  }

  /** Renvoie true quand la demande a été acceptée par le serveur. */
  async function submit(fields: Record<string, string>, consent: boolean, context: Record<string, unknown> = {}): Promise<boolean> {
    if (status === 'sending') return false;
    const fieldErrors = validateFields(kind, fields, consent);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      track('lead_error', { kind, source });
      return false;
    }

    setStatus('sending');
    const payload: LeadRequest = { kind, fields, consent, context, source, attribution: getAttribution(), elapsedMs: Date.now() - mountedAt.current, website };
    try {
      const response = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (response.status === 422) {
        const body = (await response.json()) as { errors?: FieldErrors };
        setErrors(body.errors ?? { form: 'Certaines informations sont invalides.' });
        setStatus('idle');
        return false;
      }
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setErrors({});
      setStatus('sent');
      track('lead_submit', { kind, source });
      return true;
    } catch {
      setStatus('failed');
      return false;
    }
  }

  return { status, errors, clearError, submit, website, setWebsite };
}
