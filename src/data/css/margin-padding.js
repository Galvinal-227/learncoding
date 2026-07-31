export const chapter = {
  slug: "css-margin-padding",
  title: "Margin & Padding",
  description: "Pahami perbedaan margin dan padding serta cara menggunakannya untuk spacing.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 12,
  prerequisites: ["css-box-model"],
  tags: ["css", "margin", "padding", "spacing"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Margin vs Padding

| | Margin | Padding |
|---|--------|---------|
| Posisi | Di luar border | Di dalam border |
| Background | Tidak terpengaruh | Terpengaruh |
| Collapse | Bisa (vertikal) | Tidak |
| Auto | Bisa (centering) | Tidak |
| Negatif | Bisa | Tidak |

\`\`\`
┌──── margin ──────────────────────────┐
│  ┌── border ────────────────────┐    │
│  │  ┌── padding ───────────┐    │    │
│  │  │                      │    │    │
│  │  │      CONTENT         │    │    │
│  │  │                      │    │    │
│  │  └──────────────────────┘    │    │
│  └──────────────────────────────┘    │
└──────────────────────────────────────┘
\`\`\`

## Padding

Ruang di dalam elemen, antara konten dan border:

\`\`\`css
/* Semua sisi */
padding: 20px;

/* Atas-bawah Kiri-kanan */
padding: 10px 20px;

/* Atas Kanan Bawah Kiri */
padding: 10px 15px 20px 15px;

/* Per sisi */
padding-top: 10px;
padding-right: 15px;
padding-bottom: 20px;
padding-left: 15px;
\`\`\`

## Margin

Ruang di luar elemen, antara border dan elemen lain:

\`\`\`css
/* Sama seperti padding */
margin: 20px;
margin: 10px 20px;
margin: 10px 15px 20px 15px;
margin-top: 10px;
margin-right: 15px;
margin-bottom: 20px;
margin-left: 15px;
\`\`\`

## Margin Auto (Centering)

\`\`\`css
/* Horizontal centering */
.element {
    width: 600px;
    margin: 0 auto; /* Atas-bawah 0, kiri-kanan auto */
}

/* Hanya left auto (dorong ke kanan) */
.push-right {
    margin-left: auto;
}
\`\`\`

## Margin Negatif

\`\`\`css
/* Menarik elemen mendekat */
.pull-up { margin-top: -20px; }
.pull-left { margin-left: -10px; }

/* Overlap effect */
.overlap {
    margin-top: -50px;
    position: relative;
    z-index: 1;
}
\`\`\`

## Margin Collapse

Margin vertikal yang bertemu akan "collapse" (mengambil yang terbesar):

\`\`\`css
.box-1 { margin-bottom: 30px; }
.box-2 { margin-top: 20px; }
/* Jarak = 30px, bukan 50px! */
\`\`\`

### Mencegah Margin Collapse:
\`\`\`css
/* Flexbox */
.container { display: flex; flex-direction: column; }

/* Border atau padding di parent */
.container { padding: 1px 0; }

/* Overflow selain visible */
.container { overflow: hidden; }
\`\`\`

## Spacing System

\`\`\`css
:root {
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;
    --space-3xl: 64px;
}

.card { padding: var(--space-lg); }
.section { margin-bottom: var(--space-2xl); }
\`\`\`
  `,

  quiz: [
    {
      question: "Apa yang terjadi pada margin vertikal yang bertemu?",
      options: [
        "Dijumlahkan",
        "Collapse (ambil yang terbesar)",
        "Dikalikan",
        "Tidak terjadi apa-apa"
      ],
      correctAnswer: 1,
      explanation: "Margin collapse terjadi ketika margin vertikal bertemu - browser mengambil nilai terbesar, bukan menjumlahkannya."
    },
    {
      question: "Bagaimana cara horizontal centering elemen block dengan margin?",
      options: [
        "margin: auto",
        "margin: 0 auto",
        "margin: center",
        "margin: 50%"
      ],
      correctAnswer: 1,
      explanation: "margin: 0 auto memberikan margin otomatis di kiri dan kanan, menengahkan elemen secara horizontal."
    }
  ],

  codeExamples: [
    {
      title: "Demo Margin vs Padding",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { font-family: Arial; padding: 20px; }
        
        .demo-area { background: #f5f5f5; padding: 20px; margin: 20px 0; }
        
        .margin-box {
            background: #ffe0b2;
            margin: 30px;
            padding: 10px;
        }
        
        .padding-box {
            background: #c8e6c9;
            padding: 30px;
        }
        
        .centered {
            width: 400px;
            margin: 20px auto;
            background: #e3f2fd;
            padding: 20px;
            text-align: center;
        }
        
        .collapse-demo > div {
            background: #ffcdd2;
            height: 50px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <h1>Margin vs Padding Demo</h1>
    
    <div class="demo-area">
        <h3>Margin (oranye) - Spasi di luar</h3>
        <div class="margin-box">
            Box dengan margin 30px
        </div>
    </div>
    
    <div class="demo-area">
        <h3>Padding (hijau) - Spasi di dalam</h3>
        <div class="padding-box">
            Box dengan padding 30px
        </div>
    </div>
    
    <div class="demo-area">
        <h3>Centering dengan margin: auto</h3>
        <div class="centered">
            Box width 400px, centered
        </div>
    </div>
    
    <div class="demo-area">
        <h3>Margin Collapse (jarak antar box = 20px, bukan 40px)</h3>
        <div class="collapse-demo">
            <div>Box 1 (margin-bottom: 20px)</div>
            <div>Box 2 (margin-top: 20px)</div>
        </div>
    </div>
</body>
</html>`
    }
  ]
};