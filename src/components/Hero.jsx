import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 400]);

  const titleText = "Hi, I'm Navneet Mishra";
  const titleWords = titleText.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="hero-section container ui-layer">
      <motion.div className="hero-content" style={{ y: y1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", type: "spring" }}
          className="hero-avatar-container"
        >
          <div className="hero-avatar-glow"></div>
          <img src="/navneet-avatar-2.jpg" alt="Navneet Mishra" className="hero-avatar" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="hero-badge glass-panel">👋 Welcome to my portfolio</span>
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {titleWords.map((word, index) => (
            <motion.span variants={child} key={index} style={{ display: 'inline-block', marginRight: '10px' }} className={word === 'Navneet' || word === 'Mishra' ? 'gradient-text' : ''}>
              {word}
            </motion.span>
          ))}
          <br/>
          <motion.span variants={child} style={{ display: 'inline-block' }}>Software Developer</motion.span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          style={{ fontSize: '1.1rem', textAlign: 'justify' }}
        >
          Motivated B.Tech CSE student at Bihar Engineering University (2025-28) with a Diploma in CSE (2022-25). Currently working as a Java Trainee at DXC Technology. Passionate about Java Backend Development, eager to build impactful real-world tech solutions and drive innovation.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <a href="#projects" className="btn-primary hover-magnetic">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary hover-magnetic">
            Contact Me <Download size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
