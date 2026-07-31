export const chapter = {
  slug: "design-patterns-structural-patterns",
  title: "Structural Patterns",
  description: "Adapter, Decorator, Facade, Proxy, dan Composite patterns untuk struktur class/object.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["design-patterns-creational-patterns"],
  tags: ["design-patterns", "structural", "adapter", "decorator", "facade"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Structural Patterns

Mengatur **bagaimana class dan object disusun** menjadi struktur yang lebih besar.

## 1. Adapter Pattern

**Membuat dua interface yang tidak kompatibel bisa bekerja sama.**

\`\`\`javascript
// Old API
class OldPaymentAPI {
    processPayment(amount, currency) {
        return \`Paid \${amount} \${currency}\`;
    }
}

// New interface yang diharapkan
class NewPaymentGateway {
    charge(data) { throw new Error('Implement'); }
}

// Adapter
class PaymentAdapter extends NewPaymentGateway {
    constructor() {
        super();
        this.oldAPI = new OldPaymentAPI();
    }
    
    charge(data) {
        return this.oldAPI.processPayment(data.total, data.currency);
    }
}

const gateway = new PaymentAdapter();
gateway.charge({ total: 100, currency: 'IDR' }); // Paid 100 IDR
\`\`\`

## 2. Decorator Pattern

**Menambah behavior ke object secara dinamis.**

\`\`\`javascript
class Coffee {
    cost() { return 5; }
    description() { return 'Coffee'; }
}

// Decorators
class MilkDecorator {
    constructor(coffee) { this.coffee = coffee; }
    cost() { return this.coffee.cost() + 2; }
    description() { return this.coffee.description() + ', Milk'; }
}

class SugarDecorator {
    constructor(coffee) { this.coffee = coffee; }
    cost() { return this.coffee.cost() + 0.5; }
    description() { return this.coffee.description() + ', Sugar'; }
}

let order = new Coffee();
order = new MilkDecorator(order);
order = new SugarDecorator(order);
console.log(order.description()); // Coffee, Milk, Sugar
console.log(order.cost()); // 7.5
\`\`\`

## 3. Facade Pattern

**Interface sederhana untuk sistem yang kompleks.**

\`\`\`javascript
// Kompleks
class CPU { start() { console.log('CPU start'); } }
class Memory { load() { console.log('Memory load'); } }
class HardDrive { read() { console.log('HD read'); } }

// Facade
class ComputerFacade {
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hd = new HardDrive();
    }
    
    start() {
        this.cpu.start();
        this.memory.load();
        this.hd.read();
        console.log('Computer ready!');
    }
}

const computer = new ComputerFacade();
computer.start(); // Satu panggilan sederhana!
\`\`\`

## 4. Proxy Pattern

**Placeholder yang mengontrol akses ke object lain.**

\`\`\`javascript
class Image {
    constructor(filename) {
        this.filename = filename;
        console.log(\`Loading \${filename}...\`);
    }
    display() { console.log(\`Displaying \${this.filename}\`); }
}

class ImageProxy {
    constructor(filename) {
        this.filename = filename;
        this.image = null;
    }
    display() {
        if (!this.image) this.image = new Image(this.filename); // Lazy load!
        this.image.display();
    }
}

const proxy = new ImageProxy('photo.jpg');
// Belum loading...
proxy.display(); // Baru loading + display
proxy.display(); // Langsung display (sudah di-cache)
\`\`\`

## 5. Composite Pattern

**Tree structure: treat individual + group of objects uniformly.**

\`\`\`javascript
class FileSystemComponent {
    getName() { throw new Error('Implement'); }
    getSize() { throw new Error('Implement'); }
}

class File extends FileSystemComponent {
    constructor(name, size) { super(); this.name = name; this.size = size; }
    getName() { return this.name; }
    getSize() { return this.size; }
}

class Folder extends FileSystemComponent {
    constructor(name) { super(); this.name = name; this.children = []; }
    add(component) { this.children.push(component); }
    getName() { return this.name; }
    getSize() { return this.children.reduce((sum, child) => sum + child.getSize(), 0); }
}

const root = new Folder('root');
root.add(new File('index.js', 100));
const src = new Folder('src');
src.add(new File('app.js', 200));
src.add(new File('utils.js', 150));
root.add(src);
console.log(root.getSize()); // 450
\`\`\`
  `,

  quiz: [
    { question: "Adapter pattern?", options: ["Menambah behavior", "Interface tidak kompatibel → kompatibel", "Sederhanakan sistem", "Tree structure"], correctAnswer: 1 },
    { question: "Decorator pattern?", options: ["Adapt interface", "Tambah behavior dinamis (wrap object)", "Sederhanakan", "Proxy akses"], correctAnswer: 1 },
    { question: "Facade pattern?", options: ["Complex UI", "Interface sederhana untuk sistem kompleks", "Decorator", "Adapter"], correctAnswer: 1 }
  ],

  codeExamples: []
};