export const chapter = {
  slug: "clean-code-functions",
  title: "Functions",
  description: "Tulis fungsi yang kecil, fokus, dan mudah di-test.",
  icon: "SiCleanode",
  color: "#3178C6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["clean-code-naming"],
  tags: ["clean-code", "functions", "single-responsibility"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Aturan Fungsi Bersih

### 1. Kecil! (Max 20-30 baris)
\`\`\`javascript
// ❌ Fungsi 200 baris melakukan segalanya
function processOrder(order) { /* ... 200 lines ... */ }

// ✅ Extract ke fungsi-fungsi kecil
function processOrder(order) {
    validateOrder(order);
    const total = calculateTotal(order);
    const payment = chargePayment(order, total);
    sendConfirmation(order, payment);
}
\`\`\`

### 2. Satu Fungsi, Satu Tugas (SRP)
\`\`\`javascript
// ❌ Fungsi melakukan 3 hal
function handleUserData(data) {
    const validated = validateUser(data);
    const saved = await saveToDatabase(validated);
    await sendWelcomeEmail(saved);
    return saved;
}

// ✅ Pisahkan
function registerUser(data) {
    const validated = validateUser(data);
    const user = await createUser(validated);
    await notifyUser(user);
    return user;
}
\`\`\`

### 3. Parameter: Maksimal 3
\`\`\`javascript
// ❌ Terlalu banyak parameter
function createUser(name, email, age, city, country, zipCode) { }

// ✅ Gunakan object
function createUser({ name, email, address }) { }

createUser({
    name: 'Budi',
    email: 'budi@email.com',
    address: { city: 'Jakarta', country: 'Indonesia', zipCode: '12345' }
});
\`\`\`

### 4. Hindari Side Effects
\`\`\`javascript
// ❌ Fungsi mengubah variabel luar
let total = 0;
function addToTotal(amount) { total += amount; }

// ✅ Pure function - return value baru
function addToTotal(currentTotal, amount) {
    return currentTotal + amount;
}
\`\`\`

### 5. Early Return (Guard Clauses)
\`\`\`javascript
// ❌ Nested if
function getDiscount(user) {
    if (user) {
        if (user.isPremium) {
            if (user.years > 5) return 20;
            return 10;
        }
        return 0;
    }
    return 0;
}

// ✅ Early return
function getDiscount(user) {
    if (!user) return 0;
    if (!user.isPremium) return 0;
    if (user.years > 5) return 20;
    return 10;
}
\`\`\`
  `,

  quiz: [
    { question: "Single Responsibility Principle?", options: ["Satu file, satu fungsi", "Satu fungsi, satu tugas", "Satu class, satu method", "Satu project, satu developer"], correctAnswer: 1 },
    { question: "Maksimal parameter fungsi?", options: ["Tidak terbatas", "1-3 parameter", "5 parameter", "10 parameter"], correctAnswer: 1 },
    { question: "Early return untuk?", options: ["Cepat pulang", "Kurangi nesting if", "Return pertama di fungsi", "Hindari return"], correctAnswer: 1 }
  ],

  codeExamples: []
};