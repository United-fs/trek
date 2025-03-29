import React from 'react';
import { motion } from 'framer-motion';
import { LockClosedIcon, CodeIcon, LayersIcon } from '@radix-ui/react-icons';

const achievements = [
  {
    title: 'Trusted Protection',
    description: 'Trusted by gamers worldwide',
    icon: LockClosedIcon,
    color: 'text-blue-500'
  },
  {
    title: '99.9% Cheat Detection',
    description: 'Advanced AI-powered detection',
    icon: CodeIcon,
    color: 'text-purple-600'
  },
  {
    title: '24/7 Continuous Monitoring',
    description: 'Real-time security updates',
    icon: LayersIcon,
    color: 'text-green-500'
  }
];

const AchievementsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-b from-black via-black to-black" />
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Achievements
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Our milestones in making gaming fair and fun for everyone
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              animate={{
                y: [-2, 2, -2],
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="p-8 backdrop-blur-xl relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: `
                    0 20px 40px rgba(0, 0, 0, 0.4),
                    0 -6px 10px rgba(255, 255, 255, 0.05),
                    0 3px 6px rgba(0, 0, 0, 0.3) inset,
                    0 -3px 6px rgba(255, 255, 255, 0.05) inset
                  `
                }}
              >
                {/* Ambient light effect */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)'
                  }}
                />
                
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)'
                  }}
                />

                <achievement.icon className="w-12 h-12 text-white/90 mb-6" />
                <h3 className="text-2xl font-bold mb-3 text-white/90">{achievement.title}</h3>
                <p className="text-white/70">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;