import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiFolder, FiMessageSquare, FiUsers, FiLogOut, FiMail } from 'react-icons/fi';
import AdminSidebar from '../admin/AdminSidebar';

const Dashboard = () => {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const adminData = localStorage.getItem('adminData');
    if (adminData) setAdmin(JSON.parse(adminData));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
    navigate('/admin/login');
  };

  const stats = [
    { icon: <FiFolder />, label: 'Projects', value: '4', color: 'bg-white/10' },
    { icon: <FiMail />, label: 'Pesan', value: '0', color: 'bg-white/10' },
    { icon: <FiUsers />, label: 'Quotes', value: '6', color: 'bg-white/10' },
  ];

  return (
    <div className="min-h-screen bg-black flex">
      <AdminSidebar />
      <div className="flex-1 ml-0 md:ml-64 p-6 md:p-8 pt-20 md:pt-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p className="text-sm text-apple-gray-medium mt-1">Selamat datang, {admin?.name || 'Admin'}</p>
          </div>
          <button onClick={handleLogout} className="flex items-center space-x-2 px-4 py-2 text-sm text-apple-gray-medium hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 cursor-pointer">
            <FiLogOut /><span>Logout</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-5 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className={`p-2.5 rounded-xl ${stat.color} text-white`}>{stat.icon}</div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-apple-gray-medium">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href="/admin/projects" className="flex items-center space-x-3 p-4 border border-white/10 rounded-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 cursor-pointer">
              <FiFolder className="text-white" />
              <div><p className="text-sm font-semibold text-white">Kelola Projects</p><p className="text-xs text-apple-gray-medium">Tambah, edit, hapus project</p></div>
            </a>
            <a href="/admin/quotes" className="flex items-center space-x-3 p-4 border border-white/10 rounded-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 cursor-pointer">
              <FiMessageSquare className="text-white" />
              <div><p className="text-sm font-semibold text-white">Kelola Quotes</p><p className="text-xs text-apple-gray-medium">Hapus atau ban user</p></div>
            </a>
            <a href="/admin/messages" className="flex items-center space-x-3 p-4 border border-white/10 rounded-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 cursor-pointer">
              <FiMail className="text-white" />
              <div><p className="text-sm font-semibold text-white">Kelola Pesan</p><p className="text-xs text-apple-gray-medium">Balas pesan dari pengunjung</p></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;