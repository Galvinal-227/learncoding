export const chapter = {
  slug: "queries",
  title: "Queries & CRUD",
  description: "Membuat query CRUD dan query kompleks di Sequelize.",
  icon: "SiSequelize",
  color: "#52B0E7",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["sequelize-introduction", "sequelize-models"],
  tags: ["sequelize", "queries", "crud", "where"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Create (INSERT)

\`\`\`javascript
// Create single record
const user = await User.create({
    name: 'John Doe',
    email: 'john@example.com',
    age: 25
});

// Create with specific fields
const user = await User.create({
    name: 'John Doe',
    email: 'john@example.com'
}, {
    fields: ['name', 'email'] // Only these fields
});

// Bulk create
const users = await User.bulkCreate([
    { name: 'User 1', email: 'user1@example.com' },
    { name: 'User 2', email: 'user2@example.com' },
    { name: 'User 3', email: 'user3@example.com' }
], {
    validate: true, // Run validations
    individualHooks: true // Run hooks per record
});

// Create or update (upsert)
const [user, created] = await User.upsert({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
});
\`\`\`

## Read (SELECT)

### Find All
\`\`\`javascript
// Find all users
const users = await User.findAll();

// Find with conditions
const users = await User.findAll({
    where: {
        age: 25,
        status: 'active'
    }
});

// Find with operators
const { Op } = require('sequelize');

const users = await User.findAll({
    where: {
        age: {
            [Op.gt]: 18, // > 18
            [Op.lt]: 60  // < 60
        }
    }
});

// Find with sorting and pagination
const users = await User.findAll({
    order: [
        ['name', 'ASC'],
        ['createdAt', 'DESC']
    ],
    limit: 10,
    offset: 20
});

// Find with attributes selection
const users = await User.findAll({
    attributes: ['id', 'name', 'email'],
    attributes: {
        include: [
            [sequelize.fn('COUNT', sequelize.col('posts')), 'postCount']
        ],
        exclude: ['password']
    }
});
\`\`\`

### Find One
\`\`\`javascript
// Find by primary key
const user = await User.findByPk(1);

// Find one with conditions
const user = await User.findOne({
    where: { email: 'john@example.com' }
});

// Find with sorting
const user = await User.findOne({
    where: { status: 'active' },
    order: [['createdAt', 'DESC']]
});

// Find or create
const [user, created] = await User.findOrCreate({
    where: { email: 'john@example.com' },
    defaults: {
        name: 'John Doe',
        age: 25
    }
});
\`\`\`

### Count
\`\`\`javascript
// Count all
const count = await User.count();

// Count with conditions
const count = await User.count({
    where: {
        status: 'active',
        age: { [Op.gt]: 18 }
    }
});

// Count with include
const count = await User.count({
    include: [
        { model: Post, as: 'posts' }
    ],
    distinct: true
});
\`\`\`

## Update (UPDATE)

\`\`\`javascript
// Update single record
const user = await User.findByPk(1);
user.name = 'Jane Doe';
user.age = 26;
await user.save();

// Update with where condition
await User.update(
    { status: 'inactive' },
    { where: { lastLogin: { [Op.lt]: new Date('2023-01-01') } } }
);

// Update and get updated record
const [updatedCount, [updatedUser]] = await User.update(
    { status: 'active' },
    {
        where: { id: 1 },
        returning: true // PostgreSQL
    }
);

// Increment/Decrement
await User.increment('age', {
    by: 1,
    where: { id: 1 }
});

await User.decrement('age', {
    by: 1,
    where: { id: 1 }
});
\`\`\`

## Delete (DELETE)

\`\`\`javascript
// Delete single record
const user = await User.findByPk(1);
await user.destroy();

// Delete with where condition
await User.destroy({
    where: {
        status: 'inactive',
        lastLogin: { [Op.lt]: new Date('2023-01-01') }
    }
});

// Force delete (with paranoid: true)
await user.destroy({ force: true });

// Restore soft-deleted
await User.restore({
    where: { id: 1 }
});

// Truncate table
await User.truncate();
\`\`\`

## Operators

\`\`\`javascript
const { Op } = require('sequelize');

// Comparison operators
[Op.eq]: 3                  // = 3
[Op.ne]: 3                  // != 3
[Op.gt]: 3                  // > 3
[Op.gte]: 3                 // >= 3
[Op.lt]: 3                  // < 3
[Op.lte]: 3                 // <= 3

// Logical operators
[Op.and]: { a: 5, b: 6 }    // a = 5 AND b = 6
[Op.or]: [{ a: 5 }, { b: 6 }] // a = 5 OR b = 6
[Op.not]: { a: 5 }          // NOT a = 5

// Array operators
[Op.in]: [1, 2, 3]          // IN (1, 2, 3)
[Op.notIn]: [1, 2, 3]       // NOT IN (1, 2, 3)

// String operators
[Op.like]: '%john%'         // LIKE '%john%'
[Op.notLike]: '%john%'      // NOT LIKE '%john%'
[Op.startsWith]: 'John'     // LIKE 'John%'
[Op.endsWith]: 'Doe'        // LIKE '%Doe'
[Op.substring]: 'oh'        // LIKE '%oh%'

// Other operators
[Op.between]: [10, 20]      // BETWEEN 10 AND 20
[Op.notBetween]: [10, 20]   // NOT BETWEEN 10 AND 20
[Op.col]: 'columnName'      // Column reference
[Op.any]: [2, 3]            // = ANY (ARRAY)
[Op.all]: [2, 3]            // = ALL (ARRAY)
[Op.match]: Sequelize.fn('to_tsquery', 'search') // Full-text search
\`\`\`

## Complex Queries

\`\`\`javascript
// AND/OR conditions
const users = await User.findAll({
    where: {
        [Op.or]: [
            { age: { [Op.gt]: 30 } },
            { status: 'active' }
        ],
        [Op.and]: [
            { email: { [Op.ne]: null } },
            { name: { [Op.like]: '%John%' } }
        ]
    }
});

// Nested conditions
const users = await User.findAll({
    where: {
        [Op.or]: [
            { role: 'admin' },
            {
                [Op.and]: [
                    { role: 'user' },
                    { status: 'active' }
                ]
            }
        ]
    }
});

// Group by and aggregate
const results = await User.findAll({
    attributes: [
        'status',
        [sequelize.fn('COUNT', sequelize.col('id')), 'count'],
        [sequelize.fn('AVG', sequelize.col('age')), 'avgAge']
    ],
    group: ['status']
});

// Having
const results = await User.findAll({
    attributes: [
        'status',
        [sequelize.fn('COUNT', sequelize.col('id')), 'count']
    ],
    group: ['status'],
    having: {
        count: { [Op.gt]: 5 }
    }
});

// Raw query
const [results, metadata] = await sequelize.query(
    'SELECT * FROM users WHERE age > :age',
    {
        replacements: { age: 18 },
        type: sequelize.QueryTypes.SELECT
    }
);
\`\`\`

## Eager Loading with Queries

\`\`\`javascript
// Basic eager loading
const users = await User.findAll({
    include: [{
        model: Post,
        as: 'posts'
    }]
});

// Nested eager loading
const users = await User.findAll({
    include: [{
        model: Post,
        as: 'posts',
        include: [{
            model: Comment,
            as: 'comments'
        }]
    }]
});

// Filtered include
const users = await User.findAll({
    include: [{
        model: Post,
        as: 'posts',
        where: { status: 'published' },
        required: true, // INNER JOIN
        limit: 5,
        order: [['createdAt', 'DESC']]
    }]
});

// Separate: true (optimized)
const users = await User.findAll({
    include: [{
        model: Post,
        as: 'posts',
        separate: true,
        order: [['createdAt', 'DESC']],
        limit: 5
    }]
});
\`\`\`

## Scopes

\`\`\`javascript
// Define scopes
const User = sequelize.define('User', {
    // ...
}, {
    scopes: {
        active: {
            where: { status: 'active' }
        },
        admin: {
            where: { role: 'admin' }
        },
        withPosts: {
            include: ['posts']
        },
        recent: {
            order: [['createdAt', 'DESC']],
            limit: 10
        }
    }
});

// Using scopes
const users = await User.scope('active').findAll();
const admins = await User.scope(['admin', 'withPosts']).findAll();
const recentUsers = await User.scope('recent').findAll();

// Default scope
const User = sequelize.define('User', {
    // ...
}, {
    defaultScope: {
        where: { status: 'active' },
        order: [['createdAt', 'DESC']]
    }
});

// Override default scope
const allUsers = await User.scope('unscoped').findAll();
\`\`\`
  `,
  quiz: [
    {
      question: "Method untuk bulk create adalah?",
      options: [
        "createMany",
        "bulkCreate",
        "insertMany",
        "multipleCreate"
      ],
      correctAnswer: 1
    },
    {
      question: "Operator untuk LIKE di Sequelize adalah?",
      options: [
        "Op.like",
        "Op.contains",
        "Op.match",
        "Op.startsWith"
      ],
      correctAnswer: 0
    },
    {
      question: "Method untuk upsert (create or update) adalah?",
      options: [
        "save",
        "upsert",
        "updateOrCreate",
        "findOrCreate"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Query Examples",
      code: `// queries.js - Complete query examples

const { Op, Sequelize } = require('sequelize');
const { User, Post, Comment } = require('../models');

// 1. Basic CRUD
class UserQueries {
    // Create
    static async createUser(data) {
        return await User.create(data);
    }
    
    static async bulkCreateUsers(data) {
        return await User.bulkCreate(data, {
            validate: true,
            individualHooks: true
        });
    }
    
    // Read
    static async findUserById(id) {
        return await User.findByPk(id);
    }
    
    static async findUserByEmail(email) {
        return await User.findOne({ where: { email } });
    }
    
    static async findUsers(options = {}) {
        return await User.findAll(options);
    }
    
    static async findUsersWithFilters(filters) {
        const where = {};
        
        // Simple filters
        if (filters.status) where.status = filters.status;
        if (filters.role) where.role = filters.role;
        
        // Range filters
        if (filters.minAge) where.age = { ...where.age, [Op.gte]: filters.minAge };
        if (filters.maxAge) where.age = { ...where.age, [Op.lte]: filters.maxAge };
        
        // Search filters
        if (filters.search) {
            where[Op.or] = [
                { name: { [Op.iLike]: \`%\${filters.search}%\` } },
                { email: { [Op.iLike]: \`%\${filters.search}%\` } }
            ];
        }
        
        // Date filters
        if (filters.fromDate) where.createdAt = { [Op.gte]: filters.fromDate };
        if (filters.toDate) where.createdAt = { ...where.createdAt, [Op.lte]: filters.toDate };
        
        const options = {
            where,
            order: [[filters.sortBy || 'createdAt', filters.sortOrder || 'DESC']],
            limit: filters.limit || 10,
            offset: (filters.page - 1) * (filters.limit || 10)
        };
        
        // Include relationships
        if (filters.includePosts) {
            options.include = [
                { model: Post, as: 'posts' }
            ];
        }
        
        return await User.findAndCountAll(options);
    }
    
    // Update
    static async updateUser(id, data) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');
        
        Object.assign(user, data);
        await user.save();
        return user;
    }
    
    static async bulkUpdate(where, data) {
        return await User.update(data, { where });
    }
    
    // Delete
    static async deleteUser(id) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');
        await user.destroy();
        return user;
    }
    
    static async softDeleteUser(id) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');
        await user.destroy({ force: false });
        return user;
    }
    
    static async restoreUser(id) {
        return await User.restore({ where: { id } });
    }
}

// 2. Complex Queries
class AdvancedQueries {
    // Get user with all related data
    static async getUserWithAllData(userId) {
        return await User.findByPk(userId, {
            include: [
                { model: Post, as: 'posts' },
                { model: Comment, as: 'comments' },
                {
                    model: Post,
                    as: 'posts',
                    include: [
                        { model: Comment, as: 'comments' },
                        { model: Category, as: 'categories' },
                        { model: Tag, as: 'tags' }
                    ]
                }
            ]
        });
    }
    
    // Get users with post count
    static async getUsersWithPostCount() {
        return await User.findAll({
            attributes: {
                include: [
                    [
                        Sequelize.literal('(SELECT COUNT(*) FROM posts WHERE posts.userId = User.id)'),
                        'postCount'
                    ]
                ]
            }
        });
    }
    
    // Get top users by post count
    static async getTopUsers(limit = 10) {
        return await User.findAll({
            attributes: {
                include: [
                    [
                        Sequelize.fn('COUNT', Sequelize.col('posts.id')),
                        'postCount'
                    ]
                ]
            },
            include: [
                { model: Post, as: 'posts', attributes: [] }
            ],
            group: ['User.id'],
            order: [[Sequelize.literal('"postCount"'), 'DESC']],
            limit,
            subQuery: false
        });
    }
    
    // Get user activity stats
    static async getUserActivityStats(userId) {
        return await User.findByPk(userId, {
            attributes: {
                include: [
                    [
                        Sequelize.fn('COUNT', Sequelize.col('posts.id')),
                        'totalPosts'
                    ],
                    [
                        Sequelize.fn('COUNT', Sequelize.col('comments.id')),
                        'totalComments'
                    ]
                ]
            },
            include: [
                { model: Post, as: 'posts', attributes: [] },
                { model: Comment, as: 'comments', attributes: [] }
            ],
            group: ['User.id']
        });
    }
    
    // Search across multiple fields
    static async searchUsers(query) {
        return await User.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: \`%\${query}%\` } },
                    { email: { [Op.iLike]: \`%\${query}%\` } },
                    { bio: { [Op.iLike]: \`%\${query}%\` } }
                ]
            },
            limit: 20
        });
    }
    
    // Get users by date range
    static async getUsersByDateRange(startDate, endDate) {
        return await User.findAll({
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                }
            },
            order: [['createdAt', 'DESC']]
        });
    }
}

// 3. Pagination Helper
class PaginationHelper {
    static async paginate(model, options = {}) {
        const {
            page = 1,
            limit = 10,
            where = {},
            order = [['createdAt', 'DESC']],
            include = [],
            attributes = null
        } = options;
        
        const offset = (page - 1) * limit;
        
        const { count, rows } = await model.findAndCountAll({
            where,
            order,
            include,
            attributes,
            limit,
            offset,
            distinct: true
        });
        
        const totalPages = Math.ceil(count / limit);
        
        return {
            data: rows,
            pagination: {
                total: count,
                page,
                limit,
                totalPages,
                hasNext: page < totalPages,
                hasPrev: page > 1
            }
        };
    }
}

// 4. Transaction Examples
class TransactionQueries {
    static async transferPoints(fromUserId, toUserId, points) {
        const transaction = await sequelize.transaction();
        
        try {
            // Deduct points from sender
            await User.decrement('points', {
                by: points,
                where: { id: fromUserId },
                transaction
            });
            
            // Add points to receiver
            await User.increment('points', {
                by: points,
                where: { id: toUserId },
                transaction
            });
            
            // Create transaction record
            await Transaction.create({
                fromUserId,
                toUserId,
                points,
                type: 'transfer'
            }, { transaction });
            
            await transaction.commit();
            return { success: true };
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
}

module.exports = {
    UserQueries,
    AdvancedQueries,
    PaginationHelper,
    TransactionQueries
};`,
      language: "javascript"
    }
  ]
};