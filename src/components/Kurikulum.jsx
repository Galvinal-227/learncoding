// components/Kurikulum.jsx
import React, { useState } from 'react';
import { 
  FiChevronDown, 
  FiChevronRight, 
  FiAward, 
  FiTarget, 
  FiBookOpen,
  FiCheckCircle,
  FiClock
} from 'react-icons/fi';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaGitAlt,
  FaCloud,
  FaFigma
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiExpress, SiNextdotjs, SiDocker } from 'react-icons/si';

const Kurikulum = () => {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const modules = [
    {
      id: 1,
      title: 'Pengenalan Web Development',
      icon: <FiTarget className="w-5 h-5 text-red-500" />,
      level: 'Pemula',
      duration: '6 Jam',
      materials: [
        'Apa itu Web Development?',
        'Cara Kerja Internet & Website',
        'Pengenalan HTML, CSS, JavaScript',
        'Tools yang Dibutuhkan (VS Code, Browser)',
        'Struktur Project Website',
        'Deployment Sederhana'
      ]
    },
    {
      id: 2,
      title: 'HTML Dasar sampai Mahir',
      icon: <FaHtml5 className="w-5 h-5 text-orange-400" />,
      level: 'Pemula - Mahir',
      duration: '12 Jam',
      materials: [
        'Struktur Dasar HTML',
        'Heading, Paragraf, dan Format Teks',
        'List, Tabel, dan Form',
        'Semantic HTML',
        'SEO Friendly HTML',
        'HTML5 API (Canvas, Geolocation)',
        'Accessibility (A11y)',
        'Microdata & Schema.org'
      ]
    },
    {
      id: 3,
      title: 'CSS Dasar sampai Mahir',
      icon: <FaCss3Alt className="w-5 h-5 text-purple-500" />,
      level: 'Pemula - Mahir',
      duration: '15 Jam',
      materials: [
        'CSS Selector & Spesifisitas',
        'Box Model dan Layout',
        'Flexbox & CSS Grid',
        'Responsive Design (Media Queries)',
        'CSS Animation & Transition',
        'CSS Variables (Custom Properties)',
        'CSS Framework (Tailwind, Bootstrap)',
        'Sass/SCSS',
        'CSS Architecture (BEM, SMACSS)',
        'Modern CSS (Container Queries, :has())'
      ]
    },
    {
      id: 4,
      title: 'JavaScript Fundamental',
      icon: <FaJs className="w-5 h-5 text-yellow-400" />,
      level: 'Pemula - Menengah',
      duration: '18 Jam',
      materials: [
        'Variabel, Tipe Data, dan Operator',
        'Conditional (if/else, switch)',
        'Looping (for, while, forEach)',
        'Function (Declaration, Expression, Arrow)',
        'Array & Object Manipulation',
        'DOM Manipulation',
        'Event Handling',
        'ES6+ (Destructuring, Spread, Template Literal)',
        'Module System (import/export)',
        'Error Handling (try/catch)'
      ]
    },
    {
      id: 5,
      title: 'JavaScript Lanjutan',
      icon: <SiTypescript className="w-5 h-5 text-blue-500" />,
      level: 'Menengah - Mahir',
      duration: '20 Jam',
      materials: [
        'Closure & Scope',
        'Higher Order Function',
        'Promise & Async/Await',
        'Fetch API & HTTP Request',
        'OOP di JavaScript (Class, Inheritance)',
        'Design Pattern',
        'Testing (Jest, Vitest)',
        'TypeScript Dasar',
        'TypeScript Lanjutan (Generics, Utility Types)',
        'Webpack & Vite'
      ]
    },
    {
      id: 6,
      title: 'React & Frontend Modern',
      icon: <FaReact className="w-5 h-5 text-blue-400" />,
      level: 'Menengah - Mahir',
      duration: '25 Jam',
      materials: [
        'Pengenalan React & JSX',
        'Component & Props',
        'State & Lifecycle',
        'Hooks Dasar (useState, useEffect)',
        'Hooks Lanjutan (useContext, useReducer, useRef)',
        'React Router',
        'State Management (Context API, Redux Toolkit)',
        'React Query & Data Fetching',
        'Form Handling (React Hook Form)',
        'Authentication & Authorization',
        'Performance Optimization',
        'Next.js Dasar',
        'Next.js Lanjutan (SSR, SSG, ISR)'
      ]
    },
    {
      id: 7,
      title: 'Backend & Database',
      icon: <FaNodeJs className="w-5 h-5 text-green-600" />,
      level: 'Menengah - Mahir',
      duration: '25 Jam',
      materials: [
        'Pengenalan Node.js',
        'NPM & Package Management',
        'Express.js Dasar',
        'REST API Design',
        'Middleware & Error Handling',
        'Authentication (JWT, OAuth)',
        'Database SQL (PostgreSQL, MySQL)',
        'Database NoSQL (MongoDB)',
        'ORM/ODM (Prisma, Mongoose)',
        'API Documentation (Swagger)',
        'WebSocket (Socket.io)',
        'File Upload & Cloud Storage'
      ]
    },
    {
      id: 8,
      title: 'DevOps & Deployment',
      icon: <FaCloud className="w-5 h-5 text-blue-400" />,
      level: 'Mahir',
      duration: '15 Jam',
      materials: [
        'Version Control (Git & GitHub)',
        'Git Workflow (Branching, Pull Request)',
        'Environment Variables',
        'Docker Dasar',
        'CI/CD Pipeline',
        'Deployment (Vercel, Netlify, AWS)',
        'Domain & DNS',
        'SSL/HTTPS',
        'Monitoring & Logging',
        'Scalability & Performance'
      ]
    }
  ];

  const totalMaterials = modules.reduce((acc, mod) => acc + mod.materials.length, 0);

  return (
    <section className="py-20 px-6 bg-[#0a0a0a] text-white" id="kurikulum">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/40 tracking-wider uppercase mb-4">
            <FiBookOpen className="w-3 h-3" />
            Kurikulum
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Roadmap Belajar
            <br />
            <span className="text-white/50">Web Development</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-sm leading-relaxed">
            Kurikulum lengkap dari dasar hingga mahir. 8 modul dengan 100+ materi 
            yang disusun secara sistematis untuk membantu kamu menjadi developer profesional.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 text-center border border-white/5 rounded-xl bg-white/[0.02]">
            <div className="text-2xl font-bold text-white">{modules.length}</div>
            <div className="text-xs text-white/30">Modul</div>
          </div>
          <div className="p-4 text-center border border-white/5 rounded-xl bg-white/[0.02]">
            <div className="text-2xl font-bold text-white">{totalMaterials}+</div>
            <div className="text-xs text-white/30">Materi</div>
          </div>
          <div className="p-4 text-center border border-white/5 rounded-xl bg-white/[0.02]">
            <div className="text-2xl font-bold text-white">136</div>
            <div className="text-xs text-white/30">Total Jam</div>
          </div>
          <div className="p-4 text-center border border-white/5 rounded-xl bg-white/[0.02]">
            <div className="text-2xl font-bold text-white">8</div>
            <div className="text-xs text-white/30">Project</div>
          </div>
        </div>

        {/* Modules Accordion */}
        <div className="space-y-3">
          {modules.map((module, index) => (
            <div 
              key={module.id}
              className="border border-white/5 rounded-xl bg-white/[0.02] hover:border-white/10 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleModule(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/[0.03] transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-white/5 text-white/40">
                    {module.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-semibold text-white/80">
                      {module.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[10px] text-white/30 uppercase tracking-wider">
                        {module.level}
                      </span>
                      <span className="w-px h-3 bg-white/10" />
                      <span className="text-[10px] text-white/30 flex items-center gap-1">
                        <FiClock className="w-3 h-3" />
                        {module.duration}
                      </span>
                      <span className="w-px h-3 bg-white/10" />
                      <span className="text-[10px] text-white/30">
                        {module.materials.length} materi
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-white/30">
                  {expandedModule === index ? (
                    <FiChevronDown className="w-5 h-5 text-white" />
                  ) : (
                    <FiChevronRight className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>

              {/* Materials List */}
              {expandedModule === index && (
                <div className="px-6 pb-4 pt-2 border-t border-white/5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {module.materials.map((material, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/[0.03] transition-colors duration-300"
                      >
                        <FiCheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-xs text-white/50">{material}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center p-8 border border-white/10 rounded-2xl bg-white/[0.02]">
          <p className="text-sm text-white/40 mb-4">
            Siap memulai perjalanan belajarmu?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#learn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0a0a0a] text-sm font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Mulai Belajar</span>
              <FiChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kurikulum;
