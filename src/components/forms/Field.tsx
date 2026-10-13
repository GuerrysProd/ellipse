import { FlaskConical } from 'lucide-react';
import { site } from '@/content/site';

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  optional?: boolean;
  type?: 'text' | 'email' | 'tel';
  inputMode?: 'text' | 'email' | 'tel' | 'numeric';
  autoComplete?: string;
  placeholder?: string;
}

export function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm font-medium text-danger">
      {message}
    </p>
  );
}

export function TextField({ id, label, value, onChange, error, optional, type = 'text', inputMode, autoComplete, placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {optional ? <span className="font-normal text-slate"> (facultatif)</span> : <span aria-hidden="true" className="text-steel"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="field"
        value={value}
        required={!optional}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      <ErrorText id={`${id}-error`} message={error} />
    </div>
  );
}

/** Champ piège pour les robots : hors écran et hors tabulation. */
export function Honeypot({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="absolute -left-[9999px] size-px overflow-hidden" aria-hidden="true">
      <label>
        Site web
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={value} onChange={(event) => onChange(event.target.value)} />
      </label>
    </div>
  );
}

export function ConsentBox({ id, checked, onChange, error }: { id: string; checked: boolean; onChange: (checked: boolean) => void; error?: string }) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3 text-sm text-slate">
        <input
          id={id}
          type="checkbox"
          className="mt-0.5 size-5 shrink-0 accent-petrol"
          checked={checked}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span>
          J'accepte d'être recontacté par {site.name} au sujet de ma demande. Mes données sont traitées selon la{' '}
          <a className="link" href="/confidentialite">
            politique de confidentialité
          </a>
          .
        </span>
      </label>
      <ErrorText id={`${id}-error`} message={error} />
    </div>
  );
}

/** Message affiché quand l'envoi échoue : le visiteur garde un moyen de joindre le cabinet. */
/** Affiché après un envoi accepté en mode démonstration : rien n'a été transmis au cabinet. */
export function DemoNotice() {
  return (
    <p className="mt-4 flex gap-3 rounded-xl border border-dashed border-steel/60 bg-pearl p-4 text-sm text-slate">
      <FlaskConical className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <span>
        <strong className="text-ink">Mode démonstration.</strong> Cette demande n'a été transmise à personne : le site n'est pas encore relié à l'outil du cabinet.
      </span>
    </p>
  );
}

export function SendFailure() {
  return (
    <p role="alert" className="rounded-xl border border-danger/40 bg-danger/5 p-4 text-sm">
      L'envoi n'a pas abouti. Réessayez, ou appelez le{' '}
      <a className="link font-semibold" href={`tel:${site.phone.e164}`}>
        {site.phone.display}
      </a>
      .
    </p>
  );
}
