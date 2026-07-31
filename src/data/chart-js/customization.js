export const chapter = {
  slug: "chart-js-customization",
  title: "Kustomisasi & Options",
  description: "Kustomisasi tampilan grafik: colors, fonts, tooltips, legends, animations.",
  icon: "SiChartdotjs",
  color: "#FF6384",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["chart-js-bar-chart"],
  tags: ["chartjs", "custom", "options", "styling"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Global Configuration

\`\`\`javascript
Chart.defaults.font.family = 'Inter, sans-serif';
Chart.defaults.font.size = 14;
Chart.defaults.color = '#666';
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(0,0,0,0.8)';
\`\`\`

## Colors & Themes

\`\`\`javascript
const data = {
    datasets: [{
        backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
        ],
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 99, 132, 1)'
    }]
};
\`\`\`

## Tooltips

\`\`\`javascript
options: {
    plugins: {
        tooltip: {
            enabled: true,
            backgroundColor: '#333',
            titleFont: { size: 16 },
            bodyFont: { size: 14 },
            cornerRadius: 8,
            callbacks: {
                label: (context) => {
                    return \`\${context.label}: Rp \${context.raw.toLocaleString()}\`;
                }
            }
        }
    }
}
\`\`\`

## Legend

\`\`\`javascript
options: {
    plugins: {
        legend: {
            display: true,
            position: 'bottom', // top | bottom | left | right
            labels: {
                color: '#333',
                usePointStyle: true, // Bulat, bukan kotak
                pointStyleWidth: 10
            }
        }
    }
}
\`\`\`

## Scales (Axes)

\`\`\`javascript
options: {
    scales: {
        y: {
            beginAtZero: true,
            max: 100,
            ticks: {
                callback: (value) => \`\${value}%\`,
                stepSize: 20
            },
            grid: {
                color: 'rgba(0,0,0,0.05)',
                display: true
            }
        }
    }
}
\`\`\`

## Animations

\`\`\`javascript
options: {
    animation: {
        duration: 1000,
        easing: 'easeInOutQuart',
        onComplete: () => console.log('Animasi selesai!')
    }
}

// Disable animation
options: { animation: false }
\`\`\`

## Dark Mode

\`\`\`javascript
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

Chart.defaults.color = isDark ? '#fff' : '#333';
Chart.defaults.borderColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
\`\`\`
  `,

  quiz: [
    { question: "Font global Chart.js diatur di?", options: ["CSS", "Chart.defaults.font", "options.font", "HTML"], correctAnswer: 1 },
    { question: "Legend position: 'bottom'?", options: ["Di bawah grafik", "Di atas grafik", "Di kanan", "Sembunyi"], correctAnswer: 0 },
    { question: "Tooltip callback untuk?", options: ["Debugging", "Format teks tooltip kustom", "Animasi", "Warna"], correctAnswer: 1 }
  ],

  codeExamples: []
};