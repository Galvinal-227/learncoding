export const chapter = {
  slug: "headless-cms-sanity",
  title: "Sanity",
  description: "Gunakan Sanity - headless CMS dengan real-time collaboration dan developer experience terbaik.",
  icon: "SiSanity",
  color: "#F03E2F",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["headless-cms-introduction"],
  tags: ["headless-cms", "sanity", "realtime", "developer-first"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Sanity?

Sanity adalah **headless CMS** dengan **real-time collaboration** (seperti Google Docs), schema defined in code, dan GROQ query language yang powerful.

## Setup

\`\`\`bash
npm create sanity@latest
# Pilih template: Blog, Portfolio, Clean
\`\`\`

## Schema (Code-based)

\`\`\`javascript
// schemas/post.js
export default {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
        { name: 'body', title: 'Body', type: 'blockContent' },
        { name: 'publishedAt', title: 'Published At', type: 'datetime' },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }]
        }
    ]
};
\`\`\`

## GROQ Query (Sanity-native)

\`\`\`groq
*[_type == "post"] | order(publishedAt desc) [0...10] {
  title,
  slug,
  "imageUrl": mainImage.asset->url,
  author->{ name, "avatar": image.asset->url }
}
\`\`\`

## Sanity Client

\`\`\`bash
npm install @sanity/client
\`\`\`

\`\`\`javascript
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'your-project-id',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true
});

const posts = await client.fetch(\`*[_type == "post"] | order(_createdAt desc) [0..10]\`);
\`\`\`

## Sanity vs Strapi

| | Sanity | Strapi |
|---|--------|--------|
| Schema | Code (JavaScript) | GUI builder |
| Real-time | ✅ | ❌ |
| Query | GROQ + GraphQL | REST + GraphQL |
| Hosting | Cloud | Self-host |
| Free tier | 3 users, 100GB assets | Unlimited |
  `,

  quiz: [
    { question: "Sanity: query language?", options: ["SQL", "GROQ", "REST", "SOAP"], correctAnswer: 1 },
    { question: "Sanity: real-time?", options: ["Tidak", "Ya (seperti Google Docs)", "Via plugin", "Hanya preview"], correctAnswer: 1 }
  ],

  codeExamples: []
};