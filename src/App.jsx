import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Gift } from 'lucide-react';

export default function App() {
  const [page, setPage] = useState(1);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [showSurprise, setShowSurprise] = useState(false);
  const [typedText, setTypedText] = useState('');

  const fullLetter = `Dear Tanisha,

You are not just special to me — you are the warmth in my thoughts, the smile behind my days, and the most beautiful feeling in my heart. 🌷

Every conversation with you feels magical, every moment feels worth remembering, and every little smile of yours means the world to me. ✨

You are my forever best friend, my comfort person, and the sweetest secret love I hold close to my heart. 💖

Forever yours,
Your best friend & secret admirer 💌`;

  const hearts = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${14 + Math.random() * 22}px`,
        delay: `${i * 0.15}s`,
      })),
    []
  );

  useEffect(() => {
    if (page !== 3) return;

    let i = 0;
    setTypedText('');

    const interval = setInterval(() => {
      if (i < fullLetter.length) {
        setTypedText((prev) => prev + fullLetter[i]);
        i += 1;
      } else {
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [page]);

  const moveNoButton = () => {
    setNoPos({
      x: Math.floor(Math.random() * 260) - 130,
      y: Math.floor(Math.random() * 120) - 60,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100 flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-300/70"
          style={{
            left: heart.left,
            top: heart.top,
            fontSize: heart.size,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: parseFloat(heart.delay),
          }}
        >
          💖
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl rounded-[2rem] bg-white/80 shadow-2xl border border-white/60 overflow-hidden relative z-10"
      >
        <div className="h-2 bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500" />

        <div className="p-10">
          <AnimatePresence mode="wait">
            {page === 1 && (
              <motion.div
                key="page1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center min-h-[560px] flex flex-col justify-center items-center"
              >
                <div className="text-8xl mb-6">🐱💕</div>

                <h1 className="text-5xl font-bold text-pink-600 mb-4">
                  Will You Be My Forever Best Friend & Secret Crush?
                </h1>

                <p className="text-xl text-gray-600 mb-10">
                  Tanisha, this little page was made only for you ✨
                </p>

                <div className="relative h-28 w-full flex justify-center items-center gap-8">
                  <button
                    onClick={() => setPage(2)}
                    className="px-10 py-4 rounded-full bg-pink-500 text-white font-semibold text-lg shadow-xl"
                  >
                    Yes 💖
                  </button>

                  <button
                    onMouseEnter={moveNoButton}
                    onClick={() => setPage(4)}
                    style={{
                      transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                    }}
                    className="absolute px-8 py-4 rounded-full bg-white border border-pink-200 shadow-md text-gray-600"
                  >
                    No 🙈
                  </button>
                </div>
              </motion.div>
            )}

            {page === 4 && (
              <motion.div
                key="page4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-[560px] flex flex-col justify-center items-center text-center"
              >
                <div className="max-w-2xl rounded-[2rem] p-10 bg-pink-100 shadow-xl">
                  <div className="text-7xl mb-6">🥺💖</div>

                  <h2 className="text-4xl font-bold text-rose-500 mb-6">
                    Please Don’t Say No...
                  </h2>

                  <p className="text-xl text-gray-700 leading-9 mb-8">
                    Tanisha, this page was made with genuine affection,
                    warmth, and a heart full of feelings.
                    <br />
                    <br />
                    Please give this friendship and this sweet little place
                    in my heart a chance ✨
                  </p>

                  <button
                    onClick={() => setPage(2)}
                    className="px-10 py-4 rounded-full bg-pink-500 text-white font-semibold"
                  >
                    Okay, I Accept 💕
                  </button>
                </div>
              </motion.div>
            )}

            {page === 2 && (
              <motion.div
                key="page2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-[560px] flex flex-col justify-center"
              >
                <h2 className="text-4xl font-bold text-center text-pink-600 mb-8">
                  Terms & Conditions 💌
                </h2>

                <div className="grid gap-4">
                  {[
                    'Unlimited hugs, support, and care 💖',
                    'Daily cute cat memes mandatory 🐾',
                    'Lifetime rights to make you smile ✨',
                    'Forever BFF and secret crush status 🌸',
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-white shadow-md border border-pink-100 text-lg"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <button
                    onClick={() => setPage(3)}
                    className="px-10 py-4 rounded-full bg-pink-500 text-white font-semibold"
                  >
                    I Accept 💕
                  </button>
                </div>
              </motion.div>
            )}

            {page === 3 && (
              <motion.div
                key="page3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-[560px]"
              >
                <div className="rounded-[2rem] p-8 bg-pink-50 shadow-inner border border-pink-100">
                  <h2 className="text-4xl font-bold text-center text-pink-600 mb-8">
                    A Letter for Tanisha 💕
                  </h2>

                  <div className="text-lg text-gray-700 whitespace-pre-line min-h-[280px] leading-8">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </div>

                  <div className="text-center mt-10">
                    <button
                      onClick={() => setShowSurprise(true)}
                      className="px-10 py-4 rounded-full bg-fuchsia-500 text-white font-semibold shadow-xl"
                    >
                      🎁 Open Surprise
                    </button>
                  </div>

                  {showSurprise && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-8 rounded-3xl p-8 bg-pink-500 text-white text-center shadow-2xl"
                    >
                      <div className="flex justify-center gap-3 mb-4">
                        <Heart className="w-8 h-8" />
                        <Sparkles className="w-8 h-8" />
                        <Gift className="w-8 h-8" />
                      </div>

                      <p className="text-2xl font-semibold leading-relaxed">
                        Tanisha, you are my favorite person, my safest
                        friendship, and the sweetest love hidden in my
                        heart forever 💖
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
