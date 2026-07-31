export const chapter = {
  slug: "software-architecture-event-sourcing",
  title: "Event Sourcing",
  description: "Pahami Event Sourcing - simpan events bukan current state.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["software-architecture-cqrs"],
  tags: ["architecture", "event-sourcing", "events", "audit"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## What is Event Sourcing?

Instead of storing **current state**, store **all events** that led to that state. State = replay all events.

## Traditional vs Event Sourcing

\`\`\`
Traditional DB:
  User { id: 1, name: "Budi", status: "active" }

Event Store:
  UserCreated { id: 1, name: "Budi" }
  UserNameChanged { id: 1, newName: "Budi Updated" }
  UserActivated { id: 1 }
\`\`\`

## Implementation

\`\`\`typescript
// Events
interface Event {
    type: string;
    data: any;
    timestamp: Date;
}

// Event Store
class EventStore {
    private events: Event[] = [];
    
    async save(aggregateId: string, events: Event[]) {
        this.events.push(...events);
    }
    
    async getEvents(aggregateId: string): Promise<Event[]> {
        return this.events.filter(e => e.data.aggregateId === aggregateId);
    }
}

// Aggregate
class User {
    private name: string;
    private status: string;
    
    static fromEvents(events: Event[]): User {
        const user = new User();
        for (const event of events) {
            user.apply(event);
        }
        return user;
    }
    
    apply(event: Event) {
        switch (event.type) {
            case 'UserCreated': this.name = event.data.name; break;
            case 'UserNameChanged': this.name = event.data.newName; break;
            case 'UserActivated': this.status = 'active'; break;
        }
    }
}
\`\`\`

## Benefits

\`\`\`
✅ Complete audit trail
✅ Time travel (state at any point)
✅ Debug production issues
✅ Rebuild projections
✅ Event replay for testing
\`\`\`
  `,

  quiz: [
    { question: "Event Sourcing?", options: ["Current state", "Store events (history)", "Delete events", "Ignore events"], correctAnswer: 1 },
    { question: "Event replay?", options: ["Delete", "Rebuild state from events", "Ignore", "Cache"], correctAnswer: 1 }
  ],

  codeExamples: []
};