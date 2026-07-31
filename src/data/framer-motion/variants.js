export const chapter = {
  slug: "framer-motion-variants",
  title: "Variants",
  description: "Gunakan variants untuk orchestrate complex animations dengan bersih.",
  icon: "SiFramer",
  color: "#0055FF",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["framer-motion-animations"],
  tags: ["framer-motion", "variants", "orchestration", "states"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Variants?

Variants = **named animation states** yang bisa dipakai ulang di banyak element.

## Basic Variants

\`\`\`jsx
const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

<motion.div
    variants={variants}
    initial="hidden"
    animate="visible"
    exit="exit"
/>
\`\`\`

## Propagation (Parent → Child)

\`\`\`jsx
const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};

<motion.ul variants={listVariants} initial="hidden" animate="visible">
    {items.map(item => (
        <motion.li key={item} variants={itemVariants} />
    ))}
</motion.ul>
\`\`\`

## Dynamic Variants (Custom Prop)

\`\`\`jsx
const variants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
        opacity: 1,
        transition: { delay: i * 0.1 }
    })
};

<motion.div custom={index} variants={variants} />
\`\`\`
  `,

  quiz: [
    { question: "Variants untuk?", options: ["Debug", "Named animation states, reusable", "Styling", "Routing"], correctAnswer: 1 },
    { question: "staggerChildren?", options: ["Delay semua", "Delay antar children (bertahap)", "Reverse", "Hapus children"], correctAnswer: 1 }
  ],

  codeExamples: []
};