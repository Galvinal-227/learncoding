export const chapter = {
  slug: "row-level-security",
  title: "Row Level Security (RLS)",
  description: "Mengimplementasikan RLS untuk keamanan data di Supabase.",
  icon: "SiSupabase",
  color: "#3ECF8E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["supabase-introduction", "supabase-database", "supabase-auth"],
  tags: ["supabase", "rls", "security", "postgresql"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu RLS?

Row Level Security (RLS) adalah fitur PostgreSQL yang membatasi akses ke baris data berdasarkan kondisi tertentu. Supabase menggunakan RLS untuk keamanan data.

## Enable RLS

\`\`\`sql
-- Enable RLS on table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Disable RLS (not recommended)
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
\`\`\`

## Basic RLS Policies

### Select Policies
\`\`\`sql
-- Users can view their own data
CREATE POLICY "Users can view their own data"
ON users
FOR SELECT
USING (auth.uid() = id);

-- Users can view all posts
CREATE POLICY "Anyone can view posts"
ON posts
FOR SELECT
USING (true);

-- Users can view published posts only
CREATE POLICY "View published posts"
ON posts
FOR SELECT
USING (published = true);

-- Users can view their own posts
CREATE POLICY "View own posts"
ON posts
FOR SELECT
USING (auth.uid() = user_id);
\`\`\`

### Insert Policies
\`\`\`sql
-- Users can insert their own data
CREATE POLICY "Users can insert their own data"
ON users
FOR INSERT
WITH CHECK (auth.uid() = id);

-- Users can create posts
CREATE POLICY "Create posts"
ON posts
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can create comments
CREATE POLICY "Create comments"
ON comments
FOR INSERT
WITH CHECK (auth.uid() = user_id);
\`\`\`

### Update Policies
\`\`\`sql
-- Users can update their own data
CREATE POLICY "Users can update their own data"
ON users
FOR UPDATE
USING (auth.uid() = id);

-- Users can update their own posts
CREATE POLICY "Update own posts"
ON posts
FOR UPDATE
USING (auth.uid() = user_id);

-- Users can only update specific columns
CREATE POLICY "Update own posts"
ON posts
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (
    auth.uid() = user_id AND
    status = 'draft' -- Can't update published posts
);
\`\`\`

### Delete Policies
\`\`\`sql
-- Users can delete their own data
CREATE POLICY "Users can delete their own data"
ON users
FOR DELETE
USING (auth.uid() = id);

-- Users can delete their own posts
CREATE POLICY "Delete own posts"
ON posts
FOR DELETE
USING (auth.uid() = user_id);

-- Users can delete their own comments
CREATE POLICY "Delete own comments"
ON comments
FOR DELETE
USING (auth.uid() = user_id);
\`\`\`

## Advanced RLS Policies

### Role-Based Policies
\`\`\`sql
-- Admin can access everything
CREATE POLICY "Admin can access everything"
ON users
FOR ALL
USING (
    EXISTS (
        SELECT 1 FROM users
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

-- Users can access their own data
CREATE POLICY "Users can access their own data"
ON users
FOR ALL
USING (auth.uid() = id);

-- Combine both
CREATE POLICY "Users can access data"
ON users
FOR ALL
USING (
    auth.uid() = id OR
    EXISTS (
        SELECT 1 FROM users
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);
\`\`\`

### Complex Conditions
\`\`\`sql
-- Users can view their own posts and posts of users they follow
CREATE POLICY "View posts with follow"
ON posts
FOR SELECT
USING (
    auth.uid() = user_id OR
    user_id IN (
        SELECT followed_id
        FROM follows
        WHERE follower_id = auth.uid()
    )
);

-- Users can view posts from their organization
CREATE POLICY "View organization posts"
ON posts
FOR SELECT
USING (
    user_id IN (
        SELECT id FROM users
        WHERE organization_id = (
            SELECT organization_id
            FROM users
            WHERE id = auth.uid()
        )
    )
);
\`\`\`

### Time-Based Policies
\`\`\`sql
-- Users can view posts from last 30 days
CREATE POLICY "View recent posts"
ON posts
FOR SELECT
USING (
    created_at > NOW() - INTERVAL '30 days'
);

-- Users can update within 1 hour of creation
CREATE POLICY "Update within 1 hour"
ON posts
FOR UPDATE
USING (
    auth.uid() = user_id AND
    created_at > NOW() - INTERVAL '1 hour'
);
\`\`\`

## RLS with Functions

### Helper Functions
\`\`\`sql
-- Check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM users
        WHERE id = auth.uid()
        AND role = 'admin'
    );
END;
$$ LANGUAGE plpgsql;

-- Check if user owns the post
CREATE OR REPLACE FUNCTION owns_post(post_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM posts
        WHERE id = post_id
        AND user_id = auth.uid()
    );
END;
$$ LANGUAGE plpgsql;

-- Usage in policies
CREATE POLICY "Admin or owner can update"
ON posts
FOR UPDATE
USING (
    is_admin() OR owns_post(id)
);
\`\`\`

### Policies with Functions
\`\`\`sql
-- Users can view their own data or if they're admin
CREATE POLICY "View own data or admin"
ON users
FOR SELECT
USING (
    auth.uid() = id OR
    (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
);

-- Users can update only if they're admins
CREATE POLICY "Admin can update"
ON users
FOR UPDATE
USING (
    (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
);
\`\`\`

## RLS Best Practices

### 1. Always Enable RLS
\`\`\`sql
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
\`\`\`

### 2. Create Default Deny Policy
\`\`\`sql
-- Default deny (no access)
CREATE POLICY "Default deny"
ON users
FOR ALL
USING (false);
\`\`\`

### 3. Use Specific Policies
\`\`\`sql
-- ✅ Specific policies
CREATE POLICY "Select own data" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Update own data" ON users FOR UPDATE USING (auth.uid() = id);

-- ❌ Generic policy
CREATE POLICY "Access own data" ON users FOR ALL USING (auth.uid() = id);
\`\`\`

### 4. Test Policies
\`\`\`sql
-- Test with specific user
SET ROLE 'authenticated';

-- Test query
SELECT * FROM users WHERE id = 'user-id';

-- Reset role
RESET ROLE;
\`\`\`

### 5. Document Policies
\`\`\`sql
-- Add comments to policies
COMMENT ON POLICY "Users can view their own data" ON users IS 'Users can only view their own data';

COMMENT ON POLICY "Admin can access everything" ON users IS 'Admins can access all user data';
\`\`\`

## Common RLS Patterns

### Multi-Tenancy
\`\`\`sql
-- Users can view data from their tenant
CREATE POLICY "View tenant data"
ON posts
FOR SELECT
USING (
    tenant_id = (
        SELECT tenant_id
        FROM users
        WHERE id = auth.uid()
    )
);

-- Users can create data for their tenant
CREATE POLICY "Create tenant data"
ON posts
FOR INSERT
WITH CHECK (
    tenant_id = (
        SELECT tenant_id
        FROM users
        WHERE id = auth.uid()
    )
);
\`\`\`

### Soft Delete
\`\`\`sql
-- Users can view non-deleted data
CREATE POLICY "View non-deleted"
ON posts
FOR SELECT
USING (deleted_at IS NULL);

-- Users can view deleted data (admin only)
CREATE POLICY "Admin view deleted"
ON posts
FOR SELECT
USING (
    deleted_at IS NOT NULL AND
    (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
);
\`\`\`

## RLS Testing

\`\`\`javascript
// Test RLS with different users
const testRLS = async () => {
    // Test as normal user
    const userClient = createClient(url, key, {
        auth: { persistSession: false }
    });
    await userClient.auth.signInWithPassword({
        email: 'user@example.com',
        password: 'password'
    });
    
    // Test query
    const { data, error } = await userClient
        .from('users')
        .select('*');
    
    console.log('User data:', data);
    
    // Test as admin
    const adminClient = createClient(url, serviceKey);
    const { data: adminData } = await adminClient
        .from('users')
        .select('*');
    
    console.log('Admin data:', adminData);
};
\`\`\`
  `,
  quiz: [
    {
      question: "Apa kepanjangan RLS?",
      options: [
        "Row Level Security",
        "Record Level Security",
        "Role Level Security",
        "Resource Level Security"
      ],
      correctAnswer: 0
    },
    {
      question: "Perintah untuk enable RLS adalah?",
      options: [
        "ENABLE ROW LEVEL SECURITY",
        "TURN ON RLS",
        "ACTIVATE ROW SECURITY",
        "SET RLS ON"
      ],
      correctAnswer: 0
    },
    {
      question: "Fungsi untuk mendapatkan user ID di RLS adalah?",
      options: [
        "current_user_id()",
        "auth.user_id()",
        "auth.uid()",
        "get_user_id()"
      ],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "Complete RLS Setup",
      code: `-- Complete RLS Setup for Blog Application

-- ============================================
-- 1. ENABLE RLS ON ALL TABLES
-- ============================================
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE follows ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 2. HELPER FUNCTIONS
-- ============================================
-- Check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM users
        WHERE id = auth.uid()
        AND role = 'admin'
    );
END;
$$ LANGUAGE plpgsql;

-- Check if user owns a post
CREATE OR REPLACE FUNCTION owns_post(post_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM posts
        WHERE id = post_id
        AND user_id = auth.uid()
    );
END;
$$ LANGUAGE plpgsql;

-- Check if user follows another user
CREATE OR REPLACE FUNCTION follows_user(target_user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM follows
        WHERE follower_id = auth.uid()
        AND followed_id = target_user_id
    );
END;
$$ LANGUAGE plpgsql;

-- Get user's organization
CREATE OR REPLACE FUNCTION get_organization()
RETURNS UUID AS $$
DECLARE
    org_id UUID;
BEGIN
    SELECT organization_id INTO org_id
    FROM users
    WHERE id = auth.uid();
    RETURN org_id;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- 3. USERS TABLE POLICIES
-- ============================================
-- View users
CREATE POLICY "View users"
ON users
FOR SELECT
USING (
    -- User can view themselves
    auth.uid() = id OR
    -- Admin can view all
    is_admin() OR
    -- Users can view public profiles of others
    status = 'public'
);

-- Update users
CREATE POLICY "Update users"
ON users
FOR UPDATE
USING (
    -- User can update themselves
    auth.uid() = id OR
    -- Admin can update all
    is_admin()
)
WITH CHECK (
    -- Prevent users from making themselves admin
    NOT (auth.uid() = id AND role = 'admin' AND NOT is_admin())
);

-- Delete users
CREATE POLICY "Delete users"
ON users
FOR DELETE
USING (
    -- Admin can delete users
    is_admin()
);

-- ============================================
-- 4. POSTS TABLE POLICIES
-- ============================================
-- View posts
CREATE POLICY "View posts"
ON posts
FOR SELECT
USING (
    -- Published posts are public
    published = true OR
    -- Users can view their own posts
    auth.uid() = user_id OR
    -- Users can view posts from users they follow
    follows_user(user_id) OR
    -- Users in same organization
    get_organization() = (SELECT organization_id FROM users WHERE id = user_id) OR
    -- Admin can view all
    is_admin()
);

-- Create posts
CREATE POLICY "Create posts"
ON posts
FOR INSERT
WITH CHECK (
    -- Users can create their own posts
    auth.uid() = user_id
);

-- Update posts
CREATE POLICY "Update posts"
ON posts
FOR UPDATE
USING (
    -- Users can update their own posts
    owns_post(id) OR
    -- Admin can update all
    is_admin()
)
WITH CHECK (
    -- Posts can be updated if draft, or by admin
    (status = 'draft' AND auth.uid() = user_id) OR
    is_admin()
);

-- Delete posts
CREATE POLICY "Delete posts"
ON posts
FOR DELETE
USING (
    -- Users can delete their own posts
    owns_post(id) OR
    -- Admin can delete all
    is_admin()
);

-- ============================================
-- 5. COMMENTS TABLE POLICIES
-- ============================================
-- View comments
CREATE POLICY "View comments"
ON comments
FOR SELECT
USING (
    -- Comments on published posts
    EXISTS (
        SELECT 1 FROM posts
        WHERE id = comments.post_id
        AND published = true
    ) OR
    -- User's own comments
    auth.uid() = user_id OR
    -- Admin can view all
    is_admin()
);

-- Create comments
CREATE POLICY "Create comments"
ON comments
FOR INSERT
WITH CHECK (
    -- Users can create comments
    auth.uid() = user_id AND
    -- On published posts
    EXISTS (
        SELECT 1 FROM posts
        WHERE id = comments.post_id
        AND published = true
    )
);

-- Update comments
CREATE POLICY "Update comments"
ON comments
FOR UPDATE
USING (
    -- Users can update their own comments
    auth.uid() = user_id OR
    -- Admin can update all
    is_admin()
);

-- Delete comments
CREATE POLICY "Delete comments"
ON comments
FOR DELETE
USING (
    -- Users can delete their own comments
    auth.uid() = user_id OR
    -- Post owners can delete comments
    EXISTS (
        SELECT 1 FROM posts
        WHERE id = comments.post_id
        AND user_id = auth.uid()
    ) OR
    -- Admin can delete all
    is_admin()
);

-- ============================================
-- 6. FOLLOWS TABLE POLICIES
-- ============================================
-- View follows
CREATE POLICY "View follows"
ON follows
FOR SELECT
USING (
    -- Users can view their own follows
    auth.uid() = follower_id OR
    auth.uid() = followed_id OR
    -- Admin can view all
    is_admin()
);

-- Create follows
CREATE POLICY "Create follows"
ON follows
FOR INSERT
WITH CHECK (
    -- Users can follow others
    auth.uid() = follower_id AND
    -- Can't follow yourself
    follower_id != followed_id
);

-- Delete follows
CREATE POLICY "Delete follows"
ON follows
FOR DELETE
USING (
    -- Users can unfollow
    auth.uid() = follower_id OR
    -- Admin can delete all
    is_admin()
);

-- ============================================
-- 7. TEST POLICIES
-- ============================================
-- Test as normal user
SET ROLE 'authenticated';

-- Should return only user's data
SELECT * FROM users;

-- Should return user's posts
SELECT * FROM posts;

-- Reset role
RESET ROLE;

-- ============================================
-- 8. POLICY DOCUMENTATION
-- ============================================
COMMENT ON POLICY "View users" ON users IS 'Users can view themselves, admin can view all, or public profiles';
COMMENT ON POLICY "Update users" ON users IS 'Users can update themselves, admin can update all';
COMMENT ON POLICY "Delete users" ON users IS 'Only admin can delete users';

COMMENT ON POLICY "View posts" ON posts IS 'Published posts public, own posts, followed users posts, same organization, or admin';
COMMENT ON POLICY "Create posts" ON posts IS 'Users can create their own posts';
COMMENT ON POLICY "Update posts" ON posts IS 'Users can update their own draft posts, admin can update all';
COMMENT ON POLICY "Delete posts" ON posts IS 'Users can delete their own posts, admin can delete all';

COMMENT ON POLICY "View comments" ON comments IS 'Comments on published posts, own comments, or admin';
COMMENT ON POLICY "Create comments" ON comments IS 'Users can comment on published posts';
COMMENT ON POLICY "Update comments" ON comments IS 'Users can update their own comments, admin can update all';
COMMENT ON POLICY "Delete comments" ON comments IS 'Users can delete their own comments, post owners can delete comments, admin can delete all';`,
      language: "sql"
    }
  ]
};