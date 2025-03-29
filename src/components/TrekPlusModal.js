import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cross1Icon } from '@radix-ui/react-icons';

const TrekPlusModal = ({ isOpen, onClose, onAuthenticated }) => {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (key === 'United'|| key === 'united') {
      localStorage.setItem('trekPlusAuth', 'true');
      onAuthenticated();
      onClose();
    } else {
      setError('Invalid key');
      setTimeout(() => setError(''), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal content */}
            <div className="relative bg-gradient-to-b from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur-xl border border-white/10">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <Cross1Icon className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2 gradient-text">Trek+</h2>
                <p className="text-white/70">Enter your key to access exclusive content</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Enter your key"
                    className="
                      w-full
                      px-4 py-3
                      bg-white/5
                      border border-white/10
                      rounded-xl
                      text-white
                      placeholder-white/30
                      focus:outline-none
                      focus:border-white/20
                      transition-colors
                    "
                  />
                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 mt-2 text-sm"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    w-full
                    py-3
                    bg-gradient-to-r from-white/20 to-white/10
                    hover:from-white/30 hover:to-white/20
                    border border-white/20
                    rounded-xl
                    text-white
                    font-semibold
                    transition-colors
                  "
                  type="submit"
                >
                  Access Trek+
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TrekPlusModal;
