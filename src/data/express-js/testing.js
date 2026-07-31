export const chapter = {
  slug: "express-js-testing",
  title: "Testing Express",
  description: "Test Express API dengan Supertest dan Jest.",
  icon: "SiExpress",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["express-js-rest-api-express"],
  tags: ["express", "testing", "supertest", "jest"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Setup

\`\`\`bash
npm install --save-dev jest supertest
\`\`\`

## Test Helper

\`\`\`javascript
// app.js
import express from 'express';
export const app = express();
app.use(express.json());
app.get('/health', (req, res) => res.json({ status: 'ok' }));
\`\`\`

\`\`\`javascript
// server.js (separate untuk testing)
import { app } from './app.js';
app.listen(3000);
\`\`\`

## Integration Test

\`\`\`javascript
import request from 'supertest';
import { app } from '../app.js';

describe('GET /api/users', () => {
    it('should return users list', async () => {
        const res = await request(app)
            .get('/api/users')
            .expect(200);
        
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
    });
    
    it('should create user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({ name: 'Budi', email: 'budi@test.com' })
            .expect(201);
        
        expect(res.body.name).toBe('Budi');
    });
    
    it('should return 404 for invalid ID', async () => {
        await request(app)
            .get('/api/users/invalid-id')
            .expect(404);
    });
});
\`\`\`
  `,

  quiz: [
    { question: "Supertest untuk?", options: ["Unit test", "HTTP integration test Express", "E2E browser", "Performance"], correctAnswer: 1 },
    { question: "request(app).get().expect(200)?", options: ["Debug", "Test status code 200", "Set header", "Redirect"], correctAnswer: 1 }
  ],

  codeExamples: []
};