export const chapter = {
  slug: "mongodb-sharding",
  title: "Sharding",
  description: "Horizontal scaling dengan Sharding untuk database skala besar.",
  icon: "SiMongodb",
  color: "#47A248",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["mongodb-replication"],
  tags: ["mongodb", "sharding", "scaling", "horizontal"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Sharding?

Sharding = **membagi data** ke multiple servers (shards). Tiap shard adalah **Replica Set** sendiri.

## Sharding vs Replication

| | Replication | Sharding |
|---|------------|----------|
| Tujuan | High availability | Horizontal scaling |
| Data | Copy ke semua node | Partisi ke node berbeda |
| Use case | Production safety | Big data, high throughput |

## Sharding Architecture

\`\`\`
                    ┌──────────────┐
                    │   Router     │  ← mongos (query router)
                    │   (mongos)   │
                    └──────────────┘
                     /      |      \\
                    ▼       ▼       ▼
               ┌────────┐┌────────┐┌────────┐
               │ Config ││ Shard 1││ Shard 2│
               │ Server ││(Replica)│(Replica)│
               └────────┘└────────┘└────────┘

Shard Key: { userId: "hashed" }
- userId 1-500  → Shard 1
- userId 501-1000 → Shard 2
\`\`\`

## Shard Key

**Shard key** menentukan bagaimana data didistribusikan. PILIH DENGAN HATI-HATI!

### Good Shard Key:
\`\`\`javascript
// High cardinality + even distribution
{ userId: "hashed" }   // Hashed sharding
{ timestamp: 1 }       // Range sharding (time-series)
\`\`\`

### Bad Shard Key:
\`\`\`javascript
// Low cardinality → hotspot
{ gender: 1 }           // Only M/F → hanya 2 shards terpakai
{ country: 1 }          // Tidak merata (some countries bigger)
\`\`\`

## Hashed vs Range Sharding

| | Hashed | Range |
|---|--------|-------|
| Distribusi | Merata | Berdasarkan range |
| Query performance | Scatter-gather | Targeted (jika query by shard key) |
| Cocok untuk | Insert-heavy | Range queries (time series) |

## Enable Sharding

\`\`\`javascript
// 1. Enable sharding on database
sh.enableSharding('myapp');

// 2. Create index on shard key
db.users.createIndex({ userId: 'hashed' });

// 3. Shard collection
sh.shardCollection('myapp.users', { userId: 'hashed' });

// Check distribution
db.users.getShardDistribution();
\`\`\`

## Sharding in Atlas

Atlas handle sharding secara otomatis:
\`\`\`
1. Create cluster (M30+ for sharding)
2. Atlas auto-config mongos + config servers
3. Enable sharding via UI or API
4. Pilih shard key
5. Atlas manage balancing
\`\`\`

## When to Shard?

\`\`\`
✅ Data > 1TB
✅ Write throughput > 1000 ops/sec per node
✅ Working set > RAM
✅ Latency meningkat karena data besar

❌ Aplikasi kecil (< 100GB) - Overkill
❌ Belum optimasi indexes dulu
❌ Budget terbatas (sharding = more servers)
\`\`\`
  `,

  quiz: [
    { question: "Sharding?", options: ["Backup", "Partisi data horizontal ke multiple servers", "Index", "Cache"], correctAnswer: 1 },
    { question: "Shard key: hashed?", options: ["Random", "Even distribution (hash)", "Range only", "Text"], correctAnswer: 1 },
    { question: "Kapan sharding?", options: ["App kecil", "Data >1TB / high throughput", "Baru mulai", "Development"], correctAnswer: 1 }
  ],

  codeExamples: []
};