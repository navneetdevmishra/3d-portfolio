import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout } from 'lucide-react';
import './About.css';

export default function About() {
  const skills = [
    { name: "Programming", icon: <Code size={24} />, desc: "Java (Core + OOP), Python, JavaScript" },
    { name: "Frontend", icon: <Layout size={24} />, desc: "Next.js, React.js, HTML, CSS, MUI, Tailwind" },
    { name: "Backend", icon: <Server size={24} />, desc: "Spring Boot, Next.js API Routes, REST, MongoDB, MySQL" },
    { name: "AI & Tools", icon: <Code size={24} />, desc: "TensorFlow.js, Google Gemini, Git, JWT, Vercel" }
  ];

  return (
    <section id="about" className="section container ui-layer">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        
        <div className="about-content">
          <div className="about-text glass-card">
            <h3>Who I am</h3>
            <p>
              Hey! I'm Navneet, a developer who enjoys building cool things for the web. My focus is on creating clean, efficient backends and interactive frontend experiences.
            </p>
            <p>
              Whether it's spinning up a Spring Boot API or playing around with 3D elements in React, I love diving into code and exploring new tech. When I'm not coding, I'm usually solving problems on LeetCode.
            </p>
            
            <div className="leetcode-stats">
              <h4>🏆 Coding Consistency</h4>
              <div className="stats-box">
                <div className="stat-item">
                  <span className="stat-value">41</span>
                  <span className="stat-label">Active Days</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-value streak">33 🔥</span>
                  <span className="stat-label">Max Streak</span>
                </div>
              </div>
              <a href="https://leetcode.com/u/navneetmishra09988/" target="_blank" rel="noreferrer" className="leetcode-link hover-magnetic">View LeetCode Profile</a>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card glass-card">
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
