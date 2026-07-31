export const chapter = {
  slug: "database-design",
  title: "Database Design",
  description: "Mendesain database untuk sistem yang scalable dan performant.",
  icon: "SiSystem",
  color: "#6C63FF",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["system-design-introduction"],
  tags: ["system-design", "database", "sql", "nosql"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## SQL vs NoSQL

| SQL | NoSQL |
|-----|-------|
| Structured | Unstructured |
| ACID | BASE |
| Vertical scaling | Horizontal scaling |
| Fixed schema | Dynamic schema |
| Better for complex queries | Better for simple queries |
| Strong consistency | Eventual consistency |

## Database Selection

### SQL (PostgreSQL, MySQL)
- User data
- Transactions
- Reports
- Complex queries

### NoSQL (MongoDB, Cassandra)
- High write load
- Large scale
- Dynamic schema
- Simple queries

### Cache (Redis)
- Session storage
- Caching
- Rate limiting
- Real-time data

### Search (Elasticsearch)
- Full-text search
- Log analytics
- Product search

## Schema Design

### User Service
\`\`\`sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);
\`\`\`

### Product Service
\`\`\`sql
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    stock INTEGER DEFAULT 0,
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_products_name ON products(name);
CREATE INDEX idx_products_category ON products(category);
\`\`\`

### Order Service
\`\`\`sql
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    total DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    payment_id UUID,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id),
    product_id UUID REFERENCES products(id),
    quantity INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL
);
\`\`\`

## Indexing Strategy

### Primary Keys
- Use UUID for distributed systems
- Auto-increment for simple systems

### Secondary Indexes
\`\`\`sql
-- Frequent queries
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);

-- Composite indexes
CREATE INDEX idx_orders_user_status ON orders(user_id, status);
\`\`\`

### Full-Text Search
\`\`\`sql
-- PostgreSQL full-text search
CREATE INDEX idx_products_search ON products
USING GIN(to_tsvector('english', name || ' ' || description));
\`\`\`

## Partitioning

### Range Partitioning
\`\`\`sql
CREATE TABLE orders_partitioned (
    id UUID,
    user_id UUID,
    created_at TIMESTAMP
) PARTITION BY RANGE (created_at);

CREATE TABLE orders_2024_q1 PARTITION OF orders_partitioned
    FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');
\`\`\`

### Hash Partitioning
\`\`\`sql
CREATE TABLE users_partitioned (
    id UUID,
    email VARCHAR(255)
) PARTITION BY HASH (id);

CREATE TABLE users_0 PARTITION OF users_partitioned
    FOR VALUES WITH (MODULUS 4, REMAINDER 0);
\`\`\`

## Sharding

### Sharding Strategy
\`\`\`
Shard Key: user_id
Shard Count: 4 shards

Shard 1: user_id % 4 = 0
Shard 2: user_id % 4 = 1
Shard 3: user_id % 4 = 2
Shard 4: user_id % 4 = 3
\`\`\`

### Shard Implementation
\`\`\`javascript
function getShard(userId) {
    const shardCount = 4;
    const shard = userId % shardCount;
    return \`db-shard-\${shard}\`;
}
\`\`\`

## Read Replicas

### Architecture
\`\`\`
┌─────────────┐
│   Master    │ (writes)
└──────┬──────┘
       │
       ├──────────┐
       │          │
┌──────▼─────┐ ┌──▼────────────┐
│  Replica 1 │ │  Replica 2    │
└────────────┘ └───────────────┘
   (reads)        (reads)
\`\`\`

### Implementation
\`\`\`javascript
const db = {
    write: createConnection('master-db'),
    read: createConnection('replica-db')
};

// Use read replica for read operations
const users = await db.read.query('SELECT * FROM users');

// Use master for write operations
await db.write.query('INSERT INTO users VALUES (...)');
\`\`\`

## Best Practices

1. **Normalize** for consistency
2. **Denormalize** for performance
3. **Use appropriate data types**
4. **Add indexes** for frequent queries
5. **Partition** large tables
6. **Use read replicas** for scalability
7. **Implement connection pooling**
8. **Monitor query performance**
9. **Backup regularly**
10. **Plan for growth**
  `,
  quiz: [
    {
      question: "Database untuk high write load adalah?",
      options: [
        "PostgreSQL",
        "MySQL",
        "Cassandra",
        "SQLite"
      ],
      correctAnswer: 2
    },
    {
      question: "Index untuk full-text search di PostgreSQL adalah?",
      options: [
        "BTREE",
        "HASH",
        "GIN",
        "GIST"
      ],
      correctAnswer: 2
    },
    {
      question: "Read replicas digunakan untuk?",
      options: [
        "Write operations",
        "Read operations",
        "Both",
        "Neither"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Database Design Example",
      code: `// database-design.js - Complete Database Design

class DatabaseDesign {
    constructor() {
        this.schemas = {};
        this.indexes = [];
        this.partitioning = {};
    }
    
    // ============ SCHEMA DESIGN ============
    addTable(name, columns, options = {}) {
        this.schemas[name] = {
            columns,
            options,
            indexes: [],
            foreignKeys: []
        };
    }
    
    addColumn(table, column) {
        this.schemas[table].columns.push(column);
    }
    
    // ============ INDEX DESIGN ============
    addIndex(table, columns, type = 'BTREE', unique = false) {
        this.schemas[table].indexes.push({
            columns,
            type,
            unique
        });
    }
    
    // ============ FOREIGN KEY DESIGN ============
    addForeignKey(table, column, refTable, refColumn, onDelete = 'CASCADE') {
        this.schemas[table].foreignKeys.push({
            column,
            refTable,
            refColumn,
            onDelete
        });
    }
    
    // ============ PARTITION DESIGN ============
    addPartition(table, type, key, intervals) {
        this.partitioning[table] = {
            type,
            key,
            intervals
        };
    }
    
    // ============ GENERATE SQL ============
    generateSQL() {
        let sql = '';
        
        // Tables
        for (const [name, schema] of Object.entries(this.schemas)) {
            sql += this.generateTableSQL(name, schema);
        }
        
        // Indexes
        for (const [table, schema] of Object.entries(this.schemas)) {
            for (const index of schema.indexes) {
                sql += this.generateIndexSQL(table, index);
            }
        }
        
        // Foreign Keys
        for (const [table, schema] of Object.entries(this.schemas)) {
            for (const fk of schema.foreignKeys) {
                sql += this.generateForeignKeySQL(table, fk);
            }
        }
        
        return sql;
    }
    
    generateTableSQL(name, schema) {
        const columns = schema.columns.map(col => {
            let def = \`    \${col.name} \${col.type}\`;
            if (col.primaryKey) def += ' PRIMARY KEY';
            if (col.unique) def += ' UNIQUE';
            if (col.notNull) def += ' NOT NULL';
            if (col.default) def += \` DEFAULT \${col.default}\`;
            return def;
        }).join(',\\n');
        
        return \`CREATE TABLE IF NOT EXISTS \${name} (\\n\${columns}\\n);\\n\\n\`;
    }
    
    generateIndexSQL(table, index) {
        const unique = index.unique ? 'UNIQUE ' : '';
        return \`CREATE \${unique}INDEX idx_\${table}_\${index.columns.join('_')} ON \${table} USING \${index.type} (\${index.columns.join(', ')});\\n\`;
    }
    
    generateForeignKeySQL(table, fk) {
        return \`ALTER TABLE \${table} ADD CONSTRAINT fk_\${table}_\${fk.column} FOREIGN KEY (\${fk.column}) REFERENCES \${fk.refTable}(\${fk.refColumn}) ON DELETE \${fk.onDelete};\\n\`;
    }
}

// ============ EXAMPLE: E-COMMERCE DATABASE ============
const ecommerceDB = new DatabaseDesign();

// Users table
ecommerceDB.addTable('users', [
    { name: 'id', type: 'UUID', primaryKey: true, default: 'gen_random_uuid()' },
    { name: 'email', type: 'VARCHAR(255)', unique: true, notNull: true },
    { name: 'password_hash', type: 'VARCHAR(255)', notNull: true },
    { name: 'name', type: 'VARCHAR(100)' },
    { name: 'status', type: 'VARCHAR(20)', default: "'active'" },
    { name: 'created_at', type: 'TIMESTAMP', default: 'NOW()' },
    { name: 'updated_at', type: 'TIMESTAMP', default: 'NOW()' }
]);

ecommerceDB.addIndex('users', ['email'], 'BTREE', true);
ecommerceDB.addIndex('users', ['status']);

// Products table
ecommerceDB.addTable('products', [
    { name: 'id', type: 'UUID', primaryKey: true, default: 'gen_random_uuid()' },
    { name: 'name', type: 'VARCHAR(255)', notNull: true },
    { name: 'description', type: 'TEXT' },
    { name: 'price', type: 'DECIMAL(10,2)', notNull: true },
    { name: 'stock', type: 'INTEGER', default: '0' },
    { name: 'category', type: 'VARCHAR(100)' },
    { name: 'created_at', type: 'TIMESTAMP', default: 'NOW()' },
    { name: 'updated_at', type: 'TIMESTAMP', default: 'NOW()' }
]);

ecommerceDB.addIndex('products', ['name'], 'GIN');
ecommerceDB.addIndex('products', ['category']);

// Orders table
ecommerceDB.addTable('orders', [
    { name: 'id', type: 'UUID', primaryKey: true, default: 'gen_random_uuid()' },
    { name: 'user_id', type: 'UUID', notNull: true },
    { name: 'total', type: 'DECIMAL(10,2)', notNull: true },
    { name: 'status', type: 'VARCHAR(50)', default: "'pending'" },
    { name: 'created_at', type: 'TIMESTAMP', default: 'NOW()' }
]);

ecommerceDB.addForeignKey('orders', 'user_id', 'users', 'id');
ecommerceDB.addIndex('orders', ['user_id']);
ecommerceDB.addIndex('orders', ['status']);
ecommerceDB.addIndex('orders', ['created_at']);

// Order Items table
ecommerceDB.addTable('order_items', [
    { name: 'id', type: 'UUID', primaryKey: true, default: 'gen_random_uuid()' },
    { name: 'order_id', type: 'UUID', notNull: true },
    { name: 'product_id', type: 'UUID', notNull: true },
    { name: 'quantity', type: 'INTEGER', notNull: true },
    { name: 'price', type: 'DECIMAL(10,2)', notNull: true }
]);

ecommerceDB.addForeignKey('order_items', 'order_id', 'orders', 'id', 'CASCADE');
ecommerceDB.addForeignKey('order_items', 'product_id', 'products', 'id');

// Reviews table
ecommerceDB.addTable('reviews', [
    { name: 'id', type: 'UUID', primaryKey: true, default: 'gen_random_uuid()' },
    { name: 'product_id', type: 'UUID', notNull: true },
    { name: 'user_id', type: 'UUID', notNull: true },
    { name: 'rating', type: 'INTEGER', notNull: true },
    { name: 'comment', type: 'TEXT' },
    { name: 'created_at', type: 'TIMESTAMP', default: 'NOW()' }
]);

ecommerceDB.addForeignKey('reviews', 'product_id', 'products', 'id', 'CASCADE');
ecommerceDB.addForeignKey('reviews', 'user_id', 'users', 'id', 'CASCADE');
ecommerceDB.addIndex('reviews', ['product_id']);
ecommerceDB.addIndex('reviews', ['user_id']);

// Generate SQL
console.log(ecommerceDB.generateSQL());

// ============ SHARDING STRATEGY ============
class ShardingStrategy {
    constructor(shardCount = 4) {
        this.shardCount = shardCount;
        this.shardMap = {};
    }
    
    getShard(key) {
        const hash = this.hash(key);
        return hash % this.shardCount;
    }
    
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = ((hash << 5) - hash) + key.charCodeAt(i);
            hash = hash & hash;
        }
        return Math.abs(hash);
    }
    
    getShardName(key) {
        return \`db-shard-\${this.getShard(key)}\`;
    }
}

// Usage
const sharding = new ShardingStrategy(4);
const userId = '550e8400-e29b-41d4-a716-446655440000';
console.log(\`User \${userId} goes to \${sharding.getShardName(userId)}\`);

// ============ REPLICA STRATEGY ============
class ReplicaStrategy {
    constructor(master, replicas = []) {
        this.master = master;
        this.replicas = replicas;
        this.currentReplica = 0;
    }
    
    getConnection(type = 'read') {
        if (type === 'write') {
            return this.master;
        }
        
        // Round-robin for reads
        const replica = this.replicas[this.currentReplica];
        this.currentReplica = (this.currentReplica + 1) % this.replicas.length;
        return replica;
    }
}

// Usage
const replicas = new ReplicaStrategy('master-db', ['replica-1', 'replica-2', 'replica-3']);
console.log('Write:', replicas.getConnection('write'));
console.log('Read 1:', replicas.getConnection('read'));
console.log('Read 2:', replicas.getConnection('read'));
console.log('Read 3:', replicas.getConnection('read'));`,
      language: "javascript"
    }
  ]
};