import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Loader from './components/UI/Loader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1.5 seconds loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-red selection:text-white overflow-x-hidden w-full relative">
        
        <AnimatePresence>
          {loading && <Loader />}
        </AnimatePresence>

        <Navbar />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <Services />
          <Pricing />
          <About />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;