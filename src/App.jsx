import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Kurikulum from './components/Kurikulum';
import Learn from './components/Learn';
import LearnDetail from './pages/LearnDetail';
import ChapterDetail from './pages/ChapterDetail';
import Quotes from './components/Quotes';
import About from './components/About';
import LoadingScreen from './components/LoadingScreen';
import PixelStudio from './pages/PixelStudio';
import AdminShortcut from './components/AdminShortcut';
import AdminRoute from './components/admin/AdminRoute';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminProjects from './pages/admin/AdminProjects';
import AdminQuotes from './pages/admin/AdminQuotes';
import AdminMessages from './pages/admin/Messages';

const PublicLayout = ({ scrollContainerRef }) => {
  useEffect(() => {
    let scrollInstance = null;
    const initLocomotive = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        scrollInstance = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true,
          smartphone: { smooth: true },
          tablet: { smooth: true }
        });
        scrollInstance.on('scroll', (obj) => {
          window.__locomotiveScrollY = obj.scroll.y;
          window.dispatchEvent(new CustomEvent('loco-scroll', { detail: { scrollY: obj.scroll.y } }));
        });
      } catch (error) {
        console.warn('Locomotive Scroll gagal load:', error);
      }
    };
    initLocomotive();
    return () => {
      if (scrollInstance) {
        scrollInstance.destroy();
      }
    };
  }, []);

 const locoRef = useRef(null);

useEffect(() => {
  let scrollInstance = null;

  const initLocomotive = async () => {
    const LocomotiveScroll = (await import("locomotive-scroll")).default;

    scrollInstance = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    locoRef.current = scrollInstance;
  };

  initLocomotive();

  return () => scrollInstance?.destroy();
}, []);

const handleScrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (element && locoRef.current) {
    locoRef.current.scrollTo(element, {
      offset: -80,
    });
  }
};

  return (
    <div ref={scrollContainerRef} className="min-h-screen bg-black text-white font-pixel">
      <Navbar onScrollTo={handleScrollTo} />
      <div id="hero"><Hero /></div>
      <div id="kurikulum"><Kurikulum /></div>
      <div id="learn"><Learn /></div>
      <div id="quotes"><Quotes /></div>
      <div id="about"><About /></div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef(null);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Router>
              <AdminShortcut />
              <Routes>
                <Route path="/" element={<PublicLayout scrollContainerRef={scrollContainerRef} />} />
                <Route path="/learn/:slug" element={<LearnDetail />} />
                <Route path="/learn/:slug/:chapterSlug" element={<ChapterDetail />} />
                <Route path="/pixel-studio" element={<PixelStudio />} />
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin/dashboard" element={<AdminRoute><Dashboard /></AdminRoute>} />
                <Route path="/admin/projects" element={<AdminRoute><AdminProjects /></AdminRoute>} />
                <Route path="/admin/quotes" element={<AdminRoute><AdminQuotes /></AdminRoute>} />
                <Route path="/admin/messages" element={<AdminRoute><AdminMessages /></AdminRoute>} />
              </Routes>
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;