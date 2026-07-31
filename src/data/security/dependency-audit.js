export const chapter = {
  slug: "dependency-audit",
  title: "Dependency Audit",
  description: "Mengaudit dan mengelola dependency untuk keamanan aplikasi.",
  icon: "SiNpm",
  color: "#CB3837",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["security-introduction"],
  tags: ["npm", "dependency", "audit", "vulnerability", "security"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Dependency Audit?

Dependency audit adalah proses memeriksa dan mengelola dependency (pustaka pihak ketiga) untuk mengidentifikasi dan memperbaiki kerentanan keamanan.

## NPM Audit

### Basic Usage
\`\`\`bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Fix vulnerabilities with force (major updates)
npm audit fix --force

# Check for vulnerabilities without fixing
npm audit --json

# Check for vulnerabilities in production only
npm audit --production
\`\`\`

### NPM Audit Report Example
\`\`\`
found 5 vulnerabilities (2 low, 2 moderate, 1 high)
run \`npm audit fix\` to fix them, or \`npm audit\` for details
\`\`\`

## Package.json Security

### Lock Files
\`\`\`bash
# Lock files ensure consistent installations
package-lock.json  # NPM
yarn.lock          # Yarn
pnpm-lock.yaml     # PNPM
\`\`\`

### Peer Dependencies
\`\`\`json
{
    "peerDependencies": {
        "react": "^17.0.0 || ^18.0.0",
        "react-dom": "^17.0.0 || ^18.0.0"
    }
}
\`\`\`

## Scanning Tools

### 1. Snyk
\`\`\`bash
# Install Snyk
npm install -g snyk

# Authenticate
snyk auth

# Test dependencies
snyk test

# Monitor
snyk monitor

# Fix vulnerabilities
snyk wizard
\`\`\`

### 2. Dependabot
\`\`\`yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
    target-branch: "develop"
    labels:
      - "dependencies"
      - "security"
    ignore:
      - dependency-name: "eslint"
        versions: ["8.x"]
\`\`\`

### 3. npm-check-updates
\`\`\`bash
# Install
npm install -g npm-check-updates

# Check for updates
ncu

# Update package.json
ncu -u

# Update with specific target
ncu --target minor
ncu --target patch
ncu --target latest

# Interactive mode
ncu -i
\`\`\`

## Manual Dependency Review

### Check Package Details
\`\`\`bash
# View package info
npm view package-name

# View package vulnerabilities
npm audit --json | grep package-name

# View package dependencies
npm ls package-name

# View outdated packages
npm outdated
\`\`\`

### Security Checklist
\`\`\`json
{
    "name": "my-app",
    "version": "1.0.0",
    "scripts": {
        "security:audit": "npm audit --production",
        "security:scan": "snyk test",
        "security:outdated": "npm outdated",
        "security:check": "npm run security:audit && npm run security:scan"
    },
    "devDependencies": {
        "npm-audit-html": "^1.0.0",
        "snyk": "^1.0.0"
    }
}
\`\`\`

## Vulnerability Types

### 1. Prototype Pollution
\`\`\`javascript
// Vulnerable
const merge = require('merge');
const obj = { };
merge(obj, JSON.parse(userInput));

// Fixed
const merge = require('merge');
const obj = { };
merge(obj, JSON.parse(sanitize(userInput)));
\`\`\`

### 2. Regular Expression Denial of Service (ReDoS)
\`\`\`javascript
// Vulnerable
const regex = /^(a+)+$/;

// Fixed
const regex = /^a+$/;
\`\`\`

### 3. Command Injection
\`\`\`javascript
// Vulnerable
const exec = require('child_process').exec;
exec(\`git push \${userInput}\`);

// Fixed
const exec = require('child_process').exec;
exec('git push', { shell: false });
\`\`\`

## Best Practices

### 1. Regular Updates
\`\`\`bash
# Update dependencies regularly
npm update
npm update --dev
npm update --production

# Update specific package
npm update package-name
\`\`\`

### 2. Pin Dependencies
\`\`\`json
{
    "dependencies": {
        "express": "4.18.2",
        "mongoose": "7.0.0",
        "react": "18.2.0"
    }
}
\`\`\`

### 3. Use Lock Files
\`\`\`bash
# Always commit lock files
git add package-lock.json
\`\`\`

### 4. Review Dependencies
\`\`\`javascript
// Check before installing
const package = {
    name: 'package-name',
    version: '1.0.0',
    description: 'Description',
    author: 'Author Name',
    license: 'MIT',
    repository: 'https://github.com/author/package',
    dependencies: {},
    downloads: 1000000
};
\`\`\`

### 5. Minimize Dependencies
\`\`\`javascript
// ❌ Many dependencies
const _ = require('lodash');
const axios = require('axios');
const moment = require('moment');

// ✅ Fewer dependencies (use native)
const { map, filter } = require('lodash');
const fetch = require('node-fetch');
const date = new Date();
\`\`\`

## CI/CD Integration

### GitHub Actions
\`\`\`yaml
name: Security Audit
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
      
      - name: Run security audit
        run: npm audit --production --json > audit.json
      
      - name: Upload audit results
        uses: actions/upload-artifact@v3
        with:
          name: audit-results
          path: audit.json
      
      - name: Check vulnerabilities
        run: |
          if [ $(cat audit.json | grep -c '"severity":"high"') -gt 0 ]; then
            exit 1
          fi
\`\`\`

## Automatic Updates

### Renovate
\`\`\`json
{
    "extends": [
        "config:base"
    ],
    "packageRules": [
        {
            "matchUpdateTypes": ["minor", "patch"],
            "groupName": "all non-major dependencies",
            "groupSlug": "all-minor-patch"
        },
        {
            "matchUpdateTypes": ["major"],
            "labels": ["dependencies", "major"]
        }
    ],
    "vulnerabilityAlerts": {
        "enabled": true,
        "labels": ["security"]
    }
}
\`\`\`

## Dependency Management Strategy

### 1. Production vs Development
\`\`\`json
{
    "dependencies": {
        "express": "^4.18.0"
    },
    "devDependencies": {
        "eslint": "^8.0.0",
        "jest": "^29.0.0",
        "nodemon": "^2.0.0"
    }
}
\`\`\`

### 2. Semantic Versioning
\`\`\`
^1.2.3  => >=1.2.3 <2.0.0
~1.2.3  => >=1.2.3 <1.3.0
1.2.3   => 1.2.3 exactly
*       => any version
\`\`\`

### 3. Package Health Check
\`\`\`bash
# Check package health
npm package-json package-name
npm info package-name

# Check dependencies
npm ls --depth=0
npm ls --depth=1

# Check duplicate packages
npm dedupe
\`\`\`

## Reporting

### Generate HTML Report
\`\`\`bash
# Install npm-audit-html
npm install -g npm-audit-html

# Generate report
npm audit --json | npm-audit-html --output audit-report.html

# Open report
open audit-report.html
\`\`\`

### Custom Report Script
\`\`\`javascript
// audit-report.js
const fs = require('fs');
const { exec } = require('child_process');

const generateReport = async () => {
    return new Promise((resolve, reject) => {
        exec('npm audit --json', (error, stdout) => {
            if (error) {
                reject(error);
                return;
            }
            
            const auditData = JSON.parse(stdout);
            const report = {
                timestamp: new Date().toISOString(),
                summary: auditData.metadata.vulnerabilities,
                vulnerabilities: auditData.advisories
            };
            
            fs.writeFileSync('audit-report.json', JSON.stringify(report, null, 2));
            resolve(report);
        });
    });
};

generateReport().then(() => {
    console.log('Audit report generated');
});
\`\`\`
  `,
  quiz: [
    {
      question: "Perintah untuk audit dependencies di npm adalah?",
      options: [
        "npm check",
        "npm audit",
        "npm security",
        "npm verify"
      ],
      correctAnswer: 1
    },
    {
      question: "File untuk lock dependencies di npm adalah?",
      options: [
        "package.json",
        "package-lock.json",
        "npm-lock.json",
        "lock.json"
      ],
      correctAnswer: 1
    },
    {
      question: "Tools untuk dependency scanning adalah?",
      options: [
        "Snyk",
        "Docker",
        "Kubernetes",
        "Jenkins"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Dependency Management",
      code: `// security.js - Complete dependency management system

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const util = require('util');
const execPromise = util.promisify(exec);

class DependencySecurity {
    constructor(options = {}) {
        this.projectPath = options.projectPath || process.cwd();
        this.reportPath = options.reportPath || './security-reports';
        this.thresholds = {
            critical: 0,
            high: 1,
            moderate: 5,
            low: 10
        };
    }
    
    // 1. Run NPM Audit
    async runAudit() {
        try {
            const { stdout } = await execPromise('npm audit --json', {
                cwd: this.projectPath
            });
            return JSON.parse(stdout);
        } catch (error) {
            // npm audit exits with non-zero if vulnerabilities found
            if (error.stdout) {
                return JSON.parse(error.stdout);
            }
            throw error;
        }
    }
    
    // 2. Analyze Vulnerabilities
    analyzeVulnerabilities(auditData) {
        const vulnerabilities = {
            total: 0,
            critical: 0,
            high: 0,
            moderate: 0,
            low: 0,
            details: []
        };
        
        if (!auditData || !auditData.advisories) {
            return vulnerabilities;
        }
        
        Object.values(auditData.advisories).forEach(advisory => {
            const severity = advisory.severity || 'low';
            vulnerabilities.total++;
            vulnerabilities[severity] = (vulnerabilities[severity] || 0) + 1;
            
            vulnerabilities.details.push({
                package: advisory.module_name,
                title: advisory.title,
                severity: advisory.severity,
                vulnerable_versions: advisory.vulnerable_versions,
                patched_versions: advisory.patched_versions,
                recommendation: advisory.recommendation,
                cve: advisory.cve,
                cwe: advisory.cwe,
                url: advisory.url,
                findings: advisory.findings
            });
        });
        
        return vulnerabilities;
    }
    
    // 3. Check Threshold
    checkThresholds(vulnerabilities) {
        const violations = [];
        
        Object.keys(this.thresholds).forEach(severity => {
            const count = vulnerabilities[severity] || 0;
            const threshold = this.thresholds[severity];
            
            if (count > threshold) {
                violations.push({
                    severity,
                    count,
                    threshold,
                    message: \`\${severity} vulnerabilities (\${count}) exceed threshold (\${threshold})\`
                });
            }
        });
        
        return violations;
    }
    
    // 4. Generate Report
    generateReport(auditData) {
        const vulnerabilities = this.analyzeVulnerabilities(auditData);
        const violations = this.checkThresholds(vulnerabilities);
        
        const report = {
            timestamp: new Date().toISOString(),
            project: {
                name: JSON.parse(fs.readFileSync(
                    path.join(this.projectPath, 'package.json')
                )).name || 'unknown',
                version: JSON.parse(fs.readFileSync(
                    path.join(this.projectPath, 'package.json')
                )).version || 'unknown'
            },
            summary: {
                total: vulnerabilities.total,
                critical: vulnerabilities.critical,
                high: vulnerabilities.high,
                moderate: vulnerabilities.moderate,
                low: vulnerabilities.low
            },
            vulnerabilities: vulnerabilities.details,
            violations,
            passed: violations.length === 0,
            recommendation: violations.length === 0 ?
                '✅ All clear! No threshold violations.' :
                \`❌ \${violations.length} threshold violation(s) found.\`
        };
        
        this.saveReport(report);
        return report;
    }
    
    // 5. Save Report
    saveReport(report) {
        if (!fs.existsSync(this.reportPath)) {
            fs.mkdirSync(this.reportPath, { recursive: true });
        }
        
        const filename = \`audit-report-\${Date.now()}.json\`;
        const filepath = path.join(this.reportPath, filename);
        
        fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
        console.log(\`Report saved to \${filepath}\`);
        
        // Save latest report
        const latestPath = path.join(this.reportPath, 'latest.json');
        fs.writeFileSync(latestPath, JSON.stringify(report, null, 2));
    }
    
    // 6. Auto Fix
    async autoFix(force = false) {
        try {
            const command = force ? 'npm audit fix --force' : 'npm audit fix';
            const { stdout, stderr } = await execPromise(command, {
                cwd: this.projectPath
            });
            
            return {
                success: true,
                output: stdout,
                errors: stderr,
                fixed: stdout.includes('fixed') || stderr.includes('fixed')
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                output: error.stdout || error.stderr
            };
        }
    }
    
    // 7. Check Updates
    async checkUpdates() {
        try {
            const { stdout } = await execPromise('ncu --json', {
                cwd: this.projectPath
            });
            return JSON.parse(stdout);
        } catch (error) {
            return {};
        }
    }
    
    // 8. Generate HTML Report
    generateHTML(report) {
        const html = \`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Security Audit Report</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                .summary { display: flex; gap: 20px; margin: 20px 0; }
                .card { 
                    padding: 20px; 
                    border-radius: 8px; 
                    background: #f5f5f5; 
                    flex: 1;
                }
                .card.critical { background: #fee; }
                .card.high { background: #fde8e8; }
                .card.moderate { background: #fff3e0; }
                .card.low { background: #f0f4ff; }
                .vulnerability { 
                    padding: 10px; 
                    margin: 10px 0; 
                    border-left: 4px solid #ccc;
                    background: #fafafa;
                }
                .passed { color: green; font-weight: bold; }
                .failed { color: red; font-weight: bold; }
                table { width: 100%; border-collapse: collapse; }
                th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
                th { background: #f5f5f5; }
            </style>
        </head>
        <body>
            <h1>🔒 Security Audit Report</h1>
            <p><strong>Project:</strong> \${report.project.name}</p>
            <p><strong>Version:</strong> \${report.project.version}</p>
            <p><strong>Timestamp:</strong> \${report.timestamp}</p>
            <p><strong>Status:</strong> <span class="\${report.passed ? 'passed' : 'failed'}">
                \${report.passed ? '✅ PASSED' : '❌ FAILED'}
            </span></p>
            
            <h2>Summary</h2>
            <div class="summary">
                <div class="card">Total: \${report.summary.total}</div>
                <div class="card critical">Critical: \${report.summary.critical}</div>
                <div class="card high">High: \${report.summary.high}</div>
                <div class="card moderate">Moderate: \${report.summary.moderate}</div>
                <div class="card low">Low: \${report.summary.low}</div>
            </div>
            
            \${report.violations.length > 0 ? \`
                <h2>⚠️ Threshold Violations</h2>
                <ul>
                    \${report.violations.map(v => \`<li>\${v.message}</li>\`).join('')}
                </ul>
            \` : ''}
            
            <h2>Vulnerabilities</h2>
            <table>
                <thead>
                    <tr>
                        <th>Package</th>
                        <th>Severity</th>
                        <th>Title</th>
                        <th>CVE</th>
                        <th>Patched</th>
                    </tr>
                </thead>
                <tbody>
                    \${report.vulnerabilities.map(v => \`
                        <tr>
                            <td>\${v.package}</td>
                            <td>\${v.severity}</td>
                            <td>\${v.title}</td>
                            <td>\${v.cve || 'N/A'}</td>
                            <td>\${v.patched_versions || 'Not available'}</td>
                        </tr>
                    \`).join('')}
                </tbody>
            </table>
            
            <p><strong>Recommendation:</strong> \${report.recommendation}</p>
        </body>
        </html>
        \`;
        
        const htmlPath = path.join(this.reportPath, 'report.html');
        fs.writeFileSync(htmlPath, html);
        console.log(\`HTML report saved to \${htmlPath}\`);
        return htmlPath;
    }
    
    // 9. Full Security Scan
    async fullScan() {
        console.log('🔍 Running security scan...');
        
        // Run audit
        const auditData = await this.runAudit();
        const report = this.generateReport(auditData);
        
        // Check updates
        const updates = await this.checkUpdates();
        if (Object.keys(updates).length > 0) {
            console.log('📦 Updates available:', Object.keys(updates).length);
        }
        
        // Generate HTML
        const htmlPath = this.generateHTML(report);
        console.log('📊 Report:', htmlPath);
        
        return {
            report,
            updates,
            passed: report.passed
        };
    }
}

// Usage
const security = new DependencySecurity({
    projectPath: process.cwd(),
    reportPath: './security-reports',
    thresholds: {
        critical: 0,
        high: 1,
        moderate: 5,
        low: 10
    }
});

// Run scan
security.fullScan().then(result => {
    if (!result.passed) {
        console.log('⚠️ Security issues found!');
        process.exit(1);
    }
    console.log('✅ Security scan passed!');
});

module.exports = DependencySecurity;`,
      language: "javascript"
    }
  ]
};