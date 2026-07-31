export const chapter = {
  slug: "helmet",
  title: "Helmet.js Security Headers",
  description: "Menggunakan Helmet.js untuk mengamankan Express.js aplikasi dengan security headers.",
  icon: "SiExpress",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["security-introduction", "security-https"],
  tags: ["helmet", "security-headers", "express", "csp"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Helmet.js?

Helmet.js adalah middleware untuk Express.js yang membantu mengamankan aplikasi dengan mengatur berbagai HTTP security headers.

## Instalasi

\`\`\`bash
npm install helmet
\`\`\`

## Basic Usage

\`\`\`javascript
const express = require('express');
const helmet = require('helmet');

const app = express();

// Basic usage - all defaults
app.use(helmet());

// Or configure specific headers
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'"],
            fontSrc: ["'self'"],
            objectSrc: ["'none'"],
            frameAncestors: ["'none'"]
        }
    }
}));
\`\`\`

## Security Headers

### 1. Content-Security-Policy (CSP)

\`\`\`javascript
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.example.com"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.example.com"],
        imgSrc: ["'self'", "data:", "https://images.example.com"],
        connectSrc: ["'self'", "https://api.example.com"],
        fontSrc: ["'self'", "https://fonts.example.com"],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        upgradeInsecureRequests: []
    },
    reportOnly: false
}));
\`\`\`

### 2. HSTS (Strict-Transport-Security)

\`\`\`javascript
app.use(helmet.hsts({
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true
}));
\`\`\`

### 3. X-Frame-Options

\`\`\`javascript
app.use(helmet.frameguard({
    action: 'deny' // or 'sameorigin'
}));
\`\`\`

### 4. XSS Protection

\`\`\`javascript
app.use(helmet.xssFilter());
\`\`\`

### 5. No Sniff

\`\`\`javascript
app.use(helmet.noSniff());
\`\`\`

### 6. Referrer Policy

\`\`\`javascript
app.use(helmet.referrerPolicy({
    policy: 'strict-origin-when-cross-origin'
}));
\`\`\`

### 7. Permissions Policy

\`\`\`javascript
app.use(helmet.permissionsPolicy({
    features: {
        geolocation: ["'none'"],
        microphone: ["'none'"],
        camera: ["'none'"],
        payment: ["'none'"],
        usb: ["'none'"]
    }
}));
\`\`\`

## Complete Configuration

\`\`\`javascript
const express = require('express');
const helmet = require('helmet');

const app = express();

// Complete helmet configuration
app.use(helmet({
    // Content Security Policy
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: [
                "'self'",
                "'unsafe-inline'",
                "'unsafe-eval'",
                "https://cdn.jsdelivr.net",
                "https://unpkg.com"
            ],
            styleSrc: [
                "'self'",
                "'unsafe-inline'",
                "https://cdn.jsdelivr.net",
                "https://unpkg.com"
            ],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'", "https://api.example.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            objectSrc: ["'none'"],
            frameAncestors: ["'none'"],
            baseUri: ["'self'"],
            formAction: ["'self'"],
            frameSrc: ["'none'"],
            upgradeInsecureRequests: []
        },
        reportOnly: false
    },
    
    // HSTS
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    },
    
    // X-Frame-Options
    frameguard: {
        action: 'deny'
    },
    
    // XSS Filter
    xssFilter: true,
    
    // No Sniff
    noSniff: true,
    
    // Referrer Policy
    referrerPolicy: {
        policy: 'strict-origin-when-cross-origin'
    },
    
    // Permissions Policy
    permissionsPolicy: {
        features: {
            geolocation: ["'none'"],
            microphone: ["'none'"],
            camera: ["'none'"],
            payment: ["'none'"],
            usb: ["'none'"],
            battery: ["'none'"],
            accelerometer: ["'none'"],
            gyroscope: ["'none'"],
            magnetometer: ["'none'"],
            midi: ["'none'"]
        }
    },
    
    // Remove X-Powered-By
    hidePoweredBy: true,
    
    // X-DNS-Prefetch-Control
    dnsPrefetchControl: {
        allow: false
    },
    
    // X-Download-Options
    ieNoOpen: true,
    
    // X-Permitted-Cross-Domain-Policies
    permittedCrossDomainPolicies: {
        permittedPolicies: 'none'
    },
    
    // Expect-CT
    expectCt: {
        maxAge: 86400,
        enforce: true
    },
    
    // Origin-Agent-Cluster
    originAgentCluster: true
}));

// CSP Report handler
app.post('/csp-report', (req, res) => {
    console.log('CSP Violation:', req.body);
    res.status(204).end();
});

app.listen(3000);
\`\`\`

## CSP Report-Only Mode

\`\`\`javascript
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"]
    },
    reportOnly: true,
    reportUri: '/csp-report'
}));
\`\`\`

## Custom Headers

\`\`\`javascript
// Add custom security headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
    next();
});
\`\`\`

## Headers Comparison

| Header | Default | Recommended |
|--------|---------|-------------|
| CSP | Not set | 'self' |
| HSTS | Not set | max-age=31536000 |
| X-Frame-Options | Not set | DENY |
| X-XSS-Protection | Not set | 1; mode=block |
| No Sniff | Not set | nosniff |
| Referrer-Policy | Not set | strict-origin-when-cross-origin |

## Security Headers Checklist

- [ ] Content-Security-Policy
- [ ] Strict-Transport-Security
- [ ] X-Frame-Options
- [ ] X-Content-Type-Options
- [ ] Referrer-Policy
- [ ] Permissions-Policy
- [ ] X-XSS-Protection
- [ ] X-Powered-By (remove)
- [ ] X-DNS-Prefetch-Control
- [ ] X-Download-Options
- [ ] Expect-CT
- [ ] Origin-Agent-Cluster

## Testing Headers

\`\`\`bash
# Check headers with curl
curl -I https://example.com

# Check headers with Security Headers
# https://securityheaders.com

# Check CSP with CSP Evaluator
# https://csp-evaluator.withgoogle.com
\`\`\`

## Best Practices

1. **Start with default** helmet()
2. **Add CSP** for your specific needs
3. **Enable HSTS** in production
4. **Use report-only mode** first for CSP
5. **Test headers** with online tools
6. **Monitor CSP violations** in production
7. **Keep helmet updated** (npm update)
8. **Remove X-Powered-By** header
9. **Set appropriate Referrer-Policy**
10. **Regular security audits**
  `,
  quiz: [
    {
      question: "Apa fungsi Helmet.js?",
      options: [
        "Membuat server HTTP",
        "Menambahkan security headers",
        "Mengelola database",
        "Membuat API"
      ],
      correctAnswer: 1
    },
    {
      question: "Header untuk mencegah clickjacking adalah?",
      options: [
        "X-Frame-Options",
        "X-XSS-Protection",
        "Content-Security-Policy",
        "Strict-Transport-Security"
      ],
      correctAnswer: 0
    },
    {
      question: "Header untuk mencegah XSS adalah?",
      options: [
        "X-Frame-Options",
        "X-XSS-Protection",
        "X-Content-Type-Options",
        "Referrer-Policy"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Helmet Configuration",
      code: `// helmet.config.js - Advanced Helmet configuration

const helmet = require('helmet');

// CSP Directives
const cspDirectives = {
    defaultSrc: ["'self'"],
    
    // Script sources
    scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        "https://cdn.jsdelivr.net",
        "https://unpkg.com",
        "https://cdnjs.cloudflare.com",
        "https://www.googletagmanager.com",
        "https://www.google-analytics.com",
        "https://*.example.com"
    ],
    
    // Style sources
    styleSrc: [
        "'self'",
        "'unsafe-inline'",
        "https://cdn.jsdelivr.net",
        "https://unpkg.com",
        "https://cdnjs.cloudflare.com",
        "https://fonts.googleapis.com",
        "https://*.example.com"
    ],
    
    // Image sources
    imgSrc: [
        "'self'",
        "data:",
        "https:",
        "http:",
        "https://*.example.com",
        "https://images.example.com"
    ],
    
    // Connection sources (WebSocket, fetch, XHR)
    connectSrc: [
        "'self'",
        "https://api.example.com",
        "https://*.example.com",
        "wss://*.example.com"
    ],
    
    // Font sources
    fontSrc: [
        "'self'",
        "https://fonts.gstatic.com",
        "https://cdn.jsdelivr.net",
        "https://cdnjs.cloudflare.com"
    ],
    
    // Object/embed sources
    objectSrc: ["'none'"],
    
    // Frame ancestors (prevent clickjacking)
    frameAncestors: ["'none'"],
    
    // Base URI
    baseUri: ["'self'"],
    
    // Form actions
    formAction: ["'self'"],
    
    // Frame sources (deprecated in favor of child-src)
    frameSrc: ["'none'"],
    
    // Upgrade insecure requests
    upgradeInsecureRequests: [],
    
    // Block all mixed content
    blockAllMixedContent: [],
    
    // Sandbox
    sandbox: [
        'allow-scripts',
        'allow-same-origin',
        'allow-forms',
        'allow-modals'
    ]
};

// Custom Helmet configuration
const helmetConfig = {
    // Content Security Policy
    contentSecurityPolicy: {
        directives: cspDirectives,
        reportOnly: false,
        reportUri: '/api/csp-report'
    },
    
    // HSTS
    hsts: {
        maxAge: 31536000, // 1 year
        includeSubDomains: true,
        preload: true
    },
    
    // X-Frame-Options
    frameguard: {
        action: 'deny'
    },
    
    // XSS Filter
    xssFilter: true,
    
    // No Sniff
    noSniff: true,
    
    // Referrer Policy
    referrerPolicy: {
        policy: 'strict-origin-when-cross-origin'
    },
    
    // Permissions Policy
    permissionsPolicy: {
        features: {
            geolocation: ["'none'"],
            microphone: ["'none'"],
            camera: ["'none'"],
            payment: ["'none'"],
            usb: ["'none'"],
            battery: ["'none'"],
            accelerometer: ["'none'"],
            gyroscope: ["'none'"],
            magnetometer: ["'none'"],
            midi: ["'none'"],
            autoplay: ["'self'"],
            encryptedMedia: ["'self'"],
            fullscreen: ["'self'"],
            pictureInPicture: ["'self'"],
            screenWakeLock: ["'self'"],
            xrSpacialTracking: ["'none'"]
        }
    },
    
    // Remove X-Powered-By
    hidePoweredBy: true,
    
    // X-DNS-Prefetch-Control
    dnsPrefetchControl: {
        allow: false
    },
    
    // X-Download-Options
    ieNoOpen: true,
    
    // X-Permitted-Cross-Domain-Policies
    permittedCrossDomainPolicies: {
        permittedPolicies: 'none'
    },
    
    // Expect-CT (Certificate Transparency)
    expectCt: {
        maxAge: 86400,
        enforce: true,
        reportUri: 'https://example.com/report-ct'
    },
    
    // Origin-Agent-Cluster
    originAgentCluster: true
};

// CSP Report Handler
const handleCSPReport = (req, res) => {
    const report = req.body;
    
    console.error('CSP Violation Report:', {
        'blocked-uri': report['blocked-uri'],
        'violated-directive': report['violated-directive'],
        'original-policy': report['original-policy'],
        timestamp: new Date().toISOString()
    });
    
    // Log to database or monitoring system
    // saveCSPViolation(report);
    
    res.status(204).end();
};

// Middleware to apply Helmet
const applySecurityHeaders = (app) => {
    app.use(helmet(helmetConfig));
    
    // CSP Report endpoint
    app.post('/api/csp-report', express.json(), handleCSPReport);
    
    // Additional custom headers
    app.use((req, res, next) => {
        // Strict-Transport-Security (additional)
        res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
        
        // X-Content-Type-Options
        res.setHeader('X-Content-Type-Options', 'nosniff');
        
        // X-Frame-Options
        res.setHeader('X-Frame-Options', 'DENY');
        
        // X-XSS-Protection
        res.setHeader('X-XSS-Protection', '1; mode=block');
        
        // Referrer-Policy
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
        
        // Permissions-Policy
        res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), payment=(), usb=()');
        
        next();
    });
};

module.exports = applySecurityHeaders;`,
      language: "javascript"
    }
  ]
};