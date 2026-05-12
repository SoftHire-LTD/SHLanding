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
import { trackPageView, trackScrollDepth } from './lib/analytics';

// ── Page-view tracker (fires on every route change) ───────────────────────────
function PageViewTracker() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname + location.search, document.title);
  }, [location]);
  return null;
}

// ── Scroll-depth tracker (25 / 50 / 75 / 100 %) ──────────────────────────────
function ScrollDepthTracker() {
  const fired = useRef(new Set<number>());
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
      <div className="min-h-screen" style={{ background: '#0B1736' }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/candidates" element={<CandidatesForm2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
