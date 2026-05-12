/**
 * SoftHire — Google Analytics 4 event tracking utility
 *
 * Usage:
 *   import { trackEvent, trackPageView } from '../lib/analytics';
 *   trackEvent('click_cta', 'hero', 'start_your_journey');
 */

// Extend the Window interface so TypeScript knows gtag exists
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

/** Returns true if gtag is available and we have a Measurement ID. */
function isReady(): boolean {
  return typeof window !== 'undefined' &&
    typeof window.gtag === 'function' &&
    !!GA_ID;
}

// ─── PAGE VIEW ────────────────────────────────────────────────────────────────

/**
 * Send a page_view hit (call on every route change).
 * @param path   e.g. "/candidates"
 * @param title  document.title or a custom string
 */
export function trackPageView(path: string, title?: string): void {
  if (!isReady()) return;
  window.gtag('config', GA_ID!, {
    page_path: path,
    page_title: title ?? document.title,
  });
}

// ─── GENERIC EVENT ────────────────────────────────────────────────────────────

/**
 * Send any GA4 event.
 * @param eventName  GA4 event name (snake_case recommended)
 * @param params     Any GA4 event parameters
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
): void {
  if (!isReady()) return;
  window.gtag('event', eventName, params ?? {});
}

// ─── TYPED HELPERS ────────────────────────────────────────────────────────────

/** Track a navigation link click. */
export function trackNavClick(label: string): void {
  trackEvent('nav_click', { event_category: 'navigation', event_label: label });
}

/** Track a CTA button / link click. */
export function trackCTAClick(label: string, location: string): void {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: label,
    click_location: location,
  });
}

/** Track a visa filter tab change. */
export function trackVisaFilter(filter: string): void {
  trackEvent('visa_filter', {
    event_category: 'product_interaction',
    event_label: filter,
  });
}

/** Track a visa card "Get started" click. */
export function trackVisaCardClick(visaName: string): void {
  trackEvent('visa_card_click', {
    event_category: 'product_interaction',
    event_label: visaName,
  });
}

/** Track contact form submission (success or failure). */
export function trackFormSubmit(success: boolean, formName = 'contact_form'): void {
  trackEvent(success ? 'form_submit_success' : 'form_submit_error', {
    event_category: 'form',
    event_label: formName,
  });
}

/** Track contact info link clicks (email, phone, WhatsApp). */
export function trackContactLinkClick(type: 'email' | 'phone' | 'whatsapp'): void {
  trackEvent('contact_link_click', {
    event_category: 'contact',
    event_label: type,
  });
}

/** Track scroll depth milestone (25 / 50 / 75 / 100). */
export function trackScrollDepth(percent: 25 | 50 | 75 | 100): void {
  trackEvent('scroll', {
    event_category: 'engagement',
    event_label: `${percent}%`,
    percent_scrolled: percent,
  });
}

/** Track a footer link click. */
export function trackFooterClick(label: string): void {
  trackEvent('footer_click', {
    event_category: 'navigation',
    event_label: label,
  });
}
