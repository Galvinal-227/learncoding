export const chapter = {
  slug: "framer-motion-animations",
  title: "Basic Animations",
  description: "Kuasai animasi dasar: animate, initial, transition, keyframes, dan exit.",
  icon: "SiFramer",
  color: "#0055FF",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["framer-motion-introduction"],
  tags: ["framer-motion", "animation", "transition", "keyframes"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Animate & Initial

\`\`\`jsx
<motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
/>
\`\`\`

## Transition Options

\`\`\`jsx
<motion.div
    animate={{ x: 100 }}
    transition={{
        duration: 0.8,
        delay: 0.2,
        ease: 'easeInOut',
        type: 'spring',       // Spring physics!
        stiffness: 100,
        damping: 10,
        mass: 1,
        repeat: Infinity,
        repeatType: 'reverse'
    }}
/>
\`\`\`

## Spring Animation

\`\`\`jsx
<motion.div
    animate={{ scale: 1 }}
    initial={{ scale: 0 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
/>
\`\`\`

## Keyframes

\`\`\`jsx
<motion.div
    animate={{
        x: [0, 100, 0],        // Array = keyframes
        opacity: [0, 1, 0]
    }}
    transition={{ duration: 2, repeat: Infinity }}
/>
\`\`\`

## Exit Animation (AnimatePresence)

\`\`\`jsx
import { AnimatePresence, motion } from 'framer-motion';

function ToggleContent({ isVisible }) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    Content here
                </motion.div>
            )}
        </AnimatePresence>
    );
}
\`\`\`

## Orchestration (delay children)

\`\`\`jsx
<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
    <motion.div
        variants={{
            show: { transition: { staggerChildren: 0.1 } }
        }}
    >
        {items.map(item => (
            <motion.div
                key={item.id}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                }}
            />
        ))}
    </motion.div>
</motion.div>
\`\`\`
  `,

  quiz: [
    { question: "AnimatePresence untuk?", options: ["Initial state", "Exit animation (saat element dihapus)", "Hover", "Drag"], correctAnswer: 1 },
    { question: "Spring animation?", options: ["CSS ease", "Physics-based (stiffness, damping)", "Linear", "Steps"], correctAnswer: 1 },
    { question: "Keyframes di Framer Motion?", options: ["Pakai @keyframes", "Array values: [0, 100, 0]", "Pakai CSS", "Tidak bisa"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Stagger Animation List",
      language: "jsx",
      code: `import { motion } from 'framer-motion';

const items = ['React', 'Vue', 'Angular', 'Svelte'];

function StaggerList() {
    return (
        <motion.ul
            variants={{
                show: { transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            animate="show"
        >
            {items.map((item, i) => (
                <motion.li
                    key={item}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        show: { opacity: 1, x: 0 }
                    }}
                >
                    {item}
                </motion.li>
            ))}
        </motion.ul>
    );
}`
    }
  ]
};