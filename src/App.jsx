import React, { useState, useEffect } from 'react';
import Scene from './components/Scene';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

import CustomCursor from './components/CustomCursor';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <CustomCursor />
      
      {/* 3D Background */}
      <Scene theme={theme} />
      
      {/* 2D UI Overlay */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '24px', color: 'var(--text-secondary)', position: 'relative', zIndex: 10 }}>
        <p>© {new Date().getFullYear()} Navneet Mishra. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
