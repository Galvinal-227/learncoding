export const chapter = {
  slug: "media-queries",
  title: "Media Queries Dasar",
  description: "Belajar menggunakan media queries untuk membuat desain responsif.",
  icon: "SiCss3",
  color: "#2965F1",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["responsive-introduction"],
  tags: ["css", "media-queries", "responsive", "breakpoints"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Media Queries?

Media queries adalah fitur CSS yang memungkinkan kita menerapkan gaya CSS berdasarkan kondisi tertentu seperti ukuran layar, resolusi, atau orientasi perangkat.

## Sintaks Dasar

\`\`\`css
/* Dasar */
@media (condition) {
    /* CSS rules */
}

/* Dengan media type */
@media not|only mediatype and (condition) {
    /* CSS rules */
}
\`\`\`

## Media Types

- **all** - Semua perangkat
- **screen** - Layar (komputer, tablet, smartphone)
- **print** - Printer
- **speech** - Screen reader

## Breakpoints Umum

| Perangkat | Lebar Layar |
|-----------|------------|
| Mobile S  | 320px - 375px |
| Mobile M  | 375px - 425px |
| Mobile L  | 425px - 768px |
| Tablet    | 768px - 1024px |
| Desktop   | 1024px+ |

## Contoh Penggunaan

\`\`\`css
/* Mobile First */
body { font-size: 16px; }

/* Tablet */
@media screen and (min-width: 768px) {
    body { font-size: 18px; }
}

/* Desktop */
@media screen and (min-width: 1024px) {
    body { font-size: 20px; }
}

/* Orientasi */
@media screen and (orientation: landscape) {
    .container { flex-direction: row; }
}
\`\`\`

## Logical Operators

\`\`\`css
/* AND */
@media screen and (min-width: 768px) and (max-width: 1024px) {
    /* Tablet only */
}

/* OR (comma) */
@media screen and (max-width: 600px), screen and (orientation: portrait) {
    /* Mobile OR portrait */
}

/* NOT */
@media not screen and (min-width: 768px) {
    /* Not desktop */
}
\`\`\`
  `,
  quiz: [
    { 
      question: "Apa fungsi media queries?", 
      options: [
        "Mengubah warna teks",
        "Menerapkan gaya CSS berdasarkan kondisi",
        "Menambah animasi",
        "Mengatur layout"
      ], 
      correctAnswer: 1 
    },
    { 
      question: "Breakpoint untuk tablet biasanya?", 
      options: [
        "320-480px",
        "768-1024px",
        "1024-1200px",
        "1200px+"
      ], 
      correctAnswer: 1 
    },
    {
      question: "Media type yang paling umum digunakan untuk website adalah?",
      options: [
        "print",
        "screen",
        "speech",
        "all"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Media Queries Examples",
      code: `/* Mobile First Approach */
.container {
    padding: 10px;
    display: block;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        padding: 20px;
        display: flex;
        gap: 20px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        padding: 40px;
        max-width: 1200px;
        margin: 0 auto;
    }
}

/* Landscape orientation */
@media (orientation: landscape) {
    .sidebar {
        width: 30%;
        float: left;
    }
}

/* High DPI screens */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .logo {
        background-image: url('logo@2x.png');
    }
}`,
      language: "css"
    }
  ]
};