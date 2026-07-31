export const chapter = {
  slug: "mongodb-crud",
  title: "CRUD Operations",
  description: "Create, Read, Update, Delete dengan MongoDB native driver.",
  icon: "SiMongodb",
  color: "#47A248",
  difficulty: "Beginner",
  estimatedReadingTime: 25,
  prerequisites: ["mongodb-installation"],
  tags: ["mongodb", "crud", "operations", "queries"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Setup

\`\`\`bash
npm install mongodb
\`\`\`

\`\`\`javascript
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');
await client.connect();
const db = client.db('myapp');

// Collection reference
const users = db.collection('users');
\`\`\`

## Create (Insert)

### insertOne()
\`\`\`javascript
const result = await users.insertOne({
    name: 'Budi',
    email: 'budi@email.com',
    age: 25,
    hobbies: ['coding', 'reading'],
    createdAt: new Date()
});
console.log(result.insertedId); // ObjectId("...")
\`\`\`

### insertMany()
\`\`\`javascript
const result = await users.insertMany([
    { name: 'Siti', email: 'siti@email.com' },
    { name: 'Agus', email: 'agus@email.com' }
]);
console.log(result.insertedCount); // 2
\`\`\`

## Read (Query)

### findOne()
\`\`\`javascript
const user = await users.findOne({ email: 'budi@email.com' });
\`\`\`

### find() - Cursor
\`\`\`javascript
const cursor = users.find({ age: { $gte: 18 } });

// Iterate
for await (const doc of cursor) {
    console.log(doc);
}

// Atau toArray
const all = await users.find().toArray();
\`\`\`

### Query Operators
\`\`\`javascript
// Comparison
{ age: { $gte: 18, $lte: 60 } }    // age >= 18 AND age <= 60
{ name: { $in: ['Budi', 'Siti'] } } // name = 'Budi' OR 'Siti'
{ email: { $exists: true } }        // email field exists

// Logical
{ $and: [{ age: 25 }, { name: 'Budi' }] }
{ $or: [{ name: 'Budi' }, { name: 'Siti' }] }
{ $not: { age: { $lt: 18 } } }
\`\`\`

### Projection (Select Fields)
\`\`\`javascript
const user = await users.findOne(
    { email: 'budi@email.com' },
    { projection: { name: 1, email: 1, _id: 0 } }
);
// Result: { name: 'Budi', email: 'budi@email.com' }
\`\`\`

### Sort, Limit, Skip
\`\`\`javascript
const users = await users
    .find({ age: { $gte: 18 } })
    .sort({ name: 1 })      // 1 = ASC, -1 = DESC
    .limit(10)
    .skip(20)               // Pagination
    .toArray();
\`\`\`

## Update

### updateOne()
\`\`\`javascript
await users.updateOne(
    { email: 'budi@email.com' },  // Filter
    { $set: { age: 26, updatedAt: new Date() } }  // Update
);
\`\`\`

### updateMany()
\`\`\`javascript
await users.updateMany(
    { age: { $lt: 18 } },
    { $set: { status: 'minor' } }
);
\`\`\`

### Update Operators
\`\`\`javascript
// Set field
{ $set: { name: 'Budi Updated' } }

// Unset (remove field)
{ $unset: { tempField: '' } }

// Increment
{ $inc: { loginCount: 1 } }

// Push to array
{ $push: { hobbies: 'gaming' } }

// Pull from array
{ $pull: { hobbies: 'reading' } }

// Rename field
{ $rename: { name: 'fullName' } }
\`\`\`

## Delete

### deleteOne()
\`\`\`javascript
await users.deleteOne({ email: 'budi@email.com' });
\`\`\`

### deleteMany()
\`\`\`javascript
await users.deleteMany({ status: 'inactive' });
\`\`\`

## Bulk Write

\`\`\`javascript
const result = await users.bulkWrite([
    { insertOne: { document: { name: 'New User' } } },
    { updateOne: { filter: { name: 'Budi' }, update: { $set: { age: 27 } } } },
    { deleteOne: { filter: { name: 'Old User' } } }
]);
\`\`\`
  `,

  quiz: [
    { question: "insertOne return?", options: ["Document", "{ insertedId: ObjectId }", "Count", "Boolean"], correctAnswer: 1 },
    { question: "$gte?", options: ["Greater than", "Greater than or equal", "Less than", "Equal"], correctAnswer: 1 },
    { question: "$set?", options: ["Insert", "Update specific fields", "Delete", "Rename"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "CRUD Operations Complete",
      language: "javascript",
      code: `import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');
await client.connect();
const db = client.db('myapp');
const users = db.collection('users');

// CREATE
await users.insertOne({ name: 'Budi', email: 'budi@email.com', age: 25 });

// READ
const user = await users.findOne({ email: 'budi@email.com' });
const adults = await users.find({ age: { $gte: 18 } }).toArray();

// UPDATE
await users.updateOne({ email: 'budi@email.com' }, { $set: { age: 26 } });

// DELETE
await users.deleteOne({ email: 'budi@email.com' });

await client.close();`
    }
  ]
};