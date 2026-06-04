import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.softhire.co.uk';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

interface FaqItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  /** Absolute URL. Omit only for the final (current) crumb. */
  item?: string;
}

interface SEOProps {
  /** <title> text — also used for OG/Twitter title. */
  title: string;
  /** meta description — also used for OG/Twitter description. */
  description: string;
  /**
   * Pathname only — e.g. "/" or "/sponsor-licence-care-homes".
   * No domain prefix. Trailing slashes are stripped automatically.
   */
  path: string;
  ogType?: 'website' | 'article';
  /** Absolute URL to the OG image. Defaults to /og-image.jpg. */
  ogImage?: string;
  /**
   * Set true only for intentionally non-indexed pages (private forms, etc.)
   * Default: false — all public pages should be indexable.
   */
  noIndex?: boolean;
  /**
   * Optional BreadcrumbList. Home is always prepended automatically.
   * Example: [{ name: 'Sponsor Licence for Care Homes' }]
   */
  breadcrumb?: BreadcrumbItem[];
  /** Optional FAQ array — generates FAQPage structured data. */
  faqs?: FaqItem[];
  /**
   * Optional Service schema info.
   * Generates a Schema.org/Service JSON-LD block that helps Google understand
   * this page as a specific professional service offering.
   */
  serviceInfo?: {
    name: string;
    description: string;
    url: string;
  };
}

/**
 * Drop-in SEO component for every public page.
 *
 * Injects via react-helmet-async:
 *  - <title>, <meta name="description">, <link rel="canonical">
 *  - <meta name="robots">
 *  - Open Graph (og:*) tags
 *  - Twitter Card (twitter:*) tags
 *  - Optional BreadcrumbList JSON-LD
 *  - Optional FAQPage JSON-LD
 *
 * All canonical URLs are normalised to https://www.softhire.co.uk with no trailing slash.
 */
export default function SEO({
  title,
  description,
  path,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  breadcrumb,
  faqs,
  serviceInfo,
}: SEOProps) {
  // Normalise: strip trailing slash from every path except root "/"
  const normPath = path === '/' ? '/' : path.replace(/\/+$/, '');
  const canonical = `${BASE_URL}${normPath}`;

  const breadcrumbSchema =
    breadcrumb && breadcrumb.length > 0
      ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          ...breadcrumb.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: b.name,
            ...(b.item ? { item: b.item } : {}),
          })),
        ],
      }
      : null;

  const faqSchema =
    faqs && faqs.length > 0
      ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
      : null;

  const serviceSchema = serviceInfo
    ? {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceInfo.name,
      description: serviceInfo.description,
      url: serviceInfo.url,
      provider: {
        '@type': 'LegalService',
        name: 'SoftHire',
        url: BASE_URL,
      },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
    }
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      {/* ── Open Graph ─────────────────────────────────────────────────────── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="SoftHire" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_GB" />

      {/* ── Twitter Card ───────────────────────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* ── Structured data ────────────────────────────────────────────────── */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
      {serviceSchema && (
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      )}
    </Helmet>
  );
}
