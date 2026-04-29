import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TalentSection from './components/TalentSection';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CandidatesForm2 from './components/CandidatesForm2';

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
