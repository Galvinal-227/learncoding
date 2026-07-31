export const chapter = {
  slug: "chart-js-introduction",
  title: "Pengenalan Chart.js",
  description: "Pahami apa itu Chart.js dan kenapa library ini jadi pilihan utama untuk visualisasi data di web.",
  icon: "SiChartdotjs",
  color: "#FF6384",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-introduction"],
  tags: ["chartjs", "visualisasi", "grafik", "canvas"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Chart.js?

Chart.js adalah library JavaScript **open-source** untuk membuat grafik dan visualisasi data berbasis HTML5 Canvas. Ringan, mudah digunakan, dan punya 8+ tipe grafik built-in.

## Kenapa Chart.js?

- 🪶 **Ringan** - ~60KB minified + gzipped
- 🎨 **Beautiful by default** - Grafik terlihat bagus tanpa kustomisasi
- 📱 **Responsif** - Otomatis menyesuaikan ukuran container
- 🎭 **8+ tipe grafik** - Bar, Line, Pie, Doughnut, Radar, Polar, Bubble, Scatter
- 🔌 **Plugin system** - Extensible
- 📚 **Dokumentasi lengkap** - Contoh untuk setiap tipe
- 🆓 **Gratis & Open Source** - MIT License

## Chart.js vs Library Lain

| | Chart.js | D3.js | ECharts | ApexCharts |
|---|----------|-------|---------|------------|
| Learning Curve | Rendah | Tinggi | Sedang | Rendah |
| Kustomisasi | Sedang | Sangat tinggi | Tinggi | Sedang |
| Ukuran Bundle | 60KB | 250KB+ | 1MB+ | 150KB |
| Canvas/SVG | Canvas | SVG | Canvas/SVG | SVG |
| Cocok Untuk | Dashboard, report | Visualisasi kustom kompleks | Enterprise dashboard | Modern dashboards |

## Tipe Grafik yang Didukung

| Tipe | Use Case |
|------|----------|
| **Bar** | Perbandingan kategori |
| **Line** | Trend waktu, time series |
| **Pie / Doughnut** | Proporsi, persentase |
| **Radar** | Perbandingan multi-variabel |
| **Polar Area** | Mirip pie, beda radius |
| **Bubble** | 3 dimensi data (x, y, radius) |
| **Scatter** | Korelasi antar variabel |
| **Mixed** | Kombinasi (bar + line, dll) |

## Struktur Dasar Chart.js

\`\`\`javascript
new Chart(ctx, {
    type: 'bar',          // Tipe grafik
    data: {               // Data grafik
        labels: ['A', 'B', 'C'],
        datasets: [{
            label: 'Dataset 1',
            data: [10, 20, 30]
        }]
    },
    options: {            // Konfigurasi
        responsive: true,
        plugins: {
            title: { display: true, text: 'Judul Grafik' }
        }
    }
});
\`\`\`

## Browser Support

\`\`\`
✅ Chrome 50+
✅ Firefox 50+
✅ Safari 10+
✅ Edge 14+
✅ iOS Safari 10+
✅ Android Chrome 50+
\`\`\`
  `,

  quiz: [
    { question: "Chart.js berbasis teknologi apa?", options: ["SVG", "HTML5 Canvas", "WebGL", "CSS"], correctAnswer: 1 },
    { question: "Tipe grafik untuk data time series?", options: ["Pie", "Line", "Doughnut", "Polar"], correctAnswer: 1 },
    { question: "Ukuran bundle Chart.js?", options: ["~1MB", "~500KB", "~60KB", "~10KB"], correctAnswer: 2 }
  ],

  codeExamples: [
    {
      title: "Chart.js Pertama",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Chart.js Demo</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
</head>
<body>
    <div style="max-width:600px;margin:50px auto;">
        <canvas id="myChart"></canvas>
    </div>
    
    <script>
        const ctx = document.getElementById('myChart').getContext('2d');
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
                datasets: [{
                    label: 'Penjualan 2026',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)'
                    ],
                    borderColor: 'rgba(0,0,0,0.1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: { display: true, text: 'Grafik Pertamaku 🎉' }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    </script>
</body>
</html>`
    }
  ]
};