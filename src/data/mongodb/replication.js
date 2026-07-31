export const chapter = {
  slug: "mongodb-replication",
  title: "Replication",
  description: "High availability dengan Replica Set: primary, secondary, dan failover otomatis.",
  icon: "SiMongodb",
  color: "#47A248",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["mongodb-crud"],
  tags: ["mongodb", "replication", "replica-set", "high-availability"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Replication?

Replica Set = **multiple copies** dari data di node yang berbeda. Jika primary down → secondary otomatis jadi primary (failover).

## Replica Set Architecture

\`\`\`
┌──────────────┐
│   PRIMARY    │  ← Write + Read
│   (Active)   │
└──────────────┘
       │
       │ Replicate (Oplog)
       ▼
┌──────────────┐  ┌──────────────┐
│  SECONDARY   │  │  SECONDARY   │
│  (Passive)   │  │  (Passive)   │
└──────────────┘  └──────────────┘
Read only       Read only + can vote

┌──────────────┐
│   ARBITER    │  ← Vote only, no data
│  (Tiebreaker)│
└──────────────┘
\`\`\`

## Setup Replica Set (Local/Dev)

\`\`\`bash
# Start 3 mongod instances (different ports)
mongod --replSet rs0 --port 27017 --dbpath /data/rs0-0
mongod --replSet rs0 --port 27018 --dbpath /data/rs0-1
mongod --replSet rs0 --port 27019 --dbpath /data/rs0-2
\`\`\`

\`\`\`javascript
// Connect to one node & initiate
rs.initiate({
    _id: 'rs0',
    members: [
        { _id: 0, host: 'localhost:27017', priority: 2 },
        { _id: 1, host: 'localhost:27018', priority: 1 },
        { _id: 2, host: 'localhost:27019', priority: 1 }
    ]
});

// Check status
rs.status();
rs.conf();
\`\`\`

## Connection String (Replica Set)

\`\`\`javascript
const URI = 'mongodb://localhost:27017,localhost:27018,localhost:27019/myapp?replicaSet=rs0';
await mongoose.connect(URI);
\`\`\`

## Write Concern

\`\`\`javascript
// Tunggu write di-ack oleh berapa node
await users.insertOne(data, {
    writeConcern: { w: 'majority', wtimeout: 5000 }
});

// w: 0 → No ack (fastest, least safe)
// w: 1 → Ack from primary (default)
// w: 'majority' → Ack from majority nodes (recommended)
\`\`\`

## Read Preference

\`\`\`javascript
// Dari mana membaca data
await users.find().readPref('primary');            // Default
await users.find().readPref('primaryPreferred');   // Primary if available
await users.find().readPref('secondary');          // Only secondary
await users.find().readPref('secondaryPreferred'); // Secondary first
await users.find().readPref('nearest');            // Lowest latency
\`\`\`

## Oplog

Oplog = **operation log**. Secondary sync dengan membaca oplog primary.

\`\`\`javascript
// Cek oplog
use local
db.oplog.rs.find().sort({ $natural: -1 }).limit(1)

// Oplog size (default: 5% free disk)
db.oplog.rs.stats()
\`\`\`
  `,

  quiz: [
    { question: "Replica Set?", options: ["Backup", "Multiple copies + auto-failover", "Sharding", "Index"], correctAnswer: 1 },
    { question: "Write concern 'majority'?", options: ["Primary ack", "Ack dari mayoritas node (safe)", "No ack", "All nodes"], correctAnswer: 1 }
  ],

  codeExamples: []
};