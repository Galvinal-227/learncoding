export const chapter = {
  slug: "framer-motion-gestures",
  title: "Gestures (Hover, Tap, Drag)",
  description: "Tambahkan interaktivitas dengan gesture animations: whileHover, whileTap, drag.",
  icon: "SiFramer",
  color: "#0055FF",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["framer-motion-animations"],
  tags: ["framer-motion", "gestures", "hover", "drag"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Hover & Tap

\`\`\`jsx
<motion.button
    whileHover={{ scale: 1.1, backgroundColor: '#0066FF' }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
>
    Click Me
</motion.button>
\`\`\`

## Focus & InView

\`\`\`jsx
<motion.input
    whileFocus={{ scale: 1.02, borderColor: '#0055FF' }}
/>

<motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    viewport={{ once: true, margin: '-100px' }}
/>
\`\`\`

## Drag

\`\`\`jsx
<motion.div
    drag
    dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
    dragElastic={0.2}
    whileDrag={{ scale: 1.1, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
    style={{ width: 100, height: 100, background: '#0055FF', borderRadius: 16 }}
/>
\`\`\`

### Drag Constraints (Parent)
\`\`\`jsx
<motion.div style={{ width: 400, height: 400, border: '2px dashed #ccc' }}>
    <motion.div
        drag
        dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
    />
</motion.div>
\`\`\`

### onDrag Events
\`\`\`jsx
<motion.div
    drag="x"
    onDragStart={() => console.log('Drag started')}
    onDragEnd={(event, info) => {
        console.log(info.point.x, info.velocity.x);
        if (info.offset.x > 100) handleSwipe();
    }}
/>
\`\`\`
  `,

  quiz: [
    { question: "whileHover?", options: ["CSS hover", "Animate saat hover", "Drag event", "Click event"], correctAnswer: 1 },
    { question: "dragConstraints?", options: ["Hapus drag", "Batasi area drag", "Percepat drag", "Drag arah"], correctAnswer: 1 }
  ],

  codeExamples: []
};