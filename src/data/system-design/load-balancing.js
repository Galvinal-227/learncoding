export const chapter = {
  slug: "load-balancing",
  title: "Load Balancing",
  description: "Mendistribusikan traffic ke multiple servers untuk scalability dan reliability.",
  icon: "SiSystem",
  color: "#6C63FF",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["system-design-introduction"],
  tags: ["system-design", "load-balancing", "scalability", "nginx"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Load Balancing?

Load balancer mendistribusikan traffic ke multiple server untuk mencegah overload dan meningkatkan availability.

## Algoritma Load Balancing

### 1. Round Robin
\`\`\`
Request 1 → Server 1
Request 2 → Server 2
Request 3 → Server 3
Request 4 → Server 1
\`\`\`

### 2. Least Connections
\`\`\`
Pilih server dengan koneksi paling sedikit
\`\`\`

### 3. IP Hash
\`\`\`
Request dari IP yang sama → Server yang sama
\`\`\`

### 4. Weighted
\`\`\`
Server dengan weight lebih tinggi menerima lebih banyak traffic
\`\`\`

## Load Balancer Types

### Layer 4 (Transport Layer)
\`\`\`
- Uses IP + Port
- Fast performance
- No content inspection
- Examples: AWS NLB, HAProxy
\`\`\`

### Layer 7 (Application Layer)
\`\`\`
- Uses HTTP headers
- Content-based routing
- SSL termination
- Examples: AWS ALB, Nginx
\`\`\`

## Nginx Load Balancer

### Basic Configuration
\`\`\`nginx
http {
    upstream backend {
        server server1.example.com;
        server server2.example.com;
        server server3.example.com;
    }
    
    server {
        listen 80;
        location / {
            proxy_pass http://backend;
        }
    }
}
\`\`\`

### Weighted Configuration
\`\`\`nginx
upstream backend {
    server server1.example.com weight=3;
    server server2.example.com weight=2;
    server server3.example.com weight=1;
}
\`\`\`

### Health Checks
\`\`\`nginx
upstream backend {
    server server1.example.com max_fails=3 fail_timeout=30s;
    server server2.example.com max_fails=3 fail_timeout=30s;
    server server3.example.com max_fails=3 fail_timeout=30s;
}
\`\`\`

## HAProxy Configuration

\`\`\`haproxy
global
    daemon
    maxconn 256

defaults
    mode http
    timeout connect 5000ms
    timeout client 50000ms
    timeout server 50000ms

frontend http-in
    bind *:80
    default_backend servers

backend servers
    balance roundrobin
    server server1 server1:80 check
    server server2 server2:80 check
    server server3 server3:80 check
\`\`\`

## Sticky Sessions (Session Affinity)

### Nginx
\`\`\`nginx
upstream backend {
    ip_hash;
    server server1.example.com;
    server server2.example.com;
    server server3.example.com;
}
\`\`\`

### HAProxy
\`\`\`haproxy
backend servers
    cookie SERVERID insert indirect nocache
    server server1 server1:80 cookie server1 check
    server server2 server2:80 cookie server2 check
\`\`\`

## AWS Load Balancers

### Application Load Balancer (ALB)
\`\`\`
Features:
- Layer 7 routing
- Path-based routing
- Host-based routing
- SSL termination
- WebSocket support
\`\`\`

### Network Load Balancer (NLB)
\`\`\`
Features:
- Layer 4 routing
- Ultra-high performance
- Static IP addresses
- TCP/UDP support
\`\`\`

## Best Practices

1. **Health checks** - Monitor server health
2. **SSL termination** - Offload SSL at LB
3. **Sticky sessions** - For stateful apps
4. **Auto-scaling** - Dynamic capacity
5. **Multi-AZ** - Across availability zones
6. **Monitoring** - Track LB metrics
7. **Failover** - Active-passive setup
8. **Rate limiting** - Prevent abuse
  `,
  quiz: [
    {
      question: "Algoritma load balancing yang paling sederhana adalah?",
      options: [
        "Least Connections",
        "Round Robin",
        "IP Hash",
        "Weighted"
      ],
      correctAnswer: 1
    },
    {
      question: "Layer 7 load balancer menggunakan?",
      options: [
        "IP + Port",
        "HTTP headers",
        "MAC address",
        "DNS"
      ],
      correctAnswer: 1
    },
    {
      question: "AWS ALB adalah load balancer layer?",
      options: [
        "Layer 4",
        "Layer 7",
        "Layer 3",
        "Layer 2"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Load Balancing Setup",
      code: `// ============================================
// 1. Nginx Configuration
// ============================================
const nginxConfig = \`
# nginx.conf
events {
    worker_connections 1024;
}

http {
    upstream backend {
        # Round Robin (default)
        server backend1:8080;
        server backend2:8080;
        server backend3:8080;
    }
    
    upstream weighted {
        # Weighted
        server backend1:8080 weight=3;
        server backend2:8080 weight=2;
        server backend3:8080 weight=1;
    }
    
    upstream sticky {
        # IP Hash
        ip_hash;
        server backend1:8080;
        server backend2:8080;
        server backend3:8080;
    }
    
    upstream health {
        # Health checks
        server backend1:8080 max_fails=3 fail_timeout=30s;
        server backend2:8080 max_fails=3 fail_timeout=30s;
        server backend3:8080 max_fails=3 fail_timeout=30s;
    }
    
    server {
        listen 80;
        
        location / {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
        
        # Health check endpoint
        location /health {
            return 200 "OK";
        }
    }
}
\`;

// ============================================
// 2. HAProxy Configuration
// ============================================
const haproxyConfig = \`
# haproxy.cfg
global
    daemon
    maxconn 4096

defaults
    mode http
    timeout connect 5000ms
    timeout client 50000ms
    timeout server 50000ms

frontend http_front
    bind *:80
    default_backend backend_servers

backend backend_servers
    balance roundrobin
    option httpchk GET /health
    server server1 backend1:8080 check
    server server2 backend2:8080 check
    server server3 backend3:8080 check

frontend https_front
    bind *:443 ssl crt /etc/ssl/certs/server.pem
    default_backend backend_servers

backend api_servers
    balance leastconn
    server api1 api1:8080 check
    server api2 api2:8080 check
    server api3 api3:8080 check
\`;

// ============================================
// 3. Custom Load Balancer (Node.js)
// ============================================
class LoadBalancer {
    constructor(options = {}) {
        this.servers = options.servers || [];
        this.algorithm = options.algorithm || 'round-robin';
        this.currentIndex = 0;
        this.healthCheckInterval = options.healthCheckInterval || 30000;
        this.serverHealth = {};
        
        // Initialize health
        this.servers.forEach(s => {
            this.serverHealth[s.id] = true;
        });
        
        // Start health checks
        this.startHealthChecks();
    }
    
    // ============ ALGORITHMS ============
    getServer() {
        const healthy = this.servers.filter(s => this.serverHealth[s.id]);
        if (healthy.length === 0) return null;
        
        switch (this.algorithm) {
            case 'round-robin':
                return this.roundRobin(healthy);
            case 'least-connections':
                return this.leastConnections(healthy);
            case 'ip-hash':
                return this.ipHash(healthy);
            case 'weighted':
                return this.weighted(healthy);
            default:
                return this.roundRobin(healthy);
        }
    }
    
    roundRobin(servers) {
        const server = servers[this.currentIndex % servers.length];
        this.currentIndex++;
        return server;
    }
    
    leastConnections(servers) {
        return servers.reduce((min, s) => {
            return (s.connections || 0) < (min.connections || 0) ? s : min;
        });
    }
    
    ipHash(servers, ip = '127.0.0.1') {
        const hash = this.hash(ip);
        return servers[hash % servers.length];
    }
    
    weighted(servers) {
        const totalWeight = servers.reduce((sum, s) => sum + (s.weight || 1), 0);
        let random = Math.random() * totalWeight;
        
        for (const server of servers) {
            random -= (server.weight || 1);
            if (random <= 0) {
                return server;
            }
        }
        return servers[0];
    }
    
    hash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash = hash & hash;
        }
        return Math.abs(hash);
    }
    
    // ============ HEALTH CHECKS ============
    startHealthChecks() {
        setInterval(() => {
            this.checkHealth();
        }, this.healthCheckInterval);
    }
    
    async checkHealth() {
        for (const server of this.servers) {
            try {
                const response = await fetch(\`\${server.url}/health\`);
                this.serverHealth[server.id] = response.ok;
            } catch (error) {
                this.serverHealth[server.id] = false;
                console.log(\`Server \${server.id} is unhealthy\`);
            }
        }
    }
    
    // ============ REQUEST HANDLING ============
    async handleRequest(req) {
        const server = this.getServer();
        if (!server) {
            return { error: 'No healthy servers available' };
        }
        
        try {
            // Forward request to server
            const response = await this.forwardRequest(server, req);
            return response;
        } catch (error) {
            this.serverHealth[server.id] = false;
            console.log(\`Request to \${server.id} failed\`);
            
            // Retry with another server
            return this.handleRequest(req);
        }
    }
    
    async forwardRequest(server, req) {
        // Simulate forwarding
        console.log(\`Forwarding to \${server.url}\`);
        return {
            server: server.id,
            data: req
        };
    }
    
    // ============ STATISTICS ============
    getStats() {
        const healthy = this.servers.filter(s => this.serverHealth[s.id]);
        return {
            totalServers: this.servers.length,
            healthyServers: healthy.length,
            unhealthyServers: this.servers.length - healthy.length,
            algorithm: this.algorithm,
            servers: this.servers.map(s => ({
                id: s.id,
                url: s.url,
                health: this.serverHealth[s.id],
                weight: s.weight || 1
            }))
        };
    }
}

// ============ USAGE EXAMPLE ============
const lb = new LoadBalancer({
    servers: [
        { id: 'server1', url: 'http://backend1:8080', weight: 3 },
        { id: 'server2', url: 'http://backend2:8080', weight: 2 },
        { id: 'server3', url: 'http://backend3:8080', weight: 1 }
    ],
    algorithm: 'weighted',
    healthCheckInterval: 10000
});

// Get server for request
console.log('Selected server:', lb.getServer());

// Get stats
console.log('LB Stats:', lb.getStats());

// Simulate request
const request = { path: '/api/users', method: 'GET' };
lb.handleRequest(request).then(response => {
    console.log('Response:', response);
});`,
      language: "javascript"
    }
  ]
};