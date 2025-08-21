import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TalentSection from './components/TalentSection';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Recruitment from './components/Recruitment';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

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
      <div className="min-h-screen bg-grey-100">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
