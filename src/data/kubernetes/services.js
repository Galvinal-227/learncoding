export const chapter = {
  slug: "kubernetes-services",
  title: "Services & Networking",
  description: "Expose aplikasi dengan Services: ClusterIP, NodePort, LoadBalancer, Ingress.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["kubernetes-deployments"],
  tags: ["kubernetes", "services", "networking", "ingress"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Services

Pod bersifat **ephemeral** (IP bisa berubah). Service memberikan **alamat tetap** dan **load balancing**.

## 4 Tipe Service

| Tipe | Akses | Use Case |
|------|-------|----------|
| **ClusterIP** | Internal cluster only (default) | Microservices communication |
| **NodePort** | External via Node IP:30000-32767 | Development, testing |
| **LoadBalancer** | External via Cloud LB | Production |
| **ExternalName** | DNS alias | External services |

## Service YAML

### ClusterIP (Default)
\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: web
  ports:
  - port: 80          # Service port
    targetPort: 3000  # Container port
  type: ClusterIP
\`\`\`

### NodePort
\`\`\`yaml
spec:
  type: NodePort
  ports:
  - port: 80
    targetPort: 3000
    nodePort: 30080    # 30000-32767
\`\`\`

### LoadBalancer
\`\`\`yaml
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 3000
\`\`\`

## Ingress

Route HTTP/HTTPS ke Services:

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
  - host: myapp.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 3000
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
\`\`\`

## Network Policy

Firewall antar Pod:

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
\`\`\`
  `,

  quiz: [
    { question: "Service type default?", options: ["NodePort", "ClusterIP (internal)", "LoadBalancer", "ExternalName"], correctAnswer: 1 },
    { question: "Ingress?", options: ["Database", "HTTP routing ke Services", "Container", "Pod"], correctAnswer: 1 },
    { question: "NodePort range?", options: ["80-443", "3000-5000", "30000-32767", "1-65535"], correctAnswer: 2 }
  ],

  codeExamples: []
};