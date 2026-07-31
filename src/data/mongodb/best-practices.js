export const chapter = {
  slug: "mongodb-best-practices",
  title: "Best Practices",
  description: "Praktik terbaik MongoDB: schema design, performance, security, dan production checklist.",
  icon: "SiMongodb",
  color: "#47A248",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["mongodb-mongoose"],
  tags: ["mongodb", "best-practices", "performance", "security"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## 1. Schema Design

### Embed vs Reference

| Embed | Reference |
|-------|-----------|
| Data selalu diakses bersama | Data diakses terpisah |
| One-to-one, one-to-few | One-to-many, many-to-many |
| Baca cepat (1 query) | Update independen |
| Document max 16MB | Tidak ada limit size |

### Embed Example:
\`\`\`javascript
// User + addresses (always needed together)
{
    name: "Budi",
    addresses: [
        { street: "Jl. Merdeka", city: "Jakarta" },
        { street: "Jl. Sudirman", city: "Bandung" }
    ]
}
\`\`\`

### Reference Example:
\`\`\`javascript
// Posts + Author (separate access patterns)
// Post document
{ _id: 1, title: "Hello", authorId: ObjectId("...") }

// Author document
{ _id: ObjectId("..."), name: "Budi", email: "budi@email.com" }
\`\`\`

## 2. Performance

\`\`\`javascript
// ✅ Gunakan indexes
await users.createIndex({ email: 1 });

// ✅ Projection (hanya ambil field yang diperlukan)
await users.find({}, { projection: { name: 1, email: 1 } });

// ✅ Gunakan .lean() untuk read-only (Mongoose)
const users = await User.find().lean(); // Plain JS object, lebih cepat

// ✅ Batch operations
await users.bulkWrite([...]);

// ❌ Hindari $where (JavaScript evaluation, lambat)
// ❌ Hindari regex tanpa index
// ❌ Hindari large skip (pakai cursor-based pagination)
\`\`\`

## 3. Security

\`\`\`bash
# Enable authentication
# /etc/mongod.conf
security:
  authorization: enabled
\`\`\`

\`\`\`javascript
// Sanitize input (hindari NoSQL injection)
const email = req.body.email;
// ❌ Bahaya: { "$gt": "" } bisa bypass
const user = await users.findOne({ email }); 

// ✅ Validate input
if (typeof email !== 'string') throw new Error('Invalid input');

// Gunakan environment variables untuk credentials
const URI = process.env.MONGODB_URI; // Jangan hardcode!
\`\`\`

## 4. Connection Management

\`\`\`javascript
// ✅ Reuse connection (jangan connect/disconnect tiap request)
let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectDB() {
    if (cached.conn) return cached.conn;
    cached.conn = await mongoose.connect(URI);
    return cached.conn;
}

// ✅ Set connection options
mongoose.connect(URI, {
    maxPoolSize: 10,          // Max connections
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000
});
\`\`\`

## 5. Monitoring

\`\`\`bash
# MongoDB Profiler (slow queries)
db.setProfilingLevel(1, { slowms: 100 })

# Lihat slow queries
db.system.profile.find().sort({ ts: -1 }).limit(5)
\`\`\`

## Production Checklist

\`\`\`
✅ Authentication enabled
✅ Firewall (IP whitelist)
✅ Use Replica Set (min 3 nodes)
✅ Backups scheduled (Atlas auto-backup)
✅ Monitoring (Atlas/PM2/Datadog)
✅ Indexes created
✅ Connection pooling
✅ Environment variables (no hardcoded secrets)
✅ Write concern: majority
✅ Regular updates (patch security)
\`\`\`
  `,

  quiz: [
    { question: "Embed vs Reference?", options: ["Sama", "Embed: data bersama 1 doc; Reference: terpisah", "Reference lebih cepat", "Embed deprecated"], correctAnswer: 1 },
    { question: ".lean()?", options: ["Delete", "Return plain JS (faster, no Mongoose overhead)", "Update", "Index"], correctAnswer: 1 },
    { question: "NoSQL injection?", options: ["Tidak ada", "Query injection via $ operators (sanitize input!)", "SQL only", "Network attack"], correctAnswer: 1 }
  ],

  codeExamples: []
};