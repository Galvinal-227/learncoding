export const chapter = {
  slug: "clean-code-introduction",
  title: "Pengenalan Clean Code",
  description: "Pahami kenapa clean code penting dan prinsip dasarnya.",
  icon: "SiCleanode",
  color: "#3178C6",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["clean-code", "best-practices", "readable", "maintainable"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Clean Code?

Clean code adalah kode yang **mudah dibaca, dipahami, dan di-maintain** oleh developer lain (termasuk kamu 6 bulan kemudian).

## Kenapa Clean Code Penting?

- 📖 **Readability** - Code is read 10x more than written
- 🐛 **Less bugs** - Kode bersih = mudah spot error
- 🚀 **Faster development** - Onboarding cepat, refactor mudah
- 👥 **Team productivity** - Semua bisa baca kode semua
- 💰 **Lower cost** - Maintenance 70% dari software cost

## Aturan Emas Clean Code

1. **Kode harus dibaca seperti cerita** - Nama variabel/fungsi jelas
2. **Satu fungsi, satu tanggung jawab** - Single Responsibility
3. **Jangan berkomentar, tulis kode yang menjelaskan dirinya**
4. **DRY** - Don't Repeat Yourself
5. **KISS** - Keep It Simple, Stupid
6. **YAGNI** - You Ain't Gonna Need It

## Contoh: Clean vs Dirty

### ❌ Dirty Code:
\`\`\`javascript
function p(d, t, r) {
    let x = d;
    for (let i = 0; i < t; i++) {
        x = x + (x * r / 100);
    }
    return x;
}
const a = p(1000, 5, 10);
\`\`\`

### ✅ Clean Code:
\`\`\`javascript
function calculateCompoundInterest(principal, years, annualRatePercent) {
    let totalAmount = principal;
    
    for (let year = 0; year < years; year++) {
        const yearlyInterest = totalAmount * (annualRatePercent / 100);
        totalAmount += yearlyInterest;
    }
    
    return totalAmount;
}

const finalAmount = calculateCompoundInterest(1000, 5, 10);
\`\`\`

## Boy Scout Rule

**"Always leave the code better than you found it."**

Setiap kali edit file, perbaiki sedikit: rename variabel, extract function, hapus kode mati.
  `,

  quiz: [
    { question: "DRY singkatan?", options: ["Don't Run Yet", "Don't Repeat Yourself", "Do Repeat Yourself", "Dynamically Render YAML"], correctAnswer: 1 },
    { question: "KISS singkatan?", options: ["Keep It Safe & Sound", "Keep It Simple, Stupid", "Kernel Input System Standard", "Kindly Implement Simple Solutions"], correctAnswer: 1 },
    { question: "Boy Scout Rule?", options: ["Selalu commit", "Leave code better than you found it", "Pakai seragam", "Jangan bug"], correctAnswer: 1 }
  ],

  codeExamples: []
};