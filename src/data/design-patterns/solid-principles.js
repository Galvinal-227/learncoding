export const chapter = {
  slug: "design-patterns-solid-principles",
  title: "SOLID Principles",
  description: "Kuasai 5 prinsip SOLID untuk object-oriented design yang baik.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["design-patterns-introduction"],
  tags: ["design-patterns", "solid", "oop", "principles"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## SOLID Principles

SOLID adalah 5 prinsip design yang membuat kode lebih **maintainable, flexible, dan scalable**.

| Huruf | Prinsip | Arti |
|-------|---------|------|
| **S** | Single Responsibility | Satu class, satu tugas |
| **O** | Open/Closed | Terbuka untuk ekstensi, tertutup untuk modifikasi |
| **L** | Liskov Substitution | Subclass harus bisa menggantikan parent |
| **I** | Interface Segregation | Interface kecil > interface besar |
| **D** | Dependency Inversion | Bergantung ke abstraksi, bukan konkrit |

## S - Single Responsibility Principle

**"A class should have only one reason to change."**

\`\`\`javascript
// ❌ Buruk: Satu class handle semuanya
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    saveToDatabase() { /* ... */ }
    sendEmail() { /* ... */ }
    generateReport() { /* ... */ }
}

// ✅ Baik: Pisahkan tanggung jawab
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
class UserRepository {
    save(user) { /* ... */ }
}
class EmailService {
    sendWelcomeEmail(user) { /* ... */ }
}
\`\`\`

## O - Open/Closed Principle

**"Open for extension, closed for modification."**

\`\`\`javascript
// ❌ Buruk: Harus modifikasi class setiap tambah tipe
class PaymentProcessor {
    process(payment) {
        if (payment.type === 'credit_card') { /* ... */ }
        else if (payment.type === 'gopay') { /* ... */ }
        else if (payment.type === 'ovo') { /* ... */ } // Harus edit class!
    }
}

// ✅ Baik: Extend via inheritance/composition
class PaymentProcessor {
    process(payment) {
        payment.process(); // Polymorphism!
    }
}
class CreditCardPayment { process() { /* ... */ } }
class GopayPayment { process() { /* ... */ } }
class OvoPayment { process() { /* ... */ } } // Tinggal tambah class baru!
\`\`\`

## L - Liskov Substitution Principle

**"Subtypes must be substitutable for their base types."**

\`\`\`javascript
// ❌ Buruk: Square bukan substitusi Rectangle yang benar
class Rectangle {
    setWidth(w) { this.width = w; }
    setHeight(h) { this.height = h; }
    getArea() { return this.width * this.height; }
}
class Square extends Rectangle {
    setWidth(w) { this.width = w; this.height = w; } // Melanggar kontrak!
    setHeight(h) { this.width = h; this.height = h; }
}

// ✅ Baik: Pisahkan, tidak perlu inheritance
class Rectangle {
    constructor(width, height) { this.width = width; this.height = height; }
    getArea() { return this.width * this.height; }
}
class Square {
    constructor(side) { this.side = side; }
    getArea() { return this.side * this.side; }
}
\`\`\`

## I - Interface Segregation Principle

**"No client should be forced to depend on methods it does not use."**

\`\`\`javascript
// ❌ Buruk: Satu interface besar
interface Worker {
    work(): void;
    eat(): void;
    sleep(): void;
}

// ✅ Baik: Interface kecil spesifik
interface Workable { work(): void; }
interface Eatable { eat(): void; }
interface Sleepable { sleep(): void; }

class Human implements Workable, Eatable, Sleepable { }
class Robot implements Workable { } // Robot tidak perlu eat/sleep!
\`\`\`

## D - Dependency Inversion Principle

**"Depend upon abstractions, not concretions."**

\`\`\`javascript
// ❌ Buruk: Bergantung ke implementasi konkrit
class UserService {
    constructor() {
        this.database = new MySQLDatabase(); // Tight coupling!
    }
}

// ✅ Baik: Bergantung ke abstraksi (interface)
class UserService {
    constructor(database) {  // Dependency Injection!
        this.database = database; // Bisa MySQL, PostgreSQL, MongoDB...
    }
}
const service = new UserService(new PostgreSQLDatabase());
\`\`\`
  `,

  quiz: [
    { question: "SRP singkatan?", options: ["Single Responsibility Principle", "Simple Return Protocol", "Solid React Pattern", "Standard Resource Protocol"], correctAnswer: 0 },
    { question: "Open/Closed: 'Closed for...'?", options: ["Extension", "Modification", "Testing", "Deployment"], correctAnswer: 1 },
    { question: "Dependency Inversion: Bergantung ke?", options: ["Concrete class", "Abstraction/Interface", "Database", "Framework"], correctAnswer: 1 }
  ],

  codeExamples: []
};