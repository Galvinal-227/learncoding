export const chapter = {
  slug: "css-box-model",
  title: "Box Model",
  description: "Pahami konsep fundamental Box Model CSS: content, padding, border, dan margin.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["css-syntax"],
  tags: ["css", "box-model", "layout", "fundamental"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Box Model?

Setiap elemen HTML adalah sebuah kotak (box). Box Model menentukan bagaimana ukuran elemen dihitung, terdiri dari:

\`\`\`
┌─────────────────────────────────────┐
│              MARGIN                  │ ← Jarak antar elemen
│  ┌───────────────────────────────┐  │
│  │           BORDER              │  │ ← Garis tepi
│  │  ┌─────────────────────────┐  │  │
│  │  │         PADDING         │  │  │ ← Ruang dalam
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │     CONTENT       │  │  │  │ ← Konten (teks/gambar)
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
\`\`\`

## 4 Bagian Box Model

### 1. Content
Area konten sebenarnya (teks, gambar):
\`\`\`css
width: 300px;
height: 200px;
\`\`\`

### 2. Padding
Ruang antara konten dan border:
\`\`\`css
padding: 20px;
padding-top: 10px;
padding-right: 15px;
padding-bottom: 10px;
padding-left: 15px;
/* Shorthand */
padding: 10px 15px 10px 15px; /* top right bottom left */
padding: 10px 15px;            /* top/bottom left/right */
\`\`\`

### 3. Border
Garis tepi elemen:
\`\`\`css
border: 2px solid #333;
border-width: 2px;
border-style: solid;
border-color: #333;
border-radius: 8px; /* Membulat */
\`\`\`

### 4. Margin
Ruang di luar border (jarak antar elemen):
\`\`\`css
margin: 20px;
margin: 10px 15px 20px 15px;
margin: 0 auto; /* Center horizontal */
\`\`\`

## box-sizing

Properti yang SANGAT PENTING:

### content-box (Default)
\`\`\`css
box-sizing: content-box;
width: 300px;
padding: 20px;
border: 2px solid;
/* Total lebar = 300 + 40 + 4 = 344px! */
\`\`\`

### border-box (Disarankan)
\`\`\`css
box-sizing: border-box;
width: 300px;
padding: 20px;
border: 2px solid;
/* Total lebar = 300px (termasuk padding & border) */
\`\`\`

### Reset Global
\`\`\`css
*, *::before, *::after {
    box-sizing: border-box;
}
\`\`\`

## Margin Collapse

Margin atas dan bawah elemen yang berdekatan bisa "collapse" (bergabung):
\`\`\`html
<div class="box1">Box 1 (margin-bottom: 30px)</div>
<div class="box2">Box 2 (margin-top: 20px)</div>
<!-- Jarak antar box = 30px, bukan 50px! -->
\`\`\`

## Width dan Height

\`\`\`css
width: 50%;        /* Persentase parent */
max-width: 800px;  /* Maksimal */
min-width: 300px;  /* Minimal */
height: 400px;
min-height: 100vh; /* Minimal tinggi viewport */
max-height: 600px;
\`\`\`

## Developer Tools

Buka DevTools (F12) untuk melihat Box Model visual:
- Panel kanan bawah menunjukkan diagram box
- Bisa langsung edit dan lihat perubahan
- Warna berbeda untuk content (biru), padding (hijau), border (kuning-oranye), margin (coklat)
  `,

  quiz: [
    {
      question: "Berapa total lebar elemen: width: 200px, padding: 10px, border: 5px solid (content-box)?",
      options: ["200px", "210px", "220px", "230px"],
      correctAnswer: 3,
      explanation: "Dengan content-box: 200 (width) + 20 (padding kiri+kanan) + 10 (border kiri+kanan) = 230px."
    },
    {
      question: "Properti apa yang membuat padding dan border termasuk dalam width?",
      options: ["box-model: included", "box-sizing: border-box", "sizing: total", "include: padding"],
      correctAnswer: 1,
      explanation: "box-sizing: border-box membuat width sudah termasuk padding dan border, tidak perlu dihitung terpisah."
    }
  ],

  codeExamples: [
    {
      title: "Demo Box Model",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { font-family: Arial; padding: 20px; }
        
        .box {
            width: 300px;
            margin: 30px auto;
            background: #e8f4fd;
            padding: 30px;
            border: 5px solid #1572B6;
            border-radius: 8px;
            text-align: center;
        }
        
        .content-box {
            box-sizing: content-box;
            /* Total: 300 + 60 + 10 = 370px */
        }
        
        .border-box {
            box-sizing: border-box;
            /* Total: 300px */
        }
        
        .demo-area { 
            display: flex; gap: 40px; justify-content: center; 
        }
        
        .outer {
            background: #ffe0b2;
            padding: 30px;
            margin: 20px auto;
            border: 3px dashed #ff9800;
            position: relative;
        }
        
        .label {
            position: absolute; top: 5px; left: 10px;
            font-size: 12px; color: #e65100; font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Demo Box Model</h1>
    
    <div class="demo-area">
        <div>
            <h3>content-box</h3>
            <div class="outer"><span class="label">Margin</span>
                <div style="background:#fff9c4; padding:20px; border:3px solid #fbc02d;">
                <span class="label">Border</span>
                    <div style="background:#c8e6c9; padding:20px; border:3px solid #4caf50;">
                    <span class="label">Padding</span>
                        <div class="box content-box">
                            Content<br>300×200
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div>
            <h3>border-box</h3>
            <div class="outer"><span class="label">Margin</span>
                <div style="background:#fff9c4; padding:20px; border:3px solid #fbc02d;">
                    <div style="background:#c8e6c9; padding:20px; border:3px solid #4caf50;">
                        <div class="box border-box">
                            Content<br>+ padding + border<br>= 300px total
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
    }
  ]
};