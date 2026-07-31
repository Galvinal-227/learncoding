export const chapter = {
  slug: "integration-testing",
  title: "Integration Testing",
  description: "Menguji interaksi antar komponen dalam aplikasi.",
  icon: "SiTestinglibrary",
  color: "#E33332",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["testing-introduction", "testing-unit-testing"],
  tags: ["testing", "integration-test", "api-test", "database"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Integration Test?

Integration test menguji interaksi antara multiple komponen atau modul.

## Jenis Integration Test

### 1. API Testing
\`\`\`javascript
// api.test.js
const request = require('supertest');
const app = require('./app');

describe('API Integration', () => {
    test('GET /users returns users', async () => {
        const response = await request(app)
            .get('/api/users')
            .expect('Content-Type', /json/)
            .expect(200);
        
        expect(response.body).toHaveProperty('data');
        expect(Array.isArray(response.body.data)).toBe(true);
    });
    
    test('POST /users creates user', async () => {
        const newUser = { name: 'John', email: 'john@example.com' };
        const response = await request(app)
            .post('/api/users')
            .send(newUser)
            .expect(201);
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('John');
    });
});
\`\`\`

### 2. Database Testing
\`\`\`javascript
// db.test.js
const { connectDB, closeDB, clearDB } = require('./db');
const User = require('./models/User');

describe('Database Integration', () => {
    beforeAll(async () => {
        await connectDB();
    });
    
    afterAll(async () => {
        await closeDB();
    });
    
    beforeEach(async () => {
        await clearDB();
    });
    
    test('creates and finds user', async () => {
        const user = await User.create({
            name: 'John Doe',
            email: 'john@example.com'
        });
        
        const found = await User.findById(user.id);
        expect(found.name).toBe('John Doe');
        expect(found.email).toBe('john@example.com');
    });
});
\`\`\`

### 3. Service Testing
\`\`\`javascript
// service.test.js
const EmailService = require('./email-service');
const UserService = require('./user-service');

describe('User Service Integration', () => {
    let emailService;
    let userService;
    
    beforeEach(() => {
        emailService = new EmailService();
        userService = new UserService(emailService);
    });
    
    test('sends welcome email on user creation', async () => {
        const user = { name: 'John', email: 'john@example.com' };
        const emailSpy = jest.spyOn(emailService, 'sendWelcome');
        
        await userService.createUser(user);
        
        expect(emailSpy).toHaveBeenCalledWith(user.email);
    });
});
\`\`\`

## Setup for Integration Tests

### Test Database
\`\`\`javascript
// test-setup.js
const mongoose = require('mongoose');

beforeAll(async () => {
    await mongoose.connect(process.env.TEST_DATABASE_URL);
});

afterAll(async () => {
    await mongoose.connection.close();
});

beforeEach(async () => {
    await mongoose.connection.db.dropDatabase();
});
\`\`\`

### Test Server
\`\`\`javascript
// server.test.js
const request = require('supertest');
const app = require('../app');

describe('Server Integration', () => {
    let server;
    
    beforeAll(() => {
        server = app.listen(4000);
    });
    
    afterAll(() => {
        server.close();
    });
    
    test('health check endpoint', async () => {
        const response = await request(server)
            .get('/health')
            .expect(200);
        
        expect(response.body).toEqual({ status: 'OK' });
    });
});
\`\`\`

## Best Practices

1. **Use test database** - Jangan gunakan production DB
2. **Reset state** between tests
3. **Test real integrations** - Jangan mock semuanya
4. **Keep tests independent**
5. **Use environment variables** untuk config
6. **Run integration tests** separately
7. **Test error scenarios**
8. **Test edge cases**
  `,
  quiz: [
    {
      question: "Integration test menguji?",
      options: ["Single function", "Interaksi antar komponen", "UI komponen", "Database schema"],
      correctAnswer: 1
    },
    {
      question: "Tools untuk API testing di Node.js adalah?",
      options: ["Jest", "Supertest", "Mocha", "Chai"],
      correctAnswer: 1
    },
    {
      question: "Database untuk testing sebaiknya?",
      options: ["Production DB", "Test DB terpisah", "Memory DB", "File DB"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Integration Tests",
      code: `// ============================================
// 1. API Integration Tests
// ============================================
// api.test.js
const request = require('supertest');
const app = require('./app');
const { connectDB, closeDB } = require('./db');

describe('API Integration Tests', () => {
    let token;
    let userId;
    
    beforeAll(async () => {
        await connectDB();
    });
    
    afterAll(async () => {
        await closeDB();
    });
    
    describe('Authentication', () => {
        test('registers new user', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send({
                    name: 'Test User',
                    email: 'test@example.com',
                    password: 'password123'
                })
                .expect(201);
            
            expect(response.body).toHaveProperty('id');
            expect(response.body.email).toBe('test@example.com');
            userId = response.body.id;
        });
        
        test('logs in user', async () => {
            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'test@example.com',
                    password: 'password123'
                })
                .expect(200);
            
            expect(response.body).toHaveProperty('token');
            token = response.body.token;
        });
    });
    
    describe('Protected Routes', () => {
        test('gets user profile with valid token', async () => {
            const response = await request(app)
                .get('/api/users/me')
                .set('Authorization', \`Bearer \${token}\`)
                .expect(200);
            
            expect(response.body.email).toBe('test@example.com');
        });
        
        test('returns 401 without token', async () => {
            await request(app)
                .get('/api/users/me')
                .expect(401);
        });
    });
});

// ============================================
// 2. Database Integration Tests
// ============================================
// db.test.js
const { connectDB, closeDB, clearDB } = require('./db');
const User = require('./models/User');
const Post = require('./models/Post');

describe('Database Integration', () => {
    let user;
    
    beforeAll(async () => {
        await connectDB();
    });
    
    afterAll(async () => {
        await closeDB();
    });
    
    beforeEach(async () => {
        await clearDB();
        user = await User.create({
            name: 'John',
            email: 'john@example.com'
        });
    });
    
    test('creates post associated with user', async () => {
        const post = await Post.create({
            title: 'Test Post',
            content: 'Content here',
            author: user._id
        });
        
        const found = await Post.findById(post._id).populate('author');
        expect(found.author.email).toBe('john@example.com');
    });
    
    test('gets user with posts', async () => {
        await Post.create({ title: 'Post 1', content: 'Content', author: user._id });
        await Post.create({ title: 'Post 2', content: 'Content', author: user._id });
        
        const foundUser = await User.findById(user._id).populate('posts');
        expect(foundUser.posts).toHaveLength(2);
    });
});

// ============================================
// 3. Service Integration Tests
// ============================================
// service.test.js
const { OrderService, PaymentService, InventoryService } = require('./services');

describe('Order Service Integration', () => {
    let orderService;
    let paymentService;
    let inventoryService;
    
    beforeEach(() => {
        paymentService = new PaymentService();
        inventoryService = new InventoryService();
        orderService = new OrderService(paymentService, inventoryService);
    });
    
    test('creates order and processes payment', async () => {
        const order = {
            userId: '123',
            items: [{ productId: 'p1', quantity: 2 }]
        };
        
        // Mock services
        jest.spyOn(inventoryService, 'checkStock').mockResolvedValue(true);
        jest.spyOn(inventoryService, 'reserveStock').mockResolvedValue(true);
        jest.spyOn(paymentService, 'process').mockResolvedValue({ id: 'pay_123', status: 'success' });
        
        const result = await orderService.createOrder(order);
        
        expect(result).toHaveProperty('id');
        expect(result.status).toBe('paid');
        expect(inventoryService.reserveStock).toHaveBeenCalled();
    });
    
    test('fails when inventory is insufficient', async () => {
        jest.spyOn(inventoryService, 'checkStock').mockResolvedValue(false);
        
        await expect(orderService.createOrder({ userId: '123', items: [] }))
            .rejects.toThrow('Insufficient inventory');
    });
});

// ============================================
// 4. Setup File
// ============================================
// test-setup.js
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongod;

module.exports = {
    connectTestDB: async () => {
        mongod = await MongoMemoryServer.create();
        const uri = mongod.getUri();
        await mongoose.connect(uri);
    },
    
    closeTestDB: async () => {
        await mongoose.connection.close();
        await mongod.stop();
    },
    
    clearTestDB: async () => {
        const collections = mongoose.connection.collections;
        for (const key in collections) {
            await collections[key].deleteMany({});
        }
    }
};`,
      language: "javascript"
    }
  ]
};