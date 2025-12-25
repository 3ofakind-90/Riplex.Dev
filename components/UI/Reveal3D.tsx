import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Reveal3DProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export const Reveal3D: React.FC<Reveal3DProps> = ({ children, width = "100%", delay = 0.25, direction = "up", className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 50 : 0, 
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      rotateX: direction === "up" ? -10 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      rotateX: 0,
      transition: { duration: 0.6, delay: delay, ease: "easeOut" } 
    },
  };

  return (
    <div ref={ref} style={{ width, perspective: "1000px" }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
};