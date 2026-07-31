export const chapter = {
  slug: "css-specificity",
  title: "Specificity",
  description: "Pahami cara CSS menentukan aturan mana yang menang ketika terjadi konflik.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["css-selectors"],
  tags: ["css", "specificity", "prioritas", "cascade"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Specificity?

Specificity adalah **bobot** yang menentukan aturan CSS mana yang diterapkan ketika ada konflik. Semakin spesifik selector, semakin tinggi prioritasnya.

## Cara Menghitung Specificity

Bayangkan sebagai angka (a, b, c, d):

| Selector | a (inline) | b (ID) | c (Class) | d (Element) |
|----------|------------|--------|-----------|-------------|
| \`<p style="">\` | 1 | 0 | 0 | 0 |
| \`#header\` | 0 | 1 | 0 | 0 |
| \`.card\` | 0 | 0 | 1 | 0 |
| \`p\` | 0 | 0 | 0 | 1 |

### Contoh Perhitungan

\`\`\`css
p                    /* 0,0,0,1 = 1 */
.card                /* 0,0,1,0 = 10 */
#header              /* 0,1,0,0 = 100 */
#header .card        /* 0,1,1,0 = 110 */
p.card               /* 0,0,1,1 = 11 */
div p                /* 0,0,0,2 = 2 */
\`\`\`

## Siapa yang Menang?

\`\`\`css
p { color: red; }           /* specificity: 1 */
.card p { color: blue; }    /* specificity: 11 */
#content p { color: green; } /* specificity: 101 */
\`\`\`

Dengan HTML:
\`\`\`html
<div id="content">
    <div class="card">
        <p>Teks ini berwarna hijau</p> <!-- #content p menang -->
    </div>
</div>
\`\`\`

## Aturan !important

\`!important\` menimpa semua specificity normal:
\`\`\`css
p { color: red !important; }  /* Selalu menang */
p { color: blue; }            /* Kalah */
\`\`\`
⚠️ Hindari \`!important\` kecuali sangat terpaksa (contoh: utility class).

## Tips Mengelola Specificity

### 1. Gunakan Class, Bukan ID
\`\`\`css
/* ❌ Specificity tinggi, sulit ditimpa */
#sidebar { background: blue; }

/* ✅ Specificity rendah, mudah dimodifikasi */
.sidebar { background: blue; }
\`\`\`

### 2. Hindari Nesting Berlebihan
\`\`\`css
/* ❌ Terlalu spesifik */
header nav ul li a { color: white; }

/* ✅ Gunakan class */
.nav-link { color: white; }
\`\`\`

### 3. Manfaatkan Cascade
\`\`\`css
/* Style dasar */
.button {
    background: blue;
    color: white;
}

/* Variasi di bawah (cascade) */
.button--danger {
    background: red;
}
\`\`\`

## Visualisasi Specificity

\`\`\`
Specificity Graph (semakin ke kanan semakin tinggi)
─────────────────────────────────────────────▶
*  →  p  →  .card  →  p.card  →  #header  →  #header .card  →  inline  →  !important
0     1      10        11         100          110              1000       ∞
\`\`\`

## Best Practices

\`\`\`css
/* ✅ Gunakan BEM atau metodologi lain */
.card { }
.card__title { }
.card--featured { }

/* ✅ Utility classes untuk override */
.text-center { text-align: center; }
.m-0 { margin: 0; }

/* ❌ Jangan naikkan specificity tidak perlu */
div.container.wrapper#main { } /* 0,1,2,2 - terlalu tinggi! */
\`\`\`
  `,

  quiz: [
    {
      question: "Selector mana yang memiliki specificity tertinggi?",
      options: [".class", "#id", "element", "*"],
      correctAnswer: 1,
      explanation: "ID selector (#id) memiliki specificity lebih tinggi (100) dibanding class (10) atau element (1)."
    },
    {
      question: "Apa yang terjadi jika dua aturan memiliki specificity yang sama?",
      options: [
        "Error",
        "Yang terakhir ditulis yang menang",
        "Dua-duanya diterapkan",
        "Tidak ada yang diterapkan"
      ],
      correctAnswer: 1,
      explanation: "Jika specificity sama, aturan yang ditulis terakhir (cascade order) yang akan diterapkan."
    },
    {
      question: "Kenapa sebaiknya menghindari !important?",
      options: [
        "Karena lambat",
        "Karena sulit di-debug dan menimpa cascade normal",
        "Karena tidak didukung browser",
        "Karena tidak valid"
      ],
      correctAnswer: 1,
      explanation: "!important memutus cascade normal dan membuat kode sulit di-maintain karena sulit ditimpa."
    }
  ]
};