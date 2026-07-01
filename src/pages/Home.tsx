import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, Cpu } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  // Tagline animation helper
  const taglineText = "Weaving Luxury, Innovation, and Legacy.";
  const words = taglineText.split(" ");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ boxSizing: 'border-box' }}
    >
      {/* Hero Section */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Hero Left Content */}
          <div style={{ textAlign: 'left' }}>
            <motion.span 
              variants={itemVariants}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.85rem',
                color: '#7A1F2B', // Burgundy emphasis
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '1rem',
                display: 'block'
              }}
            >
              Triweft Innovations Holding
            </motion.span>
            
            <h1 
              style={{ 
                fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
                lineHeight: 1.1, 
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 400
              }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  style={{ display: 'inline-block', marginRight: '0.25em' }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            
            <motion.p 
              variants={itemVariants}
              style={{ 
                fontSize: '1.15rem', 
                color: '#666666', 
                marginBottom: '2.5rem',
                lineHeight: 1.6,
                maxWidth: '520px'
              }}
            >
              A leading global holding company piloting elite fashion brands, technical textile supply chains, and future-forward cross-industry innovations.
            </motion.p>
            
            <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button 
                onClick={() => setCurrentPage('vision')} 
                className="btn btn-primary"
                style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
              >
                Explore Our Vision <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => setCurrentPage('innovation')} 
                className="btn btn-secondary"
              >
                Discover Innovation
              </button>
            </motion.div>
          </div>

          {/* Hero Right: Premium White Shirt Showcase */}
          <motion.div
            variants={itemVariants}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Soft decorative background glow */}
            <div style={{
              position: 'absolute',
              width: '85%',
              height: '85%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 194, 25, 0.08) 0%, rgba(255, 83, 61, 0.03) 60%, transparent 100%)',
              filter: 'blur(30px)',
              zIndex: 0
            }}></div>

            {/* Premium Framed Image */}
            <motion.div
              style={{
                position: 'relative',
                width: '85%',
                height: '85%',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 20px 50px rgba(30, 42, 56, 0.15)',
                zIndex: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: 'easeInOut'
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 30px 60px rgba(30, 42, 56, 0.25)'
              }}
            >
              <img
                src="/lookbook_white_shirt.png"
                alt="Triweft Sovereign White Shirt"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              
              {/* Subtle glass overlay corner details */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                backgroundColor: 'rgba(30, 42, 56, 0.85)',
                border: '1px solid rgba(255, 194, 25, 0.3)',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                color: '#FFFFFF',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                backdropFilter: 'blur(4px)'
              }}>
                The Alabaster Tech-Linen
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Summary Section */}
      <section className="section-alt">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Corporate Pillars</span>
            <h2 className="section-title">Synergy Across Domains</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {/* Pillar 1 */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card" 
              style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(255, 83, 61, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Compass style={{ color: '#FF533D' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1E2A38' }}>Luxury Brands</h3>
              <p style={{ color: '#666666', fontSize: '0.95rem', flexGrow: 1 }}>
                Fostering an iconic portfolio of luxury fashion houses defined by fine craftsmanship, modern design systems, and rich legacy narrative.
              </p>
              <span 
                onClick={() => setCurrentPage('collections')}
                style={{ color: '#FF533D', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
              >
                View Collections <ArrowRight size={14} />
              </span>
            </motion.div>

             {/* Pillar 2 */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card" 
              style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(30, 42, 56, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <ShieldCheck style={{ color: '#1E2A38' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1E2A38' }}>Supply Integrity</h3>
              <p style={{ color: '#666666', fontSize: '0.95rem', flexGrow: 1 }}>
                Revolutionizing supply chain loops with high technical weaves, traceable fiber technologies, and vertically integrated production hubs.
              </p>
              <span 
                onClick={() => setCurrentPage('vision')}
                style={{ color: '#1E2A38', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
              >
                Our Supply Chain <ArrowRight size={14} />
              </span>
            </motion.div>

             {/* Pillar 3 */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card" 
              style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(255, 194, 25, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Cpu style={{ color: '#FFC219' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1E2A38' }}>Cross-Industry Ventures</h3>
              <p style={{ color: '#666666', fontSize: '0.95rem', flexGrow: 1 }}>
                Investing in disruptive innovations beyond textiles—spanning aerospace composite weaves, eco bio-polymers, and advanced digital apparel tools.
              </p>
              <span 
                onClick={() => setCurrentPage('innovation')}
                style={{ color: '#FFC219', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
              >
                Explore Innovation <ArrowRight size={14} />
              </span>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};
