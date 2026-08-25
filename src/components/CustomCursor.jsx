import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the cursor ring
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('hover-magnetic')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          scale: hovered ? 1.5 : 1,
          backgroundColor: hovered ? 'rgba(109, 40, 217, 0.1)' : 'transparent',
          borderColor: hovered ? 'var(--accent-light)' : 'var(--text-secondary)'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          x: springX,
          y: springY,
        }}
      />
    </>
  );
}
