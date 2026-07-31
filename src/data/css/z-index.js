export const chapter = {
  slug: "css-z-index",
  title: "Z-Index & Stacking Context",
  description: "Pahami cara mengatur tumpukan elemen dengan z-index dan stacking context.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 10,
  prerequisites: ["css-positioning"],
  tags: ["css", "z-index", "stacking", "tumpukan"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu z-index?

\`z-index\` mengontrol urutan tumpukan (stacking order) elemen yang saling bertumpuk. Hanya berfungsi pada elemen dengan position selain \`static\`.

## Sintaks Dasar

\`\`\`css
.element {
    position: relative; /* atau absolute, fixed, sticky */
    z-index: 10;
}
\`\`\`

- Nilai lebih tinggi = di atas
- Bisa negatif
- Default: auto (berarti 0)
- Max: 2147483647

## Stacking Context

Element baru yang membentuk konteks tumpukan sendiri:
\`\`\`css
.parent {
    position: relative;
    z-index: 1;
}
/* Child z-index hanya dalam scope parent! */
.child { z-index: 999; } /* Tidak bisa keluar dari parent */
\`\`\`

### Yang Membentuk Stacking Context Baru:
- \`position\` + \`z-index\` (selain auto)
- \`opacity\` < 1
- \`transform\`, \`filter\`, \`perspective\`
- \`flex\`/\`grid\` item dengan z-index
- \`will-change: transform\`

## System Skala z-index

\`\`\`css
:root {
    --z-base: 1;        /* Konten normal */
    --z-dropdown: 100;  /* Dropdown menu */
    --z-sticky: 200;    /* Sticky header */
    --z-overlay: 300;   /* Overlay/modal backdrop */
    --z-modal: 400;     /* Modal dialog */
    --z-tooltip: 500;   /* Tooltip */
    --z-toast: 600;     /* Notifikasi toast */
}
\`\`\`

## Masalah Umum

### z-index tidak berfungsi?
\`\`\`css
/* ❌ Lupa position */
.element { z-index: 10; }

/* ✅ Harus ada position */
.element {
    position: relative;
    z-index: 10;
}
\`\`\`

### z-index tinggi tapi tetap di bawah?
\`\`\`css
/* Parent punya z-index lebih rendah */
.parent { position: relative; z-index: 1; }
.child { position: absolute; z-index: 999; }
/* Child tetap di bawah elemen dengan z-index > 1 di luar parent */
\`\`\`

## Tips

- Gunakan sistem skala z-index
- Hindari z-index sembarangan (1, 2, 9999)
- Group component yang perlu z-index
- Documentasikan nilai z-index
  `,

  quiz: [
    {
      question: "Syarat z-index bisa berfungsi?",
      options: [
        "Harus display: flex",
        "Harus position selain static",
        "Harus opacity < 1",
        "Harus pakai transform"
      ],
      correctAnswer: 1,
      explanation: "z-index hanya berfungsi pada elemen dengan position: relative, absolute, fixed, atau sticky."
    },
    {
      question: "Apa itu stacking context?",
      options: [
        "Urutan HTML",
        "Konteks tumpukan terisolasi di mana z-index dihitung ulang",
        "Jenis display",
        "Property CSS baru"
      ],
      correctAnswer: 1,
      explanation: "Stacking context adalah konteks terisolasi. z-index elemen di dalamnya hanya berlaku relatif terhadap sesama elemen di konteks tersebut."
    }
  ],

  codeExamples: [
    {
      title: "Demo z-index System",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { font-family: Arial; padding: 20px; }
        
        :root {
            --z-dropdown: 100;
            --z-overlay: 200;
            --z-modal: 300;
        }
        
        .container { position: relative; height: 300px; background: #f5f5f5; padding: 20px; }
        
        .box {
            width: 150px; height: 150px;
            position: absolute;
            display: flex; align-items: center; justify-content: center;
            color: white; font-weight: bold;
            border-radius: 8px;
        }
        
        .box-1 { background: #e74c3c; top: 20px; left: 20px; z-index: 1; }
        .box-2 { background: #2ecc71; top: 70px; left: 70px; z-index: 2; }
        .box-3 { background: #1572B6; top: 120px; left: 120px; z-index: 3; }
        
        .overlay {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.5);
            z-index: var(--z-overlay);
            display: flex; align-items: center; justify-content: center;
        }
        
        .modal {
            background: white;
            padding: 30px; border-radius: 12px;
            z-index: var(--z-modal);
            position: relative;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>z-index Demo</h1>
    
    <div class="container">
        <div class="box box-1">z-index: 1</div>
        <div class="box box-2">z-index: 2</div>
        <div class="box box-3">z-index: 3</div>
    </div>
    
    <div class="overlay">
        <div class="modal">
            <h3>Modal dengan z-index System</h3>
            <p>Overlay: z-index 200</p>
            <p>Modal: z-index 300</p>
        </div>
    </div>
</body>
</html>`
    }
  ]
};