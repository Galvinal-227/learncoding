export const chapter = {
  slug: "css-calc",
  title: "calc() Function",
  description: "Kuasai fungsi calc() CSS untuk perhitungan matematika dinamis di stylesheet.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["css-functions", "css-variables"],
  tags: ["css", "calc", "fungsi", "perhitungan", "dinamis"],
  order: 29,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu calc()?

\`calc()\` adalah fungsi CSS yang memungkinkan **perhitungan matematika** langsung di dalam stylesheet. Bisa mencampur unit berbeda seperti persentase, pixel, rem, vw, dan lainnya.

## Sintaks Dasar

\`\`\`css
properti: calc(ekspresi);
\`\`\`

⚠️ **Aturan Penting**: Harus ada **spasi** di sekitar operator \`+\` dan \`-\`!

\`\`\`css
/* ✅ Benar */
width: calc(100% - 40px);
font-size: calc(1rem + 1vw);

/* ❌ Salah - tidak ada spasi */
width: calc(100%-40px);
\`\`\`

## Operator yang Didukung

| Operator | Fungsi | Contoh | Hasil |
|----------|--------|--------|-------|
| + | Penjumlahan | \`calc(100px + 20px)\` | 120px |
| - | Pengurangan | \`calc(100% - 50px)\` | 100% - 50px |
| * | Perkalian | \`calc(10px * 3)\` | 30px |
| / | Pembagian | \`calc(100px / 2)\` | 50px |

⚠️ **Pembagian**: Angka pembagi **tidak boleh** pakai unit!

\`\`\`css
/* ✅ Benar */
width: calc(100px / 2);

/* ❌ Salah */
width: calc(100px / 2px);
\`\`\`

## Mencampur Unit Berbeda

Inilah kekuatan utama \`calc()\` - mencampur unit yang biasanya tidak bisa digabung:

\`\`\`css
/* Persentase + Pixel */
width: calc(100% - 80px);
margin-left: calc(50% - 200px);

/* Viewport + Pixel */
min-height: calc(100vh - 60px);
font-size: calc(1rem + 2vw);

/* em + px */
padding: calc(1em + 10px);
\`\`\`

## Kombinasi dengan CSS Variables

\`\`\`css
:root {
    --sidebar: 250px;
    --gap: 20px;
    --navbar: 60px;
}

.content {
    width: calc(100% - var(--sidebar) - var(--gap) * 2);
}

.main {
    min-height: calc(100vh - var(--navbar));
}

.card {
    width: calc((100% - var(--gap) * 3) / 4);
}
\`\`\`

## calc() di Dalam calc()

\`\`\`css
/* Bisa nested */
width: calc(100% - calc(20px + 10px));
/* Sama dengan: calc(100% - 30px) */
\`\`\`

## Penggunaan Praktis

### 1. Full-Width dengan Sidebar
\`\`\`css
.main-content {
    width: calc(100% - 250px);
}
\`\`\`

### 2. Hero Full-Height (dikurangi navbar)
\`\`\`css
.hero {
    min-height: calc(100vh - 60px);
}
\`\`\`

### 3. Grid Manual 3 Kolom
\`\`\`css
.card {
    width: calc((100% - 40px) / 3);
    margin-right: 20px;
}
.card:nth-child(3n) {
    margin-right: 0;
}
\`\`\`

### 4. Centering dengan Left + Negative Margin
\`\`\`css
.modal {
    position: fixed;
    width: 500px;
    left: calc(50% - 250px); /* Setengah dari width */
    top: calc(50% - 150px);
}
\`\`\`

### 5. Font Responsif
\`\`\`css
h1 {
    font-size: calc(1.5rem + 2vw);
    /* Mobile 400px: 1.5rem + 8px ≈ 32px */
    /* Desktop 1200px: 1.5rem + 24px ≈ 48px */
}
\`\`\`

### 6. Full-Bleed Section
\`\`\`css
.full-width {
    width: 100vw;
    margin-left: calc(50% - 50vw);
}
\`\`\`

### 7. Spacing Dinamis
\`\`\`css
.section {
    padding: calc(40px + 3vw) calc(20px + 2vw);
}
\`\`\`

### 8. Colspan Manual
\`\`\`css
.col-7 {
    width: calc(100% / 12 * 7);
}
.col-5 {
    width: calc(100% / 12 * 5);
}
\`\`\`

## calc() vs clamp() vs min() vs max()

| Fungsi | Kegunaan | Contoh |
|--------|----------|--------|
| \`calc()\` | Perhitungan matematika | \`calc(100% - 40px)\` |
| \`clamp()\` | Nilai di antara min & max | \`clamp(1rem, 2vw, 2rem)\` |
| \`min()\` | Pilih nilai terkecil | \`min(600px, 100%)\` |
| \`max()\` | Pilih nilai terbesar | \`max(300px, 50%)\` |

## calc() di Properti Lain

\`\`\`css
/* Background position */
background-position: calc(100% - 20px) calc(100% - 10px);

/* Transform */
transform: translateX(calc(-50% + 10px));

/* Animation keyframes */
@keyframes slide {
    from { left: calc(0% - 100px); }
    to   { left: calc(100% + 100px); }
}

/* Grid */
grid-template-columns: calc(33.333% - 20px) 1fr;
\`\`\`

## Browser Support

\`\`\`
✅ Chrome 19+
✅ Firefox 4+
✅ Safari 6+
✅ Edge 12+
✅ Semua browser modern
\`\`\`

## Tips & Trik

### ✅ Gunakan CSS Variables untuk nilai yang sering berubah
\`\`\`css
:root {
    --sidebar-width: 280px;
}
.main { width: calc(100% - var(--sidebar-width)); }
\`\`\`

### ✅ Selalu beri spasi di sekitar + dan -
\`\`\`css
calc(100% - 20px)  /* ✅ */
calc(100%-20px)    /* ❌ Tidak berfungsi */
\`\`\`

### ✅ Gunakan untuk menghindari magic numbers
\`\`\`css
/* ❌ Magic number */
width: 380px;

/* ✅ Lebih jelas maksudnya */
width: calc(100% - 20px);
\`\`\`

### ❌ Jangan pakai calc() jika tidak perlu
\`\`\`css
/* ❌ Tidak perlu calc */
width: calc(100px); /* Sama dengan 100px */

/* ❌ Bisa pakai gap saja */
.card { margin-right: calc(20px); }
.container { gap: 20px; } /* Lebih baik */
\`\`\`
  `,

  quiz: [
    {
      question: "Apa aturan penting penulisan calc() dengan operator + atau -?",
      options: [
        "Tidak ada aturan khusus",
        "Harus ada spasi di sekitar operator",
        "Harus pakai tanda kurung ganda",
        "Harus pakai unit px"
      ],
      correctAnswer: 1,
      explanation: "Harus ada spasi di sekitar operator + dan - di dalam calc(), misalnya calc(100% - 20px). Tanpa spasi, browser tidak bisa mengenali operator."
    },
    {
      question: "Kenapa calc(100px / 2px) salah?",
      options: [
        "Tidak boleh pembagian",
        "Pembagi tidak boleh pakai unit",
        "Harus pakai operator *",
        "calc() tidak support pembagian"
      ],
      correctAnswer: 1,
      explanation: "Dalam pembagian di calc(), angka pembagi harus tanpa unit. Yang benar: calc(100px / 2)."
    },
    {
      question: "Mana yang benar untuk full-width minus sidebar 250px?",
      options: [
        "width: calc(100% - 250px)",
        "width: calc(100%-250px)",
        "width: 100% - 250px",
        "width: calc(100% minus 250px)"
      ],
      correctAnswer: 0,
      explanation: "calc(100% - 250px) dengan spasi di sekitar operator - adalah penulisan yang benar."
    }
  ],

  codeExamples: [
    {
      title: "Demo calc() Praktis",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        :root {
            --navbar-h: 60px;
            --sidebar-w: 220px;
            --gap: 20px;
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial; }
        
        /* Fixed Navbar */
        .navbar {
            position: fixed; top: 0; left: 0; right: 0;
            height: var(--navbar-h);
            background: #1a1a2e;
            color: white;
            display: flex; align-items: center;
            padding: 0 20px;
            z-index: 100;
        }
        
        /* Layout dengan calc */
        .layout {
            display: flex;
            margin-top: var(--navbar-h);
            min-height: calc(100vh - var(--navbar-h));
        }
        
        .sidebar {
            width: var(--sidebar-w);
            background: #f5f5f5;
            padding: 20px;
            flex-shrink: 0;
        }
        
        .content {
            width: calc(100% - var(--sidebar-w));
            padding: 20px;
        }
        
        /* Card Grid dengan calc */
        .card-grid {
            display: flex;
            flex-wrap: wrap;
            gap: var(--gap);
        }
        
        .card {
            width: calc((100% - var(--gap) * 2) / 3);
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        /* Centering dengan calc */
        .centered-box {
            width: 400px;
            margin: 20px auto;
            /* Alternatif centering absolute */
        }
        
        .modal-demo {
            position: fixed;
            width: 400px;
            height: 200px;
            left: calc(50% - 200px);
            top: calc(50% - 100px);
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            display: flex; align-items: center; justify-content: center;
            z-index: 200;
        }
        
        @media (max-width: 768px) {
            .card { width: calc((100% - var(--gap)) / 2); }
            .sidebar { display: none; }
            .content { width: 100%; }
            .modal-demo {
                width: 90vw;
                left: 5vw;
            }
        }
        
        @media (max-width: 480px) {
            .card { width: 100%; }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <h2>🧮 Demo calc()</h2>
    </nav>
    
    <div class="layout">
        <aside class="sidebar">
            <h3>Sidebar</h3>
            <p>Lebar: var(--sidebar-w)</p>
            <p>Content pakai:<br>calc(100% - var(--sidebar-w))</p>
        </aside>
        
        <main class="content">
            <h1>Layout dengan calc()</h1>
            <p>Content area menggunakan <code>width: calc(100% - 220px)</code></p>
            
            <h3>Card Grid: calc((100% - gap*2) / 3)</h3>
            <div class="card-grid">
                <div class="card">
                    <h4>Card 1</h4>
                    <p>Lebar dihitung otomatis dengan calc()</p>
                </div>
                <div class="card">
                    <h4>Card 2</h4>
                    <p>Responsif tanpa media query</p>
                </div>
                <div class="card">
                    <h4>Card 3</h4>
                    <p>3 kolom di desktop</p>
                </div>
            </div>
        </main>
    </div>
    
    <div class="modal-demo">
        <div style="text-align:center;">
            <h3>Modal Centered</h3>
            <p>left: calc(50% - 200px)</p>
            <p>top: calc(50% - 100px)</p>
        </div>
    </div>
</body>
</html>`,
      output: "Demonstrasi penggunaan calc() untuk layout, grid, dan centering."
    }
  ]
};