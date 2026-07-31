export const chapter = {
  slug: "css-positioning",
  title: "Positioning",
  description: "Kuasai properti position CSS: static, relative, absolute, fixed, dan sticky.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["css-display"],
  tags: ["css", "position", "layout"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Properti Position

Properti \`position\` menentukan bagaimana elemen diposisikan di halaman.

## 5 Nilai Position

### 1. static (Default)
Elemen mengikuti flow normal dokumen:
\`\`\`css
position: static;
/* top, right, bottom, left TIDAK berpengaruh */
\`\`\`

### 2. relative
Relatif terhadap posisi normalnya:
\`\`\`css
.box {
    position: relative;
    top: 10px;    /* Turun 10px dari posisi normal */
    left: 20px;   /* Geser kanan 20px dari posisi normal */
}
\`\`\`
- Tetap mengambil ruang di flow normal
- Elemen lain tidak terpengaruh
- Sering jadi anchor untuk absolute child

### 3. absolute
Relatif terhadap parent terdekat yang di-position (relative/absolute/fixed):
\`\`\`css
.parent {
    position: relative; /* Anchor */
}

.child {
    position: absolute;
    top: 0;
    right: 0; /* Pojok kanan atas parent */
}
\`\`\`
- Keluar dari flow normal (tidak mengambil ruang)
- Elemen lain mengisi ruangnya

### 4. fixed
Relatif terhadap viewport (selalu di posisi yang sama):
\`\`\`css
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
\`\`\`
- Tidak bergerak saat scroll
- Keluar dari flow normal

### 5. sticky
Kombinasi relative dan fixed:
\`\`\`css
.header {
    position: sticky;
    top: 0;
    background: white;
}
\`\`\`
- Berperilaku relative sampai batas tertentu
- Lalu "nempel" seperti fixed saat di-scroll
- Harus ada nilai top/right/bottom/left
- Hanya sticky dalam parent-nya

## Properti Offset

Bekerja dengan position: relative, absolute, fixed, sticky:
\`\`\`css
top: 10px;
right: 20px;
bottom: 30px;
left: 40px;

/* Persentase */
top: 50%;
left: 50%;

/* Auto */
top: auto;
\`\`\`

## z-index

Mengatur tumpukan elemen (harus dengan position selain static):
\`\`\`css
.modal {
    position: fixed;
    z-index: 1000; /* Di atas semua */
}

.overlay {
    position: fixed;
    z-index: 999; /* Di bawah modal */
}
\`\`\`

## Contoh Praktis

### Centering Absolute
\`\`\`css
.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
\`\`\`

### Badge Notification
\`\`\`css
.icon {
    position: relative;
}
.badge {
    position: absolute;
    top: -5px;
    right: -10px;
    background: red;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
}
\`\`\`

### Tooltip
\`\`\`css
.tooltip {
    position: relative;
}
.tooltip::after {
    content: attr(data-tip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s;
}
.tooltip:hover::after {
    opacity: 1;
}
\`\`\`
  `,

  quiz: [
    {
      question: "Position mana yang membuat elemen keluar dari flow normal?",
      options: ["static", "relative", "absolute", "Semua tetap di flow"],
      correctAnswer: 2,
      explanation: "absolute dan fixed keluar dari flow normal. Elemen lain akan mengisi ruang yang ditinggalkan."
    },
    {
      question: "Apa syarat position: sticky berfungsi?",
      options: [
        "Harus pakai z-index",
        "Harus ada nilai top/right/bottom/left",
        "Harus pakai position: relative di parent",
        "Harus pakai transform"
      ],
      correctAnswer: 1,
      explanation: "position: sticky memerlukan setidaknya satu nilai offset (top, right, bottom, left) agar berfungsi."
    }
  ],

  codeExamples: [
    {
      title: "Demo Semua Position",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { font-family: Arial; margin: 0; padding: 20px; min-height: 200vh; }
        
        .fixed-nav {
            position: fixed;
            top: 0; left: 0; right: 0;
            background: #1572B6;
            color: white;
            padding: 15px 20px;
            z-index: 100;
        }
        
        .sticky-header {
            position: sticky;
            top: 60px;
            background: #f39c12;
            padding: 10px;
            margin: 20px 0;
            z-index: 10;
        }
        
        .relative-box {
            position: relative;
            width: 400px; height: 200px;
            background: #e8f5e9;
            border: 2px solid #4caf50;
        }
        
        .absolute-box {
            position: absolute;
            top: 20px; right: 20px;
            background: #e74c3c;
            color: white;
            padding: 10px;
            border-radius: 4px;
        }
        
        .absolute-center {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            background: #2ecc71;
            color: white;
            padding: 10px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="fixed-nav">
        <strong>Fixed Navbar</strong> - Selalu di atas
    </div>
    
    <div style="margin-top: 60px;">
        <h1>Demo CSS Position</h1>
        <p>Scroll ke bawah untuk melihat efek sticky!</p>
        
        <div class="sticky-header">
            <strong>Sticky Header</strong> - Nempel setelah di-scroll
        </div>
        
        <div class="relative-box">
            <strong>Relative Parent</strong>
            <div class="absolute-box">Absolute (pojok)</div>
            <div class="absolute-center">Absolute (tengah)</div>
        </div>
        
        <p style="margin-top: 20px;">Konten panjang... scroll terus...</p>
        <p>Lorem ipsum dolor sit amet...</p>
        <p>Lebih banyak konten...</p>
        <p>Scroll sampai bawah...</p>
    </div>
</body>
</html>`
    }
  ]
};