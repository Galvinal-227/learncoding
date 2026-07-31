export const chapter = {
  slug: "ai-integration-image-generation",
  title: "Image Generation AI",
  description: "Pelajari cara generate dan manipulasi gambar dengan AI.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["ai-integration-apis"],
  tags: ["ai", "image", "dall-e", "generation"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## DALL-E (OpenAI)

### Generate Gambar
\`\`\`javascript
const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt: 'A cozy coffee shop interior with warm lighting, digital art style',
    n: 1,
    size: '1024x1024',
    quality: 'standard'
});

const imageUrl = response.data[0].url;
\`\`\`

## Stable Diffusion (via Replicate)

\`\`\`bash
npm install replicate
\`\`\`

\`\`\`javascript
import Replicate from 'replicate';

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN
});

const output = await replicate.run(
    'stability-ai/stable-diffusion-xl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b',
    {
        input: {
            prompt: 'Beautiful landscape, oil painting style',
            negative_prompt: 'blurry, low quality',
            width: 1024,
            height: 1024
        }
    }
);
\`\`\`

## Use Cases

- 🎨 Generate ilustrasi untuk artikel
- 🖼️ Generate thumbnail otomatis
- 🧑‍🎨 Avatar generator
- 📦 Product image generator
- 🎭 Style transfer

## Tips Prompt Gambar

\`\`\`
Prompt yang baik:
✅ "A serene Japanese garden with cherry blossoms, watercolor painting style, soft lighting"
❌ "Garden"

Format:
[Subject] + [Style] + [Lighting] + [Quality]
\`\`\`
  `,

  quiz: [
    { question: "API OpenAI untuk generate gambar?", options: ["GPT-4", "DALL-E", "Claude", "Gemini"], correctAnswer: 1, explanation: "DALL-E (sekarang DALL-E 3) adalah model OpenAI untuk image generation." },
    { question: "Format prompt gambar yang baik?", options: ["Subject saja", "Subject + Style + Lighting + Quality", "Hanya style", "Random"], correctAnswer: 1 }
  ],

  codeExamples: []
};