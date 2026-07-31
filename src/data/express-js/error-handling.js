export const chapter = {
  slug: "express-js-error-handling",
  title: "Error Handling",
  description: "Handle error di Express dengan middleware error handler dan custom error classes.",
  icon: "SiExpress",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["express-js-middleware"],
  tags: ["express", "error", "handling", "exception"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Custom Error Class

\`\`\`javascript
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

class NotFoundError extends AppError {
    constructor(resource = 'Resource') {
        super(\`\${resource} not found\`, 404);
    }
}

class ValidationError extends AppError {
    constructor(errors) {
        super('Validation failed', 400);
        this.errors = errors;
    }
}
\`\`\`

## Async Handler Wrapper

\`\`\`javascript
// Menggantikan try/catch di setiap route
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage
router.get('/users', asyncHandler(async (req, res) => {
    const users = await User.find();
    res.json(users);
}));
\`\`\`

## Global Error Handler

\`\`\`javascript
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.isOperational ? err.message : 'Internal Server Error';
    
    console.error(\`[\${new Date().toISOString()}] \${err.stack}\`);
    
    res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});
\`\`\`
  `,

  quiz: [
    { question: "Async handler wrapper untuk?", options: ["Debug", "Hindari try/catch di setiap route", "Performance", "Styling"], correctAnswer: 1 },
    { question: "Error middleware: berapa parameter?", options: ["2", "3", "4", "5"], correctAnswer: 2 }
  ],

  codeExamples: []
};