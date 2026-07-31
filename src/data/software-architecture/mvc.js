export const chapter = {
  slug: "software-architecture-mvc",
  title: "MVC (Model-View-Controller)",
  description: "Pahami pola MVC - fondasi arsitektur web applications.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["software-architecture-introduction"],
  tags: ["architecture", "mvc", "pattern", "web"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## MVC Components

\`\`\`
┌──────────┐     ┌──────────┐
│  Client  │────▶│Controller│ ← Handle request
└──────────┘     └──────────┘
                      │
              ┌───────┴───────┐
              ▼               ▼
         ┌────────┐    ┌──────────┐
         │ Model  │◄───│   View   │
         │(Data)  │    │(Template)│
         └────────┘    └──────────┘
\`\`\`

| Component | Tanggung Jawab |
|-----------|---------------|
| **Model** | Data + business logic |
| **View** | UI/template (HTML) |
| **Controller** | Handle request, orchestrate |

## Express MVC Example

\`\`\`javascript
// Model
class UserModel {
    static async findAll() { return db.query('SELECT * FROM users'); }
    static async findById(id) { return db.query('SELECT * FROM users WHERE id = ?', [id]); }
}

// Controller
class UserController {
    static async index(req, res) {
        const users = await UserModel.findAll();
        res.render('users/index', { users });
    }
}

// Route
app.get('/users', UserController.index);
\`\`\`

## MVC Frameworks

| Framework | Language |
|-----------|----------|
| **Express** | JavaScript |
| **NestJS** | TypeScript |
| **Laravel** | PHP |
| **Django** | Python |
| **Ruby on Rails** | Ruby |
| **Spring MVC** | Java |

## MVC Pros & Cons

| ✅ Pros | ❌ Cons |
|---------|---------|
| Separation of concerns | Can become bloated (Massive View Controller) |
| Easy to understand | Tight coupling possible |
| Great for CRUD apps | Not ideal for complex UIs |
  `,
  quiz: [
    { question: "MVC: Model?", options: ["UI", "Data + business logic", "Request handler", "Router"], correctAnswer: 1 },
    { question: "MVC: Controller?", options: ["Database", "Handle request, orchestrate Model+View", "HTML template", "CSS"], correctAnswer: 1 }
  ],
  codeExamples: []
};