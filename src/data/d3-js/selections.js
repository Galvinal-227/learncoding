export const chapter = {
  slug: "d3-js-selections",
  title: "Selections & DOM Manipulation",
  description: "Kuasai selections untuk memilih dan memanipulasi elemen DOM ala jQuery.",
  icon: "SiD3Dotjs",
  color: "#F9A03C",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["d3-js-introduction"],
  tags: ["d3js", "selection", "dom", "manipulation"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Selections

D3 selections mirip jQuery: memilih elemen DOM dan memanipulasinya.

### select() - Pilih satu elemen pertama
\`\`\`javascript
d3.select('body');
d3.select('#chart');
d3.select('.container');
d3.select('svg g');
\`\`\`

### selectAll() - Pilih semua elemen
\`\`\`javascript
d3.selectAll('p');
d3.selectAll('.bar');
d3.selectAll('circle');
\`\`\`

## Manipulasi Elemen

### Attributes
\`\`\`javascript
d3.select('rect')
    .attr('x', 100)
    .attr('y', 50)
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', 'steelblue')
    .attr('rx', 8); // Multiple attr
\`\`\`

### Style
\`\`\`javascript
d3.select('circle')
    .style('fill', 'red')
    .style('stroke', 'black')
    .style('stroke-width', '2px')
    .style('opacity', 0.8);
\`\`\`

### Text & HTML
\`\`\`javascript
d3.select('text')
    .text('Hello D3!');

d3.select('div')
    .html('<strong>Bold text</strong>');
\`\`\`

### Class
\`\`\`javascript
d3.select('rect')
    .attr('class', 'bar active')
    .classed('active', true)
    .classed('highlight', false);
\`\`\`

## Append & Remove

\`\`\`javascript
// Tambah elemen
const svg = d3.select('svg');
svg.append('rect');        // Tambah rect
svg.append('circle');      // Tambah circle
svg.append('g');           // Tambah group
svg.append('text');        // Tambah text

// Hapus
d3.select('.bar').remove();
d3.selectAll('circle').remove();
\`\`\`

## Method Chaining

\`\`\`javascript
d3.select('svg')
    .attr('width', 800)
    .attr('height', 600)
    .append('rect')
        .attr('x', 50)
        .attr('y', 50)
        .attr('width', 200)
        .attr('height', 100)
        .attr('fill', '#F9A03C')
        .attr('rx', 8);
\`\`\`

## Selection.each()

\`\`\`javascript
d3.selectAll('circle')
    .each(function(d, i) {
        console.log('Circle', i, ':', d);
        d3.select(this).attr('r', d * 2);
    });
\`\`\`
  `,

  quiz: [
    { question: "select() vs selectAll()?", options: ["Sama", "select: satu; selectAll: semua", "selectAll lebih cepat", "select deprecated"], correctAnswer: 1 },
    { question: "Tambah elemen child?", options: ["d3.add()", "d3.create()", "selection.append()", "selection.insert()"], correctAnswer: 2 }
  ],

  codeExamples: []
};