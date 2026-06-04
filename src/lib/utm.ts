/**
 * UTM parameter capture utility.
 *
 * Call captureUTMs() once on app mount (App.tsx).
 * If UTM params are present in the URL they are stored in sessionStorage so
 * they survive SPA navigation and are available when a form is submitted.
 *
 * Call getStoredUTMs() inside any form submit handler and merge the result
 * into the request payload so attribution is sent alongside the lead.
 */

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

type UTMKey = (typeof UTM_KEYS)[number];
export type UTMParams = Partial<Record<UTMKey, string>>;

const STORAGE_KEY = 'softhire_utms';

/** Reads UTM params from the current URL and persists them to sessionStorage. */
export function captureUTMs(): void {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const utms: UTMParams = {};
  UTM_KEYS.forEach((k) => {
    const v = params.get(k);
    if (v) utms[k] = v;
  });
  if (Object.keys(utms).length > 0) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
  }
}

/** Returns any previously captured UTM params (empty object if none). */
export function getStoredUTMs(): UTMParams {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UTMParams) : {};
  } catch {
    return {};
  }
}
