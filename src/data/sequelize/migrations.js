export const chapter = {
  slug: "migrations",
  title: "Migrations",
  description: "Mengelola schema database menggunakan Sequelize migrations.",
  icon: "SiSequelize",
  color: "#52B0E7",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["sequelize-introduction", "sequelize-models"],
  tags: ["sequelize", "migrations", "schema", "database"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Migrations?

Migrations adalah cara untuk mengelola perubahan schema database secara terstruktur dan version-controlled.

## Setup Sequelize CLI

\`\`\`bash
# Install CLI
npm install -g sequelize-cli

# Or install locally
npm install --save-dev sequelize-cli

# Initialize
npx sequelize-cli init

# Structure created:
# config/
#   config.json
# models/
#   index.js
# migrations/
# seeders/
\`\`\`

## Config File

\`\`\`json
{
    "development": {
        "username": "root",
        "password": "password",
        "database": "database_dev",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "logging": true
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "logging": false
    },
    "production": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "postgres",
        "logging": false,
        "dialectOptions": {
            "ssl": {
                "require": true,
                "rejectUnauthorized": false
            }
        }
    }
}
\`\`\`

## Creating Migrations

### 1. Create Table
\`\`\`bash
npx sequelize-cli migration:generate --name create-users-table
\`\`\`

\`\`\`javascript
// migrations/20240101000000-create-users-table.js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            status: {
                type: Sequelize.ENUM('active', 'inactive', 'suspended'),
                defaultValue: 'active'
            },
            isVerified: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            deletedAt: {
                type: Sequelize.DATE,
                allowNull: true
            }
        });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};
\`\`\`

### 2. Add Column
\`\`\`bash
npx sequelize-cli migration:generate --name add-phone-to-users
\`\`\`

\`\`\`javascript
// migrations/20240101000001-add-phone-to-users.js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('Users', 'phone', {
            type: Sequelize.STRING(20),
            allowNull: true,
            defaultValue: null
        });
        
        await queryInterface.addColumn('Users', 'birthDate', {
            type: Sequelize.DATEONLY,
            allowNull: true
        });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Users', 'phone');
        await queryInterface.removeColumn('Users', 'birthDate');
    }
};
\`\`\`

### 3. Modify Column
\`\`\`javascript
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('Users', 'name', {
            type: Sequelize.STRING(150),
            allowNull: false
        });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('Users', 'name', {
            type: Sequelize.STRING(100),
            allowNull: false
        });
    }
};
\`\`\`

### 4. Add Index
\`\`\`javascript
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addIndex('Users', ['email'], {
            name: 'users_email_idx',
            unique: true
        });
        
        await queryInterface.addIndex('Users', ['status', 'createdAt'], {
            name: 'users_status_created_at_idx'
        });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeIndex('Users', 'users_email_idx');
        await queryInterface.removeIndex('Users', 'users_status_created_at_idx');
    }
};
\`\`\`

### 5. Add Foreign Key
\`\`\`javascript
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('Posts', 'userId', {
            type: Sequelize.UUID,
            allowNull: false
        });
        
        await queryInterface.addConstraint('Posts', {
            fields: ['userId'],
            type: 'foreign key',
            name: 'posts_user_id_fkey',
            references: {
                table: 'Users',
                field: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('Posts', 'posts_user_id_fkey');
        await queryInterface.removeColumn('Posts', 'userId');
    }
};
\`\`\`

## Running Migrations

\`\`\`bash
# Run all pending migrations
npx sequelize-cli db:migrate

# Run to specific migration
npx sequelize-cli db:migrate --to 20240101000000-create-users-table.js

# Undo last migration
npx sequelize-cli db:migrate:undo

# Undo all migrations
npx sequelize-cli db:migrate:undo:all

# Check migration status
npx sequelize-cli db:migrate:status
\`\`\`

## Seeders

### Create Seeder
\`\`\`bash
npx sequelize-cli seed:generate --name demo-users
\`\`\`

\`\`\`javascript
// seeders/20240101000000-demo-users.js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', [
            {
                id: Sequelize.UUIDV4,
                name: 'Admin User',
                email: 'admin@example.com',
                password: '$2a$10$...', // Hashed password
                status: 'active',
                isVerified: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: Sequelize.UUIDV4,
                name: 'Regular User',
                email: 'user@example.com',
                password: '$2a$10$...',
                status: 'active',
                isVerified: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', {
            email: ['admin@example.com', 'user@example.com']
        }, {});
    }
};
\`\`\`

### Running Seeders
\`\`\`bash
# Run all seeders
npx sequelize-cli db:seed:all

# Run specific seeder
npx sequelize-cli db:seed --seed seeders/20240101000000-demo-users.js

# Undo last seeder
npx sequelize-cli db:seed:undo

# Undo all seeders
npx sequelize-cli db:seed:undo:all
\`\`\`

## Advanced Migrations

### 1. Migration with Data Transformation
\`\`\`javascript
module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Add new column
        await queryInterface.addColumn('Users', 'fullName', {
            type: Sequelize.STRING(200),
            allowNull: true
        });
        
        // Migrate data
        const users = await queryInterface.sequelize.query(
            'SELECT id, firstName, lastName FROM Users'
        );
        
        for (const user of users[0]) {
            await queryInterface.sequelize.query(
                'UPDATE Users SET fullName = ? WHERE id = ?',
                {
                    replacements: [\`\${user.firstName} \${user.lastName}\`, user.id]
                }
            );
        }
        
        // Make column required
        await queryInterface.changeColumn('Users', 'fullName', {
            type: Sequelize.STRING(200),
            allowNull: false
        });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Users', 'fullName');
    }
};
\`\`\`

### 2. Migration with Foreign Key
\`\`\`javascript
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Posts', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
            },
            title: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            userId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Posts');
    }
};
\`\`\`

### 3. Migration with Constraints
\`\`\`javascript
module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Add unique constraint
        await queryInterface.addConstraint('Users', {
            fields: ['email'],
            type: 'unique',
            name: 'users_email_unique'
        });
        
        // Add check constraint
        await queryInterface.addConstraint('Users', {
            fields: ['age'],
            type: 'check',
            name: 'users_age_check',
            where: {
                age: { [Op.gte]: 0 }
            }
        });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('Users', 'users_email_unique');
        await queryInterface.removeConstraint('Users', 'users_age_check');
    }
};
\`\`\`

## Best Practices

1. **Always write down migrations** for schema changes
2. **Test migrations** in development first
3. **Use transactions** in migrations
4. **Never modify existing migration files** after pushing
5. **Keep migrations idempotent**
6. **Document complex migrations**
7. **Use meaningful names** for migrations
8. **Backup database** before running migrations
9. **Test rollback** (down) migrations
10. **Use environment-specific configs**
11. **Version control migrations**
12. **Use seeders for test data**

## Migration Template

\`\`\`javascript
// templates/migration.js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();
        
        try {
            // Your migration operations
            await queryInterface.createTable('TableName', {
                // columns
            }, { transaction });
            
            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    },
    
    down: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();
        
        try {
            // Your rollback operations
            await queryInterface.dropTable('TableName', { transaction });
            
            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
};
\`\`\`
  `,
  quiz: [
    {
      question: "Perintah untuk create migration adalah?",
      options: [
        "migration:create",
        "migration:generate",
        "migration:new",
        "migration:make"
      ],
      correctAnswer: 1
    },
    {
      question: "Method untuk drop table di migration adalah?",
      options: [
        "dropTable",
        "deleteTable",
        "removeTable",
        "destroyTable"
      ],
      correctAnswer: 0
    },
    {
      question: "Perintah untuk run all pending migrations adalah?",
      options: [
        "db:migrate",
        "migrate:run",
        "migrate:all",
        "db:run"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Migration Setup",
      code: `// package.json scripts
{
    "scripts": {
        "migrate": "npx sequelize-cli db:migrate",
        "migrate:undo": "npx sequelize-cli db:migrate:undo",
        "migrate:undo:all": "npx sequelize-cli db:migrate:undo:all",
        "seed": "npx sequelize-cli db:seed:all",
        "seed:undo": "npx sequelize-cli db:seed:undo",
        "seed:undo:all": "npx sequelize-cli db:seed:undo:all",
        "migration:generate": "npx sequelize-cli migration:generate --name",
        "seed:generate": "npx sequelize-cli seed:generate --name"
    }
}

// .sequelizerc
const path = require('path');

module.exports = {
    'config': path.resolve('src/config', 'sequelize.js'),
    'models-path': path.resolve('src', 'models'),
    'seeders-path': path.resolve('src', 'seeders'),
    'migrations-path': path.resolve('src', 'migrations')
};

// config/sequelize.js
module.exports = {
    development: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || null,
        database: process.env.DB_NAME || 'database_dev',
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 3306,
        dialect: process.env.DB_DIALECT || 'mysql',
        logging: true,
        define: {
            underscored: true,
            timestamps: true
        }
    },
    test: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || null,
        database: process.env.DB_NAME || 'database_test',
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 3306,
        dialect: process.env.DB_DIALECT || 'mysql',
        logging: false
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT || 'postgres',
        logging: false,
        define: {
            underscored: true,
            timestamps: true
        },
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
};

// migrations/20240101000000-create-users.js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            first_name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            last_name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            phone: {
                type: Sequelize.STRING(20),
                allowNull: true
            },
            status: {
                type: Sequelize.ENUM('active', 'inactive', 'suspended'),
                defaultValue: 'active'
            },
            is_verified: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            verification_token: {
                type: Sequelize.STRING,
                allowNull: true
            },
            reset_token: {
                type: Sequelize.STRING,
                allowNull: true
            },
            reset_token_expiry: {
                type: Sequelize.DATE,
                allowNull: true
            },
            last_login: {
                type: Sequelize.DATE,
                allowNull: true
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
            },
            deleted_at: {
                type: Sequelize.DATE,
                allowNull: true
            }
        });
        
        // Add indexes
        await queryInterface.addIndex('users', ['email'], {
            name: 'users_email_idx',
            unique: true
        });
        
        await queryInterface.addIndex('users', ['status'], {
            name: 'users_status_idx'
        });
        
        await queryInterface.addIndex('users', ['created_at'], {
            name: 'users_created_at_idx'
        });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};

// migrations/20240101000001-create-posts.js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('posts', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            title: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            status: {
                type: Sequelize.ENUM('draft', 'published', 'archived'),
                defaultValue: 'draft'
            },
            user_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            published_at: {
                type: Sequelize.DATE,
                allowNull: true
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
            },
            deleted_at: {
                type: Sequelize.DATE,
                allowNull: true
            }
        });
        
        await queryInterface.addIndex('posts', ['user_id'], {
            name: 'posts_user_id_idx'
        });
        
        await queryInterface.addIndex('posts', ['status'], {
            name: 'posts_status_idx'
        });
        
        await queryInterface.addIndex('posts', ['created_at'], {
            name: 'posts_created_at_idx'
        });
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('posts');
    }
};

// seeders/20240101000000-demo-data.js
'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const password = await bcrypt.hash('password123', 10);
        
        await queryInterface.bulkInsert('users', [
            {
                id: '11111111-1111-1111-1111-111111111111',
                first_name: 'Admin',
                last_name: 'User',
                email: 'admin@example.com',
                password: password,
                status: 'active',
                is_verified: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: '22222222-2222-2222-2222-222222222222',
                first_name: 'Test',
                last_name: 'User',
                email: 'test@example.com',
                password: password,
                status: 'active',
                is_verified: true,
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {});
        
        // Insert demo posts
        await queryInterface.bulkInsert('posts', [
            {
                id: '33333333-3333-3333-3333-333333333333',
                title: 'First Post',
                content: 'This is the first post',
                status: 'published',
                user_id: '11111111-1111-1111-1111-111111111111',
                published_at: new Date(),
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: '44444444-4444-4444-4444-444444444444',
                title: 'Second Post',
                content: 'This is the second post',
                status: 'draft',
                user_id: '22222222-2222-2222-2222-222222222222',
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {});
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('posts', null, {});
        await queryInterface.bulkDelete('users', null, {});
    }
};`,
      language: "javascript"
    }
  ]
};