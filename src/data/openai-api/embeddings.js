export const chapter = {
  slug: "openai-api-embeddings",
  title: "Embeddings",
  description: "Gunakan Embeddings untuk semantic search, clustering, dan rekomendasi.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["openai-api-setup"],
  tags: ["openai", "embeddings", "vector", "search"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Embeddings?

Embeddings adalah **representasi numerik (vector)** dari teks. Teks dengan makna mirip → vector berdekatan.

## Generate Embeddings

\`\`\`javascript
const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',  // atau text-embedding-3-large
    input: 'Saya suka belajar AI',
    encoding_format: 'float'
});

const embedding = response.data[0].embedding;
console.log(embedding.length); // 1536 (small) or 3072 (large)
console.log(embedding.slice(0, 5)); // [0.0123, -0.0456, ...]
\`\`\`

## Models

| Model | Dimensions | Price |
|-------|-----------|-------|
| text-embedding-3-small | 1536 | $0.02/1M tokens |
| text-embedding-3-large | 3072 | $0.13/1M tokens |
| ada v2 (legacy) | 1536 | $0.10/1M tokens |

## Batch Embeddings

\`\`\`javascript
const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: [
        'Cara membuat kue coklat',
        'Resep brownies sederhana',
        'Hari ini hujan deras'
    ]
});

const embeddings = response.data.map(item => item.embedding);
\`\`\`

## Cosine Similarity

\`\`\`javascript
function cosineSimilarity(vecA, vecB) {
    const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    return dotProduct / (magnitudeA * magnitudeB);
}

// Kue coklat vs Brownies = similar!
const similarity = cosineSimilarity(embeddings[0], embeddings[1]);
console.log(similarity); // 0.85 (high similarity)

// Kue coklat vs Hujan = tidak mirip
console.log(cosineSimilarity(embeddings[0], embeddings[2])); // 0.15
\`\`\`

## Semantic Search Example

\`\`\`javascript
const documents = [
    'Cara membuat kue coklat',
    'Resep brownies sederhana',
    'Hari ini hujan deras',
    'Cara install Node.js',
    'Tutorial npm untuk pemula'
];

// 1. Generate embeddings untuk semua dokumen
const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: documents
});
const docEmbeddings = response.data.map(d => d.embedding);

// 2. Search
const query = 'bagaimana cara baking kue?';
const queryEmbed = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: query
});
const queryVec = queryEmbed.data[0].embedding;

// 3. Hitung similarity
const scores = docEmbeddings.map((vec, i) => ({
    index: i,
    document: documents[i],
    score: cosineSimilarity(queryVec, vec)
}));

// 4. Sort & tampilkan
scores.sort((a, b) => b.score - a.score);
scores.slice(0, 3).forEach(s => console.log(s.document));
// Cara membuat kue coklat (0.82)
// Resep brownies sederhana (0.78)
// ...
\`\`\`

## Use Cases

| Use Case | Deskripsi |
|----------|-----------|
| **Semantic Search** | Cari berdasarkan makna, bukan keyword |
| **RAG** | QA dengan dokumen internal |
| **Clustering** | Kelompokkan teks mirip |
| **Rekomendasi** | "Artikel terkait" |
| **Klasifikasi** | Zero-shot classification |
  `,

  quiz: [
    { question: "Embeddings?", options: ["Gambar", "Vector numerik (makna teks)", "Audio", "Video"], correctAnswer: 1 },
    { question: "Cosine similarity?", options: ["Edit distance", "Ukuran kemiripan 2 vector (0-1)", "Token count", "Error rate"], correctAnswer: 1 }
  ],

  codeExamples: []
};