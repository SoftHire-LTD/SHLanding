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

// const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const GA_ID = 'G-VPCTXGVYVD';

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

/**
 * Track a "Book assessment / free consultation" CTA click.
 * Use this on every primary CTA that drives users toward a consultation or booking.
 * @param location  e.g. 'hero_care_homes', 'header_desktop', 'blog_cta'
 */
export function trackBookAssessment(location: string): void {
  trackEvent('book_assessment', {
    event_category: 'conversion',
    event_label: 'book_assessment',
    click_location: location,
  });
}

/** Track a Calendly popup being opened. */
export function trackCalendlyOpen(location: string): void {
  trackEvent('calendly_open', {
    event_category: 'conversion',
    event_label: 'book_meeting',
    click_location: location,
  });
}

/** Track a date/time slot being selected inside the Calendly widget. */
export function trackCalendlyDateSelected(): void {
  trackEvent('calendly_date_selected', {
    event_category: 'conversion',
    event_label: 'calendly_date_selected',
  });
}

/** Track a meeting being successfully booked via Calendly. */
export function trackCalendlyBooked(eventType?: string): void {
  trackEvent('calendly_booked', {
    event_category: 'conversion',
    event_label: 'meeting_booked',
    event_type: eventType ?? 'unknown',
  });
}

/** Track a FAQ accordion item being opened (not closed). */
export function trackFAQOpen(question: string, page: string): void {
  trackEvent('faq_open', {
    event_category: 'engagement',
    event_label: question.substring(0, 100),
    page_section: page,
  });
}

/** Track a sector/related page internal link click. */
export function trackSectorLinkClick(destination: string, source: string): void {
  trackEvent('sector_link_click', {
    event_category: 'navigation',
    event_label: destination,
    source_page: source,
  });
}

/** Track a ghost / secondary anchor CTA click. */
export function trackAnchorClick(label: string, page: string): void {
  trackEvent('anchor_click', {
    event_category: 'engagement',
    event_label: label,
    page_section: page,
  });
}

/** Track a blog article card click (from listing page or related articles). */
export function trackBlogArticleClick(
  slug: string,
  source: 'listing' | 'related'
): void {
  trackEvent('blog_article_click', {
    event_category: 'blog',
    event_label: slug,
    click_source: source,
  });
}

/** Track a table-of-contents link click within a blog article. */
export function trackTocClick(sectionId: string, articleSlug: string): void {
  trackEvent('toc_click', {
    event_category: 'blog',
    event_label: sectionId,
    page_section: articleSlug,
  });
}
