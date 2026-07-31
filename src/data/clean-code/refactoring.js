export const chapter = {
  slug: "clean-code-refactoring",
  title: "Refactoring",
  description: "Teknik refactoring untuk memperbaiki kode tanpa mengubah fungsionalitas.",
  icon: "SiCleanode",
  color: "#3178C6",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["clean-code-functions"],
  tags: ["clean-code", "refactoring", "improve", "legacy"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Refactoring?

Mengubah **struktur internal** kode tanpa mengubah **perilaku eksternal**. Tujuan: meningkatkan readability, mengurangi kompleksitas.

## Kapan Refactor?

- 🐛 Sebelum fix bug (pahami kode dulu)
- ➕ Sebelum tambah fitur (siapkan fondasi)
- 📋 Code review (improve sebelum merge)
- 🧹 Saat lihat kode kotor (Boy Scout Rule)
- ⏰ Jangan refactor deadline mepet!

## Teknik Refactoring

### 1. Extract Function
\`\`\`javascript
// Before
function printInvoice(order) {
    console.log('====== INVOICE ======');
    console.log(\`Date: \${new Date()}\`);
    let total = 0;
    for (const item of order.items) { total += item.price; }
    console.log(\`Total: \${total}\`);
    console.log('====================');
}

// After
function printInvoice(order) {
    printHeader();
    const total = calculateTotal(order.items);
    printTotal(total);
    printFooter();
}
\`\`\`

### 2. Replace Magic Number
\`\`\`javascript
// Before
if (user.age >= 17) { }
if (attempts > 5) { }

// After
const MINIMUM_AGE = 17;
const MAX_LOGIN_ATTEMPTS = 5;
if (user.age >= MINIMUM_AGE) { }
if (attempts > MAX_LOGIN_ATTEMPTS) { }
\`\`\`

### 3. Simplify Conditional
\`\`\`javascript
// Before
if (user.role === 'admin' || user.role === 'superadmin') { }

// After
const ADMIN_ROLES = ['admin', 'superadmin'];
if (ADMIN_ROLES.includes(user.role)) { }

// Before - nested ternary
const price = isMember ? (isPremium ? 50 : 80) : 100;

// After
function getPrice(isMember, isPremium) {
    if (!isMember) return 100;
    return isPremium ? 50 : 80;
}
\`\`\`

### 4. Replace Loop with Pipeline
\`\`\`javascript
// Before
const activeNames = [];
for (const user of users) {
    if (user.isActive) {
        activeNames.push(user.name.toUpperCase());
    }
}

// After
const activeNames = users
    .filter(user => user.isActive)
    .map(user => user.name.toUpperCase());
\`\`\`

## Refactoring Checklist

\`\`\`
✅ Ada test sebelum refactor
✅ Satu perubahan per commit
✅ Tidak mengubah behavior
✅ Code review setelah refactor
✅ Commit message jelas: "refactor: extract validateUser"
\`\`\`
  `,

  quiz: [
    { question: "Refactoring adalah?", options: ["Ubah fitur", "Perbaiki struktur internal tanpa ubah behavior", "Rewrite total", "Bug fixing"], correctAnswer: 1 },
    { question: "Syarat sebelum refactor?", options: ["Izin bos", "Ada test", "Deadline longgar", "Semua benar"], correctAnswer: 1 },
    { question: "Extract Function untuk?", options: ["Hapus fungsi", "Pecah fungsi besar jadi kecil", "Tambah parameter", "Ganti nama file"], correctAnswer: 1 }
  ],

  codeExamples: []
};