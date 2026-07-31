export const chapter = {
  slug: "software-architecture-hexagonal",
  title: "Hexagonal Architecture (Ports & Adapters)",
  description: "Pahami Hexagonal Architecture untuk isolasi business logic dari infrastructure.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["software-architecture-mvc"],
  tags: ["architecture", "hexagonal", "ports", "adapters"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Hexagonal Architecture (Ports & Adapters)

\`\`\`
┌─────────────────────────────────────┐
│           APPLICATION               │
│  ┌───────────────────────────────┐  │
│  │         DOMAIN CORE           │  │
│  │  (Business Logic, Entities)   │  │
│  │                               │  │
│  │  ┌─────┐              ┌─────┐ │  │
│  │  │Port │              │Port │ │  │
│  │  │(in) │              │(out)│ │  │
│  │  └──┬──┘              └──┬──┘ │  │
│  └─────┼────────────────────┼────┘  │
│        │                    │       │
│  ┌─────┴─────┐      ┌──────┴─────┐ │
│  │ Adapter   │      │ Adapter    │ │
│  │ (HTTP)    │      │ (Postgres) │ │
│  └───────────┘      └────────────┘ │
└─────────────────────────────────────┘
\`\`\`

## Code Example

\`\`\`typescript
// Port (interface) - IN
interface UserRepository {
    findById(id: string): Promise<User>;
    save(user: User): Promise<void>;
}

// Domain Core
class UserService {
    constructor(private userRepo: UserRepository) {}
    
    async activateUser(id: string) {
        const user = await this.userRepo.findById(id);
        user.activate();
        await this.userRepo.save(user);
    }
}

// Adapter - OUT
class PostgresUserRepository implements UserRepository {
    async findById(id: string) { return db.query('SELECT * FROM users WHERE id = $1', [id]); }
    async save(user: User) { return db.query('INSERT INTO users ...'); }
}

// Adapter - IN
app.post('/users/:id/activate', async (req, res) => {
    const repo = new PostgresUserRepository();
    const service = new UserService(repo);
    await service.activateUser(req.params.id);
    res.json({ success: true });
});
\`\`\`

## Benefits

\`\`\`
✅ Business logic isolated from infrastructure
✅ Easy to test (mock adapters)
✅ Easy to swap implementations (DB, API)
✅ Framework-agnostic core
\`\`\`
  `,

  quiz: [
    { question: "Hexagonal: Ports?", options: ["Network ports", "Interfaces for external communication", "Database ports", "Server ports"], correctAnswer: 1 },
    { question: "Adapter?", options: ["Core logic", "Implementation of port (DB, HTTP)", "Interface only", "Controller"], correctAnswer: 1 }
  ],

  codeExamples: []
};