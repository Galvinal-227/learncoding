export const chapter = {
  slug: "microservices",
  title: "Microservices",
  description: "Mendesain dan mengimplementasikan arsitektur microservices.",
  icon: "SiSystem",
  color: "#6C63FF",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["system-design-introduction"],
  tags: ["system-design", "microservices", "architecture", "distributed"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Microservices?

Microservices adalah arsitektur di mana aplikasi dibangun sebagai kumpulan service kecil yang independen.

## Karakteristik

1. **Small** - Fokus pada satu fungsi
2. **Independent** - Deploy secara independen
3. **Decentralized** - Setiap service memiliki database sendiri
4. **Resilient** - Failure di satu service tidak mempengaruhi yang lain
5. **Technology agnostic** - Bisa pakai bahasa berbeda

## Monolith vs Microservices

| Monolith | Microservices |
|----------|---------------|
| Single deployment | Multiple deployments |
| Shared database | Per-service database |
| Tight coupling | Loose coupling |
| Hard to scale | Easy to scale |
| Technology single | Multiple technologies |
| Simple debugging | Complex debugging |

## Service Types

### 1. Core Services
\`\`\`
- User Service
- Product Service
- Order Service
- Payment Service
\`\`\`

### 2. Support Services
\`\`\`
- Notification Service
- Email Service
- Logging Service
- Analytics Service
\`\`\`

### 3. Infrastructure Services
\`\`\`
- API Gateway
- Discovery Service
- Config Service
- Circuit Breaker
\`\`\`

## Service Communication

### Synchronous (REST/gRPC)
\`\`\`
Service A → Request → Service B → Response → Service A
\`\`\`

### Asynchronous (Message Queue)
\`\`\`
Service A → Queue → Service B → Process
\`\`\`

### Event-Driven
\`\`\`
Service A → Event → Event Bus → Service B → React
\`\`\`

## API Gateway

\`\`\`
┌─────────────────┐
│    Client       │
└────────┬────────┘
         │
┌────────▼────────┐
│  API Gateway    │
└────────┬────────┘
    ┌────┼────┐
    │    │    │
┌───▼──┐┌─▼───┐┌─▼───┐
│User  ││Order││Product│
└──────┘└─────┘└──────┘
\`\`\`

## Service Discovery

### Client-Side Discovery
\`\`\`
Client → Discovery Service → Get Address → Call Service
\`\`\`

### Server-Side Discovery
\`\`\`
Client → Router → Discovery Service → Route to Service
\`\`\`

## Implementation Example

### Service Definition
\`\`\`javascript
// user-service.js
const express = require('express');
const app = express();

app.get('/api/users/:id', (req, res) => {
    // Get user from database
    res.json({ id: req.params.id, name: 'John Doe' });
});

app.listen(3001);
\`\`\`

### API Gateway
\`\`\`javascript
// api-gateway.js
const express = require('express');
const httpProxy = require('http-proxy-middleware');
const app = express();

const services = {
    users: 'http://localhost:3001',
    orders: 'http://localhost:3002',
    products: 'http://localhost:3003'
};

app.use('/api/users', httpProxy({ target: services.users }));
app.use('/api/orders', httpProxy({ target: services.orders }));
app.use('/api/products', httpProxy({ target: services.products }));

app.listen(3000);
\`\`\`

## Challenges

| Challenge | Solution |
|-----------|----------|
| **Complexity** | Good design, documentation |
| **Network latency** | Caching, async communication |
| **Data consistency** | Saga pattern, eventual consistency |
| **Debugging** | Distributed tracing, logging |
| **Security** | JWT, API Gateway, mTLS |
| **Deployment** | CI/CD, containerization |

## Best Practices

1. **Single responsibility** per service
2. **Database per service** pattern
3. **API First** design approach
4. **Circuit Breaker** for resilience
5. **Distributed tracing** for debugging
6. **Centralized logging** and monitoring
7. **Containerization** (Docker, K8s)
8. **CI/CD pipeline** for each service
9. **Versioning** APIs
10. **Documentation** with OpenAPI
  `,
  quiz: [
    {
      question: "Setiap service di microservices memiliki?",
      options: [
        "Database sendiri",
        "Database bersama",
        "Cache bersama",
        "Server bersama"
      ],
      correctAnswer: 0
    },
    {
      question: "API Gateway berfungsi sebagai?",
      options: [
        "Database gateway",
        "Single entry point",
        "Load balancer",
        "Cache server"
      ],
      correctAnswer: 1
    },
    {
      question: "Pattern untuk transaksi distributed adalah?",
      options: [
        "ACID",
        "Saga",
        "BASE",
        "CAP"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Microservices Example",
      code: `// ============================================
// 1. Service Discovery (Eureka-style)
// ============================================
class ServiceRegistry {
    constructor() {
        this.services = new Map();
    }
    
    register(service) {
        this.services.set(service.id, {
            ...service,
            health: 'UP',
            registeredAt: new Date()
        });
        console.log(\`Service \${service.id} registered\`);
    }
    
    deregister(serviceId) {
        this.services.delete(serviceId);
        console.log(\`Service \${serviceId} deregistered\`);
    }
    
    getService(serviceId) {
        const service = this.services.get(serviceId);
        if (!service) throw new Error(\`Service \${serviceId} not found\`);
        return service;
    }
    
    getServices() {
        return Array.from(this.services.values());
    }
}

// ============================================
// 2. API Gateway
// ============================================
const express = require('express');
const axios = require('axios');

class APIGateway {
    constructor(registry) {
        this.registry = registry;
        this.app = express();
        this.setupMiddleware();
        this.setupRoutes();
    }
    
    setupMiddleware() {
        this.app.use(express.json());
        this.app.use((req, res, next) => {
            console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
            next();
        });
    }
    
    setupRoutes() {
        // Health check
        this.app.get('/health', (req, res) => {
            res.json({ status: 'ok', services: this.registry.getServices() });
        });
        
        // Dynamic routing
        this.app.all('/*', async (req, res) => {
            try {
                const path = req.path;
                const method = req.method;
                const service = this.routeRequest(path);
                
                if (!service) {
                    return res.status(404).json({ error: 'Service not found' });
                }
                
                const response = await this.forwardRequest(service, req);
                res.status(response.status).json(response.data);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    
    routeRequest(path) {
        // Simple routing based on path prefix
        const services = this.registry.getServices();
        for (const service of services) {
            if (path.startsWith(\`/api/\${service.id}\`)) {
                return service;
            }
        }
        return null;
    }
    
    async forwardRequest(service, req) {
        const url = \`\${service.url}\${req.path}\`;
        try {
            const response = await axios({
                method: req.method,
                url,
                data: req.body,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Request-ID': req.headers['x-request-id'] || 'unknown'
                },
                timeout: 5000
            });
            return response;
        } catch (error) {
            console.error(\`Error forwarding to \${service.id}:\`, error.message);
            throw error;
        }
    }
    
    start(port = 3000) {
        this.app.listen(port, () => {
            console.log(\`API Gateway running on port \${port}\`);
        });
    }
}

// ============================================
// 3. Circuit Breaker
// ============================================
class CircuitBreaker {
    constructor(options = {}) {
        this.failureThreshold = options.failureThreshold || 3;
        this.timeout = options.timeout || 10000;
        this.failures = 0;
        this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
        this.lastFailure = null;
    }
    
    async execute(fn) {
        if (this.state === 'OPEN') {
            const now = Date.now();
            if (now - this.lastFailure > this.timeout) {
                this.state = 'HALF_OPEN';
                console.log('Circuit is half-open, testing...');
            } else {
                throw new Error('Circuit breaker is OPEN');
            }
        }
        
        try {
            const result = await fn();
            
            if (this.state === 'HALF_OPEN') {
                this.state = 'CLOSED';
                this.failures = 0;
                console.log('Circuit breaker closed');
            }
            
            return result;
        } catch (error) {
            this.failures++;
            this.lastFailure = Date.now();
            
            if (this.failures >= this.failureThreshold) {
                this.state = 'OPEN';
                console.log(\`Circuit breaker opened after \${this.failures} failures\`);
            }
            
            throw error;
        }
    }
}

// ============================================
// 4. Service Implementation
// ============================================
class Microservice {
    constructor(config) {
        this.id = config.id;
        this.port = config.port;
        this.url = \`http://localhost:\${this.port}\`;
        this.registry = config.registry;
        this.app = express();
        this.db = config.db || {};
        this.setupMiddleware();
        this.setupRoutes();
    }
    
    setupMiddleware() {
        this.app.use(express.json());
        this.app.use((req, res, next) => {
            req.startTime = Date.now();
            next();
        });
    }
    
    setupRoutes() {
        // Health check
        this.app.get('/health', (req, res) => {
            res.json({ status: 'UP', service: this.id });
        });
        
        // Default routes - override in subclasses
        this.app.get('/api/:id', (req, res) => {
            const data = this.db[req.params.id];
            if (data) {
                res.json(data);
            } else {
                res.status(404).json({ error: 'Not found' });
            }
        });
        
        this.app.post('/api', (req, res) => {
            const id = Date.now().toString();
            this.db[id] = { id, ...req.body };
            res.status(201).json(this.db[id]);
        });
    }
    
    start() {
        this.registry.register({
            id: this.id,
            url: this.url,
            port: this.port
        });
        
        this.app.listen(this.port, () => {
            console.log(\`Service \${this.id} running on port \${this.port}\`);
        });
    }
}

// ============================================
// 5. Specific Services
// ============================================

// User Service
class UserService extends Microservice {
    setupRoutes() {
        super.setupRoutes();
        
        this.app.post('/api/users', (req, res) => {
            const user = {
                id: Date.now().toString(),
                email: req.body.email,
                name: req.body.name,
                created: new Date()
            };
            this.db[user.id] = user;
            res.status(201).json(user);
        });
        
        this.app.get('/api/users/:id', (req, res) => {
            const user = this.db[req.params.id];
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        });
    }
}

// Order Service
class OrderService extends Microservice {
    setupRoutes() {
        super.setupRoutes();
        
        this.app.post('/api/orders', async (req, res) => {
            const order = {
                id: Date.now().toString(),
                userId: req.body.userId,
                items: req.body.items || [],
                total: req.body.total || 0,
                status: 'PENDING',
                created: new Date()
            };
            
            // With circuit breaker
            const breaker = new CircuitBreaker({ failureThreshold: 2 });
            
            try {
                // Call User Service to verify user exists
                await breaker.execute(async () => {
                    const userService = this.registry.getService('users');
                    await axios.get(\`\${userService.url}/api/users/\${order.userId}\`);
                });
                
                this.db[order.id] = order;
                res.status(201).json(order);
            } catch (error) {
                res.status(500).json({ 
                    error: 'Order creation failed', 
                    message: error.message 
                });
            }
        });
    }
}

// ============================================
// 6. Main Application
// ============================================
async function main() {
    // Setup
    const registry = new ServiceRegistry();
    
    // Create API Gateway
    const gateway = new APIGateway(registry);
    gateway.start(3000);
    
    // Create services
    const userService = new UserService({
        id: 'users',
        port: 3001,
        registry
    });
    userService.start();
    
    const orderService = new OrderService({
        id: 'orders',
        port: 3002,
        registry
    });
    orderService.start();
    
    // Test scenario
    console.log('System started successfully!');
    console.log('Try:');
    console.log('1. POST /api/users { "email": "test@test.com", "name": "Test" }');
    console.log('2. POST /api/orders { "userId": "123", "items": [...], "total": 100 }');
}

main().catch(console.error);`,
      language: "javascript"
    }
  ]
};