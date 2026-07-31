export const chapter = {
  slug: "chart-js-bar-chart",
  title: "Bar Chart",
  description: "Buat berbagai jenis bar chart: vertical, horizontal, stacked, grouped.",
  icon: "SiChartdotjs",
  color: "#FF6384",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["chart-js-setup"],
  tags: ["chartjs", "bar", "chart", "grafik-batang"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Bar Chart Dasar

\`\`\`javascript
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            label: 'Penjualan',
            data: [100, 200, 150, 300],
            backgroundColor: '#FF6384'
        }]
    }
});
\`\`\`

## Horizontal Bar Chart

\`\`\`javascript
new Chart(ctx, {
    type: 'bar',
    data: { ... },
    options: {
        indexAxis: 'y', // Horizontal!
    }
});
\`\`\`

## Grouped Bar Chart (Multiple Datasets)

\`\`\`javascript
datasets: [
    { label: 'Produk A', data: [100, 200, 150], backgroundColor: '#FF6384' },
    { label: 'Produk B', data: [150, 100, 200], backgroundColor: '#36A2EB' },
    { label: 'Produk C', data: [200, 150, 100], backgroundColor: '#FFCE56' }
]
\`\`\`

## Stacked Bar Chart

\`\`\`javascript
options: {
    scales: {
        x: { stacked: true },
        y: { stacked: true }
    }
}
\`\`\`

## Bar with Border Radius

\`\`\`javascript
datasets: [{
    data: [100, 200, 150],
    borderRadius: 8,
    borderSkipped: false
}]
\`\`\`

## With Data Labels (Plugin)

\`\`\`javascript
plugins: {
    tooltip: { enabled: true },
    legend: { display: true, position: 'top' }
}
\`\`\`
  `,

  quiz: [
    { question: "Atribut untuk horizontal bar?", options: ["horizontal: true", "indexAxis: 'y'", "direction: 'horizontal'", "flip: true"], correctAnswer: 1 },
    { question: "Stacked bar pakai properti?", options: ["stacked: true di scales", "stack: true di dataset", "type: 'stacked-bar'", "overlap: true"], correctAnswer: 0 }
  ],

  codeExamples: []
};