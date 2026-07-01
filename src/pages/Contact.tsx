import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const locations = [
    { id: 'delhi', name: 'New Delhi HQ', x: 280, y: 195, role: 'Corporate HQ & Spin Labs' },
    { id: 'milan', name: 'Milan Studio', x: 200, y: 135, role: 'Couture Design Atelier' },
    { id: 'tokyo', name: 'Tokyo Lab', x: 345, y: 155, role: 'Bio-Polymer Material Lab' },
    { id: 'sf', name: 'San Francisco Office', x: 75, y: 145, role: 'Tech Wearables Lab' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container"
      style={{ paddingTop: '150px', paddingBottom: '80px', boxSizing: 'border-box' }}
    >
      {/* Title */}
      <div className="section-title-wrap">
        <span className="section-subtitle">Get in Touch</span>
        <h1 className="section-title">Connect & Collaborate</h1>
        <p style={{ maxWidth: '750px', margin: '2rem auto 0 auto', color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, textAlign: 'center' }}>
          Have an inquiry, investment pitch, or custom weaving design request? Send us a message and our team will connect with you.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
        
        {/* Contact Form Side */}
        <div className="glass-card" style={{ position: 'relative', textAlign: 'left', overflow: 'hidden' }}>
          
          <AnimatePresence>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#FFFFFF',
                  zIndex: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  style={{ color: '#00A86B', marginBottom: '1.5rem' }}
                >
                  <CheckCircle size={64} />
                </motion.div>
                <h3 style={{ fontSize: '2rem', color: '#1E2A38', marginBottom: '1rem' }}>Message Received</h3>
                <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '300px' }}>
                  Thank you for connecting with Triweft Innovations. Our team will respond to your inquiry within 24 hours.
                </p>

                {/* Micro Confetti Particle Burst using Framer Motion */}
                <div style={{ position: 'relative', marginTop: '1.5rem', width: '100px', height: '20px' }}>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      style={{
                        position: 'absolute',
                        width: '8px',
                        height: '8px',
                        borderRadius: i % 2 === 0 ? '50%' : '2px',
                        backgroundColor: i % 3 === 0 ? '#FFC219' : i % 3 === 1 ? '#FF533D' : '#35A7DF',
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: [0, (Math.random() - 0.5) * 160],
                        y: [0, (Math.random() - 0.5) * 160],
                        scale: [1, 0],
                        rotate: [0, 360]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#1E2A38' }}>Send a Message</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                required
                placeholder=" "
                className="form-control"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label className="form-label">Full Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                required
                placeholder=" "
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label className="form-label">Email Address</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                required
                placeholder=" "
                className="form-control"
                value={formData.subject}
                onChange={handleInputChange}
              />
              <label className="form-label">Subject</label>
            </div>

            <div className="form-group" style={{ marginBottom: '2.5rem' }}>
              <textarea
                name="message"
                required
                placeholder=" "
                className="form-control form-textarea"
                value={formData.message}
                onChange={handleInputChange}
              />
              <label className="form-label">Tell us about your inquiry...</label>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              Submit Inquiry <Send size={16} />
            </button>
          </form>
        </div>

        {/* Global Presence Map Side */}
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Info cards */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1E2A38' }}>Global Headquarters</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin style={{ color: '#FFC219', marginTop: '4px', flexShrink: 0 }} />
                <p style={{ color: '#555555', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  Triweft Tower, 12th Floor, Innovation District, Sector 5, New Delhi, India
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Mail style={{ color: '#FF533D', flexShrink: 0 }} />
                <p style={{ color: '#555555', fontSize: '0.9rem' }}>hello@triweft.com</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Phone style={{ color: '#1E2A38', flexShrink: 0 }} />
                <p style={{ color: '#555555', fontSize: '0.9rem' }}>+91 11 4059 8833</p>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.08)', margin: '1.5rem 0' }} />
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="social-connect-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><circle cx="4" cy="4" r="2"></circle><rect x="2" y="9" width="4" height="12"></rect></svg>
              </a>
              <a href="#" className="social-connect-btn" aria-label="Twitter/X">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="social-connect-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* SVG Map Section */}
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#1E2A38' }}>Global Operations Map</h3>
            <div className="map-container">
              
              {/* Custom abstract vector styled map */}
              <svg 
                viewBox="0 0 400 260" 
                style={{ width: '100%', height: '100%', display: 'block', backgroundColor: 'var(--color-primary)' }}
              >
                {/* Simplified continental outlines */}
                <path d="M50 80 Q70 60 90 70 T120 90 T140 120 T110 160 T70 140 Z" fill="#2E4057" opacity="0.3" /> {/* North America */}
                <path d="M160 80 Q190 70 210 90 T230 110 T200 130 T175 110 Z" fill="#2E4057" opacity="0.3" /> {/* Europe */}
                <path d="M210 120 Q240 120 270 140 T290 190 T240 210 T210 160 Z" fill="#2E4057" opacity="0.3" /> {/* Africa */}
                <path d="M240 90 Q300 80 340 100 T360 140 T310 180 T260 130 Z" fill="#2E4057" opacity="0.3" /> {/* Asia */}
                <path d="M330 180 Q360 170 380 190 T350 220 Z" fill="#2E4057" opacity="0.3" /> {/* Australia */}
 
                {/* Connections (Threads) radiating between office nodes */}
                <AnimatePresence>
                  {activeLocation && (
                    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }}>
                      <line x1="280" y1="195" x2="200" y2="135" stroke="#FFC219" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="280" y1="195" x2="345" y2="155" stroke="#FFC219" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="280" y1="195" x2="75" y2="145" stroke="#FFC219" strokeWidth="1" strokeDasharray="3 3" />
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Pulsing Locator Dots */}
                {locations.map((loc) => (
                  <g 
                    key={loc.id} 
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActiveLocation(activeLocation === loc.id ? null : loc.id)}
                  >
                    {/* Ripple circle */}
                    <circle cx={loc.x} cy={loc.y} r="8" fill={loc.id === 'delhi' ? '#FF533D' : '#FFC219'} opacity="0.4">
                      <animate attributeName="r" values="4;12;4" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Central dot */}
                    <circle cx={loc.x} cy={loc.y} r="4" fill={loc.id === 'delhi' ? '#FF533D' : '#FFC219'} />
                  </g>
                ))}
              </svg>

              {/* Popover overlay label inside the container */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  backgroundColor: 'rgba(30, 42, 56, 0.95)',
                  border: '1px solid rgba(255, 194, 25, 0.3)',
                  borderRadius: '6px',
                  padding: '0.75rem 1rem',
                  color: '#FFFFFF',
                  fontSize: '0.8rem',
                  transition: 'all 0.3s ease',
                  opacity: activeLocation ? 1 : 0,
                  transform: activeLocation ? 'translateY(0)' : 'translateY(10px)',
                  pointerEvents: activeLocation ? 'auto' : 'none'
                }}
              >
                {activeLocation && (
                  <div>
                    <strong style={{ color: '#FFC219', display: 'block', fontSize: '0.9rem' }}>
                      {locations.find(l => l.id === activeLocation)?.name}
                    </strong>
                    <span style={{ color: 'rgba(255,255,255,0.8)' }}>
                      {locations.find(l => l.id === activeLocation)?.role}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .social-connect-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(30,42,56,0.12);
          color: #1E2A38;
          background-color: transparent;
          transition: all 0.3s ease;
        }
        .social-connect-btn:hover {
          background-color: #FF533D;
          color: #FFFFFF;
          border-color: #FF533D;
          transform: translateY(-2px);
        }
      `}</style>
    </motion.div>
  );
};
