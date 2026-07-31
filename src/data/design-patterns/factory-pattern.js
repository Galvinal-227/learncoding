export const chapter = {
  slug: "design-patterns-factory-pattern",
  title: "Factory & Abstract Factory",
  description: "Factory Method dan Abstract Factory untuk membuat object tanpa specify concrete class.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["design-patterns-singleton-pattern"],
  tags: ["design-patterns", "factory", "abstract-factory", "creation"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Factory Method

**Satu method, banyak tipe object.** Subclass memutuskan class mana yang diinstansiasi.

\`\`\`javascript
// Creator
class Logistics {
    createTransport() {
        throw new Error('createTransport() must be implemented');
    }
    
    planDelivery() {
        const transport = this.createTransport();
        return transport.deliver();
    }
}

// Concrete Creators
class RoadLogistics extends Logistics {
    createTransport() { return new Truck(); }
}
class SeaLogistics extends Logistics {
    createTransport() { return new Ship(); }
}

// Products
class Truck {
    deliver() { return 'Delivering by road'; }
}
class Ship {
    deliver() { return 'Delivering by sea'; }
}

const road = new RoadLogistics();
console.log(road.planDelivery()); // Delivering by road
\`\`\`

## Simple Factory (JavaScript Style)

\`\`\`javascript
// Factory function
function createNotification(type) {
    const types = {
        email: (msg) => ({ send: () => \`Email: \${msg}\` }),
        sms: (msg) => ({ send: () => \`SMS: \${msg}\` }),
        push: (msg) => ({ send: () => \`Push: \${msg}\` })
    };
    
    const creator = types[type];
    if (!creator) throw new Error(\`Unknown type: \${type}\`);
    return creator;
}

const emailNotif = createNotification('email');
emailNotif('Hello').send(); // Email: Hello
\`\`\`

## Abstract Factory

**Factory of factories.** Bikin keluarga object terkait.

\`\`\`javascript
// Abstract Factory
class UIFactory {
    createButton() { throw new Error('Implement'); }
    createInput() { throw new Error('Implement'); }
}

// Concrete Factories
class MaterialUIFactory extends UIFactory {
    createButton() { return { render: () => '<MaterialButton>' }; }
    createInput() { return { render: () => '<MaterialInput>' }; }
}

class BootstrapUIFactory extends UIFactory {
    createButton() { return { render: () => '<Btn class="btn">' }; }
    createInput() { return { render: () => '<input class="form-control">' }; }
}

function getUIFactory(theme) {
    const factories = { material: MaterialUIFactory, bootstrap: BootstrapUIFactory };
    return new (factories[theme])();
}

const factory = getUIFactory('material');
factory.createButton().render(); // <MaterialButton>
\`\`\`
  `,

  quiz: [
    { question: "Factory method?", options: ["Singleton", "Method yang membuat object (subclass decide class)", "Bangun step by step", "Clone object"], correctAnswer: 1 },
    { question: "Abstract Factory?", options: ["Satu factory", "Factory of factories (keluarga object terkait)", "Simple function", "Singleton"], correctAnswer: 1 }
  ],

  codeExamples: []
};