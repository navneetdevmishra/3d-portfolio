import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section container ui-layer">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        
        <div className="contact-content">
          <div className="contact-info glass-card">
            <h3>Let's talk about your next project.</h3>
            <p className="contact-desc">
              Whether you have a question, a project idea, or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="info-item">
              <div className="info-icon"><Mail size={20} /></div>
              <span>navneetbrahmana@gmail.com</span>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><MapPin size={20} /></div>
              <span>India</span>
            </div>
            

          </div>

          <form className="contact-form glass-card" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="John Doe" className="glass-input" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="john@example.com" className="glass-input" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Your message..." rows="4" className="glass-input"></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
