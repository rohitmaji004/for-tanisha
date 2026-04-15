import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Gift } from 'lucide-react';

export default function App() {
  const [page, setPage] = useState(1);
  const [showSurprise, setShowSurprise] = useState(false);
  const [typedText, setTypedText] = useState('');

  const letter = `Dear Tanisha,\n\nYou are the warmth behind my thoughts, the calm in my heart, and the most beautiful feeling I have ever known. Every conversation with you feels magical, every smile of yours stays with me, and every moment becomes a memory I want to keep forever.\n\nTo me, you are my closest friend, my comfort, and the sweetest place in my heart. 💖\n\nForever yours,\nRohit ✨`;

  const hearts = useMemo(
    () => Array.from({ length: 16 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: i * 0.2,
      size: 14 + Math.random() * 18,
    })),
    []
  );

  useEffect(() => {
    if (page !== 3) return;
    let i = 0;
    setTypedText('');
    const interval = setInterval(() => {
      if (i < letter.length) {
        setTypedText((prev) => prev + letter[i]);
        i++;
      } else clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [page]);

  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff1f2 0%, #fdf2f8 50%, #faf5ff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Inter, Arial, sans-serif',
    },
    card: {
      width: '100%',
      maxWidth: '960px',
      background: 'rgba(255,255,255,0.92)',
      borderRadius: '32px',
      boxShadow: '0 25px 80px rgba(244,114,182,0.18)',
      padding: '56px',
      position: 'relative',
      zIndex: 2,
      border: '1px solid rgba(255,255,255,0.7)',
    },
    button: {
      background: 'linear-gradient(90deg,#ec4899,#f43f5e)',
      color: 'white',
      border: 'none',
      borderRadius: '999px',
      padding: '16px 32px',
      fontSize: '18px',
      fontWeight: 600,
      cursor: 'pointer',
      boxShadow: '0 12px 30px rgba(244,114,182,0.3)',
    },
  };

  return (
    <div style={styles.page}>
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          style={{
            position: 'absolute',
            left: h.left,
            top: '10%',
            fontSize: `${h.size}px`,
            opacity: 0.6,
          }}
          animate={{ y: [0, 500, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, delay: h.delay }}
        >
          💖
        </motion.div>
      ))}

      <div style={styles.card}>
        <AnimatePresence mode="wait">
          {page === 1 && (
            <motion.div key="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '84px', marginBottom: '16px' }}>🌸💖</div>
                <h1 style={{ fontSize: '48px', marginBottom: '12px', color: '#be185d' }}>
                  Will You Be My Forever Best Friend & Special Person?
                </h1>
                <p style={{ fontSize: '20px', color: '#6b7280', marginBottom: '40px' }}>
                  A little premium page made only for Tanisha ✨
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                  <button style={styles.button} onClick={() => setPage(2)}>Yes 💕</button>
                  <button style={{ ...styles.button, background: '#ffffff', color: '#374151', border: '1px solid #fbcfe8' }} onClick={() => setPage(4)}>No 🙈</button>
                </div>
              </div>
            </motion.div>
          )}

          {page === 4 && (
            <motion.div key="reject" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '72px' }}>🥺💌</div>
              <h2 style={{ fontSize: '42px', color: '#e11d48' }}>Please Don’t Say No...</h2>
              <p style={{ fontSize: '20px', lineHeight: 1.8, color: '#4b5563', margin: '24px 0' }}>
                This page was made with genuine feelings and a heart full of affection. Please give this friendship and this special bond a chance. You truly mean a lot to me.
              </p>
              <button style={styles.button} onClick={() => setPage(2)}>Okay, I Accept 💖</button>
            </motion.div>
          )}

          {page === 2 && (
            <motion.div key="terms" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 style={{ textAlign: 'center', fontSize: '40px', color: '#be185d' }}>Terms & Conditions 💌</h2>
              <div style={{ display: 'grid', gap: '16px', marginTop: '32px' }}>
                {['Unlimited care and support 💖', 'Daily smile guarantee ✨', 'Forever friendship promise 🌸', 'Lifetime cute cat memes 🐾'].map((item, i) => (
                  <div key={i} style={{ padding: '20px', borderRadius: '20px', background: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>{item}</div>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <button style={styles.button} onClick={() => setPage(3)}>I Accept 💕</button>
              </div>
            </motion.div>
          )}

          {page === 3 && (
            <motion.div key="letter" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 style={{ fontSize: '42px', textAlign: 'center', color: '#be185d' }}>A Letter for Tanisha 💕</h2>
              <div style={{ marginTop: '24px', fontSize: '20px', lineHeight: 1.9, color: '#374151', whiteSpace: 'pre-line', minHeight: '260px' }}>
                {typedText}<span style={{ opacity: 0.7 }}>|</span>
              </div>
              <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <button style={styles.button} onClick={() => setShowSurprise(true)}>🎁 Open Surprise</button>
              </div>
              {showSurprise && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ marginTop: '28px', padding: '28px', borderRadius: '24px', background: 'linear-gradient(90deg,#ec4899,#f43f5e)', color: 'white', textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
                    <Heart size={28} /> <Sparkles size={28} /> <Gift size={28} />
                  </div>
                  <p style={{ fontSize: '24px', fontWeight: 600 }}>
                    Tanisha, you are my favorite person, my safest friendship, and the sweetest feeling in my heart forever 💖
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
