'use client';

import { ArrowLeft, ArrowRight, CalendarDays, Check, LockKeyhole, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { actions } from '@/content/navigation';
import { getSimulator } from '@/content/simulators';
import type { SimField, SimResult, SimStep, SimValues } from '@/content/simulators/types';
import { site } from '@/content/site';
import { track } from '@/lib/tracking';
import { ConsentBox, DemoNotice, ErrorText, Honeypot, SendFailure, TextField } from './forms/Field';
import { useLeadSubmit } from './forms/useLeadSubmit';

type Phase = 'steps' | 'gate' | 'result';

function validateStep(step: SimStep, values: SimValues): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const field of step.fields) {
    const value = values[field.id];
    const empty = Array.isArray(value) ? value.length === 0 : !value;
    if (empty) {
      if (!field.optional) errors[field.id] = field.type === 'number' ? 'Indiquez un montant.' : 'Choisissez une réponse.';
      continue;
    }
    if (field.type === 'number' && typeof value === 'string') {
      const parsed = Number(value.replace(',', '.').replace(/\s/g, ''));
      if (!Number.isFinite(parsed) || parsed < 0) errors[field.id] = 'Indiquez un nombre positif.';
    }
  }
  return errors;
}

function FieldControl(props: { field: SimField; id: string; value: string | string[] | undefined; error?: string; onChange: (value: string | string[]) => void }) {
  const { field, id, value, error, onChange } = props;
  const helpId = field.help ? `${id}-help` : undefined;
  const describedBy = [helpId, error && `${id}-error`].filter(Boolean).join(' ') || undefined;
  const optional = field.optional && <span className="font-normal text-slate"> (facultatif)</span>;
  const help = field.help && (
    <p id={helpId} className="mb-2 text-sm text-slate">
      {field.help}
    </p>
  );

  if (field.type === 'number') {
    return (
      <div>
        <label htmlFor={id} className="mb-1.5 block font-semibold text-ink">
          {field.label}
          {optional}
        </label>
        {help}
        <div className="relative">
          <input
            id={id}
            type="text"
            inputMode="decimal"
            className="field pr-20"
            placeholder={field.placeholder ? `Ex. : ${field.placeholder}` : undefined}
            value={typeof value === 'string' ? value : ''}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            onChange={(event) => onChange(event.target.value)}
          />
          {field.unit && <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-medium text-slate">{field.unit}</span>}
        </div>
        <ErrorText id={`${id}-error`} message={error} />
      </div>
    );
  }

  if (field.type === 'select') {
    return (
      <div>
        <label htmlFor={id} className="mb-1.5 block font-semibold text-ink">
          {field.label}
          {optional}
        </label>
        {help}
        <select id={id} className="field" value={typeof value === 'string' ? value : ''} aria-invalid={Boolean(error)} aria-describedby={describedBy} onChange={(event) => onChange(event.target.value)}>
          <option value="">{field.optional ? 'Je ne sais pas' : 'Choisir…'}</option>
          {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ErrorText id={`${id}-error`} message={error} />
      </div>
    );
  }

  const selected = Array.isArray(value) ? value : value ? [value] : [];
  const multiple = field.type === 'checks';
  return (
    <fieldset aria-describedby={describedBy}>
      <legend className="mb-1.5 font-semibold text-ink">
        {field.label}
        {optional}
      </legend>
      {help}
      <div className="grid gap-2.5 sm:grid-cols-2">
        {field.options?.map((option, index) => (
          <label key={option.value} className="flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border border-silver bg-paper px-4 py-2.5 text-[0.95rem] transition-all duration-200 hover:border-mist has-checked:border-petrol has-checked:bg-pearl has-checked:shadow-soft">
            <input
              // Le premier choix porte l'identifiant du champ, pour recevoir le focus en cas d'erreur.
              id={index === 0 ? id : undefined}
              type={multiple ? 'checkbox' : 'radio'}
              name={id}
              className="size-5 shrink-0 accent-petrol"
              checked={selected.includes(option.value)}
              onChange={(event) => {
                if (!multiple) return onChange(option.value);
                onChange(event.target.checked ? [...selected, option.value] : selected.filter((item) => item !== option.value));
              }}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      <ErrorText id={`${id}-error`} message={error} />
    </fieldset>
  );
}

function ResultView({ result }: { result: SimResult }) {
  return (
    <div className="grid gap-6">
      <div data-result className="surface-dark relative overflow-hidden rounded-3xl p-7 text-white sm:p-9">
        <p className="eyebrow text-mist">{result.headline.label}</p>
        <p className="mt-3 font-serif text-5xl leading-none font-medium sm:text-6xl">{result.headline.value}</p>
        <div className="hairline my-5 max-w-40 bg-linear-to-r from-mist via-mist/40 to-transparent" />
        {result.headline.note && <p className="max-w-xl text-white/75">{result.headline.note}</p>}
      </div>

      {result.figures.length > 0 && (
        <dl className="divide-y divide-line rounded-2xl border border-line bg-pearl/60 px-5">
          {result.figures.map((figure) => (
            <div key={figure.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5">
              <dt className="text-slate">{figure.label}</dt>
              <dd className="font-semibold text-ink">{figure.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {result.lists.map((block) => (
        <div key={block.title}>
          <h3 className="text-lg">{block.title}</h3>
          <ul className="mt-3 grid gap-2.5">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-pearl text-petrol ring-1 ring-line">
                  <Check className="size-3" strokeWidth={2.5} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="text-[0.82rem] leading-relaxed text-slate">
        {result.notes.map((note) => (
          <p key={note} className="mt-1">
            {note}
          </p>
        ))}
        <p className="mt-1">Résultat indicatif, fourni à titre d'information. Il ne constitue ni une offre, ni un conseil personnalisé.</p>
      </div>
    </div>
  );
}

/**
 * Simulateur : étapes de questions, puis demande de coordonnées, puis résultat.
 * Le résultat n'est affiché qu'une fois la demande enregistrée.
 */
export function SimulatorTool({ slug }: { slug: string }) {
  const simulator = getSimulator(slug);
  const id = useId();
  const source = `simulateur:${slug}`;
  const lead = useLeadSubmit('simulation', source);

  const [phase, setPhase] = useState<Phase>('steps');
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<SimValues>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ prenom: '', nom: '', email: '', telephone: '' });
  const [consent, setConsent] = useState(false);
  const [result, setResult] = useState<SimResult | null>(null);

  const started = useRef(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mounted = useRef(false);

  const step = simulator.steps[stepIndex];
  const total = simulator.steps.length;

  // Au changement d'écran, le focus rejoint le titre : les lecteurs d'écran annoncent la nouvelle étape.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    titleRef.current?.focus();
  }, [stepIndex, phase]);

  function setValue(fieldId: string, value: string | string[]) {
    if (!started.current) {
      started.current = true;
      track('sim_start', { simulator: slug });
    }
    setErrors((previous) => {
      if (!(fieldId in previous)) return previous;
      const { [fieldId]: _corrected, ...rest } = previous;
      return rest;
    });
    setValues((previous) => ({ ...previous, [fieldId]: value }));
  }

  function next() {
    const stepErrors = validateStep(step, values);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      document.getElementById(`${id}-${Object.keys(stepErrors)[0]}`)?.focus();
      return;
    }
    if (stepIndex < total - 1) {
      setStepIndex(stepIndex + 1);
      track('sim_step', { simulator: slug, step: stepIndex + 2 });
    } else if (lead.status === 'sent') {
      // Coordonnées déjà transmises : une réponse modifiée recalcule le résultat sans nouvelle demande.
      setResult(simulator.compute(values));
      setPhase('result');
    } else {
      setPhase('gate');
      track('sim_gate', { simulator: slug });
    }
  }

  async function unlock() {
    const computed = simulator.compute(values);
    const accepted = await lead.submit(contact, consent, { simulateur: slug, reponses: values, resultat: `${computed.headline.label} : ${computed.headline.value}` });
    if (!accepted) return;
    setResult(computed);
    setPhase('result');
    track('sim_result', { simulator: slug });
  }

  const setContactField = (name: keyof typeof contact) => (value: string) => {
    lead.clearError(name);
    setContact((previous) => ({ ...previous, [name]: value }));
  };

  if (phase === 'result' && result) {
    return (
      <div className="animate-rise rounded-3xl border border-line bg-paper p-6 shadow-lift sm:p-9">
        <p className="eyebrow">Simulation terminée</p>
        <h2 ref={titleRef} tabIndex={-1} className="mt-2 mb-7 text-3xl outline-none sm:text-4xl">
          Votre résultat
        </h2>
        <ResultView result={result} />
        {lead.demo && <DemoNotice />}
        <div className="mt-8 rounded-2xl bg-pearl p-6">
          <p className="font-serif text-2xl font-medium text-ink">Et maintenant ?</p>
          <p className="mt-2 text-slate">
            {site.founder.name} reprend ces éléments avec vous et vous rappelle au {contact.telephone}. Vous pouvez aussi choisir votre créneau tout de suite.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={actions.booking.href} className="btn">
              <CalendarDays className="size-4.5" aria-hidden="true" />
              {actions.booking.label}
            </Link>
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                setPhase('steps');
                setStepIndex(0);
              }}
            >
              <RotateCcw className="size-4" aria-hidden="true" />
              Modifier mes réponses
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'gate') {
    return (
      <form
        noValidate
        className="animate-rise grid gap-4 rounded-3xl border border-line bg-paper p-6 shadow-lift sm:p-9"
        onSubmit={(event) => {
          event.preventDefault();
          void unlock();
        }}
      >
        <span className="grid size-12 place-items-center rounded-full bg-pearl text-petrol ring-1 ring-line">
          <LockKeyhole className="size-5" strokeWidth={1.6} aria-hidden="true" />
        </span>
        <h2 ref={titleRef} tabIndex={-1} className="text-3xl outline-none sm:text-4xl">
          Votre simulation est prête
        </h2>
        <p className="text-slate">Indiquez vos coordonnées pour afficher votre résultat. Un courtier pourra ensuite le commenter avec vous, sans engagement.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField id={`${id}-prenom`} label="Prénom" value={contact.prenom} onChange={setContactField('prenom')} error={lead.errors.prenom} autoComplete="given-name" />
          <TextField id={`${id}-nom`} label="Nom" value={contact.nom} onChange={setContactField('nom')} error={lead.errors.nom} autoComplete="family-name" />
          <TextField id={`${id}-email`} label="E-mail" type="email" inputMode="email" value={contact.email} onChange={setContactField('email')} error={lead.errors.email} autoComplete="email" />
          <TextField id={`${id}-telephone`} label="Téléphone mobile" type="tel" inputMode="tel" value={contact.telephone} onChange={setContactField('telephone')} error={lead.errors.telephone} autoComplete="tel" />
        </div>
        <Honeypot value={lead.website} onChange={lead.setWebsite} />
        <ConsentBox
          id={`${id}-consent`}
          checked={consent}
          error={lead.errors.consent}
          onChange={(checked) => {
            lead.clearError('consent');
            setConsent(checked);
          }}
        />
        <ErrorText id={`${id}-form-error`} message={lead.errors.form} />
        {lead.status === 'failed' && <SendFailure />}
        <div className="flex flex-wrap gap-3">
          <button type="submit" className="btn" disabled={lead.status === 'sending'}>
            {lead.status === 'sending' ? 'Un instant…' : 'Afficher mon résultat'}
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
          <button type="button" className="btn-outline" onClick={() => setPhase('steps')}>
            <ArrowLeft className="size-4" aria-hidden="true" />
            Retour
          </button>
        </div>
      </form>
    );
  }

  return (
    <form
      noValidate
      className="rounded-3xl border border-line bg-paper p-6 shadow-lift sm:p-9"
      onSubmit={(event) => {
        event.preventDefault();
        next();
      }}
    >
      <div className="flex items-center gap-4">
        <ol className="flex items-center gap-2" aria-hidden="true">
          {simulator.steps.map((item, index) => (
            <li key={item.title} className="flex items-center gap-2">
              <span
                className={`grid size-9 place-items-center rounded-full text-sm font-semibold transition-colors duration-300 ${
                  index < stepIndex ? 'bg-petrol text-white' : index === stepIndex ? 'bg-ink text-white' : 'bg-pearl text-slate ring-1 ring-line'
                }`}
              >
                {index < stepIndex ? <Check className="size-4" strokeWidth={2.5} /> : index + 1}
              </span>
              {index < total - 1 && <span className={`h-px w-6 transition-colors duration-300 sm:w-10 ${index < stepIndex ? 'bg-petrol' : 'bg-silver'}`} />}
            </li>
          ))}
        </ol>
        <div className="ml-auto text-right text-sm text-slate" role="progressbar" aria-label="Progression" aria-valuemin={1} aria-valuemax={total} aria-valuenow={stepIndex + 1}>
          Étape {stepIndex + 1} sur {total}
        </div>
      </div>

      <h2 key={stepIndex} ref={titleRef} tabIndex={-1} className="animate-rise mt-8 text-3xl outline-none sm:text-4xl">
        {step.title}
      </h2>
      {step.hint && <p className="mt-2 text-slate">{step.hint}</p>}

      <div key={`fields-${stepIndex}`} className="animate-rise mt-7 grid gap-7">
        {step.fields.map((field) => (
          <FieldControl key={field.id} field={field} id={`${id}-${field.id}`} value={values[field.id]} error={errors[field.id]} onChange={(value) => setValue(field.id, value)} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button type="submit" className="btn">
          {stepIndex < total - 1 ? 'Continuer' : 'Voir mon résultat'}
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
        {stepIndex > 0 && (
          <button type="button" className="btn-outline" onClick={() => setStepIndex(stepIndex - 1)}>
            <ArrowLeft className="size-4" aria-hidden="true" />
            Précédent
          </button>
        )}
      </div>
      <p className="mt-5 text-sm text-slate">Gratuit et sans engagement.</p>
    </form>
  );
}
