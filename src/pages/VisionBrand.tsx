import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Cpu, Star, ArrowRight, RefreshCw, ShoppingBag } from 'lucide-react';

export const VisionBrand: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  // Infographic Supply Chain Steps
  const supplySteps = [
    {
      id: 1,
      title: "Sustainable Sourcing",
      desc: "Harvesting organic flax, organic cotton, and bio-degradable polymer chips. We control the raw outputs to ensure zero-pesticide and ethical labor protocols.",
      icon: <Leaf size={24} />,
      color: "#2E7D32"
    },
    {
      id: 2,
      title: "Technical Spinning",
      desc: "Engineered spinning techniques where threads are blended with nano-carbon structures or copper wires, creating highly conductive, smart yarns.",
      icon: <Cpu size={24} />,
      color: "#1E2A38"
    },
    {
      id: 3,
      title: "Precision Weaving",
      desc: "Using automated digital looms that weave customized multi-axial warp-wefts, creating aerospace grade strength or ultra-lightweight luxury textiles.",
      icon: <RefreshCw size={24} />,
      color: "#FFC219"
    },
    {
      id: 4,
      title: "Atelier Design",
      desc: "Our luxury fashion designers translate the engineered textiles into premium silhouettes, marrying structural integrity with haute couture aesthetics.",
      icon: <Star size={24} />,
      color: "#FF533D"
    },
    {
      id: 5,
      title: "Global Distribution",
      desc: "Direct-to-consumer digital channels and premium experiential boutiques globally. Integrated RFID blockchain chips confirm authenticity.",
      icon: <ShoppingBag size={24} />,
      color: "#333333"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container"
      style={{ paddingTop: '150px', paddingBottom: '80px', boxSizing: 'border-box' }}
    >
      {/* Title block */}
      <motion.div variants={itemVariants} className="section-title-wrap">
        <span className="section-subtitle">Corporate Mission</span>
        <h1 className="section-title">Weaving the Future</h1>
        <p style={{ maxWidth: '750px', margin: '2rem auto 0 auto', color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, textAlign: 'center' }}>
          Our mission is to establish the world’s most vertically integrated technical textile and luxury fashion holding company. We believe luxury shouldn’t come at the cost of the environment, nor innovation at the cost of elegance.
        </p>
      </motion.div>

      {/* Core Objectives section */}
      <section style={{ padding: '3rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          
          <motion.div whileHover={{ y: -6 }} className="glass-card" style={{ textAlign: 'left' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(255, 83, 61, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF533D', marginBottom: '1.5rem' }}>
              <Star size={22} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Iconic Luxury</h3>
            <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6 }}>
              We build global fashion houses that focus on classic elegance, premium craftsmanship, and interactive experiences. We align heritage with technical weaves to give clothes unique drapes and tactile qualities.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="glass-card" style={{ textAlign: 'left' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(30, 42, 56, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E2A38', marginBottom: '1.5rem' }}>
              <Cpu size={22} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Technical Textiles</h3>
            <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Pioneering technical fabrics engineered for medical compression, extreme weather insulation, and smart wearables featuring bio-sensors that track vitals in real time.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="glass-card" style={{ textAlign: 'left' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(46, 125, 50, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2E7D32', marginBottom: '1.5rem' }}>
              <Leaf size={22} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Circular Sustainability</h3>
            <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Committed to zero-water dyeing technology and organic polymers. Our closed-loop supply chains allow garments to be completely melted down and re-spun into raw filaments at end-of-life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Supply Chain Infographic */}
      <section className="section-alt" style={{ borderRadius: '16px', margin: '4rem 0', padding: '5rem 2rem' }}>
        <div className="section-title-wrap">
          <span className="section-subtitle">Vertical Integration</span>
          <h2 style={{ fontSize: '2.5rem' }}>The Supply Loop Infographic</h2>
          <p style={{ color: '#666666', fontSize: '0.95rem', marginTop: '1rem' }}>
            Click on each phase to explore how Triweft vertically controls the supply cycle from molecular structure to luxury storefronts.
          </p>
        </div>

        {/* Desktop Step Connector Visual */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {supplySteps.map((step) => (
            <motion.div
              key={step.id}
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              whileHover={{ x: 10 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                padding: '1.5rem 2rem',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                border: activeStep === step.id 
                  ? `2px solid ${step.color}`
                  : '1px solid rgba(26, 42, 64, 0.08)',
                cursor: 'pointer',
                boxShadow: activeStep === step.id
                  ? '0 12px 30px rgba(0,0,0,0.08)'
                  : '0 4px 12px rgba(0,0,0,0.02)',
                transition: 'all 0.3s ease',
                textAlign: 'left'
              }}
              className="supply-step"
            >
              {/* Step number and icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '8px',
                  backgroundColor: step.color,
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {step.icon}
              </div>

              {/* Text content */}
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: step.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Phase 0{step.id}
                  </span>
                  <span style={{ color: '#CCCCCC', fontSize: '0.8rem' }}>•</span>
                  <h4 style={{ fontSize: '1.25rem', color: '#1A2A40', margin: 0 }}>
                    {step.title}
                  </h4>
                </div>

                <p style={{ color: '#666666', fontSize: '0.9rem', marginTop: '0.5rem', display: activeStep === step.id ? 'block' : 'none' }}>
                  {step.desc}
                </p>
                <span style={{ fontSize: '0.8rem', color: '#888888', display: activeStep === step.id ? 'none' : 'block', marginTop: '0.25rem' }}>
                  Click to discover details...
                </span>
              </div>

              {/* Active Indicator Arrow */}
              <div style={{ color: step.color, display: 'flex', alignItems: 'center' }}>
                <ArrowRight 
                  size={20} 
                  style={{ 
                    transform: activeStep === step.id ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
