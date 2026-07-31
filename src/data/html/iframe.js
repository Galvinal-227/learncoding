export const chapter = {
  slug: "html-iframe",
  title: "Iframe",
  description: "Pelajari cara menyematkan konten eksternal ke halaman web menggunakan iframe.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["html-elements"],
  tags: ["html", "iframe", "embed", "konten-eksternal"],
  order: 25,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Iframe?

Iframe (Inline Frame) digunakan untuk menyematkan halaman web lain di dalam halamanmu.

## Sintaks Dasar

\`\`\`html
<iframe src="https://example.com" width="600" height="400" title="Deskripsi konten">
</iframe>
\`\`\`

## Atribut Penting

### src
URL yang akan disematkan:
\`\`\`html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
\`\`\`

### title (Wajib untuk Aksesibilitas)
\`\`\`html
<iframe src="peta.html" title="Peta Lokasi Kantor"></iframe>
\`\`\`

### sandbox
Membatasi apa yang bisa dilakukan iframe:
\`\`\`html
<iframe src="https://example.com" sandbox="allow-scripts allow-same-origin">
</iframe>
\`\`\`

### loading
\`\`\`html
<iframe src="https://example.com" loading="lazy"></iframe>
\`\`\`

### allow
Mengizinkan fitur browser:
\`\`\`html
<iframe src="https://example.com" 
        allow="camera; microphone; fullscreen">
</iframe>
\`\`\`

## Penggunaan Umum

### YouTube
\`\`\`html
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="Video YouTube"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
</iframe>
\`\`\`

### Google Maps
\`\`\`html
<iframe src="https://www.google.com/maps/embed?pb=!1m18..."
        width="600" height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        title="Peta Lokasi">
</iframe>
\`\`\`

## Keamanan Iframe

⚠️ **Penting:**
- Hanya sematkan konten dari sumber terpercaya
- Gunakan atribut \`sandbox\` untuk membatasi
- Iframe bisa menjadi celah keamanan (clickjacking)

\`\`\`html
<!-- Iframe paling aman -->
<iframe src="https://trusted.com" 
        sandbox="allow-scripts"
        title="Konten Terpercaya">
</iframe>
\`\`\`
  `,

  quiz: [
    {
      question: "Atribut apa yang WAJIB ada di iframe untuk aksesibilitas?",
      options: ["src", "width", "title", "height"],
      correctAnswer: 2,
      explanation: "Atribut title wajib di iframe agar screen reader bisa memberi tahu pengguna tentang konten di dalam iframe."
    },
    {
      question: "Apa fungsi atribut sandbox pada iframe?",
      options: [
        "Mempercepat loading",
        "Membatasi kemampuan iframe untuk keamanan",
        "Mengubah tampilan",
        "Menambahkan scrollbar"
      ],
      correctAnswer: 1,
      explanation: "Atribut sandbox membatasi apa yang bisa dilakukan konten di dalam iframe, meningkatkan keamanan."
    }
  ],

  codeExamples: [
    {
      title: "Berbagai Penggunaan Iframe",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Contoh Iframe</title>
</head>
<body>
    <h1>Contoh Penggunaan Iframe</h1>
    
    <!-- YouTube -->
    <h2>Video YouTube</h2>
    <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video tutorial HTML"
            allow="accelerometer; autoplay; encrypted-media; gyroscope"
            allowfullscreen>
    </iframe>
    
    <!-- Google Maps -->
    <h2>Lokasi Kantor</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1234567890"
            width="600" height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            title="Peta lokasi kantor">
    </iframe>
    
    <!-- Iframe dengan sandbox -->
    <h2>Iframe Aman</h2>
    <iframe src="https://example.com"
            width="400" height="300"
            sandbox="allow-scripts"
            title="Website contoh (aman)">
    </iframe>
</body>
</html>`,
      output: "Berbagai penggunaan iframe untuk menyematkan konten eksternal."
    }
  ]
};