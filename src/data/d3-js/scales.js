export const chapter = {
  slug: "d3-js-scales",
  title: "Scales & Axes",
  description: "Kuasai scales untuk mapping data ke pixel dan axes untuk menampilkan sumbu.",
  icon: "SiD3Dotjs",
  color: "#F9A03C",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["d3-js-data-binding"],
  tags: ["d3js", "scales", "axes", "mapping"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Scales?

Scales adalah fungsi yang **memetakan (mapping) domain data ke range visual**.

\`\`\`
Domain (data):  [0, 100, 200, 300, 400]  →  [nilai asli]
Range (pixel):  [0, 50, 100, 150, 200]   →  [posisi di layar]
\`\`\`

## Continuous Scales

### scaleLinear() - Paling Umum
\`\`\`javascript
const y = d3.scaleLinear()
    .domain([0, d3.max(data)])    // Input: data
    .range([height, 0])           // Output: pixel (terbalik!)
    .nice();                       // Round ke angka bagus

y(0);    // → height (bawah)
y(100);  // → height/2 (tengah)
\`\`\`

### scaleTime()
\`\`\`javascript
const x = d3.scaleTime()
    .domain([new Date('2026-01-01'), new Date('2026-12-31')])
    .range([0, width]);

x(new Date('2026-06-15')); // → width/2
\`\`\`

### scalePow() / scaleSqrt()
\`\`\`javascript
const r = d3.scaleSqrt()
    .domain([0, 1000])
    .range([0, 50]);
// Bubble chart: radius proporsional ke sqrt(area)
\`\`\`

## Ordinal Scales

### scaleBand() - Bar Chart
\`\`\`javascript
const x = d3.scaleBand()
    .domain(['A', 'B', 'C', 'D'])
    .range([0, width])
    .padding(0.1);

x('A');          // → 0
x.bandwidth();   // → lebar setiap band
\`\`\`

### scaleOrdinal() - Warna Kategori
\`\`\`javascript
const color = d3.scaleOrdinal()
    .domain(['apple', 'banana', 'cherry'])
    .range(['red', 'yellow', 'pink']);

color('banana'); // → 'yellow'
\`\`\`

## Color Scales

\`\`\`javascript
d3.scaleSequential(d3.interpolateBlues)
    .domain([0, 100]);

d3.scaleLinear()
    .domain([0, 100])
    .range(['white', 'red']); // Custom gradient
\`\`\`

## Axes

\`\`\`javascript
// Buat axis
const xAxis = d3.axisBottom(x);   // Sumbu X di bawah
const yAxis = d3.axisLeft(y);     // Sumbu Y di kiri

// Render axis
svg.append('g')
    .attr('transform', \`translate(0,\${height})\`)
    .call(xAxis);

svg.append('g')
    .call(yAxis);

// Kustomisasi
const xAxis = d3.axisBottom(x)
    .ticks(10)                        // Jumlah tick
    .tickFormat(d => \`\${d}%\`)        // Format label
    .tickSize(-height);               // Grid lines
\`\`\`
  `,

  quiz: [
    { question: "Domain vs Range?", options: ["Sama", "Domain: data input; Range: visual output", "Range: input; Domain: output", "Tidak berhubungan"], correctAnswer: 1 },
    { question: "scaleBand untuk?", options: ["Line chart", "Bar chart (kategori)", "Pie chart", "Map"], correctAnswer: 1 },
    { question: "axisBottom() untuk?", options: ["Sumbu Y kiri", "Sumbu X bawah", "Sumbu X atas", "Sumbu Y kanan"], correctAnswer: 1 }
  ],

  codeExamples: []
};