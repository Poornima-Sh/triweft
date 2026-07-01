import React, { useState } from 'react';
import { Layers, Globe, Mail, ArrowRight } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#1A2A40',
        color: '#FFFFFF',
        padding: '5rem 0 2rem 0',
        borderTop: '1px solid rgba(212, 160, 23, 0.2)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
            textAlign: 'left',
          }}
        >
          {/* Logo and About */}
          <div>
            <div 
              onClick={() => setCurrentPage('home')}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                cursor: 'pointer',
                marginBottom: '1.5rem'
              }}
            >
              <Layers style={{ color: '#D4A017', width: '28px', height: '28px' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.3rem', letterSpacing: '0.05em' }}>
                  TRIWEFT
                </span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.6rem', color: '#D4A017', letterSpacing: '0.2em' }}>
                  INNOVATIONS
                </span>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              A premium holding company shaping the future of luxury fashion, supply chain efficiency, and cross-industry innovations.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Twitter/X">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#D4A017', fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['home', 'about', 'vision', 'innovation', 'collections', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setCurrentPage(item)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textTransform: 'capitalize',
                      padding: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#D4A017';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {item === 'about' ? 'About Us' : item === 'vision' ? 'Our Vision' : item === 'innovation' ? 'Innovations' : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: '#D4A017', fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Corporate Office
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.6 }}>
              Triweft Tower, 12th Floor<br />
              Innovation District, Sector 5<br />
              New Delhi, India
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Mail size={16} style={{ color: '#D4A017' }} />
              info@triweft.com
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe size={16} style={{ color: '#D4A017' }} />
              www.triweft.com
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: '#D4A017', fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Newsletter
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Subscribe to receive updates on our latest holding ventures, brand releases, and textile innovations.
            </p>
            {isSubscribed ? (
              <div style={{ color: '#D4A017', fontSize: '0.9rem', fontWeight: 500 }}>
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', position: 'relative' }}>
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRight: 'none',
                    padding: '0.8rem 1rem',
                    color: '#FFFFFF',
                    borderRadius: '4px 0 0 4px',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#D4A017'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  style={{
                    backgroundColor: '#7A1F2B',
                    border: 'none',
                    color: '#FFFFFF',
                    padding: '0 1.25rem',
                    borderRadius: '0 4px 4px 0',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D4A017'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7A1F2B'}
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)', marginBottom: '2rem' }}></div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
          }}
          className="md:flex-row"
        >
          <p>© {currentYear} Triweft Innovations Private Limited. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e)=>e.currentTarget.style.color='#FFFFFF'} onMouseLeave={(e)=>e.currentTarget.style.color='rgba(255,255,255,0.5)'}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e)=>e.currentTarget.style.color='#FFFFFF'} onMouseLeave={(e)=>e.currentTarget.style.color='rgba(255,255,255,0.5)'}>Terms of Service</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e)=>e.currentTarget.style.color='#FFFFFF'} onMouseLeave={(e)=>e.currentTarget.style.color='rgba(255,255,255,0.5)'}>Sitemap</a>
          </div>
        </div>
      </div>

      <style>{`
        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.05);
          color: #FFFFFF;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .social-icon-btn:hover {
          background-color: #D4A017;
          color: #1A2A40;
          transform: translateY(-3px);
        }
        @media (min-width: 768px) {
          .md\\:flex-row {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
};
