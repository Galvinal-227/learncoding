export const chapter = {
  slug: "kubernetes-helm",
  title: "Helm Charts",
  description: "Package manager untuk Kubernetes: install, upgrade, share aplikasi dengan Helm.",
  icon: "SiHelm",
  color: "#0F1689",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["kubernetes-deployments"],
  tags: ["kubernetes", "helm", "charts", "package"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Helm?

Helm adalah **package manager untuk Kubernetes**. Seperti npm untuk Node.js, apt untuk Ubuntu.

## Instalasi

\`\`\`bash
brew install helm  # Mac
choco install kubernetes-helm  # Windows
\`\`\`

## Basic Commands

\`\`\`bash
# Add repository
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

# Search
helm search repo nginx

# Install
helm install my-nginx bitnami/nginx

# List
helm list

# Upgrade
helm upgrade my-nginx bitnami/nginx --set replicaCount=3

# Rollback
helm rollback my-nginx 1

# Uninstall
helm uninstall my-nginx
\`\`\`

## Chart Structure

\`\`\`
my-chart/
├── Chart.yaml          # Metadata
├── values.yaml         # Default configuration
├── charts/             # Dependencies
└── templates/          # K8s manifests (Go templates)
    ├── deployment.yaml
    ├── service.yaml
    └── _helpers.tpl
\`\`\`

## Custom values.yaml

\`\`\`yaml
# my-values.yaml
replicaCount: 3

image:
  repository: my-app
  tag: v1.2.3

service:
  type: LoadBalancer
  port: 80

ingress:
  enabled: true
  hosts:
  - myapp.com
\`\`\`

\`\`\`bash
helm install my-app ./my-chart -f my-values.yaml
\`\`\`
  `,

  quiz: [
    { question: "Helm?", options: ["Database", "Package manager K8s", "Container", "Network"], correctAnswer: 1 },
    { question: "Helm install?", options: ["helm deploy", "helm install", "helm run", "helm start"], correctAnswer: 1 }
  ],

  codeExamples: []
};