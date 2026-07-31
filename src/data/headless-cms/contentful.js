export const chapter = {
  slug: "headless-cms-contentful",
  title: "Contentful",
  description: "Gunakan Contentful - headless CMS enterprise dengan UI polished dan API powerful.",
  icon: "SiContentful",
  color: "#2478CC",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["headless-cms-introduction"],
  tags: ["headless-cms", "contentful", "enterprise", "saas"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Contentful?

Contentful adalah **headless CMS SaaS** (cloud-based) dengan UI polished, API powerful, dan ekosistem besar. Cocok untuk enterprise.

## Setup

\`\`\`bash
npm install contentful
\`\`\`

\`\`\`javascript
import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

// Fetch entries
const entries = await client.getEntries({
    content_type: 'blogPost',
    limit: 10,
    order: ['-sys.createdAt']
});

entries.items.forEach(item => {
    console.log(item.fields.title);
});
\`\`\`

## GraphQL (Contentful)

\`\`\`graphql
query {
  blogPostCollection(limit: 10, order: sys_publishedAt_DESC) {
    items {
      title
      slug
      body { json }
      featuredImage { url title }
      author { name avatar { url } }
    }
  }
}
\`\`\`

## Contentful vs Strapi

| | Contentful | Strapi |
|---|-----------|--------|
| Hosting | Cloud (SaaS) | Self-hosted |
| Setup | 5 menit | 30 menit |
| Free tier | 5 users, 1M API calls | Unlimited |
| Customization | UI + App Framework | Full code access |
| Enterprise | ✅ Built-in | Perlu setup sendiri |
  `,

  quiz: [
    { question: "Contentful: hosting?", options: ["Self-host", "Cloud (SaaS)", "Both", "Static"], correctAnswer: 1 },
    { question: "Contentful: SDK?", options: ["contentful", "@contentful/client", "contentful-sdk", "cf-sdk"], correctAnswer: 0 }
  ],

  codeExamples: []
};