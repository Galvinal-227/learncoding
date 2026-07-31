export const chapter = {
  slug: "design-patterns-creational-patterns",
  title: "Creational Patterns",
  description: "5 patterns untuk membuat object: Singleton, Factory, Builder, Prototype, Abstract Factory.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["design-patterns-solid-principles"],
  tags: ["design-patterns", "creational", "factory", "singleton", "builder"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Creational Patterns

Mengatur **cara membuat object** dengan cara yang fleksibel dan terkontrol.

## 1. Singleton

**Satu instance untuk seluruh aplikasi.**

\`\`\`javascript
class Database {
    static #instance = null;
    
    constructor() {
        if (Database.#instance) {
            return Database.#instance;
        }
        this.connection = this.connect();
        Database.#instance = this;
    }
    
    connect() {
        console.log('Connecting to DB...');
        return { query: () => console.log('Query executed') };
    }
    
    static getInstance() {
        if (!Database.#instance) {
            Database.#instance = new Database();
        }
        return Database.#instance;
    }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true - same instance!
\`\`\`

### Di JavaScript: Module Singleton
\`\`\`javascript
// database.js - Module adalah singleton otomatis!
let instance = null;
export function getDatabase() {
    if (!instance) instance = connect();
    return instance;
}
\`\`\`

## 2. Factory Pattern

**Buat object tanpa specify class-nya.**

\`\`\`javascript
class UserFactory {
    static createUser(type, data) {
        switch (type) {
            case 'admin':
                return new Admin(data);
            case 'customer':
                return new Customer(data);
            case 'guest':
                return new Guest(data);
            default:
                throw new Error('Unknown user type');
        }
    }
}

const admin = UserFactory.createUser('admin', { name: 'Budi' });
const customer = UserFactory.createUser('customer', { name: 'Siti' });
\`\`\`

### Factory dengan Registry
\`\`\`javascript
class PaymentFactory {
    static #registry = new Map();
    
    static register(type, processorClass) {
        this.#registry.set(type, processorClass);
    }
    
    static create(type, config) {
        const Processor = this.#registry.get(type);
        if (!Processor) throw new Error(\`Unknown payment: \${type}\`);
        return new Processor(config);
    }
}

PaymentFactory.register('credit_card', CreditCardProcessor);
PaymentFactory.register('gopay', GopayProcessor);
\`\`\`

## 3. Builder Pattern

**Bangun object kompleks step by step.**

\`\`\`javascript
class QueryBuilder {
    #query = { select: [], from: '', where: [], orderBy: '', limit: 0 };
    
    select(...fields) { this.#query.select = fields; return this; }
    from(table) { this.#query.from = table; return this; }
    where(condition) { this.#query.where.push(condition); return this; }
    orderBy(field) { this.#query.orderBy = field; return this; }
    limit(n) { this.#query.limit = n; return this; }
    
    build() {
        let sql = \`SELECT \${this.#query.select.join(', ')} FROM \${this.#query.from}\`;
        if (this.#query.where.length) sql += \` WHERE \${this.#query.where.join(' AND ')}\`;
        if (this.#query.orderBy) sql += \` ORDER BY \${this.#query.orderBy}\`;
        if (this.#query.limit) sql += \` LIMIT \${this.#query.limit}\`;
        return sql;
    }
}

const query = new QueryBuilder()
    .select('name', 'email')
    .from('users')
    .where('age > 18')
    .orderBy('name')
    .limit(10)
    .build();
// SELECT name, email FROM users WHERE age > 18 ORDER BY name LIMIT 10
\`\`\`

## 4. Prototype Pattern

**Clone object yang sudah ada.**

\`\`\`javascript
const userPrototype = {
    greet() { return \`Hi, I'm \${this.name}\`; },
    clone(data) { return Object.assign(Object.create(this), data); }
};

const user1 = userPrototype.clone({ name: 'Budi', age: 25 });
const user2 = userPrototype.clone({ name: 'Siti', age: 23 });

console.log(user1.greet()); // Hi, I'm Budi
\`\`\`
  `,

  quiz: [
    { question: "Singleton pattern?", options: ["Banyak instance", "Satu instance untuk seluruh app", "Clone object", "Buat object tanpa class"], correctAnswer: 1 },
    { question: "Factory pattern?", options: ["Satu instance", "Buat object tanpa specify concrete class", "Bangun step by step", "Clone object"], correctAnswer: 1 },
    { question: "Builder pattern untuk?", options: ["Object sederhana", "Object kompleks step by step", "Singleton", "Clone"], correctAnswer: 1 }
  ],

  codeExamples: []
};