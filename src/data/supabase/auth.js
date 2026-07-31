export const chapter = {
  slug: "auth",
  title: "Authentication",
  description: "Implementasi autentikasi di Supabase: email, OAuth, magic link, dan SSO.",
  icon: "SiSupabase",
  color: "#3ECF8E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["supabase-introduction", "supabase-database"],
  tags: ["supabase", "auth", "authentication", "oauth"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Authentication di Supabase

Supabase menyediakan sistem autentikasi lengkap dengan berbagai metode:
- Email/Password
- Magic Link
- OAuth (Google, GitHub, etc.)
- SSO (SAML)
- Phone

## Setup Auth

\`\`\`javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(url, key, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        flowType: 'pkce' // or 'implicit'
    }
});

// Listen to auth changes
supabase.auth.onAuthStateChange((event, session) => {
    console.log('Auth event:', event);
    console.log('Session:', session);
    
    if (event === 'SIGNED_IN') {
        // User signed in
    }
    if (event === 'SIGNED_OUT') {
        // User signed out
    }
});
\`\`\`

## Email/Password Authentication

### Sign Up
\`\`\`javascript
const signUp = async (email, password, userData) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name: userData.name,
                role: userData.role || 'user'
            }
        }
    });
    
    if (error) throw error;
    return data;
};

// Usage
const { user, session } = await signUp(
    'john@example.com',
    'password123',
    { name: 'John Doe' }
);
\`\`\`

### Sign In
\`\`\`javascript
const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    
    if (error) throw error;
    return data;
};

// Usage
const { user, session } = await signIn('john@example.com', 'password123');
\`\`\`

### Sign Out
\`\`\`javascript
const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
};
\`\`\`

### Get User
\`\`\`javascript
const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
};

// Get session
const getSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
};
\`\`\`

## Magic Link (Passwordless)

\`\`\`javascript
// Send magic link
const sendMagicLink = async (email) => {
    const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            emailRedirectTo: 'https://yourapp.com/callback'
        }
    });
    
    if (error) throw error;
    return data;
};

// Handle callback
const handleMagicLink = async () => {
    // Automatically handled by Supabase
    // User will be redirected with session
};
\`\`\`

## OAuth Authentication

### Google OAuth
\`\`\`javascript
const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'https://yourapp.com/callback',
            scopes: 'email profile'
        }
    });
    
    if (error) throw error;
    return data;
};

// Handle OAuth callback
// Supabase handles this automatically
// User session will be created
\`\`\`

### GitHub OAuth
\`\`\`javascript
const signInWithGitHub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
            redirectTo: 'https://yourapp.com/callback',
            scopes: 'user:email'
        }
    });
    
    if (error) throw error;
    return data;
};
\`\`\`

### Supported Providers
\`\`\`javascript
// All supported providers
const providers = [
    'google',
    'github',
    'facebook',
    'twitter',
    'apple',
    'gitlab',
    'bitbucket',
    'discord',
    'slack',
    'spotify',
    'twitch',
    'azure'
];

const signInWithProvider = async (provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: 'https://yourapp.com/callback'
        }
    });
    
    if (error) throw error;
    return data;
};
\`\`\`

## Password Reset

\`\`\`javascript
// Request password reset
const resetPassword = async (email) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://yourapp.com/reset-password'
    });
    
    if (error) throw error;
    return data;
};

// Update password
const updatePassword = async (newPassword) => {
    const { data, error } = await supabase.auth.updateUser({
        password: newPassword
    });
    
    if (error) throw error;
    return data;
};
\`\`\`

## User Management

\`\`\`javascript
// Update user
const updateUser = async (updates) => {
    const { data, error } = await supabase.auth.updateUser({
        email: updates.email,
        password: updates.password,
        data: updates.user_metadata
    });
    
    if (error) throw error;
    return data;
};

// Delete user (requires service role)
const deleteUser = async (userId) => {
    const { data, error } = await supabase
        .from('users')
        .delete()
        .eq('id', userId);
    
    if (error) throw error;
    return data;
};

// Get user by ID (requires service role)
const getUserById = async (userId) => {
    const { data: { user }, error } = await supabase
        .auth
        .admin
        .getUserById(userId);
    
    if (error) throw error;
    return user;
};
\`\`\`

## Auth Helpers for Frameworks

### Next.js
\`\`\`javascript
// middleware.js
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });
    await supabase.auth.getSession();
    return res;
}

// app/page.jsx
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function Page() {
    const supabase = createServerComponentClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();
    
    return (
        <div>
            {session ? (
                <p>Welcome {session.user.email}</p>
            ) : (
                <p>Please sign in</p>
            )}
        </div>
    );
}
\`\`\`

### React
\`\`\`jsx
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';

function Auth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });
        
        // Listen to auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setUser(session?.user ?? null);
                setLoading(false);
            }
        );
        
        return () => subscription.unsubscribe();
    }, []);
    
    const handleSignIn = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google'
        });
        if (error) console.error(error);
    };
    
    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) console.error(error);
    };
    
    if (loading) return <div>Loading...</div>;
    
    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.email}</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <button onClick={handleSignIn}>Sign In with Google</button>
            )}
        </div>
    );
}
\`\`\`

## Security Best Practices

1. **Enable RLS** on all tables
2. **Use service role** only for admin operations
3. **Validate user input** on server side
4. **Implement rate limiting** for auth endpoints
5. **Use HTTPS** in production
6. **Store session securely** (HttpOnly cookies)
7. **Implement MFA** for sensitive operations
8. **Log auth events** for security monitoring
9. **Use strong password policies**
10. **Regular security audits**
  `,
  quiz: [
    {
      question: "Method untuk sign up di Supabase adalah?",
      options: [
        "supabase.auth.signUp()",
        "supabase.auth.register()",
        "supabase.auth.createUser()",
        "supabase.auth.newUser()"
      ],
      correctAnswer: 0
    },
    {
      question: "Method untuk sign in dengan OAuth adalah?",
      options: [
        "supabase.auth.signInOAuth()",
        "supabase.auth.signInWithOAuth()",
        "supabase.auth.oauthLogin()",
        "supabase.auth.socialLogin()"
      ],
      correctAnswer: 1
    },
    {
      question: "Provider OAuth yang didukung Supabase?",
      options: [
        "Google",
        "GitHub",
        "Facebook",
        "Semua di atas"
      ],
      correctAnswer: 3
    }
  ],
  codeExamples: [
    {
      title: "Complete Auth System",
      code: `// lib/auth.js - Complete Authentication System
import { supabase } from './supabase';

class Auth {
    // ============ EMAIL/PASSWORD ============
    static async signUp(email, password, userData = {}) {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        ...userData,
                        created_at: new Date().toISOString()
                    }
                }
            });
            
            if (error) throw error;
            
            // Create user profile in users table
            if (data.user) {
                await supabase.from('users').insert([
                    {
                        id: data.user.id,
                        email: data.user.email,
                        name: userData.name || email.split('@')[0],
                        role: userData.role || 'user'
                    }
                ]);
            }
            
            return data;
        } catch (error) {
            throw error;
        }
    }
    
    static async signIn(email, password) {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });
            
            if (error) throw error;
            
            // Update last login
            if (data.user) {
                await supabase
                    .from('users')
                    .update({ last_login: new Date().toISOString() })
                    .eq('id', data.user.id);
            }
            
            return data;
        } catch (error) {
            throw error;
        }
    }
    
    static async signOut() {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            return true;
        } catch (error) {
            throw error;
        }
    }
    
    // ============ MAGIC LINK ============
    static async sendMagicLink(email, redirectTo) {
        try {
            const { data, error } = await supabase.auth.signInWithOtp({
                email,
                options: {
                    emailRedirectTo: redirectTo || window.location.origin
                }
            });
            
            if (error) throw error;
            return data;
        } catch (error) {
            throw error;
        }
    }
    
    // ============ OAUTH ============
    static async signInWithGoogle(redirectTo) {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: redirectTo || window.location.origin,
                    scopes: 'email profile'
                }
            });
            
            if (error) throw error;
            return data;
        } catch (error) {
            throw error;
        }
    }
    
    static async signInWithGitHub(redirectTo) {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
                options: {
                    redirectTo: redirectTo || window.location.origin,
                    scopes: 'user:email'
                }
            });
            
            if (error) throw error;
            return data;
        } catch (error) {
            throw error;
        }
    }
    
    static async signInWithProvider(provider, redirectTo) {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: redirectTo || window.location.origin
                }
            });
            
            if (error) throw error;
            return data;
        } catch (error) {
            throw error;
        }
    }
    
    // ============ PASSWORD RESET ============
    static async resetPassword(email, redirectTo) {
        try {
            const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: redirectTo || \`\${window.location.origin}/reset-password\`
            });
            
            if (error) throw error;
            return data;
        } catch (error) {
            throw error;
        }
    }
    
    static async updatePassword(newPassword) {
        try {
            const { data, error } = await supabase.auth.updateUser({
                password: newPassword
            });
            
            if (error) throw error;
            return data;
        } catch (error) {
            throw error;
        }
    }
    
    // ============ USER MANAGEMENT ============
    static async getCurrentUser() {
        try {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (error) throw error;
            return user;
        } catch (error) {
            throw error;
        }
    }
    
    static async getSession() {
        try {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error) throw error;
            return session;
        } catch (error) {
            throw error;
        }
    }
    
    static async updateUser(updates) {
        try {
            const { data, error } = await supabase.auth.updateUser({
                ...updates
            });
            
            if (error) throw error;
            
            // Update profile in users table
            if (updates.data) {
                await supabase
                    .from('users')
                    .update(updates.data)
                    .eq('id', data.user.id);
            }
            
            return data;
        } catch (error) {
            throw error;
        }
    }
    
    static async refreshSession() {
        try {
            const { data, error } = await supabase.auth.refreshSession();
            if (error) throw error;
            return data;
        } catch (error) {
            throw error;
        }
    }
    
    // ============ AUTH STATE ============
    static onAuthStateChange(callback) {
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                callback(event, session);
            }
        );
        return subscription;
    }
    
    // ============ CHECK AUTH ============
    static async isAuthenticated() {
        try {
            const session = await this.getSession();
            return !!session;
        } catch {
            return false;
        }
    }
    
    static async requireAuth() {
        const session = await this.getSession();
        if (!session) {
            throw new Error('Authentication required');
        }
        return session;
    }
    
    // ============ ROLE CHECK ============
    static async hasRole(role) {
        try {
            const user = await this.getCurrentUser();
            if (!user) return false;
            
            const { data } = await supabase
                .from('users')
                .select('role')
                .eq('id', user.id)
                .single();
            
            return data?.role === role;
        } catch {
            return false;
        }
    }
}

export default Auth;

// React Hook
import { useEffect, useState } from 'react';
import Auth from './auth';

export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);
    
    useEffect(() => {
        // Get initial session
        Auth.getSession().then((sess) => {
            setSession(sess);
            setUser(sess?.user ?? null);
            setLoading(false);
        });
        
        // Listen to auth changes
        const subscription = Auth.onAuthStateChange((event, sess) => {
            setSession(sess);
            setUser(sess?.user ?? null);
            setLoading(false);
        });
        
        return () => subscription.unsubscribe();
    }, []);
    
    return { user, session, loading };
}`,
      language: "javascript"
    }
  ]
};