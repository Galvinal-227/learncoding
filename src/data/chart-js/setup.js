export const chapter = {
  slug: "chart-js-setup",
  title: "Instalasi & Setup",
  description: "Pelajari berbagai cara install Chart.js dan integrasi dengan framework.",
  icon: "SiChartdotjs",
  color: "#FF6384",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["chart-js-introduction"],
  tags: ["chartjs", "instalasi", "setup", "cdn", "npm"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 3 Cara Install Chart.js

### 1. CDN (Paling Cepat)
\`\`\`html
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
\`\`\`

### 2. NPM (Rekomendasi Project)
\`\`\`bash
npm install chart.js
\`\`\`

\`\`\`javascript
import Chart from 'chart.js/auto';

const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, { ... });
\`\`\`

### 3. Download Manual
Download dari [chartjs.org](https://www.chartjs.org) → \`chart.umd.min.js\`

## Chart.js + React

\`\`\`bash
npm install chart.js react-chartjs-2
\`\`\`

\`\`\`javascript
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {
    const data = {
        labels: ['A', 'B', 'C'],
        datasets: [{ label: 'Data', data: [10, 20, 30] }]
    };
    
    return <Bar data={data} />;
}
\`\`\`

## Chart.js + Vue

\`\`\`bash
npm install chart.js vue-chartjs
\`\`\`

\`\`\`javascript
import { Bar } from 'vue-chartjs';

export default {
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: ['A', 'B', 'C'],
                datasets: [{ label: 'Data', data: [10, 20, 30] }]
            }
        };
    }
};
\`\`\`

## Tree Shaking (Optimasi Bundle)

\`\`\`javascript
// ❌ Import semua (besar)
import Chart from 'chart.js/auto';

// ✅ Import yang diperlukan saja (kecil)
import { Chart, BarController, CategoryScale, LinearScale, BarElement } from 'chart.js';
Chart.register(BarController, CategoryScale, LinearScale, BarElement);
\`\`\`
  `,

  quiz: [
    { question: "Cara install Chart.js yang direkomendasikan untuk project?", options: ["CDN", "NPM", "Download ZIP", "Copy-paste"], correctAnswer: 1 },
    { question: "React wrapper Chart.js?", options: ["react-chart", "react-chartjs-2", "chartjs-react", "react-canvas"], correctAnswer: 1 },
    { question: "Tree shaking untuk?", options: ["Mempercantik", "Mengurangi ukuran bundle", "Debugging", "Testing"], correctAnswer: 1 }
  ],

  codeExamples: []
};