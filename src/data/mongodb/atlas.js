export const chapter = {
  slug: "mongodb-atlas",
  title: "MongoDB Atlas (Cloud)",
  description: "Setup MongoDB di cloud dengan Atlas: cluster, network, connection.",
  icon: "SiMongodb",
  color: "#47A248",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["mongodb-introduction"],
  tags: ["mongodb", "atlas", "cloud", "database"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## MongoDB Atlas

Layanan **MongoDB cloud** (Database-as-a-Service). Gratis 512MB cluster.

## Setup

\`\`\`
1. Buka mongodb.com/atlas → Sign up
2. Create cluster (FREE: M0 Sandbox)
3. Pilih provider: AWS/GCP/Azure
4. Pilih region terdekat: Singapore (asia-southeast1)
5. Create cluster (tunggu 1-3 menit)
\`\`\`

## Connect

### 1. Network Access
\`\`\`
Security → Network Access → Add IP Address
- Allow ALL: 0.0.0.0/0 (development)
- Specific IP: your-ip/32 (production)
\`\`\`

### 2. Database User
\`\`\`
Security → Database Access → Add User
- Username: admin
- Password: (generate secure)
- Role: Atlas Admin
\`\`\`

### 3. Connection String
\`\`\`javascript
import mongoose from 'mongoose';

const URI = 'mongodb+srv://admin:<password>@cluster0.xxxxx.mongodb.net/myapp?retryWrites=true&w=majority';

await mongoose.connect(URI);
\`\`\`

## Environment Variables

\`\`\`bash
# .env
MONGODB_URI=mongodb+srv://admin:password@cluster.mongodb.net/myapp
\`\`\`

\`\`\`javascript
await mongoose.connect(process.env.MONGODB_URI);
\`\`\`

## Atlas Features

| Feature | Free Tier |
|---------|-----------|
| Storage | 512 MB |
| RAM | Shared |
| Backups | No (M2+) |
| Monitoring | Basic |
| Charts | Free |
| Realm | Serverless functions |
  `,

  quiz: [
    { question: "Atlas free tier?", options: ["10GB", "512MB (M0 Sandbox)", "5GB", "Unlimited"], correctAnswer: 1 },
    { question: "Connection string starts with?", options: ["mongodb://", "mongodb+srv://", "http://", "atlas://"], correctAnswer: 1 }
  ],

  codeExamples: []
};