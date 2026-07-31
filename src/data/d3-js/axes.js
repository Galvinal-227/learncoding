export const chapter = {
  slug: "d3-js-axes",
  title: "Axes & Gridlines",
  description: "Kuasai pembuatan sumbu X/Y, gridlines, dan kustomisasi tampilan axes di D3.js.",
  icon: "SiD3Dotjs",
  color: "#F9A03C",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["d3-js-scales"],
  tags: ["d3js", "axes", "sumbu", "grid", "tick"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Axes?

Axes (sumbu) adalah komponen visual yang menampilkan **skala referensi** pada grafik. D3 menyediakan generator axes untuk sumbu X dan Y.

## 4 Orientasi Axes

\`\`\`javascript
// Sumbu X di bawah
const xAxis = d3.axisBottom(xScale);

// Sumbu X di atas
const xAxis = d3.axisTop(xScale);

// Sumbu Y di kiri
const yAxis = d3.axisLeft(yScale);

// Sumbu Y di kanan
const yAxis = d3.axisRight(yScale);
\`\`\`

## Basic Usage

\`\`\`javascript
const svg = d3.select('svg');
const margin = { top: 20, right: 30, bottom: 40, left: 50 };
const width = +svg.attr('width') - margin.left - margin.right;
const height = +svg.attr('height') - margin.top - margin.bottom;

// Scales
const x = d3.scaleLinear().domain([0, 100]).range([0, width]);
const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);

// Axes
const xAxis = d3.axisBottom(x);
const yAxis = d3.axisLeft(y);

// Group untuk margin
const g = svg.append('g')
    .attr('transform', \`translate(\${margin.left},\${margin.top})\`);

// Render sumbu X
g.append('g')
    .attr('transform', \`translate(0,\${height})\`)
    .call(xAxis);

// Render sumbu Y
g.append('g')
    .call(yAxis);
\`\`\`

## Kustomisasi Ticks

### Jumlah Ticks
\`\`\`javascript
// Tentukan jumlah tick (kira-kira)
const xAxis = d3.axisBottom(x).ticks(10);

// Tentukan nilai tick secara eksplisit
const xAxis = d3.axisBottom(x).tickValues([0, 25, 50, 75, 100]);

// Tick arguments (untuk time scale)
const xAxis = d3.axisBottom(x).ticks(d3.timeMonth.every(1));
\`\`\`

### Format Tick Label
\`\`\`javascript
// Number formatting
const yAxis = d3.axisLeft(y)
    .tickFormat(d => \`\${d}%\`);

// Currency
const yAxis = d3.axisLeft(y)
    .tickFormat(d3.format('$,.0f')); // $1,234

// Percentage
const yAxis = d3.axisLeft(y)
    .tickFormat(d3.format('.0%')); // 25%

// Custom function
const yAxis = d3.axisLeft(y)
    .tickFormat(d => {
        if (d >= 1000000) return \`\${d/1000000}M\`;
        if (d >= 1000) return \`\${d/1000}K\`;
        return d;
    });
\`\`\`

## Styling Ticks

\`\`\`javascript
const xAxis = d3.axisBottom(x)
    .tickSize(6)           // Panjang tick line (default: 6)
    .tickSizeInner(6)      // Panjang tick dalam
    .tickSizeOuter(0)      // Panjang tick ujung (0 = hilangkan)
    .tickPadding(10);      // Jarak tick ke label

// Render + style dengan CSS
g.append('g')
    .attr('class', 'x-axis')
    .call(xAxis)
    .selectAll('text')
    .attr('fill', '#666')
    .attr('font-size', '12px')
    .attr('font-family', 'Arial');
\`\`\`

## Gridlines

Gridlines adalah **tick yang diperpanjang** sampai ke sisi chart.

### Vertical Grid (dari sumbu X)
\`\`\`javascript
// Buat axis dengan tickSize = -height (ke atas)
g.append('g')
    .attr('class', 'grid')
    .call(d3.axisBottom(x)
        .tickSize(-height)    // Perpanjang ke atas
        .tickFormat('')       // Hilangkan label
    )
    .selectAll('line')
    .attr('stroke', '#e0e0e0')
    .attr('stroke-dasharray', '4,4'); // Garis putus-putus

// Hilangkan tick ujung
g.selectAll('.tick line')
    .attr('stroke-opacity', d => d === 0 ? 1 : 0.3);
\`\`\`

### Horizontal Grid (dari sumbu Y)
\`\`\`javascript
g.append('g')
    .attr('class', 'grid')
    .call(d3.axisLeft(y)
        .tickSize(-width)     // Perpanjang ke kanan
        .tickFormat('')
    );
\`\`\`

## Axis Label

\`\`\`javascript
// X Axis Label
g.append('text')
    .attr('x', width / 2)
    .attr('y', height + margin.bottom - 5)
    .attr('text-anchor', 'middle')
    .attr('font-size', '14px')
    .attr('fill', '#333')
    .text('Waktu (Bulan)');

// Y Axis Label
g.append('text')
    .attr('x', -height / 2)
    .attr('y', -margin.left + 15)
    .attr('text-anchor', 'middle')
    .attr('transform', 'rotate(-90)')
    .attr('font-size', '14px')
    .attr('fill', '#333')
    .text('Penjualan (Juta Rupiah)');
\`\`\`

## Kustomisasi Lengkap

\`\`\`javascript
const xAxis = d3.axisBottom(x)
    .ticks(5)                          // 5 ticks
    .tickSize(10)                      // Panjang tick
    .tickSizeOuter(0)                  // Hilangkan tick ujung
    .tickPadding(8)                    // Jarak label
    .tickFormat(d => \`Bulan \${d + 1}\`); // Format label

g.append('g')
    .attr('transform', \`translate(0,\${height})\`)
    .call(xAxis)
    // Style ticks
    .selectAll('.tick line')
    .attr('stroke', '#ccc')
    .attr('stroke-width', 1);
\`\`\`

## Multiple Axes

\`\`\`javascript
// Dua sumbu Y (kiri dan kanan)
const yLeft = d3.scaleLinear().domain([0, 100]).range([height, 0]);
const yRight = d3.scaleLinear().domain([0, 1000]).range([height, 0]);

// Sumbu kiri
g.append('g').call(d3.axisLeft(yLeft));

// Sumbu kanan
g.append('g')
    .attr('transform', \`translate(\${width}, 0)\`)
    .call(d3.axisRight(yRight));
\`\`\`

## Transition pada Axes

\`\`\`javascript
// Update scale
x.domain([newMin, newMax]);

// Animasikan sumbu
g.select('.x-axis')
    .transition()
    .duration(750)
    .call(xAxis);
\`\`\`

## Styling dengan CSS

\`\`\`css
/* Sembunyikan domain line (garis sumbu) */
.x-axis .domain,
.y-axis .domain {
    display: none;
}

/* Style tick text */
.x-axis text,
.y-axis text {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    fill: #666;
}

/* Style tick lines */
.x-axis .tick line,
.y-axis .tick line {
    stroke: #e0e0e0;
    stroke-width: 1px;
}

/* Grid lines */
.grid .tick line {
    stroke: #f0f0f0;
    stroke-dasharray: 4, 4;
}
.grid .domain {
    stroke: none;
}
\`\`\`

## Cheatsheet Axes

\`\`\`javascript
// Orientasi
d3.axisBottom(x)   // X di bawah
d3.axisTop(x)      // X di atas
d3.axisLeft(y)     // Y di kiri
d3.axisRight(y)    // Y di kanan

// Ticks
.ticks(10)                  // Jumlah (approx)
.tickValues([1,2,3])        // Nilai eksplisit
.tickFormat(d3.format('.0%')) // Format
.tickSize(10)               // Panjang
.tickSizeInner(10)          // Panjang dalam
.tickSizeOuter(0)           // Panjang ujung
.tickPadding(8)             // Jarak ke label

// Grid (trick)
.tickSize(-height)          // Perpanjang jadi grid
.tickFormat('')             // Hilangkan label
\`\`\`
  `,

  quiz: [
    {
      question: "4 orientasi sumbu D3?",
      options: [
        "top, bottom, left, right",
        "north, south, east, west",
        "up, down, left, right",
        "horizontal, vertical, diagonal, radial"
      ],
      correctAnswer: 0,
      explanation: "d3.axisBottom(), axisTop(), axisLeft(), axisRight()."
    },
    {
      question: "Cara membuat gridlines dari sumbu X?",
      options: [
        "d3.grid()",
        "axisBottom(x).tickSize(-height).tickFormat('')",
        "d3.gridlines(x)",
        "x.grid(true)"
      ],
      correctAnswer: 1,
      explanation: "Gridlines adalah tick yang diperpanjang (tickSize negative) + label disembunyikan (tickFormat(''))."
    },
    {
      question: "tickFormat(d3.format('$,.0f')) menghasilkan?",
      options: ["1234", "$1,234", "1.234", "1234%"],
      correctAnswer: 1,
      explanation: "d3.format('$,.0f') memformat angka ke currency dengan pemisah ribuan dan tanpa desimal."
    },
    {
      question: "Cara update axis dengan animasi setelah data berubah?",
      options: [
        "Ulang buat axis baru",
        "selection.transition().duration(750).call(xAxis)",
        "axis.update()",
        "Tidak bisa"
      ],
      correctAnswer: 1,
      explanation: "Setelah scale di-update, panggil axis lagi dengan transition untuk animasi halus."
    },
    {
      question: "Fungsi tickSizeOuter(0)?",
      options: [
        "Hapus semua tick",
        "Hilangkan tick di ujung sumbu",
        "Perbesar tick",
        "Format tick"
      ],
      correctAnswer: 1,
      explanation: "tickSizeOuter mengontrol panjang tick di ujung domain (pertama & terakhir). 0 = hilangkan."
    }
  ],

  codeExamples: [
    {
      title: "Axes & Gridlines Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>D3 Axes & Gridlines</title>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <style>
        .axis text { font-family: Arial; font-size: 12px; fill: #666; }
        .axis .domain { stroke: #ccc; }
        .axis .tick line { stroke: #ddd; }
        .grid .tick line { stroke: #eee; stroke-dasharray: 4,4; }
        .grid .domain { stroke: none; }
        .axis-label { font-family: Arial; font-size: 14px; fill: #333; font-weight: bold; }
    </style>
</head>
<body>
    <svg width="700" height="450"></svg>
    
    <script>
        const svg = d3.select('svg');
        const margin = { top: 30, right: 30, bottom: 50, left: 60 };
        const width = +svg.attr('width') - margin.left - margin.right;
        const height = +svg.attr('height') - margin.top - margin.bottom;
        
        const g = svg.append('g')
            .attr('transform', \`translate(\${margin.left},\${margin.top})\`);
        
        // Data dummy
        const data = [
            { month: 'Jan', value: 450 },
            { month: 'Feb', value: 620 },
            { month: 'Mar', value: 580 },
            { month: 'Apr', value: 810 },
            { month: 'Mei', value: 750 },
            { month: 'Jun', value: 920 }
        ];
        
        // Scales
        const x = d3.scaleBand()
            .domain(data.map(d => d.month))
            .range([0, width])
            .padding(0.1);
        
        const y = d3.scaleLinear()
            .domain([0, 1000])
            .range([height, 0])
            .nice();
        
        // GRID (render duluan biar di belakang)
        // Grid horizontal
        g.append('g')
            .attr('class', 'grid')
            .call(d3.axisLeft(y)
                .tickSize(-width)
                .tickFormat('')
            );
        
        // Grid vertical
        g.append('g')
            .attr('class', 'grid')
            .attr('transform', \`translate(0,\${height})\`)
            .call(d3.axisBottom(x)
                .tickSize(-height)
                .tickFormat('')
            );
        
        // Bars
        g.selectAll('rect')
            .data(data)
            .join('rect')
            .attr('x', d => x(d.month))
            .attr('y', d => y(d.value))
            .attr('width', x.bandwidth())
            .attr('height', d => height - y(d.value))
            .attr('fill', '#F9A03C')
            .attr('rx', 4);
        
        // AXES
        // Sumbu X
        g.append('g')
            .attr('class', 'axis')
            .attr('transform', \`translate(0,\${height})\`)
            .call(d3.axisBottom(x)
                .tickSize(6)
                .tickSizeOuter(0)
                .tickPadding(10)
            );
        
        // Sumbu Y
        g.append('g')
            .attr('class', 'axis')
            .call(d3.axisLeft(y)
                .ticks(5)
                .tickSize(6)
                .tickSizeOuter(0)
                .tickPadding(10)
                .tickFormat(d => \`Rp \${d}\`)
            );
        
        // Axis Labels
        g.append('text')
            .attr('class', 'axis-label')
            .attr('x', width / 2)
            .attr('y', height + 40)
            .attr('text-anchor', 'middle')
            .text('Bulan');
        
        g.append('text')
            .attr('class', 'axis-label')
            .attr('x', -height / 2)
            .attr('y', -45)
            .attr('text-anchor', 'middle')
            .attr('transform', 'rotate(-90)')
            .text('Penjualan (Juta)');
    </script>
</body>
</html>`
    }
  ]
};