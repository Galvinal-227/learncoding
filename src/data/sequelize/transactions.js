export const chapter = {
  slug: "transactions",
  title: "Transactions",
  description: "Menggunakan transaksi di Sequelize untuk atomic operations.",
  icon: "SiSequelize",
  color: "#52B0E7",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["sequelize-introduction", "sequelize-queries"],
  tags: ["sequelize", "transactions", "atomic", "rollback"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Transactions?

Transactions adalah mekanisme untuk menjalankan multiple operasi database sebagai satu unit atomic. Jika salah satu operasi gagal, semua operasi akan di-rollback.

## Basic Transaction

\`\`\`javascript
const { sequelize } = require('./models');

// Auto-commit transaction
const result = await sequelize.transaction(async (t) => {
    // Create user
    const user = await User.create({
        name: 'John Doe',
        email: 'john@example.com'
    }, { transaction: t });
    
    // Create profile
    const profile = await Profile.create({
        userId: user.id,
        bio: 'Developer'
    }, { transaction: t });
    
    // Create settings
    const settings = await Settings.create({
        userId: user.id,
        theme: 'dark'
    }, { transaction: t });
    
    return { user, profile, settings };
});
\`\`\`

## Manual Transaction Control

\`\`\`javascript
const t = await sequelize.transaction();

try {
    // Operation 1
    const user = await User.create({
        name: 'John Doe',
        email: 'john@example.com'
    }, { transaction: t });
    
    // Operation 2
    const profile = await Profile.create({
        userId: user.id,
        bio: 'Developer'
    }, { transaction: t });
    
    // Operation 3
    const settings = await Settings.create({
        userId: user.id,
        theme: 'dark'
    }, { transaction: t });
    
    // Commit transaction
    await t.commit();
    
    return { user, profile, settings };
} catch (error) {
    // Rollback transaction
    await t.rollback();
    throw error;
}
\`\`\`

## Advanced Transaction Examples

### 1. Money Transfer
\`\`\`javascript
async function transferMoney(fromUserId, toUserId, amount) {
    const t = await sequelize.transaction();
    
    try {
        // Check sender balance
        const sender = await User.findByPk(fromUserId, {
            attributes: ['id', 'balance'],
            transaction: t
        });
        
        if (!sender || sender.balance < amount) {
            throw new Error('Insufficient balance');
        }
        
        // Deduct from sender
        await User.decrement('balance', {
            by: amount,
            where: { id: fromUserId },
            transaction: t
        });
        
        // Add to receiver
        await User.increment('balance', {
            by: amount,
            where: { id: toUserId },
            transaction: t
        });
        
        // Create transaction record
        const transfer = await Transfer.create({
            fromUserId,
            toUserId,
            amount,
            status: 'completed'
        }, { transaction: t });
        
        // Update balance history
        await BalanceHistory.create({
            userId: fromUserId,
            type: 'debit',
            amount,
            description: \`Transfer to \${toUserId}\`
        }, { transaction: t });
        
        await BalanceHistory.create({
            userId: toUserId,
            type: 'credit',
            amount,
            description: \`Transfer from \${fromUserId}\`
        }, { transaction: t });
        
        await t.commit();
        return transfer;
    } catch (error) {
        await t.rollback();
        throw error;
    }
}
\`\`\`

### 2. Order Processing
\`\`\`javascript
async function processOrder(orderId) {
    const t = await sequelize.transaction({
        isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.REPEATABLE_READ
    });
    
    try {
        // Get order with lock
        const order = await Order.findByPk(orderId, {
            include: [{
                model: OrderItem,
                as: 'items'
            }],
            lock: true, // Row-level lock
            transaction: t
        });
        
        if (!order) {
            throw new Error('Order not found');
        }
        
        if (order.status !== 'pending') {
            throw new Error('Order already processed');
        }
        
        // Check inventory for each item
        for (const item of order.items) {
            const product = await Product.findByPk(item.productId, {
                lock: true,
                transaction: t
            });
            
            if (product.stock < item.quantity) {
                throw new Error(\`Insufficient stock for \${product.name}\`);
            }
            
            // Update stock
            await Product.decrement('stock', {
                by: item.quantity,
                where: { id: product.id },
                transaction: t
            });
        }
        
        // Update order status
        order.status = 'processing';
        order.processedAt = new Date();
        await order.save({ transaction: t });
        
        // Create invoice
        const invoice = await Invoice.create({
            orderId: order.id,
            amount: order.total,
            status: 'pending'
        }, { transaction: t });
        
        // Send notification
        await Notification.create({
            userId: order.userId,
            type: 'order_processing',
            data: { orderId: order.id }
        }, { transaction: t });
        
        await t.commit();
        return { order, invoice };
    } catch (error) {
        await t.rollback();
        throw error;
    }
}
\`\`\`

### 3. Bulk Operations
\`\`\`javascript
async function bulkUpdateUsers(userIds, data) {
    const t = await sequelize.transaction();
    
    try {
        const results = [];
        
        for (const id of userIds) {
            const user = await User.findByPk(id, {
                transaction: t
            });
            
            if (!user) {
                throw new Error(\`User \${id} not found\`);
            }
            
            // Update user
            Object.assign(user, data);
            await user.save({ transaction: t });
            
            // Log update
            await AuditLog.create({
                userId: id,
                action: 'bulk_update',
                data,
                timestamp: new Date()
            }, { transaction: t });
            
            results.push(user);
        }
        
        await t.commit();
        return results;
    } catch (error) {
        await t.rollback();
        throw error;
    }
}
\`\`\`

## Isolation Levels

\`\`\`javascript
const { Transaction } = require('sequelize');

// Available isolation levels
Transaction.ISOLATION_LEVELS = {
    READ_UNCOMMITTED: 'READ UNCOMMITTED',
    READ_COMMITTED: 'READ COMMITTED',
    REPEATABLE_READ: 'REPEATABLE READ',
    SERIALIZABLE: 'SERIALIZABLE'
};

// Usage
const t = await sequelize.transaction({
    isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE
});
\`\`\`

## Transaction Options

\`\`\`javascript
const t = await sequelize.transaction({
    // Isolation level
    isolationLevel: Transaction.ISOLATION_LEVELS.REPEATABLE_READ,
    
    // Defer constraints (PostgreSQL)
    deferrable: 'DEFERRED',
    
    // Logging
    logging: true,
    
    // Parent transaction
    transaction: parentTransaction
});
\`\`\`

## Nested Transactions

\`\`\`javascript
async function nestedTransaction() {
    const t1 = await sequelize.transaction();
    
    try {
        // Outer transaction
        const user = await User.create({
            name: 'John Doe'
        }, { transaction: t1 });
        
        // Inner transaction (savepoint)
        try {
            const t2 = await sequelize.transaction({
                transaction: t1 // Use parent transaction
            });
            
            // Inner operations
            await Profile.create({
                userId: user.id,
                bio: 'Developer'
            }, { transaction: t2 });
            
            await t2.commit();
        } catch (innerError) {
            // Inner rollback only
            await t2.rollback();
            throw innerError;
        }
        
        // Continue outer transaction
        await Settings.create({
            userId: user.id,
            theme: 'dark'
        }, { transaction: t1 });
        
        await t1.commit();
    } catch (error) {
        await t1.rollback();
        throw error;
    }
}
\`\`\`

## Best Practices

1. **Keep transactions short** - Long transactions lock resources
2. **Use proper isolation levels** - Based on your needs
3. **Handle errors properly** - Always catch and rollback
4. **Use lock option** - For race conditions
5. **Avoid nested transactions** - Unless necessary
6. **Monitor transaction performance**
7. **Use auto-commit for simple operations**
8. **Test transaction failure scenarios**
9. **Log transaction start/end**
10. **Use timeout for long transactions**
  `,
  quiz: [
    {
      question: "Method untuk rollback transaction adalah?",
      options: [
        "t.rollback()",
        "t.undo()",
        "t.revert()",
        "t.cancel()"
      ],
      correctAnswer: 0
    },
    {
      question: "Isolation level paling ketat adalah?",
      options: [
        "READ UNCOMMITTED",
        "READ COMMITTED",
        "REPEATABLE READ",
        "SERIALIZABLE"
      ],
      correctAnswer: 3
    },
    {
      question: "Parameter untuk row-level lock di Sequelize adalah?",
      options: [
        "lock: true",
        "rowLock: true",
        "forUpdate: true",
        "lockRow: true"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Transaction System",
      code: `// transactions.js - Complete transaction management

const { sequelize, Transaction } = require('./models');
const { logger } = require('../utils/logger');

class TransactionManager {
    constructor(options = {}) {
        this.options = {
            isolationLevel: options.isolationLevel || Transaction.ISOLATION_LEVELS.REPEATABLE_READ,
            logging: options.logging || false,
            timeout: options.timeout || 30000,
            ...options
        };
    }
    
    // 1. Execute with transaction
    async execute(callback) {
        const t = await sequelize.transaction(this.options);
        const startTime = Date.now();
        
        try {
            logger.debug('Transaction started');
            const result = await callback(t);
            await t.commit();
            
            const duration = Date.now() - startTime;
            logger.debug(\`Transaction committed in \${duration}ms\`);
            
            return result;
        } catch (error) {
            await t.rollback();
            
            const duration = Date.now() - startTime;
            logger.error(\`Transaction rolled back in \${duration}ms: \${error.message}\`);
            
            throw error;
        }
    }
    
    // 2. Transfer money
    async transferMoney(fromUserId, toUserId, amount, description = 'Transfer') {
        return this.execute(async (t) => {
            // Validate users
            const [sender, receiver] = await Promise.all([
                User.findByPk(fromUserId, { 
                    attributes: ['id', 'balance'],
                    lock: true,
                    transaction: t 
                }),
                User.findByPk(toUserId, { 
                    attributes: ['id', 'balance'],
                    lock: true,
                    transaction: t 
                })
            ]);
            
            if (!sender) throw new Error('Sender not found');
            if (!receiver) throw new Error('Receiver not found');
            
            if (sender.balance < amount) {
                throw new Error('Insufficient balance');
            }
            
            // Update balances
            await User.decrement('balance', {
                by: amount,
                where: { id: fromUserId },
                transaction: t
            });
            
            await User.increment('balance', {
                by: amount,
                where: { id: toUserId },
                transaction: t
            });
            
            // Create transaction record
            const transfer = await Transfer.create({
                fromUserId,
                toUserId,
                amount,
                description,
                status: 'completed'
            }, { transaction: t });
            
            // Create balance history
            await BalanceHistory.bulkCreate([
                {
                    userId: fromUserId,
                    type: 'debit',
                    amount,
                    description: \`Transfer to \${toUserId}\`,
                    balanceAfter: sender.balance - amount
                },
                {
                    userId: toUserId,
                    type: 'credit',
                    amount,
                    description: \`Transfer from \${fromUserId}\`,
                    balanceAfter: receiver.balance + amount
                }
            ], { transaction: t });
            
            return transfer;
        });
    }
    
    // 3. Create order
    async createOrder(userId, items, shippingAddress) {
        return this.execute(async (t) => {
            // Calculate total
            let total = 0;
            const orderItems = [];
            
            for (const item of items) {
                const product = await Product.findByPk(item.productId, {
                    lock: true,
                    transaction: t
                });
                
                if (!product) {
                    throw new Error(\`Product \${item.productId} not found\`);
                }
                
                if (product.stock < item.quantity) {
                    throw new Error(\`Insufficient stock for \${product.name}\`);
                }
                
                const subtotal = product.price * item.quantity;
                total += subtotal;
                
                orderItems.push({
                    productId: product.id,
                    quantity: item.quantity,
                    price: product.price,
                    subtotal
                });
                
                // Update stock
                await Product.decrement('stock', {
                    by: item.quantity,
                    where: { id: product.id },
                    transaction: t
                });
            }
            
            // Create order
            const order = await Order.create({
                userId,
                total,
                status: 'pending',
                shippingAddress
            }, { transaction: t });
            
            // Create order items
            await OrderItem.bulkCreate(
                orderItems.map(item => ({
                    ...item,
                    orderId: order.id
                })),
                { transaction: t }
            );
            
            // Reserve inventory
            await InventoryReservation.create({
                orderId: order.id,
                items: orderItems,
                expiresAt: new Date(Date.now() + 15 * 60 * 1000) // 15 minutes
            }, { transaction: t });
            
            return order;
        });
    }
    
    // 4. Bulk update with transaction
    async bulkUpdate(model, where, data) {
        return this.execute(async (t) => {
            const [updatedCount] = await model.update(data, {
                where,
                transaction: t,
                returning: true
            });
            
            // Log changes
            await AuditLog.create({
                action: 'bulk_update',
                model: model.name,
                where,
                data,
                count: updatedCount,
                timestamp: new Date()
            }, { transaction: t });
            
            return updatedCount;
        });
    }
    
    // 5. Soft delete with cascade
    async softDeleteUser(userId) {
        return this.execute(async (t) => {
            // Get user
            const user = await User.findByPk(userId, {
                transaction: t
            });
            
            if (!user) throw new Error('User not found');
            
            // Soft delete user
            await user.destroy({ transaction: t });
            
            // Soft delete related data
            await Post.update(
                { deletedAt: new Date() },
                { 
                    where: { userId },
                    transaction: t,
                    paranoid: false
                }
            );
            
            await Comment.update(
                { deletedAt: new Date() },
                { 
                    where: { userId },
                    transaction: t,
                    paranoid: false
                }
            );
            
            // Update audit log
            await AuditLog.update(
                { deletedAt: new Date() },
                { 
                    where: { userId },
                    transaction: t
                }
            );
            
            return user;
        });
    }
    
    // 6. Retry with transaction
    async executeWithRetry(callback, maxRetries = 3) {
        let lastError;
        
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                return await this.execute(callback);
            } catch (error) {
                lastError = error;
                
                if (error.name === 'SequelizeDeadlockError' || 
                    error.name === 'SequelizeTimeoutError') {
                    logger.warn(\`Transaction attempt \${attempt} failed: \${error.message}\`);
                    
                    if (attempt < maxRetries) {
                        // Exponential backoff
                        await new Promise(resolve => 
                            setTimeout(resolve, Math.pow(2, attempt) * 1000)
                        );
                        continue;
                    }
                }
                
                throw error;
            }
        }
        
        throw lastError;
    }
    
    // 7. Savepoint (nested transaction)
    async executeWithSavepoint(callback, savepointName = 'SP1') {
        const t = await sequelize.transaction(this.options);
        
        try {
            const result = await callback(t);
            await t.commit();
            return result;
        } catch (error) {
            // Check if error is from inner transaction
            if (error.savepoint) {
                await t.rollback({ savepoint: error.savepoint });
            } else {
                await t.rollback();
            }
            throw error;
        }
    }
}

// Usage Examples
const transactionManager = new TransactionManager({
    isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE,
    logging: process.env.NODE_ENV === 'development',
    timeout: 30000
});

// Example 1: Transfer money
try {
    const transfer = await transactionManager.transferMoney(1, 2, 100);
    console.log('Transfer completed:', transfer);
} catch (error) {
    console.error('Transfer failed:', error.message);
}

// Example 2: Create order
try {
    const order = await transactionManager.createOrder(1, [
        { productId: 1, quantity: 2 },
        { productId: 2, quantity: 1 }
    ], 'Jakarta, Indonesia');
    console.log('Order created:', order);
} catch (error) {
    console.error('Order failed:', error.message);
}

// Example 3: Retry on deadlock
try {
    const result = await transactionManager.executeWithRetry(async (t) => {
        // Critical operation
        return await processCriticalData(t);
    }, 3);
    console.log('Operation completed:', result);
} catch (error) {
    console.error('Operation failed after retries:', error.message);
}

module.exports = transactionManager;`,
      language: "javascript"
    }
  ]
};