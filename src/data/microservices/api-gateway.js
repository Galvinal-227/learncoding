export const chapter = {
  slug: "microservices-api-gateway",
  title: "API Gateway",
  description: "Gunakan API Gateway sebagai single entry point untuk microservices.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["microservices-communication"],
  tags: ["microservices", "api-gateway", "kong", "nginx"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu API Gateway?

API Gateway adalah **single entry point** untuk semua client. Menangani routing, authentication, rate limiting, dan aggregation.

## Kenapa Perlu API Gateway?

Tanpa Gateway:
\`\`\`
Client → Product Service (port 3001)
Client → Order Service (port 3002)
Client → Payment Service (port 3003)
❌ Client harus tahu semua endpoints
❌ CORS kompleks
❌ Auth di setiap service
\`\`\`

Dengan Gateway:
\`\`\`
Client → API Gateway (:80) → Product Service
                             → Order Service
                             → Payment Service
✅ Single endpoint
✅ Centralized auth
✅ Rate limiting, logging
\`\`\`

## API Gateway Tools

| Tool | Type | Best For |
|------|------|----------|
| **Kong** | Open source | Enterprise, plugin ekosistem |
| **Nginx** | Web server/reverse proxy | Simple, performa tinggi |
| **Traefik** | Cloud-native | Docker/K8s |
| **AWS API Gateway** | Managed | AWS ecosystem |
| **KrakenD** | Stateless | High performance |
| **Envoy** | Service proxy | Service mesh (Istio) |

## Kong Example

\`\`\`yaml
# kong.yml
services:
  - name: product-service
    url: http://product:3001
    routes:
      - name: products
        paths: [/api/products]
        strip_path: true

  - name: order-service
    url: http://order:3002
    routes:
      - name: orders
        paths: [/api/orders]
        strip_path: true

plugins:
  - name: rate-limiting
    config:
      minute: 100
  - name: key-auth
\`\`\`

## Nginx as API Gateway

\`\`\`nginx
upstream product { server product:3001; }
upstream order { server order:3002; }

server {
    listen 80;
    
    location /api/products/ {
        proxy_pass http://product/;
    }
    
    location /api/orders/ {
        proxy_pass http://order/;
        # Rate limiting
        limit_req zone=mylimit burst=20;
    }
}
\`\`\`

## API Gateway Responsibilities

| Responsibility | Deskripsi |
|----------------|-----------|
| **Routing** | Forward request ke service yang tepat |
| **Authentication** | Validasi token sebelum ke service |
| **Rate Limiting** | Batasi request per user/IP |
| **Caching** | Cache frequent responses |
| **Logging & Monitoring** | Centralized request logging |
| **Transformation** | Ubah request/response format |
| **Aggregation** | Gabung response dari multiple services |
  `,

  quiz: [
    { question: "API Gateway?", options: ["Database", "Single entry point untuk semua microservices", "Container", "Message queue"], correctAnswer: 1 },
    { question: "Kong?", options: ["Database", "Open source API Gateway", "Message queue", "Container runtime"], correctAnswer: 1 }
  ],

  codeExamples: []
};