export const chapter = {
  slug: "express-js-rest-api-express",
  title: "REST API dengan Express",
  description: "Bangun REST API lengkap dengan Express: CRUD, pagination, filtering, sorting.",
  icon: "SiExpress",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["express-js-middleware"],
  tags: ["express", "rest-api", "crud", "api"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## REST API Conventions

| Method | Endpoint | Action |
|--------|----------|--------|
| GET | /users | List all users |
| GET | /users/:id | Get single user |
| POST | /users | Create new user |
| PUT | /users/:id | Replace entire user |
| PATCH | /users/:id | Partial update user |
| DELETE | /users/:id | Delete user |

## Complete CRUD API

\`\`\`javascript
// routes/users.js
import { Router } from 'express';
const router = Router();

// GET /users?page=1&limit=10&sort=name&order=asc&search=john
router.get('/', async (req, res) => {
    const { page = 1, limit = 10, sort = 'id', order = 'asc', search } = req.query;
    
    const query = {};
    if (search) query.name = { $regex: search, $options: 'i' };
    
    const users = await User.find(query)
        .sort({ [sort]: order === 'desc' ? -1 : 1 })
        .skip((page - 1) * limit)
        .limit(limit);
    
    const total = await User.countDocuments(query);
    
    res.json({
        data: users,
        pagination: {
            page: +page,
            limit: +limit,
            total,
            pages: Math.ceil(total / limit)
        }
    });
});

// GET /users/:id
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

// POST /users
router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
});

// PATCH /users/:id
router.patch('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

// DELETE /users/:id
router.delete('/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
});
\`\`\`

## Response Format Konsisten

\`\`\`javascript
class ApiResponse {
    static success(res, data, message = 'Success', statusCode = 200) {
        return res.status(statusCode).json({ success: true, message, data });
    }
    
    static error(res, message = 'Error', statusCode = 500, errors = null) {
        const response = { success: false, message };
        if (errors) response.errors = errors;
        return res.status(statusCode).json(response);
    }
    
    static paginated(res, data, pagination, message = 'Success') {
        return res.status(200).json({ success: true, message, data, pagination });
    }
}
\`\`\`
  `,

  quiz: [
    { question: "HTTP method untuk create resource?", options: ["GET", "POST", "PUT", "DELETE"], correctAnswer: 1 },
    { question: "Status code untuk resource created?", options: ["200", "201", "204", "404"], correctAnswer: 1 },
    { question: "PATCH vs PUT?", options: ["Sama", "PATCH: partial update; PUT: full replace", "PUT: partial", "PATCH deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};