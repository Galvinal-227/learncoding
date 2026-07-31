export const chapter = {
  slug: "kubernetes-monitoring",
  title: "Monitoring & Logging",
  description: "Monitor cluster dengan Prometheus, Grafana, dan ELK stack.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["kubernetes-deployments"],
  tags: ["kubernetes", "monitoring", "prometheus", "grafana"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Tools Monitoring

| Tool | Fungsi |
|------|--------|
| **Prometheus** | Metrics collection + alerting |
| **Grafana** | Dashboard visualization |
| **Loki** | Log aggregation |
| **Jaeger** | Distributed tracing |

## kubectl Debug

\`\`\`bash
# Resource usage
kubectl top nodes
kubectl top pods

# Events
kubectl get events --sort-by=.metadata.creationTimestamp

# Describe (detail + events)
kubectl describe pod my-app

# Port forward (akses lokal)
kubectl port-forward pod/my-app 8080:80
\`\`\`

## Monitoring Stack (kube-prometheus-stack)

\`\`\`bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install monitoring prometheus-community/kube-prometheus-stack
\`\`\`
  `,

  quiz: [
    { question: "Prometheus?", options: ["Database", "Metrics collection + alerting", "Container", "Ingress"], correctAnswer: 1 },
    { question: "kubectl top?", options: ["Deploy", "Lihat resource usage (CPU/Memory)", "Delete", "Scale"], correctAnswer: 1 }
  ],

  codeExamples: []
};