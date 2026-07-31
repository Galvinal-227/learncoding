export const chapter = {
  slug: "database",
  title: "Database",
  description: "Menggunakan database PostgreSQL di Supabase dengan query dan migrations.",
  icon: "SiSupabase",
  color: "#3ECF8E",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["supabase-introduction"],
  tags: ["supabase", "database", "postgresql", "queries"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Database Supabase

Supabase menggunakan PostgreSQL sebagai database utama. Setiap project memiliki database PostgreSQL yang terisolasi.

## Membuat Tabel

### SQL Editor
\`\`\`sql
-- Create users table
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create posts table
CREATE TABLE posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content TEXT,
    published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create comments table
CREATE TABLE comments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_comments_post_id ON comments(post_id);
CREATE INDEX idx_comments_user_id ON comments(user_id);
\`\`\`

## Query dengan JavaScript

### SELECT
\`\`\`javascript
// Get all users
const { data: users, error } = await supabase
    .from('users')
    .select('*');

// Select specific columns
const { data, error } = await supabase
    .from('users')
    .select('id, name, email');

// Select with filter
const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('status', 'active');

// Select with multiple filters
const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('status', 'active')
    .gte('created_at', '2024-01-01');

// Select with order
const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false });

// Select with limit
const { data, error } = await supabase
    .from('users')
    .select('*')
    .limit(10)
    .range(0, 9);

// Select with join (nested)
const { data, error } = await supabase
    .from('posts')
    .select(\`
        id,
        title,
        content,
        users (id, name, email)
    \`)
    .eq('published', true);
\`\`\`

### INSERT
\`\`\`javascript
// Insert single row
const { data, error } = await supabase
    .from('users')
    .insert([
        { name: 'John Doe', email: 'john@example.com' }
    ]);

// Insert multiple rows
const { data, error } = await supabase
    .from('users')
    .insert([
        { name: 'Alice', email: 'alice@example.com' },
        { name: 'Bob', email: 'bob@example.com' }
    ]);

// Insert and return data
const { data, error } = await supabase
    .from('users')
    .insert([
        { name: 'John Doe', email: 'john@example.com' }
    ])
    .select();
\`\`\`

### UPDATE
\`\`\`javascript
// Update single row
const { data, error } = await supabase
    .from('users')
    .update({ status: 'inactive' })
    .eq('id', userId);

// Update multiple rows
const { data, error } = await supabase
    .from('users')
    .update({ status: 'suspended' })
    .eq('status', 'inactive');

// Update and return data
const { data, error } = await supabase
    .from('users')
    .update({ name: 'Jane Doe' })
    .eq('id', userId)
    .select();
\`\`\`

### DELETE
\`\`\`javascript
// Delete single row
const { data, error } = await supabase
    .from('users')
    .delete()
    .eq('id', userId);

// Delete multiple rows
const { data, error } = await supabase
    .from('users')
    .delete()
    .eq('status', 'inactive');

// Delete and return data
const { data, error } = await supabase
    .from('users')
    .delete()
    .eq('id', userId)
    .select();
\`\`\`

## Operators

\`\`\`javascript
// Equality
.eq('column', value)
.neq('column', value)

// Comparison
.gt('column', value)    // greater than
.gte('column', value)   // greater than or equal
.lt('column', value)    // less than
.lte('column', value)   // less than or equal

// Array
.in('column', [value1, value2])
.notIn('column', [value1, value2])

// String
.like('column', '%pattern%')
.ilike('column', '%pattern%') // case insensitive

// Null
.is('column', null)
.is('column', 'null')

// Time
.gte('created_at', '2024-01-01')
.lte('created_at', '2024-12-31')

// OR / AND
.or('status.eq.active,role.eq.admin')
.and('status.eq.active,role.eq.admin')
\`\`\`

## Filters

\`\`\`javascript
// Filter by multiple conditions
const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('status', 'active')
    .neq('role', 'admin')
    .gte('age', 18);

// OR condition
const { data, error } = await supabase
    .from('users')
    .select('*')
    .or('status.eq.active,role.eq.admin');

// Text search (full-text)
const { data, error } = await supabase
    .from('posts')
    .select('*')
    .textSearch('content', 'search query');

// Match (object equality)
const { data, error } = await supabase
    .from('users')
    .select('*')
    .match({ status: 'active', role: 'user' });
\`\`\`

## Aggregations

\`\`\`javascript
// Count
const { count, error } = await supabase
    .from('users')
    .select('*', { count: 'exact', head: true });

// Count with filter
const { count, error } = await supabase
    .from('users')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'active');

// Raw SQL for complex queries
const { data, error } = await supabase
    .rpc('function_name', { param1: value1 });
\`\`\`

## Triggers

\`\`\`sql
-- Create trigger function
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Create trigger for logging
CREATE OR REPLACE FUNCTION log_user_changes()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO user_logs (user_id, action, old_data, new_data)
    VALUES (NEW.id, TG_OP, OLD, NEW);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER log_users_changes
AFTER UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION log_user_changes();
\`\`\`

## Best Practices

1. **Use indexes** for frequently queried columns
2. **Enable RLS** for security
3. **Use prepared statements** for user input
4. **Add timestamps** (created_at, updated_at)
5. **Use UUID** for primary keys
6. **Add foreign key constraints** for data integrity
7. **Use migrations** for schema changes
8. **Optimize queries** with explain analyze
9. **Use views** for complex queries
10. **Regular backups** with pg_dump
  `,
  quiz: [
    {
      question: "Method untuk SELECT dengan kondisi di Supabase adalah?",
      options: [
        ".where()",
        ".eq()",
        ".filter()",
        ".match()"
      ],
      correctAnswer: 1
    },
    {
      question: "Method untuk INSERT di Supabase adalah?",
      options: [
        ".add()",
        ".insert()",
        ".create()",
        ".put()"
      ],
      correctAnswer: 1
    },
    {
      question: "Untuk join table di Supabase menggunakan?",
      options: [
        ".join()",
        ".include()",
        "nested select",
        ".relation()"
      ],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "Database Operations",
      code: `// lib/db.js - Complete Database Operations
import { supabase } from './supabase';

class Database {
    // ============ USERS ============
    static async getUsers(filters = {}) {
        let query = supabase.from('users').select('*');
        
        if (filters.status) {
            query = query.eq('status', filters.status);
        }
        if (filters.role) {
            query = query.eq('role', filters.role);
        }
        if (filters.search) {
            query = query.ilike('name', \`%\${filters.search}%\`);
        }
        if (filters.sort) {
            query = query.order(filters.sort.column, { 
                ascending: filters.sort.ascending 
            });
        }
        if (filters.limit) {
            query = query.limit(filters.limit);
        }
        if (filters.page) {
            const start = (filters.page - 1) * filters.limit;
            const end = start + filters.limit - 1;
            query = query.range(start, end);
        }
        
        const { data, error, count } = await query;
        if (error) throw error;
        return { data, count };
    }
    
    static async getUserById(id) {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', id)
            .single();
        
        if (error) throw error;
        return data;
    }
    
    static async getUserByEmail(email) {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();
        
        if (error) throw error;
        return data;
    }
    
    static async createUser(userData) {
        const { data, error } = await supabase
            .from('users')
            .insert([userData])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    }
    
    static async updateUser(id, updates) {
        const { data, error } = await supabase
            .from('users')
            .update(updates)
            .eq('id', id)
            .select()
            .single();
        
        if (error) throw error;
        return data;
    }
    
    static async deleteUser(id) {
        const { data, error } = await supabase
            .from('users')
            .delete()
            .eq('id', id);
        
        if (error) throw error;
        return data;
    }
    
    // ============ POSTS ============
    static async getPosts(filters = {}) {
        let query = supabase.from('posts').select(\`
            *,
            users (id, name, email)
        \`);
        
        if (filters.published !== undefined) {
            query = query.eq('published', filters.published);
        }
        if (filters.userId) {
            query = query.eq('user_id', filters.userId);
        }
        if (filters.search) {
            query = query.textSearch('content', filters.search);
        }
        
        const { data, error } = await query;
        if (error) throw error;
        return data;
    }
    
    static async getPostById(id) {
        const { data, error } = await supabase
            .from('posts')
            .select(\`
                *,
                users (id, name, email),
                comments (
                    id,
                    content,
                    created_at,
                    users (id, name, email)
                )
            \`)
            .eq('id', id)
            .single();
        
        if (error) throw error;
        return data;
    }
    
    static async createPost(postData) {
        const { data, error } = await supabase
            .from('posts')
            .insert([postData])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    }
    
    static async updatePost(id, updates) {
        const { data, error } = await supabase
            .from('posts')
            .update(updates)
            .eq('id', id)
            .select()
            .single();
        
        if (error) throw error;
        return data;
    }
    
    static async deletePost(id) {
        const { data, error } = await supabase
            .from('posts')
            .delete()
            .eq('id', id);
        
        if (error) throw error;
        return data;
    }
    
    // ============ COMMENTS ============
    static async getComments(postId) {
        const { data, error } = await supabase
            .from('comments')
            .select(\`
                *,
                users (id, name, email)
            \`)
            .eq('post_id', postId)
            .order('created_at', { ascending: true });
        
        if (error) throw error;
        return data;
    }
    
    static async createComment(commentData) {
        const { data, error } = await supabase
            .from('comments')
            .insert([commentData])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    }
    
    static async deleteComment(id) {
        const { data, error } = await supabase
            .from('comments')
            .delete()
            .eq('id', id);
        
        if (error) throw error;
        return data;
    }
    
    // ============ STATISTICS ============
    static async getStats() {
        const { count: totalUsers } = await supabase
            .from('users')
            .select('*', { count: 'exact', head: true });
        
        const { count: totalPosts } = await supabase
            .from('posts')
            .select('*', { count: 'exact', head: true });
        
        const { count: totalComments } = await supabase
            .from('comments')
            .select('*', { count: 'exact', head: true });
        
        const { count: activeUsers } = await supabase
            .from('users')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'active');
        
        return {
            totalUsers,
            totalPosts,
            totalComments,
            activeUsers
        };
    }
    
    // ============ SEARCH ============
    static async search(query) {
        // Search in users
        const users = await supabase
            .from('users')
            .select('*')
            .ilike('name', \`%\${query}%\`)
            .limit(5);
        
        // Search in posts
        const posts = await supabase
            .from('posts')
            .select('*')
            .textSearch('content', query)
            .limit(5);
        
        return {
            users: users.data || [],
            posts: posts.data || []
        };
    }
}

export default Database;`,
      language: "javascript"
    }
  ]
};