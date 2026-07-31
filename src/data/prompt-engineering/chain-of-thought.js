export const chapter = {
  slug: "prompt-engineering-chain-of-thought",
  title: "Chain of Thought (CoT)",
  description: "Deep dive ke Chain of Thought prompting untuk reasoning yang kompleks.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["prompt-engineering-advanced-techniques"],
  tags: ["prompt-engineering", "cot", "reasoning", "step-by-step"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## CoT in Coding

### Debugging:
\`\`\`
Prompt: "Find the bug in this code. Think step by step:

function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i <= items.length; i++) {
        total += items[i].price;
    }
    return total;
}"

Step-by-step reasoning:
1. Loop runs from i=0 to i=items.length (inclusive)
2. When i=items.length, items[items.length] is undefined
3. Accessing .price on undefined throws TypeError
4. Fix: change <= to < in loop condition
\`\`\`

### Architecture Decision:
\`\`\`
Prompt: "Should I use SQL or NoSQL for an e-commerce platform? 
Think step by step considering:
- Data structure (products, orders, users)
- Relationships
- Scalability needs
- Transaction requirements

Walk through each consideration before making a recommendation."
\`\`\`

## CoT Formula

\`\`\`
1. State the problem
2. Break it down into sub-problems
3. Solve each sub-problem
4. Combine solutions
5. Verify the answer
\`\`\`

## When to Use CoT

✅ Math problems
✅ Logic puzzles
✅ Debugging code
✅ Complex reasoning
✅ Multi-step tasks

❌ Simple factual questions
❌ Tasks that need creativity
❌ Short responses
  `,

  quiz: [
    { question: "CoT best for?", options: ["Simple facts", "Complex reasoning, math, debugging", "Creative writing", "Short answers"], correctAnswer: 1 },
    { question: "CoT keyword?", options: ["Just answer", "Think step by step", "Be creative", "Make it short"], correctAnswer: 1 }
  ],

  codeExamples: []
};