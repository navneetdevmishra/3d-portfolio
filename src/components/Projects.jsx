import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "FitForge",
      desc: "Gamified AI Fitness Platform built at BYTE'S Hackathon 2026. Features real-time pose detection using TensorFlow.js MoveNet to revolutionize personal training.",
      tech: ["Next.js", "React", "MongoDB", "TensorFlow.js", "Gemini AI"],
      link: "https://fitforge-ruddy.vercel.app",
      github: "https://github.com/navneetdevmishra/FitForge"
    },
    {
      title: "LLM AI Chatbot",
      desc: "An intelligent Large Language Model-powered chatbot interface for seamless, context-aware interactive conversations.",
      tech: ["React", "JavaScript", "AI / LLM"],
      link: "https://github.com/navneetdevmishra/CHAT-BOT",
      github: "https://github.com/navneetdevmishra/CHAT-BOT"
    },
    {
      title: "DSA in Java",
      desc: "A comprehensive repository containing optimized solutions and implementations of various Data Structures and Algorithms in Java.",
      tech: ["Java", "Algorithms", "Data Structures"],
      link: "https://github.com/navneetdevmishra/DSA-REPO-",
      github: "https://github.com/navneetdevmishra/DSA-REPO-"
    },
    {
      title: "Data Science & NLP",
      desc: "A complete collection of Machine Learning and Natural Language Processing algorithms, models, and data analysis projects.",
      tech: ["Python", "Machine Learning", "NLP", "Data Science"],
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
