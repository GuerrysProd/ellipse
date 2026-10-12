// Événements envoyés à Google Tag Manager. Ne jamais y placer de donnée personnelle (nom, e-mail, téléphone).

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type TrackingEvent = 'lead_submit' | 'lead_error' | 'sim_start' | 'sim_step' | 'sim_gate' | 'sim_result';

export function track(event: TrackingEvent, params: Record<string, string | number> = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

const ATTRIBUTION_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'msclkid', 'fbclid'] as const;

/**
 * Origine de la visite, lue dans l'URL courante et jointe à la demande.
 * Rien n'est écrit sur le terminal : la persistance entre pages est à brancher sur le consentement.
 */
export function getAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const query = new URLSearchParams(window.location.search);
  const attribution: Record<string, string> = { page: window.location.pathname };
  if (document.referrer) attribution.referrer = document.referrer;
  for (const key of ATTRIBUTION_PARAMS) {
    const value = query.get(key);
    if (value) attribution[key] = value.slice(0, 200);
  }
  return attribution;
}
