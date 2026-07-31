export const chapter = {
  slug: "https",
  title: "HTTPS & SSL/TLS",
  description: "Mengimplementasikan HTTPS dan SSL/TLS untuk keamanan komunikasi web.",
  icon: "SiCloudflare",
  color: "#F38020",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["security-introduction"],
  tags: ["https", "ssl", "tls", "certificate", "encryption"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu HTTPS?

HTTPS (Hypertext Transfer Protocol Secure) adalah versi aman dari HTTP yang menggunakan SSL/TLS untuk enkripsi data.

## SSL/TLS

### TLS Handshake

\`\`\`
Client Hello → Server Hello → Certificate → Key Exchange → Finished
\`\`\`

### Enkripsi
- **Symmetric Encryption**: AES, ChaCha20
- **Asymmetric Encryption**: RSA, ECDSA
- **Key Exchange**: Diffie-Hellman, ECDHE

## SSL Certificate Types

| Type | Validation | Use Case |
|------|------------|----------|
| **DV** | Domain Validation | Personal sites |
| **OV** | Organization Validation | Business sites |
| **EV** | Extended Validation | E-commerce, Banking |
| **Wildcard** | *.domain.com | Multiple subdomains |
| **SAN** | Multiple domains | Different domains |

## SSL/TLS Best Practices

### 1. Use Strong Cipher Suites
\`\`\`
TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305
\`\`\`

### 2. Disable Weak Protocols
\`\`\`
✅ TLS 1.2
✅ TLS 1.3
❌ SSL 2.0
❌ SSL 3.0
❌ TLS 1.0
❌ TLS 1.1
\`\`\`

### 3. HSTS (HTTP Strict Transport Security)
\`\`\`javascript
// HSTS Header
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
\`\`\`

## SSL Implementation

### 1. Let's Encrypt (Free SSL)
\`\`\`bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate certificate
sudo certbot --nginx -d example.com -d www.example.com

# Auto-renewal
sudo certbot renew --dry-run
\`\`\`

### 2. Node.js HTTPS Server
\`\`\`javascript
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
    ca: fs.readFileSync('ca.crt')
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('Hello, Secure World!');
}).listen(443, () => {
    console.log('HTTPS server running on port 443');
});
\`\`\`

### 3. Express with HTTPS
\`\`\`javascript
const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
    minVersion: 'TLSv1.2'
};

https.createServer(options, app).listen(443);

// HTTP to HTTPS redirect
app.use((req, res, next) => {
    if (!req.secure) {
        return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
});
\`\`\`

## SSL Certificate Check

### Online Tools
- SSL Labs (ssllabs.com)
- SSL Checker (sslchecker.com)
- Certificate Transparency

### Node.js SSL Check
\`\`\`javascript
const sslChecker = require('ssl-checker');

const checkSSL = async (host) => {
    try {
        const result = await sslChecker(host);
        console.log('Valid:', result.valid);
        console.log('Valid from:', result.validFrom);
        console.log('Valid to:', result.validTo);
        console.log('Days remaining:', result.daysRemaining);
    } catch (error) {
        console.error('SSL Check failed:', error);
    }
};
\`\`\`

## Security Headers for HTTPS

\`\`\`javascript
const securityHeaders = {
    // HSTS - Force HTTPS
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    
    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',
    
    // Prevent clickjacking
    'X-Frame-Options': 'DENY',
    
    // CSP
    'Content-Security-Policy': "default-src 'self'",
    
    // Referrer Policy
    'Referrer-Policy': 'strict-origin-when-cross-origin'
};
\`\`\`

## Common SSL Issues

### 1. Mixed Content
\`\`\`html
<!-- ❌ Mixed content -->
<img src="http://example.com/image.jpg">

<!-- ✅ HTTPS content -->
<img src="https://example.com/image.jpg">
\`\`\`

### 2. Certificate Expiration
- Set up monitoring
- Auto-renewal
- Alerts 30 days before expiry

### 3. Weak Ciphers
\`\`\`nginx
# Nginx - Strong ciphers
ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256';
ssl_prefer_server_ciphers on;
\`\`\`

## Certificate Management

### 1. Generate Self-Signed Certificate
\`\`\`bash
# Generate private key
openssl genrsa -out server.key 2048

# Generate CSR
openssl req -new -key server.key -out server.csr

# Generate self-signed certificate
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
\`\`\`

### 2. Generate CSR for CA
\`\`\`bash
openssl req -new -newkey rsa:2048 -nodes -keyout domain.key -out domain.csr
\`\`\`

### 3. View Certificate Info
\`\`\`bash
openssl x509 -in certificate.crt -text -noout
openssl s_client -connect example.com:443
\`\`\`

## Best Practices Summary

1. **Always use HTTPS** in production
2. **Use strong cipher suites** (TLS 1.2+)
3. **Enable HSTS** with preload
4. **Monitor certificate expiration**
5. **Use Let's Encrypt** for free certificates
6. **Redirect HTTP to HTTPS**
7. **Use security headers**
8. **Regular security audits**
9. **Implement certificate pinning** for mobile apps
10. **Keep certificates secure** (private keys)
  `,
  quiz: [
    {
      question: "Apa fungsi HTTPS?",
      options: [
        "Mempercepat loading website",
        "Mengenkripsi komunikasi web",
        "Mengurangi bandwidth",
        "Menambah fitur"
      ],
      correctAnswer: 1
    },
    {
      question: "Header untuk force HTTPS adalah?",
      options: [
        "X-HTTPS",
        "Strict-Transport-Security",
        "Secure-HTTPS",
        "HSTS-Force"
      ],
      correctAnswer: 1
    },
    {
      question: "Versi TLS yang aman digunakan adalah?",
      options: [
        "TLS 1.0",
        "TLS 1.1",
        "TLS 1.2/1.3",
        "SSL 3.0"
      ],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "Complete HTTPS Setup",
      code: `// server.js - Complete HTTPS server with best practices

const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');

const app = express();

// 1. Security Headers
app.use(helmet({
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    }
}));

// 2. HTTP to HTTPS redirect
app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
        return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
});

// 3. Security Headers (additional)
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
    next();
});

// 4. Routes
app.get('/', (req, res) => {
    res.json({
        secure: req.secure,
        protocol: req.protocol,
        headers: req.headers
    });
});

// 5. HTTPS Server
const options = {
    key: fs.readFileSync(path.join(__dirname, 'certs', 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'certs', 'server.crt')),
    ca: fs.readFileSync(path.join(__dirname, 'certs', 'ca.crt')),
    
    // TLS Options
    minVersion: 'TLSv1.2',
    maxVersion: 'TLSv1.3',
    
    // Cipher suites
    ciphers: [
        'ECDHE-ECDSA-AES256-GCM-SHA384',
        'ECDHE-RSA-AES256-GCM-SHA384',
        'ECDHE-ECDSA-CHACHA20-POLY1305',
        'ECDHE-RSA-CHACHA20-POLY1305',
        'ECDHE-ECDSA-AES128-GCM-SHA256',
        'ECDHE-RSA-AES128-GCM-SHA256'
    ].join(':'),
    
    honorCipherOrder: true
};

// Start HTTPS server
const httpsServer = https.createServer(options, app);
httpsServer.listen(443, () => {
    console.log('HTTPS server running on port 443');
});

// 6. HTTP server (redirect)
const httpApp = express();
httpApp.use((req, res) => {
    res.redirect('https://' + req.headers.host + req.url);
});

const httpServer = http.createServer(httpApp);
httpServer.listen(80, () => {
    console.log('HTTP server running on port 80 (redirects to HTTPS)');
});

// 7. Certificate renewal monitoring
const checkCertificate = () => {
    const cert = fs.readFileSync(path.join(__dirname, 'certs', 'server.crt'));
    const x509 = require('crypto').X509Certificate;
    const certInfo = new x509(cert);
    const expiryDate = new Date(certInfo.validTo);
    const daysRemaining = Math.floor((expiryDate - new Date()) / (1000 * 60 * 60 * 24));
    
    console.log(\`Certificate expires in \${daysRemaining} days\`);
    
    if (daysRemaining < 30) {
        console.warn('⚠️ Certificate will expire soon!');
    }
};

// Check certificate daily
setInterval(checkCertificate, 24 * 60 * 60 * 1000);

// 8. Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        https: req.secure,
        tlsVersion: req.socket.getProtocol()
    });
});

module.exports = app;`,
      language: "javascript"
    }
  ]
};