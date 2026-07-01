import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Sparkles, BookOpen } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  // Founders data
  const founders = [
    {
      name: "Kabir Mehta",
      role: "Co-Founder & Chief Brand Officer",
      specialty: "FMCG Marketing",
      image: "/founder_fmcg.png",
      bio: "Graduated with honors in Textile Engineering. Pivoted early into FMCG brand architecture, managing national portfolios for top global consumer companies. He steers Triweft's consumer-facing luxury brands with retail marketing genius.",
      highlight: "Ex-Brand Director at Unilever | 10+ Years in Fashion Brand Positioning"
    },
    {
      name: "Vikram Sen",
      role: "Co-Founder & Chief Financial Officer",
      specialty: "Investment Banking",
      image: "/founder_banking.png",
      bio: "After completing his engineering thesis on supply chain kinetics, Vikram worked in London and New York in boutique investment banking. He brings rigorous financial structure, raising seed rounds and acquiring luxury brands under the holding shell.",
      highlight: "Former M&A VP at Barclays Capital | Wharton Finance Alum"
    },
    {
      name: "Rohan Roy",
      role: "Co-Founder & Chief Innovation Officer",
      specialty: "Innovation & R&D",
      image: "/founder_innovation.png",
      bio: "Rohan headed sourcing divisions for multinational sourcing companies before heading innovation and incubation at India's top technology institute. He leads the holding group’s laboratory and R&D pipelines, pushing textiles into composite sectors like aviation, smart wearables, and eco-fibers.",
      highlight: "Ex-Director of Innovation & Incubation | 12+ Years in Technical Sourcing"
    }
  ];

  // Timeline Milestones
  const milestones = [
    {
      year: "2016",
      title: "The Genesis",
      description: "Three classmates graduate from the National Institute of Textile Technology, with a shared vision of disrupting traditional loom frameworks.",
      icon: <BookOpen size={20} />
    },
    {
      year: "2019",
      title: "Pillars Align",
      description: "After three years of gaining expertise in FMCG Marketing, Investment Banking, and Materials Research, the founders rejoin forces to launch Triweft Innovations.",
      icon: <Briefcase size={20} />
    },
    {
      year: "2021",
      title: "Supply Chain Vertical Integration",
      description: "Triweft acquires major spinning mills and converts them into smart technical weaving hubs, securing the base chain for advanced materials.",
      icon: <TrendingUp size={20} />
    },
    {
      year: "2024",
      title: "Luxury Brand Holding launch",
      description: "Launch of the premium fashion holding division and successful acquisition of three boutique couture labels, repositioning them for global scales.",
      icon: <Sparkles size={20} />
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
      {/* Overview Block */}
      <motion.div variants={itemVariants} className="section-title-wrap">
        <span className="section-subtitle">Our Journey</span>
        <h1 className="section-title">The Triweft Narrative</h1>
        <p style={{ maxWidth: '750px', margin: '2rem auto 0 auto', color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, textAlign: 'center' }}>
          Triweft was founded by three textile engineering graduates who realized that the intersection of traditional weaving techniques, global branding, and modern financial capital could shape a new luxury paradigm.
        </p>
      </motion.div>

      {/* Founders Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="section-title-wrap">
          <span className="section-subtitle">Founders' Profiles</span>
          <h2 style={{ fontSize: '2.5rem' }}>Leadership and Expertise</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '6rem' }}>
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 10px 30px rgba(30, 42, 56, 0.05)',
                border: '1px solid rgba(30, 42, 56, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
              }}
            >
              {/* Image Container with morph overlay on hover */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1.1', overflow: 'hidden', backgroundColor: 'var(--color-bg-light)' }}>
                <img
                  src={founder.image}
                  alt={founder.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  className="founder-photo"
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgba(30, 42, 56, 0.9) 0%, rgba(30, 42, 56, 0.2) 60%, transparent 100%)',
                  zIndex: 1
                }} />
                
                {/* Overlay Name on Image bottom */}
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', zIndex: 2, textAlign: 'left' }}>
                  <span style={{ color: '#FFC219', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {founder.specialty}
                  </span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.8rem', marginTop: '0.2rem' }}>
                    {founder.name}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500 }}>
                    {founder.role}
                  </p>
                </div>
              </div>

              {/* Bio Content */}
              <div style={{ padding: '2rem', textAlign: 'left', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <p style={{ color: '#666666', fontSize: '0.9rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem' }}>
                  {founder.bio}
                </p>
                <div style={{ borderTop: '1px solid rgba(30, 42, 56, 0.08)', paddingTop: '1rem' }}>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: '#FF533D', fontWeight: 600, fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Key Highlight
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#333333', marginTop: '0.2rem', display: 'block' }}>
                    {founder.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: '2rem 0' }}>
        <div className="section-title-wrap">
          <span className="section-subtitle">Milestones</span>
          <h2 style={{ fontSize: '2.5rem' }}>Evolution Timeline</h2>
        </div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
          
          {/* Vertical central connector line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: 'rgba(212, 160, 23, 0.3)',
            transform: 'translateX(-50%)',
            zIndex: 0
          }} />

          {milestones.map((m, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  alignItems: 'center',
                  width: '100%',
                  marginBottom: '4rem',
                  position: 'relative',
                  zIndex: 1
                }}
                className="timeline-item"
              >
                {/* Content Box */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  style={{
                    width: '45%',
                    padding: '2rem',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(30, 42, 56, 0.08)',
                    boxShadow: '0 8px 24px rgba(30, 42, 56, 0.03)',
                    textAlign: isLeft ? 'right' : 'left',
                  }}
                  className="timeline-content-box"
                >
                  <span style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: '#FF533D', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                    {m.year}
                  </span>
                  <h4 style={{ fontSize: '1.25rem', color: '#1E2A38', marginBottom: '0.75rem' }}>
                    {m.title}
                  </h4>
                  <p style={{ color: '#666666', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    {m.description}
                  </p>
                </motion.div>

                {/* Central circular node */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#1E2A38',
                  border: '3px solid #FFC219',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFC219',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                  zIndex: 2
                }}
                className="timeline-node"
                >
                  {m.icon}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
        .timeline-item:hover .timeline-node {
          background-color: #FF533D !important;
          border-color: #FFFFFF !important;
          color: #FFFFFF !important;
          transform: translateX(-50%) scale(1.1) !important;
          transition: all 0.3s ease;
        }
        .founder-photo:hover {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .timeline-item {
            justify-content: flex-end !important;
            padding-left: 50px;
          }
          .timeline-content-box {
            width: 100% !important;
            text-align: left !important;
          }
          .timeline-node {
            left: 20px !important;
            transform: translateX(0) !important;
          }
          .timeline-item:hover .timeline-node {
            transform: translateX(0) scale(1.1) !important;
          }
          /* Adjust vertical line */
          div[style*="left: '50%'"] {
            left: 20px !important;
          }
        }
      `}</style>
    </motion.div>
  );
};
