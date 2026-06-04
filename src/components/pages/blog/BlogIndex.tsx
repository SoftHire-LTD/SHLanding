import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { BLOG_ARTICLES } from '../../../lib/blogData';
import { trackBlogArticleClick } from '../../../lib/analytics';

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

// All planned categories — appear in filter even before articles for each exist
const ALL_CATEGORIES = [
  'All',
  'Sponsor Compliance',
  'Sponsor Licence',
  'Skilled Worker',
  'Employer Guides',
  'Immigration Updates',
  'Sector Guides',
];

export default function BlogIndex() {
  // Merge hardcoded list with any new categories that appear in articles
  const articleCategories = Array.from(new Set(BLOG_ARTICLES.map((a) => a.category)));
  const allCategories = [
    ...ALL_CATEGORIES,
    ...articleCategories.filter((c) => !ALL_CATEGORIES.includes(c)),
  ];
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Blog — UK Sponsor Licence &amp; Immigration Insights | SoftHire</title>
        <meta
          name="description"
          content="Practitioner guides for UK employers navigating sponsor licence compliance, Home Office enforcement, and immigration workflows. Written by SoftHire's IAA-regulated solicitors."
        />
        <link rel="canonical" href="https://www.softhire.co.uk/blog" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Blog — UK Sponsor Licence &amp; Immigration Insights | SoftHire"
        />
        <meta
          property="og:description"
          content="Practitioner guides for UK employers navigating sponsor licence compliance and immigration workflows."
        />
        <meta property="og:url" content="https://www.softhire.co.uk/blog" />
      </Helmet>

      {/* Hero */}
      <section
        style={{
          background: C.navy,
          paddingTop: '7rem',
          paddingBottom: '4rem',
          borderBottom: `1px solid ${C.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: '52rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
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
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            UK Immigration Insights
          </h1>
          <p
            style={{
              color: C.text,
              fontSize: '1.05rem',
              lineHeight: 1.7,
              maxWidth: '36rem',
            }}
          >
            Practitioner guides for UK employers navigating sponsor licence compliance, Home
            Office enforcement, and immigration workflows.
          </p>
        </div>
      </section>

      {/* Category filter bar */}
      <section style={{ background: C.navy, padding: '1.5rem 1.5rem 0', borderBottom: `1px solid ${C.borderSubtle}` }}>
        <div style={{ maxWidth: '52rem', margin: '0 auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? C.gold : 'transparent',
                color: activeCategory === cat ? C.navy : C.textMuted,
                border: `1px solid ${activeCategory === cat ? C.gold : C.borderSubtle}`,
                padding: '0.375rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.15s',
                marginBottom: '0.75rem',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Article grid */}
      <section style={{ background: C.navy, padding: '4rem 1.5rem 6rem' }}>
        <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {filtered.map((article) => {
              const formattedDate = new Date(article.datePublished).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              });
              return (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  style={{
                    display: 'block',
                    background: C.card,
                    border: `1px solid ${C.borderSubtle}`,
                    borderRadius: '10px',
                    padding: '2rem',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onClick={() => trackBlogArticleClick(article.slug, 'listing')}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.border)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.borderSubtle)}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      marginBottom: '0.875rem',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        background: C.goldBg,
                        color: C.gold,
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase',
                        padding: '3px 10px',
                        borderRadius: '4px',
                        border: `1px solid ${C.border}`,
                      }}
                    >
                      {article.category}
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        color: C.textMuted,
                        fontSize: '0.8rem',
                      }}
                    >
                      <Calendar size={12} />
                      {formattedDate}
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        color: C.textMuted,
                        fontSize: '0.8rem',
                      }}
                    >
                      <Clock size={12} />
                      {article.readingTime} min read
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                      fontWeight: 700,
                      color: C.textHigh,
                      lineHeight: 1.3,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {article.title}
                  </h2>

                  <p
                    style={{
                      color: C.textMuted,
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {article.excerpt}
                  </p>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: C.gold,
                      fontSize: '0.875rem',
                      fontWeight: 600,
                    }}
                  >
                    Read article <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
