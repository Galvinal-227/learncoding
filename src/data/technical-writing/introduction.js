export const chapter = {
  slug: "introduction",
  title: "Pengenalan Technical Writing",
  description: "Memahami dasar-dasar technical writing dan perannya dalam pengembangan software.",
  icon: "SiReadthedocs",
  color: "#4CAF50",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["technical-writing", "documentation", "writing"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Technical Writing?

Technical writing adalah proses menulis dokumentasi teknis yang menjelaskan produk, layanan, atau proses teknis secara jelas dan mudah dipahami.

## Mengapa Technical Writing Penting?

1. **Komunikasi** - Menjembatani antara developer dan pengguna
2. **Produktivitas** - Mengurangi pertanyaan berulang
3. **Kualitas** - Meningkatkan kualitas produk
4. **Adopsi** - Mempermudah onboarding pengguna
5. **Maintenance** - Memudahkan pemeliharaan

## Jenis Dokumentasi

| Jenis | Deskripsi |
|-------|-----------|
| **API Documentation** | Panduan penggunaan API |
| **User Guide** | Panduan untuk end-user |
| **Tutorial** | Panduan langkah demi langkah |
| **Reference** | Dokumentasi referensi |
| **Release Notes** | Catatan rilis |
| **FAQ** | Pertanyaan umum |

## Prinsip Dasar

### 1. Clarity
\`\`\`
✅ Jelas dan mudah dipahami
❌ Ambigu dan membingungkan
\`\`\`

### 2. Conciseness
\`\`\`
✅ Singkat dan padat
❌ Bertele-tele
\`\`\`

### 3. Accuracy
\`\`\`
✅ Akurat dan up-to-date
❌ Salah dan usang
\`\`\`

### 4. Completeness
\`\`\`
✅ Lengkap dan komprehensif
❌ Tidak lengkap
\`\`\`

## Target Audiens

### Developer
- API documentation
- Code comments
- README files
- Contributing guides

### End Users
- User manuals
- Help guides
- FAQs
- Tutorials

### Stakeholders
- Reports
- Proposals
- Specifications
- Meeting notes

## Proses Technical Writing

\`\`\`
Research → Outline → Write → Review → Edit → Publish
\`\`\`

### 1. Research
- Understand the product
- Identify target audience
- Gather requirements

### 2. Outline
- Structure the content
- Define sections
- Create flow

### 3. Write
- Draft content
- Use clear language
- Include examples

### 4. Review
- Technical review
- Editorial review
- Peer review

### 5. Edit
- Fix errors
- Improve clarity
- Format properly

### 6. Publish
- Choose platform
- Format for output
- Maintain updates

## Best Practices

1. **Know your audience** - Sesuaikan dengan pembaca
2. **Use active voice** - Jelas dan langsung
3. **Include examples** - Berikan contoh konkret
4. **Use consistent terminology** - Istilah konsisten
5. **Add visuals** - Gambar dan diagram
6. **Structure clearly** - Organisasi yang jelas
7. **Test your documentation** - Coba sendiri
8. **Keep it updated** - Selalu perbarui
9. **Get feedback** - Minta masukan
10. **Use tools** - Manfaatkan tools
  `,
  quiz: [
    {
      question: "Apa itu technical writing?",
      options: [
        "Menulis fiksi",
        "Menulis dokumentasi teknis",
        "Menulis berita",
        "Menulis puisi"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa jenis dokumentasi untuk API?",
      options: [
        "User Guide",
        "API Documentation",
        "FAQ",
        "Release Notes"
      ],
      correctAnswer: 1
    },
    {
      question: "Prinsip technical writing yang berarti 'jelas dan mudah dipahami' adalah?",
      options: [
        "Clarity",
        "Conciseness",
        "Accuracy",
        "Completeness"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Documentation Plan Template",
      code: `// Documentation Plan
const docPlan = {
    title: "Project Documentation Plan",
    version: "1.0",
    
    audience: {
        primary: "Developers",
        secondary: "End Users",
        tertiary: "Stakeholders"
    },
    
    deliverables: [
        {
            type: "API Documentation",
            format: "OpenAPI/Swagger",
            audience: "Developers",
            deadline: "Week 4"
        },
        {
            type: "User Guide",
            format: "Markdown/PDF",
            audience: "End Users",
            deadline: "Week 6"
        },
        {
            type: "README",
            format: "Markdown",
            audience: "Developers",
            deadline: "Week 2"
        },
        {
            type: "Contributing Guide",
            format: "Markdown",
            audience: "Developers",
            deadline: "Week 3"
        }
    ],
    
    tools: {
        writing: "Markdown",
        editing: "VS Code",
        publishing: "GitHub Pages",
        diagram: "Mermaid.js",
        api: "Swagger"
    },
    
    styleGuide: {
        language: "English",
        tone: "Professional",
        voice: "Active",
        formatting: "Markdown"
    }
};`,
      language: "javascript"
    }
  ]
};