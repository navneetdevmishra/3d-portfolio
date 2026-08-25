import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Java Trainee',
      organization: 'DXC Technology',
      date: 'Dec 2025 — Dec 2026',
      icon: <Briefcase size={24} />,
      desc: 'Undergoing intensive Java training in enterprise environment. Hands-on practice in Core Java, OOP, Exception Handling, Collections. Developing coding skills through real-world assignments.'
    },
    {
      type: 'work',
      title: 'Coordinator',
      organization: 'bytes.io (Coding Club, BCE)',
      date: 'Present',
      icon: <Briefcase size={24} />,
      desc: 'Serving as the Coordinator for bytes.io, the official coding club of Bakhtiyarpur College of Engineering. Organizing technical events and fostering a coding culture.'
    },
    {
      type: 'education',
      title: 'B.Tech — Computer Science & Engineering',
      organization: 'Bakhtiyarpur College of Engineering',
      date: '2025 — 2028',
      icon: <GraduationCap size={24} />,
      desc: 'Pursuing B.Tech CSE at Bihar Engineering University.'
    },
    {
      type: 'education',
      title: 'Diploma — Computer Science & Engineering',
      organization: 'GEMS POLYTECHNIC COLLEGE',
      date: '2022 — 2025',
      icon: <GraduationCap size={24} />,
      desc: 'State board of technical education (SBTE)'
    }
  ];

  return (
    <section id="experience" className="section container ui-layer">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Experience & <span className="gradient-text">Education</span></h2>
        
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-icon">
                {exp.icon}
              </div>
              <div className="timeline-content glass-card">
                <span className="timeline-date"><Calendar size={14} /> {exp.date}</span>
                <h3>{exp.title}</h3>
                <h4>{exp.organization}</h4>
                <p>{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
