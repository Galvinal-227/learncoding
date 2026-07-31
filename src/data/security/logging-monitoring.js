export const chapter = {
  slug: "logging-monitoring",
  title: "Logging & Monitoring",
  description: "Mengimplementasikan logging dan monitoring untuk keamanan dan debugging.",
  icon: "SiDatadog",
  color: "#632CA6",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["security-introduction"],
  tags: ["logging", "monitoring", "winston", "logger", "security"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Logging & Monitoring?

Logging adalah proses mencatat event, errors, dan aktivitas dalam aplikasi. Monitoring adalah proses mengamati dan menganalisis log untuk mendeteksi masalah dan ancaman.

## Winston Logger

### Instalasi
\`\`\`bash
npm install winston
npm install winston-daily-rotate-file
\`\`\`

### Basic Setup
\`\`\`javascript
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

// Console transport
logger.add(new winston.transports.Console({
    format: winston.format.simple()
}));

// Logging
logger.info('Application started');
logger.error('Database connection failed');
logger.warn('High memory usage detected');
logger.debug('Debug information');
\`\`\`

### Advanced Configuration
\`\`\`javascript
const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const logFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
        return \`[\${timestamp}] \${level}: \${message} \${Object.keys(meta).length ? JSON.stringify(meta) : ''}\`;
    })
);

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: logFormat,
    transports: [
        // Console
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        
        // Rotating file for all logs
        new DailyRotateFile({
            filename: 'logs/app-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxSize: '20m',
            maxFiles: '14d',
            format: winston.format.json()
        }),
        
        // Separate error file
        new DailyRotateFile({
            filename: 'logs/error-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            level: 'error',
            maxSize: '20m',
            maxFiles: '30d',
            format: winston.format.json()
        }),
        
        // Security audit log
        new DailyRotateFile({
            filename: 'logs/security-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            level: 'info',
            maxSize: '20m',
            maxFiles: '90d',
            format: winston.format.json()
        })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'logs/exceptions.log' })
    ],
    rejectionHandlers: [
        new winston.transports.File({ filename: 'logs/rejections.log' })
    ]
});

module.exports = logger;
\`\`\`

## Security Logging

### Security Events
\`\`\`javascript
const logger = require('./logger');

class SecurityLogger {
    // Authentication events
    loginSuccess(user, req) {
        logger.info('Login successful', {
            event: 'auth.login.success',
            userId: user.id,
            email: user.email,
            ip: req.ip,
            userAgent: req.get('user-agent'),
            timestamp: new Date().toISOString()
        });
    }
    
    loginFailed(email, req) {
        logger.warn('Login failed', {
            event: 'auth.login.failed',
            email,
            ip: req.ip,
            userAgent: req.get('user-agent'),
            timestamp: new Date().toISOString()
        });
    }
    
    // Authorization events
    accessDenied(user, resource, req) {
        logger.warn('Access denied', {
            event: 'auth.access.denied',
            userId: user?.id,
            resource,
            ip: req.ip,
            timestamp: new Date().toISOString()
        });
    }
    
    // Suspicious activity
    suspiciousActivity(user, activity, req) {
        logger.warn('Suspicious activity detected', {
            event: 'security.suspicious',
            userId: user?.id,
            activity,
            ip: req.ip,
            userAgent: req.get('user-agent'),
            timestamp: new Date().toISOString()
        });
    }
    
    // Rate limiting
    rateLimitExceeded(req) {
        logger.warn('Rate limit exceeded', {
            event: 'security.rate_limit',
            ip: req.ip,
            path: req.path,
            method: req.method,
            timestamp: new Date().toISOString()
        });
    }
    
    // SQL Injection attempt
    sqlInjectionAttempt(req, query) {
        logger.error('Possible SQL injection attempt', {
            event: 'security.sql_injection',
            ip: req.ip,
            query,
            path: req.path,
            timestamp: new Date().toISOString()
        });
    }
    
    // XSS attempt
    xssAttempt(req, payload) {
        logger.error('Possible XSS attempt', {
            event: 'security.xss',
            ip: req.ip,
            payload,
            path: req.path,
            timestamp: new Date().toISOString()
        });
    }
}

module.exports = new SecurityLogger();
\`\`\`

## Structured Logging

### Log Format
\`\`\`javascript
// Structured log format
const logEntry = {
    // Required fields
    timestamp: new Date().toISOString(),
    level: 'info',
    message: 'User logged in',
    
    // Context
    service: 'auth-service',
    environment: 'production',
    
    // User context
    userId: '123',
    userEmail: 'user@example.com',
    userRole: 'admin',
    
    // Request context
    requestId: 'req_123456',
    ip: '192.168.1.1',
    userAgent: 'Mozilla/5.0...',
    method: 'POST',
    path: '/api/auth/login',
    
    // Performance
    responseTime: 45,
    
    // Custom data
    data: {
        event: 'login',
        success: true
    }
};
\`\`\`

## Request Logging Middleware

\`\`\`javascript
const logger = require('./logger');
const crypto = require('crypto');

// Generate request ID
const generateRequestId = () => {
    return crypto.randomBytes(16).toString('hex');
};

// Request logging middleware
const requestLogger = (req, res, next) => {
    const startTime = Date.now();
    const requestId = req.headers['x-request-id'] || generateRequestId();
    
    // Add request ID to response headers
    res.setHeader('X-Request-ID', requestId);
    req.requestId = requestId;
    
    // Log request
    logger.info('Incoming request', {
        requestId,
        method: req.method,
        path: req.path,
        query: req.query,
        ip: req.ip,
        userAgent: req.get('user-agent'),
        userId: req.user?.id,
        body: sanitizeBody(req.body)
    });
    
    // Override end method to log response
    const originalEnd = res.end;
    res.end = function(chunk, encoding) {
        const responseTime = Date.now() - startTime;
        
        logger.info('Outgoing response', {
            requestId,
            statusCode: res.statusCode,
            responseTime: \`\${responseTime}ms\`,
            contentLength: res.get('content-length')
        });
        
        // Log errors
        if (res.statusCode >= 400) {
            logger.error('Error response', {
                requestId,
                statusCode: res.statusCode,
                path: req.path,
                method: req.method,
                responseTime: \`\${responseTime}ms\`
            });
        }
        
        // Apply rate limit headers to logs
        if (res.get('RateLimit-Limit')) {
            logger.info('Rate limit info', {
                requestId,
                limit: res.get('RateLimit-Limit'),
                remaining: res.get('RateLimit-Remaining'),
                reset: res.get('RateLimit-Reset')
            });
        }
        
        originalEnd.call(this, chunk, encoding);
    };
    
    next();
};

// Sanitize request body (remove passwords, tokens, etc.)
const sanitizeBody = (body) => {
    if (!body) return body;
    const sanitized = { ...body };
    const sensitiveFields = ['password', 'token', 'secret', 'apiKey', 'authorization'];
    
    sensitiveFields.forEach(field => {
        if (sanitized[field]) {
            sanitized[field] = '********';
        }
    });
    
    return sanitized;
};

module.exports = requestLogger;
\`\`\`

## Error Logging

\`\`\`javascript
const logger = require('./logger');

class ErrorLogger {
    static logError(error, req = null) {
        const errorData = {
            message: error.message,
            stack: error.stack,
            name: error.name,
            code: error.code,
            statusCode: error.statusCode || 500
        };
        
        // Add request context
        if (req) {
            errorData.requestId = req.requestId;
            errorData.path = req.path;
            errorData.method = req.method;
            errorData.ip = req.ip;
            errorData.userId = req.user?.id;
        }
        
        // Add database error details
        if (error.code) {
            errorData.dbCode = error.code;
            errorData.dbDetail = error.detail;
        }
        
        // Log based on severity
        if (error.statusCode >= 500) {
            logger.error('Internal server error', errorData);
        } else if (error.statusCode >= 400) {
            logger.warn('Client error', errorData);
        } else {
            logger.info('Error occurred', errorData);
        }
        
        return errorData;
    }
}

// Error handling middleware
const errorHandler = (err, req, res, next) => {
    ErrorLogger.logError(err, req);
    
    const statusCode = err.statusCode || 500;
    const message = statusCode === 500 ? 'Internal server error' : err.message;
    
    res.status(statusCode).json({
        error: {
            message,
            code: err.code,
            requestId: req.requestId
        }
    });
};

module.exports = { ErrorLogger, errorHandler };
\`\`\`

## Monitoring

### Health Check
\`\`\`javascript
const os = require('os');
const logger = require('./logger');

class Monitor {
    constructor() {
        this.startTime = Date.now();
    }
    
    // System metrics
    getSystemMetrics() {
        return {
            cpu: {
                usage: os.loadavg(),
                cores: os.cpus().length
            },
            memory: {
                total: os.totalmem(),
                free: os.freemem(),
                used: os.totalmem() - os.freemem(),
                usagePercentage: ((os.totalmem() - os.freemem()) / os.totalmem() * 100)
            },
            uptime: {
                system: os.uptime(),
                application: (Date.now() - this.startTime) / 1000
            },
            network: {
                hostname: os.hostname(),
                interfaces: os.networkInterfaces()
            }
        };
    }
    
    // Process metrics
    getProcessMetrics() {
        const memoryUsage = process.memoryUsage();
        return {
            memory: {
                rss: memoryUsage.rss,
                heapTotal: memoryUsage.heapTotal,
                heapUsed: memoryUsage.heapUsed,
                external: memoryUsage.external,
                heapUsagePercentage: (memoryUsage.heapUsed / memoryUsage.heapTotal * 100)
            },
            cpu: {
                usage: process.cpuUsage()
            },
            pid: process.pid,
            uptime: process.uptime()
        };
    }
    
    // Check health
    checkHealth() {
        const metrics = this.getSystemMetrics();
        const processMetrics = this.getProcessMetrics();
        
        const health = {
            status: 'healthy',
            timestamp: new Date().toISOString(),
            system: metrics,
            process: processMetrics,
            checks: {
                memory: metrics.memory.usagePercentage < 80,
                heap: processMetrics.memory.heapUsagePercentage < 80,
                cpu: metrics.cpu.usage[0] < 2,
                uptime: true
            }
        };
        
        // Log unhealthy checks
        Object.entries(health.checks).forEach(([check, passed]) => {
            if (!passed) {
                logger.warn(\`Health check failed: \${check}\`, { check, health });
            }
        });
        
        return health;
    }
}

module.exports = new Monitor();
\`\`\`

## Log Rotation

### Daily Rotate File
\`\`\`javascript
const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const transport = new DailyRotateFile({
    filename: 'logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.json(),
    auditFile: 'logs/audit.json',
    createSymlink: true,
    symlinkName: 'application.log'
});

transport.on('rotate', (oldFilename, newFilename) => {
    console.log(\`Log rotated: \${oldFilename} -> \${newFilename}\`);
});

transport.on('archive', (zipFilename) => {
    console.log(\`Log archived: \${zipFilename}\`);
});
\`\`\`

## Best Practices

### 1. Log Levels
\`\`\`
error: 0 - Critical errors
warn:  1 - Warnings
info:  2 - Information
http:  3 - HTTP requests
verbose: 4 - Verbose
debug: 5 - Debugging
silly: 6 - Silly
\`\`\`

### 2. Never Log Sensitive Data
\`\`\`javascript
// ❌ Don't log sensitive data
logger.info('User logged in', { password: 'secret123' });

// ✅ Log only non-sensitive data
logger.info('User logged in', { userId: '123' });
\`\`\`

### 3. Include Context
\`\`\`javascript
// ✅ Include context
logger.info('Database query executed', {
    query: 'SELECT * FROM users',
    duration: '45ms',
    rows: 10,
    userId: '123'
});
\`\`\`

### 4. Use Structured Logging
\`\`\`javascript
// ✅ Structured logging
logger.info('User action', {
    event: 'user.update',
    userId: '123',
    changes: { name: 'New Name' }
});

// ❌ Unstructured
logger.info('User 123 updated name to New Name');
\`\`\`

### 5. Error Logging with Stack
\`\`\`javascript
// ✅ Include stack trace
try {
    // code
} catch (error) {
    logger.error('Operation failed', {
        error: error.message,
        stack: error.stack,
        operation: 'user.update'
    });
}
\`\`\`
  `,
  quiz: [
    {
      question: "Library logging untuk Node.js yang populer adalah?",
      options: [
        "Winston",
        "Express",
        "Mongoose",
        "Axios"
      ],
      correctAnswer: 0
    },
    {
      question: "Level logging yang paling tinggi adalah?",
      options: [
        "debug",
        "info",
        "error",
        "warn"
      ],
      correctAnswer: 2
    },
    {
      question: "Apa yang tidak boleh di-log?",
      options: [
        "Request ID",
        "Password",
        "Timestamp",
        "IP Address"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Logging & Monitoring System",
      code: `// logger.js - Complete logging system

const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const { createLogger, format, transports } = winston;
const { combine, timestamp, printf, colorize, json, errors } = format;

class LoggerManager {
    constructor(options = {}) {
        this.options = {
            level: process.env.LOG_LEVEL || 'info',
            logDir: options.logDir || 'logs',
            maxSize: options.maxSize || '20m',
            maxFiles: options.maxFiles || '14d',
            env: process.env.NODE_ENV || 'development',
            ...options
        };
        
        this.logger = null;
        this.init();
    }
    
    init() {
        // Custom format
        const myFormat = printf(({ timestamp, level, message, ...meta }) => {
            const metaStr = Object.keys(meta).length ? \` \${JSON.stringify(meta)}\` : '';
            return \`[\${timestamp}] \${level}: \${message}\${metaStr}\`;
        });
        
        // Base transport configuration
        const transports = [
            // Console transport
            new transports.Console({
                format: combine(
                    colorize(),
                    myFormat
                )
            })
        ];
        
        // File transports (production only)
        if (this.options.env !== 'development') {
            // General log
            transports.push(
                new DailyRotateFile({
                    filename: \`\${this.options.logDir}/app-%DATE%.log\`,
                    datePattern: 'YYYY-MM-DD',
                    maxSize: this.options.maxSize,
                    maxFiles: this.options.maxFiles,
                    format: combine(
                        timestamp(),
                        json()
                    ),
                    level: this.options.level
                })
            );
            
            // Error log
            transports.push(
                new DailyRotateFile({
                    filename: \`\${this.options.logDir}/error-%DATE%.log\`,
                    datePattern: 'YYYY-MM-DD',
                    maxSize: this.options.maxSize,
                    maxFiles: '30d',
                    format: combine(
                        timestamp(),
                        errors({ stack: true }),
                        json()
                    ),
                    level: 'error'
                })
            );
            
            // Security log
            transports.push(
                new DailyRotateFile({
                    filename: \`\${this.options.logDir}/security-%DATE%.log\`,
                    datePattern: 'YYYY-MM-DD',
                    maxSize: this.options.maxSize,
                    maxFiles: '90d',
                    format: combine(
                        timestamp(),
                        json()
                    ),
                    level: 'info'
                })
            );
            
            // Performance log
            transports.push(
                new DailyRotateFile({
                    filename: \`\${this.options.logDir}/performance-%DATE%.log\`,
                    datePattern: 'YYYY-MM-DD',
                    maxSize: this.options.maxSize,
                    maxFiles: '30d',
                    format: combine(
                        timestamp(),
                        json()
                    ),
                    level: 'info'
                })
            );
        }
        
        this.logger = createLogger({
            level: this.options.level,
            format: combine(
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                errors({ stack: true }),
                json()
            ),
            transports,
            exitOnError: false
        });
        
        // Handle exceptions
        this.logger.exceptions.handle(
            new DailyRotateFile({
                filename: \`\${this.options.logDir}/exceptions-%DATE%.log\`,
                datePattern: 'YYYY-MM-DD',
                maxSize: this.options.maxSize,
                maxFiles: '30d',
                format: combine(
                    timestamp(),
                    errors({ stack: true }),
                    json()
                )
            })
        );
        
        // Handle rejections
        this.logger.rejections.handle(
            new DailyRotateFile({
                filename: \`\${this.options.logDir}/rejections-%DATE%.log\`,
                datePattern: 'YYYY-MM-DD',
                maxSize: this.options.maxSize,
                maxFiles: '30d',
                format: combine(
                    timestamp(),
                    errors({ stack: true }),
                    json()
                )
            })
        );
    }
    
    // Log with context
    log(level, message, meta = {}) {
        this.logger[level](message, {
            ...meta,
            timestamp: new Date().toISOString(),
            service: this.options.service || 'app',
            env: this.options.env
        });
    }
    
    // Convenience methods
    info(message, meta) { this.log('info', message, meta); }
    warn(message, meta) { this.log('warn', message, meta); }
    error(message, meta) { this.log('error', message, meta); }
    debug(message, meta) { this.log('debug', message, meta); }
    
    // Security logging
    security(message, meta) {
        this.logger.info(message, {
            ...meta,
            type: 'security',
            timestamp: new Date().toISOString()
        });
    }
    
    // Performance logging
    performance(message, meta) {
        this.logger.info(message, {
            ...meta,
            type: 'performance',
            timestamp: new Date().toISOString()
        });
    }
    
    // Audit logging
    audit(action, user, req, data = {}) {
        this.logger.info(\`Audit: \${action}\`, {
            type: 'audit',
            action,
            user: {
                id: user?.id,
                email: user?.email,
                role: user?.role
            },
            request: {
                ip: req?.ip,
                method: req?.method,
                path: req?.path,
                userAgent: req?.get('user-agent')
            },
            data,
            timestamp: new Date().toISOString()
        });
    }
}

// ============================================
// Monitoring System
// ============================================
class Monitor {
    constructor(logger) {
        this.logger = logger;
        this.startTime = Date.now();
        this.metrics = {};
    }
    
    // Collect system metrics
    getSystemMetrics() {
        const os = require('os');
        const memory = os.totalmem();
        const free = os.freemem();
        
        return {
            cpu: {
                loadAvg: os.loadavg(),
                cores: os.cpus().length
            },
            memory: {
                total: memory,
                free: free,
                used: memory - free,
                usage: ((memory - free) / memory * 100).toFixed(2)
            },
            uptime: {
                system: os.uptime(),
                app: (Date.now() - this.startTime) / 1000
            },
            platform: {
                os: os.platform(),
                release: os.release(),
                hostname: os.hostname()
            }
        };
    }
    
    // Collect process metrics
    getProcessMetrics() {
        const mem = process.memoryUsage();
        return {
            pid: process.pid,
            memory: {
                rss: mem.rss,
                heapTotal: mem.heapTotal,
                heapUsed: mem.heapUsed,
                external: mem.external,
                heapUsage: (mem.heapUsed / mem.heapTotal * 100).toFixed(2)
            },
            cpu: process.cpuUsage(),
            uptime: process.uptime()
        };
    }
    
    // Track API metrics
    trackRequest(req, res, duration) {
        const path = req.path;
        const method = req.method;
        const statusCode = res.statusCode;
        const key = \`\${method} \${path}\`;
        
        if (!this.metrics[key]) {
            this.metrics[key] = {
                total: 0,
                errors: 0,
                durations: []
            };
        }
        
        this.metrics[key].total++;
        if (statusCode >= 400) {
            this.metrics[key].errors++;
        }
        this.metrics[key].durations.push(duration);
        
        // Keep last 100 durations
        if (this.metrics[key].durations.length > 100) {
            this.metrics[key].durations.shift();
        }
    }
    
    // Get API metrics
    getAPIMetrics() {
        const result = {};
        
        Object.entries(this.metrics).forEach(([key, data]) => {
            const durations = data.durations;
            const avgDuration = durations.reduce((a, b) => a + b, 0) / durations.length;
            
            result[key] = {
                total: data.total,
                errors: data.errors,
                errorRate: (data.errors / data.total * 100).toFixed(2),
                avgResponseTime: avgDuration.toFixed(2),
                p95: this.calculatePercentile(durations, 95).toFixed(2),
                p99: this.calculatePercentile(durations, 99).toFixed(2)
            };
        });
        
        return result;
    }
    
    // Calculate percentile
    calculatePercentile(arr, percentile) {
        if (arr.length === 0) return 0;
        const sorted = [...arr].sort((a, b) => a - b);
        const index = Math.ceil((percentile / 100) * sorted.length) - 1;
        return sorted[Math.max(0, Math.min(index, sorted.length - 1))];
    }
    
    // Health check
    checkHealth() {
        const system = this.getSystemMetrics();
        const process = this.getProcessMetrics();
        
        const health = {
            status: 'healthy',
            timestamp: new Date().toISOString(),
            checks: {
                memory: system.memory.usage < 80,
                heap: process.memory.heapUsage < 80,
                cpu: system.cpu.loadAvg[0] < 2,
                uptime: process.uptime > 60
            }
        };
        
        // Mark unhealthy if any check fails
        if (Object.values(health.checks).some(v => !v)) {
            health.status = 'unhealthy';
            this.logger.warn('Health check failed', health);
        }
        
        return health;
    }
    
    // Collect all metrics
    collectMetrics() {
        return {
            system: this.getSystemMetrics(),
            process: this.getProcessMetrics(),
            api: this.getAPIMetrics(),
            health: this.checkHealth(),
            timestamp: new Date().toISOString()
        };
    }
    
    // Log metrics periodically
    startMonitoring(interval = 60000) {
        setInterval(() => {
            const metrics = this.collectMetrics();
            this.logger.performance('System metrics', metrics);
            
            // Alert if any check fails
            if (metrics.health.status === 'unhealthy') {
                this.logger.error('Health check failed', {
                    checks: metrics.health.checks,
                    system: metrics.system,
                    timestamp: new Date().toISOString()
                });
            }
        }, interval);
    }
}

// ============================================
// Usage
// ============================================
const loggerManager = new LoggerManager({
    env: process.env.NODE_ENV || 'development',
    service: 'api-server',
    logDir: './logs'
});

const logger = loggerManager;
const monitor = new Monitor(logger);

// Start monitoring
monitor.startMonitoring(60000);

// Request logging middleware
const requestLogger = (req, res, next) => {
    const start = Date.now();
    const requestId = req.headers['x-request-id'] || 
        require('crypto').randomBytes(16).toString('hex');
    
    req.requestId = requestId;
    res.setHeader('X-Request-ID', requestId);
    
    // Log request
    logger.info('Request received', {
        requestId,
        method: req.method,
        path: req.path,
        query: req.query,
        ip: req.ip,
        userAgent: req.get('user-agent')
    });
    
    // Hook into response end
    const originalEnd = res.end;
    res.end = function(chunk, encoding) {
        const duration = Date.now() - start;
        
        // Track metrics
        monitor.trackRequest(req, res, duration);
        
        // Log response
        const logLevel = res.statusCode >= 500 ? 'error' : 
                        res.statusCode >= 400 ? 'warn' : 'info';
        
        logger[logLevel]('Response sent', {
            requestId,
            statusCode: res.statusCode,
            duration: \`\${duration}ms\`,
            contentLength: res.get('content-length')
        });
        
        // Log slow requests
        if (duration > 5000) {
            logger.warn('Slow request', {
                requestId,
                duration: \`\${duration}ms\`,
                path: req.path,
                method: req.method
            });
        }
        
        originalEnd.call(this, chunk, encoding);
    };
    
    next();
};

// Error logging middleware
const errorLogger = (err, req, res, next) => {
    logger.error('Error occurred', {
        requestId: req?.requestId,
        error: err.message,
        stack: err.stack,
        code: err.code,
        statusCode: err.statusCode,
        path: req?.path,
        method: req?.method,
        ip: req?.ip
    });
    
    next(err);
};

module.exports = {
    logger: loggerManager,
    monitor: monitor,
    requestLogger,
    errorLogger
};`,
      language: "javascript"
    }
  ]
};