export const chapter = {
  slug: "chart-js-pie-chart",
  title: "Pie & Doughnut Chart",
  description: "Buat pie dan doughnut chart untuk menampilkan proporsi data.",
  icon: "SiChartdotjs",
  color: "#FF6384",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["chart-js-setup"],
  tags: ["chartjs", "pie", "doughnut", "proporsi"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Pie Chart

\`\`\`javascript
new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Organic', 'Paid', 'Social', 'Referral'],
        datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
    }
});
\`\`\`

## Doughnut Chart

\`\`\`javascript
new Chart(ctx, {
    type: 'doughnut',
    data: { ... }, // Sama seperti pie
    options: {
        cutout: '60%' // Lubang di tengah (default: 50%)
    }
});
\`\`\`

## Text di Tengah Doughnut

\`\`\`javascript
plugins: [{
    id: 'centerText',
    afterDraw(chart) {
        const { ctx, chartArea: { width, height, top, left } } = chart;
        ctx.save();
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Total: 100%', left + width/2, top + height/2);
    }
}]
\`\`\`

## Half Doughnut

\`\`\`javascript
options: {
    rotation: -90,    // Mulai dari atas
    circumference: 180 // Setengah lingkaran
}
\`\`\`

## Exploded Slice

\`\`\`javascript
datasets: [{
    data: [40, 25, 20, 15],
    hoverOffset: 10 // Jarak saat hover
}]
\`\`\`
  `,

  quiz: [
    { question: "Doughnut vs Pie bedanya?", options: ["Sama", "Doughnut ada lubang di tengah", "Pie lebih besar", "Doughnut deprecated"], correctAnswer: 1 },
    { question: "Properti lubang doughnut?", options: ["hole: '50%'", "cutout: '50%'", "radius: '50%'", "inner: '50%'"], correctAnswer: 1 }
  ],

  codeExamples: []
};