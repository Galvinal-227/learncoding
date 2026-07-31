export const chapter = {
  slug: "clean-code-naming",
  title: "Naming (Penamaan)",
  description: "Aturan penamaan variabel, fungsi, class yang jelas dan bermakna.",
  icon: "SiCleanode",
  color: "#3178C6",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["clean-code-introduction"],
  tags: ["clean-code", "naming", "variabel", "fungsi"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Aturan Penamaan

### 1. Gunakan Nama yang Menjelaskan Maksud
\`\`\`javascript
// ❌ Buruk
const d = new Date();
const a = users.filter(u => u.s === 'active');

// ✅ Baik
const currentDate = new Date();
const activeUsers = users.filter(user => user.status === 'active');
\`\`\`

### 2. Hindari Disinformation
\`\`\`javascript
// ❌ Buruk: accountList padahal bukan List (Array)
const accountList = { id: 1, name: 'Budi' };

// ✅ Baik
const account = { id: 1, name: 'Budi' };
const accounts = [{ id: 1 }, { id: 2 }];
\`\`\`

### 3. Buat Perbedaan yang Jelas
\`\`\`javascript
// ❌ Buruk: mirip, bikin bingung
const userData = {};
const userInfo = {};
const userDetails = {};

// ✅ Baik: perbedaan jelas
const userProfile = {};
const userPreferences = {};
const userSettings = {};
\`\`\`

### 4. Gunakan Nama yang Bisa Dicari
\`\`\`javascript
// ❌ Buruk: susah dicari dengan grep
const x = 86400000;

// ✅ Baik
const MILLISECONDS_PER_DAY = 86400000;
\`\`\`

### 5. Hindari Encoding
\`\`\`javascript
// ❌ Buruk: Hungarian notation (jadul)
const strName = 'Budi';
const iAge = 25;

// ✅ Baik
const name = 'Budi';
const age = 25;
\`\`\`

## Konvensi per Kategori

| Kategori | Konvensi | Contoh |
|----------|----------|--------|
| **Variabel** | camelCase | \`userName\`, \`totalPrice\` |
| **Konstanta** | UPPER_SNAKE | \`MAX_RETRY\`, \`API_URL\` |
| **Fungsi** | camelCase, kata kerja | \`getUser()\`, \`calculateTotal()\` |
| **Class** | PascalCase | \`UserService\`, \`OrderController\` |
| **Boolean** | is/has/can | \`isActive\`, \`hasPermission\` |
| **Array** | Jamak | \`users\`, \`productList\` |
| **Private** | _prefix | \`_privateVar\` (opsional) |
  `,

  quiz: [
    { question: "Boolean variable naming?", options: ["active", "isActive, hasPermission", "boolean_active", "bActive"], correctAnswer: 1 },
    { question: "Konstanta naming convention?", options: ["camelCase", "UPPER_SNAKE_CASE", "PascalCase", "kebab-case"], correctAnswer: 1 },
    { question: "Kenapa hindari Hungarian notation?", options: ["Sulit dibaca", "Tipe data bisa berubah, nama tidak update", "Tidak didukung", "Wajib dihapus"], correctAnswer: 1 }
  ],

  codeExamples: []
};