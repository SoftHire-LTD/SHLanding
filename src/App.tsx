import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import TalentSection from './components/TalentSection';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CandidatesForm2 from './components/CandidatesForm2';
import CookieBanner from './components/CookieBanner';
import NotFound from './components/pages/NotFound';
import BlogIndex from './components/pages/blog/BlogIndex';
import SponsorLicenceSuspended from './components/pages/blog/SponsorLicenceSuspended';
import WhySponsorLicencesRevoked from './components/pages/blog/WhySponsorLicencesRevoked';
import ComplianceVisitPreparation from './components/pages/blog/ComplianceVisitPreparation';
import ImmigrationCompliancePage from './components/pages/ImmigrationCompliancePage';
import SponsorLicenceCareHomesPage from './components/pages/SponsorLicenceCareHomesPage';
import SponsorLicenceRestaurantsPage from './components/pages/SponsorLicenceRestaurantsPage';
import SponsorLicenceTechStartupsPage from './components/pages/SponsorLicenceTechStartupsPage';
import SponsorLicenceUniversitiesPage from './components/pages/SponsorLicenceUniversitiesPage';
import SponsorLicenceApplicationPage from './components/pages/SponsorLicenceApplicationPage';
import SkilledWorkerEmployerPage from './components/pages/SkilledWorkerEmployerPage';
import SponsorLicenceCompliancePage from './components/pages/SponsorLicenceCompliancePage';
import SponsorLicenceCostPage from './components/pages/SponsorLicenceCostPage';
import SponsorLicenceChecklistPage from './components/pages/SponsorLicenceChecklistPage';
import CertificateOfSponsorshipPage from './components/pages/CertificateOfSponsorshipPage';
import SponsorLicenceForeignCompaniesPage from './components/pages/SponsorLicenceForeignCompaniesPage';
import { trackPageView, trackScrollDepth, trackCalendlyDateSelected, trackCalendlyBooked } from './lib/analytics';
import { captureUTMs } from './lib/utm';

// ── Page-view tracker (fires on every route change) ───────────────────────────
function PageViewTracker() {
  const location = useLocation();
  useEffect(() => {
    // Defer by one tick so React Helmet has time to update document.title
    const id = setTimeout(() => {
      trackPageView(location.pathname + location.search, document.title);
    }, 0);
    return () => clearTimeout(id);
  }, [location]);
  return null;
}

// ── Scroll-depth tracker (25 / 50 / 75 / 100 %) ──────────────────────────────
function ScrollDepthTracker() {
  const fired = useRef(new Set<number>());
  const location = useLocation();

  // Reset milestones on every route change so each page is tracked independently
  useEffect(() => {
    fired.current.clear();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const thresholds = [25, 50, 75, 100] as const;
    const onScroll = () => {
      const scrolled =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      for (const t of thresholds) {
        if (scrolled >= t && !fired.current.has(t)) {
          fired.current.add(t);
          trackScrollDepth(t);
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return null;
}

// ── Hash scroll handler (scrolls to hash target after SPA navigation) ────────
function HashScrollHandler() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const scrollToEl = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      scrollToEl();
      const t = setTimeout(scrollToEl, 80);
      return () => clearTimeout(t);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  return null;
}

// ── Trailing-slash normaliser — also serves as 404 handler ──────────────────
function TrailingSlashRedirect() {
  const { pathname, search, hash } = useLocation();
  if (pathname !== '/' && pathname.endsWith('/')) {
    return <Navigate to={`${pathname.slice(0, -1)}${search}${hash}`} replace />;
  }
  return <NotFound />;
}

const HomePage = () => (
  <>
    <SEO
      title="UK Visa & Immigration Services | Student, Skilled Worker, Sponsor Licence | SoftHire"
      description="IAA-regulated UK immigration experts. Fixed-fee Student, Graduate, Skilled Worker visas and Sponsor Licences. 97% success rate. Free consultation in 24 hours."
      path="/"
    />
    <Hero />
    <TalentSection />
    <Products />
    <About />
    <Contact />
  </>
);

function App() {
  useEffect(() => {
    captureUTMs();
  }, []);

  // ── Calendly postMessage event listener ──────────────────────────────────
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return;
      const eventType: string = e.data?.event ?? '';
      if (eventType === 'calendly.date_and_time_selected') {
        trackCalendlyDateSelected();
      } else if (eventType === 'calendly.event_scheduled') {
        trackCalendlyBooked(e.data?.payload?.event_type?.name);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <Router>
      <PageViewTracker />
      <ScrollDepthTracker />
      <HashScrollHandler />
      <div className="min-h-screen" style={{ background: '#0B1736' }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/candidates" element={<CandidatesForm2 />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/sponsor-licence-suspended-what-happens" element={<SponsorLicenceSuspended />} />
          <Route path="/blog/why-sponsor-licences-get-revoked" element={<WhySponsorLicencesRevoked />} />
          <Route path="/blog/home-office-compliance-visit-preparation" element={<ComplianceVisitPreparation />} />
          <Route path="/immigration-compliance" element={<ImmigrationCompliancePage />} />
          <Route path="/sponsor-licence-care-homes" element={<SponsorLicenceCareHomesPage />} />
          <Route path="/sponsor-licence-restaurants" element={<SponsorLicenceRestaurantsPage />} />
          <Route path="/sponsor-licence-tech-startups" element={<SponsorLicenceTechStartupsPage />} />
          <Route path="/sponsor-licence-universities" element={<SponsorLicenceUniversitiesPage />} />
          <Route path="/sponsor-licence-application" element={<SponsorLicenceApplicationPage />} />
          <Route path="/skilled-worker-visa-employer" element={<SkilledWorkerEmployerPage />} />
          <Route path="/sponsor-licence-compliance" element={<SponsorLicenceCompliancePage />} />
          <Route path="/sponsor-licence-cost" element={<SponsorLicenceCostPage />} />
          <Route path="/sponsor-licence-checklist" element={<SponsorLicenceChecklistPage />} />
          <Route path="/certificate-of-sponsorship" element={<CertificateOfSponsorshipPage />} />
          <Route path="/sponsor-licence-for-foreign-companies" element={<SponsorLicenceForeignCompaniesPage />} />
          {/* Redirect trailing slashes; serve 404 for unmatched routes */}
          <Route path="*" element={<TrailingSlashRedirect />} />
        </Routes>
        <Footer />
      </div>
      <CookieBanner />
    </Router>
  );
}

export default App;
