export const chapter = {
  slug: "hooks",
  title: "Hooks (Lifecycle Events)",
  description: "Menggunakan hooks di Sequelize untuk otomatisasi dan validasi data.",
  icon: "SiSequelize",
  color: "#52B0E7",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["sequelize-introduction", "sequelize-models"],
  tags: ["sequelize", "hooks", "lifecycle", "events"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Hooks?

Hooks adalah fungsi yang dijalankan secara otomatis pada event tertentu dalam lifecycle model Sequelize.

## Jenis Hooks

### Create Hooks
\`\`\`javascript
beforeValidate: (instance, options) => {}
afterValidate: (instance, options) => {}
beforeCreate: (instance, options) => {}
afterCreate: (instance, options) => {}
\`\`\`

### Update Hooks
\`\`\`javascript
beforeUpdate: (instance, options) => {}
afterUpdate: (instance, options) => {}
beforeSave: (instance, options) => {}
afterSave: (instance, options) => {}
\`\`\`

### Delete Hooks
\`\`\`javascript
beforeDestroy: (instance, options) => {}
afterDestroy: (instance, options) => {}
beforeBulkDestroy: (options) => {}
afterBulkDestroy: (options) => {}
\`\`\`

### Find Hooks
\`\`\`javascript
afterFind: (instances, options) => {}
\`\`\`

## Implementasi Hooks

### 1. Model Level
\`\`\`javascript
const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    hooks: {
        beforeCreate: async (user) => {
            // Hash password before creation
            user.password = await bcrypt.hash(user.password, 10);
        },
        beforeUpdate: async (user) => {
            // Hash password if changed
            if (user.changed('password')) {
                user.password = await bcrypt.hash(user.password, 10);
            }
        },
        afterCreate: async (user) => {
            // Send welcome email
            await sendWelcomeEmail(user.email);
        },
        beforeDestroy: async (user) => {
            // Cleanup related data
            await Post.destroy({ where: { userId: user.id } });
        }
    }
});
\`\`\`

### 2. Separate Hook Definition
\`\`\`javascript
const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
});

// Add hooks separately
User.addHook('beforeCreate', 'hashPassword', async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
});

User.addHook('afterCreate', 'sendWelcome', async (user) => {
    await sendWelcomeEmail(user.email);
});

User.addHook('beforeUpdate', 'checkPassword', async (user) => {
    if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
});
\`\`\`

### 3. Global Hooks
\`\`\`javascript
// Global hooks for all models
sequelize.addHook('beforeCreate', (instance) => {
    console.log(\`Creating \${instance.constructor.name}\`);
});

sequelize.addHook('afterCreate', (instance) => {
    console.log(\`Created \${instance.constructor.name} ID: \${instance.id}\`);
});
\`\`\`

## Contoh Lengkap Hooks

\`\`\`javascript
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive', 'suspended'),
        defaultValue: 'active'
    },
    lastLogin: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    hooks: {
        // Before validation
        beforeValidate: (user) => {
            // Normalize email
            if (user.email) {
                user.email = user.email.toLowerCase().trim();
            }
        },
        
        // After validation
        afterValidate: (user) => {
            console.log(\`User validation completed for \${user.email}\`);
        },
        
        // Before create
        beforeCreate: async (user) => {
            // Hash password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
            
            // Generate verification token
            user.verificationToken = crypto.randomBytes(32).toString('hex');
        },
        
        // After create
        afterCreate: async (user) => {
            // Send verification email
            await sendVerificationEmail(user.email, user.verificationToken);
            
            // Create default settings
            await Settings.create({
                userId: user.id,
                theme: 'light',
                notifications: true
            });
        },
        
        // Before update
        beforeUpdate: async (user) => {
            // Hash new password if changed
            if (user.changed('password')) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
            
            // Update timestamp
            user.updatedAt = new Date();
        },
        
        // After update
        afterUpdate: (user) => {
            console.log(\`User \${user.id} updated\`);
            
            // Log activity
            logActivity('user.update', {
                userId: user.id,
                changes: user._changed
            });
        },
        
        // Before destroy
        beforeDestroy: async (user) => {
            // Delete all related data
            await Post.destroy({ where: { userId: user.id } });
            await Comment.destroy({ where: { userId: user.id } });
            await Settings.destroy({ where: { userId: user.id } });
        },
        
        // After destroy
        afterDestroy: (user) => {
            console.log(\`User \${user.id} deleted\`);
            logActivity('user.delete', { userId: user.id });
        }
    }
});

// Instance method hooks (via addHook)
User.prototype.save = async function() {
    // Custom save logic
    return await super.save();
};

// Bulk hooks
User.bulkCreate = async function(records) {
    // Custom bulk create logic
    return await super.bulkCreate(records);
};

// Hook for find
User.addHook('afterFind', (result) => {
    if (result) {
        if (Array.isArray(result)) {
            result.forEach(user => {
                delete user.dataValues.password;
            });
        } else {
            delete result.dataValues.password;
        }
    }
});

module.exports = User;
\`\`\`

## Use Cases untuk Hooks

### 1. Password Hashing
\`\`\`javascript
beforeCreate: async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
}
\`\`\`

### 2. Audit Logging
\`\`\`javascript
afterCreate: (instance) => {
    AuditLog.create({
        model: instance.constructor.name,
        action: 'create',
        data: instance.toJSON()
    });
},
afterUpdate: (instance) => {
    AuditLog.create({
        model: instance.constructor.name,
        action: 'update',
        data: instance.toJSON(),
        changes: instance._changed
    });
}
\`\`\`

### 3. Generating Slugs
\`\`\`javascript
beforeCreate: (post) => {
    post.slug = post.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
\`\`\`

### 4. Email Notifications
\`\`\`javascript
afterCreate: async (order) => {
    await sendOrderConfirmation(order.userId, order.id);
},
afterUpdate: async (order) => {
    if (order.changed('status') && order.status === 'shipped') {
        await sendShippingNotification(order.userId, order.id);
    }
}
\`\`\`

### 5. Cache Invalidation
\`\`\`javascript
afterUpdate: (user) => {
    // Invalidate cache
    redis.del(\`user:\${user.id}\`);
    redis.del('users:all');
}
\`\`\`

## Best Practices

1. **Use async/await** for async operations
2. **Handle errors** in hooks
3. **Don't abuse hooks** (keep them simple)
4. **Use hooks for cross-cutting concerns**
5. **Avoid database queries** in before hooks
6. **Use after hooks** for side effects
7. **Test hooks** thoroughly
8. **Document hooks** with comments
9. **Use named hooks** for clarity
10. **Consider performance** impact
  `,
  quiz: [
    {
      question: "Hook yang dijalankan sebelum create adalah?",
      options: [
        "afterCreate",
        "beforeCreate",
        "preCreate",
        "onCreate"
      ],
      correctAnswer: 1
    },
    {
      question: "Method untuk mengecek apakah field berubah adalah?",
      options: [
        "isChanged",
        "changed",
        "hasChanged",
        "wasChanged"
      ],
      correctAnswer: 1
    },
    {
      question: "Hook yang dijalankan setelah find adalah?",
      options: [
        "afterFind",
        "afterFetch",
        "afterSelect",
        "afterQuery"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Hooks System",
      code: `// models/User.js - Complete hooks implementation

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { logger } = require('../utils/logger');
const { sendEmail } = require('../services/email');
const { redis } = require('../services/redis');

module.exports = (sequelize) => {
    class User extends Model {
        // Instance methods
        async comparePassword(password) {
            return await bcrypt.compare(password, this.password);
        }
        
        generateVerificationToken() {
            return crypto.randomBytes(32).toString('hex');
        }
        
        generateResetToken() {
            return crypto.randomBytes(32).toString('hex');
        }
        
        // Override toJSON
        toJSON() {
            const values = { ...this.get() };
            delete values.password;
            delete values.verificationToken;
            delete values.resetToken;
            return values;
        }
    }
    
    User.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 50]
            }
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 50]
            }
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [8, 255],
                notEmpty: true
            }
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive', 'suspended'),
            defaultValue: 'active'
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        verificationToken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        resetToken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        resetTokenExpiry: {
            type: DataTypes.DATE,
            allowNull: true
        },
        lastLogin: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true,
        paranoid: true,
        underscored: true,
        
        hooks: {
            // ======================
            // 1. Validation Hooks
            // ======================
            beforeValidate: (user) => {
                // Normalize email
                if (user.email) {
                    user.email = user.email.toLowerCase().trim();
                }
                
                // Normalize name
                if (user.firstName) {
                    user.firstName = user.firstName.trim();
                }
                if (user.lastName) {
                    user.lastName = user.lastName.trim();
                }
            },
            
            afterValidate: (user) => {
                logger.debug(\`User validation completed: \${user.email}\`);
            },
            
            // ======================
            // 2. Create Hooks
            // ======================
            beforeCreate: async (user) => {
                // Hash password
                const salt = await bcrypt.genSalt(12);
                user.password = await bcrypt.hash(user.password, salt);
                
                // Generate verification token
                user.verificationToken = user.generateVerificationToken();
                
                // Generate full name
                user.fullName = \`\${user.firstName} \${user.lastName}\`;
                
                logger.info(\`Creating user: \${user.email}\`);
            },
            
            afterCreate: async (user) => {
                try {
                    // Send verification email
                    await sendEmail({
                        to: user.email,
                        subject: 'Verify Your Email',
                        template: 'verification',
                        data: {
                            name: user.firstName,
                            token: user.verificationToken
                        }
                    });
                    
                    // Create default settings
                    await sequelize.models.Setting.create({
                        userId: user.id,
                        theme: 'light',
                        notifications: true
                    });
                    
                    // Create default profile
                    await sequelize.models.Profile.create({
                        userId: user.id,
                        displayName: user.firstName
                    });
                    
                    logger.info(\`User created successfully: \${user.id}\`);
                } catch (error) {
                    logger.error(\`After create error: \${error.message}\`);
                }
            },
            
            // ======================
            // 3. Update Hooks
            // ======================
            beforeUpdate: async (user) => {
                // Hash new password if changed
                if (user.changed('password')) {
                    const salt = await bcrypt.genSalt(12);
                    user.password = await bcrypt.hash(user.password, salt);
                }
                
                // Update full name
                if (user.changed('firstName') || user.changed('lastName')) {
                    user.fullName = \`\${user.firstName} \${user.lastName}\`;
                }
                
                logger.debug(\`Updating user: \${user.id}\`);
            },
            
            afterUpdate: async (user) => {
                try {
                    // Invalidate cache
                    await redis.del(\`user:\${user.id}\`);
                    
                    // Log changes
                    const changes = user.changed();
                    if (changes && changes.length > 0) {
                        await sequelize.models.AuditLog.create({
                            userId: user.id,
                            action: 'update',
                            changes: changes,
                            data: user.toJSON()
                        });
                    }
                    
                    // Send notification for status change
                    if (user.changed('status')) {
                        await sendEmail({
                            to: user.email,
                            subject: 'Account Status Updated',
                            template: 'status-change',
                            data: {
                                name: user.firstName,
                                status: user.status
                            }
                        });
                    }
                    
                    logger.info(\`User updated: \${user.id}\`);
                } catch (error) {
                    logger.error(\`After update error: \${error.message}\`);
                }
            },
            
            // ======================
            // 4. Destroy Hooks
            // ======================
            beforeDestroy: async (user) => {
                try {
                    // Delete all related data
                    await sequelize.models.Post.destroy({
                        where: { userId: user.id }
                    });
                    
                    await sequelize.models.Comment.destroy({
                        where: { userId: user.id }
                    });
                    
                    await sequelize.models.Setting.destroy({
                        where: { userId: user.id }
                    });
                    
                    await sequelize.models.Profile.destroy({
                        where: { userId: user.id }
                    });
                    
                    logger.info(\`User data cleaned up: \${user.id}\`);
                } catch (error) {
                    logger.error(\`Before destroy error: \${error.message}\`);
                }
            },
            
            afterDestroy: async (user) => {
                try {
                    // Invalidate cache
                    await redis.del(\`user:\${user.id}\`);
                    
                    // Send farewell email
                    await sendEmail({
                        to: user.email,
                        subject: 'Account Deleted',
                        template: 'farewell',
                        data: {
                            name: user.firstName
                        }
                    });
                    
                    logger.info(\`User deleted: \${user.id}\`);
                } catch (error) {
                    logger.error(\`After destroy error: \${error.message}\`);
                }
            },
            
            // ======================
            // 5. Find Hook
            // ======================
            afterFind: (result) => {
                if (result) {
                    // Remove sensitive data
                    const clean = (user) => {
                        if (user && user.toJSON) {
                            delete user.dataValues.password;
                            delete user.dataValues.verificationToken;
                            delete user.dataValues.resetToken;
                        }
                    };
                    
                    if (Array.isArray(result)) {
                        result.forEach(clean);
                    } else {
                        clean(result);
                    }
                }
            }
        },
        
        // ======================
        // 6. Scopes
        // ======================
        scopes: {
            active: {
                where: { status: 'active' }
            },
            verified: {
                where: { isVerified: true }
            },
            withPosts: {
                include: ['posts']
            },
            sensitive: {
                attributes: { exclude: ['password', 'resetToken', 'verificationToken'] }
            }
        }
    });
    
    // ======================
    // 7. Class Hooks (Static)
    // ======================
    User.beforeBulkCreate = async (users) => {
        for (const user of users) {
            const salt = await bcrypt.genSalt(12);
            user.password = await bcrypt.hash(user.password, salt);
        }
    };
    
    User.afterBulkCreate = async (users) => {
        for (const user of users) {
            await sendWelcomeEmail(user.email);
        }
    };
    
    return User;
};`,
      language: "javascript"
    }
  ]
};