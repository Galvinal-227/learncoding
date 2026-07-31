import { useState } from 'react';
import { FiFolder, FiPlus, FiEdit2, FiTrash2, FiX, FiArrowLeft } from 'react-icons/fi';
import AdminSidebar from '../admin/AdminSidebar';

const dummyProjects = [
  { _id: '1', title: 'E-Commerce', description: 'Fullstack e-commerce', technologies: ['React', 'Node'], status: 'published', completionDate: '2026-01-15' },
  { _id: '2', title: 'Game Dashboard', description: 'Dashboard game', technologies: ['React', 'Express'], status: 'published', completionDate: '2025-11-20' },
  { _id: '3', title: 'Portfolio', description: 'Website portofolio', technologies: ['React', 'Tailwind'], status: 'draft', completionDate: '2025-08-10' },
];

const AdminProjects = () => {
  const [projects, setProjects] = useState(dummyProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tech, setTech] = useState('');
  const [status, setStatus] = useState('draft');

  const openAdd = () => {
    setEditing(null); setTitle(''); setDesc(''); setTech(''); setStatus('draft'); setIsModalOpen(true);
  };
  const openEdit = (p) => {
    setEditing(p); setTitle(p.title); setDesc(p.description); setTech(p.technologies.join(', ')); setStatus(p.status); setIsModalOpen(true);
  };
  const handleDelete = (id) => {
    setProjects(projects.filter(p => p._id !== id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      setProjects(projects.map(p => p._id === editing._id ? { ...p, title, description: desc, technologies: tech.split(',').map(t => t.trim()), status } : p));
    } else {
      setProjects([...projects, { _id: Date.now().toString(), title, description: desc, technologies: tech.split(',').map(t => t.trim()), status, completionDate: new Date().toISOString() }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black flex">
      <AdminSidebar />
      <div className="flex-1 ml-0 md:ml-64 p-6 md:p-8 pt-20 md:pt-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <a href="/admin/dashboard" className="text-xs text-apple-gray-medium hover:text-white flex items-center space-x-1 mb-2 transition-colors duration-300"><FiArrowLeft /><span>Kembali</span></a>
            <h1 className="text-2xl font-bold text-white">Kelola Projects</h1>
          </div>
          <button onClick={openAdd} className="flex items-center space-x-2 px-5 py-2.5 bg-white text-black rounded-full font-semibold text-sm hover:bg-apple-gray-light transition-all duration-300 cursor-pointer"><FiPlus /><span>Tambah</span></button>
        </div>

        <div className="space-y-3">
          {projects.map(p => (
            <div key={p._id} className="flex items-start justify-between p-5 border border-white/10 rounded-2xl bg-white/[0.02]">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] ${p.status === 'published' ? 'bg-white/10 text-white' : 'border border-white/10 text-apple-gray-medium'}`}>{p.status}</span>
                </div>
                <p className="text-xs text-apple-gray-medium line-clamp-1 mb-2">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.technologies.map((t, i) => <span key={i} className="px-2 py-0.5 bg-white/5 rounded-full text-[10px] text-apple-gray-medium">{t}</span>)}
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button onClick={() => openEdit(p)} className="p-2 text-apple-gray-medium hover:text-white border border-white/10 rounded-lg transition-all duration-300 cursor-pointer"><FiEdit2 className="text-sm" /></button>
                <button onClick={() => handleDelete(p._id)} className="p-2 text-apple-gray-medium hover:text-red-400 border border-white/10 rounded-lg transition-all duration-300 cursor-pointer"><FiTrash2 className="text-sm" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full max-w-md p-6 border border-white/10 rounded-3xl bg-black/90 backdrop-blur-xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 p-2 text-apple-gray-medium hover:text-white border border-white/10 rounded-full transition-all duration-300 cursor-pointer"><FiX /></button>
            <h3 className="text-lg font-semibold text-white mb-6">{editing ? 'Edit Project' : 'Tambah Project'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Judul" className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-apple-gray-medium/50 focus:outline-none focus:border-white/30 font-pixel" required />
              <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Deskripsi" rows={3} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-apple-gray-medium/50 focus:outline-none focus:border-white/30 resize-none font-pixel" required />
              <input value={tech} onChange={e => setTech(e.target.value)} placeholder="Teknologi (pisah koma)" className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-apple-gray-medium/50 focus:outline-none focus:border-white/30 font-pixel" />
              <select value={status} onChange={e => setStatus(e.target.value)} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-white/30 font-pixel cursor-pointer">
                <option value="draft" className="bg-black">Draft</option>
                <option value="published" className="bg-black">Published</option>
              </select>
              <button type="submit" className="w-full px-6 py-3 bg-white text-black rounded-full font-semibold text-sm hover:bg-apple-gray-light transition-all duration-300 cursor-pointer">{editing ? 'Update' : 'Tambah'}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProjects;