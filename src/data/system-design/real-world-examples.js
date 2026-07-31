export const chapter = {
  slug: "real-world-examples",
  title: "Real World Examples",
  description: "Studi kasus system design untuk aplikasi populer.",
  icon: "SiSystem",
  color: "#6C63FF",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["system-design-introduction"],
  tags: ["system-design", "case-study", "examples"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## 1. URL Shortener (bit.ly)

### Requirements
- Shorten long URLs
- Redirect to original URL
- Analytics (clicks, location)
- Expiration for links

### Design

\`\`\`
Components:
├── API Gateway
├── URL Shortener Service
├── Redirect Service
├── Analytics Service
├── Redis (Cache)
└── PostgreSQL

Flow:
1. User submits URL
2. Generate short code (base62)
3. Store mapping in DB
4. Return short URL
5. Redirect uses cache first
6. Track analytics async
\`\`\`

### Implementation
\`\`\`javascript
class URLShortener {
    constructor() {
        this.redis = new Redis();
        this.db = new Database();
        this.chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    }
    
    async shorten(url, customCode = null) {
        // Generate code
        let code = customCode || this.generateCode();
        
        // Check uniqueness
        while (await this.db.exists(code)) {
            code = this.generateCode();
        }
        
        // Store mapping
        await this.db.save(code, {
            url,
            createdAt: new Date(),
            clicks: 0
        });
        
        // Cache
        await this.redis.set(code, url, 'EX', 3600);
        
        return \`https://short.url/\${code}\`;
    }
    
    async redirect(code) {
        // Check cache first
        let url = await this.redis.get(code);
        
        if (!url) {
            // Get from DB
            const data = await this.db.get(code);
            if (!data) throw new Error('Not found');
            url = data.url;
            
            // Update cache
            await this.redis.set(code, url, 'EX', 3600);
        }
        
        // Track analytics (async)
        this.trackAnalytics(code);
        
        return url;
    }
    
    generateCode() {
        let code = '';
        for (let i = 0; i < 7; i++) {
            code += this.chars[Math.floor(Math.random() * this.chars.length)];
        }
        return code;
    }
    
    async trackAnalytics(code) {
        // Increment click count
        await this.db.increment(code, 'clicks');
        
        // Add to analytics queue
        await this.queue.send('analytics', { code, timestamp: new Date() });
    }
}
\`\`\`

## 2. Chat System (WhatsApp/Slack)

### Requirements
- 1-on-1 chat
- Group chat
- Online status
- Read receipts
- File sharing

### Design

\`\`\`
Components:
├── WebSocket Server
├── Message Service
├── User Status Service
├── File Service
├── Redis (presence, session)
├── PostgreSQL (messages)
└── S3 (files)

Flow:
1. User connects via WebSocket
2. Messages sent via WS
3. Messages stored in DB
4. Status sync via Redis
5. Files uploaded to S3
\`\`\`

### Implementation
\`\`\`javascript
class ChatSystem {
    constructor() {
        this.connections = new Map(); // userId -> WebSocket
        this.redis = new Redis();
        this.db = new Database();
    }
    
    // Handle connection
    onConnect(userId, ws) {
        this.connections.set(userId, ws);
        this.setStatus(userId, 'online');
        
        // Broadcast to friends
        this.broadcastStatus(userId, 'online');
    }
    
    // Handle disconnect
    onDisconnect(userId) {
        this.connections.delete(userId);
        this.setStatus(userId, 'offline');
        
        // Broadcast to friends
        this.broadcastStatus(userId, 'offline');
    }
    
    // Send message
    async sendMessage(from, to, message) {
        // Store in DB
        const msg = await this.db.saveMessage({
            from,
            to,
            content: message,
            timestamp: new Date(),
            status: 'sent'
        });
        
        // Send to receiver if online
        const receiverWS = this.connections.get(to);
        if (receiverWS) {
            receiverWS.send(JSON.stringify({
                type: 'message',
                data: msg
            }));
            
            // Update status to delivered
            await this.db.updateMessage(msg.id, { status: 'delivered' });
        }
    }
    
    // Set user status
    async setStatus(userId, status) {
        await this.redis.set(\`status:\${userId}\`, status);
        await this.redis.expire(\`status:\${userId}\`, 60); // 1 min
    }
    
    // Broadcast status
    broadcastStatus(userId, status) {
        // Send to all connected users
        for (const [id, ws] of this.connections) {
            if (id !== userId) {
                ws.send(JSON.stringify({
                    type: 'status',
                    userId,
                    status
                }));
            }
        }
    }
}
\`\`\`

## 3. E-Commerce Platform

### Requirements
- Product catalog
- Shopping cart
- Order processing
- Payment integration
- Inventory management

### Design

\`\`\`
Components:
├── Product Service
├── Cart Service
├── Order Service
├── Payment Service
├── Inventory Service
├── Notification Service
└── API Gateway

Flow:
1. Browse products
2. Add to cart (Redis)
3. Checkout
4. Validate inventory
5. Process payment
6. Reserve inventory
7. Create order
8. Send confirmation
\`\`\`

### Implementation
\`\`\`javascript
class ECommerceSystem {
    constructor() {
        this.redis = new Redis();
        this.db = new Database();
        this.payment = new PaymentService();
        this.queue = new MessageQueue();
    }
    
    // Add to cart
    async addToCart(userId, productId, quantity) {
        const key = \`cart:\${userId}\`;
        const item = await this.redis.hincrby(key, productId, quantity);
        return { productId, quantity: item };
    }
    
    // Checkout
    async checkout(userId) {
        const cart = await this.redis.hgetall(\`cart:\${userId}\`);
        
        // Validate inventory
        const items = [];
        for (const [productId, quantity] of Object.entries(cart)) {
            const stock = await this.getStock(productId);
            if (stock < parseInt(quantity)) {
                throw new Error(\`Insufficient stock for product \${productId}\`);
            }
            items.push({ productId, quantity });
        }
        
        // Calculate total
        const total = await this.calculateTotal(items);
        
        // Process payment
        const payment = await this.payment.process({
            userId,
            amount: total,
            method: 'credit_card'
        });
        
        // Create order
        const order = await this.db.createOrder({
            userId,
            items,
            total,
            paymentId: payment.id,
            status: 'pending'
        });
        
        // Reserve inventory
        for (const item of items) {
            await this.reserveInventory(item.productId, item.quantity);
        }
        
        // Send confirmation (async)
        await this.queue.send('notification', {
            type: 'order_confirmation',
            userId,
            orderId: order.id
        });
        
        // Clear cart
        await this.redis.del(\`cart:\${userId}\`);
        
        return order;
    }
    
    // Get stock
    async getStock(productId) {
        return await this.db.getStock(productId);
    }
    
    // Reserve inventory
    async reserveInventory(productId, quantity) {
        await this.db.reserveStock(productId, quantity);
    }
    
    // Calculate total
    async calculateTotal(items) {
        let total = 0;
        for (const item of items) {
            const price = await this.db.getProductPrice(item.productId);
            total += price * item.quantity;
        }
        return total;
    }
}
\`\`\`

## 4. Video Streaming (YouTube/Netflix)

### Requirements
- Upload videos
- Stream videos
- Transcoding
- Recommendations
- User engagement

### Design

\`\`\`
Components:
├── Upload Service
├── Transcoding Service
├── CDN (Video delivery)
├── Recommendation Service
├── User Service
├── Metadata Service
└── Analytics Service

Flow:
1. Upload video
2. Queue for transcoding
3. Generate thumbnails
4. Store in CDN
5. Stream via CDN
6. Track watch history
7. Generate recommendations
\`\`\`

### Implementation
\`\`\`javascript
class VideoStreaming {
    constructor() {
        this.queue = new MessageQueue();
        this.cdn = new CDNService();
        this.db = new Database();
        this.redis = new Redis();
    }
    
    // Upload video
    async uploadVideo(userId, file, metadata) {
        // Save metadata
        const video = await this.db.createVideo({
            userId,
            title: metadata.title,
            description: metadata.description,
            status: 'uploading',
            uploadedAt: new Date()
        });
        
        // Upload to CDN
        const cdnUrl = await this.cdn.upload(file, \`videos/\${video.id}\`);
        
        // Queue for transcoding
        await this.queue.send('transcode', {
            videoId: video.id,
            file: cdnUrl,
            formats: ['1080p', '720p', '480p', '360p']
        });
        
        // Generate thumbnail
        await this.queue.send('thumbnail', {
            videoId: video.id,
            cdnUrl
        });
        
        return video;
    }
    
    // Stream video
    async streamVideo(videoId, quality = '720p') {
        // Check cache
        const cached = await this.redis.get(\`video:\${videoId}:\${quality}\`);
        if (cached) {
            return cached;
        }
        
        // Get video URL from CDN
        const url = await this.cdn.getUrl(videoId, quality);
        
        // Cache for 1 hour
        await this.redis.set(\`video:\${videoId}:\${quality}\`, url, 'EX', 3600);
        
        return url;
    }
    
    // Get recommendations
    async getRecommendations(userId) {
        // Get watch history
        const history = await this.db.getWatchHistory(userId);
        
        // Collaborative filtering
        const similar = await this.db.getSimilarUsers(userId);
        
        // Generate recommendations
        let recommendations = [];
        for (const user of similar) {
            const watched = await this.db.getWatchHistory(user.id);
            recommendations = [...recommendations, ...watched];
        }
        
        // Filter duplicates and seen videos
        const seen = history.map(h => h.videoId);
        recommendations = recommendations.filter(v => !seen.includes(v.videoId));
        
        // Return top 10
        return recommendations.slice(0, 10);
    }
}
\`\`\`
  `,
  quiz: [
    {
      question: "URL shortener menggunakan base berapa untuk generate code?",
      options: [
        "base10",
        "base62",
        "base64",
        "base32"
      ],
      correctAnswer: 1
    },
    {
      question: "Chat system menggunakan apa untuk presence tracking?",
      options: [
        "PostgreSQL",
        "Redis",
        "MongoDB",
        "Cassandra"
      ],
      correctAnswer: 1
    },
    {
      question: "Video streaming menggunakan apa untuk video delivery?",
      options: [
        "CDN",
        "S3",
        "Database",
        "Cache"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete System Design Examples",
      code: `// ============================================
// System Design Case Studies Collection
// ============================================

class SystemDesignExamples {
    
    // ============================================
    // 1. Twitter (Social Media)
    // ============================================
    static twitter() {
        return {
            requirements: [
                "Post tweets (280 chars)",
                "Like/Retweet",
                "Follow/Unfollow",
                "Timeline (home feed)",
                "Search tweets",
                "Trending topics",
                "Notifications"
            ],
            components: {
                services: [
                    "Tweet Service",
                    "User Service",
                    "Timeline Service",
                    "Search Service",
                    "Notification Service",
                    "Media Service"
                ],
                database: {
                    primary: "PostgreSQL",
                    cache: "Redis",
                    search: "Elasticsearch"
                },
                infrastructure: {
                    "Message Queue": "Kafka",
                    "Load Balancer": "AWS ALB",
                    "CDN": "CloudFront"
                }
            },
            dataFlow: {
                postTweet: "User -> Tweet Service -> Timeline (cache) -> Database",
                timeline: "User -> Timeline Service -> Cache -> Database",
                search: "User -> Search Service -> Elasticsearch"
            },
            estimation: {
                dailyActive: "200M DAU",
                tweetsPerDay: "500M",
                storage: "10+ TB/year",
                qps: "50K+"
            }
        };
    }
    
    // ============================================
    // 2. Uber (Ride Hailing)
    // ============================================
    static uber() {
        return {
            requirements: [
                "Request ride",
                "Driver matching",
                "Real-time tracking",
                "Payment processing",
                "Rating system",
                "Trip history"
            ],
            components: {
                services: [
                    "Ride Service",
                    "Driver Service",
                    "Matching Service",
                    "Tracking Service",
                    "Payment Service",
                    "Rating Service"
                ],
                database: {
                    primary: "PostgreSQL",
                    cache: "Redis",
                    geospatial: "PostGIS"
                },
                infrastructure: {
                    "Message Queue": "RabbitMQ",
                    "WebSocket": "Real-time tracking",
                    "Load Balancer": "HAProxy"
                }
            },
            dataFlow: {
                requestRide: "User -> Ride Service -> Matching Service -> Driver Service",
                tracking: "Driver -> WebSocket -> Tracking Service -> User",
                payment: "Trip -> Payment Service -> Process"
            },
            estimation: {
                dailyActive: "10M DAU",
                ridesPerDay: "15M",
                concurrentRides: "500K",
                qps: "10K+"
            }
        };
    }
    
    // ============================================
    // 3. Netflix (Video Streaming)
    // ============================================
    static netflix() {
        return {
            requirements: [
                "Browse catalog",
                "Search content",
                "Watch videos",
                "User profiles",
                "Recommendations",
                "Offline download",
                "Multiple devices"
            ],
            components: {
                services: [
                    "Content Service",
                    "Recommendation Service",
                    "Streaming Service",
                    "User Service",
                    "Search Service",
                    "Analytics Service"
                ],
                database: {
                    primary: "Cassandra",
                    cache: "Redis",
                    search: "Elasticsearch"
                },
                infrastructure: {
                    "CDN": "Open Connect",
                    "Transcoding": "Media Service",
                    "Load Balancer": "AWS ALB"
                }
            },
            dataFlow: {
                browse: "User -> Content Service -> Database",
                watch: "User -> CDN -> Stream",
                recommendations: "User -> Recommendation Service -> ML Models"
            },
            estimation: {
                users: "200M+",
                content: "17K+ titles",
                dailyStreaming: "200M+ hours",
                qps: "100K+"
            }
        };
    }
    
    // ============================================
    // 4. Amazon (E-Commerce)
    // ============================================
    static amazon() {
        return {
            requirements: [
                "Product catalog",
                "Search products",
                "Shopping cart",
                "Order placement",
                "Payment processing",
                "Order tracking",
                "Product reviews",
                "Recommendations"
            ],
            components: {
                services: [
                    "Product Service",
                    "Search Service",
                    "Cart Service",
                    "Order Service",
                    "Payment Service",
                    "Inventory Service",
                    "Recommendation Service",
                    "Review Service"
                ],
                database: {
                    primary: "Aurora PostgreSQL",
                    cache: "Redis",
                    search: "Elasticsearch",
                    catalog: "DynamoDB"
                },
                infrastructure: {
                    "Message Queue": "SQS",
                    "Load Balancer": "AWS ALB",
                    "CDN": "CloudFront"
                }
            },
            dataFlow: {
                browse: "User -> Search Service -> Elasticsearch",
                checkout: "User -> Cart Service -> Order Service -> Payment Service -> Inventory Service",
                recommendations: "User -> Recommendation Service -> ML Models"
            },
            estimation: {
                products: "500M+",
                dailyOrders: "10M+",
                users: "300M+",
                qps: "500K+"
            }
        };
    }
    
    // ============================================
    // 5. Slack (Messaging)
    // ============================================
    static slack() {
        return {
            requirements: [
                "Channels",
                "Direct messages",
                "File sharing",
                "Threads",
                "Search",
                "Notifications",
                "User presence"
            ],
            components: {
                services: [
                    "Message Service",
                    "Channel Service",
                    "User Service",
                    "Search Service",
                    "Notification Service",
                    "File Service"
                ],
                database: {
                    primary: "PostgreSQL",
                    cache: "Redis",
                    search: "Elasticsearch"
                },
                infrastructure: {
                    "WebSocket": "Real-time messaging",
                    "Message Queue": "RabbitMQ",
                    "CDN": "File delivery"
                }
            },
            dataFlow: {
                sendMessage: "User -> Message Service -> Channel -> WebSocket -> Receiver",
                search: "User -> Search Service -> Elasticsearch",
                fileUpload: "User -> File Service -> S3 -> CDN"
            },
            estimation: {
                users: "10M+",
                messagesPerDay: "1B+",
                filesPerDay: "100K+",
                concurrent: "10M+"
            }
        };
    }
}

// ============================================
// Comparison Table
// ============================================
const comparisonTable = {
    twitter: {
        type: "Social Media",
        scale: "200M DAU",
        db: "PostgreSQL + Redis + Elasticsearch",
        keyChallenge: "Timeline generation"
    },
    uber: {
        type: "Ride Hailing",
        scale: "10M DAU",
        db: "PostgreSQL + PostGIS + Redis",
        keyChallenge: "Real-time matching"
    },
    netflix: {
        type: "Video Streaming",
        scale: "200M users",
        db: "Cassandra + Redis",
        keyChallenge: "Content delivery"
    },
    amazon: {
        type: "E-Commerce",
        scale: "300M users",
        db: "Aurora + DynamoDB + Redis",
        keyChallenge: "Inventory management"
    },
    slack: {
        type: "Messaging",
        scale: "10M users",
        db: "PostgreSQL + Redis",
        keyChallenge: "Real-time messaging"
    }
};

module.exports = {
    SystemDesignExamples,
    comparisonTable
};`,
      language: "javascript"
    }
  ]
};