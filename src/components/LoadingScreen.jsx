import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const LOADING_DURATION = 10000;

const loadingTexts = [
  'Learn by Gwd',
  'Coffee First, Code Later',
  'Making Bugs Disappear',
  'Just Keep Shipping'
];

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const intervalPerText = LOADING_DURATION / loadingTexts.length;

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / LOADING_DURATION) * 100, 100);
      setProgress(newProgress);

      const newIndex = Math.min(
        Math.floor(elapsed / intervalPerText),
        loadingTexts.length - 1
      );
      setCurrentIndex(newIndex);

      if (newProgress >= 100) {
        clearInterval(progressInterval);
      }
    }, 30);

    const completeTimeout = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, LOADING_DURATION + 200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          {/* Background grid subtle */}
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-8"
            >
              <Logo variant="icon" size="large" />
            </motion.div>

            {/* Teks dengan animasi sederhana */}
            <div className="flex items-center justify-center min-h-[80px] mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center"
                >
                  <span className="text-xl md:text-3xl font-light text-black font-pixel">
                    {loadingTexts[currentIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Bar */}
            <div className="w-48 h-[2px] bg-black/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-black rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage */}
            <motion.p
              className="text-xs text-black/50 mt-4 font-pixel tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {Math.round(progress)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
