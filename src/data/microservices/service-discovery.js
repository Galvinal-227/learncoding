export const chapter = {
  slug: "microservices-service-discovery",
  title: "Service Discovery",
  description: "Service discovery dengan Consul, Eureka, dan Kubernetes DNS.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["microservices-communication"],
  tags: ["microservices", "service-discovery", "consul", "kubernetes"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Service Discovery?

Microservices bersifat **dinamis** (IP/port berubah, scale up/down). Service tidak bisa hardcode alamat service lain.

## Client-Side vs Server-Side

| | Client-Side | Server-Side |
|---|------------|--------------|
| Discovery | Client query registry | Load balancer query registry |
| Contoh | Netflix Eureka + Ribbon | AWS ELB, Kubernetes Service |
| Client complexity | Tinggi | Rendah |
| Language-specific | Ribbon = Java only | Language-agnostic |

## Tools

| Tool | Type |
|------|------|
| **Consul** | Service mesh + KV store |
| **Eureka** | Netflix, client-side |
| **Kubernetes DNS** | Built-in, server-side |
| **etcd** | Distributed KV store |

## Kubernetes Service Discovery

\`\`\`yaml
# Service → DNS otomatis!
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

\`\`\`javascript
// DNS: payment-service.default.svc.cluster.local
const response = await fetch('http://payment-service/process');
\`\`\`

## Consul

\`\`\`javascript
import consul from 'consul';

const client = new consul({ host: 'consul-server' });

// Register
client.agent.service.register({
    name: 'payment-service',
    address: '10.0.0.5',
    port: 3000
});

// Discover
const services = await client.catalog.service.nodes('payment-service');
const healthy = services.filter(s => s.Checks.every(c => c.Status === 'passing'));
\`\`\`
  `,

  quiz: [
    { question: "Service Discovery?", options: ["Database", "Menemukan lokasi service secara dinamis", "API Gateway", "Load Balancer"], correctAnswer: 1 },
    { question: "Kubernetes Service Discovery?", options: ["Manual IP", "DNS otomatis (service-name.namespace.svc)", "Eureka", "Consul only"], correctAnswer: 1 }
  ],

  codeExamples: []
};