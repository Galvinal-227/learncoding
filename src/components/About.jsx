import React from 'react';
import { 
  FiUsers, 
  FiBookOpen, 
  FiAward, 
  FiTarget,
  FiGithub,
  FiMail,
  FiMapPin 
} from 'react-icons/fi';
import { 
  FaRocket, 
  FaCode, 
  FaGraduationCap,
  FaChalkboardTeacher,
  FaHandsHelping
} from 'react-icons/fa';

const About = () => {
  const stats = [
    { value: '3+', label: 'Active Students', icon: <FiUsers className="w-5 h-5" /> },
    { value: '100+', label: 'Learning Resources', icon: <FiBookOpen className="w-5 h-5" /> },
    { value: '4.9/5', label: 'Student Rating', icon: <FiAward className="w-5 h-5" /> },
  ];

  const values = [
    {
      icon: <FaChalkboardTeacher className="w-5 h-5" />,
      title: 'Structured Learning',
      desc: 'Materi disusun secara sistematis dari basic hingga advanced'
    },
    {
      icon: <FaHandsHelping className="w-5 h-5" />,
      title: 'Hands-on Practice',
      desc: 'Belajar melalui project nyata dan studi kasus'
    },
    {
      icon: <FaGraduationCap className="w-5 h-5" />,
      title: 'Community Focused',
      desc: 'Belajar bersama dan saling support dalam komunitas'
    }
  ];

  const instructors = [
    { 
      name: 'Galvin Alfito', 
      role: 'Founder & Lead Instructor',
      desc: 'Fullstack developer dengan pengalaman 4+ tahun di web development'
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#0a0a0a] text-white" id="about">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/40 tracking-wider uppercase mb-4">
            <FaCode className="w-3 h-3" />
            About Learn By GWD
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Platform Pembelajaran
            <br />
            <span className="text-white/50">Untuk Developer Masa Depan</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-sm leading-relaxed">
            Learn By GWD adalah platform pembelajaran web development yang dirancang 
            untuk membantu kamu memahami konsep pemrograman dari dasar hingga mahir 
            melalui pendekatan praktis dan terstruktur.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 text-center border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex justify-center text-white/30 mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/30">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-white/60 mb-6 text-center">
            What We Stand For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, index) => (
              <div 
                key={index}
                className="p-6 border border-white/5 rounded-xl bg-white/[0.01] hover:border-white/10 transition-all duration-300"
              >
                <div className="text-white/30 mb-3">
                  {item.icon}
                </div>
                <h4 className="text-sm font-semibold text-white/70 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-white/30 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Instructors / Team */}
        <div>
          <h3 className="text-lg font-semibold text-white/60 mb-6 text-center">
             Meet The Mentors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {instructors.map((instructor, index) => (
              <div 
                key={index}
                className="p-5 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white/40">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/70">
                      {instructor.name}
                    </p>
                    <p className="text-[10px] text-white/30 uppercase tracking-wider">
                      {instructor.role}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-white/30 leading-relaxed">
                  {instructor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-8 border border-white/10 rounded-2xl bg-white/[0.02]">
          <p className="text-sm text-white/40 mb-4">
            Siap memulai perjalanan belajarmu?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#kurikulum"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0a0a0a] text-sm font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Mulai Belajar</span>
              <FaRocket className="w-4 h-4" />
            </a>
            <a 
              href="#learn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/40 text-sm font-semibold hover:bg-white/5 transition-all duration-300"
            >
              <span>Lihat Kurikulum</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
