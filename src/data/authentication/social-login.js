export const chapter = {
  slug: "authentication-social-login",
  title: "Social Login Implementation",
  description: "Implementasi Google, GitHub, dan social login lainnya dari scratch.",
  icon: "SiAuth0",
  color: "#EB5424",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["authentication-oauth"],
  tags: ["auth", "social-login", "google", "github"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Google Login (Tanpa Library)

### 1. Setup Google Cloud Console
1. Buka [console.cloud.google.com](https://console.cloud.google.com)
2. APIs & Services → Credentials
3. Create OAuth 2.0 Client ID
4. Set redirect URI: \`http://localhost:3000/auth/google/callback\`

### 2. Frontend
\`\`\`javascript
function loginWithGoogle() {
    const params = new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID,
        redirect_uri: 'http://localhost:3000/auth/google/callback',
        response_type: 'code',
        scope: 'openid email profile',
        access_type: 'offline',
        prompt: 'consent'
    });
    
    window.location.href = \`https://accounts.google.com/o/oauth2/v2/auth?\${params}\`;
}
\`\`\`

### 3. Backend Callback
\`\`\`javascript
app.get('/auth/google/callback', async (req, res) => {
    const { code } = req.query;
    
    // Tukar code dengan token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            code,
            redirect_uri: 'http://localhost:3000/auth/google/callback',
            grant_type: 'authorization_code'
        })
    });
    
    const { access_token } = await tokenResponse.json();
    
    // Ambil user info
    const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: { Authorization: \`Bearer \${access_token}\` }
    });
    const googleUser = await userResponse.json();
    
    // Cari atau buat user di database
    let user = await User.findOne({ googleId: googleUser.id });
    if (!user) {
        user = await User.create({
            googleId: googleUser.id,
            email: googleUser.email,
            name: googleUser.name,
            avatar: googleUser.picture
        });
    }
    
    // Generate JWT & redirect
    const token = generateToken(user);
    res.redirect(\`/\${token}\`);
});
\`\`\`

## GitHub Login

Mirip, beda endpoint:
- Auth URL: \`https://github.com/login/oauth/authorize\`
- Token URL: \`https://github.com/login/oauth/access_token\`
- User Info: \`https://api.github.com/user\`
- Email: \`https://api.github.com/user/emails\`
  `,

  quiz: [
    { question: "Google OAuth redirect URI untuk?", options: ["Hiasan", "Google redirect ke sini setelah user setuju", "Cache", "Analytics"], correctAnswer: 1 },
    { question: "Authorization code ditukar dengan?", options: ["Password", "Access token", "Username", "JWT langsung"], correctAnswer: 1 }
  ],

  codeExamples: []
};