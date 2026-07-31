export const chapter = {
  slug: "d3-js-transitions",
  title: "Transitions & Animations",
  description: "Buat animasi data yang halus dengan D3 transitions.",
  icon: "SiD3Dotjs",
  color: "#F9A03C",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["d3-js-data-binding"],
  tags: ["d3js", "transition", "animation", "interpolation"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## D3 Transitions

Transitions meng-animasikan perubahan atribut/style secara halus.

## Basic Transition

\`\`\`javascript
svg.selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', 0)       // Mulai dari sini
    .attr('cy', 100)
    .attr('r', 0)
    .transition()         // Animasi!
    .duration(1000)       // 1 detik
    .delay((d, i) => i * 100)  // Stagger
    .attr('cx', (d, i) => i * 50 + 50)
    .attr('r', d => d);
\`\`\`

## Transition Properties

\`\`\`javascript
element.transition()
    .duration(1000)           // Durasi (ms)
    .delay(500)               // Tunda (ms)
    .ease(d3.easeCubicInOut)  // Easing function
    .attr('y', 100)
    .style('opacity', 0.5)
    .on('end', () => console.log('Selesai!'));
\`\`\`

## Easing Functions

\`\`\`javascript
d3.easeLinear
d3.easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut
d3.easeElastic, easeElasticOut
d3.easeBounce, easeBounceOut
d3.easeCircle
d3.easeBack
\`\`\`

## Transition Lifecycle

\`\`\`javascript
selection.transition()
    .on('start', function() { d3.select(this).attr('opacity', 0); })
    .on('interrupt', () => console.log('Interrupted'))
    .on('end', function() { d3.select(this).attr('opacity', 1); });
\`\`\`

## Contoh: Update Chart dengan Transisi

\`\`\`javascript
function updateChart(newData) {
    const bars = svg.selectAll('rect').data(newData);
    
    // ENTER
    bars.enter().append('rect')
        .attr('y', height)
        .attr('height', 0)
        .transition().duration(500)
        .attr('y', d => y(d))
        .attr('height', d => height - y(d));
    
    // UPDATE
    bars.transition().duration(500)
        .attr('y', d => y(d))
        .attr('height', d => height - y(d));
    
    // EXIT
    bars.exit()
        .transition().duration(300)
        .attr('y', height)
        .attr('height', 0)
        .remove();
}
\`\`\`
  `,

  quiz: [
    { question: ".transition() setelah?", options: ["Sebelum attr", "Sebelum element dibuat", "Setelah attr awal (sebelum attr animasi)", "Di akhir"], correctAnswer: 2 },
    { question: "Stagger delay?", options: [".delay(1000)", ".delay((d,i) => i*100)", ".stagger(100)", ".duration(100)"], correctAnswer: 1 }
  ],

  codeExamples: []
};