export const chapter = {
  slug: "clean-code-testing",
  title: "Testing & TDD",
  description: "Tulis test yang bersih dan pahami Test-Driven Development.",
  icon: "SiCleanode",
  color: "#3178C6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["clean-code-error-handling"],
  tags: ["clean-code", "testing", "tdd", "unit-test"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## F.I.R.S.T Principles

| Prinsip | Arti |
|---------|------|
| **F**ast | Test harus cepat (ms, bukan detik) |
| **I**ndependent | Test tidak bergantung satu sama lain |
| **R**epeatable | Hasil sama di mana pun |
| **S**elf-validating | Harus jelas PASS/FAIL |
| **T**imely | Tulis sebelum/saat development |

## Struktur Test (AAA Pattern)

\`\`\`javascript
describe('calculateDiscount', () => {
    it('should return discounted price', () => {
        // Arrange - siapkan data
        const price = 100000;
        const discount = 10;
        
        // Act - jalankan fungsi
        const result = calculateDiscount(price, discount);
        
        // Assert - cek hasil
        expect(result).toBe(90000);
    });
});
\`\`\`

## Satu Assert Per Test (Ideal)

\`\`\`javascript
// ❌ Banyak assert, tidak jelas yang mana gagal
it('should validate user', () => {
    const user = { name: 'Budi', email: 'budi@email.com', age: 25 };
    expect(user.name).toBeTruthy();
    expect(user.email).toContain('@');
    expect(user.age).toBeGreaterThan(17);
});

// ✅ Pisahkan per konsep
it('should require name', () => {
    expect(() => validateUser({})).toThrow('Name is required');
});
it('should require valid email', () => {
    expect(() => validateUser({ name: 'B', email: 'invalid' })).toThrow('Invalid email');
});
\`\`\`

## TDD: Red → Green → Refactor

\`\`\`
1. RED   - Tulis test yang FAIL (karena belum ada kode)
2. GREEN - Tulis kode minimum agar test PASS
3. REFACTOR - Perbaiki kode tanpa ubah behavior
\`\`\`

## Test Coverage yang Baik

\`\`\`
✅ Unit test: 80%+ coverage
✅ Integration test: API endpoints
✅ E2E test: Critical user flows
❌ 100% coverage tidak realistis (fokus ke business logic)
\`\`\`
  `,

  quiz: [
    { question: "AAA pattern?", options: ["Act, Assert, Ask", "Arrange, Act, Assert", "Apply, Accept, Adapt", "Add, Append, Assert"], correctAnswer: 1 },
    { question: "TDD steps?", options: ["Code→Test→Deploy", "Red→Green→Refactor", "Write→Run→Fix", "Build→Test→Ship"], correctAnswer: 1 }
  ],

  codeExamples: []
};