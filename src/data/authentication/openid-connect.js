export const chapter = {
  slug: "authentication-openid-connect",
  title: "OpenID Connect",
  description: "Pahami OpenID Connect - layer authentication di atas OAuth 2.0.",
  icon: "SiAuth0",
  color: "#EB5424",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["authentication-oauth"],
  tags: ["auth", "oidc", "openid", "identity"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## OAuth 2.0 vs OpenID Connect

| | OAuth 2.0 | OpenID Connect |
|---|----------|---------------|
| Fungsi | Authorization | Authentication |
| Output | Access Token | ID Token (JWT) |
| Pertanyaan | "Boleh akses?" | "Siapa kamu?" |
| Token | Access + Refresh | + ID Token |

## ID Token

JWT yang berisi **identity information** user:

\`\`\`json
{
  "iss": "https://accounts.google.com",
  "sub": "1234567890",
  "aud": "YOUR_CLIENT_ID",
  "exp": 1234567890,
  "iat": 1234567890,
  "email": "budi@gmail.com",
  "email_verified": true,
  "name": "Budi Santoso",
  "picture": "https://..."
}
\`\`\`

## Verifikasi ID Token

\`\`\`javascript
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

const client = jwksClient({
    jwksUri: 'https://accounts.google.com/.well-known/openid-configuration'
});

function getKey(header, callback) {
    client.getSigningKey(header.kid, (err, key) => {
        callback(null, key.getPublicKey());
    });
}

jwt.verify(idToken, getKey, {
    audience: GOOGLE_CLIENT_ID,
    issuer: 'https://accounts.google.com'
}, (err, decoded) => {
    if (err) console.error('Invalid ID Token');
    else console.log('User:', decoded);
});
\`\`\`
  `,

  quiz: [
    { question: "OAuth 2.0 + OpenID Connect = ?", options: ["Authorization saja", "Authorization + Authentication", "Password", "Database"], correctAnswer: 1 },
    { question: "ID Token berisi?", options: ["Access token", "User identity (email, name, dll)", "Password", "API key"], correctAnswer: 1 }
  ],

  codeExamples: []
};