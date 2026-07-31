export const chapter = {
  slug: "express-js-routing",
  title: "Routing",
  description: "Kuasai routing di Express: route methods, route parameters, query strings, dan route groups.",
  icon: "SiExpress",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["express-js-introduction"],
  tags: ["express", "routing", "route", "params"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Basic Routing

\`\`\`javascript
app.get('/', (req, res) => { res.send('GET request'); });
app.post('/', (req, res) => { res.send('POST request'); });
app.put('/users/:id', (req, res) => { res.send('PUT request'); });
app.delete('/users/:id', (req, res) => { res.send('DELETE request'); });
app.patch('/users/:id', (req, res) => { res.send('PATCH request'); });

// All methods
app.all('/secret', (req, res) => { res.send('Any method'); });
\`\`\`

## Route Parameters

\`\`\`javascript
// Single param
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ userId });
});

// Multiple params
app.get('/users/:userId/posts/:postId', (req, res) => {
    const { userId, postId } = req.params;
    res.json({ userId, postId });
});

// Optional param
app.get('/users/:id?', (req, res) => {
    if (req.params.id) return res.json({ id: req.params.id });
    res.json({ message: 'All users' });
});
\`\`\`

## Query Strings

\`\`\`javascript
// GET /search?q=javascript&page=2&limit=10
app.get('/search', (req, res) => {
    const { q, page = 1, limit = 10 } = req.query;
    res.json({ query: q, page, limit });
});
\`\`\`

## Route Groups (express.Router)

\`\`\`javascript
// routes/users.js
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => { res.json([{ id: 1, name: 'Budi' }]); });
router.get('/:id', (req, res) => { res.json({ id: req.params.id, name: 'Budi' }); });
router.post('/', (req, res) => { res.status(201).json({ message: 'Created' }); });

export default router;
\`\`\`

\`\`\`javascript
// app.js
import usersRouter from './routes/users.js';
import postsRouter from './routes/posts.js';

app.use('/users', usersRouter);
app.use('/posts', postsRouter);
\`\`\`

## Route Chaining

\`\`\`javascript
app.route('/users/:id')
    .get((req, res) => { res.send('Get user'); })
    .put((req, res) => { res.send('Update user'); })
    .delete((req, res) => { res.send('Delete user'); });
\`\`\`
  `,

  quiz: [
    { question: "Route parameter diakses via?", options: ["req.query", "req.params", "req.body", "req.data"], correctAnswer: 1 },
    { question: "Query string diakses via?", options: ["req.query", "req.params", "req.body", "req.url"], correctAnswer: 0 },
    { question: "express.Router untuk?", options: ["Debugging", "Group routes ke file terpisah", "Error handling", "Static files"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Complete CRUD Routes",
      language: "javascript",
      code: `import { Router } from 'express';
const router = Router();

// GET all
router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

// GET by ID
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
});

// POST create
router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
});

// PUT update
router.put('/:id', async (req, res) => {
    const user = await User.update(req.params.id, req.body);
    res.json(user);
});

// DELETE
router.delete('/:id', async (req, res) => {
    await User.delete(req.params.id);
    res.status(204).send();
});

export default router;`
    }
  ]
};