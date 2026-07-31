export const chapter = {
  slug: "design-patterns-observer-pattern",
  title: "Observer & Pub/Sub",
  description: "Observer pattern dan Pub/Sub untuk komunikasi antar komponen yang loose coupling.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["design-patterns-introduction"],
  tags: ["design-patterns", "observer", "pub-sub", "event"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Observer Pattern

**Satu subject, banyak observer.** Saat subject berubah, semua observer otomatis di-notify.

## Implementasi

\`\`\`javascript
class Subject {
    #observers = [];
    
    subscribe(observer) {
        this.#observers.push(observer);
        return () => this.unsubscribe(observer); // Return unsubscribe function
    }
    
    unsubscribe(observer) {
        this.#observers = this.#observers.filter(obs => obs !== observer);
    }
    
    notify(data) {
        this.#observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) { this.name = name; }
    update(data) { console.log(\`\${this.name} received: \${data}\`); }
}

const subject = new Subject();
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify('Hello!');
// Observer 1 received: Hello!
// Observer 2 received: Hello!
\`\`\`

## Real-World: React State + Effect

\`\`\`javascript
// useState + useEffect = Observer pattern!
function useObservable(observable) {
    const [value, setValue] = useState(observable.getValue());
    
    useEffect(() => {
        return observable.subscribe(setValue); // Unsubscribe on cleanup
    }, [observable]);
    
    return value;
}
\`\`\`

## Event Emitter (Node.js Style)

\`\`\`javascript
class EventEmitter {
    #events = new Map();
    
    on(event, listener) {
        if (!this.#events.has(event)) this.#events.set(event, []);
        this.#events.get(event).push(listener);
        return this;
    }
    
    emit(event, ...args) {
        const listeners = this.#events.get(event) || [];
        listeners.forEach(listener => listener(...args));
        return this;
    }
    
    off(event, listener) {
        const listeners = this.#events.get(event) || [];
        this.#events.set(event, listeners.filter(l => l !== listener));
        return this;
    }
    
    once(event, listener) {
        const wrapper = (...args) => {
            listener(...args);
            this.off(event, wrapper);
        };
        return this.on(event, wrapper);
    }
}

const bus = new EventEmitter();
bus.on('user:login', (user) => console.log(\`\${user.name} logged in\`));
bus.emit('user:login', { name: 'Budi' });
\`\`\`

## Observer vs Pub/Sub

| | Observer | Pub/Sub |
|---|----------|---------|
| Kopling | Subject tahu observer | Publisher & subscriber tidak tahu satu sama lain |
| Perantara | Tidak ada | Ada event bus/broker |
| Contoh | Click event listener | Redis Pub/Sub, RabbitMQ |

## Observer di Browser (MutationObserver, IntersectionObserver)

\`\`\`javascript
// IntersectionObserver = Observer pattern!
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Element visible!');
            observer.unobserve(entry.target);
        }
    });
});
observer.observe(document.querySelector('.lazy-image'));
\`\`\`
  `,

  quiz: [
    { question: "Observer pattern?", options: ["Satu observer, banyak subject", "Satu subject, banyak observer di-notify", "Pub/Sub via broker", "Singleton"], correctAnswer: 1 },
    { question: "Observer vs Pub/Sub?", options: ["Sama", "Observer: subject tahu observer; Pub/Sub: via broker, decoupled", "Pub/Sub deprecated", "Observer lebih cepat"], correctAnswer: 1 }
  ],

  codeExamples: []
};