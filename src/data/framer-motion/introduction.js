export const chapter = {
  slug: "framer-motion-introduction",
  title: "Pengenalan Framer Motion",
  description: "Pahami apa itu Framer Motion dan kenapa jadi library animasi #1 untuk React.",
  icon: "SiFramer",
  color: "#0055FF",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["react-introduction"],
  tags: ["framer-motion", "react", "animation", "gesture"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Framer Motion?

Framer Motion adalah library animasi **deklaratif untuk React**. Dibuat oleh tim Framer (sama dengan Figma competitor). API-nya simple tapi sangat powerful.

## Kenapa Framer Motion?

- 🎯 **Deklaratif** - Animasi sebagai prop, bukan imperative code
- ⚡ **Performant** - GPU-accelerated, 60fps
- 🧩 **React-native** - Built specifically for React (bukan porting)
- 🤏 **Gestures** - Hover, tap, drag, pan built-in
- 📐 **Layout animations** - Animate layout changes otomatis
- 📜 **Scroll-based** - Animate berdasarkan scroll position
- 🎨 **Variants** - Define animation states, orchestrate complex sequences

## Instalasi

\`\`\`bash
npm install framer-motion
\`\`\`

## Basic Usage

\`\`\`jsx
import { motion } from 'framer-motion';

function App() {
    return (
        <motion.div
            animate={{ x: 100, opacity: 1 }}
            initial={{ x: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            Hello Motion!
        </motion.div>
    );
}
\`\`\`

## motion Component

\`motion\` punya versi untuk setiap HTML element:

\`\`\`jsx
import { motion } from 'framer-motion';

<motion.div />
<motion.span />
<motion.button />
<motion.img />
<motion.svg />
<motion.path />
<motion.li />
<motion.p />
// ... semua HTML element!
\`\`\`

## Framer Motion vs Lainnya

| | Framer Motion | GSAP | React Spring |
|---|-------------|------|-------------|
| API Style | Declarative | Imperative | Declarative |
| React-native | ✅ Yes | Via plugin | ✅ Yes |
| Learning curve | Rendah | Sedang | Sedang |
| Bundle size | ~30KB | ~60KB | ~50KB |
| Gestures | Built-in | Manual | Manual |
| Layout animation | ✅ Auto | ❌ | ❌ |
  `,

  quiz: [
    { question: "Framer Motion untuk?", options: ["Vue", "React", "Angular", "Svelte"], correctAnswer: 1 },
    { question: "motion.div vs <div>?", options: ["Sama", "motion.div bisa dianimasikan", "div lebih cepat", "motion deprecated"], correctAnswer: 1 },
    { question: "animate vs initial?", options: ["Sama", "animate: state tujuan; initial: state awal", "initial: tujuan", "animate: awal"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Framer Motion Pertama",
      language: "jsx",
      code: `import { motion } from 'framer-motion';

function App() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
                width: 200, height: 200,
                background: '#0055FF', borderRadius: 16,
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: 'white',
                fontSize: 24, fontWeight: 'bold'
            }}
        >
            Hello Motion!
        </motion.div>
    );
}`
    }
  ]
};