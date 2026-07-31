import { useState } from 'react';
import { FiMessageCircle, FiX, FiSend, FiUser, FiMail, FiInfo } from 'react-icons/fi';

const API_URL = 'http://localhost:5000/api/messages';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name.trim() || !message.trim()) {
      setError('Nama dan pesan wajib diisi');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderName: name.trim(),
          senderEmail: email.trim() || 'anonymous',
          message: message.trim(),
        }),
      });

      if (res.ok) {
        setSuccess('Pesan terkirim! Admin akan membalas via email.');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => {
          setSuccess('');
        }, 5000);
      } else {
        const data = await res.json();
        setError(data.message || 'Gagal mengirim pesan');
      }
    } catch (err) {
      setError('Gagal terhubung ke server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-white text-black rounded-full shadow-lg hover:bg-apple-gray-light hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          title="Chat dengan Admin"
        >
          <FiMessageCircle className="text-xl" />
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-h-[520px] border border-white/10 rounded-3xl bg-black/95 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <FiUser className="text-white text-sm" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Chat Admin GWD</p>
                <p className="text-[10px] text-green-400 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                  <span>Online - Biasanya balas &lt; 24 jam</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-apple-gray-medium hover:text-white border border-white/10 rounded-full transition-all duration-300 cursor-pointer"
            >
              <FiX className="text-sm" />
            </button>
          </div>

          {/* Info */}
          <div className="p-4 border-b border-white/5 bg-white/[0.02]">
            <p className="text-xs text-apple-gray-medium leading-relaxed">
              Punya pertanyaan seputar project, kolaborasi, atau butuh bantuan? Kirim pesan, admin akan membalas via email.
            </p>
          </div>

          {/* Form */}
          <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Nama */}
              <div>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-apple-gray-medium text-xs" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama kamu..."
                    maxLength={50}
                    className="w-full pl-8 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs placeholder:text-apple-gray-medium/50 focus:outline-none focus:border-white/30 transition-all duration-300 font-pixel"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-apple-gray-medium text-xs" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email kamu (biar admin bisa balas)..."
                    className="w-full pl-8 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs placeholder:text-apple-gray-medium/50 focus:outline-none focus:border-white/30 transition-all duration-300 font-pixel"
                  />
                </div>
                {/* Hint persuasif */}
                <div className="flex items-start space-x-1.5 mt-1.5 px-1">
                  <FiInfo className="text-[10px] text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-[10px] text-blue-400/80 leading-relaxed">
                    Masukkan email agar admin bisa membalas pesanmu langsung ke inbox. Tanpa email, pesan tidak bisa dibalas.
                  </p>
                </div>
              </div>

              {/* Pesan */}
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis pesan atau pertanyaanmu..."
                  maxLength={500}
                  rows={3}
                  className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs placeholder:text-apple-gray-medium/50 focus:outline-none focus:border-white/30 transition-all duration-300 resize-none font-pixel"
                />
                <p className="text-[10px] text-apple-gray-medium/50 text-right mt-1">
                  {message.length}/500
                </p>
              </div>

              {/* Error / Success */}
              {error && (
                <p className="text-[10px] text-red-400 bg-red-400/10 px-3 py-2 rounded-lg">
                  {error}
                </p>
              )}
              {success && (
                <p className="text-[10px] text-green-400 bg-green-400/10 px-3 py-2 rounded-lg flex items-center space-x-1.5">
                  <FiMail className="flex-shrink-0" />
                  <span>{success}</span>
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white text-black rounded-full font-semibold text-xs hover:bg-apple-gray-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
              >
                {loading ? (
                  <span>Mengirim...</span>
                ) : (
                  <>
                    <FiSend />
                    <span>Kirim Pesan</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;