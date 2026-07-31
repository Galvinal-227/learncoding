export const chapter = {
  slug: "headless-cms-usage",
  title: "Integrasi Frontend",
  description: "Integrasikan Headless CMS dengan Next.js, React, dan framework frontend lainnya.",
  icon: "SiStrapi",
  color: "#4945FF",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["headless-cms-api"],
  tags: ["headless-cms", "nextjs", "react", "integration"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Next.js + Strapi (Full Example)

### 1. List Articles
\`\`\`jsx
// app/blog/page.js
export default async function BlogPage() {
    const articles = await fetchArticles();
    
    return (
        <div>
            <h1>Blog</h1>
            {articles.map(article => (
                <article key={article.id}>
                    <h2>{article.attributes.title}</h2>
                    <p>{article.attributes.excerpt}</p>
                    <Link href={\`/blog/\${article.attributes.slug}\`}>Read more</Link>
                </article>
            ))}
        </div>
    );
}
\`\`\`

### 2. Single Article
\`\`\`jsx
// app/blog/[slug]/page.js
export async function generateStaticParams() {
    const articles = await fetchArticles();
    return articles.map(a => ({ slug: a.attributes.slug }));
}

export default async function ArticlePage({ params }) {
    const article = await fetchArticle(params.slug);
    
    return (
        <article>
            <h1>{article.attributes.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.attributes.content }} />
        </article>
    );
}
\`\`\`

## Rich Text Renderer

\`\`\`bash
npm install @strapi/blocks-react-renderer
\`\`\`

\`\`\`jsx
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

<BlocksRenderer content={article.attributes.content} />
\`\`\`

## Dynamic Zones

\`\`\`jsx
function DynamicZone({ components }) {
    const componentMap = {
        'blocks.hero': HeroBlock,
        'blocks.cta': CTABlock,
        'blocks.testimonial': TestimonialBlock,
    };
    
    return components.map((comp, i) => {
        const Component = componentMap[comp.__component];
        return Component ? <Component key={i} {...comp} /> : null;
    });
}
\`\`\`

## SEO Metadata

\`\`\`jsx
export async function generateMetadata({ params }) {
    const article = await fetchArticle(params.slug);
    return {
        title: article.attributes.seo?.metaTitle || article.attributes.title,
        description: article.attributes.seo?.metaDescription,
        openGraph: {
            images: [article.attributes.featuredImage?.data?.attributes?.url]
        }
    };
}
\`\`\`
  `,

  quiz: [
    { question: "generateStaticParams?", options: ["Server", "Generate static paths (SSG) Next.js", "Client", "API"], correctAnswer: 1 },
    { question: "Dynamic Zone?", options: ["Database", "Flexible content sections (component mapping)", "Cache", "Auth"], correctAnswer: 1 }
  ],

  codeExamples: []
};