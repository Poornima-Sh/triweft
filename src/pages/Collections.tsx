import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Eye, X, Check } from 'lucide-react';

export const Collections: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'gowns' | 'suits' | 'textiles'>('all');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);

  const filterItems = [
    { id: 'all', label: 'All Showcase' },
    { id: 'gowns', label: 'Couture Gowns' },
    { id: 'suits', label: 'Bespoke Suits' },
    { id: 'textiles', label: 'Technical Textures' },
  ];

  const products = [
    {
      id: 1,
      title: "The Aurelia Gala Gown",
      category: "gowns",
      price: "$8,500",
      image: "/lookbook_gown.png",
      description: "A signature masterpiece crafted from organic burgundy silk, intricately woven with 24k gold threads in a fluid scroll pattern.",
      details: "This dress features our signature bio-silk blend which is fully compostable yet maintains a brilliant sheen. The golden accents are stitched using electro-conductive highlights that catch the light dynamically on movement.",
      sizes: ["US 2", "US 4", "US 6", "US 8", "Bespoke"],
      composition: "70% Organic Bio-Silk, 30% Metallic Gold Filament",
      dye: "Zero-Water Bio-Dyeing (Burgundy Ochre)"
    },
    {
      id: 2,
      title: "The Navy Sovereign Suit",
      category: "suits",
      price: "$4,200",
      image: "/lookbook_suit.png",
      description: "An elite double-breasted suit tailored from custom multi-axial technical merino wool, featuring real gold-plated buttons.",
      details: "Woven on our digital micro-looms, the fabric features hydrophobic nanotechnology that repels water and stains, while allowing active thermal breathing. Perfect for global leadership and long travel flights.",
      sizes: ["EU 48", "EU 50", "EU 52", "EU 54", "Bespoke"],
      composition: "90% Active Tech-Wool, 10% Smart Filament Blend",
      dye: "Eco-Friendly Deep Extraction Navy"
    },
    {
      id: 3,
      title: "Abstract Weave Gold-Navy Filament",
      category: "textiles",
      price: "$280 / meter",
      image: "/lookbook_textile.png",
      description: "A close-up showcasing our advanced double-faced luxury textile weave. Featuring custom warp-weft densities.",
      details: "This structural fabric is engineered for aerospace interior paneling and high-fashion structural silhouettes. It integrates natural linen fibers with carbon matrix cores for unparalleled tensile flex strength.",
      sizes: ["10 Meters Min", "50 Meters Roll", "100 Meters Custom"],
      composition: "60% Carbon Matrix core, 40% Flax Linen fibers",
      dye: "Undyed Natural Blue & Gold Metallic"
    }
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSize) return;
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      setSelectedProduct(null);
      setSelectedSize('');
    }, 3000);
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
        <span className="section-subtitle">The Lookbook</span>
        <h1 className="section-title">Luxury Collections</h1>
        <p style={{ maxWidth: '750px', margin: '2rem auto 0 auto', color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, textAlign: 'center' }}>
          Discover the physical manifestations of Triweft innovations. Every piece balances our patented materials science with absolute haute couture styling.
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
        {filterItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setFilter(item.id as any)}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '4px',
              border: filter === item.id ? '1px solid #FF533D' : '1px solid rgba(30,42,56,0.12)',
              backgroundColor: filter === item.id ? '#FF533D' : 'transparent',
              color: filter === item.id ? '#FFFFFF' : '#1E2A38',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              if (filter !== item.id) {
                e.currentTarget.style.borderColor = '#FFC219';
                e.currentTarget.style.color = '#FFC219';
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== item.id) {
                e.currentTarget.style.borderColor = 'rgba(30,42,56,0.12)';
                e.currentTarget.style.color = '#1E2A38';
              }
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Grid List */}
      <motion.div 
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem'
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(30,42,56,0.08)',
                boxShadow: '0 8px 24px rgba(30,42,56,0.03)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}
              onClick={() => {
                setSelectedProduct(product);
                setSelectedSize('');
              }}
            >
              {/* Image box */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '0.95', overflow: 'hidden', backgroundColor: 'var(--color-bg-light)' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* Hover action overlay */}
                <div 
                  className="product-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(30, 42, 56, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 2
                  }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E2A38' }}>
                    <Eye size={20} />
                  </div>
                </div>
              </div>

              {/* Text Info */}
               <div style={{ padding: '1.5rem', textAlign: 'left', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#FFC219', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem', display: 'block' }}>
                  {product.category === 'gowns' ? 'Couture Gown' : product.category === 'suits' ? 'Bespoke Suit' : 'Technical Weave'}
                </span>
                <h3 style={{ fontSize: '1.35rem', color: '#1E2A38', marginBottom: '0.5rem', flexGrow: 1 }}>
                  {product.title}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', borderTop: '1px solid rgba(30,42,56,0.06)', paddingTop: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#FF533D' }}>
                    {product.price}
                  </span>
                  <span style={{ color: '#1E2A38', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    Explore Details <ShoppingBag size={12} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(30, 42, 56, 0.75)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 100,
              padding: '1.5rem',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '100%',
                maxWidth: '920px',
                maxHeight: '90vh',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                overflowY: 'auto',
                boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
                border: '1px solid rgba(255, 194, 25, 0.3)',
                position: 'relative'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
                aria-label="Close details"
              >
                <X size={18} />
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                
                {/* Left: Product Image */}
                <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '380px', backgroundColor: 'var(--color-bg-light)' }}>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Right: Details Form */}
                 <div style={{ padding: '3rem 2.5rem', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#FFC219', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Holding Collection
                  </span>
                  <h2 style={{ fontSize: '2.2rem', marginTop: '0.25rem', marginBottom: '1rem', color: '#1E2A38' }}>
                    {selectedProduct.title}
                  </h2>
                  <span style={{ fontSize: '1.4rem', color: '#FF533D', fontWeight: 600, display: 'block', marginBottom: '1.5rem' }}>
                    {selectedProduct.price}
                  </span>

                  <p style={{ color: '#555555', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {selectedProduct.description}
                  </p>

                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '1.25rem 0', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                      <span style={{ fontWeight: 600, color: '#1E2A38', width: '100px' }}>Composition:</span>
                      <span style={{ color: '#666666' }}>{selectedProduct.composition}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem' }}>
                      <span style={{ fontWeight: 600, color: '#1E2A38', width: '100px' }}>Dye Method:</span>
                      <span style={{ color: '#666666' }}>{selectedProduct.dye}</span>
                    </div>
                  </div>

                  {/* Booking Selector Form */}
                  <form onSubmit={handleOrderSubmit}>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1E2A38', marginBottom: '0.75rem' }}>
                      Select Size/Length
                    </h4>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                      {selectedProduct.sizes.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelectedSize(s)}
                          style={{
                            padding: '0.5rem 1rem',
                            border: selectedSize === s ? '2px solid #FF533D' : '1px solid rgba(0,0,0,0.15)',
                            backgroundColor: selectedSize === s ? '#FF533D' : 'transparent',
                            color: selectedSize === s ? '#FFFFFF' : '#333333',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            fontFamily: 'var(--font-body)',
                            transition: 'all 0.2s'
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>

                    {orderSuccess ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2E7D32', fontWeight: 600, padding: '1rem', backgroundColor: 'rgba(46,125,50,0.08)', borderRadius: '6px' }}>
                        <Check size={20} /> Reserve Request Registered Successfully!
                      </div>
                    ) : (
                      <button
                        type="submit"
                        disabled={!selectedSize}
                        style={{
                          width: '100%',
                          backgroundColor: selectedSize ? '#FF533D' : '#CCCCCC',
                          color: '#FFFFFF',
                          border: 'none',
                          padding: '1.1rem',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          cursor: selectedSize ? 'pointer' : 'not-allowed',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.75rem',
                          transition: 'background-color 0.3s'
                        }}
                      >
                        Reserve Fit Consultation <ShoppingBag size={16} />
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        div[style*="aspectRatio"] {
          position: relative;
        }
        div[style*="aspectRatio"]:hover .product-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </motion.div>
  );
};
