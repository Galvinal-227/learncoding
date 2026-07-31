export const chapter = {
  slug: "capacity-estimation",
  title: "Capacity Estimation",
  description: "Menghitung kapasitas sistem untuk kebutuhan storage, bandwidth, dan traffic.",
  icon: "SiSystem",
  color: "#6C63FF",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["system-design-introduction", "system-design-requirements"],
  tags: ["system-design", "capacity", "estimation", "scalability"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Traffic Estimation

### Daily Active Users (DAU)
\`\`\`
Total Users: 10M
Daily Active Users (DAU): 30% = 3M
\`\`\`

### Requests Per Day
\`\`\`
Avg requests per user/day: 50
Total requests/day = 3M * 50 = 150M
\`\`\`

### Requests Per Second (RPS)
\`\`\`
Peak ratio: 3x normal
Avg RPS = 150M / 86400 = ~1736 req/s
Peak RPS = 1736 * 3 = ~5208 req/s
\`\`\`

## Storage Estimation

### User Data
\`\`\`
User profile: 2KB
Total user data = 10M * 2KB = 20GB
\`\`\`

### Content (Posts)
\`\`\`
Avg post size: 100KB (text + image)
Posts per day: 1M
Storage/day = 1M * 100KB = 100GB
Storage/year = 100GB * 365 = 36.5TB
\`\`\`

### Database Index
\`\`\`
Index size: 20% of data
Total storage = 36.5TB * 1.2 = 43.8TB
\`\`\`

## Bandwidth Estimation

### Upload
\`\`\`
Avg upload/user/day: 2MB
Total upload/day = 3M * 2MB = 6TB
Upload bandwidth = 6TB / 86400 = ~69MB/s
\`\`\`

### Download
\`\`\`
Avg download/user/day: 20MB
Total download/day = 3M * 20MB = 60TB
Download bandwidth = 60TB / 86400 = ~695MB/s
\`\`\`

## Cache Estimation

### Cache Size
\`\`\`
Hot data: 20% of total
Cache size = 43.8TB * 20% = ~8.8TB
\`\`\`

### Cache Hit Rate
\`\`\`
Target: 80% cache hit
Redis memory: 20GB (per instance)
\`\`\`

## Server Estimation

### Web Servers
\`\`\`
Requests per server: 500 req/s
Total servers = 5208 / 500 = ~11 servers
With redundancy: 11 * 1.5 = 17 servers
\`\`\`

### Database Servers
\`\`\`
Read-heavy: 80% reads, 20% writes
Read replicas: 3-5 replicas
Master: 1 server
\`\`\`

## Cost Estimation

### Storage Cost
\`\`\`
S3 Storage: $0.023/GB/month
Cost/month = 43.8TB * $0.023 = ~$1,007/month
\`\`\`

### EC2 Servers
\`\`\`
c5.large: $0.085/hour
17 servers * $0.085 * 24 * 30 = ~$1,040/month
\`\`\`

### Database
\`\`\`
RDS PostgreSQL: $0.24/hour
Cost/month = $0.24 * 24 * 30 = ~$173/month
\`\`\`

## Contoh Perhitungan

### URL Shortener
\`\`\`
DAU: 100K
Shortened URLs/day: 100K
Avg URL length: 7 chars
Redirection requests: 1M/day

Storage:
- 100K * 100 = 10M URLs/year
- 10M * 100 bytes = 1GB/year

Bandwidth:
- 1M redirects * 1KB = 1GB/day
- 1GB/day = ~11KB/s

Server:
- 1M req/day = 12 req/s
- 2-3 servers enough
\`\`\`

### Chat System
\`\`\`
Users: 50M
Daily active: 10M
Messages/day: 100M

Storage:
- 100M * 1KB = 100GB/day
- 365 days * 100GB = 36.5TB/year

Bandwidth:
- 100M * 1KB = 100GB/day
- 100GB/day = ~1.15MB/s

Server:
- WebSocket connections: 1M concurrent
- 1M / 10K per server = 100 servers
\`\`\`
  `,
  quiz: [
    {
      question: "Formula RPS dari traffic harian adalah?",
      options: [
        "Daily / 3600",
        "Daily / 86400",
        "Daily / 24",
        "Daily * 86400"
      ],
      correctAnswer: 1
    },
    {
      question: "Cache untuk hot data biasanya berapa persen?",
      options: [
        "10%",
        "20%",
        "50%",
        "80%"
      ],
      correctAnswer: 1
    },
    {
      question: "Read replicas digunakan untuk?",
      options: [
        "Write operations",
        "Read operations",
        "Cache operations",
        "Backup operations"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Capacity Calculator",
      code: `// capacity.js - Capacity Estimation Calculator

class CapacityEstimator {
    constructor(config) {
        this.dau = config.dau;
        this.totalUsers = config.totalUsers;
        this.avgRequestsPerUser = config.avgRequestsPerUser;
        this.avgRequestSize = config.avgRequestSize; // bytes
        this.peakMultiplier = config.peakMultiplier || 3;
        this.storage = {
            userData: config.userData || 2, // KB per user
            contentSize: config.contentSize || 100, // KB
            contentPerDay: config.contentPerDay || 1000000,
            retentionDays: config.retentionDays || 365,
            indexOverhead: config.indexOverhead || 1.2
        };
    }
    
    // Traffic
    calculateTraffic() {
        const dailyRequests = this.dau * this.avgRequestsPerUser;
        const avgRps = dailyRequests / 86400;
        const peakRps = avgRps * this.peakMultiplier;
        
        return {
            dailyRequests,
            avgRps,
            peakRps,
            monthlyRequests: dailyRequests * 30,
            yearlyRequests: dailyRequests * 365
        };
    }
    
    // Storage
    calculateStorage() {
        const userStorage = this.totalUsers * this.storage.userData;
        const dailyContent = this.storage.contentPerDay * this.storage.contentSize;
        const yearlyContent = dailyContent * this.storage.retentionDays;
        const totalStorage = (userStorage + yearlyContent) * this.storage.indexOverhead;
        
        return {
            userStorage,
            dailyContent,
            yearlyContent,
            totalStorage,
            totalStorageGB: totalStorage / (1024 * 1024 * 1024)
        };
    }
    
    // Bandwidth
    calculateBandwidth() {
        const dailyUpload = this.dau * this.avgRequestSize;
        const dailyDownload = this.dau * (this.avgRequestSize * 10); // Assumption: download is 10x upload
        
        return {
            dailyUpload,
            dailyDownload,
            uploadBandwidth: dailyUpload / 86400,
            downloadBandwidth: dailyDownload / 86400,
            monthlyUpload: dailyUpload * 30,
            monthlyDownload: dailyDownload * 30
        };
    }
    
    // Cache
    calculateCache(hotDataPercent = 0.2) {
        const totalStorage = this.calculateStorage().totalStorage;
        const cacheSize = totalStorage * hotDataPercent;
        
        return {
            cacheSize,
            cacheSizeGB: cacheSize / (1024 * 1024 * 1024),
            hotDataPercent
        };
    }
    
    // Servers
    calculateServers(maxRpsPerServer = 500, redundancyFactor = 1.5) {
        const { peakRps } = this.calculateTraffic();
        const baseServers = Math.ceil(peakRps / maxRpsPerServer);
        const totalServers = Math.ceil(baseServers * redundancyFactor);
        
        return {
            baseServers,
            totalServers,
            maxRpsPerServer,
            redundancyFactor
        };
    }
    
    // Cost Estimation
    calculateCosts(region = 'us-east-1') {
        const servers = this.calculateServers();
        const storage = this.calculateStorage();
        
        // Cloud costs (AWS approximate)
        const costs = {
            servers: {
                hourly: servers.totalServers * 0.085, // c5.large
                monthly: servers.totalServers * 0.085 * 24 * 30,
                yearly: servers.totalServers * 0.085 * 24 * 365
            },
            storage: {
                monthly: storage.totalStorageGB * 0.023, // S3 standard
                yearly: storage.totalStorageGB * 0.023 * 12
            },
            database: {
                monthly: 173, // RDS PostgreSQL
                yearly: 173 * 12
            },
            cache: {
                monthly: 100, // ElastiCache
                yearly: 100 * 12
            },
            bandwidth: {
                monthly: 50, // Data transfer
                yearly: 50 * 12
            }
        };
        
        costs.total = {
            monthly: costs.servers.monthly + costs.storage.monthly + costs.database.monthly + costs.cache.monthly + costs.bandwidth.monthly,
            yearly: costs.servers.yearly + costs.storage.yearly + costs.database.yearly + costs.cache.yearly + costs.bandwidth.yearly
        };
        
        return costs;
    }
    
    // Full Report
    generateReport() {
        const traffic = this.calculateTraffic();
        const storage = this.calculateStorage();
        const bandwidth = this.calculateBandwidth();
        const cache = this.calculateCache();
        const servers = this.calculateServers();
        const costs = this.calculateCosts();
        
        return {
            traffic,
            storage,
            bandwidth,
            cache,
            servers,
            costs,
            summary: {
                totalUsers: this.totalUsers,
                dailyActiveUsers: this.dau,
                peakRps: traffic.peakRps,
                totalStorage: storage.totalStorageGB,
                totalServers: servers.totalServers,
                monthlyCost: costs.total.monthly
            }
        };
    }
}

// Usage Example
const estimator = new CapacityEstimator({
    dau: 3000000, // 3M DAU
    totalUsers: 10000000, // 10M total
    avgRequestsPerUser: 50,
    avgRequestSize: 100, // 100KB
    peakMultiplier: 3,
    userData: 2, // KB
    contentSize: 100, // KB
    contentPerDay: 1000000, // 1M posts/day
    retentionDays: 365,
    indexOverhead: 1.2
});

const report = estimator.generateReport();
console.log('Capacity Report:', JSON.stringify(report, null, 2));

// For a URL Shortener Service
const shortener = new CapacityEstimator({
    dau: 100000,
    totalUsers: 500000,
    avgRequestsPerUser: 10,
    avgRequestSize: 0.1, // 100 bytes
    peakMultiplier: 2,
    userData: 0.5, // KB
    contentSize: 0.1, // KB (short URL)
    contentPerDay: 10000,
    retentionDays: 365,
    indexOverhead: 1.2
});

console.log('URL Shortener:', shortener.generateReport().summary);`,
      language: "javascript"
    }
  ]
};