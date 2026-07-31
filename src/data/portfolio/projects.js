export const chapter = {
  slug: "portfolio-projects",
  title: "Memilih Project",
  description: "Pilih dan bangun project yang standout untuk portfolio.",
  icon: "SiGithub",
  color: "#181717",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["portfolio-introduction"],
  tags: ["portfolio", "projects", "showcase", "github"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Project yang Standout

### ✅ Project Bagus (Bukan Todo App!)
\`\`\`
- E-commerce platform (full-stack)
- Dashboard analytics (real data)
- Social media clone (fitur kompleks)
- AI-powered app (integrasi OpenAI)
- Real-time chat app (WebSocket)
- Design system / component library
- CLI tool / NPM package
- Open source contributions
\`\`\`

### ❌ Project Kurang Menarik
\`\`\`
- Todo app (terlalu basic)
- Calculator (terlalu basic)
- Landing page statis
- Project tutorial (copy-paste)
\`\`\`

## Kriteria Project Portfolio

| Kriteria | Kenapa |
|----------|--------|
| **Solved real problem** | Bukan project dummy |
| **Live demo** | Recruiter bisa coba langsung |
| **Clean code** | GitHub yang rapi |
| **README jelas** | Screenshot, setup, features |
| **Multiple technologies** | Frontend + Backend + Database |
| **Deployed** | URL yang bisa diakses |
| **Unique** | Beda dari portfolio lain |

## Project Ideas

### Beginner
- Personal blog dengan CMS (Next.js + Strapi)
- Weather dashboard (REST API + Chart.js)
- URL shortener (Node.js + Redis)
- Markdown note-taking app

### Intermediate
- E-commerce dengan payment gateway
- Real-time chat (Socket.io)
- Task management (drag & drop)
- AI content generator (OpenAI API)

### Advanced
- Full SaaS application (subscription)
- Microservices app (Docker + K8s)
- CLI tool / NPM package
- Open source contribution (major feature)

## GitHub README Template

\`\`\`markdown
# Project Name

![Screenshot](screenshot.png)

## 🚀 Live Demo
[https://project.vercel.app](https://project.vercel.app)

## ✨ Features
- Feature 1
- Feature 2

## 🛠️ Tech Stack
- Frontend: Next.js, Tailwind CSS
- Backend: Node.js, Express
- Database: PostgreSQL, Prisma

## 🏃‍♂️ Run Locally
\`\`\`bash
git clone https://github.com/user/project
cd project
npm install
npm run dev
\`\`\`

## 📝 Environment Variables
\`\`\`env
DATABASE_URL=
API_KEY=
\`\`\`
\`\`\`

## Tips

\`\`\`
✅ Quality > Quantity (3-5 solid > 10 medioker)
✅ Live demo WAJIB (deploy di Vercel/Netlify)
✅ README jelas (screenshot, cara setup)
✅ Clean code (consistent formatting, comments)
✅ Responsive (mobile-friendly)
✅ Loading/error states (production-ready)
✅ Dark mode (bonus point)
\`\`\`
  `,

  quiz: [
    { question: "Project portfolio: todo app?", options: ["Ya", "Tidak (terlalu basic, tidak standout)", "Boleh", "Wajib"], correctAnswer: 1 },
    { question: "Live demo?", options: ["Optional", "WAJIB (recruiter coba langsung)", "Hanya kode", "PDF"], correctAnswer: 1 }
  ],

  codeExamples: []
};