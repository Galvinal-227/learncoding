export const chapter = {
  slug: "microservices-deployment",
  title: "Deployment & DevOps",
  description: "Deploy microservices dengan Docker, Kubernetes, CI/CD, dan monitoring.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["microservices-api-gateway"],
  tags: ["microservices", "deployment", "kubernetes", "devops"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Containerization (Docker)

Setiap service = satu Docker image:

\`\`\`dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

## Kubernetes Deployment

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: payment-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: payment
  template:
    spec:
      containers:
      - name: payment
        image: payment-service:latest
        ports:
        - containerPort: 3000
        env:
        - name: DB_HOST
          valueFrom:
            configMapKeyRef:
              name: payment-config
              key: db_host
---
apiVersion: v1
kind: Service
metadata:
  name: payment-service
spec:
  selector:
    app: payment
  ports:
  - port: 80
    targetPort: 3000
\`\`\`

## CI/CD per Service

\`\`\`yaml
# .github/workflows/deploy-payment.yml
name: Deploy Payment Service
on:
  push:
    paths: ['services/payment/**']
    
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build and Push
        run: |
          docker build -t payment:latest ./services/payment
          docker push registry.example.com/payment:latest
      - name: Deploy to Kubernetes
        run: kubectl set image deployment/payment payment=registry.example.com/payment:latest
\`\`\`

## Service Mesh (Istio)

\`\`\`
Features:
- Traffic management (canary, A/B)
- Security (mTLS)
- Observability (metrics, tracing)
- Resilience (circuit breaker, retry)

Tools: Istio, Linkerd, Consul Connect
\`\`\`
  `,

  quiz: [
    { question: "CI/CD per service?", options: ["Satu pipeline semua", "Pipeline independen per service (path trigger)", "Manual deploy", "Tidak perlu"], correctAnswer: 1 },
    { question: "Service mesh?", options: ["Database", "Istio/Linkerd (traffic, security, observability)", "API Gateway", "Message Queue"], correctAnswer: 1 }
  ],

  codeExamples: []
};