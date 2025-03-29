import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon, 
  DownloadIcon,
  CheckCircledIcon,
  RocketIcon,
  StarIcon,
  InfoCircledIcon
} from '@radix-ui/react-icons';

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top gradient */}
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-black to-black" />
        
        {/* Ambient light effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
        </div>
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Hero Title */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="text-7xl md:text-8xl font-extrabold mb-8 gradient-text">
              Defend Your Game.
              <br />
              Preserve Fair Play.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Trek Anticheat uses advanced AI to detect and prevent cheating,
              ensuring competitive integrity in real-time.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: '0 20px 30px rgba(255, 255, 255, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              className="
                relative
                px-8 py-4
                text-lg font-semibold
                bg-gradient-to-br from-white to-white/80
                text-black
                rounded-2xl
                transition-all duration-300
                overflow-hidden
                group
              "
              style={{
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.4)'
              }}
              onClick={() => window.location.href = '#get-started'}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: '0 20px 30px rgba(0, 0, 0, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="
                relative
                px-8 py-4
                text-lg font-semibold
                text-white
                rounded-2xl
                transition-all duration-300
                overflow-hidden
                group
              "
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
              }}
              onClick={() => {
                const learnMoreSection = document.getElementById('learn-more');
                if (learnMoreSection) {
                  learnMoreSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2">
                Learn More
                <InfoCircledIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              className="glass-card p-10 hover-scale float-slow stagger-1"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="icon-container mb-8">
                <RocketIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-4 text-white">99.9%</h3>
              <p className="text-white/80 text-lg font-medium">Detection Rate</p>
            </motion.div>
            <motion.div 
              className="glass-card p-10 hover-scale float-medium stagger-2"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="icon-container mb-8">
                <CheckCircledIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-4 text-white">500+</h3>
              <p className="text-white/80 text-lg font-medium">Games Protected</p>
            </motion.div>
            <motion.div 
              className="glass-card p-10 hover-scale glow float-fast stagger-3"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="icon-container mb-8">
                <StarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-4 text-white">1M+</h3>
              <p className="text-white/80 text-lg font-medium">Players Secured</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;