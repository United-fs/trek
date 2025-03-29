import React from 'react';
import { motion } from 'framer-motion';
import { 
  LockClosedIcon, 
  CodeIcon, 
  LayersIcon,
  RocketIcon,
  CheckCircledIcon,
  LightningBoltIcon
} from '@radix-ui/react-icons';

const features = [
  {
    icon: CheckCircledIcon,
    title: 'Advanced Detection',
    description: 'AI-powered algorithms detect and prevent cheating in real-time with 99.9% accuracy.',
    color: 'primary'
  },
  {
    icon: LightningBoltIcon,
    title: 'Zero Performance Impact',
    description: 'Lightweight integration that won\'t affect your game\'s performance.',
    color: 'secondary'
  },
  {
    icon: LayersIcon,
    title: 'Multi-Layer Security',
    description: 'Comprehensive protection across game memory, network, and input systems.',
    color: 'accent'
  },
  {
    icon: RocketIcon,
    title: 'Easy Integration',
    description: 'Simple SDK that integrates with any game engine in minutes.',
    color: 'primary'
  },
  {
    icon: CodeIcon,
    title: 'Custom Rules',
    description: 'Define custom anti-cheat rules tailored to your game.',
    color: 'secondary'
  },
  {
    icon: LockClosedIcon,
    title: 'Secure Updates',
    description: 'Regular updates to counter new cheating methods.',
    color: 'accent'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="features">
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
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
          >
            Why Choose Trek?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted max-w-2xl mx-auto"
          >
            Advanced protection that keeps your game fair and fun
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              animate={{
                y: [-2, 2, -2],
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="p-8 rounded-2xl backdrop-blur-xl relative overflow-hidden"
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
                className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at center, rgba(${feature.color === 'primary' ? '138, 0, 179' : feature.color === 'secondary' ? '43, 78, 230' : '255, 86, 48'}, 0.2) 0%, transparent 70%)`
                }}
              />
              
              <div 
                className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${feature.color} to-${feature.color}/50 flex items-center justify-center mb-6 transform transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                style={{
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 -2px 6px rgba(255, 255, 255, 0.1)'
                }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white/90">{feature.title}</h3>
              <p className="text-lg text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="button-primary">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;