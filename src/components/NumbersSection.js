import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircledIcon, BadgeIcon, LayersIcon } from '@radix-ui/react-icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100 
    }
  }
};

const NumbersSection = () => {
  const metrics = [
    {
      icon: CheckCircledIcon,
      title: "Detection Rate",
      value: "99.9%",
      description: "AI-powered cheat detection accuracy"
    },
    {
      icon: BadgeIcon,
      title: "Games Protected",
      value: "500+",
      description: "Games using Trek Anticheat"
    },
    {
      icon: LayersIcon,
      title: "Players Secured",
      value: "1M+",
      description: "Active players protected"
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="relative py-24 overflow-hidden"
    >
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Trek Anticheat in Numbers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              variants={itemVariants}
              animate={{
                y: [-2, 2, -2],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: index * 0.2
                }
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

                <metric.icon className="w-14 h-14 text-white/90 mb-6" />
                <h3 className="text-4xl font-bold mb-3 text-white/90">{metric.value}</h3>
                <p className="text-lg font-medium text-white/70 mb-2">{metric.title}</p>
                <p className="text-sm text-white/50">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default NumbersSection;