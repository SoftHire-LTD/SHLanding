import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronDown, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { type BlogArticleMeta, type FaqItem, getRelatedArticles } from '../../lib/blogData';
import { trackCTAClick, trackFAQOpen } from '../../lib/analytics';

const BASE_URL = 'https://www.softhire.co.uk';

const C = {
  navy: '#0B1736',
  navyMid: '#132048',
  gold: '#C9A84C',
  goldBg: 'rgba(201,168,76,0.10)',
  text: 'rgba(255,255,255,0.82)',
  textHigh: 'rgba(255,255,255,0.92)',
  textMuted: '#8a95b0',
  border: 'rgba(201,168,76,0.25)',
  borderSubtle: 'rgba(255,255,255,0.08)',
  card: '#0f1e45',
};

interface BlogLayoutProps {
  meta: BlogArticleMeta;
  faqs: FaqItem[];
  children: React.ReactNode;
}

export default function BlogLayout({ meta, faqs, children }: BlogLayoutProps) {
  const [tocOpen, setTocOpen] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const canonical = `${BASE_URL}/blog/${meta.slug}`;
  const relatedArticles = getRelatedArticles(meta.related);

  const formattedDate = new Date(meta.datePublished).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // ── Structured data ──────────────────────────────────────────────────────
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.metaDescription,
    image: meta.ogImage,
    datePublished: meta.datePublished,
    dateModified: meta.dateModified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    author: {
      '@type': 'Person',
      name: 'Divyank',
      url: `${BASE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SoftHire',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/softhire-logo.png` },
    },
  };

  const faqSchema =
    faqs.length > 0
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: meta.title, item: canonical },
    ],
  };

  const pageSlug = meta.slug.replace(/-/g, '_');

  return (
    <>
      <Helmet>
        <title>{meta.metaTitle}</title>
        <meta name="description" content={meta.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.metaTitle} />
        <meta property="og:description" content={meta.metaDescription} />
        <meta property="og:image" content={meta.ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="SoftHire" />
        <meta property="article:published_time" content={meta.datePublished} />
        <meta property="article:modified_time" content={meta.dateModified} />
        <meta property="article:author" content="Divyank" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.metaTitle} />
        <meta name="twitter:description" content={meta.metaDescription} />
        <meta name="twitter:image" content={meta.ogImage} />
        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* ── Article hero ────────────────────────────────────────────────────── */}
      <section
        style={{
          background: C.navy,
          paddingTop: '7rem',
          paddingBottom: '3rem',
          borderBottom: `1px solid ${C.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: '52rem', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
            <ol
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                flexWrap: 'wrap',
              }}
            >
              <li>
                <Link
                  to="/"
                  style={{ color: C.textMuted, fontSize: '0.8rem', textDecoration: 'none' }}
                >
                  Home
                </Link>
              </li>
              <li style={{ color: C.textMuted, fontSize: '0.8rem' }}>/</li>
              <li>
                <Link
                  to="/blog"
                  style={{ color: C.textMuted, fontSize: '0.8rem', textDecoration: 'none' }}
                >
                  Blog
                </Link>
              </li>
              <li style={{ color: C.textMuted, fontSize: '0.8rem' }}>/</li>
              <li
                style={{
                  color: C.gold,
                  fontSize: '0.8rem',
                  maxWidth: '22rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {meta.title}
              </li>
            </ol>
          </nav>

          {/* Category badge */}
          <div style={{ marginBottom: '1.25rem' }}>
            <span
              style={{
                background: C.goldBg,
                color: C.gold,
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '4px 12px',
                borderRadius: '4px',
                border: `1px solid ${C.border}`,
              }}
            >
              UK Immigration Law
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.4rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.22,
              marginBottom: '1.75rem',
            }}
          >
            {meta.title}
          </h1>

          {/* Article meta */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: C.textMuted,
                fontSize: '0.85rem',
              }}
            >
              <User size={13} />
              Divyank, Solicitor
            </span>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: C.textMuted,
                fontSize: '0.85rem',
              }}
            >
              <Calendar size={13} />
              {formattedDate}
            </span>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: C.textMuted,
                fontSize: '0.85rem',
              }}
            >
              <Clock size={13} />
              {meta.readingTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* ── Article body ────────────────────────────────────────────────────── */}
      <div style={{ background: C.navy, padding: '2.5rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
          {/* Table of Contents */}
          <div
            style={{
              marginBottom: '2.5rem',
              border: `1px solid ${C.border}`,
              borderRadius: '8px',
              overflow: 'hidden',
              background: C.card,
            }}
          >
            {/* TOC header — always visible */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.875rem 1.25rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: '#fff',
                  letterSpacing: '0.02em',
                }}
              >
                Table of Contents
              </span>
              {/* Mobile toggle button */}
              <button
                className="md:hidden"
                onClick={() => setTocOpen((v) => !v)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: C.gold,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                }}
                aria-expanded={tocOpen}
                aria-label={tocOpen ? 'Collapse table of contents' : 'Expand table of contents'}
              >
                <ChevronDown
                  size={16}
                  style={{
                    transform: tocOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                  }}
                />
              </button>
            </div>

            {/* TOC list: hidden on mobile unless open, always visible on md+ */}
            <div
              className={tocOpen ? '' : 'hidden '}
              style={{ borderTop: `1px solid ${C.borderSubtle}` }}
            >
              <ol style={{ listStyle: 'none', padding: '0.25rem 1.25rem 1rem', margin: 0 }}>
                {meta.toc.map((section, i) => (
                  <li
                    key={section.id}
                    style={{
                      padding: '0.35rem 0',
                      borderBottom:
                        i < meta.toc.length - 1 ? `1px solid ${C.borderSubtle}` : 'none',
                    }}
                  >
                    <a
                      href={`#${section.id}`}
                      onClick={() => setTocOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: C.textMuted,
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
                    >
                      <span
                        style={{
                          color: C.gold,
                          fontSize: '0.75rem',
                          minWidth: '1.3rem',
                          fontWeight: 600,
                        }}
                      >
                        {i + 1}.
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Article content */}
          <article>{children}</article>

          {/* ── FAQ section ────────────────────────────────────────────────── */}
          {faqs.length > 0 && (
            <section id="faq" style={{ marginTop: '3.5rem', scrollMarginTop: '6rem' }}>
              <h2
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.55rem)',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '1.5rem',
                }}
              >
                Frequently Asked Questions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    style={{
                      border: `1px solid ${openFaq === i ? C.border : C.borderSubtle}`,
                      borderRadius: '6px',
                      overflow: 'hidden',
                      background: openFaq === i ? C.card : 'transparent',
                      transition: 'background 0.2s, border-color 0.2s',
                    }}
                  >
                    <button
                      onClick={() => {
                        const next = openFaq === i ? null : i;
                        setOpenFaq(next);
                        if (next !== null) trackFAQOpen(faq.question, pageSlug);
                      }}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        padding: '1rem 1.25rem',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          lineHeight: 1.45,
                          color: openFaq === i ? '#fff' : C.textHigh,
                        }}
                      >
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={16}
                        style={{
                          flexShrink: 0,
                          color: C.gold,
                          marginTop: '3px',
                          transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s',
                        }}
                      />
                    </button>
                    {openFaq === i && (
                      <div
                        style={{
                          padding: '0 1.25rem 1.25rem',
                          color: C.text,
                          fontSize: '0.9rem',
                          lineHeight: 1.8,
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Author bio ──────────────────────────────────────────────────── */}
          <div
            style={{
              marginTop: '3rem',
              padding: '1.5rem',
              border: `1px solid ${C.borderSubtle}`,
              borderRadius: '8px',
              background: C.card,
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${C.gold}, #7a5a10)`,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  color: C.navy,
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  fontFamily: 'Syne, sans-serif',
                }}
              >
                D
              </span>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>
                Divyank, Solicitor
              </p>
              <p
                style={{
                  margin: '0.3rem 0 0',
                  color: C.textMuted,
                  fontSize: '0.83rem',
                  lineHeight: 1.6,
                }}
              >
                Oxford LLB · LBS MBA · IAA-Regulated Immigration Adviser. Divyank advises UK
                employers on sponsor licence applications, compliance, and immigration workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Related articles ────────────────────────────────────────────────── */}
      {relatedArticles.length > 0 && (
        <section
          style={{
            background: C.navyMid,
            padding: '4rem 1.5rem',
            borderTop: `1px solid ${C.borderSubtle}`,
          }}
        >
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '1.5rem',
                letterSpacing: '-0.01em',
              }}
            >
              Related Articles
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  style={{
                    background: C.navy,
                    border: `1px solid ${C.borderSubtle}`,
                    borderRadius: '8px',
                    padding: '1.5rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.border)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = C.borderSubtle)
                  }
                >
                  <p
                    style={{
                      margin: 0,
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 600,
                      color: '#fff',
                      fontSize: '0.95rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {article.title}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      color: C.textMuted,
                      fontSize: '0.83rem',
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {article.excerpt.slice(0, 110)}…
                  </p>
                  <span
                    style={{
                      color: C.gold,
                      fontSize: '0.83rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    Read article <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Standard CTA block ──────────────────────────────────────────────── */}
      <section
        style={{
          background: C.navy,
          padding: '4rem 1.5rem',
          borderTop: `1px solid ${C.borderSubtle}`,
        }}
      >
        <div
          style={{
            maxWidth: '38rem',
            margin: '0 auto',
            textAlign: 'center',
            border: `1px solid ${C.border}`,
            borderRadius: '12px',
            padding: '2.5rem',
            background: C.card,
          }}
        >
          <h3
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '0.75rem',
            }}
          >
            Need help with sponsor licence compliance?
          </h3>
          <p
            style={{
              color: C.text,
              fontSize: '0.93rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            SoftHire helps UK employers manage sponsorship, compliance, and immigration workflows.
            Book a consultation to discuss your requirements.
          </p>
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            style={{
              display: 'inline-block',
              background: C.gold,
              color: C.navy,
              fontWeight: 700,
              fontSize: '0.95rem',
              padding: '14px 32px',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
            onClick={() => trackCTAClick('book_consultation', `blog_cta_${pageSlug}`)}
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
