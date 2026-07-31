export const chapter = {
  slug: "authentication-2fa",
  title: "Two-Factor Authentication (2FA)",
  description: "Implementasi Two-Factor Authentication dengan TOTP dan OTP.",
  icon: "SiAuth0",
  color: "#EB5424",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["authentication-jwt"],
  tags: ["auth", "2fa", "totp", "otp"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu 2FA?

Two-Factor Authentication menambahkan **lapisan keamanan kedua** setelah password. User harus membuktikan identitas dengan **dua faktor berbeda**:

| Faktor | Contoh |
|--------|--------|
| **Something you know** | Password, PIN |
| **Something you have** | Phone (OTP), Authenticator app |
| **Something you are** | Fingerprint, Face ID |

## TOTP (Time-Based One-Time Password)

Standard yang dipakai Google Authenticator, Authy, dll.

### Setup TOTP

\`\`\`bash
npm install otplib qrcode
\`\`\`

\`\`\`javascript
import { authenticator } from 'otplib';
import QRCode from 'qrcode';

// Generate secret
const secret = authenticator.generateSecret();
// Simpan secret ke database (per user)

// Generate QR code untuk Google Authenticator
const otpauth = authenticator.keyuri('budi@email.com', 'MyApp', secret);
const qrCodeDataURL = await QRCode.toDataURL(otpauth);

// Kirim qrCodeDataURL ke frontend (tampilkan sebagai <img>)
\`\`\`

### Verifikasi TOTP

\`\`\`javascript
function verifyTOTP(token, secret) {
    return authenticator.verify({ token, secret });
}

// Di login
const user = await User.findOne({ email });
if (!(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Password salah' });
}

if (user.twoFactorEnabled) {
    // Minta kode 2FA
    const { totpToken } = req.body;
    const isValid = verifyTOTP(totpToken, user.twoFactorSecret);
    if (!isValid) {
        return res.status(401).json({ error: 'Kode 2FA tidak valid' });
    }
}

// Generate JWT setelah semua verifikasi
const token = generateToken(user);
\`\`\`

## OTP via SMS/Email

\`\`\`javascript
import crypto from 'crypto';

function generateOTP(length = 6) {
    return crypto.randomInt(0, Math.pow(10, length))
        .toString()
        .padStart(length, '0');
}

async function sendOTP(user) {
    const otp = generateOTP();
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 menit
    
    // Simpan OTP hash ke database
    user.otpHash = await bcrypt.hash(otp, 10);
    user.otpExpiresAt = expiresAt;
    await user.save();
    
    // Kirim via email/SMS
    await sendEmail(user.email, 'Kode OTP Anda', \`Kode: \${otp}\`);
}
\`\`\`

## Backup Codes

\`\`\`javascript
function generateBackupCodes(count = 8) {
    const codes = [];
    for (let i = 0; i < count; i++) {
        codes.push(crypto.randomBytes(4).toString('hex'));
    }
    // Simpan HASH backup codes ke database
    return codes; // Tampilkan ke user SEKALI SAJA
}
\`\`\`
  `,

  quiz: [
    { question: "2FA singkatan?", options: ["Two-Factor Authentication", "Two-Factor Application", "Two-Form Auth", "Double Factor"], correctAnswer: 0 },
    { question: "TOTP singkatan?", options: ["Total OTP", "Time-Based One-Time Password", "Token OTP", "Temporary OTP"], correctAnswer: 1 },
    { question: "3 jenis faktor autentikasi?", options: ["User,Pass,Token", "Know,Have,Are", "Login,Verify,Access", "Email,SMS,App"], correctAnswer: 1 }
  ],

  codeExamples: []
};