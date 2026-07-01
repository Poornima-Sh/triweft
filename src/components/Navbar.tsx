import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'vision', label: 'Our Vision' },
    { id: 'innovation', label: 'Innovations' },
    { id: 'collections', label: 'Collections' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-4 right-4 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'top-2 md:top-3' 
            : 'top-4 md:top-6'
        }`}
        style={{
          boxSizing: 'border-box',
          width: 'calc(100% - 2rem)',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isScrolled ? '0.75rem 2rem' : '1.25rem 2.5rem',
            borderRadius: '12px',
            backgroundColor: isScrolled 
              ? 'rgba(30, 42, 56, 0.95)' // Deep navy slate 
              : 'rgba(30, 42, 56, 0.85)',
            border: isScrolled
              ? '1px solid rgba(255, 194, 25, 0.3)' // Subtle gold border
              : '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: isScrolled
              ? '0 12px 30px rgba(0, 0, 0, 0.15)'
              : '0 4px 20px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            transition: 'padding 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, background-color 0.3s',
          }}
        >
          {/* Brand Logo */}
          <div 
            onClick={() => setCurrentPage('home')}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              cursor: 'pointer' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg viewBox="0 0 100 100" width="36" height="36" style={{ display: 'block' }}>
                {/* Yellow Line (Bottom) */}
                <line x1="10" y1="75" x2="90" y2="75" stroke="#FFC219" strokeWidth="8" strokeLinecap="round" />
                {/* Red Line (Right) */}
                <line x1="40" y1="25" x2="85" y2="85" stroke="#FF533D" strokeWidth="8" strokeLinecap="round" />
                {/* Blue Line (Left) */}
                <line x1="15" y1="85" x2="60" y2="25" stroke="#35A7DF" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span 
                style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 600, 
                  fontSize: '1.5rem', 
                  color: '#FFFFFF',
                  letterSpacing: '0.05em',
                  lineHeight: 1
                }}
              >
                TRIWEFT
              </span>
              <span 
                style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontWeight: 500, 
                  fontSize: '0.65rem', 
                  color: '#FFC219',
                  letterSpacing: '0.25em',
                  marginTop: '2px',
                  lineHeight: 1
                }}
              >
                INNOVATIONS
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav 
            style={{ 
              display: 'none', 
              alignItems: 'center', 
              gap: '0.5rem' 
            }}
            className="md:flex"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredTab(item.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                  onClick={() => setCurrentPage(item.id)}
                  style={{
                    position: 'relative',
                    padding: '0.6rem 1.2rem',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: isActive ? '#FFC219' : '#FFFFFF',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {/* Sliding Hover Overlay */}
                  {hoveredTab === item.id && (
                    <motion.div
                      layoutId="navHover"
                      className="absolute inset-0"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '6px',
                        zIndex: -1,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Active Page Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveLine"
                      className="absolute bottom-0 left-4 right-4 h-0.5"
                      style={{
                        backgroundColor: '#FFC219',
                        borderRadius: '2px',
                      }}
                    />
                  )}

                  {item.label}
                </div>
              );
            })}

            {/* CTA in Navbar */}
            <button
              onClick={() => setCurrentPage('contact')}
              style={{
                marginLeft: '1rem',
                backgroundColor: '#FF533D',
                color: '#FFFFFF',
                border: '1px solid #FF533D',
                padding: '0.5rem 1.25rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                borderRadius: '4px',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#FFC219';
                e.currentTarget.style.color = '#FFC219';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF533D';
                e.currentTarget.style.borderColor = '#FF533D';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              Connect
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
              }}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen 
                ? <X style={{ width: '24px', height: '24px' }} /> 
                : <Menu style={{ width: '24px', height: '24px' }} />
              }
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '90px',
              left: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(30, 42, 56, 0.98)',
              border: '1px solid rgba(255, 194, 25, 0.2)',
              borderRadius: '12px',
              padding: '1.5rem',
              zIndex: 49,
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
            className="md:hidden"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      color: isActive ? '#FFC219' : '#FFFFFF',
                      borderLeft: isActive ? '3px solid #FFC219' : '3px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  backgroundColor: '#FF533D',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '1rem',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  marginTop: '0.5rem',
                  cursor: 'pointer',
                }}
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Fallback to render in tailwind style rules for hide/show nav in mobile */}
      <style>{`
        @media (min-width: 768px) {
          .md\\:flex { display: flex !important; }
          .md\\:hidden { display: none !important; }
        }
        @media (max-width: 767px) {
          .md\\:hidden { display: block !important; }
        }
        .absolute { position: absolute; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .bottom-0 { bottom: 0; }
        .h-0\\.5 { height: 0.125rem; }
        .left-4 { left: 1rem; }
        .right-4 { right: 1rem; }
      `}</style>
    </>
  );
};
