export const chapter = {
  slug: "prompt-engineering-few-shot",
  title: "Few-Shot Learning",
  description: "Gunakan examples untuk mengajari AI pola yang diinginkan.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["prompt-engineering-basic-prompts"],
  tags: ["prompt-engineering", "few-shot", "examples", "pattern"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Few-Shot?

Few-shot prompting = memberikan **beberapa contoh** input→output sebelum pertanyaan sebenarnya. AI belajar dari pola.

## Zero-Shot vs Few-Shot

### Zero-Shot (No Examples):
\`\`\`
"Classify: 'Produk bagus!' →"
\`\`\`

### Few-Shot (With Examples):
\`\`\`
"Classify sentiment:

Review: 'Barang rusak' → Negative
Review: 'Pengiriman cepat, produk OK' → Neutral
Review: 'Suka banget! Recommended!' → Positive
Review: 'Produk bagus!' →"
\`\`\`

## Few-Shot Patterns

### 1. Text Classification
\`\`\`
"Classify tech stack:

'React, Node.js, MongoDB' → MERN
'Vue, Laravel, MySQL' → VLM
'Angular, Django, PostgreSQL' → ADP
'Svelte, Express, SQLite' →"
\`\`\`

### 2. Format Conversion
\`\`\`
"Convert to JSON:

Name: Budi, Age: 25 → {"name":"Budi","age":25}
Name: Siti, Age: 23 → {"name":"Siti","age":23}
Name: Agus, Age: 30 →"
\`\`\`

### 3. Code Generation
\`\`\`
"Generate function:

// Add two numbers
function add(a, b) { return a + b; }

// Check if even
function isEven(n) { return n % 2 === 0; }

// Calculate factorial
"
\`\`\`

## Tips Few-Shot

\`\`\`
✅ 3-5 examples ideal
✅ Consistent format
✅ Cover edge cases
✅ Show both positive & negative examples
✅ Examples should match desired output
✅ Order matters (easy → hard)
\`\`\`
  `,

  quiz: [
    { question: "Few-shot vs Zero-shot?", options: ["Same", "Few-shot: with examples; Zero-shot: no examples", "Zero-shot: with examples", "Both same"], correctAnswer: 1 },
    { question: "Ideal examples?", options: ["1", "3-5 consistent examples", "20+", "No examples"], correctAnswer: 1 }
  ],

  codeExamples: []
};