import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Layers, Zap } from 'lucide-react';
import { Reveal3D } from './UI/Reveal3D';

const Hero: React.FC = () => {
  return (
    <section id="home" className="scroll-mt-20 relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             perspective: '500px',
             transform: 'rotateX(60deg) scale(2) translateY(-100px)'
           }}>
      </div>
      
      {/* Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <Reveal3D delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent border border-brand-red/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-300">Web Development Agency</span>
          </div>
        </Reveal3D>

        <Reveal3D delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white mb-6 leading-tight">
            CRAFTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-800" style={{ textShadow: '0px 10px 30px rgba(220, 38, 38, 0.3)' }}>
              DIGITAL REALITY
            </span>
          </h1>
        </Reveal3D>

        <Reveal3D delay={0.4}>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
            We leverage <strong className="text-white">Modern AI Technology</strong> to build unique, high-performance static websites. 
            <strong className="text-white"> No Database. No Slow Backends. Pure Speed.</strong>
          </p>
        </Reveal3D>

        <Reveal3D delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#pricing" className="group relative inline-flex items-center justify-center px-8 py-4 bg-brand-red text-white font-bold rounded-lg overflow-hidden shadow-lg shadow-brand-red/20 transition-all hover:scale-105 hover:shadow-brand-red/40">
              <span className="relative z-10 flex items-center gap-2">
                VIEW PACKAGES <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-700 text-white font-bold rounded-lg hover:bg-white/5 transition-colors">
              OUR SERVICES
            </a>
          </div>
        </Reveal3D>

        {/* Floating 3D Elements */}
        <div className="absolute -z-10 w-full h-full pointer-events-none">
           <motion.div 
             animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/4 left-10 md:left-32 text-gray-800"
           >
             <Box size={64} strokeWidth={1} />
           </motion.div>
           <motion.div 
             animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute bottom-1/4 right-10 md:right-32 text-gray-800"
           >
             <Layers size={80} strokeWidth={1} />
           </motion.div>
           <motion.div 
             animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/3 right-1/4 text-brand-red opacity-30"
           >
             <Zap size={48} strokeWidth={2} />
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;