export const chapter = {
  slug: "css-functions",
  title: "CSS Functions",
  description: "Pelajari fungsi-fungsi CSS modern: calc(), min(), max(), clamp(), dan lainnya.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["css-variables"],
  tags: ["css", "fungsi", "calc", "clamp", "modern"],
  order: 28,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## CSS Functions

CSS memiliki banyak fungsi built-in untuk perhitungan dan manipulasi nilai.

## calc()
Perhitungan matematika:
\`\`\`css
width: calc(100% - 40px);
font-size: calc(1rem + 2vw);
height: calc(100vh - 60px);
padding: calc(var(--spacing) * 2);
\`\`\`

## min()
Pilih nilai terkecil:
\`\`\`css
width: min(600px, 100%);
/* Di layar kecil: 100%, di layar besar: max 600px */
\`\`\`

## max()
Pilih nilai terbesar:
\`\`\`css
width: max(300px, 50%);
/* Di layar kecil: minimal 300px, di layar besar: 50% */
\`\`\`

## clamp()
Nilai di antara minimum dan maksimum (PALING BERGUNA):
\`\`\`css
/* clamp(min, ideal, max) */
font-size: clamp(1rem, 2.5vw, 2rem);
padding: clamp(10px, 3vw, 30px);
width: clamp(300px, 50%, 800px);
\`\`\`

## minmax() (Grid)
\`\`\`css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
\`\`\`

## Perbandingan

\`\`\`css
/* Tanpa fungsi modern */
width: 50%;
max-width: 800px;
min-width: 300px;

/* Dengan clamp (3 properti jadi 1!) */
width: clamp(300px, 50%, 800px);
\`\`\`

## Fungsi Warna

\`\`\`css
color: rgb(255 0 0 / 0.5);
color: hsl(240 100% 50%);
background: linear-gradient(to right, red, blue);
background: radial-gradient(circle, white, gray);
\`\`\`

## Fungsi Bentuk

\`\`\`css
/* clip-path */
clip-path: circle(50%);
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);

/* shape-outside */
shape-outside: circle(50%);
\`\`\`

## Fungsi Counter

\`\`\`css
ol {
    counter-reset: section;
}
li::before {
    counter-increment: section;
    content: counters(section, '.') ' ';
}
\`\`\`

## attr()

\`\`\`css
.tooltip::after {
    content: attr(data-tip);
}
\`\`\`
  `,

  quiz: [
    {
      question: "Apa keunggulan clamp() dibanding min() + max()?",
      options: [
        "Tidak ada keunggulan",
        "Satu fungsi menggantikan min-width, width, max-width",
        "Lebih cepat",
        "Hanya untuk font"
      ],
      correctAnswer: 1,
      explanation: "clamp(min, ideal, max) menggantikan tiga deklarasi: min-width/height, width/height, max-width/height menjadi satu baris."
    },
    {
      question: "calc(100% - 40px) digunakan untuk?",
      options: [
        "Menambah ukuran",
        "Mengurangi ukuran tetap dari ukuran relatif",
        "Animasi",
        "Hanya untuk margin"
      ],
      correctAnswer: 1,
      explanation: "calc() memungkinkan pencampuran unit, seperti mengurangi pixel dari persentase, yang tidak bisa dilakukan tanpa calc()."
    }
  ]
};