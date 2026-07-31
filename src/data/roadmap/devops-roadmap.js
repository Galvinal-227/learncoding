export const chapter = {
  slug: "devops-roadmap",
  title: "DevOps Engineer Roadmap",
  description: "Panduan lengkap menjadi DevOps Engineer dari nol hingga mahir.",
  icon: "SiDevops",
  color: "#0066FF",
  difficulty: "Advanced",
  estimatedReadingTime: 35,
  prerequisites: ["roadmap-introduction", "roadmap-backend-roadmap"],
  tags: ["devops", "docker", "kubernetes", "aws", "ci-cd", "cloud"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# DevOps Engineer Roadmap 2024

## Phase 1: Fundamentals (2-3 Bulan)

### Linux/Unix
\`\`\`bash
# Basic Linux Commands
ls -la                 # List files
cd /var/log           # Change directory
pwd                   # Print working directory
mkdir /app            # Create directory
rm -rf /tmp/*         # Remove files
chmod 755 script.sh   # Change permissions
chown user:group file # Change ownership

# Process Management
ps aux                # List processes
top                   # Monitor processes
kill -9 PID           # Kill process
systemctl restart nginx  # Restart service

# Networking
ping google.com       # Check connectivity
netstat -tuln         # List listening ports
curl https://api.com  # HTTP requests
ssh user@server       # SSH connection
scp file user@server:/path  # Copy files
\`\`\`

### Scripting
\`\`\`bash
#!/bin/bash
# Backup Script
DATE=$(date +%Y%m%d)
BACKUP_DIR="/backups/\$DATE"
mkdir -p \$BACKUP_DIR

# Backup database
pg_dump -U postgres mydb > \$BACKUP_DIR/db.sql

# Backup files
tar -czf \$BACKUP_DIR/files.tar.gz /var/www/html

# Upload to S3
aws s3 cp \$BACKUP_DIR s3://my-bucket/backups/\$DATE/ --recursive

# Cleanup old backups (keep 7 days)
find /backups -type d -mtime +7 -exec rm -rf {} \\;
\`\`\`

## Phase 2: Version Control & CI/CD (2-3 Bulan)

### GitHub Actions
\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build
    
    - name: Deploy to AWS
      run: |
        aws s3 sync dist/ s3://my-bucket/
        aws cloudfront create-invalidation --distribution-id DIST_ID --paths "/*"
\`\`\`

### Jenkins
\`\`\`groovy
// Jenkinsfile
pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'registry.example.com'
        APP_NAME = 'my-app'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh 'docker build -t \$APP_NAME .'
            }
        }
        
        stage('Test') {
            steps {
                sh 'docker run \$APP_NAME npm test'
            }
        }
        
        stage('Push Image') {
            steps {
                sh 'docker tag \$APP_NAME \$DOCKER_REGISTRY/\$APP_NAME:latest'
                sh 'docker push \$DOCKER_REGISTRY/\$APP_NAME:latest'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'kubectl set image deployment/\$APP_NAME \$APP_NAME=\$DOCKER_REGISTRY/\$APP_NAME:latest'
            }
        }
    }
}
\`\`\`

## Phase 3: Containerization (2-3 Bulan)

### Docker
\`\`\`dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/server.js"]
\`\`\`

\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:secret@db:5432/app
    depends_on:
      - db
      - redis
    networks:
      - app-network

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: app
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - app-network

  redis:
    image: redis:7-alpine
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    ports:
      - "80:80"
    depends_on:
      - app
    networks:
      - app-network

networks:
  app-network:
    driver: bridge

volumes:
  pgdata:
\`\`\`

### Docker Commands
\`\`\`bash
# Build image
docker build -t my-app:latest .

# Run container
docker run -d -p 3000:3000 --name app my-app:latest

# List containers
docker ps

# Stop container
docker stop app

# Remove container
docker rm app

# Remove image
docker rmi my-app:latest

# View logs
docker logs -f app

# Execute command in container
docker exec -it app /bin/sh

# Docker Compose
docker-compose up -d
docker-compose down
docker-compose logs
docker-compose ps
\`\`\`

## Phase 4: Orchestration (2-3 Bulan)

### Kubernetes
\`\`\`yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:latest
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
---
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer
---
# ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-app-ingress
spec:
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-app-service
            port:
              number: 80
---
# configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  NODE_ENV: production
  LOG_LEVEL: info
---
# secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  url: cG9zdGdyZXNxbDovL3Bvc3RncmVzOnNlY3JldEBkYjo1NDMyL2FwcA==
---
# hpa.yaml (Horizontal Pod Autoscaler)
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
\`\`\`

### Kubernetes Commands
\`\`\`bash
# Apply configuration
kubectl apply -f deployment.yaml

# Get resources
kubectl get pods
kubectl get services
kubectl get deployments

# Describe resource
kubectl describe pod my-app-123

# View logs
kubectl logs -f my-app-123

# Execute command
kubectl exec -it my-app-123 -- /bin/sh

# Scale deployment
kubectl scale deployment my-app --replicas=5

# Rolling update
kubectl set image deployment/my-app my-app=my-app:v2

# Rollback
kubectl rollout undo deployment/my-app

# Port forward
kubectl port-forward pod/my-app-123 3000:3000
\`\`\`

## Phase 5: Cloud Platforms (2-3 Bulan)

### AWS (Amazon Web Services)
\`\`\`javascript
// AWS SDK Example
const AWS = require('aws-sdk');

// S3
const s3 = new AWS.S3();
const upload = async (file) => {
    const params = {
        Bucket: 'my-bucket',
        Key: file.name,
        Body: file.data
    };
    return await s3.upload(params).promise();
};

// EC2
const ec2 = new AWS.EC2();
const createInstance = async () => {
    const params = {
        ImageId: 'ami-0c55b159cbfafe1f0',
        InstanceType: 't2.micro',
        MinCount: 1,
        MaxCount: 1
    };
    return await ec2.runInstances(params).promise();
};

// RDS (Database)
const rds = new AWS.RDS();
const createDB = async () => {
    const params = {
        DBInstanceIdentifier: 'my-db',
        Engine: 'postgres',
        DBInstanceClass: 'db.t3.micro',
        AllocatedStorage: 20,
        MasterUsername: 'admin',
        MasterUserPassword: 'password'
    };
    return await rds.createDBInstance(params).promise();
};

// CloudFormation (Infrastructure as Code)
// template.yaml
Resources:
  MyBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: my-bucket
  MyTable:
    Type: AWS::DynamoDB::Table
    Properties:
      TableName: my-table
      AttributeDefinitions:
        - AttributeName: id
          AttributeType: S
      KeySchema:
        - AttributeName: id
          KeyType: HASH
      BillingMode: PAY_PER_REQUEST
\`\`\`

### Terraform
\`\`\`hcl
# main.tf
provider "aws" {
  region = "us-east-1"
}

# VPC
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "main-vpc"
  }
}

# Subnet
resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
  tags = {
    Name = "public-subnet"
  }
}

# EC2 Instance
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.public.id
  tags = {
    Name = "web-server"
  }
}

# RDS Database
resource "aws_db_instance" "db" {
  allocated_storage    = 20
  storage_type         = "gp2"
  engine              = "postgres"
  engine_version      = "15.3"
  instance_class      = "db.t3.micro"
  db_name             = "myapp"
  username            = "admin"
  password            = "password"
  skip_final_snapshot = true
}

# Outputs
output "instance_ip" {
  value = aws_instance.web.public_ip
}
\`\`\`

## Phase 6: Monitoring & Logging (1-2 Bulan)

### Prometheus & Grafana
\`\`\`yaml
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['localhost:9100']
  
  - job_name: 'my-app'
    static_configs:
      - targets: ['app:3000']
    metrics_path: '/metrics'
\`\`\`

### ELK Stack (Elasticsearch, Logstash, Kibana)
\`\`\`json
// logstash.conf
input {
  beats {
    port => 5044
  }
}

filter {
  json {
    source => "message"
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "logs-%{+YYYY.MM.dd}"
  }
}
\`\`\`

## Phase 7: Security (1-2 Bulan)

### Security Best Practices
- Principle of least privilege
- Network segmentation
- Encryption at rest & in transit
- Regular security audits
- Vulnerability scanning
- Secrets management (Vault, AWS Secrets Manager)

### Tools
- **Vault** - Secrets management
- **AWS IAM** - Access management
- **SonarQube** - Code security
- **Trivy** - Container scanning
- **AWS WAF** - Web application firewall
- **CloudTrail** - Audit logging

## Advanced Topics (Optional)

### Service Mesh
- Istio
- Linkerd
- Consul

### GitOps
- ArgoCD
- FluxCD

### Serverless
- AWS Lambda
- API Gateway
- Cloud Functions

### Multi-Cloud
- AWS + GCP + Azure
- Kubernetes Federation

## Project Ideas

1. **CI/CD Pipeline** - GitHub Actions + Docker + Kubernetes
2. **Microservices** - 3 services + Service Discovery
3. **Monitoring Stack** - Prometheus + Grafana + AlertManager
4. **Infrastructure as Code** - Terraform + AWS
5. **Serverless App** - Lambda + API Gateway + DynamoDB
6. **GitOps Setup** - ArgoCD + Kubernetes
7. **Security Automation** - SAST, DAST, Vulnerability scanning
8. **Disaster Recovery** - Backup, Restore, Failover

## Tools & Technologies

| Category | Tools |
|----------|-------|
| CI/CD | Jenkins, GitHub Actions, GitLab CI, CircleCI |
| Containers | Docker, Podman, Containerd |
| Orchestration | Kubernetes, Docker Swarm, Nomad |
| Cloud | AWS, GCP, Azure |
| IaC | Terraform, CloudFormation, Pulumi |
| Config Mgmt | Ansible, Puppet, Chef |
| Monitoring | Prometheus, Grafana, Datadog, New Relic |
| Logging | ELK Stack, Loki, Splunk |
| Security | Vault, AWS IAM, SonarQube, Trivy |
| Service Mesh | Istio, Linkerd, Consul |
| GitOps | ArgoCD, FluxCD |

## Timeline Summary

| Phase | Duration | Focus |
|-------|----------|-------|
| Phase 1 | 2-3 months | Linux, Scripting |
| Phase 2 | 2-3 months | Version Control, CI/CD |
| Phase 3 | 2-3 months | Containerization |
| Phase 4 | 2-3 months | Orchestration |
| Phase 5 | 2-3 months | Cloud Platforms |
| Phase 6 | 1-2 months | Monitoring & Logging |
| Phase 7 | 1-2 months | Security |
| **Total** | **12-19 months** | **Job Ready** |
  `,
  quiz: [
    {
      question: "Containerization tool yang paling populer adalah?",
      options: [
        "Kubernetes",
        "Docker",
        "Podman",
        "Containerd"
      ],
      correctAnswer: 1
    },
    {
      question: "Orchestration platform untuk container adalah?",
      options: [
        "Docker Compose",
        "Kubernetes",
        "Jenkins",
        "Terraform"
      ],
      correctAnswer: 1
    },
    {
      question: "Infrastructure as Code tool dari HashiCorp adalah?",
      options: [
        "CloudFormation",
        "Ansible",
        "Terraform",
        "Pulumi"
      ],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "Complete DevOps Pipeline",
      code: `# .github/workflows/pipeline.yml
name: Full DevOps Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: \${{ github.repository }}

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Run security scan
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
          format: 'sarif'
          output: 'trivy-results.sarif'
          
      - name: Upload security results
        uses: github/codeql-action/upload-sarif@v2
        with:
          sarif_file: 'trivy-results.sarif'

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.event_name == 'push'
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: docker build -t \${{ env.IMAGE_NAME }}:\${{ github.sha }} .
        
      - name: Scan image
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: \${{ env.IMAGE_NAME }}:\${{ github.sha }}
          format: 'table'
          
      - name: Log in to registry
        uses: docker/login-action@v2
        with:
          registry: \${{ env.REGISTRY }}
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}
          
      - name: Push image
        run: |
          docker tag \${{ env.IMAGE_NAME }}:\${{ github.sha }} \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:latest
          docker push \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:latest

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup kubectl
        uses: azure/setup-kubectl@v3
        
      - name: Configure kubectl
        run: |
          echo "\${{ secrets.KUBE_CONFIG }}" > kubeconfig
          export KUBECONFIG=kubeconfig
          
      - name: Deploy to Kubernetes
        run: |
          kubectl set image deployment/my-app my-app=\${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:latest
          kubectl rollout status deployment/my-app
          
      - name: Verify deployment
        run: |
          kubectl get pods
          kubectl get services
          
  monitor:
    needs: deploy
    runs-on: ubuntu-latest
    if: always()
    steps:
      - name: Send notification
        run: |
          curl -X POST -H 'Content-type: application/json' \
          --data '{"text":"Deployment \${{ job.status }}"}' \
          \${{ secrets.SLACK_WEBHOOK }}`,
      language: "yaml"
    }
  ]
};