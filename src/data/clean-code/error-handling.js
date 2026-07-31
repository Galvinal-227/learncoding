export const chapter = {
  slug: "clean-code-error-handling",
  title: "Error Handling",
  description: "Tulis error handling yang bersih, informatif, dan tidak menyembunyikan bug.",
  icon: "SiCleanode",
  color: "#3178C6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["clean-code-functions"],
  tags: ["clean-code", "error", "exception", "try-catch"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Prinsip Error Handling

### 1. Jangan Return Null
\`\`\`javascript
// ❌ Buruk - null check berantai
function getUser(id) {
    if (!id) return null;
    return database.find(id) || null;
}
const user = getUser(1);
if (user) { /* ... */ }

// ✅ Baik - throw error atau return empty
function getUser(id) {
    if (!id) throw new Error('User ID is required');
    const user = database.find(id);
    if (!user) throw new Error(\`User \${id} not found\`);
    return user;
}
\`\`\`

### 2. Gunakan Exception, Bukan Error Code
\`\`\`javascript
// ❌ Buruk
function processFile(file) {
    if (!file) return -1;
    if (!file.isValid) return -2;
    return 0;
}

// ✅ Baik
function processFile(file) {
    if (!file) throw new Error('File is required');
    if (!file.isValid) throw new ValidationError('Invalid file format');
}
\`\`\`

### 3. Custom Error Classes
\`\`\`javascript
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

class DatabaseError extends Error {
    constructor(message, query) {
        super(message);
        this.name = 'DatabaseError';
        this.query = query;
    }
}

// Usage
try {
    await saveUser(user);
} catch (error) {
    if (error instanceof ValidationError) {
        return res.status(400).json({ error: error.message, field: error.field });
    }
    if (error instanceof DatabaseError) {
        console.error('DB Error:', error.query);
        return res.status(500).json({ error: 'Internal server error' });
    }
    throw error; // Re-throw unknown errors
}
\`\`\`

### 4. Jangan Swallow Error
\`\`\`javascript
// ❌ Buruk - error hilang
try {
    await riskyOperation();
} catch (e) {
    // Diam-diam gagal
}

// ✅ Baik - minimal log
try {
    await riskyOperation();
} catch (error) {
    console.error('Operation failed:', error);
    // Optional: kirim ke error monitoring (Sentry)
}
\`\`\`

### 5. Provide Context
\`\`\`javascript
// ❌ Buruk
throw new Error('Failed');

// ✅ Baik
throw new Error(\`Failed to save user \${user.id}: \${error.message}\`);
\`\`\`
  `,

  quiz: [
    { question: "Kenapa hindari return null?", options: ["Lebih lambat", "Null check berantai, rawan bug", "Tidak valid", "Wajib"], correctAnswer: 1 },
    { question: "Custom error class untuk?", options: ["Hiasan", "Bedakan jenis error (Validation vs Database)", "Lebih cepat", "Tidak perlu"], correctAnswer: 1 }
  ],

  codeExamples: []
};