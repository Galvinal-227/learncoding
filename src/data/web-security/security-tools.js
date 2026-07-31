export const chapter = {
  slug: "web-security-security-tools",
  title: "Security Tools",
  description: "Tools untuk menguji dan meningkatkan keamanan aplikasi web.",
  icon: "SiOwasp",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["web-security-security-headers"],
  tags: ["security", "tools", "testing", "audit"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Security Testing Tools

| Tool | Type | Fungsi |
|------|------|--------|
| **OWASP ZAP** | DAST | Automated vulnerability scanner |
| **Burp Suite** | Proxy | Manual penetration testing |
| **Nikto** | Scanner | Web server scanner |
| **Nmap** | Network | Port scanning |
| **sqlmap** | SQL | SQL injection testing |
| **Hydra** | Brute force | Password cracking |
| **Metasploit** | Framework | Exploitation |

## Dependency Scanning

\`\`\`bash
# NPM Audit
npm audit
npm audit fix
npm audit --audit-level=high

# Snyk
npx snyk test
npx snyk monitor

# OWASP Dependency Check
dependency-check --scan .
\`\`\`

## HTTP Security Headers Check

\`\`\`bash
# Online
https://securityheaders.com
https://observatory.mozilla.org

# CLI
curl -I https://example.com | grep -i security
npx hsecscan https://example.com
\`\`\`

## SSL/TLS Testing

\`\`\`bash
# SSL Labs
https://ssllabs.com/ssltest/

# CLI
npx testssl https://example.com
openssl s_client -connect example.com:443
\`\`\`

## Static Code Analysis (SAST)

\`\`\`bash
# JavaScript/TypeScript
npm install -D eslint-plugin-security
npx eslint --plugin-security .

# Semgrep (multi-language)
npx semgrep --config=auto .

# SonarQube (comprehensive)
docker run -d --name sonarqube -p 9000:9000 sonarqube
\`\`\`

## Secret Scanning

\`\`\`bash
# git-secrets (prevent commit secrets)
git secrets --scan

# Gitleaks
gitleaks detect --source .

# TruffleHog
trufflehog filesystem .
\`\`\`

## Browser DevTools Security

\`\`\`
Chrome DevTools → Security tab:
- Certificate info
- Mixed content warnings
- Subresource integrity
- Security overview
\`\`\`

## Continuous Security (CI/CD)

\`\`\`yaml
# GitHub Actions
- name: Security audit
  run: npm audit --audit-level=high
- name: Secret scan
  uses: gitleaks/gitleaks-action@v2
- name: SAST
  uses: github/codeql-action/analyze@v3
\`\`\`

## Penetration Testing Checklist

\`\`\`
✅ Input validation (XSS, SQLi)
✅ Authentication (brute force, session)
✅ Authorization (IDOR, privilege escalation)
✅ API security (rate limiting, auth)
✅ File upload (type validation)
✅ Error handling (no stack traces)
✅ HTTPS/TLS configuration
✅ Security headers
✅ Cookie security
✅ Dependency vulnerabilities
\`\`\`
  `,

  quiz: [
    { question: "OWASP ZAP?", options: ["Code editor", "Automated vulnerability scanner", "Database", "Framework"], correctAnswer: 1 },
    { question: "npm audit?", options: ["Install", "Check dependencies for vulnerabilities", "Build", "Publish"], correctAnswer: 1 },
    { question: "Semgrep?", options: ["Database", "Static code analysis (SAST)", "Network scan", "Brute force"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Quick Security Check",
      language: "bash",
      code: `# Dependency vulnerabilities
npm audit

# Secret leaks in code
gitleaks detect --source .

# HTTP headers
curl -I https://example.com

# SSL/TLS
npx testssl https://example.com

# Static analysis
npx semgrep --config=auto .`
    }
  ]
};