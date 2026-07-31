export const chapter = {
  slug: "framer-motion-react-integration",
  title: "React Integration Patterns",
  description: "Integrasi Framer Motion dengan React Router, modal, notification, dan loading states.",
  icon: "SiFramer",
  color: "#0055FF",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["framer-motion-animations"],
  tags: ["framer-motion", "react", "router", "modal"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Page Transition (React Router)

\`\`\`jsx
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <Home />
                    </motion.div>
                } />
            </Routes>
        </AnimatePresence>
    );
}
\`\`\`

## Modal Animation

\`\`\`jsx
function Modal({ isOpen, onClose, children }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={overlayStyle}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        style={modalStyle}
                    >
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
\`\`\`

## Notification / Toast

\`\`\`jsx
function Toast({ message, type }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            style={toastStyle}
        >
            {message}
        </motion.div>
    );
}
\`\`\`
  `,

  quiz: [
    { question: "AnimatePresence mode='wait'?", options: ["Langsung", "Tunggu exit selesai baru enter", "Paralel", "Skip exit"], correctAnswer: 1 },
    { question: "Page transition pakai?", options: ["location.pathname as key", "useState", "useEffect", "useRef"], correctAnswer: 0 }
  ],

  codeExamples: []
};