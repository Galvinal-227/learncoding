export const chapter = {
  slug: "web-storage-local-storage",
  title: "localStorage",
  description: "Gunakan localStorage untuk menyimpan data persistent di browser.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["web-storage-introduction"],
  tags: ["web-storage", "localStorage", "browser"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Basic Operations

\`\`\`javascript
// Save
localStorage.setItem('theme', 'dark');
localStorage.setItem('user', JSON.stringify({ name: 'Budi' }));

// Read
const theme = localStorage.getItem('theme');  // 'dark'
const user = JSON.parse(localStorage.getItem('user'));

// Remove
localStorage.removeItem('theme');

// Clear all
localStorage.clear();

// Check length
console.log(localStorage.length);
\`\`\`

## Custom Hook (React)

\`\`\`javascript
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue];
}
\`\`\`

## Limitations

\`\`\`
❌ Only strings (serialize with JSON)
❌ Synchronous (blocks main thread)
❌ 5-10MB limit
❌ No indexing/querying
❌ Not available in Web Workers
\`\`\`
  `,
  quiz: [
    { question: "localStorage: setItem?", options: ["Read", "Save data", "Delete", "Clear all"], correctAnswer: 1 },
    { question: "localStorage: data type?", options: ["Object", "String only", "Number", "Any"], correctAnswer: 1 }
  ],
  codeExamples: []
};