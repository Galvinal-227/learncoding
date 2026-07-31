export const chapter = {
  slug: "chart-js-plugins",
  title: "Plugins & Extensions",
  description: "Gunakan dan buat plugin Chart.js untuk fitur tambahan.",
  icon: "SiChartdotjs",
  color: "#FF6384",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["chart-js-customization"],
  tags: ["chartjs", "plugin", "extension", "kustom"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Plugin Bawaan

\`\`\`javascript
// Chart.js punya plugin bawaan:
- Tooltip
- Legend
- Title
- Subtitle
- Decimation (untuk data besar)
- Filler (fill area)
\`\`\`

## Plugin Populer

### chartjs-plugin-datalabels
\`\`\`bash
npm install chartjs-plugin-datalabels
\`\`\`

\`\`\`javascript
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

options: {
    plugins: {
        datalabels: {
            anchor: 'end',
            align: 'top',
            formatter: (value) => \`\${value}%\`
        }
    }
}
\`\`\`

### chartjs-plugin-annotation
\`\`\`bash
npm install chartjs-plugin-annotation
\`\`\`

\`\`\`javascript
options: {
    plugins: {
        annotation: {
            annotations: {
                targetLine: {
                    type: 'line',
                    yMin: 80, yMax: 80,
                    borderColor: 'red',
                    borderWidth: 2,
                    label: { content: 'Target', enabled: true }
                }
            }
        }
    }
}
\`\`\`

### chartjs-plugin-zoom
\`\`\`bash
npm install chartjs-plugin-zoom
\`\`\`

\`\`\`javascript
options: {
    plugins: {
        zoom: {
            zoom: { wheel: { enabled: true }, pinch: { enabled: true } },
            pan: { enabled: true }
        }
    }
}
\`\`\`

## Membuat Plugin Kustom

\`\`\`javascript
const customPlugin = {
    id: 'myPlugin',
    afterDraw(chart) {
        const { ctx } = chart;
        ctx.save();
        ctx.font = '12px Arial';
        ctx.fillStyle = '#999';
        ctx.fillText('Sumber: Data Internal', 10, chart.height - 10);
        ctx.restore();
    }
};

new Chart(ctx, {
    plugins: [customPlugin]
});
\`\`\`
  `,

  quiz: [
    { question: "Plugin untuk data labels di bar/pie?", options: ["chartjs-plugin-zoom", "chartjs-plugin-datalabels", "chartjs-plugin-annotation", "chartjs-plugin-drag"], correctAnswer: 1 },
    { question: "Plugin kustom minimal punya properti?", options: ["name", "id", "type", "version"], correctAnswer: 1 },
    { question: "chartjs-plugin-zoom untuk?", options: ["Styling", "Zoom & pan grafik", "Export", "Print"], correctAnswer: 1 }
  ],

  codeExamples: []
};