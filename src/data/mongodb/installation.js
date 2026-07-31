export const chapter = {
  slug: "mongodb-installation",
  title: "Instalasi & Setup",
  description: "Install MongoDB di Windows, Mac, Linux dan setup development environment.",
  icon: "SiMongodb",
  color: "#47A248",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["mongodb-introduction"],
  tags: ["mongodb", "instalasi", "setup", "mongosh"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install MongoDB

### Windows
1. Download **MongoDB Community Server** dari [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Pilih: Windows, x64, MSI
3. Install → **Complete setup**
4. Centang **Install MongoDB Compass** (GUI tool)
5. MongoDB akan berjalan sebagai Windows Service

### Mac (Homebrew)
\`\`\`bash
# Install
brew tap mongodb/brew
brew install mongodb-community@7.0

# Start service
brew services start mongodb-community@7.0

# Stop service
brew services stop mongodb-community@7.0
\`\`\`

### Linux (Ubuntu)
\`\`\`bash
# Import public key
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Add repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Install
sudo apt update
sudo apt install -y mongodb-org

# Start
sudo systemctl start mongod
sudo systemctl enable mongod  # Auto-start on boot

# Check status
sudo systemctl status mongod
\`\`\`

### Docker (Alternatif)
\`\`\`bash
docker run -d --name mongodb -p 27017:27017 mongo:7.0
\`\`\`

## MongoDB Shell (mongosh)

\`\`\`bash
# Install mongosh
brew install mongosh  # Mac
npm install -g mongosh  # Via npm

# Connect
mongosh
mongosh "mongodb://localhost:27017"
mongosh "mongodb+srv://cluster.mongodb.net" --username admin
\`\`\`

## Basic mongosh Commands

\`\`\`javascript
// Show databases
show dbs

// Switch/create database
use myapp

// Show collections
show collections

// Insert test document
db.users.insertOne({ name: 'Test', email: 'test@email.com' })

// Find all
db.users.find()

// Count
db.users.countDocuments()

// Help
help
\`\`\`

## MongoDB Compass (GUI)

\`\`\`
- Visual explorer untuk MongoDB
- CRUD operations via GUI
- Index management
- Aggregation pipeline builder
- Performance advisor

Connection string: mongodb://localhost:27017
\`\`\`

## VS Code Extension

\`\`\`
- MongoDB for VS Code
- Bisa browse database langsung dari VS Code
- Playgrounds (.mongodb.js files)
- Auto-completion
\`\`\`

## Verify Installation

\`\`\`bash
# Check version
mongod --version
mongosh --version

# Connect & test
mongosh --eval "db.runCommand({ ping: 1 })"
# Output: { ok: 1 }
\`\`\`
  `,

  quiz: [
    { question: "mongosh?", options: ["GUI tool", "MongoDB Shell (CLI)", "Driver", "Service"], correctAnswer: 1 },
    { question: "Default MongoDB port?", options: ["3306", "5432", "27017", "6379"], correctAnswer: 2 },
    { question: "MongoDB Compass?", options: ["CLI", "GUI (visual explorer)", "Driver", "Cloud service"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Quick Start MongoDB",
      language: "bash",
      code: `# Install via Docker (easiest)
docker run -d --name mongodb -p 27017:27017 mongo:7.0

# Connect with mongosh
mongosh

# Create database & collection
use myapp
db.users.insertOne({ name: "Budi", email: "budi@email.com" })
db.users.find()

# Done!`
    }
  ]
};