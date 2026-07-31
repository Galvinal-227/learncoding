export const chapter = {
  slug: "css-selectors",
  title: "Selector CSS",
  description: "Kuasai semua jenis selector CSS untuk memilih elemen HTML dengan tepat.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["css-syntax"],
  tags: ["css", "selector", "spesifik"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Selector?

Selector adalah pola yang digunakan untuk memilih elemen HTML yang ingin di-style. CSS punya banyak jenis selector dari yang sederhana hingga kompleks.

## Basic Selectors

### 1. Universal Selector
Memilih semua elemen:
\`\`\`css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
\`\`\`

### 2. Type Selector
Memilih berdasarkan nama tag:
\`\`\`css
p { color: #333; }
h1 { font-size: 2em; }
a { text-decoration: none; }
\`\`\`

### 3. Class Selector
Memilih berdasarkan class (diawali titik):
\`\`\`css
.card { border-radius: 8px; }
.highlight { background: yellow; }
.btn-primary { background: blue; }
\`\`\`

### 4. ID Selector
Memilih berdasarkan id (diawali #):
\`\`\`css
#header { position: sticky; }
#main-content { padding: 20px; }
\`\`\`
⚠️ Gunakan ID selector seperlunya karena specificity tinggi.

### 5. Attribute Selector
Memilih berdasarkan atribut:
\`\`\`css
/* Elemen dengan atribut tertentu */
[target] { color: red; }

/* Atribut dengan nilai tepat */
[type="email"] { border-color: blue; }

/* Atribut yang mengandung kata */
[class~="card"] { padding: 10px; }

/* Atribut yang diawali */
[href^="https"] { color: green; }

/* Atribut yang diakhiri */
[href$=".pdf"] { background: url(pdf-icon.png); }

/* Atribut yang mengandung string */
[class*="btn"] { cursor: pointer; }
\`\`\`

## Combinator Selectors

### 1. Descendant (spasi)
Memilih semua anak di dalam:
\`\`\`css
article p { line-height: 1.8; }
nav a { color: white; }
\`\`\`

### 2. Direct Child (>)
Hanya anak langsung:
\`\`\`css
ul > li { list-style: none; }
main > section { padding: 40px; }
\`\`\`

### 3. Adjacent Sibling (+)
Saudara tepat setelahnya:
\`\`\`css
h2 + p { margin-top: 0; }
label + input { margin-left: 10px; }
\`\`\`

### 4. General Sibling (~)
Semua saudara setelahnya:
\`\`\`css
h2 ~ p { color: gray; }
\`\`\`

## Pseudo-class Selectors

### State Pseudo-classes
\`\`\`css
a:hover { color: orange; }
a:visited { color: purple; }
input:focus { outline: 2px solid blue; }
button:active { transform: scale(0.98); }
\`\`\`

### Structural Pseudo-classes
\`\`\`css
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(2) { background: #f0f0f0; }
li:nth-child(odd) { background: #f9f9f9; }
li:nth-child(even) { background: #fff; }
li:nth-child(3n) { color: blue; } /* setiap kelipatan 3 */
\`\`\`

### Form Pseudo-classes
\`\`\`css
input:required { border-left: 3px solid red; }
input:valid { border-color: green; }
input:invalid { border-color: red; }
input:checked + label { color: blue; }
input:disabled { opacity: 0.5; }
\`\`\`

### Other Pseudo-classes
\`\`\`css
:root { --primary: #1572B6; }
:not(.excluded) { margin: 10px; }
p:empty { display: none; }
:is(h1, h2, h3) { font-family: sans-serif; }
:where(header, footer) p { font-size: 14px; }
:has(img) { padding: 20px; } /* parent selector! */
\`\`\`

## Pseudo-element Selectors

\`\`\`css
/* Sebelum elemen */
.quote::before {
    content: '"';
    font-size: 2em;
    color: gray;
}

/* Setelah elemen */
.quote::after {
    content: '"';
}

/* Huruf pertama */
p::first-letter {
    font-size: 3em;
    font-weight: bold;
}

/* Baris pertama */
p::first-line {
    font-weight: bold;
}

/* Teks yang dipilih user */
::selection {
    background: #1572B6;
    color: white;
}

/* Placeholder input */
::placeholder {
    color: #999;
    font-style: italic;
}
\`\`\`

## Grouping Selectors

\`\`\`css
h1, h2, h3 {
    font-family: 'Segoe UI', sans-serif;
    margin-bottom: 15px;
}

.card, .panel, .widget {
    background: white;
    border-radius: 8px;
    padding: 20px;
}
\`\`\`
  `,

  quiz: [
    {
      question: "Selector mana yang memilih elemen dengan class 'btn'?",
      options: ["btn", "#btn", ".btn", "::btn"],
      correctAnswer: 2,
      explanation: ".btn adalah class selector yang memilih semua elemen dengan class='btn'."
    },
    {
      question: "Apa beda 'ul li' dengan 'ul > li'?",
      options: [
        "Tidak ada beda",
        "'ul li' semua li di dalam ul, 'ul > li' hanya anak langsung",
        "'ul > li' semua li, 'ul li' hanya anak langsung",
        "Tergantung browser"
      ],
      correctAnswer: 1,
      explanation: "Spasi (descendant) memilih semua li di dalam ul berapapun kedalamannya. > (child) hanya memilih li yang langsung anak dari ul."
    },
    {
      question: "Pseudo-class mana untuk memilih elemen saat di-hover?",
      options: [":click", ":active", ":hover", ":focus"],
      correctAnswer: 2,
      explanation: ":hover dipicu saat kursor mouse berada di atas elemen."
    }
  ],

  codeExamples: [
    {
      title: "Selector CSS dalam Aksi",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        /* Type selector */
        body { font-family: Arial; margin: 20px; }
        
        /* Class selector */
        .card {
            border: 1px solid #ddd;
            padding: 20px;
            margin: 10px 0;
            border-radius: 8px;
        }
        
        /* ID selector */
        #highlight {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
        }
        
        /* Descendant */
        .menu li { display: inline; margin-right: 15px; }
        
        /* Direct child */
        .list > li { padding: 8px 0; }
        
        /* Pseudo-class */
        a:hover { color: #1572B6; }
        
        /* nth-child */
        tbody tr:nth-child(odd) { background: #f9f9f9; }
        tbody tr:nth-child(even) { background: #fff; }
        
        /* Attribute selector */
        input[type="email"] { border: 2px solid #1572B6; }
        
        /* Pseudo-element */
        .quote::before { content: '❝'; font-size: 2em; color: #1572B6; }
        ::selection { background: #1572B6; color: white; }
    </style>
</head>
<body>
    <h1>Demo Selector CSS</h1>
    
    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
    </ul>
    
    <div class="card" id="highlight">
        <p class="quote">Ini kartu highlight dengan quote.</p>
    </div>
    
    <div class="card">
        <input type="email" placeholder="Email dengan border biru">
    </div>
    
    <ul class="list">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    
    <table>
        <tbody>
            <tr><td>Baris 1</td></tr>
            <tr><td>Baris 2</td></tr>
            <tr><td>Baris 3</td></tr>
        </tbody>
    </table>
</body>
</html>`
    }
  ]
};