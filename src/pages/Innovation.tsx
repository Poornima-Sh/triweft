import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Award, Plane, Layers, ArrowRight } from 'lucide-react';

export const Innovation: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const projects = [
    {
      id: 1,
      title: "AeroWeave Composites",
      category: "Aerospace & Automotive",
      description: "Developing multi-axial woven carbon-fiber panels that combine high structural integrity with ultra-light profiles.",
      details: "By adapting traditional satin-weaving looms, our engineers developed a process to weave carbon filaments around curves without stress fracturing. Currently in testing phase for airliner wing-tip components.",
      stage: "Series A / Prototype Validation",
      partners: "Indian Institute of Science (IISc), Aerospace Division",
      icon: <Plane size={24} />,
      color: "#1E2A38"
    },
    {
      id: 2,
      title: "BioFilament Lab",
      category: "Bio-Materials & Agriculture",
      description: "Creating zero-petroleum fibers from agricultural waste, sugar bagasse, and sea algae structures.",
      details: "Our proprietary process melts cellulose from bagasse into stable, silky filaments. The fabric is 100% home-compostable in 90 days, yet holds premium luxury textures and high washing resilience.",
      stage: "Seed Round / Commercial Scaling",
      partners: "EcoSpun Lab Tokyo & National Agricultural Board",
      icon: <Award size={24} />,
      color: "#2E7D32"
    },
    {
      id: 3,
      title: "SmartDrape Wearables",
      category: "Medical & Smart Tech",
      description: "Incorporating microscopic silver-sensor threads directly into the weave structure to record medical data.",
      details: "Sensing threads are woven into baseline undershirts and sport dresses. It records continuous ECG, respiration cycles, and moisture indicators, feeding directly to secure medical apps via micro Bluetooth transceivers.",
      stage: "Beta Testing / FDA Approval Pending",
      partners: "Hindustan Medical Group & TechSense Sensors",
      icon: <Cpu size={24} />,
      color: "#FF533D"
    },
    {
      id: 4,
      title: "LoomAI Designs",
      category: "Artificial Intelligence",
      description: "A digital neural net system predicting thread counts and structural layouts for optimal performance.",
      details: "LoomAI analyses target mechanical constraints (elasticity, weight limit) and outputs the precise weaving math. It reduces physical testing iteration times by 85%, accelerating product lifecycles.",
      stage: "Proprietary Software Integration",
      partners: "Triweft Innovation Laboratories",
      icon: <Layers size={24} />,
      color: "#FFC219"
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
      {/* Title */}
      <motion.div variants={itemVariants} className="section-title-wrap">
        <span className="section-subtitle">Ventures & Research</span>
        <h1 className="section-title">Innovation & Investments</h1>
        <p style={{ maxWidth: '750px', margin: '2rem auto 0 auto', color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, textAlign: 'center' }}>
          Triweft invests 15% of holding revenues back into our scientific laboratories. We partner with elite global research institutes to pioneer cross-industry technologies that extend the science of textiles into other industrial domains.
        </p>
      </motion.div>

      {/* Grid of Projects */}
      <section style={{ padding: '3rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {projects.map((proj) => {
            const isExpanded = expandedId === proj.id;
            return (
              <motion.div
                key={proj.id}
                layout
                onClick={() => setExpandedId(isExpanded ? null : proj.id)}
                whileHover={{ y: isExpanded ? 0 : -6 }}
                className="glass-card"
                style={{
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  border: isExpanded ? `1px solid ${proj.color}` : '1px solid rgba(30, 42, 56, 0.12)',
                  background: isExpanded ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.45)',
                  boxShadow: isExpanded ? '0 20px 40px rgba(0, 0, 0, 0.08)' : '0 10px 30px rgba(30, 42, 56, 0.04)',
                }}
              >
                {/* Header elements */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '8px',
                      backgroundColor: isExpanded ? proj.color : 'rgba(30, 42, 56, 0.05)',
                      color: isExpanded ? '#FFFFFF' : proj.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {proj.icon}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#7A1F2B', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                      {proj.category}
                    </span>
                    <h3 style={{ fontSize: '1.35rem', color: '#1A2A40', margin: 0 }}>
                      {proj.title}
                    </h3>
                  </div>
                </div>

                {/* Short Description */}
                <p style={{ color: '#666666', fontSize: '0.9rem', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
                  {proj.description}
                </p>

                {/* Expanded details container */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden', marginTop: '1.5rem', borderTop: '1px solid rgba(26, 42, 64, 0.08)', paddingTop: '1.5rem' }}
                    >
                      <h4 style={{ fontSize: '1rem', color: '#1A2A40', fontWeight: 600, marginBottom: '0.5rem' }}>
                        Innovation Breakdown
                      </h4>
                      <p style={{ color: '#555555', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                        {proj.details}
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', backgroundColor: 'rgba(26,42,64,0.03)', padding: '1rem', borderRadius: '6px' }}>
                        <div>
                          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1A2A40', display: 'block' }}>Stage</span>
                          <span style={{ fontSize: '0.8rem', color: '#666666' }}>{proj.stage}</span>
                        </div>
                        <div>
                          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1A2A40', display: 'block' }}>Research & Collaboration Partners</span>
                          <span style={{ fontSize: '0.8rem', color: '#666666' }}>{proj.partners}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action helper */}
                <span
                  style={{
                    color: proj.color,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginTop: '1.5rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  {isExpanded ? "Collapse Details" : "Read Full Initiative"} <ArrowRight size={12} style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                </span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* R&D Labs Highlight */}
      <section className="section-alt" style={{ borderRadius: '12px', padding: '5rem 3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center', textAlign: 'left' }}>
        <div>
          <span className="section-subtitle">Labs & Research</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Join the Weave Lab</h2>
          <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            We actively collaborate with engineering teams, fashion labels, and polymer labs worldwide. If you have a patent, dynamic research project, or innovative venture looking for holding support, capital investments, and scaling networks, connect with us.
          </p>
          <a href="#contact" className="btn btn-primary">Collaborate With Us</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(30, 42, 56, 0.08)' }}>
            <span style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', color: '#FF533D', fontWeight: 600, display: 'block' }}>15%</span>
            <span style={{ fontSize: '0.8rem', color: '#666666', fontWeight: 500, fontFamily: 'var(--font-body)', textTransform: 'uppercase' }}>Revenues to R&D</span>
          </div>
          <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(30, 42, 56, 0.08)' }}>
            <span style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', color: '#1E2A38', fontWeight: 600, display: 'block' }}>24+</span>
            <span style={{ fontSize: '0.8rem', color: '#666666', fontWeight: 500, fontFamily: 'var(--font-body)', textTransform: 'uppercase' }}>Research Patents</span>
          </div>
          <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(30, 42, 56, 0.08)' }}>
            <span style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', color: '#FFC219', fontWeight: 600, display: 'block' }}>4</span>
            <span style={{ fontSize: '0.8rem', color: '#666666', fontWeight: 500, fontFamily: 'var(--font-body)', textTransform: 'uppercase' }}>Global Labs</span>
          </div>
          <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(30, 42, 56, 0.08)' }}>
            <span style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', color: '#333333', fontWeight: 600, display: 'block' }}>8</span>
            <span style={{ fontSize: '0.8rem', color: '#666666', fontWeight: 500, fontFamily: 'var(--font-body)', textTransform: 'uppercase' }}>Funded Ventures</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
