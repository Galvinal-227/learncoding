export const chapter = {
  slug: "edge-functions",
  title: "Edge Functions",
  description: "Mengembangkan dan mendeploy Edge Functions di Supabase menggunakan Deno.",
  icon: "SiSupabase",
  color: "#3ECF8E",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["supabase-introduction", "supabase-database", "supabase-auth"],
  tags: ["supabase", "edge-functions", "deno", "serverless"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Edge Functions?

Edge Functions adalah serverless functions yang berjalan di edge (dekat dengan user) menggunakan Deno runtime.

## Setup Edge Functions

### Instalasi CLI
\`\`\`bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Initialize project
supabase init

# Start local development
supabase start

# Create new function
supabase functions new my-function

# List functions
supabase functions list

# Deploy function
supabase functions deploy my-function
\`\`\`

## Basic Function

\`\`\`typescript
// functions/my-function/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

serve(async (req) => {
    const { name } = await req.json();
    
    return new Response(
        JSON.stringify({
            message: \`Hello, \${name || 'World'}!\`,
            timestamp: new Date().toISOString()
        }),
        {
            headers: { "Content-Type": "application/json" },
            status: 200
        }
    );
});
\`\`\`

## Function with Database

\`\`\`typescript
// functions/get-users/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
    try {
        // Create Supabase client
        const supabase = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_ANON_KEY') ?? ''
        );
        
        // Get users
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .limit(10);
        
        if (error) throw error;
        
        return new Response(
            JSON.stringify({ success: true, data }),
            {
                headers: { "Content-Type": "application/json" },
                status: 200
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            {
                headers: { "Content-Type": "application/json" },
                status: 500
            }
        );
    }
});
\`\`\`

## Function with Auth

\`\`\`typescript
// functions/protected/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
    try {
        // Get JWT from header
        const authHeader = req.headers.get('Authorization');
        if (!authHeader) {
            return new Response(
                JSON.stringify({ error: 'No authorization header' }),
                { status: 401, headers: { "Content-Type": "application/json" } }
            );
        }
        
        const token = authHeader.replace('Bearer ', '');
        
        // Verify JWT
        const supabase = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_ANON_KEY') ?? ''
        );
        
        const { data: { user }, error } = await supabase.auth.getUser(token);
        
        if (error || !user) {
            return new Response(
                JSON.stringify({ error: 'Invalid token' }),
                { status: 401, headers: { "Content-Type": "application/json" } }
            );
        }
        
        // Protected endpoint
        return new Response(
            JSON.stringify({
                success: true,
                user: {
                    id: user.id,
                    email: user.email
                }
            }),
            {
                headers: { "Content-Type": "application/json" },
                status: 200
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                headers: { "Content-Type": "application/json" },
                status: 500
            }
        );
    }
});
\`\`\`

## Function with URL Parameters

\`\`\`typescript
// functions/hello/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

serve(async (req) => {
    const url = new URL(req.url);
    const name = url.searchParams.get('name') || 'World';
    
    return new Response(
        JSON.stringify({
            message: \`Hello, \${name}!\`,
            path: url.pathname,
            query: Object.fromEntries(url.searchParams)
        }),
        {
            headers: { "Content-Type": "application/json" },
            status: 200
        }
    );
});
\`\`\`

## Function with CORS

\`\`\`typescript
// functions/cors/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
};

serve(async (req) => {
    // Handle preflight
    if (req.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }
    
    try {
        // Your logic here
        const data = { message: 'Hello from edge!' };
        
        return new Response(
            JSON.stringify(data),
            {
                headers: {
                    ...corsHeaders,
                    "Content-Type": "application/json"
                },
                status: 200
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                headers: {
                    ...corsHeaders,
                    "Content-Type": "application/json"
                },
                status: 500
            }
        );
    }
});
\`\`\`

## Function with Environment Variables

\`\`\`typescript
// functions/config/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

serve(async (req) => {
    // Access environment variables
    const apiKey = Deno.env.get('API_KEY');
    const databaseUrl = Deno.env.get('DATABASE_URL');
    
    return new Response(
        JSON.stringify({
            hasApiKey: !!apiKey,
            hasDatabaseUrl: !!databaseUrl,
            environment: Deno.env.get('ENVIRONMENT') || 'development'
        }),
        {
            headers: { "Content-Type": "application/json" },
            status: 200
        }
    );
});
\`\`\`

## Deploy Edge Functions

### Local Development
\`\`\`bash
# Start local Supabase
supabase start

# Serve functions locally
supabase functions serve --env-file .env.local

# Test function
curl -X POST http://localhost:54321/functions/v1/my-function \\
    -H "Content-Type: application/json" \\
    -d '{"name": "John"}'
\`\`\`

### Deploy to Production
\`\`\`bash
# Set environment variables
supabase secrets set API_KEY=your-api-key
supabase secrets set DATABASE_URL=your-database-url

# Deploy function
supabase functions deploy my-function

# Deploy all functions
supabase functions deploy --all

# Get function URL
supabase functions list
\`\`\`

## Function Examples

### Webhook Handler
\`\`\`typescript
// functions/webhook/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
    try {
        const payload = await req.json();
        
        // Verify webhook signature
        const signature = req.headers.get('X-Webhook-Signature');
        // Validate signature...
        
        // Process webhook
        const supabase = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        );
        
        // Store webhook data
        const { data, error } = await supabase
            .from('webhooks')
            .insert([{
                event: payload.event,
                data: payload.data,
                received_at: new Date().toISOString()
            }]);
        
        if (error) throw error;
        
        return new Response(
            JSON.stringify({ success: true }),
            {
                headers: { "Content-Type": "application/json" },
                status: 200
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            {
                headers: { "Content-Type": "application/json" },
                status: 500
            }
        );
    }
});
\`\`\`

### Email Sender
\`\`\`typescript
// functions/send-email/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
    try {
        const { to, subject, html } = await req.json();
        
        // Validate input
        if (!to || !subject || !html) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
        
        // Send email (using a service like Resend, SendGrid, etc.)
        const emailData = {
            to,
            subject,
            html,
            from: 'noreply@yourapp.com'
        };
        
        // Store in database
        const supabase = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_ANON_KEY') ?? ''
        );
        
        await supabase
            .from('emails')
            .insert([{
                to,
                subject,
                html,
                sent_at: new Date().toISOString()
            }]);
        
        return new Response(
            JSON.stringify({ success: true, email: emailData }),
            {
                headers: { "Content-Type": "application/json" },
                status: 200
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            {
                headers: { "Content-Type": "application/json" },
                status: 500
            }
        );
    }
});
\`\`\`

## Best Practices

1. **Keep functions small** and focused
2. **Use environment variables** for secrets
3. **Handle errors** gracefully
4. **Add CORS** for browser requests
5. **Validate input** before processing
6. **Use TypeScript** for type safety
7. **Log important events** for debugging
8. **Set timeouts** appropriately
9. **Use caching** when possible
10. **Monitor function performance**
  `,
  quiz: [
    {
      question: "Runtime yang digunakan Edge Functions adalah?",
      options: [
        "Node.js",
        "Deno",
        "Bun",
        "Python"
      ],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk deploy Edge Function adalah?",
      options: [
        "supabase deploy",
        "supabase functions deploy",
        "supabase publish",
        "supabase functions publish"
      ],
      correctAnswer: 1
    },
    {
      question: "Method untuk mengakses environment variable di Deno adalah?",
      options: [
        "process.env",
        "Deno.env.get()",
        "env.get()",
        "Deno.getEnv()"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Edge Functions System",
      code: `// ============================================
// 1. functions/auth-verify/index.ts
// ============================================
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
    try {
        const authHeader = req.headers.get('Authorization');
        if (!authHeader) {
            return new Response(
                JSON.stringify({ error: 'No authorization header' }),
                { status: 401, headers: { "Content-Type": "application/json" } }
            );
        }
        
        const token = authHeader.replace('Bearer ', '');
        
        const supabase = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_ANON_KEY') ?? ''
        );
        
        const { data: { user }, error } = await supabase.auth.getUser(token);
        
        if (error || !user) {
            return new Response(
                JSON.stringify({ error: 'Invalid token' }),
                { status: 401, headers: { "Content-Type": "application/json" } }
            );
        }
        
        return new Response(
            JSON.stringify({ success: true, user: { id: user.id, email: user.email } }),
            { headers: { "Content-Type": "application/json" }, status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { headers: { "Content-Type": "application/json" }, status: 500 }
        );
    }
});

// ============================================
// 2. functions/users/index.ts
// ============================================
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
};

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }
    
    try {
        const supabase = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_ANON_KEY') ?? ''
        );
        
        const url = new URL(req.url);
        const path = url.pathname.split('/').filter(Boolean);
        const id = path[1];
        
        // GET /users
        if (req.method === 'GET' && !id) {
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .limit(10);
            
            if (error) throw error;
            
            return new Response(
                JSON.stringify({ success: true, data }),
                { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
            );
        }
        
        // GET /users/:id
        if (req.method === 'GET' && id) {
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('id', id)
                .single();
            
            if (error) throw error;
            
            return new Response(
                JSON.stringify({ success: true, data }),
                { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
            );
        }
        
        // POST /users
        if (req.method === 'POST') {
            const body = await req.json();
            const { data, error } = await supabase
                .from('users')
                .insert([body])
                .select()
                .single();
            
            if (error) throw error;
            
            return new Response(
                JSON.stringify({ success: true, data }),
                { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 201 }
            );
        }
        
        // PUT /users/:id
        if (req.method === 'PUT' && id) {
            const body = await req.json();
            const { data, error } = await supabase
                .from('users')
                .update(body)
                .eq('id', id)
                .select()
                .single();
            
            if (error) throw error;
            
            return new Response(
                JSON.stringify({ success: true, data }),
                { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
            );
        }
        
        // DELETE /users/:id
        if (req.method === 'DELETE' && id) {
            const { error } = await supabase
                .from('users')
                .delete()
                .eq('id', id);
            
            if (error) throw error;
            
            return new Response(
                JSON.stringify({ success: true }),
                { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
            );
        }
        
        return new Response(
            JSON.stringify({ error: 'Not found' }),
            { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 404 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
        );
    }
});

// ============================================
// 3. functions/webhook/index.ts
// ============================================
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
    try {
        const payload = await req.json();
        const signature = req.headers.get('X-Webhook-Signature');
        
        // Verify webhook signature
        const webhookSecret = Deno.env.get('WEBHOOK_SECRET');
        if (webhookSecret) {
            // Implement signature verification
        }
        
        const supabase = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        );
        
        // Process webhook based on event
        const { event, data } = payload;
        
        switch (event) {
            case 'user.created':
                await supabase
                    .from('users')
                    .insert([{
                        id: data.id,
                        email: data.email,
                        name: data.name
                    }]);
                break;
                
            case 'user.updated':
                await supabase
                    .from('users')
                    .update({
                        name: data.name,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', data.id);
                break;
                
            case 'user.deleted':
                await supabase
                    .from('users')
                    .delete()
                    .eq('id', data.id);
                break;
                
            default:
                console.log('Unhandled event:', event);
        }
        
        // Log webhook
        await supabase
            .from('webhook_logs')
            .insert([{
                event,
                data,
                received_at: new Date().toISOString()
            }]);
        
        return new Response(
            JSON.stringify({ success: true }),
            { headers: { "Content-Type": "application/json" }, status: 200 }
        );
    } catch (error) {
        console.error('Webhook error:', error);
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { headers: { "Content-Type": "application/json" }, status: 500 }
        );
    }
});

// ============================================
// 4. functions/upload/index.ts
// ============================================
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
    try {
        const formData = await req.formData();
        const file = formData.get('file');
        const userId = formData.get('userId');
        
        if (!file || !userId) {
            return new Response(
                JSON.stringify({ error: 'Missing file or userId' }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
        
        const supabase = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_ANON_KEY') ?? ''
        );
        
        // Upload to storage
        const path = \`\${userId}/\${file.name}\`;
        const { data, error } = await supabase
            .storage
            .from('uploads')
            .upload(path, file, {
                upsert: true,
                metadata: { userId }
            });
        
        if (error) throw error;
        
        // Get public URL
        const { data: { publicUrl } } = supabase
            .storage
            .from('uploads')
            .getPublicUrl(path);
        
        return new Response(
            JSON.stringify({
                success: true,
                data: {
                    path: data.path,
                    url: publicUrl
                }
            }),
            { headers: { "Content-Type": "application/json" }, status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { headers: { "Content-Type": "application/json" }, status: 500 }
        );
    }
});`,
      language: "typescript"
    }
  ]
};