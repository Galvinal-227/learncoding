export const chapter = {
  slug: "secrets-management",
  title: "Secrets Management",
  description: "Mengelola secrets dengan aman menggunakan environment variables, Vault, dan best practices.",
  icon: "SiVault",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["security-introduction"],
  tags: ["secrets", "vault", "env", "security", "configuration"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Secrets Management?

Secrets management adalah praktik menyimpan, mengakses, dan mengelola informasi sensitif seperti password, API keys, dan token dengan aman.

## Environment Variables

### Basic Usage
\`\`\`bash
# .env
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:pass@localhost:5432/db
JWT_SECRET=your-secret-key
API_KEY=your-api-key
\`\`\`

\`\`\`javascript
// .env file
const dotenv = require('dotenv');
dotenv.config();

// Access environment variables
const dbUrl = process.env.DATABASE_URL;
const jwtSecret = process.env.JWT_SECRET;
\`\`\`

### Best Practices
\`\`\`javascript
// Config validation
const Joi = require('joi');

const configSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid('development', 'production', 'test')
        .default('development'),
    PORT: Joi.number().default(3000),
    DATABASE_URL: Joi.string().required(),
    JWT_SECRET: Joi.string().min(32).required(),
    API_KEY: Joi.string().required()
});

const { error, value } = configSchema.validate(process.env);

if (error) {
    throw new Error(\`Config validation error: \${error.message}\`);
}

const config = {
    env: value.NODE_ENV,
    port: value.PORT,
    dbUrl: value.DATABASE_URL,
    jwtSecret: value.JWT_SECRET,
    apiKey: value.API_KEY
};
\`\`\`

## HashiCorp Vault

### Vault Setup
\`\`\`bash
# Start Vault dev server
vault server -dev

# Set environment variable
export VAULT_ADDR='http://127.0.0.1:8200'

# Store secrets
vault kv put secret/app database_url=postgresql://...
vault kv put secret/app jwt_secret=your-secret

# Read secrets
vault kv get secret/app
\`\`\`

### Node.js with Vault
\`\`\`javascript
const vault = require('node-vault');

const vaultClient = vault({
    apiVersion: 'v1',
    endpoint: process.env.VAULT_ADDR || 'http://127.0.0.1:8200',
    token: process.env.VAULT_TOKEN
});

// Read secrets
const getSecrets = async (path) => {
    try {
        const result = await vaultClient.read(path);
        return result.data.data;
    } catch (error) {
        console.error('Vault error:', error);
        throw error;
    }
};

// Use secrets
const init = async () => {
    const secrets = await getSecrets('secret/app');
    
    const config = {
        databaseUrl: secrets.database_url,
        jwtSecret: secrets.jwt_secret,
        apiKey: secrets.api_key
    };
    
    // Start application with secrets
    app.listen(config.port);
};
\`\`\`

## AWS Secrets Manager

\`\`\`javascript
const AWS = require('aws-sdk');
const secretsManager = new AWS.SecretsManager({
    region: process.env.AWS_REGION
});

const getSecret = async (secretName) => {
    try {
        const response = await secretsManager.getSecretValue({
            SecretId: secretName
        }).promise();
        
        if (response.SecretString) {
            return JSON.parse(response.SecretString);
        }
        return null;
    } catch (error) {
        console.error('Secrets Manager error:', error);
        throw error;
    }
};

// Use
const dbSecret = await getSecret('prod/database');
const config = {
    db: {
        host: dbSecret.host,
        username: dbSecret.username,
        password: dbSecret.password,
        database: dbSecret.database
    }
};
\`\`\`

## Google Secret Manager

\`\`\`javascript
const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');
const client = new SecretManagerServiceClient();

const getSecret = async (secretName, version = 'latest') => {
    const name = \`projects/\${process.env.GCP_PROJECT}/secrets/\${secretName}/versions/\${version}\`;
    const [version] = await client.accessSecretVersion({name});
    return version.payload.data.toString('utf8');
};

// Use
const apiKey = await getSecret('api-key');
\`\`\`

## Best Practices

### 1. Never Hardcode Secrets
\`\`\`javascript
// ❌ NEVER DO THIS
const dbPassword = 'password123';
const apiKey = 'sk_live_abc123';

// ✅ Always use environment variables
const dbPassword = process.env.DB_PASSWORD;
const apiKey = process.env.API_KEY;
\`\`\`

### 2. Use Different Secrets per Environment
\`\`\`bash
# .env.development
DATABASE_URL=postgresql://dev:dev@localhost:5432/dev_db

# .env.production
DATABASE_URL=postgresql://prod:prod@db.example.com:5432/prod_db

# .env.test
DATABASE_URL=postgresql://test:test@localhost:5432/test_db
\`\`\`

### 3. Rotate Secrets Regularly
\`\`\`javascript
// Implement secret rotation
const rotateSecret = async (service) => {
    const newSecret = generateSecret();
    await updateServiceSecret(service, newSecret);
    await updateConfigService(service, newSecret);
    await deployNewVersion(service);
};
\`\`\`

### 4. Encrypt Secrets in Transit and at Rest
\`\`\`javascript
// Always use HTTPS for secrets transmission
// Use encrypted storage for secrets at rest
const crypto = require('crypto');

const encryptSecret = (secret, key) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    let encrypted = cipher.update(secret, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const authTag = cipher.getAuthTag();
    return { encrypted, iv, authTag };
};

const decryptSecret = (encryptedData, key) => {
    const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
    decipher.setAuthTag(authTag);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};
\`\`\`

## Secrets Rotation

\`\`\`javascript
// Automatic secrets rotation with Vault
const vault = require('node-vault');

class SecretRotator {
    constructor(vaultClient) {
        this.vault = vaultClient;
        this.interval = null;
    }
    
    startRotation(secretPath, rotationMinutes = 30) {
        this.interval = setInterval(async () => {
            try {
                await this.rotate(secretPath);
            } catch (error) {
                console.error('Rotation failed:', error);
            }
        }, rotationMinutes * 60 * 1000);
    }
    
    async rotate(secretPath) {
        // Generate new secret
        const newSecret = this.generateSecureSecret();
        
        // Update in Vault
        await this.vault.write(secretPath, {
            secret: newSecret,
            rotated_at: new Date().toISOString()
        });
        
        console.log(\`Secret rotated at \${new Date().toISOString()}\`);
    }
    
    generateSecureSecret() {
        return crypto.randomBytes(32).toString('base64');
    }
}
\`\`\`

## Security Checklist

### Development
- [ ] Use .env files (never commit)
- [ ] Add .env to .gitignore
- [ ] Use different secrets per environment
- [ ] Validate environment variables

### Production
- [ ] Use secrets management service (Vault, AWS Secrets Manager)
- [ ] Rotate secrets regularly
- [ ] Audit access logs
- [ ] Use principle of least privilege
- [ ] Monitor secret access

### CI/CD
- [ ] Use CI/CD secrets (GitHub Actions, GitLab CI)
- [ ] Never log secrets
- [ ] Encrypt secrets in transit
- [ ] Use temporary credentials

## Common Mistakes

### 1. Committing Secrets
\`\`\`bash
# ❌ Never commit .env
git add .env

# ✅ Use .env.example
# .env.example
DATABASE_URL=postgresql://user:pass@localhost:5432/db
JWT_SECRET=your-secret-key
\`\`\`

### 2. Logging Secrets
\`\`\`javascript
// ❌ Never log secrets
console.log('DB Password:', process.env.DB_PASSWORD);

// ✅ Log only non-sensitive info
console.log('Database connected to:', process.env.DB_HOST);
\`\`\`

### 3. Hardcoding Secrets
\`\`\`javascript
// ❌ Never hardcode
const apiKey = 'abc123';

// ✅ Use environment variables
const apiKey = process.env.API_KEY;
\`\`\`

## Tools Comparison

| Tool | Use Case | Features |
|------|----------|----------|
| **dotenv** | Simple apps | Basic env vars |
| **Vault** | Enterprise | Dynamic secrets, rotation |
| **AWS Secrets Manager** | AWS | Managed service |
| **Azure Key Vault** | Azure | Managed service |
| **GCP Secret Manager** | GCP | Managed service |
| **Doppler** | SaaS | Team collaboration |

## Implementation Example

\`\`\`javascript
// config.js - Complete config management
const dotenv = require('dotenv');
const Joi = require('joi');
const vault = require('node-vault');

class Config {
    constructor() {
        this.secrets = null;
    }
    
    async init() {
        // 1. Load base config from .env
        dotenv.config();
        
        // 2. Validate required env vars
        this.validateEnv();
        
        // 3. Get secrets from Vault
        if (process.env.USE_VAULT === 'true') {
            await this.loadVaultSecrets();
        }
    }
    
    validateEnv() {
        const schema = Joi.object({
            NODE_ENV: Joi.string().valid('development', 'production', 'test'),
            PORT: Joi.number().default(3000),
            USE_VAULT: Joi.boolean().default(false),
            VAULT_ADDR: Joi.string().when('USE_VAULT', {
                is: true,
                then: Joi.required()
            }),
            VAULT_TOKEN: Joi.string().when('USE_VAULT', {
                is: true,
                then: Joi.required()
            })
        });
        
        const { error } = schema.validate(process.env);
        if (error) {
            throw new Error(\`Config validation failed: \${error.message}\`);
        }
    }
    
    async loadVaultSecrets() {
        const vaultClient = vault({
            apiVersion: 'v1',
            endpoint: process.env.VAULT_ADDR,
            token: process.env.VAULT_TOKEN
        });
        
        try {
            const result = await vaultClient.read('secret/app');
            this.secrets = result.data.data;
        } catch (error) {
            console.error('Vault error:', error);
            // Fallback to env vars
            this.secrets = {
                dbPassword: process.env.DB_PASSWORD,
                apiKey: process.env.API_KEY,
                jwtSecret: process.env.JWT_SECRET
            };
        }
    }
    
    get(key) {
        // Check secrets first, then env vars
        if (this.secrets && this.secrets[key]) {
            return this.secrets[key];
        }
        return process.env[key];
    }
}

module.exports = new Config();
\`\`\`
  `,
  quiz: [
    {
      question: "Cara terbaik untuk menyimpan API key adalah?",
      options: [
        "Hardcode di kode",
        "Environment variables",
        "Database",
        "File JSON"
      ],
      correctAnswer: 1
    },
    {
      question: "Tools untuk secrets management adalah?",
      options: [
        "Docker",
        "Vault",
        "Kubernetes",
        "Jenkins"
      ],
      correctAnswer: 1
    },
    {
      question: "File yang harus di-gitignore untuk secrets adalah?",
      options: [
        ".gitignore",
        ".env",
        "package.json",
        "README.md"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Secrets Management System",
      code: `// secrets-manager.js - Complete secrets management system

const crypto = require('crypto');
const vault = require('node-vault');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

class SecretsManager {
    constructor(options = {}) {
        this.provider = options.provider || 'env';
        this.encryptionKey = options.encryptionKey;
        this.secrets = new Map();
        this.cache = new Map();
    }
    
    // Initialize secrets manager
    async init() {
        switch (this.provider) {
            case 'env':
                await this.loadEnvSecrets();
                break;
            case 'vault':
                await this.loadVaultSecrets();
                break;
            case 'aws':
                await this.loadAWSSecrets();
                break;
            case 'gcp':
                await this.loadGCPSecrets();
                break;
            case 'file':
                await this.loadFileSecrets();
                break;
            default:
                throw new Error(\`Unknown provider: \${this.provider}\`);
        }
    }
    
    // 1. Environment Variables
    loadEnvSecrets() {
        dotenv.config();
        
        // Required secrets
        const required = ['DATABASE_URL', 'JWT_SECRET', 'API_KEY'];
        const missing = required.filter(key => !process.env[key]);
        
        if (missing.length > 0) {
            throw new Error(\`Missing required secrets: \${missing.join(', ')}\`);
        }
        
        // Store secrets
        Object.keys(process.env).forEach(key => {
            if (key.startsWith('SECRET_') || key.endsWith('_SECRET') || key.endsWith('_KEY')) {
                this.secrets.set(key, process.env[key]);
            }
        });
    }
    
    // 2. HashiCorp Vault
    async loadVaultSecrets() {
        const client = vault({
            apiVersion: 'v1',
            endpoint: process.env.VAULT_ADDR || 'http://localhost:8200',
            token: process.env.VAULT_TOKEN
        });
        
        try {
            // Read secrets from multiple paths
            const paths = ['secret/app', 'secret/database', 'secret/api'];
            
            for (const path of paths) {
                const result = await client.read(path);
                if (result && result.data && result.data.data) {
                    Object.entries(result.data.data).forEach(([key, value]) => {
                        this.secrets.set(key, value);
                    });
                }
            }
        } catch (error) {
            console.error('Vault error:', error);
            throw error;
        }
    }
    
    // 3. AWS Secrets Manager
    async loadAWSSecrets() {
        const client = new AWS.SecretsManager({
            region: process.env.AWS_REGION || 'us-east-1'
        });
        
        const secretNames = [
            process.env.AWS_SECRET_DATABASE,
            process.env.AWS_SECRET_API,
            process.env.AWS_SECRET_JWT
        ].filter(Boolean);
        
        for (const secretName of secretNames) {
            try {
                const response = await client.getSecretValue({
                    SecretId: secretName
                }).promise();
                
                if (response.SecretString) {
                    const secret = JSON.parse(response.SecretString);
                    Object.entries(secret).forEach(([key, value]) => {
                        this.secrets.set(key, value);
                    });
                }
            } catch (error) {
                console.error(\`AWS Secrets error for \${secretName}:\`, error);
            }
        }
    }
    
    // 4. GCP Secret Manager
    async loadGCPSecrets() {
        const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');
        const client = new SecretManagerServiceClient();
        
        const secretNames = ['database-url', 'jwt-secret', 'api-key'];
        const projectId = process.env.GCP_PROJECT;
        
        for (const secretName of secretNames) {
            try {
                const name = \`projects/\${projectId}/secrets/\${secretName}/versions/latest\`;
                const [version] = await client.accessSecretVersion({name});
                const value = version.payload.data.toString('utf8');
                this.secrets.set(secretName, value);
            } catch (error) {
                console.error(\`GCP Secret error for \${secretName}:\`, error);
            }
        }
    }
    
    // 5. Encrypted File
    async loadFileSecrets() {
        const filePath = process.env.SECRETS_FILE || './secrets.enc';
        
        if (!fs.existsSync(filePath)) {
            throw new Error(\`Secrets file not found: \${filePath}\`);
        }
        
        const encrypted = fs.readFileSync(filePath, 'utf8');
        const decrypted = this.decrypt(encrypted);
        const secrets = JSON.parse(decrypted);
        
        Object.entries(secrets).forEach(([key, value]) => {
            this.secrets.set(key, value);
        });
    }
    
    // Encryption/Decryption
    encrypt(data) {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv('aes-256-gcm', this.encryptionKey, iv);
        let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
        encrypted += cipher.final('hex');
        const authTag = cipher.getAuthTag();
        return JSON.stringify({ iv: iv.toString('hex'), encrypted, authTag: authTag.toString('hex') });
    }
    
    decrypt(encryptedData) {
        const { iv, encrypted, authTag } = JSON.parse(encryptedData);
        const decipher = crypto.createDecipheriv('aes-256-gcm', this.encryptionKey, Buffer.from(iv, 'hex'));
        decipher.setAuthTag(Buffer.from(authTag, 'hex'));
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    
    // Get secret with cache
    get(key, defaultValue = null) {
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }
        
        const value = this.secrets.get(key) || defaultValue;
        if (value) {
            this.cache.set(key, value);
        }
        return value;
    }
    
    // Set secret
    set(key, value, encrypted = false) {
        if (encrypted) {
            value = this.encrypt(value);
        }
        this.secrets.set(key, value);
        this.cache.delete(key);
    }
    
    // Delete secret
    delete(key) {
        this.secrets.delete(key);
        this.cache.delete(key);
    }
    
    // List all secret keys (exclude sensitive values)
    list() {
        return Array.from(this.secrets.keys());
    }
    
    // Clear cache
    clearCache() {
        this.cache.clear();
    }
    
    // Refresh secrets
    async refresh() {
        this.clearCache();
        await this.init();
        console.log('Secrets refreshed at', new Date().toISOString());
    }
    
    // Save encrypted secrets to file
    saveToFile(filePath = './secrets.enc') {
        const data = {};
        this.secrets.forEach((value, key) => {
            data[key] = value;
        });
        const encrypted = this.encrypt(data);
        fs.writeFileSync(filePath, encrypted, 'utf8');
        console.log(\`Secrets saved to \${filePath}\`);
    }
}

// Usage Example
const secrets = new SecretsManager({
    provider: process.env.SECRETS_PROVIDER || 'env',
    encryptionKey: Buffer.from(process.env.ENCRYPTION_KEY || 'your-32-byte-key-here-please', 'hex')
});

(async () => {
    try {
        await secrets.init();
        
        // Get secrets
        const dbUrl = secrets.get('DATABASE_URL');
        const jwtSecret = secrets.get('JWT_SECRET');
        const apiKey = secrets.get('API_KEY');
        
        console.log('Secrets loaded successfully');
        console.log('Available keys:', secrets.list());
        
        // Auto-refresh every hour
        setInterval(() => secrets.refresh(), 60 * 60 * 1000);
        
        // Start application...
    } catch (error) {
        console.error('Failed to load secrets:', error);
        process.exit(1);
    }
})();

module.exports = secrets;`,
      language: "javascript"
    }
  ]
};