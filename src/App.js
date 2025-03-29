import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  LockClosedIcon, 
  CodeIcon, 
  LayersIcon, 
  CheckCircledIcon,
  StarFilledIcon,
  BadgeIcon,
  RocketIcon,
  StarIcon
} from '@radix-ui/react-icons';

// Import components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import NumbersSection from './components/NumbersSection';
import AchievementsSection from './components/AchievementsSection';
import LearnMoreSection from './components/LearnMoreSection';
import OwnerPage from './components/OwnerPage';

function App() {
  const [activeFeature, setActiveFeature] = useState(null);
  const [isOwnerPageOpen, setIsOwnerPageOpen] = useState(false);
  const [scanStats, setScanStats] = useState({
    totalScans: 17782,
    cheatsDetected: 889,
    serverProtected: 177
  });

  // Calculate scan statistics based on persistent time-based calculation
  useEffect(() => {
    // Base date for calculations
    const baseDate = new Date(2025, 2, 28);
    const currentTime = new Date();

    // Calculate total minutes elapsed since base date
    const minutesElapsed = Math.floor((currentTime - baseDate) / (1000 * 60));

    // Calculate scans based on elapsed time
    // 6 scans per minute
    const calculateTimeBasedScans = () => {
      // Base starting point
      const baseScans = 10000;
      
      // Add 6 scans for each minute elapsed
      const totalScans = baseScans + (minutesElapsed * 6);
      
      // Derived stats based on total scans
      const cheatsDetected = Math.floor(totalScans * 0.05); // 5% of scans
      const serverProtected = Math.floor(totalScans * 0.01); // 1% of scans

      return {
        totalScans,
        cheatsDetected,
        serverProtected
      };
    };

    setScanStats(calculateTimeBasedScans());
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Noise Texture */}
      <div 
        className="
          fixed 
          inset-0 
          pointer-events-none 
          opacity-10 
          dark:opacity-5
          bg-blend-overlay
          z-[-20]
          bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%3E%3Cpath%20opacity%3D%22.5%22%20d%3D%22M96%2095h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]
        "
      />

      <div className="relative z-10">
        <Header 
          scanStats={scanStats} 
          onTrekPlusAuth={() => setIsOwnerPageOpen(true)} 
        />
        <HeroSection />
        <LearnMoreSection />
        <FeaturesSection 
          features={[
            {
              icon: LockClosedIcon,
              title: 'Advanced Detection',
              description: 'State-of-the-art cheat detection algorithms'
            },
            {
              icon: CodeIcon,
              title: 'Real-time Scanning',
              description: 'Instant cheat detection and prevention'
            },
            {
              icon: LayersIcon,
              title: 'Multi-layer Protection',
              description: 'Comprehensive security measures'
            }
          ]}
          activeFeature={activeFeature} 
          setActiveFeature={setActiveFeature} 
        />
        <NumbersSection scanStats={scanStats} />
        <AchievementsSection achievements={[
          {
            icon: CheckCircledIcon,
            title: 'Verified Scans',
            description: 'Comprehensive cheat detection',
            color: 'text-white/90'
          },
          {
            icon: StarFilledIcon,
            title: 'Advanced Protection',
            description: 'Multi-layered security approach',
            color: 'text-white/90'
          },
          {
            icon: RocketIcon,
            title: 'Performance Optimized',
            description: 'Minimal system impact',
            color: 'text-white/90'
          }
        ]} />

        {/* Owner Page Modal */}
        <OwnerPage 
          isOpen={isOwnerPageOpen} 
          onClose={() => setIsOwnerPageOpen(false)} 
        />
      </div>
    </motion.div>
  );
}

export default App;
