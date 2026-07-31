import { chapter as bar_chart } from './bar-chart.js';
import { chapter as customization } from './customization.js';
import { chapter as introduction } from './introduction.js';
import { chapter as line_chart } from './line-chart.js';
import { chapter as pie_chart } from './pie-chart.js';
import { chapter as plugins } from './plugins.js';
import { chapter as quiz } from './quiz.js';
import { chapter as setup } from './setup.js';

export const category = {
  slug: "chart-js",
  title: "Chart.js",
  description: "Kuasai Chart.js untuk membuat grafik dan visualisasi data yang indah di web.",
  icon: "SiChartdotjs",
  color: "#FF6384",
  totalChapters: 8,
  difficulty: "Beginner",
  order: 55,
  isPublished: true,
  chapters: [
    bar_chart,
    customization,
    introduction,
    line_chart,
    pie_chart,
    plugins,
    quiz,
    setup
  ]
};
