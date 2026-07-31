export const chapter = {
  slug: "openai-api-setup",
  title: "Setup & Authentication",
  description: "Dapatkan API key, install SDK, dan setup environment.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["openai-api-introduction"],
  tags: ["openai", "setup", "api-key", "authentication"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Dapatkan API Key

\`\`\`
1. Buka platform.openai.com
2. Sign up / Login
3. Billing → Add credits ($5 minimum)
4. API Keys → Create new secret key
5. Simpan key (hanya muncul sekali!)
\`\`\`

## Install SDK

\`\`\`bash
npm install openai
\`\`\`

## Setup Environment

\`\`\`bash
# .env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
\`\`\`

\`\`\`javascript
import OpenAI from 'openai';
import 'dotenv/config';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Test connection
const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: 'Say hello in JSON' }],
    response_format: { type: 'json_object' }
});
console.log(completion.choices[0].message.content);
\`\`\`

## Security Best Practices

\`\`\`
✅ Simpan API key di environment variable
✅ JANGAN commit API key ke Git
✅ Gunakan .env + .gitignore
✅ Rotate API key secara berkala
✅ Set usage limits di dashboard
✅ Monitor usage secara rutin
❌ Jangan hardcode API key
❌ Jangan share API key
❌ Jangan expose di frontend (pakai backend)
\`\`\`

## Organization & Projects

\`\`\`javascript
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORG_ID  // Optional
});
\`\`\`
  `,

  quiz: [
    { question: "API key disimpan di?", options: ["Hardcode", "Environment variable (.env)", "GitHub", "Public folder"], correctAnswer: 1 },
    { question: "OpenAI SDK install?", options: ["pip install", "npm install openai", "brew install", "docker pull"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Quick Start",
      language: "javascript",
      code: `import OpenAI from 'openai';
import 'dotenv/config';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function main() {
    const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: 'Hello!' }]
    });
    console.log(response.choices[0].message.content);
}

main();`
    }
  ]
};