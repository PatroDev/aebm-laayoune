// import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll } from "framer-motion"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Testimonials from './pages/Testimonials';
import Bureau from './pages/Bureau';
import Libraries from './pages/Libraries';
import Contact from './pages/Contact';
import Inscription from './pages/Inscription';
// import { i } from 'framer-motion/client';

function App() {
  const { scrollYProgress } = useScroll();
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode based on user preference
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ffcc00",
          zIndex: 1000,
          // transition: { duration: 0.2 }
        }}
      />
      <Router>
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-900' : 'bg-gray-100'}`}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>  
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activites" element={<Activities />} />
            <Route path="/temoignages" element={<Testimonials />} />
            <Route path="/bureau" element={<Bureau />} />
            <Route path="/bibliotheques" element={<Libraries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inscription" element={<Inscription />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;