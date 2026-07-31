import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import Logo from '../../components/Logo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email dan password wajib diisi');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (email === 'learnbygwd@gmail.com' && password === 'gwdlearn07') {
        localStorage.setItem('adminToken', 'dummy-token');
        localStorage.setItem('adminData', JSON.stringify({ name: 'Admin', email: 'learnbygwd@gmail.com' }));
        navigate('/admin/dashboard');
      } else {
        setError('Email atau password salah');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Logo variant="icon" size="large" />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mb-2">Admin Login</h1>
        <p className="text-sm text-apple-gray-medium text-center mb-8">Masuk untuk mengelola konten</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-apple-gray-medium text-sm" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full pl-9 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-apple-gray-medium/50 focus:outline-none focus:border-white/30 transition-all duration-300 font-pixel" />
          </div>
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-apple-gray-medium text-sm" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full pl-9 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-apple-gray-medium/50 focus:outline-none focus:border-white/30 transition-all duration-300 font-pixel" />
          </div>
          {error && <p className="text-xs text-red-400 bg-red-400/10 px-3 py-2 rounded-lg">{error}</p>}
          <button type="submit" disabled={loading} className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-white text-black rounded-full font-semibold text-sm hover:bg-apple-gray-light disabled:opacity-50 transition-all duration-300 cursor-pointer">
            {loading ? <span>Loading...</span> : <><span>Masuk</span><FiArrowRight /></>}
          </button>
        </form>
        <p className="text-xs text-apple-gray-medium/50 text-center mt-6">
          <a href="/" className="hover:text-white transition-colors duration-300">Kembali ke halaman utama</a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;