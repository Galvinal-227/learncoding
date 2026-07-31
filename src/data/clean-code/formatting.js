export const chapter = {
  slug: "clean-code-formatting",
  title: "Formatting",
  description: "Aturan formatting kode: indentation, spacing, line length, dan struktur file.",
  icon: "SiCleanode",
  color: "#3178C6",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["clean-code-introduction"],
  tags: ["clean-code", "format", "prettier", "lint"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Formatting Penting?

Formatting yang konsisten = kode yang **mudah di-scan** dan **dibaca cepat** oleh tim.

## Gunakan Tools Otomatis!

\`\`\`bash
npm install --save-dev prettier
\`\`\`

\`\`\`json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
\`\`\`

## Aturan Formatting

### 1. Indentasi Konsisten
\`\`\`javascript
// ✅ 2 spaces (atau 4, yang penting konsisten)
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
}
\`\`\`

### 2. Vertical Spacing (Paragraph)
\`\`\`javascript
// ✅ Group related code dengan blank line
import React from 'react';
import { useRouter } from 'next/router';

function UserProfile({ user }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  
  function handleSave() {
    // save logic
  }
  
  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
\`\`\`

### 3. Line Length
\`\`\`javascript
// ❌ Terlalu panjang (>100 karakter)
const result = await fetch('/api/users').then(r => r.json()).then(data => data.filter(u => u.active));

// ✅ Break menjadi beberapa baris
const result = await fetch('/api/users')
  .then(r => r.json())
  .then(data => data.filter(u => u.active));
\`\`\`

### 4. Consistent Braces
\`\`\`javascript
// ✅ Konsisten (pilih salah satu style)
// Style A: opening brace di akhir baris (JavaScript standard)
if (condition) {
  doSomething();
}

// Style B: opening brace di baris baru (C# style)
if (condition)
{
  doSomething();
}
\`\`\`

## Struktur File

\`\`\`javascript
// 1. Imports (external dulu, lalu internal)
import React from 'react';
import { useRouter } from 'next/router';
import { formatDate } from '@/utils/date';
import UserCard from './UserCard';

// 2. Constants
const MAX_RETRY = 3;

// 3. Types/Interfaces (TypeScript)
interface Props { }

// 4. Component/Function utama
export default function UserPage() { }

// 5. Helper functions
function validateEmail() { }
\`\`\`
  `,

  quiz: [
    { question: "Tool otomatis formatting JavaScript?", options: ["ESLint", "Prettier", "Babel", "Webpack"], correctAnswer: 1 },
    { question: "Line length maksimal yang direkomendasikan?", options: ["60", "80-120", "200", "Tidak terbatas"], correctAnswer: 1 }
  ],

  codeExamples: []
};