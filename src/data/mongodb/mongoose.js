export const chapter = {
  slug: "mongodb-mongoose",
  title: "Mongoose ODM",
  description: "Gunakan Mongoose untuk schema, validation, middleware, dan relationships.",
  icon: "SiMongodb",
  color: "#47A248",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["mongodb-crud"],
  tags: ["mongodb", "mongoose", "odm", "schema"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install & Connect

\`\`\`bash
npm install mongoose
\`\`\`

\`\`\`javascript
import mongoose from 'mongoose';

await mongoose.connect('mongodb://localhost:27017/myapp');
\`\`\`

## Define Schema

\`\`\`javascript
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    age: { type: Number, min: 0, max: 150 },
    role: { type: String, enum: ['user', 'admin', 'moderator'], default: 'user' },
    isActive: { type: Boolean, default: true },
    hobbies: [String],
    profile: {
        bio: String,
        website: String
    },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
\`\`\`

## CRUD with Mongoose

### Create
\`\`\`javascript
const user = await User.create({ name: 'Budi', email: 'budi@email.com' });

// Atau
const user = new User({ name: 'Budi', email: 'budi@email.com' });
await user.save();
\`\`\`

### Read
\`\`\`javascript
const users = await User.find({ age: { $gte: 18 } }).sort({ name: 1 }).limit(10);
const user = await User.findOne({ email: 'budi@email.com' });
const user = await User.findById('507f1f77bcf86cd799439011');
\`\`\`

### Update
\`\`\`javascript
await User.updateOne({ email: 'budi@email.com' }, { age: 26 });
const user = await User.findOneAndUpdate(
    { email: 'budi@email.com' },
    { $set: { age: 26 } },
    { new: true }  // Return updated document
);
\`\`\`

### Delete
\`\`\`javascript
await User.deleteOne({ email: 'budi@email.com' });
const user = await User.findOneAndDelete({ email: 'budi@email.com' });
\`\`\`

## Relationships (Ref/Populate)

\`\`\`javascript
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Post = mongoose.model('Post', postSchema);

// Create post with author reference
await Post.create({ title: 'Hello', content: 'World', author: user._id });

// Query with populate (JOIN)
const posts = await Post.find().populate('author', 'name email');
// posts[0].author = { _id: ..., name: 'Budi', email: 'budi@email.com' }
\`\`\`

## Middleware (Hooks)

\`\`\`javascript
// Pre-save hook
userSchema.pre('save', async function(next) {
    this.updatedAt = new Date();
    next();
});

// Post-save hook
userSchema.post('save', function(doc) {
    console.log('User saved:', doc._id);
});
\`\`\`

## Virtuals

\`\`\`javascript
userSchema.virtual('fullName').get(function() {
    return \`\${this.firstName} \${this.lastName}\`;
});

// Include virtuals in JSON
userSchema.set('toJSON', { virtuals: true });
\`\`\`
  `,

  quiz: [
    { question: "Mongoose: create vs save?", options: ["Sama", "create: langsung; save: instance dulu", "save lebih cepat", "create deprecated"], correctAnswer: 1 },
    { question: "Populate?", options: ["Delete", "Join reference (seperti SQL JOIN)", "Count", "Sort"], correctAnswer: 1 },
    { question: "Pre-save hook?", options: ["After save", "Before save (middleware)", "On query", "On delete"], correctAnswer: 1 }
  ],

  codeExamples: []
};