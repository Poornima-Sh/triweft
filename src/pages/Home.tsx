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

          {/* Hero Right: Interactive Transforming Textile SVG */}
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
            {/* Soft decorative background circles */}
            <div style={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(122, 31, 43, 0.05) 0%, rgba(214, 160, 23, 0.02) 60%, transparent 100%)',
              filter: 'blur(20px)',
              zIndex: 0
            }}></div>

            <motion.svg
              viewBox="0 0 400 400"
              style={{ width: '90%', height: '90%', zIndex: 1, overflow: 'visible' }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
            >
              {/* Outer delicate orbits */}
              <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(26, 42, 64, 0.06)" strokeWidth="1" strokeDasharray="5 5" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(122, 31, 43, 0.08)" strokeWidth="1" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(212, 160, 23, 0.12)" strokeWidth="1.5" strokeDasharray="10 15" />

              {/* The "Triweft" Warp & Weft Morphed Gown/Suit wires */}
              <g>
                {[...Array(12)].map((_, index) => {
                  const angle = (index / 12) * Math.PI * 2;
                  const x1 = 200 + Math.cos(angle) * 140;
                  const y1 = 200 + Math.sin(angle) * 140;
                  const cp1x = 200 + Math.cos(angle + 0.5) * 80;
                  const cp1y = 200 + Math.sin(angle + 0.5) * 80;
                  const cp2x = 200 + Math.cos(angle - 0.5) * 50;
                  const cp2y = 200 + Math.sin(angle - 0.5) * 50;
                  
                  return (
                    <motion.path
                      key={index}
                      d={`M 200 200 C ${cp2x} ${cp2y}, ${cp1x} ${cp1y}, ${x1} ${y1}`}
                      fill="none"
                      stroke={index % 3 === 0 ? '#7A1F2B' : index % 3 === 1 ? '#1A2A40' : '#D4A017'}
                      strokeWidth={index % 3 === 2 ? 1.5 : 1}
                      opacity="0.5"
                      animate={{
                        d: [
                          `M 200 200 C ${cp2x} ${cp2y}, ${cp1x} ${cp1y}, ${x1} ${y1}`,
                          `M 200 200 C ${cp2x * 1.1} ${cp2y * 0.9}, ${cp1x * 0.9} ${cp1y * 1.1}, ${200 + Math.cos(angle + 0.2) * 140} ${200 + Math.sin(angle + 0.2) * 140}`,
                          `M 200 200 C ${cp2x} ${cp2y}, ${cp1x} ${cp1y}, ${x1} ${y1}`
                        ]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 8 + (index % 4) * 2,
                        ease: 'easeInOut'
                      }}
                    />
                  );
                })}
              </g>

              {/* Central morphing shape node representing Fashion transforming */}
              <motion.path
                d="M 150 180 Q 200 130 250 180 T 200 300 Z"
                fill="url(#goldBurgundyGrad)"
                opacity="0.15"
                animate={{
                  d: [
                    "M 150 180 Q 200 130 250 180 T 200 300 Z",
                    "M 140 190 Q 200 110 260 190 T 200 310 Z",
                    "M 160 170 Q 200 150 240 170 T 200 290 Z",
                    "M 150 180 Q 200 130 250 180 T 200 300 Z"
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: 'easeInOut'
                }}
              />

              {/* Decorative nodes */}
              <motion.circle 
                cx="200" cy="130" r="4" fill="#D4A017"
                animate={{ scale: [1, 1.5, 1] }} 
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              />
              <motion.circle 
                cx="150" cy="180" r="3" fill="#7A1F2B" 
                animate={{ scale: [1.3, 1, 1.3] }} 
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              />
              <motion.circle 
                cx="250" cy="180" r="3" fill="#1A2A40"
                animate={{ scale: [1, 1.4, 1] }} 
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              />

              {/* Definitions */}
              <defs>
                <linearGradient id="goldBurgundyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7A1F2B" />
                  <stop offset="100%" stopColor="#D4A017" />
                </linearGradient>
              </defs>
            </motion.svg>
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
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(122, 31, 43, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Compass style={{ color: '#7A1F2B' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1A2A40' }}>Luxury Brands</h3>
              <p style={{ color: '#666666', fontSize: '0.95rem', flexGrow: 1 }}>
                Fostering an iconic portfolio of luxury fashion houses defined by fine craftsmanship, modern design systems, and rich legacy narrative.
              </p>
              <span 
                onClick={() => setCurrentPage('collections')}
                style={{ color: '#7A1F2B', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
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
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(26, 42, 64, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <ShieldCheck style={{ color: '#1A2A40' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1A2A40' }}>Supply Integrity</h3>
              <p style={{ color: '#666666', fontSize: '0.95rem', flexGrow: 1 }}>
                Revolutionizing supply chain loops with high technical weaves, traceable fiber technologies, and vertically integrated production hubs.
              </p>
              <span 
                onClick={() => setCurrentPage('vision')}
                style={{ color: '#1A2A40', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
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
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(212, 160, 23, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Cpu style={{ color: '#D4A017' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1A2A40' }}>Cross-Industry Ventures</h3>
              <p style={{ color: '#666666', fontSize: '0.95rem', flexGrow: 1 }}>
                Incubating disruptive innovations beyond textiles—spanning aerospace composite weaves, eco bio-polymers, and advanced digital apparel tools.
              </p>
              <span 
                onClick={() => setCurrentPage('innovation')}
                style={{ color: '#D4A017', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
              >
                Explore Incubation <ArrowRight size={14} />
              </span>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};
