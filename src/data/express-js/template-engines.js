export const chapter = {
  slug: "express-js-template-engines",
  title: "Template Engines (EJS, Pug)",
  description: "Render HTML dinamis dengan EJS dan Pug template engines.",
  icon: "SiExpress",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["express-js-introduction"],
  tags: ["express", "template", "ejs", "pug"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## EJS (Embedded JavaScript)

\`\`\`bash
npm install ejs
\`\`\`

\`\`\`javascript
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home', users: ['Budi', 'Siti'] });
});
\`\`\`

\`\`\`html
<!-- views/index.ejs -->
<h1><%= title %></h1>
<ul>
    <% users.forEach(user => { %>
        <li><%= user %></li>
    <% }) %>
</ul>
\`\`\`

## Pug (Formerly Jade)

\`\`\`bash
npm install pug
\`\`\`

\`\`\`pug
// views/index.pug
h1= title
ul
  each user in users
    li= user
\`\`\`
  `,

  quiz: [
    { question: "EJS output variabel pakai?", options: ["<%= var %>", "{{ var }}", "{var}", "<% var %>"], correctAnswer: 0 },
    { question: "Pug sebelumnya bernama?", options: ["Slim", "Jade", "Haml", "ERB"], correctAnswer: 1 }
  ],

  codeExamples: []
};