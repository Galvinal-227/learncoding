export const chapter = {
  slug: "design-patterns-module-pattern",
  title: "Module & Revealing Module",
  description: "Module pattern untuk enkapsulasi dan private data di JavaScript.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["design-patterns-introduction"],
  tags: ["design-patterns", "module", "encapsulation", "iife"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Module Pattern

Menggunakan **closure** untuk membuat **private variables & methods**.

## Basic Module (IIFE)

\`\`\`javascript
const UserModule = (function() {
    // Private
    const users = [];
    
    function validate(user) {
        return user.name && user.email;
    }
    
    // Public (return)
    return {
        addUser(user) {
            if (validate(user)) {
                users.push(user);
                console.log('User added');
            }
        },
        getUsers() {
            return [...users]; // Return copy, not reference
        },
        getUserCount() {
            return users.length;
        }
    };
})();

UserModule.addUser({ name: 'Budi', email: 'budi@email.com' });
console.log(UserModule.getUsers()); // [{...}]
// console.log(UserModule.users); // undefined (private!)
\`\`\`

## Revealing Module Pattern

\`\`\`javascript
const ShoppingCart = (function() {
    const items = [];
    const TAX_RATE = 0.11;
    
    function calculateTax(price) {
        return price * TAX_RATE;
    }
    
    function calculateTotal() {
        return items.reduce((sum, item) => sum + item.price, 0);
    }
    
    function addItem(item) {
        items.push(item);
    }
    
    function getTotal() {
        return calculateTotal() + calculateTax(calculateTotal());
    }
    
    // Reveal public API
    return {
        add: addItem,
        total: getTotal,
        count: () => items.length
    };
})();
\`\`\`

## ES6 Modules (Modern Way)

\`\`\`javascript
// user.js
const users = []; // Module-scoped = private!

export function addUser(user) {
    users.push(user);
}

export function getUsers() {
    return [...users];
}

// main.js
import { addUser, getUsers } from './user.js';
// Tidak bisa akses 'users' langsung!
\`\`\`
  `,

  quiz: [
    { question: "Module pattern pakai?", options: ["Class", "Closure/IIFE", "Prototype", "Generator"], correctAnswer: 1 },
    { question: "ES6 module: variabel di file?", options: ["Global", "Module-scoped (private by default)", "Window", "Tidak bisa diakses"], correctAnswer: 1 }
  ],

  codeExamples: []
};