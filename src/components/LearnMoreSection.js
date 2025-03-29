import React from 'react';
import { motion } from 'framer-motion';
import { 
  LockClosedIcon, 
  MagnifyingGlassIcon, 
  TargetIcon,
  CheckCircledIcon 
} from '@radix-ui/react-icons';

const LearnMoreSection = () => {
  const features = [
    {
      icon: TargetIcon,
      title: "Minecraft PvP Focus",
      description: "Specifically designed for Minecraft PvP environments where fair play is crucial for competitive integrity."
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Advanced Screenshare Tool",
      description: "Professional-grade scanning tool that helps server administrators conduct thorough screenshare sessions."
    },
    {
      icon: CheckCircledIcon,
      title: "Cheat Detection",
      description: "Comprehensive system scan to identify and report potential cheat software, ensuring fair gameplay."
    },
    {
      icon: LockClosedIcon,
      title: "Secure Environment",
      description: "Creates a trusted gaming environment by validating player systems during competitive matches."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden" id="learn-more">
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
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            Understanding Trek Anticheat
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 mb-8"
          >
            Trek Anticheat is a specialized scanning tool designed for Minecraft PvP servers, helping administrators maintain fair play through advanced screenshare capabilities.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-b from-white/10 to-white/5 rounded-3xl p-8 mb-16 backdrop-blur-xl border border-white/10"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white/90">How It Works</h3>
          <p className="text-white/70 mb-4">
            In Minecraft PvP environments, when a player is suspected of cheating, server administrators conduct a process called "screenshare." During this process, they inspect the accused player's computer for any signs of cheat software.
          </p>
          <p className="text-white/70">
            Trek Anticheat streamlines this process by providing a comprehensive scanning tool that can quickly and effectively identify potential cheat software, making the screenshare process more efficient and accurate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="p-8 backdrop-blur-xl relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
                }}
              >
                <feature.icon className="w-12 h-12 text-white/90 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white/90">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnMoreSection;
