import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiBookOpen, FiUsers, FiMail } from 'react-icons/fi';
import { FaGraduationCap, FaRocket } from 'react-icons/fa';

const Navbar = ({ onScrollTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    if (onScrollTo) {
      onScrollTo(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'kurikulum', label: 'Kurikulum', icon: <FiBookOpen className="w-5 h-5" /> },
    { id: 'learn', label: 'Courses', icon: <FaGraduationCap className="w-5 h-5" /> },
    { id: 'quotes', label: 'Community', icon: <FiUsers className="w-5 h-5" /> },
    { id: 'about', label: 'About', icon: <FiMail className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Navbar Default - Full Text */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <button onClick={scrollToTop} className="text-white font-bold text-2xl cursor-pointer">
            <span className="text-blue-500">G</span>WD
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={scrollToTop} className="flex items-center space-x-1.5 text-sm text-white/50 hover:text-white transition cursor-pointer">
              <FiHome className="text-base" />
              <span>Home</span>
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => scrollToSection(e, item.id)}
                className="flex items-center space-x-1.5 text-sm text-white/50 hover:text-white transition cursor-pointer"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Navbar Floating - Icon Only */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-2.5 shadow-lg shadow-black/50">
          <div className="flex items-center justify-center space-x-5">
            {/* Logo Icon */}
            <button onClick={scrollToTop} className="text-white font-bold text-lg cursor-pointer px-2">
              <span className="text-blue-500">G</span>WD
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-white/10"></div>

            {/* Icons Only - No Text */}
            <button onClick={scrollToTop} className="text-white/50 hover:text-white transition cursor-pointer p-1.5" title="Home">
              <FiHome className="w-5 h-5" />
            </button>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-white/50 hover:text-white transition cursor-pointer p-1.5"
                title={item.label}
              >
                {item.icon}
              </button>
            ))}

            {/* Divider */}
            <div className="w-px h-6 bg-white/10"></div>

            {/* Rocket CTA */}
            <button
              onClick={(e) => scrollToSection(e, 'learn')}
              className="flex items-center justify-center w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full text-white/80 hover:text-white transition border border-white/10 cursor-pointer"
              title="Start Learning"
            >
              <FaRocket className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Sama */}
      <div
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button onClick={scrollToTop} className="text-2xl text-white/70 hover:text-white transition cursor-pointer">Home</button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-2xl text-white/70 hover:text-white transition cursor-pointer"
            >
              {item.icon} <span className="ml-3">{item.label}</span>
            </button>
          ))}
          <button
            onClick={(e) => scrollToSection(e, 'learn')}
            className="mt-4 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white/80 hover:text-white transition border border-white/10 cursor-pointer"
          >
            <FaRocket className="inline mr-2" /> Start Learning
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;