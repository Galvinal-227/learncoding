export const chapter = {
  slug: "css-overflow",
  title: "Overflow",
  description: "Kontrol bagaimana konten yang melebihi ukuran wadah ditampilkan.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["css-box-model"],
  tags: ["css", "overflow", "scroll", "hidden"],
  order: 13,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Properti Overflow

Mengontrol apa yang terjadi jika konten terlalu besar untuk wadahnya.

## Nilai Overflow

\`\`\`css
/* Default - konten meluber keluar */
overflow: visible;

/* Konten dipotong */
overflow: hidden;

/* Scrollbar selalu muncul */
overflow: scroll;

/* Scrollbar hanya jika perlu */
overflow: auto;

/* Overflow horizontal dan vertikal terpisah */
overflow-x: hidden;
overflow-y: auto;
\`\`\`

## Penggunaan Umum

### Clearfix dengan Overflow
\`\`\`css
.container {
    overflow: hidden; /* Atau auto */
}
\`\`\`

### Scroll Konten Panjang
\`\`\`css
.modal-body {
    max-height: 400px;
    overflow-y: auto;
}
\`\`\`

### Sembunyikan Overflow untuk Animasi
\`\`\`css
.card {
    overflow: hidden;
}
.card img {
    transition: transform 0.3s;
}
.card:hover img {
    transform: scale(1.1);
}
\`\`\`

## text-overflow

Untuk teks yang terlalu panjang:
\`\`\`css
.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Multiline ellipsis */
.multiline-ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
\`\`\`
  `,

  quiz: [
    {
      question: "Apa beda overflow: scroll dan overflow: auto?",
      options: [
        "Tidak ada beda",
        "scroll: scrollbar selalu ada; auto: scrollbar hanya saat perlu",
        "auto: scrollbar selalu ada; scroll: hanya saat perlu",
        "Tergantung browser"
      ],
      correctAnswer: 1,
      explanation: "overflow: scroll selalu menampilkan scrollbar meskipun konten tidak overflow. overflow: auto hanya menampilkan saat diperlukan."
    }
  ],

  codeExamples: [
    {
      title: "Demo Overflow",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        body { font-family: Arial; padding: 20px; display: flex; gap: 20px; flex-wrap: wrap; }
        .box { width: 200px; height: 150px; border: 2px solid #333; padding: 10px; }
        .visible { overflow: visible; }
        .hidden { overflow: hidden; }
        .scroll { overflow: scroll; }
        .auto { overflow: auto; }
        .ellipsis { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        h4 { margin: 0 0 5px; }
    </style>
</head>
<body>
    <div>
        <h4>visible</h4>
        <div class="box visible">
            <p>Konten panjang yang akan meluber keluar dari box. Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
    <div>
        <h4>hidden</h4>
        <div class="box hidden">
            <p>Konten panjang yang akan dipotong. Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    </div>
    <div>
        <h4>scroll</h4>
        <div class="box scroll">
            <p>Scrollbar selalu muncul.</p>
        </div>
    </div>
    <div>
        <h4>auto</h4>
        <div class="box auto">
            <p>Scrollbar hanya jika konten panjang. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <h4>text-overflow</h4>
        <div class="box ellipsis">
            Teks panjang yang akan terpotong dengan elipsis di akhir...
        </div>
    </div>
</body>
</html>`
    }
  ]
};