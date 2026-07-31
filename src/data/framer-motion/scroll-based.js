export const chapter = {
  slug: "framer-motion-scroll-based",
  title: "Scroll-Based Animations",
  description: "Animate berdasarkan scroll position dengan useScroll dan useTransform.",
  icon: "SiFramer",
  color: "#0055FF",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["framer-motion-layout-animations"],
  tags: ["framer-motion", "scroll", "parallax", "progress"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## useScroll

\`\`\`jsx
import { useScroll } from 'framer-motion';

function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    
    return (
        <motion.div
            style={{
                scaleX: scrollYProgress,
                transformOrigin: 'left',
                position: 'fixed', top: 0, left: 0, right: 0,
                height: 4, background: '#0055FF', zIndex: 100
            }}
        />
    );
}
\`\`\`

## useTransform (Map Range)

\`\`\`jsx
function ParallaxSection() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    
    return <motion.div style={{ y, opacity }}>Parallax Content</motion.div>;
}
\`\`\`

## Scroll-Triggered Animation

\`\`\`jsx
<motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6 }}
>
    Muncul saat di-scroll ke sini
</motion.div>
\`\`\`
  `,

  quiz: [
    { question: "useScroll return?", options: ["scrollY, scrollYProgress", "scrollX only", "scrollTo", "offset"], correctAnswer: 0 },
    { question: "useTransform?", options: ["CSS transform", "Map input range ke output range", "3D transform", "Rotate"], correctAnswer: 1 }
  ],

  codeExamples: []
};