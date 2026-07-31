export const chapter = {
  slug: "prompt-engineering-advanced-techniques",
  title: "Advanced Techniques",
  description: "Teknik prompting lanjutan: Chain of Thought, Tree of Thought, Self-Consistency.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["prompt-engineering-basic-prompts"],
  tags: ["prompt-engineering", "advanced", "cot", "tot"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 1. Chain of Thought (CoT)

Minta AI "berpikir" langkah demi langkah:

\`\`\`
Prompt: "If a shirt costs $25 and is on sale for 20% off, 
how much do you pay? Think step by step."

Output:
1. Original price: $25
2. 20% of $25 = $25 × 0.20 = $5
3. Sale price = $25 - $5 = $20
Answer: $20
\`\`\`

## 2. Zero-Shot CoT

Cukup tambahkan "Let's think step by step":

\`\`\`
Prompt: "A bakery sells 250 croissants on Monday, 300 on Tuesday, 
and 275 on Wednesday. If each croissant costs $3, what is the total 
revenue for 3 days? Let's think step by step."
\`\`\`

## 3. Self-Consistency

Generate multiple answers, pilih yang paling konsisten:

\`\`\`
Prompt: "Solve this math problem. Generate 3 different approaches 
and pick the most consistent answer.

Problem: A train travels 240 miles in 4 hours. 
What is its average speed?"
\`\`\`

## 4. Tree of Thought (ToT)

Explore multiple reasoning paths:

\`\`\`
Prompt: "We need to increase website traffic by 50% in 3 months.

Explore 3 strategies:
1. SEO optimization
2. Paid advertising
3. Content marketing

For each strategy, list:
- Estimated cost
- Timeline to results
- Potential ROI
- Risks

Then recommend the best approach."
\`\`\`

## 5. ReAct (Reasoning + Acting)

\`\`\`
Prompt: "I need to plan a 3-day trip to Bali with a budget of $500.

Thought: I need to check flight prices first.
Action: Search flights to Bali
Observation: Flights cost $150-250 round trip

Thought: With $250-350 remaining, I need accommodation.
Action: Search hotels in Bali
Observation: Hotels range from $20-100/night

Final Plan: ..."
\`\`\`

## 6. Constitutional AI

\`\`\`
Prompt: "Write a response to this customer complaint, 
following these principles:
1. Be empathetic
2. Offer a concrete solution
3. Don't make promises you can't keep
4. Keep it under 100 words"
\`\`\`
  `,

  quiz: [
    { question: "Chain of Thought (CoT)?", options: ["Direct answer", "Step-by-step reasoning", "No thinking", "Random"], correctAnswer: 1 },
    { question: "Self-Consistency?", options: ["One answer", "Multiple answers, pick most consistent", "Chain", "Tree"], correctAnswer: 1 }
  ],

  codeExamples: []
};