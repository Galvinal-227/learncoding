export const chapter = {
  slug: "chart-js-line-chart",
  title: "Line Chart",
  description: "Buat line chart untuk visualisasi data time series dan trend.",
  icon: "SiChartdotjs",
  color: "#FF6384",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["chart-js-setup"],
  tags: ["chartjs", "line", "chart", "time-series"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Line Chart Dasar

\`\`\`javascript
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei'],
        datasets: [{
            label: 'Pengunjung',
            data: [1000, 1500, 1200, 1800, 2000],
            borderColor: '#FF6384',
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
            tension: 0.3 // Kurva halus (0 = lurus)
        }]
    }
});
\`\`\`

## Fill Area

\`\`\`javascript
datasets: [{
    data: [...],
    fill: true,            // Isi area bawah
    backgroundColor: 'rgba(255, 99, 132, 0.2)'
}]
\`\`\`

## Multi-Line

\`\`\`javascript
datasets: [
    { label: 'Organic', data: [...], borderColor: '#4CAF50' },
    { label: 'Paid', data: [...], borderColor: '#FF6384' },
    { label: 'Social', data: [...], borderColor: '#36A2EB' }
]
\`\`\`

## Stepped Line

\`\`\`javascript
datasets: [{
    data: [...],
    stepped: true // Garis bertangga
}]
\`\`\`

## Point Styling

\`\`\`javascript
datasets: [{
    pointRadius: 5,
    pointHoverRadius: 8,
    pointBackgroundColor: '#FF6384',
    pointBorderColor: '#fff',
    pointBorderWidth: 2
}]
\`\`\`

## Time Scale (dengan date adapter)

\`\`\`bash
npm install chartjs-adapter-date-fns
\`\`\`

\`\`\`javascript
options: {
    scales: {
        x: {
            type: 'time',
            time: { unit: 'month' }
        }
    }
}
\`\`\`
  `,

  quiz: [
    { question: "Properti untuk kurva halus di line chart?", options: ["smooth: true", "tension: 0.3", "curve: 'smooth'", "bezier: true"], correctAnswer: 1 },
    { question: "Stepped line untuk?", options: ["Garis lurus", "Garis bertangga", "Kurva", "Titik-titik"], correctAnswer: 1 }
  ],

  codeExamples: []
};