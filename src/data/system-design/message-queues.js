export const chapter = {
  slug: "message-queues",
  title: "Message Queues",
  description: "Menggunakan message queues untuk komunikasi asynchronous antar service.",
  icon: "SiSystem",
  color: "#6C63FF",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["system-design-introduction"],
  tags: ["system-design", "message-queue", "rabbitmq", "kafka"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Message Queue?

Message queue adalah sistem untuk komunikasi asynchronous antara service melalui pesan.

## Use Cases

### 1. Decoupling Services
\`\`\`
Order Service → Queue → Email Service
Order Service → Queue → SMS Service
Order Service → Queue → Analytics Service
\`\`\`

### 2. Load Leveling
\`\`\`
High traffic → Queue → Process at own pace
\`\`\`

### 3. Async Processing
\`\`\`
User uploads image → Queue → Process image
\`\`\`

## RabbitMQ

### Basic Setup
\`\`\`javascript
const amqp = require('amqplib');

// Connection
const connection = await amqp.connect('amqp://localhost');
const channel = await connection.createChannel();

// Create queue
const queue = 'task_queue';
await channel.assertQueue(queue, { durable: true });

// Send message
channel.sendToQueue(queue, Buffer.from('Hello World'), {
    persistent: true
});

// Receive message
channel.consume(queue, (msg) => {
    console.log(msg.content.toString());
    channel.ack(msg);
}, { noAck: false });
\`\`\`

### Exchange Types
\`\`\`
Direct: Route to specific queue
Fanout: Broadcast to all queues
Topic: Route based on pattern
Headers: Route based on headers
\`\`\`

## Apache Kafka

### Producer
\`\`\`javascript
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();

await producer.connect();
await producer.send({
    topic: 'orders',
    messages: [
        { key: 'order-1', value: 'Order created' }
    ]
});
await producer.disconnect();
\`\`\`

### Consumer
\`\`\`javascript
const consumer = kafka.consumer({
    groupId: 'order-group'
});

await consumer.connect();
await consumer.subscribe({
    topic: 'orders',
    fromBeginning: false
});

await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log({
            key: message.key.toString(),
            value: message.value.toString()
        });
    }
});
\`\`\`

## SQS (AWS)

### Send Message
\`\`\`javascript
const AWS = require('aws-sdk');
const sqs = new AWS.SQS({ region: 'us-east-1' });

await sqs.sendMessage({
    QueueUrl: 'https://sqs.us-east-1.amazonaws.com/123/queue',
    MessageBody: JSON.stringify({ orderId: '123' }),
    DelaySeconds: 0
}).promise();
\`\`\`

### Receive Message
\`\`\`javascript
const response = await sqs.receiveMessage({
    QueueUrl: 'https://sqs.us-east-1.amazonaws.com/123/queue',
    MaxNumberOfMessages: 10,
    WaitTimeSeconds: 20
}).promise();

for (const message of response.Messages || []) {
    console.log(message.Body);
    await sqs.deleteMessage({
        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/123/queue',
        ReceiptHandle: message.ReceiptHandle
    }).promise();
}
\`\`\`

## Comparison

| Feature | RabbitMQ | Kafka | SQS |
|---------|----------|-------|-----|
| Model | Queue | Log | Queue |
| Persistence | Configurable | Yes | Yes |
| Ordering | Per queue | Per partition | FIFO |
| Performance | Good | Great | Good |
| Complexity | Moderate | High | Low |

## Best Practices

1. **Use dead letter queues** for failed messages
2. **Idempotent consumers** to handle duplicates
3. **Set appropriate TTL** for messages
4. **Monitor queue depth** for alerts
5. **Use message versioning** for schema evolution
6. **Batch processing** for efficiency
7. **Use message compression** for large payloads
8. **Implement retry with backoff**
9. **Use tracing** for debugging
10. **Secure queues** with authentication
  `,
  quiz: [
    {
      question: "RabbitMQ model pertukaran pesan adalah?",
      options: [
        "Queue",
        "Log",
        "Stream",
        "Topic"
      ],
      correctAnswer: 0
    },
    {
      question: "Kafka model penyimpanan adalah?",
      options: [
        "Queue",
        "Log",
        "Database",
        "Cache"
      ],
      correctAnswer: 1
    },
    {
      question: "AWS SQS adalah?",
      options: [
        "Managed RabbitMQ",
        "Managed Queue Service",
        "Managed Kafka",
        "Managed Database"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Message Queue System",
      code: `// ============================================
// 1. RabbitMQ Implementation
// ============================================
const amqp = require('amqplib');

class RabbitMQManager {
    constructor(config) {
        this.url = config.url || 'amqp://localhost';
        this.connection = null;
        this.channel = null;
    }
    
    async connect() {
        this.connection = await amqp.connect(this.url);
        this.channel = await this.connection.createChannel();
        return this;
    }
    
    // ============ QUEUE OPERATIONS ============
    async createQueue(queue, options = {}) {
        await this.channel.assertQueue(queue, {
            durable: options.durable !== false,
            exclusive: options.exclusive || false,
            autoDelete: options.autoDelete || false,
            arguments: options.arguments || {}
        });
    }
    
    async publish(queue, message, options = {}) {
        const content = typeof message === 'string' 
            ? Buffer.from(message)
            : Buffer.from(JSON.stringify(message));
        
        this.channel.sendToQueue(queue, content, {
            persistent: options.persistent !== false,
            expiration: options.expiration,
            priority: options.priority,
            ...options
        });
    }
    
    async consume(queue, callback, options = {}) {
        await this.channel.consume(queue, async (msg) => {
            if (!msg) return;
            
            try {
                const content = msg.content.toString();
                const data = this.parseMessage(content);
                await callback(data, msg);
                this.channel.ack(msg);
            } catch (error) {
                console.error('Error processing message:', error);
                
                if (options.requeue !== false) {
                    this.channel.nack(msg, false, true);
                } else {
                    // Send to dead letter
                    if (options.deadLetterQueue) {
                        await this.publish(options.deadLetterQueue, msg.content);
                    }
                    this.channel.ack(msg);
                }
            }
        }, {
            noAck: options.noAck || false
        });
    }
    
    parseMessage(content) {
        try {
            return JSON.parse(content);
        } catch {
            return content;
        }
    }
    
    // ============ EXCHANGES ============
    async createExchange(exchange, type = 'direct', options = {}) {
        await this.channel.assertExchange(exchange, type, {
            durable: options.durable !== false,
            autoDelete: options.autoDelete || false,
            ...options
        });
    }
    
    async bindQueue(queue, exchange, routingKey = '') {
        await this.channel.bindQueue(queue, exchange, routingKey);
    }
    
    async publishToExchange(exchange, routingKey, message, options = {}) {
        const content = typeof message === 'string'
            ? Buffer.from(message)
            : Buffer.from(JSON.stringify(message));
        
        this.channel.publish(exchange, routingKey, content, {
            persistent: options.persistent !== false,
            ...options
        });
    }
    
    // ============ CLOSE ============
    async close() {
        await this.channel.close();
        await this.connection.close();
    }
}

// ============================================
// 2. Kafka Implementation
// ============================================
const { Kafka } = require('kafkajs');

class KafkaManager {
    constructor(config) {
        this.kafka = new Kafka({
            clientId: config.clientId || 'my-app',
            brokers: config.brokers || ['localhost:9092'],
            retry: config.retry || { retries: 3 }
        });
        this.producer = null;
        this.consumer = null;
    }
    
    async connect() {
        this.producer = this.kafka.producer();
        await this.producer.connect();
        return this;
    }
    
    // ============ PRODUCER ============
    async send(topic, messages, options = {}) {
        const records = messages.map(msg => ({
            key: msg.key || undefined,
            value: typeof msg.value === 'string' 
                ? msg.value 
                : JSON.stringify(msg.value),
            partition: msg.partition || options.partition || undefined,
            timestamp: msg.timestamp || undefined
        }));
        
        await this.producer.send({
            topic,
            messages: records,
            ...options
        });
    }
    
    // ============ CONSUMER ============
    async subscribe(groupId, topics, callback, options = {}) {
        this.consumer = this.kafka.consumer({
            groupId,
            ...options
        });
        
        await this.consumer.connect();
        
        if (typeof topics === 'string') {
            topics = [topics];
        }
        
        for (const topic of topics) {
            await this.consumer.subscribe({
                topic,
                fromBeginning: options.fromBeginning || false
            });
        }
        
        await this.consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                try {
                    const value = message.value.toString();
                    const data = this.parseMessage(value);
                    await callback(data, { topic, partition, message });
                } catch (error) {
                    console.error('Error processing message:', error);
                }
            }
        });
    }
    
    parseMessage(content) {
        try {
            return JSON.parse(content);
        } catch {
            return content;
        }
    }
    
    // ============ ADMIN ============
    async createTopic(topic, partitions = 3, replicationFactor = 1) {
        const admin = this.kafka.admin();
        await admin.connect();
        
        await admin.createTopics({
            topics: [{
                topic,
                numPartitions: partitions,
                replicationFactor
            }]
        });
        
        await admin.disconnect();
    }
    
    // ============ CLOSE ============
    async close() {
        if (this.producer) await this.producer.disconnect();
        if (this.consumer) await this.consumer.disconnect();
    }
}

// ============================================
// 3. Message Queue Pattern Examples
// ============================================

// Example: Order Processing Pipeline
class OrderProcessor {
    constructor() {
        this.rabbitmq = new RabbitMQManager({ url: 'amqp://localhost' });
        this.queueName = 'orders';
        this.dlqName = 'orders_dlq';
    }
    
    async init() {
        await this.rabbitmq.connect();
        await this.rabbitmq.createQueue(this.queueName, { durable: true });
        await this.rabbitmq.createQueue(this.dlqName, { durable: true });
    }
    
    // Send order to queue
    async processOrder(order) {
        await this.rabbitmq.publish(this.queueName, order, {
            persistent: true,
            expiration: '3600000' // 1 hour TTL
        });
        console.log('Order sent to queue:', order.id);
    }
    
    // Consume orders
    async startConsumer() {
        await this.rabbitmq.consume(this.queueName, async (order, msg) => {
            console.log('Processing order:', order.id);
            
            // Simulate processing
            if (order.amount > 10000) {
                throw new Error('Order amount exceeds limit');
            }
            
            console.log('Order processed successfully:', order.id);
        }, {
            requeue: false,
            deadLetterQueue: this.dlqName
        });
    }
}

// ============================================
// 4. Usage Example
// ============================================
async function main() {
    // RabbitMQ
    const rabbit = new RabbitMQManager({ url: 'amqp://localhost' });
    await rabbit.connect();
    
    // Create queue
    await rabbit.createQueue('test-queue');
    
    // Publish
    await rabbit.publish('test-queue', { message: 'Hello World!' });
    
    // Consume
    await rabbit.consume('test-queue', async (data) => {
        console.log('Received:', data);
    });
    
    // Kafka
    const kafka = new KafkaManager({
        brokers: ['localhost:9092'],
        clientId: 'test-app'
    });
    
    await kafka.connect();
    await kafka.createTopic('test-topic', 3);
    
    // Send messages
    await kafka.send('test-topic', [
        { key: '1', value: { message: 'Hello' } },
        { key: '2', value: { message: 'World' } }
    ]);
    
    // Consume messages
    await kafka.subscribe('test-group', 'test-topic', async (data) => {
        console.log('Kafka received:', data);
    });
    
    // Order Processing Example
    const processor = new OrderProcessor();
    await processor.init();
    
    // Add orders
    await processor.processOrder({ id: 1, amount: 100 });
    await processor.processOrder({ id: 2, amount: 200 });
    await processor.processOrder({ id: 3, amount: 15000 });
    
    // Start consumer
    await processor.startConsumer();
}

// Run
main().catch(console.error);`,
      language: "javascript"
    }
  ]
};