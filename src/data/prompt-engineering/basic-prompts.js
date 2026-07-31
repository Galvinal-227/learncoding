export const chapter = {
  slug: "prompt-engineering-basic-prompts",
  title: "Basic Prompting",
  description: "Kuasai teknik dasar: zero-shot, instruction prompting, output formatting.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["prompt-engineering-introduction"],
  tags: ["prompt-engineering", "basic", "zero-shot", "formatting"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Zero-Shot Prompting

Tidak ada contoh, langsung instruksi:

\`\`\`
Prompt: "Classify this review as positive or negative: 
'The product arrived broken and customer service was unhelpful.'"

Output: "Negative"
\`\`\`

## Instruction Prompting

Berikan instruksi jelas:

\`\`\`
✅ "Summarize this article in 3 bullet points"
✅ "Translate to Indonesian: 'Hello, how are you?'"
✅ "Extract all email addresses from this text"
✅ "Rewrite this paragraph in a professional tone"
\`\`\`

## Output Formatting

### JSON Output
\`\`\`
Prompt: "Return a JSON object with name, age, and city for the following: 
Budi, 25 tahun, tinggal di Jakarta"

Output:
{
    "name": "Budi",
    "age": 25,
    "city": "Jakarta"
}
\`\`\`

### Table Format
\`\`\`
Prompt: "List top 5 programming languages with creator and year. Format as markdown table."

Output:
| Language | Creator | Year |
|----------|---------|------|
| Python | Guido van Rossum | 1991 |
| JavaScript | Brendan Eich | 1995 |
| ... | ... | ... |
\`\`\`

### Bullet Points
\`\`\`
Prompt: "List 5 benefits of TypeScript in bullet points"
\`\`\`

## Do's and Don'ts

### ✅ DO:
\`\`\`
- "Explain like I'm 5"
- "Be concise, max 100 words"
- "Use simple English (A2 level)"
- "Provide code example in JavaScript"
- "Think step by step"
\`\`\`

### ❌ DON'T:
\`\`\`
- "Do something cool"
- "Make it better"
- Vague instructions without context
- Multiple unrelated tasks in one prompt
\`\`\`

## Constraints

\`\`\`
"Write a product description for a laptop:"
- Max 50 words
- Include price
- No technical jargon
- Tone: friendly and casual
- End with a call to action
\`\`\`
  `,

  quiz: [
    { question: "Zero-shot?", options: ["With examples", "No examples, direct instruction", "Many examples", "Chain"], correctAnswer: 1 },
    { question: "Output formatting?", options: ["Ignore", "Request JSON, table, bullet points", "Plain only", "Random"], correctAnswer: 1 }
  ],

  codeExamples: []
};