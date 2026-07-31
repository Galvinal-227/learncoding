export const chapter = {
  slug: "models",
  title: "Models & Schema",
  description: "Membuat dan mengelola models di Sequelize dengan validasi dan konfigurasi.",
  icon: "SiSequelize",
  color: "#52B0E7",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["sequelize-introduction"],
  tags: ["sequelize", "models", "schema", "validation"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Definisi Model

Model di Sequelize merepresentasikan tabel di database. Setiap model memiliki atribut yang sesuai dengan kolom tabel.

## Data Types

\`\`\`javascript
const { DataTypes } = require('sequelize');

// String
DataTypes.STRING          // VARCHAR(255)
DataTypes.STRING(100)     // VARCHAR(100)
DataTypes.TEXT            // TEXT
DataTypes.TEXT('tiny')    // TINYTEXT

// Number
DataTypes.INTEGER         // INTEGER
DataTypes.BIGINT          // BIGINT
DataTypes.FLOAT           // FLOAT
DataTypes.DOUBLE          // DOUBLE
DataTypes.DECIMAL(10,2)   // DECIMAL(10,2)

// Boolean
DataTypes.BOOLEAN         // BOOLEAN

// Date/Time
DataTypes.DATE            // TIMESTAMP
DataTypes.DATEONLY        // DATE
DataTypes.TIME            // TIME

// UUID
DataTypes.UUID            // UUID
DataTypes.UUIDV4          // UUID (auto generate)

// JSON
DataTypes.JSON            // JSON
DataTypes.JSONB           // JSONB (PostgreSQL)

// Array
DataTypes.ARRAY(DataTypes.STRING)  // ARRAY

// Enum
DataTypes.ENUM('value1', 'value2')

// Other
DataTypes.BLOB            // BLOB
DataTypes.GEOMETRY        // GEOMETRY
DataTypes.RANGE           // RANGE
\`\`\`

## Definisi Model Lengkap

\`\`\`javascript
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    // ID
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    
    // Basic fields
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [2, 100]
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
            len: [8, 255]
        }
    },
    
    age: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0,
            max: 150,
            isInt: true
        }
    },
    
    status: {
        type: DataTypes.ENUM('active', 'inactive', 'suspended'),
        defaultValue: 'active'
    },
    
    role: {
        type: DataTypes.ENUM('user', 'admin', 'superadmin'),
        defaultValue: 'user'
    },
    
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    
    lastLogin: {
        type: DataTypes.DATE,
        allowNull: true
    },
    
    metadata: {
        type: DataTypes.JSONB,
        defaultValue: {}
    },
    
    settings: {
        type: DataTypes.JSON,
        defaultValue: {
            notifications: true,
            theme: 'light'
        }
    }
}, {
    // Model options
    tableName: 'users',
    timestamps: true,
    paranoid: true, // Soft delete
    underscored: true, // Use snake_case
    
    // Hooks
    hooks: {
        beforeCreate: (user) => {
            // Hash password
        }
    },
    
    // Indexes
    indexes: [
        {
            fields: ['email']
        },
        {
            fields: ['status']
        },
        {
            fields: ['created_at']
        }
    ],
    
    // Scopes
    scopes: {
        active: {
            where: { status: 'active' }
        },
        verified: {
            where: { isVerified: true }
        },
        withMetadata: {
            attributes: { include: ['metadata'] }
        }
    }
});

// Instance methods
User.prototype.fullName = function() {
    return this.name;
};

User.prototype.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// Class methods
User.findByEmail = async function(email) {
    return await this.findOne({ where: { email } });
};

// Using scopes
const activeUsers = await User.scope('active').findAll();
const verifiedUsers = await User.scope(['active', 'verified']).findAll();

module.exports = User;
\`\`\`

## Validations

\`\`\`javascript
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: 'Name is required'
            },
            len: {
                args: [2, 100],
                msg: 'Name must be between 2 and 100 characters'
            },
            isAlpha: {
                msg: 'Name must only contain letters'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: {
                msg: 'Invalid email format'
            },
            notEmpty: {
                msg: 'Email is required'
            },
            isUnique: async function(value) {
                const user = await User.findOne({ where: { email: value } });
                if (user) {
                    throw new Error('Email already exists');
                }
            }
        }
    },
    age: {
        type: DataTypes.INTEGER,
        validate: {
            min: {
                args: [0],
                msg: 'Age must be at least 0'
            },
            max: {
                args: [150],
                msg: 'Age must be at most 150'
            },
            isInt: {
                msg: 'Age must be an integer'
            }
        }
    },
    website: {
        type: DataTypes.STRING,
        validate: {
            isUrl: {
                msg: 'Invalid URL format'
            }
        }
    },
    phone: {
        type: DataTypes.STRING,
        validate: {
            is: {
                args: /^[0-9+()-]+$/,
                msg: 'Invalid phone number format'
            }
        }
    }
});
\`\`\`

## Getters & Setters

\`\`\`javascript
const User = sequelize.define('User', {
    fullName: {
        type: DataTypes.VIRTUAL,
        get() {
            return \`\${this.firstName} \${this.lastName}\`;
        }
    },
    
    password: {
        type: DataTypes.STRING,
        set(value) {
            // Hash password before saving
            const hashed = bcrypt.hashSync(value, 10);
            this.setDataValue('password', hashed);
        }
    },
    
    email: {
        type: DataTypes.STRING,
        set(value) {
            // Normalize email
            this.setDataValue('email', value.toLowerCase().trim());
        }
    },
    
    createdAt: {
        type: DataTypes.DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY');
        }
    }
});
\`\`\`

## Default Values

\`\`\`javascript
const Product = sequelize.define('Product', {
    // Static default
    status: {
        type: DataTypes.STRING,
        defaultValue: 'draft'
    },
    
    // Function default
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    
    // UUID default
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    
    // Dynamic default
    slug: {
        type: DataTypes.STRING,
        defaultValue: function() {
            return this.name.toLowerCase().replace(/ /g, '-');
        }
    }
});
\`\`\`

## Best Practices

1. **Use UUID** for primary keys in distributed systems
2. **Add timestamps** (createdAt, updatedAt)
3. **Use paranoid** for soft delete
4. **Add validations** for data integrity
5. **Use underscored** for database naming
6. **Create indexes** for frequently queried fields
7. **Use scopes** for common queries
8. **Add hooks** for data processing
9. **Use virtual fields** for computed values
10. **Document models** with comments

## Model Relationship Example

\`\`\`javascript
// User.js
const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
});

// Post.js
const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
});

// Comment.js
const Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT
});

// Associations
User.hasMany(Post);
User.hasMany(Comment);
Post.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(User);
Comment.belongsTo(Post);
\`\`\`
  `,
  quiz: [
    {
      question: "Data type untuk string panjang (tanpa batas) adalah?",
      options: [
        "DataTypes.STRING",
        "DataTypes.TEXT",
        "DataTypes.VARCHAR",
        "DataTypes.CHAR"
      ],
      correctAnswer: 1
    },
    {
      question: "Property untuk soft delete adalah?",
      options: [
        "timestamps: true",
        "paranoid: true",
        "softDelete: true",
        "deleted: true"
      ],
      correctAnswer: 1
    },
    {
      question: "Method untuk validasi custom di Sequelize adalah?",
      options: [
        "custom",
        "validate",
        "check",
        "verify"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete User Model",
      code: `// models/User.js
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

module.exports = (sequelize) => {
    class User extends Model {
        static associate(models) {
            // Associations
            User.hasMany(models.Post, {
                foreignKey: 'userId',
                as: 'posts'
            });
            User.hasMany(models.Comment, {
                foreignKey: 'userId',
                as: 'comments'
            });
            User.belongsToMany(models.Role, {
                through: 'UserRoles',
                as: 'roles'
            });
        }
        
        // Instance methods
        comparePassword(password) {
            return bcrypt.compareSync(password, this.password);
        }
        
        generateToken() {
            return crypto.randomBytes(32).toString('hex');
        }
        
        toJSON() {
            const values = { ...this.get() };
            delete values.password;
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
            },
            set(value) {
                this.setDataValue('email', value.toLowerCase().trim());
            }
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [8, 255],
                notEmpty: true
            },
            set(value) {
                const hash = bcrypt.hashSync(value, 10);
                this.setDataValue('password', hash);
            }
        },
        role: {
            type: DataTypes.ENUM('user', 'admin', 'superadmin'),
            defaultValue: 'user'
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
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        settings: {
            type: DataTypes.JSONB,
            defaultValue: {
                theme: 'light',
                notifications: true,
                language: 'en'
            }
        },
        metadata: {
            type: DataTypes.JSONB,
            defaultValue: {}
        },
        fullName: {
            type: DataTypes.VIRTUAL,
            get() {
                return \`\${this.firstName} \${this.lastName}\`;
            }
        }
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true,
        paranoid: true,
        underscored: true,
        
        // Indexes
        indexes: [
            {
                unique: true,
                fields: ['email']
            },
            {
                fields: ['status']
            },
            {
                fields: ['role']
            },
            {
                fields: ['created_at']
            }
        ],
        
        // Hooks
        hooks: {
            beforeCreate: (user) => {
                user.verificationToken = user.generateToken();
            },
            beforeUpdate: (user) => {
                if (user.changed('password')) {
                    user.password = user.password;
                }
            }
        },
        
        // Scopes
        scopes: {
            active: {
                where: { status: 'active' }
            },
            verified: {
                where: { isVerified: true }
            },
            admin: {
                where: { role: 'admin' }
            },
            withPosts: {
                include: ['posts']
            },
            sensitive: {
                attributes: { exclude: ['password', 'resetToken', 'verificationToken'] }
            }
        }
    });
    
    return User;
};`,
      language: "javascript"
    }
  ]
};