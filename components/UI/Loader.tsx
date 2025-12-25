import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
      }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo Icon Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            transition: { 
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.8
            }
          }}
          className="relative"
        >
          <div className="bg-brand-red p-6 rounded-2xl shadow-[0_0_50px_rgba(220,38,38,0.5)]">
            <Code2 className="text-white h-12 w-12 md:h-16 md:w-16" />
          </div>
          
          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 bg-brand-red rounded-2xl -z-10"
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.5, 0, 0.5] 
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </motion.div>

        {/* Text Animation */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
                ease: "easeOut"
              }
            }}
            className="flex items-center gap-1"
          >
            <span className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-white">
              RIPLEX
            </span>
            <span className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-brand-red">
              .DEV
            </span>
          </motion.div>
        </div>
        
        {/* Loading Bar */}
        <motion.div 
          className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="h-full bg-brand-red"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;