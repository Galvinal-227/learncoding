import { useState } from 'react';
import { FiArrowLeft, FiTrash2, FiShield } from 'react-icons/fi';
import AdminSidebar from '../admin/AdminSidebar';

const dummyQuotes = [
  { _id: '1', name: 'Andi', text: 'Jangan takut gagal!', createdAt: '2026-01-01' },
  { _id: '2', name: 'Budi', text: 'Kode yang baik itu rapi.', createdAt: '2026-01-02' },
  { _id: '3', name: 'Cici', text: 'Debugging is life.', createdAt: '2026-01-03' },
];

const AdminQuotes = () => {
  const [quotes, setQuotes] = useState(dummyQuotes);
  const [banned, setBanned] = useState([]);
  const [banName, setBanName] = useState('');

  const handleDelete = (id) => setQuotes(quotes.filter(q => q._id !== id));
  const handleBan = () => {
    if (banName.trim()) {
      setBanned([...banned, { name: banName, date: new Date().toISOString() }]);
      setQuotes(quotes.filter(q => q.name.toLowerCase() !== banName.toLowerCase()));
      setBanName('');
    }
  };

  return (
    <div className="min-h-screen bg-black flex">
      <AdminSidebar />
      <div className="flex-1 ml-0 md:ml-64 p-6 md:p-8 pt-20 md:pt-8">
        <div className="mb-8">
          <a href="/admin/dashboard" className="text-xs text-apple-gray-medium hover:text-white flex items-center space-x-1 mb-2 transition-colors duration-300"><FiArrowLeft /><span>Kembali</span></a>
          <h1 className="text-2xl font-bold text-white">Kelola Quotes</h1>
        </div>

        <div className="space-y-3 mb-8">
          {quotes.map(q => (
            <div key={q._id} className="flex items-start justify-between p-4 border border-white/10 rounded-2xl bg-white/[0.02]">
              <div>
                <p className="text-sm text-white mb-1">{q.text}</p>
                <p className="text-xs text-apple-gray-medium">{q.name}</p>
              </div>
              <button onClick={() => handleDelete(q._id)} className="p-2 text-apple-gray-medium hover:text-red-400 border border-white/10 rounded-lg transition-all duration-300 cursor-pointer"><FiTrash2 className="text-sm" /></button>
            </div>
          ))}
        </div>

        <div className="p-5 border border-white/10 rounded-2xl bg-white/[0.02]">
          <h3 className="text-sm font-semibold text-white mb-4 flex items-center space-x-2"><FiShield /><span>Ban User</span></h3>
          <div className="flex items-center space-x-2">
            <input value={banName} onChange={e => setBanName(e.target.value)} placeholder="Nama yang di-ban..." className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-apple-gray-medium/50 focus:outline-none focus:border-white/30 font-pixel" />
            <button onClick={handleBan} className="px-4 py-2.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-sm hover:bg-red-500/30 transition-all duration-300 cursor-pointer">Ban</button>
          </div>
          {banned.length > 0 && (
            <div className="mt-4 space-y-2">
              {banned.map((b, i) => (
                <div key={i} className="text-xs text-red-400 flex items-center justify-between"><span>{b.name}</span><span className="text-apple-gray-medium/50">{new Date(b.date).toLocaleDateString()}</span></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminQuotes;