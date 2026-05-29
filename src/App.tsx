import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TalentSection from './components/TalentSection';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CandidatesForm2 from './components/CandidatesForm2';
import BlogIndex from './components/pages/blog/BlogIndex';
import SponsorLicenceSuspended from './components/pages/blog/SponsorLicenceSuspended';
import WhySponsorLicencesRevoked from './components/pages/blog/WhySponsorLicencesRevoked';
import ComplianceVisitPreparation from './components/pages/blog/ComplianceVisitPreparation';
import ImmigrationCompliancePage from './components/pages/ImmigrationCompliancePage';
import SponsorLicenceCareHomesPage from './components/pages/SponsorLicenceCareHomesPage';
import SponsorLicenceRestaurantsPage from './components/pages/SponsorLicenceRestaurantsPage';
import SponsorLicenceTechStartupsPage from './components/pages/SponsorLicenceTechStartupsPage';
import SponsorLicenceUniversitiesPage from './components/pages/SponsorLicenceUniversitiesPage';
import { trackPageView, trackScrollDepth } from './lib/analytics';

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

const HomePage = () => (
  <>
    <Hero />
    <TalentSection />
    <Products />
    <About />
    <Contact />
  </>
);

function App() {
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
