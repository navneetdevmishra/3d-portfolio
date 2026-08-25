import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "FitForge",
      desc: "An AI fitness platform built during BYTE'S Hackathon 2026. It uses TensorFlow.js to track poses in real-time, acting as a virtual personal trainer.",
      tech: ["Next.js", "React", "MongoDB", "TensorFlow.js"],
      link: "https://fitforge-ruddy.vercel.app",
      github: "https://github.com/navneetdevmishra/FitForge"
    },
    {
      title: "LLM AI Chatbot",
      desc: "A custom chatbot interface built using modern LLM APIs to handle context-aware conversations.",
      tech: ["React", "JavaScript", "AI APIs"],
      link: "https://github.com/navneetdevmishra/CHAT-BOT",
      github: "https://github.com/navneetdevmishra/CHAT-BOT"
    },
    {
      title: "DSA in Java",
      desc: "My personal collection of Data Structures and Algorithms solutions, implemented and optimized in Java.",
      tech: ["Java", "Algorithms", "Data Structures"],
      link: "https://github.com/navneetdevmishra/DSA-REPO-",
      github: "https://github.com/navneetdevmishra/DSA-REPO-"
    },
    {
      title: "Data Science & NLP",
      desc: "Various Machine Learning and Natural Language Processing models and data analysis projects I've worked on.",
      tech: ["Python", "Machine Learning", "NLP"],
      link: "https://github.com/navneetdevmishra/Complete-Data-Science-With-Machine-Learning-And-NLP-2024",
      github: "https://github.com/navneetdevmishra/Complete-Data-Science-With-Machine-Learning-And-NLP-2024"
    }
  ];

  return (
    <section id="projects" className="section container ui-layer">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card glass-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} className="icon-link"><GitBranch size={20} /></a>
                <a href={project.link} className="icon-link"><ExternalLink size={20} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
