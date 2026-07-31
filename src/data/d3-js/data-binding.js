export const chapter = {
  slug: "d3-js-data-binding",
  title: "Data Binding",
  description: "Kuasai enter, update, exit pattern - jantung D3.js.",
  icon: "SiD3Dotjs",
  color: "#F9A03C",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["d3-js-selections"],
  tags: ["d3js", "data-binding", "enter", "update", "exit"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Data Binding

Inilah **superpower D3**. DOM otomatis sinkron dengan data!

## Enter-Update-Exit Pattern

\`\`\`
Data:  [A] [B] [C] [D] [E]
DOM:   [A] [B] [C]

Enter:  [D] [E] ← data baru, belum ada DOM → BUAT
Update: [A] [B] [C] ← data ada, DOM ada → UPDATE
Exit:   [X] [Y] ← DOM ada, data tidak ada → HAPUS
\`\`\`

## Basic Data Binding

### .data() - Bind data ke selection
\`\`\`javascript
const data = [10, 20, 30, 40, 50];

// Bind data
svg.selectAll('circle')
    .data(data)
    .join('circle')  // Enter + Update + Exit otomatis!
    .attr('cx', (d, i) => i * 60 + 50)
    .attr('cy', 100)
    .attr('r', d => d)
    .attr('fill', '#F9A03C');
\`\`\`

## Manual Enter-Update-Exit

\`\`\`javascript
const circles = svg.selectAll('circle').data(data);

// ENTER - Buat elemen baru
circles.enter()
    .append('circle')
    .attr('cx', (d, i) => i * 60 + 50)
    .attr('cy', 100)
    .attr('r', 0)  // Mulai dari 0
    .transition().duration(500)
    .attr('r', d => d);

// UPDATE - Update elemen existing
circles
    .attr('fill', '#F9A03C')
    .attr('stroke', '#333');

// EXIT - Hapus elemen yang tidak ada di data
circles.exit()
    .transition().duration(300)
    .attr('r', 0)
    .remove();
\`\`\`

## Key Function (Penting!)

Tanpa key, D3 pakai **index** untuk identifikasi. Dengan key, pakai **data value**:

\`\`\`javascript
// Tanpa key (default by index)
.data(data)

// Dengan key (by data field)
.data(data, d => d.id)
.data(data, d => d.name)
\`\`\`

### Contoh dengan Key:
\`\`\`javascript
const oldData = [{id: 1, v: 10}, {id: 2, v: 20}];
const newData = [{id: 2, v: 30}, {id: 3, v: 40}];

svg.selectAll('circle')
    .data(newData, d => d.id)  // Key = id
    .join('circle')
    // id=2: UPDATE (tidak recreate!)
    // id=3: ENTER (baru)
    // id=1: EXIT (otomatis dihapus)
\`\`\`

## .join() (Modern D3 v5+)

\`\`\`javascript
// Sederhana
selection.data(data).join('circle');

// Dengan function per stage
selection.data(data).join(
    enter => enter.append('circle').attr('r', 0),
    update => update,
    exit => exit.remove()
);

// Dengan transition
selection.data(data).join(
    enter => enter.append('circle')
        .attr('r', 0)
        .call(enter => enter.transition().attr('r', 20)),
    update => update
        .call(update => update.transition().attr('fill', 'green')),
    exit => exit
        .call(exit => exit.transition().attr('r', 0).remove())
);
\`\`\`
  `,

  quiz: [
    { question: "3 stages data binding?", options: ["Add, Edit, Delete", "Enter, Update, Exit", "Create, Read, Delete", "Bind, Sync, Remove"], correctAnswer: 1 },
    { question: ".join() untuk?", options: ["Join arrays", "Shorthand enter+update+exit", "Join strings", "Merge objects"], correctAnswer: 1 },
    { question: "Key function untuk?", options: ["Sorting", "Identifikasi elemen by data (bukan index)", "Encryption", "Hiasan"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Update Pattern Demo",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8"><title>D3 Update Pattern</title>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <style>button{margin:5px;padding:10px 20px;cursor:pointer}</style>
</head>
<body>
    <button onclick="update([10,30,50,70,90])">Data 1</button>
    <button onclick="update([40,80,20,60,100,30])">Data 2</button>
    <button onclick="update([25,75])">Data 3</button>
    <svg width="600" height="200"></svg>
    
    <script>
        const svg = d3.select('svg');
        
        function update(data) {
            const circles = svg.selectAll('circle').data(data);
            
            // EXIT - hapus
            circles.exit()
                .transition().duration(300)
                .attr('cy', 200).attr('r', 0)
                .remove();
            
            // ENTER - buat baru
            circles.enter().append('circle')
                .attr('cx', (d, i) => i * 60 + 50)
                .attr('cy', 200)
                .attr('r', 0)
                .attr('fill', '#F9A03C')
                .transition().duration(500)
                .attr('cy', 100)
                .attr('r', d => d);
            
            // UPDATE
            circles
                .transition().duration(500)
                .attr('cx', (d, i) => i * 60 + 50)
                .attr('r', d => d);
        }
        
        update([10, 30, 50, 70, 90]);
    </script>
</body>
</html>`
    }
  ]
};