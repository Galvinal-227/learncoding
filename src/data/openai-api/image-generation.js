export const chapter = {
  slug: "openai-api-image-generation",
  title: "Image Generation (DALL-E)",
  description: "Generate dan edit gambar dengan DALL-E 3 API.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["openai-api-setup"],
  tags: ["openai", "dalle", "image", "generation"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Generate Image (DALL-E 3)

\`\`\`javascript
const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt: 'A serene Japanese garden with cherry blossoms, watercolor painting style',
    n: 1,                       // DALL-E 3 only supports n=1
    size: '1024x1024',          // 1024x1024, 1792x1024, 1024x1792
    quality: 'standard',        // 'standard' or 'hd'
    style: 'vivid'              // 'vivid' or 'natural'
});

console.log(response.data[0].url); // Temporary URL (valid ~1 jam)
console.log(response.data[0].revised_prompt); // Prompt yang di-improve AI
\`\`\`

## Image Sizes & Pricing

| Size | Quality | Price |
|------|---------|-------|
| 1024x1024 | Standard | $0.04 |
| 1024x1024 | HD | $0.08 |
| 1792x1024 | Standard | $0.08 |
| 1792x1024 | HD | $0.12 |

## DALL-E 2 (Generate Multiple)

\`\`\`javascript
const response = await openai.images.generate({
    model: 'dall-e-2',
    prompt: 'A cute cat sitting on a chair',
    n: 3,                       // DALL-E 2 supports up to 10
    size: '512x512',            // 256x256, 512x512, 1024x1024
    response_format: 'url'      // 'url' or 'b64_json'
});

response.data.forEach((image, i) => {
    console.log(\`Image \${i}: \${image.url}\`);
});
\`\`\`

## Edit Image (DALL-E 2 only)

\`\`\`javascript
const response = await openai.images.edit({
    model: 'dall-e-2',
    image: fs.createReadStream('original.png'),   // PNG only, square
    mask: fs.createReadStream('mask.png'),        // Transparent area = edit
    prompt: 'Add sunglasses to the cat',
    n: 1,
    size: '512x512'
});
\`\`\`

## Variation (DALL-E 2 only)

\`\`\`javascript
const response = await openai.images.createVariation({
    model: 'dall-e-2',
    image: fs.createReadStream('image.png'),
    n: 3,
    size: '512x512'
});
\`\`\`

## Save Image

\`\`\`javascript
import axios from 'axios';
import fs from 'fs';

const imageUrl = response.data[0].url;
const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
fs.writeFileSync('generated-image.png', imageResponse.data);
\`\`\`

## Prompt Tips

\`\`\`
✅ Spesifik: "A golden retriever puppy sitting in a sunlit meadow"
✅ Style: "watercolor painting", "photorealistic", "digital art"
✅ Lighting: "golden hour", "studio lighting", "moody atmosphere"
❌ Jangan ambiguous: "a dog" (terlalu vague)
❌ Jangan sebut nama artis hidup (policy)
\`\`\`
  `,

  quiz: [
    { question: "DALL-E 3 max images per call?", options: ["10", "1", "5", "Unlimited"], correctAnswer: 1 },
    { question: "DALL-E edit?", options: ["DALL-E 3 only", "DALL-E 2 only", "Both", "None"], correctAnswer: 1 }
  ],

  codeExamples: []
};