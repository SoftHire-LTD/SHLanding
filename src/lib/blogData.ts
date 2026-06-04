// Blog article metadata — shared across listing, layout, and structured data

export interface TocSection {
  id: string;
  title: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** A related service page shown at the bottom of blog articles. */
export interface RelatedService {
  path: string;
  title: string;
  description: string;
}

export interface BlogArticleMeta {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  datePublished: string;
  dateModified: string;
  excerpt: string;
  ogImage: string;
  readingTime: number;
  /** Taxonomy category shown as article badge and used for filtering. */
  category: string;
  toc: TocSection[];
  related: string[];
  /** Service pages surfaced at the bottom of the article. */
  relatedServices: RelatedService[];
}

export const BLOG_ARTICLES: BlogArticleMeta[] = [
  {
    slug: 'sponsor-licence-suspended-what-happens',
    title: 'What Happens If Your UK Sponsor Licence Is Suspended?',
    metaTitle: 'UK Sponsor Licence Suspended? What Happens Next for Employers | SoftHire',
    metaDescription:
      "Your sponsor licence has been suspended — here's what it means, what's at stake, and the response framework that actually matters. A practitioner guide for UK employers.",
    datePublished: '2026-05-21',
    dateModified: '2026-05-21',
    excerpt:
      "A sponsor licence suspension doesn't mean your sponsorship arrangements are over. But the way you respond in the days that follow will largely determine whether they survive.",
    ogImage:
      'https://www.softhire.co.uk/images/blog/sponsor-licence-suspended-what-happens.jpg',
    readingTime: 10,
    toc: [
      { id: 'what-suspension-means', title: 'What Does Suspension Mean?' },
      { id: 'why-licences-get-suspended', title: 'Why Licences Get Suspended' },
      { id: 'first-48-hours', title: 'The First 48 Hours' },
      { id: 'operations-during-suspension', title: 'Operations During Suspension' },
      { id: 'possible-outcomes', title: 'Possible Outcomes' },
      { id: 'building-the-response', title: 'Building the Response' },
      { id: 'reducing-suspension-risk', title: 'Reducing Suspension Risk' },
      { id: 'how-softhire-helps', title: 'How SoftHire Helps' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],
    related: ['why-sponsor-licences-get-revoked', 'home-office-compliance-visit-preparation'],
    category: 'Sponsor Compliance',
    relatedServices: [
      {
        path: '/sponsor-licence-application',
        title: 'Sponsor Licence Application',
        description: 'We manage your full sponsor licence application from eligibility check to Home Office approval.',
      },
      {
        path: '/sponsor-licence-compliance',
        title: 'Compliance Retainer',
        description: 'Ongoing compliance management so your sponsor licence stays safe throughout the year.',
      },
    ],
  },
  {
    slug: 'why-sponsor-licences-get-revoked',
    title: 'Why UK Sponsor Licences Get Revoked (And How Employers Can Avoid It)',
    metaTitle: 'Why UK Sponsor Licences Get Revoked (2026 Employer Guide) | SoftHire',
    metaDescription:
      "Revocation doesn't happen overnight — it's the result of compliance gaps that were visible months earlier. Here's what triggers it, what it actually costs, and the audit framework that prevents it.",
    datePublished: '2026-05-21',
    dateModified: '2026-05-21',
    excerpt:
      'Sponsor licence revocation is the most severe enforcement outcome the Home Office can impose. Unlike suspension, revocation is final — and the consequences compound quickly.',
    ogImage: 'https://www.softhire.co.uk/images/blog/why-sponsor-licences-get-revoked.jpg',
    readingTime: 12,
    toc: [
      { id: 'what-revocation-means', title: 'What Does Revocation Mean?' },
      { id: 'why-licences-get-revoked', title: 'The Triggers' },
      { id: 'what-revocation-costs', title: 'What Revocation Costs' },
      { id: 'quarterly-compliance-audit', title: 'The Quarterly Compliance Audit' },
      { id: 'how-softhire-helps', title: 'How SoftHire Helps' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],
    related: [
      'sponsor-licence-suspended-what-happens',
      'home-office-compliance-visit-preparation',
    ],
    category: 'Sponsor Compliance',
    relatedServices: [
      {
        path: '/sponsor-licence-compliance',
        title: 'Compliance Retainer',
        description: 'Ongoing compliance management to keep your sponsor licence safe and audit-ready.',
      },
      {
        path: '/sponsor-licence-application',
        title: 'Sponsor Licence Application',
        description: 'We manage your full sponsor licence application from eligibility check to Home Office approval.',
      },
    ],
  },
  {
    slug: 'home-office-compliance-visit-preparation',
    title: 'How to Prepare for a Home Office Sponsor Compliance Visit',
    metaTitle: 'Home Office Compliance Visit Checklist for UK Sponsors (2026) | SoftHire',
    metaDescription:
      "A Home Office compliance visit can trigger suspension or revocation — but most employers fail on avoidable basics. Here's the preparation checklist that makes the difference.",
    datePublished: '2026-05-21',
    dateModified: '2026-05-21',
    excerpt:
      'A Home Office compliance visit is not a formality. It is the single event most likely to determine whether your sponsor licence continues, gets suspended, or is revoked entirely.',
    ogImage:
      'https://www.softhire.co.uk/images/blog/home-office-compliance-visit-preparation.jpg',
    readingTime: 13,
    toc: [
      { id: 'what-is-a-compliance-visit', title: 'What Is a Compliance Visit?' },
      { id: 'announced-vs-unannounced', title: 'Announced vs Unannounced' },
      { id: 'what-auditors-focus-on', title: 'What Auditors Focus On' },
      { id: 'preparation-checklist', title: 'The Preparation Checklist' },
      { id: 'mistakes-to-avoid', title: 'Mistakes That Cause Enforcement' },
      { id: 'after-the-visit', title: 'After the Visit' },
      { id: 'how-softhire-helps', title: 'How SoftHire Helps' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],
    related: [
      'sponsor-licence-suspended-what-happens',
      'why-sponsor-licences-get-revoked',
    ],
    category: 'Sponsor Compliance',
    relatedServices: [
      {
        path: '/sponsor-licence-compliance',
        title: 'Compliance Retainer',
        description: 'Let us manage your ongoing sponsor compliance so you are always audit-ready.',
      },
      {
        path: '/sponsor-licence-checklist',
        title: 'Sponsor Licence Checklist',
        description: 'The complete pre-application and ongoing compliance checklist for UK sponsors.',
      },
    ],
  },
];

export const getBlogArticle = (slug: string): BlogArticleMeta | undefined =>
  BLOG_ARTICLES.find((a) => a.slug === slug);

export const getRelatedArticles = (slugs: string[]): BlogArticleMeta[] =>
  slugs
    .map((s) => BLOG_ARTICLES.find((a) => a.slug === s))
    .filter((a): a is BlogArticleMeta => !!a);
