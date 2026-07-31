export const chapter = {
  slug: "express-js-validation",
  title: "Validasi Input",
  description: "Validasi request body, params, query dengan express-validator dan Joi.",
  icon: "SiExpress",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["express-js-middleware"],
  tags: ["express", "validation", "input", "security"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## express-validator

\`\`\`bash
npm install express-validator
\`\`\`

\`\`\`javascript
import { body, validationResult } from 'express-validator';

const validateUser = [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 8 }).withMessage('Min 8 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

router.post('/users', validateUser, createUser);
\`\`\`

## Joi Alternative

\`\`\`javascript
import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    age: Joi.number().min(0).max(150)
});

// Middleware
const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
};
\`\`\`
  `,

  quiz: [
    { question: "express-validator untuk?", options: ["Routing", "Validasi input", "Auth", "Logging"], correctAnswer: 1 },
    { question: "validationResult() untuk?", options: ["Format", "Cek hasil validasi (errors)", "Sanitize", "Redirect"], correctAnswer: 1 }
  ],

  codeExamples: []
};