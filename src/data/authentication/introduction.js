export const chapter = {
  slug: "authentication-introduction",
  title: "Pengenalan Authentication",
  description: "Pahami konsep dasar autentikasi, authorization, dan perbedaannya.",
  icon: "SiAuth0",
  color: "#EB5424",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["auth", "authentication", "authorization", "keamanan"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Authentication vs Authorization

| | Authentication | Authorization |
|---|---------------|---------------|
| Pertanyaan | **Siapa kamu?** | **Apa yang boleh kamu lakukan?** |
| Proses | Verifikasi identitas | Cek hak akses |
| Contoh | Login dengan email/password | Admin vs User vs Guest |
| Singkatan | AuthN | AuthZ |

## Analogi Sederhana

\`\`\`
🏨 Hotel:
- Authentication = Tunjuk KTP di resepsionis (buktikan identitas)
- Authorization = Dapat kartu akses kamar 302 (hanya boleh masuk kamar itu)
\`\`\`

## Metode Autentikasi Populer

| Metode | Cara Kerja | Use Case |
|--------|-----------|----------|
| **Session-Based** | Server simpan session, client simpan cookie | Website tradisional |
| **JWT (Token-Based)** | Server issue token, client kirim di header | API, SPA, Mobile |
| **OAuth 2.0** | Delegasi akses ke third-party | Social login, API access |
| **API Key** | Static key di header | Server-to-server |
| **Magic Link** | Link dikirim via email | Passwordless login |
| **WebAuthn/Passkey** | Biometric + public key crypto | Modern auth, anti-phishing |

## Flow Autentikasi Dasar

\`\`\`
1. User kirim credentials (email + password)
2. Server verifikasi
3. Server buat session/token
4. Client simpan token (cookie/localStorage/header)
5. Request berikutnya sertakan token
6. Server validasi token setiap request
\`\`\`

## Arsitektur Modern

\`\`\`
┌──────────┐     Login      ┌──────────────┐
│          │───────────────▶│              │
│  Client  │                │  Auth Server │
│  (SPA)   │◀───────────────│              │
│          │   Token (JWT)  └──────────────┘
└──────────┘
     │
     │ Request + Token
     ▼
┌──────────┐
│  API     │ ← Validasi token tiap request
│  Server  │
└──────────┘
\`\`\`

## Istilah Penting

- **Token**: String terenkripsi yang membuktikan identitas
- **Session**: Data user yang disimpan server
- **Cookie**: Data kecil yang disimpan browser
- **Bearer Token**: Token yang dikirim di header Authorization
- **Refresh Token**: Token untuk mendapatkan access token baru
- **Access Token**: Token untuk akses API (short-lived)
  `,

  quiz: [
    { question: "Authentication vs Authorization?", options: ["Sama", "AuthN: siapa kamu; AuthZ: apa yang boleh", "AuthZ: login; AuthN: hak akses", "Tidak ada beda"], correctAnswer: 1 },
    { question: "Token-Based auth pakai apa?", options: ["Session", "JWT", "Cookie saja", "IP address"], correctAnswer: 1 },
    { question: "Access Token biasanya?", options: ["Permanen", "Short-lived (menit/jam)", "Tidak expired", "Sama seperti password"], correctAnswer: 1, explanation: "Access token biasanya short-lived (15 menit - 1 jam) untuk keamanan. Refresh token lebih panjang." }
  ],

  codeExamples: []
};