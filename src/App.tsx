import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InteractiveBackground } from './components/InteractiveBackground';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { VisionBrand } from './pages/VisionBrand';
import { Innovation } from './pages/Innovation';
import { Collections } from './pages/Collections';
import { Contact } from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Page switcher mapping
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home key="home" setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutUs key="about" />;
      case 'vision':
        return <VisionBrand key="vision" />;
      case 'innovation':
        return <Innovation key="innovation" />;
      case 'collections':
        return <Collections key="collections" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <Home key="home" setCurrentPage={setCurrentPage} />;
    }
  };

  // Liquid Glass Page Transition Animation Settings
  const transitionVariants: any = {
    initial: {
      opacity: 0,
      filter: 'blur(10px)',
      y: 15,
    },
    animate: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
    exit: {
      opacity: 0,
      filter: 'blur(8px)',
      y: -15,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        position: 'relative' 
      }}
    >
      {/* 1. Weaving Thread Interactive Canvas Background */}
      <InteractiveBackground />

      {/* 2. Floating Shrinking Header */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* 3. Main Dynamic Content Shell with AnimatePresence Transitions */}
      <main style={{ flexGrow: 1, position: 'relative', zIndex: 5 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: '100%' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Luxury Navy Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
