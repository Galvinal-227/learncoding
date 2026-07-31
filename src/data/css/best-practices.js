export const chapter = {
  slug: "css-best-practices",
  title: "Best Practices CSS",
  description: "Kumpulan praktik terbaik menulis CSS yang scalable, maintainable, dan efisien.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["css-variables"],
  tags: ["css", "best-practices", "bersih", "arsitektur"],
  order: 29,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 1. Gunakan CSS Reset/Normalize

\`\`\`css
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
\`\`\`

## 2. Gunakan Variabel CSS

\`\`\`css
:root {
    --primary: #1572B6;
    --spacing: 16px;
}
\`\`\`

## 3. Mobile-First Media Queries

\`\`\`css
/* Default mobile */
.element { width: 100%; }

/* Tablet ke atas */
@media (min-width: 768px) {
    .element { width: 50%; }
}
\`\`\`

## 4. Hindari !important

\`\`\`css
/* ❌ */
.button { background: red !important; }

/* ✅ Gunakan specificity */
.card .button--danger { background: red; }
\`\`\`

## 5. Gunakan Class, Bukan ID

\`\`\`css
/* ❌ Specificity terlalu tinggi */
#header { background: blue; }

/* ✅ */
.header { background: blue; }
\`\`\`

## 6. Hindari Nesting Berlebihan

\`\`\`css
/* ❌ */
.header nav ul li a { color: white; }

/* ✅ */
.nav-link { color: white; }
\`\`\`

## 7. Gunakan Shorthand dengan Bijak

\`\`\`css
/* ✅ */
margin: 10px 20px;
background: #fff center/cover no-repeat;

/* ❌ Menimpa properti tidak sengaja */
background: red; /* Menghapus background-image */
\`\`\`

## 8. Konsisten dengan Unit

\`\`\`css
/* Pilih satu pendekatan */
/* rem untuk font */
font-size: 1rem;
/* px untuk border */
border: 1px solid #ddd;
/* % atau vw untuk layout */
width: 100%;
\`\`\`

## 9. Komentari Kode

\`\`\`css
/* ===== Header ===== */
.header { }

/* ===== Navigation ===== */
.nav { }
\`\`\`

## 10. Gunakan Naming Convention (BEM)

\`\`\`css
/* Block */
.card { }
/* Element */
.card__title { }
.card__content { }
/* Modifier */
.card--featured { }
\`\`\`

## 11. Hindari Inline Styles

\`\`\`html
<!-- ❌ -->
<div style="color: red; margin: 10px;">

<!-- ✅ -->
<div class="alert alert--danger">
\`\`\`

## 12. Optimasi Performa

\`\`\`css
/* ✅ Animasi yang aman */
.element { transition: transform 0.3s, opacity 0.3s; }

/* ❌ Trigger layout */
.element { transition: width 0.3s, height 0.3s; }
\`\`\`

## 13. Gunakan Relative Units untuk Aksesibilitas

\`\`\`css
/* ✅ */
font-size: 1rem;    /* Mengikuti preferensi user */

/* ❌ */
font-size: 16px;    /* Fixed, tidak fleksibel */
\`\`\`

## 14. Organisasi File CSS

\`\`\`
styles/
├── reset.css
├── variables.css
├── typography.css
├── layout.css
├── components/
│   ├── button.css
│   ├── card.css
│   └── navbar.css
└── main.css (import semua)
\`\`\`

## Checklist

\`\`\`
✅ Gunakan CSS Reset
✅ Gunakan Variabel untuk nilai yang berulang
✅ Mobile-first approach
✅ Class naming konsisten (BEM)
✅ Hindari !important
✅ Animasi properti composite (transform, opacity)
✅ Gunakan relative units (rem, em, %)
✅ Validasi dengan W3C CSS Validator
✅ Test cross-browser
✅ Optimasi untuk performa
\`\`\`
  `,

  quiz: [
    {
      question: "Kenapa sebaiknya menggunakan class daripada ID untuk styling?",
      options: [
        "ID tidak didukung CSS",
        "ID memiliki specificity tinggi, sulit ditimpa",
        "Class lebih cepat",
        "Tidak ada alasan khusus"
      ],
      correctAnswer: 1,
      explanation: "ID memiliki specificity sangat tinggi (100) dibanding class (10), sehingga sulit ditimpa dan tidak reusable."
    },
    {
      question: "Apa kepanjangan BEM?",
      options: [
        "Block Element Modifier",
        "Basic Element Method",
        "Box Element Model",
        "Browser Element Manager"
      ],
      correctAnswer: 0,
      explanation: "BEM (Block Element Modifier) adalah metodologi naming convention untuk CSS yang membuat kode lebih terstruktur."
    }
  ]
};