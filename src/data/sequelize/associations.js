export const chapter = {
  slug: "associations",
  title: "Associations (Relationships)",
  description: "Membuat relasi antar model di Sequelize: One-to-One, One-to-Many, Many-to-Many.",
  icon: "SiSequelize",
  color: "#52B0E7",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["sequelize-introduction", "sequelize-models"],
  tags: ["sequelize", "associations", "relationships", "foreign-key"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Jenis Associations

| Type | Method | Deskripsi |
|------|--------|-----------|
| One-to-One | hasOne / belongsTo | Satu ke satu |
| One-to-Many | hasMany / belongsTo | Satu ke banyak |
| Many-to-Many | belongsToMany | Banyak ke banyak |

## One-to-One

\`\`\`javascript
// User has one Profile
User.hasOne(Profile, {
    foreignKey: 'userId',
    as: 'profile'
});

Profile.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

// Usage
const user = await User.findByPk(1, {
    include: ['profile']
});

const profile = await Profile.findByPk(1, {
    include: ['user']
});

// Create with association
const user = await User.create({ name: 'John' });
const profile = await user.createProfile({
    bio: 'Developer',
    avatar: 'avatar.jpg'
});

// Or
const profile = await Profile.create({
    bio: 'Developer',
    userId: user.id
});
\`\`\`

## One-to-Many

\`\`\`javascript
// User has many Posts
User.hasMany(Post, {
    foreignKey: 'userId',
    as: 'posts',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'userId',
    as: 'author'
});

// Usage
const user = await User.findByPk(1, {
    include: [{
        model: Post,
        as: 'posts',
        where: { status: 'published' },
        required: false
    }]
});

// Create with association
const user = await User.findByPk(1);
const post = await user.createPost({
    title: 'My First Post',
    content: 'Content...'
});

// Or
const post = await Post.create({
    title: 'My First Post',
    content: 'Content...',
    userId: user.id
});

// Eager loading with nested associations
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
\`\`\`

## Many-to-Many

\`\`\`javascript
// User belongs to many Roles
User.belongsToMany(Role, {
    through: 'UserRoles',
    as: 'roles',
    foreignKey: 'userId',
    otherKey: 'roleId'
});

Role.belongsToMany(User, {
    through: 'UserRoles',
    as: 'users',
    foreignKey: 'roleId',
    otherKey: 'userId'
});

// Usage
const user = await User.findByPk(1, {
    include: [{
        model: Role,
        as: 'roles'
    }]
});

// Add association
const user = await User.findByPk(1);
const role = await Role.findByPk(2);
await user.addRole(role);
// or
await user.addRoles([1, 2, 3]);

// Remove association
await user.removeRole(role);
await user.removeRoles([1, 2, 3]);

// Set associations (replace all)
await user.setRoles([1, 2]);

// Check association
const hasRole = await user.hasRole(role);

// Count associations
const count = await user.countRoles();

// Through table with attributes
User.belongsToMany(Project, {
    through: {
        model: 'UserProjects',
        unique: false
    },
    as: 'projects'
});

// With additional attributes
const userProject = await UserProjects.create({
    userId: user.id,
    projectId: project.id,
    role: 'admin',
    joinedAt: new Date()
});
\`\`\`

## Aliases

\`\`\`javascript
// Using aliases
User.hasMany(Post, {
    foreignKey: 'authorId',
    as: 'articles'
});

Post.belongsTo(User, {
    foreignKey: 'authorId',
    as: 'author'
});

// Usage with alias
const user = await User.findByPk(1, {
    include: [{
        model: Post,
        as: 'articles'
    }]
});

// Multiple associations between same models
User.hasMany(Post, {
    foreignKey: 'authorId',
    as: 'authoredPosts'
});

User.hasMany(Post, {
    foreignKey: 'reviewerId',
    as: 'reviewedPosts'
});

Post.belongsTo(User, {
    foreignKey: 'authorId',
    as: 'author'
});

Post.belongsTo(User, {
    foreignKey: 'reviewerId',
    as: 'reviewer'
});
\`\`\`

## Foreign Key Options

\`\`\`javascript
User.hasMany(Post, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
        type: DataTypes.UUID,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    as: 'posts'
});

// Foreign key options
const options = {
    foreignKey: 'userId',
    as: 'posts',
    onDelete: 'CASCADE',  // CASCADE, SET NULL, RESTRICT, NO ACTION
    onUpdate: 'CASCADE',  // CASCADE, SET NULL, RESTRICT, NO ACTION
    hooks: true,          // Run hooks on associated models
    constraints: true,    // Create foreign key constraint
    scope: { status: 'published' } // Default scope
};
\`\`\`

## Eager Loading

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
            as: 'comments',
            include: [{
                model: User,
                as: 'author'
            }]
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

// Include with attributes
const users = await User.findAll({
    include: [{
        model: Post,
        as: 'posts',
        attributes: ['id', 'title', 'createdAt']
    }]
});

// Separate: true (optimize for large datasets)
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

## Association with Through Model

\`\`\`javascript
// Through model
const User = sequelize.define('User', {
    name: DataTypes.STRING
});

const Project = sequelize.define('Project', {
    title: DataTypes.STRING
});

const UserProject = sequelize.define('UserProject', {
    role: {
        type: DataTypes.ENUM('admin', 'member', 'viewer'),
        defaultValue: 'member'
    },
    joinedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

User.belongsToMany(Project, {
    through: UserProject,
    as: 'projects'
});

Project.belongsToMany(User, {
    through: UserProject,
    as: 'members'
});

// Access through model
const user = await User.findByPk(1, {
    include: [{
        model: Project,
        as: 'projects',
        through: {
            attributes: ['role', 'joinedAt']
        }
    }]
});

// Update through model
const userProject = await UserProject.findOne({
    where: {
        userId: user.id,
        projectId: project.id
    }
});
userProject.role = 'admin';
await userProject.save();
\`\`\`

## Best Practices

1. **Always define associations** in both models
2. **Use meaningful aliases** for clarity
3. **Set onDelete/onUpdate** appropriately
4. **Use eager loading** to avoid N+1 queries
5. **Add indexes** on foreign keys
6. **Use through models** for additional attributes
7. **Avoid circular associations** if possible
8. **Use separate: true** for large datasets

## Common Patterns

\`\`\`javascript
// Self-referencing association
User.hasMany(User, {
    as: 'children',
    foreignKey: 'parentId'
});

User.belongsTo(User, {
    as: 'parent',
    foreignKey: 'parentId'
});

// Polymorphic associations (via through model)
// Not natively supported, use through model

// Many-to-many with additional attributes
User.belongsToMany(Group, {
    through: 'UserGroups',
    as: 'groups'
});

Group.belongsToMany(User, {
    through: 'UserGroups',
    as: 'members'
});
\`\`\`
  `,
  quiz: [
    {
      question: "Method untuk One-to-Many association adalah?",
      options: [
        "hasOne / belongsTo",
        "hasMany / belongsTo",
        "belongsToMany",
        "hasMany / hasOne"
      ],
      correctAnswer: 1
    },
    {
      question: "Parameter untuk alias di association adalah?",
      options: [
        "alias",
        "as",
        "name",
        "label"
      ],
      correctAnswer: 1
    },
    {
      question: "Eager loading menggunakan option?",
      options: [
        "load",
        "include",
        "with",
        "join"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Associations Setup",
      code: `// models/index.js - Complete associations

const User = require('./User');
const Profile = require('./Profile');
const Post = require('./Post');
const Comment = require('./Comment');
const Category = require('./Category');
const Tag = require('./Tag');
const PostTag = require('./PostTag');
const Role = require('./Role');
const Permission = require('./Permission');

// One-to-One: User ↔ Profile
User.hasOne(Profile, {
    foreignKey: 'userId',
    as: 'profile',
    onDelete: 'CASCADE'
});

Profile.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

// One-to-Many: User → Posts
User.hasMany(Post, {
    foreignKey: 'authorId',
    as: 'posts',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'authorId',
    as: 'author'
});

// One-to-Many: Post → Comments
Post.hasMany(Comment, {
    foreignKey: 'postId',
    as: 'comments',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'postId',
    as: 'post'
});

// One-to-Many: User → Comments
User.hasMany(Comment, {
    foreignKey: 'userId',
    as: 'userComments',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    as: 'commenter'
});

// Many-to-Many: Post ↔ Category
Post.belongsToMany(Category, {
    through: 'PostCategories',
    as: 'categories',
    foreignKey: 'postId',
    otherKey: 'categoryId'
});

Category.belongsToMany(Post, {
    through: 'PostCategories',
    as: 'posts',
    foreignKey: 'categoryId',
    otherKey: 'postId'
});

// Many-to-Many: Post ↔ Tag (with through model)
Post.belongsToMany(Tag, {
    through: PostTag,
    as: 'tags',
    foreignKey: 'postId',
    otherKey: 'tagId'
});

Tag.belongsToMany(Post, {
    through: PostTag,
    as: 'posts',
    foreignKey: 'tagId',
    otherKey: 'postId'
});

// Many-to-Many: User ↔ Role
User.belongsToMany(Role, {
    through: 'UserRoles',
    as: 'roles',
    foreignKey: 'userId',
    otherKey: 'roleId'
});

Role.belongsToMany(User, {
    through: 'UserRoles',
    as: 'users',
    foreignKey: 'roleId',
    otherKey: 'userId'
});

// Many-to-Many: Role ↔ Permission
Role.belongsToMany(Permission, {
    through: 'RolePermissions',
    as: 'permissions',
    foreignKey: 'roleId',
    otherKey: 'permissionId'
});

Permission.belongsToMany(Role, {
    through: 'RolePermissions',
    as: 'roles',
    foreignKey: 'permissionId',
    otherKey: 'roleId'
});

// Usage Examples
const getUserWithAllData = async (userId) => {
    return await User.findByPk(userId, {
        include: [
            { model: Profile, as: 'profile' },
            {
                model: Post,
                as: 'posts',
                include: [
                    {
                        model: Comment,
                        as: 'comments',
                        include: [
                            { model: User, as: 'commenter' }
                        ]
                    },
                    { model: Category, as: 'categories' },
                    {
                        model: Tag,
                        as: 'tags',
                        through: { attributes: [] }
                    }
                ]
            },
            {
                model: Role,
                as: 'roles',
                include: [
                    { model: Permission, as: 'permissions' }
                ]
            }
        ]
    });
};

const getPostWithAuthorAndComments = async (postId) => {
    return await Post.findByPk(postId, {
        include: [
            { model: User, as: 'author' },
            {
                model: Comment,
                as: 'comments',
                include: [
                    { model: User, as: 'commenter' }
                ],
                order: [['createdAt', 'ASC']]
            },
            { model: Category, as: 'categories' },
            { model: Tag, as: 'tags' }
        ]
    });
};

const getUsersWithRolesAndPermissions = async () => {
    return await User.findAll({
        include: [{
            model: Role,
            as: 'roles',
            include: [{
                model: Permission,
                as: 'permissions'
            }]
        }]
    });
};

module.exports = {
    User,
    Profile,
    Post,
    Comment,
    Category,
    Tag,
    PostTag,
    Role,
    Permission,
    getUserWithAllData,
    getPostWithAuthorAndComments,
    getUsersWithRolesAndPermissions
};`,
      language: "javascript"
    }
  ]
};