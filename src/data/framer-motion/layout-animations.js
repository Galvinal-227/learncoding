export const chapter = {
  slug: "framer-motion-layout-animations",
  title: "Layout Animations",
  description: "Animate layout changes otomatis dengan layout prop dan AnimateSharedLayout.",
  icon: "SiFramer",
  color: "#0055FF",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["framer-motion-variants"],
  tags: ["framer-motion", "layout", "animate-presence", "reorder"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## layout Prop (Auto-magic!)

\`\`\`jsx
// Element otomatis animasi saat posisi/ukuran berubah
<motion.div layout />
\`\`\`

## Contoh: Reorder List

\`\`\`jsx
function SortableList({ items }) {
    const [list, setList] = useState(items);
    
    return (
        <ul>
            {list.map(item => (
                <motion.li
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => removeItem(item.id)}
                >
                    {item.name}
                </motion.li>
            ))}
        </ul>
    );
}
\`\`\`

## Shared Layout (AnimateSharedLayout)

\`\`\`jsx
const [selected, setSelected] = useState(null);

<AnimateSharedLayout>
    {items.map(item => (
        <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelected(item)}
        >
            {selected?.id === item.id && (
                <motion.div layoutId="underline" />
            )}
        </motion.div>
    ))}
</AnimateSharedLayout>
\`\`\`

## Tabs dengan layoutId

\`\`\`jsx
function Tabs({ tabs }) {
    const [active, setActive] = useState(tabs[0]);
    
    return (
        <nav>
            {tabs.map(tab => (
                <button key={tab} onClick={() => setActive(tab)}>
                    {active === tab && (
                        <motion.div
                            layoutId="activeTab"
                            style={{ background: '#0055FF', height: 3 }}
                        />
                    )}
                    {tab}
                </button>
            ))}
        </nav>
    );
}
\`\`\`
  `,

  quiz: [
    { question: "layout prop?", options: ["Grid layout", "Auto-animate layout changes", "CSS layout", "Flexbox"], correctAnswer: 1 },
    { question: "layoutId untuk?", options: ["ID element", "Shared layout animation (smooth transition antar element)", "Sorting", "Delete"], correctAnswer: 1 }
  ],

  codeExamples: []
};