export const chapter = {
  slug: "design-patterns-behavioral-patterns",
  title: "Behavioral Patterns",
  description: "Strategy, Command, Iterator, State, dan Template Method patterns.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["design-patterns-structural-patterns"],
  tags: ["design-patterns", "behavioral", "strategy", "command", "state"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Behavioral Patterns

Mengatur **komunikasi dan interaksi** antar object.

## 1. Strategy Pattern

**Pilih algoritma di runtime.**

\`\`\`javascript
// Strategy interfaces
class PaymentStrategy { pay(amount) { throw new Error('Implement'); } }

// Concrete strategies
class CreditCardStrategy extends PaymentStrategy {
    pay(amount) { return \`Paid \${amount} with Credit Card\`; }
}
class GopayStrategy extends PaymentStrategy {
    pay(amount) { return \`Paid \${amount} with GoPay\`; }
}
class BankTransferStrategy extends PaymentStrategy {
    pay(amount) { return \`Paid \${amount} with Bank Transfer\`; }
}

// Context
class PaymentContext {
    constructor(strategy) { this.strategy = strategy; }
    setStrategy(strategy) { this.strategy = strategy; }
    executePayment(amount) { return this.strategy.pay(amount); }
}

const payment = new PaymentContext(new CreditCardStrategy());
console.log(payment.executePayment(100000)); // Credit Card

payment.setStrategy(new GopayStrategy());
console.log(payment.executePayment(50000));  // GoPay
\`\`\`

## 2. Command Pattern

**Enkapsulasi request sebagai object.**

\`\`\`javascript
class Command {
    execute() { throw new Error('Implement'); }
    undo() { throw new Error('Implement'); }
}

class AddTextCommand extends Command {
    constructor(editor, text) { super(); this.editor = editor; this.text = text; }
    execute() { this.editor.addText(this.text); }
    undo() { this.editor.removeText(this.text); }
}

class Editor {
    #content = '';
    #history = [];
    
    executeCommand(command) {
        command.execute();
        this.#history.push(command);
    }
    
    undo() {
        const command = this.#history.pop();
        if (command) command.undo();
    }
    
    addText(text) { this.#content += text; }
    removeText(text) { this.#content = this.#content.slice(0, -text.length); }
    getContent() { return this.#content; }
}

const editor = new Editor();
editor.executeCommand(new AddTextCommand(editor, 'Hello '));
editor.executeCommand(new AddTextCommand(editor, 'World'));
console.log(editor.getContent()); // Hello World
editor.undo();
console.log(editor.getContent()); // Hello 
\`\`\`

## 3. State Pattern

**Object berubah behavior saat state berubah.**

\`\`\`javascript
class State { handle(context) { throw new Error('Implement'); } }

class DraftState extends State {
    handle(context) {
        console.log('Draft → Published');
        context.setState(new PublishedState());
    }
}

class PublishedState extends State {
    handle(context) {
        console.log('Published → Archived');
        context.setState(new ArchivedState());
    }
}

class ArchivedState extends State {
    handle(context) { console.log('Archived (final state)'); }
}

class Document {
    constructor() { this.state = new DraftState(); }
    setState(state) { this.state = state; }
    publish() { this.state.handle(this); }
}

const doc = new Document();
doc.publish(); // Draft → Published
doc.publish(); // Published → Archived
doc.publish(); // Archived (final state)
\`\`\`

## 4. Iterator Pattern

**Akses elemen koleksi secara sequential tanpa expose struktur internal.**

\`\`\`javascript
class CustomCollection {
    constructor(items) { this.items = items; }
    
    [Symbol.iterator]() {
        let index = 0;
        const items = this.items;
        return {
            next() {
                if (index < items.length) return { value: items[index++], done: false };
                return { value: undefined, done: true };
            }
        };
    }
    
    filter(predicate) {
        const result = [];
        for (const item of this) if (predicate(item)) result.push(item);
        return new CustomCollection(result);
    }
}

const collection = new CustomCollection([1, 2, 3, 4, 5]);
for (const item of collection) console.log(item); // 1,2,3,4,5
\`\`\`

## 5. Template Method Pattern

**Definisikan skeleton algoritma, subclass implement detail.**

\`\`\`javascript
class DataProcessor {
    process() {
        this.loadData();
        this.parseData();
        this.validateData();
        this.saveData();
    }
    
    loadData() { throw new Error('Implement loadData()'); }
    parseData() { throw new Error('Implement parseData()'); }
    validateData() { console.log('Validating...'); }
    saveData() { console.log('Saving...'); }
}

class CSVProcessor extends DataProcessor {
    loadData() { console.log('Loading CSV...'); }
    parseData() { console.log('Parsing CSV...'); }
}

class JSONProcessor extends DataProcessor {
    loadData() { console.log('Loading JSON...'); }
    parseData() { console.log('Parsing JSON...'); }
    validateData() { console.log('Validating JSON schema...'); }
}

new CSVProcessor().process();
new JSONProcessor().process();
\`\`\`
  `,

  quiz: [
    { question: "Strategy pattern?", options: ["Satu algoritma", "Pilih algoritma di runtime (interchangeable)", "Enkapsulasi command", "State machine"], correctAnswer: 1 },
    { question: "Command pattern?", options: ["Command line", "Enkapsulasi request sebagai object (undo support)", "Execute script", "CLI tool"], correctAnswer: 1 },
    { question: "State pattern?", options: ["Stateless", "Object ubah behavior saat state berubah", "Global state", "React state"], correctAnswer: 1 }
  ],

  codeExamples: []
};