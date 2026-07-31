export const chapter = {
  slug: "markdown-links",
  title: "Links & Images",
  description: "Tambah hyperlinks, images, dan reference-style links di Markdown.",
  icon: "SiMarkdown",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["markdown-syntax"],
  tags: ["markdown", "links", "images", "reference"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Basic Links

\`\`\`markdown
[Link text](https://www.example.com)

[Link with title](https://www.example.com "Hover title")
\`\`\`

**Rendered:** [Link text](https://www.example.com)

## Relative Links

\`\`\`markdown
[About page](./about.md)
[Home](../README.md)
[Section heading](#section-name)
\`\`\`

## Reference-Style Links

\`\`\`markdown
[Link text][reference]

[reference]: https://www.example.com "Optional title"

# Atau:
[Google][1]
[GitHub][2]

[1]: https://google.com
[2]: https://github.com
\`\`\`

## Auto-Links

\`\`\`markdown
<https://www.example.com>
<user@example.com>
\`\`\`

## Images

\`\`\`markdown
![Alt text](image.jpg)

![Alt text](image.jpg "Image title")

# Reference-style image
![Alt text][image-ref]

[image-ref]: image.jpg "Optional title"

# Linked image (klik gambar → ke link)
[![Alt text](image.jpg)](https://example.com)
\`\`\`

## Image with Size (HTML)

\`\`\`html
<img src="image.jpg" alt="Alt text" width="300" height="200">
\`\`\`

## Tips

\`\`\`
✅ Alt text wajib untuk aksesibilitas
✅ Gunakan reference-style untuk dokumen panjang (banyak link)
✅ Auto-link untuk URL/email (pakai <>)
✅ Image: bisa resize pakai HTML <img> tag
✅ Pastikan link tidak broken (cek berkala)
\`\`\`
  `,

  quiz: [
    { question: "Basic link syntax?", options: ["[text](url)", "(text)[url]", "{text}(url)", "<text>(url)"], correctAnswer: 0 },
    { question: "Image syntax?", options: ["[alt](url)", "![alt](url)", "(alt)[url]", "<img=url>"], correctAnswer: 1 },
    { question: "Auto-link?", options: ["[url]", "<url>", "(url)", "{url}"], correctAnswer: 1 }
  ],

  codeExamples: []
};