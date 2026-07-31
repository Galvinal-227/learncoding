import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiFolder, FiMessageSquare, FiHome, FiChevronLeft, FiChevronRight, FiMail } from 'react-icons/fi';
import Logo from '../../components/Logo';

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: <FiHome />, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: <FiFolder />, label: 'Projects', href: '/admin/projects' },
    { icon: <FiMessageSquare />, label: 'Quotes', href: '/admin/quotes' },
    { icon: <FiMail />, label: 'Pesan', href: '/admin/messages' },
  ];

  return (
    <>
      {/* Mobile sidebar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-lg border-b border-white/10 px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo variant="minimal" size="small" />
          <div className="flex items-center space-x-2">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} className={`p-2 rounded-lg transition-all duration-300 ${location.pathname === item.href ? 'bg-white text-black' : 'text-apple-gray-medium hover:text-white'}`}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className={`hidden md:block fixed top-0 left-0 h-screen bg-black border-r border-white/10 transition-all duration-300 z-30 ${collapsed ? 'w-20' : 'w-64'}`}>
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          {!collapsed && <Logo variant="full" />}
          <button onClick={() => setCollapsed(!collapsed)} className="p-1.5 text-apple-gray-medium hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 cursor-pointer">
            {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
          </button>
        </div>
        <div className="p-3 space-y-1">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-300 ${location.pathname === item.href ? 'bg-white text-black' : 'text-apple-gray-medium hover:text-white hover:bg-white/5'}`}>
              <span className="text-lg">{item.icon}</span>
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;