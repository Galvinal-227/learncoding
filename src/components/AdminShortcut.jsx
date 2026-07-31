import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminShortcut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        const token = localStorage.getItem('adminToken');
        if (token) {
          navigate('/admin/dashboard');
        } else {
          navigate('/admin/login');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return null;
};

export default AdminShortcut;