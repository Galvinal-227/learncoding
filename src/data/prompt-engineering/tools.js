export const chapter = {
  slug: "prompt-engineering-tools",
  title: "Tools & Playgrounds",
  description: "Tools untuk eksperimen dan optimasi prompt engineering.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["prompt-engineering-introduction"],
  tags: ["prompt-engineering", "tools", "playground", "testing"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Playgrounds

| Tool | Provider | Best For |
|------|----------|----------|
| **OpenAI Playground** | OpenAI | GPT-4, all models |
| **Anthropic Console** | Anthropic | Claude |
| **Google AI Studio** | Google | Gemini |
| **HuggingFace Chat** | Community | Open source models |
| **Poe.com** | Various | Compare models |

## Prompt Management

| Tool | Fungsi |
|------|--------|
| **PromptLayer** | Version control prompts |
| **LangSmith** | Debug, test, monitor LLM apps |
| **Helicone** | Logging & analytics |
| **Keywords AI** | Prompt playground + monitoring |

## Libraries

\`\`\`bash
# LangChain (Python/JS)
npm install langchain

# Vercel AI SDK (for Next.js)
npm install ai

# Anthropic SDK
npm install @anthropic-ai/sdk

# OpenAI SDK
npm install openai
\`\`\`

## Testing Prompts

\`\`\`javascript
// Simple prompt testing
const prompts = [
    "Explain quantum computing simply",
    "Jelaskan quantum computing seperti saya 5 tahun",
    "You are a physics teacher. Explain quantum computing to a 10-year-old using analogies."
];

for (const prompt of prompts) {
    const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }]
    });
    console.log(response.choices[0].message.content);
    console.log('---');
}
\`\`\`

## Prompt Optimization Tips

\`\`\`
1. Mulai dari prompt sederhana
2. Tambah detail bertahap
3. Bandingkan respons
4. Iterasi sampai dapat hasil optimal
5. Dokumentasikan prompt yang berhasil
6. Simpan di prompt library
\`\`\`
  `,

  quiz: [
    { question: "OpenAI Playground?", options: ["Code editor", "Test prompts with GPT models", "Database", "Deploy"], correctAnswer: 1 },
    { question: "PromptLayer?", options: ["Testing", "Version control for prompts", "Database", "Auth"], correctAnswer: 1 }
  ],

  codeExamples: []
};