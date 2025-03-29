import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DiscordLogoIcon, StarIcon, Cross1Icon } from '@radix-ui/react-icons';

const OwnerPage = ({ isOpen, onClose }) => {
  const [discordData, setDiscordData] = useState(null);
  const userId = "1200994711603789834";

  useEffect(() => {
    setDiscordData({
      username: "United",
      id: userId
    });
  }, []);

  if (!localStorage.getItem('trekPlusAuth')) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative bg-gradient-to-b from-black to-black/95 rounded-3xl overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
                
                {/* Grid overlay */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                                   linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                  }}
                />
              </div>

              <div className="relative z-10 p-8">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                >
                  <Cross1Icon className="w-6 h-6" />
                </button>

                <div className="text-center mb-16">
                  <motion.div
                    animate={{
                      y: [-2, 2, -2],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut"
                    }}
                    className="inline-block mb-6"
                  >
                    <StarIcon className="w-16 h-16 text-white" />
                  </motion.div>
                  <h1 className="text-5xl font-bold mb-6 gradient-text">Trek+ Owner</h1>
                  <p className="text-xl text-white/70">The mastermind behind Trek Anticheat</p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-b from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur-xl border border-white/10 mb-8"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-white/90">About Me</h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/10 rounded-xl">
                      <DiscordLogoIcon className="w-8 h-8 text-white/90" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-white/90">{discordData?.username}</p>
                      <p className="text-sm text-white/70">Discord ID: {discordData?.id}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    I'm United, the creator of Trek Anticheat. My mission is to ensure fair play in Minecraft PvP
                    by providing cutting-edge anti-cheat solutions. With Trek Anticheat, we're revolutionizing
                    the way server administrators handle cheat detection and player verification.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-6 backdrop-blur-xl border border-white/10"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-white/90">Vision</h3>
                    <p className="text-white/70">
                      Creating a fair and competitive environment for all Minecraft players through innovative
                      anti-cheat technology.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-6 backdrop-blur-xl border border-white/10"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-white/90">Mission</h3>
                    <p className="text-white/70">
                      Continuously improving and evolving Trek Anticheat to stay ahead of cheating methods
                      and maintain game integrity.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OwnerPage;
