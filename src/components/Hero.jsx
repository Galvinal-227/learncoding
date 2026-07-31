import React, { useState, useEffect } from 'react';
import { 
  FiArrowDown, 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiExternalLink, 
  FiCode, 
  FiBookOpen,
  FiUsers,
  FiAward
} from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import Logo from './Logo';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  // Data untuk platform Learn By GWD
  const quickStats = [
    { value: '3+', label: 'Students', icon: <FiUsers className="w-4 h-4" /> },
    { value: '100+', label: 'Resources', icon: <FiBookOpen className="w-4 h-4" /> },
    { value: '4.9', label: 'Rating', icon: <FiAward className="w-4 h-4" /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-[#0a0a0a]">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Background blur elements */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/5 blur-3xl z-0" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-white/3 blur-3xl z-0" />

      {/* Main Content */}
      <div className={`relative z-10 w-full max-w-4xl mx-auto px-6 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center">
          {/* Logo + Tagline */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Logo variant="icon" size="default" />
            <div className="h-px w-12 bg-white/50" />
            <span className="text-white text-xs tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              Active Learning
            </span>
          </div>

          {/* Heading - Fokus ke Platform */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none mb-4">
            Belajar
            <br />
            <span
              >Web Development</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white mb-4">
            With GWD
          </p>
          
          {/* Description - Fokus ke pembelajaran */}
          <p className="text-white leading-relaxed mb-8 max-w-2xl mx-auto">
            Platform pembelajaran web development dengan pendekatan praktis. 
            Dari dasar hingga mahir, semua materi disusun terstruktur dengan 
            project nyata.
          </p>

          {/* Quick Stats - Fokus ke platform */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            {quickStats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-white/30">{stat.icon}</span>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                  <p className="text-xs text-white/30">{stat.label}</p>
                </div>
                {index < quickStats.length - 1 && (
                  <div className="w-px h-10 bg-white/10" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Social & Contact - Tetap ada untuk founder */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-xs text-white/20">Founder:</span>
            <a
              href="https://github.com/galvinal-227/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 border border-white/10 rounded-full text-white/30 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              title="GitHub"
            >
              <FiGithub className="text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 border border-white/10 rounded-full text-white/30 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              title="LinkedIn"
            >
              <FiLinkedin className="text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="mailto:learnbygwd@gmail.com"
              className="group p-2 border border-white/10 rounded-full text-white/30 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              title="Email"
            >
              <FiMail className="text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <span className="text-xs text-white/20">|</span>
            <span className="text-xs text-white/20">learnbygwd@gmail.com</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={scrollToContent}
            className="group flex flex-col items-center space-y-2 text-white/30 hover:text-white/60 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Explore
            </span>
            <FiArrowDown className="text-xl animate-bounce group-hover:animate-none group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
