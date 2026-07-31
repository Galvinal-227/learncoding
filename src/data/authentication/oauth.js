export const chapter = {
  slug: "authentication-oauth",
  title: "OAuth 2.0 & Social Login",
  description: "Pahami OAuth 2.0 flow dan implementasi social login.",
  icon: "SiAuth0",
  color: "#EB5424",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["authentication-jwt"],
  tags: ["auth", "oauth", "social-login", "google"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu OAuth 2.0?

OAuth 2.0 adalah protokol **authorization** (bukan authentication!) yang memungkinkan aplikasi mengakses data user di layanan lain tanpa tahu password mereka.

## 4 Roles OAuth

| Role | Deskripsi | Contoh |
|------|-----------|--------|
| **Resource Owner** | Pemilik data | User |
| **Client** | Aplikasi yang minta akses | Website kamu |
| **Authorization Server** | Server yang kasih izin | Google Auth Server |
| **Resource Server** | Server yang punya data | Google API |

## Authorization Code Flow (Paling Aman)

\`\`\`
1. User klik "Login with Google"
2. Redirect ke Google login page
3. User setuju (consent screen)
4. Google redirect balik dengan authorization code
5. Server tukar code dengan access token
6. Server pakai access token untuk ambil user data
\`\`\`

## Implementasi dengan Next.js + NextAuth

\`\`\`bash
npm install next-auth
\`\`\`

\`\`\`javascript
// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.id = user.id;
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            return session;
        }
    }
});

export { handler as GET, handler as POST };
\`\`\`

## OAuth 2.0 Grant Types

| Grant Type | Use Case |
|------------|----------|
| **Authorization Code** | Web app (paling aman) |
| **PKCE** | Mobile & SPA (tanpa client secret) |
| **Client Credentials** | Server-to-server |
| **Device Code** | TV, IoT devices |
| **Implicit** | ⚠️ Deprecated, jangan dipakai |
  `,

  quiz: [
    { question: "OAuth 2.0 adalah protokol?", options: ["Authentication", "Authorization", "Password", "Database"], correctAnswer: 1, explanation: "OAuth 2.0 adalah authorization framework, bukan authentication. Untuk auth, tambahkan OpenID Connect." },
    { question: "Flow OAuth paling aman untuk web app?", options: ["Implicit", "Authorization Code", "Password", "Client Credentials"], correctAnswer: 1 },
    { question: "4 roles OAuth?", options: ["Admin,User,Guest,Dev", "Resource Owner,Client,Auth Server,Resource Server", "GET,POST,PUT,DELETE", "Browser,Server,DB,API"], correctAnswer: 1 }
  ],

  codeExamples: []
};