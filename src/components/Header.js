import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HamburgerMenuIcon,
  Cross1Icon
} from '@radix-ui/react-icons';
import TrekPlusModal from './TrekPlusModal';

const Header = ({ scanStats, onTrekPlusAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrekPlusOpen, setIsTrekPlusOpen] = useState(false);

  const handleTrekPlusAuth = () => {
    setIsTrekPlusOpen(false);
    onTrekPlusAuth();
  };

  return (
    <>
      {/* Fixed Crown Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed left-6 top-6 z-[100] relative group"
        onClick={() => setIsTrekPlusOpen(true)}
      >
        {/* Crown SVG */}
        <svg 
          viewBox="0 0 50 50" 
          className="w-10 h-10"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))'
          }}
        >
          <path
            d="M25 5 L45 20 L40 40 L10 40 L5 20 Z"
            fill="url(#crownGradient)"
            stroke="rgba(255, 215, 0, 0.8)"
            strokeWidth="2"
          />
          <circle cx="10" cy="20" r="3" fill="#FFD700"/>
          <circle cx="25" cy="15" r="3" fill="#FFD700"/>
          <circle cx="40" cy="20" r="3" fill="#FFD700"/>
          <defs>
            <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Glint effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0 w-full h-full">
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 animate-ping"
              style={{
                background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%)'
              }}
            />
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8"
              style={{
                background: 'radial-gradient(circle, rgba(255, 215, 0, 0.5) 0%, transparent 70%)'
              }}
            />
          </div>
        </div>
      </motion.button>

      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8 ml-20">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2"
              >
                <span className="text-lg font-bold gradient-text">Trek Anticheat</span>
              </motion.div>

              {/* Stats - Desktop */}
              <div className="hidden md:flex items-center space-x-6">
                <div className="glass-card px-4 py-2 flex items-center space-x-3">
                  <div className="text-sm">
                    <span className="text-white/70 mr-2">Total Scans:</span>
                    <motion.span 
                      key={scanStats.totalScans}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="font-bold text-white"
                    >
                      {scanStats.totalScans.toLocaleString()}
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <a 
                  href="#features" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Features
                </a>
                <a 
                  href="#learn-more" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Learn More
                </a>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    px-6 py-2
                    text-sm font-semibold
                    bg-gradient-to-br from-white to-white/80
                    text-black
                    rounded-xl
                    transition-all duration-300
                  "
                  onClick={() => window.location.href = '#get-started'}
                >
                  Get Started
                </motion.button>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <Cross1Icon className="w-6 h-6 text-white" />
              ) : (
                <HamburgerMenuIcon className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  <a 
                    href="#features"
                    className="text-white/70 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a 
                    href="#learn-more"
                    className="text-white/70 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Learn More
                  </a>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="
                      px-6 py-2
                      text-sm font-semibold
                      bg-gradient-to-br from-white to-white/80
                      text-black
                      rounded-xl
                      transition-all duration-300
                      text-center
                    "
                    onClick={() => {
                      window.location.href = '#get-started';
                      setIsMenuOpen(false);
                    }}
                  >
                    Get Started
                  </motion.button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Trek+ Modal */}
      <TrekPlusModal 
        isOpen={isTrekPlusOpen}
        onClose={() => setIsTrekPlusOpen(false)}
        onAuthenticated={handleTrekPlusAuth}
      />
    </>
  );
};

export default Header;