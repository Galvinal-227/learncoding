export const chapter = {
  slug: "d3-js-introduction",
  title: "Pengenalan D3.js",
  description: "Pahami apa itu D3.js dan kenapa library ini jadi standar visualisasi data di web.",
  icon: "SiD3Dotjs",
  color: "#F9A03C",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction", "dom-introduction", "html-svg"],
  tags: ["d3js", "visualisasi", "data", "svg"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu D3.js?

**D3.js (Data-Driven Documents)** adalah library JavaScript untuk memanipulasi dokumen berdasarkan data. D3 menggunakan **HTML, SVG, dan CSS** untuk membuat visualisasi data yang interaktif dan kustom.

## Kenapa D3.js?

- 🎨 **Kustomisasi tanpa batas** - Tidak seperti Chart.js yang "tinggal pakai", D3 memberi kontrol penuh
- 📊 **Data-driven** - DOM otomatis update mengikuti data
- 🔄 **Dynamic** - Animasi dan transisi built-in
- 🗺️ **Maps & Geo** - Dukungan GeoJSON, proyeksi peta
- 🧩 **Modular** - Ambil yang diperlukan saja (D3 v7 modular)
- 📚 **Standar industri** - Dipakai New York Times, Observable, Bloomberg

## D3.js vs Chart.js vs ECharts

| | D3.js | Chart.js | ECharts |
|---|-------|----------|---------|
| Kustomisasi | 🔥 Unlimited | Terbatas | Tinggi |
| Learning curve | Tinggi | Rendah | Sedang |
| Chart types | Buat sendiri | 8+ built-in | 30+ built-in |
| Interaktivitas | Manual (full control) | Basic | Advanced built-in |
| Cocok untuk | Unique viz, research | Dashboard standar | Enterprise dashboard |
| Bundle size | Modular | 60KB | 1MB+ |

## Kapan Pakai D3?

✅ Visualisasi unik yang tidak ada di library standar
✅ Data storytelling (scrollytelling, animasi kompleks)
✅ Network graphs, tree diagrams, force layouts
✅ Custom maps dan geospatial
✅ Interactive data exploration

❌ Bar chart / line chart sederhana (pakai Chart.js)
❌ Butuh cepat jadi (pakai ECharts/Highcharts)
❌ Tim tidak punya waktu belajar curve

## Arsitektur D3

\`\`\`
Data → [Scales] → [Layouts] → SVG/Canvas → [Transitions] → Display
         ↑                         ↑
    [Selections] ← ← ← [Data Binding] ← ← ← Data Update
\`\`\`

## Instalasi

\`\`\`bash
npm install d3
\`\`\`

\`\`\`javascript
// Import semua
import * as d3 from 'd3';

// Import modular (rekomendasi)
import { select, scaleLinear, axisBottom } from 'd3';
\`\`\`

## Contoh Pertama: Bar Chart

\`\`\`javascript
const data = [150, 230, 180, 90, 270];

const svg = d3.select('svg');
const width = +svg.attr('width');
const height = +svg.attr('height');

const x = d3.scaleBand()
    .domain(data.map((d, i) => i))
    .range([0, width])
    .padding(0.1);

const y = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([height, 0]);

svg.selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', d => y(d))
    .attr('width', x.bandwidth())
    .attr('height', d => height - y(d))
    .attr('fill', '#F9A03C');
\`\`\`
  `,

  quiz: [
    { question: "D3.js kepanjangan?", options: ["Data-Driven Documents", "Digital 3D Design", "Dynamic Data Display", "Document Drawing Design"], correctAnswer: 0 },
    { question: "D3.js vs Chart.js?", options: ["Sama", "D3: kustom penuh; Chart.js: siap pakai", "Chart.js lebih powerful", "D3 deprecated"], correctAnswer: 1 },
    { question: "D3.js manipulasi apa?", options: ["Canvas saja", "HTML, SVG, CSS", "Hanya data", "WebGL"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Bar Chart Pertama",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>D3.js First Chart</title>
    <script src="https://d3js.org/d3.v7.min.js"></script>
</head>
<body>
    <svg width="600" height="400"></svg>
    
    <script>
        const data = [150, 230, 180, 90, 270, 310, 120, 200];
        
        const svg = d3.select('svg');
        const width = +svg.attr('width');
        const height = +svg.attr('height');
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;
        
        const x = d3.scaleBand()
            .domain(data.map((d, i) => i))
            .range([0, innerWidth])
            .padding(0.1);
        
        const y = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([innerHeight, 0]);
        
        const g = svg.append('g')
            .attr('transform', \`translate(\${margin.left},\${margin.top})\`);
        
        g.selectAll('rect')
            .data(data)
            .join('rect')
            .attr('x', (d, i) => x(i))
            .attr('y', d => y(d))
            .attr('width', x.bandwidth())
            .attr('height', d => innerHeight - y(d))
            .attr('fill', '#F9A03C')
            .attr('rx', 4);
    </script>
</body>
</html>`
    }
  ]
};