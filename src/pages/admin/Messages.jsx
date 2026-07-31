import { useState } from 'react';
import { FiArrowLeft, FiTrash2, FiUser, FiClock, FiMail } from 'react-icons/fi';
import AdminSidebar from '../admin/AdminSidebar';

const dummyMessages = [
  { _id: '1', senderName: 'Andi', senderEmail: 'andi@email.com', message: 'Halo, mau tanya soal project.', createdAt: '2026-01-01', isRead: true, reply: 'Dibalas via Gmail' },
  { _id: '2', senderName: 'Budi', senderEmail: '', message: 'Apakah bisa kolaborasi?', createdAt: '2026-01-02', isRead: false },
];

const AdminMessages = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [selected, setSelected] = useState(null);

  const handleSelect = (msg) => {
    setSelected(msg);
    setMessages(messages.map(m => m._id === msg._id ? { ...m, isRead: true } : m));
  };

  const handleDelete = (id) => {
    setMessages(messages.filter(m => m._id !== id));
    if (selected?._id === id) setSelected(null);
  };

  const timeAgo = (d) => {
    const diff = (new Date() - new Date(d)) / 60000;
    if (diff < 1) return 'Baru saja';
    if (diff < 60) return `${Math.floor(diff)} menit lalu`;
    return `${Math.floor(diff / 60)} jam lalu`;
  };

  return (
    <div className="min-h-screen bg-black flex">
      <AdminSidebar />
      <div className="flex-1 ml-0 md:ml-64 p-6 md:p-8 pt-20 md:pt-8">
        <div className="mb-8">
          <a href="/admin/dashboard" className="text-xs text-apple-gray-medium hover:text-white flex items-center space-x-1 mb-2 transition-colors duration-300"><FiArrowLeft /><span>Kembali</span></a>
          <h1 className="text-2xl font-bold text-white">Pesan</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-1 space-y-2 max-h-[600px] overflow-y-auto">
            {messages.map(msg => (
              <button key={msg._id} onClick={() => handleSelect(msg)} className={`w-full text-left p-4 border rounded-2xl transition-all duration-300 cursor-pointer ${selected?._id === msg._id ? 'border-white/30 bg-white/[0.04]' : msg.isRead ? 'border-white/5' : 'border-white/10 bg-white/[0.02]'}`}>
                <p className={`text-sm ${!msg.isRead ? 'text-white font-semibold' : 'text-apple-gray-medium'}`}>{msg.senderName}</p>
                <p className="text-xs text-apple-gray-medium/70 line-clamp-1 mb-2">{msg.message}</p>
                <p className="text-[10px] text-apple-gray-medium/50 flex items-center space-x-1"><FiClock /><span>{timeAgo(msg.createdAt)}</span></p>
              </button>
            ))}
          </div>

          <div className="md:col-span-2">
            {!selected ? (
              <div className="h-full flex items-center justify-center border border-white/10 rounded-2xl p-8">
                <div className="text-center"><FiMail className="text-4xl text-apple-gray-medium/20 mx-auto mb-4" /><p className="text-apple-gray-medium text-sm">Pilih pesan</p></div>
              </div>
            ) : (
              <div className="border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center"><FiUser className="text-white" /></div>
                    <div>
                      <p className="text-sm font-semibold text-white">{selected.senderName}</p>
                      <p className="text-xs text-apple-gray-medium">{selected.senderEmail || 'Tanpa email'}</p>
                    </div>
                  </div>
                  <button onClick={() => handleDelete(selected._id)} className="p-2 text-apple-gray-medium hover:text-red-400 border border-white/10 rounded-lg transition-all duration-300 cursor-pointer"><FiTrash2 className="text-sm" /></button>
                </div>
                <div className="mb-4">
                  <div className="inline-block max-w-[80%] p-4 bg-white/5 border border-white/10 rounded-2xl"><p className="text-sm text-white">{selected.message}</p></div>
                </div>
                {selected.reply ? (
                  <div className="flex justify-end">
                    <div className="max-w-[80%] p-4 bg-green-400/10 border border-green-400/20 rounded-2xl"><p className="text-sm text-green-400 flex items-center space-x-2"><FiMail /><span>{selected.reply}</span></p></div>
                  </div>
                ) : selected.senderEmail ? (
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${selected.senderEmail}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-black rounded-full font-semibold text-sm hover:bg-apple-gray-light transition-all duration-300 cursor-pointer">Balas via Gmail</a>
                ) : (
                  <p className="text-xs text-yellow-400 text-center">Tidak ada email, tidak bisa balas.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;