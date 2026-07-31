export const chapter = {
  slug: "kubernetes-pods",
  title: "Pods",
  description: "Unit terkecil di Kubernetes: membuat, mengelola, dan debugging Pods.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["kubernetes-architecture"],
  tags: ["kubernetes", "pods", "container", "yaml"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Pod?

Pod adalah **unit terkecil** di Kubernetes. Satu Pod bisa berisi **1 atau lebih container** yang berbagi network & storage.

## Pod YAML

\`\`\`yaml
# pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app
  labels:
    app: web
    version: v1
spec:
  containers:
  - name: app
    image: nginx:alpine
    ports:
    - containerPort: 80
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"
    env:
    - name: NODE_ENV
      value: "production"
    - name: DB_HOST
      valueFrom:
        configMapKeyRef:
          name: app-config
          key: db_host
\`\`\`

## Perintah Pod

\`\`\`bash
# Create
kubectl apply -f pod.yaml

# List
kubectl get pods
kubectl get pods -o wide  # Detail + IP + Node

# Info
kubectl describe pod my-app

# Logs
kubectl logs my-app
kubectl logs my-app -f        # Follow
kubectl logs my-app -c app    # Container spesifik

# Execute
kubectl exec -it my-app -- sh
kubectl exec my-app -- env

# Delete
kubectl delete pod my-app
kubectl delete -f pod.yaml
\`\`\`

## Multi-Container Pod

\`\`\`yaml
spec:
  containers:
  - name: app
    image: my-app:latest
    ports:
    - containerPort: 3000
  - name: sidecar
    image: nginx:alpine
    ports:
    - containerPort: 80
\`\`\`

## Init Containers

Jalan **sebelum** container utama, untuk setup:

\`\`\`yaml
spec:
  initContainers:
  - name: init-db
    image: busybox
    command: ['sh', '-c', 'until nc -z db 5432; do sleep 1; done']
  containers:
  - name: app
    image: my-app
\`\`\`

## Labels & Selectors

\`\`\`yaml
metadata:
  labels:
    app: web
    tier: frontend
    version: v1
\`\`\`

\`\`\`bash
kubectl get pods -l app=web
kubectl get pods -l 'tier in (frontend, backend)'
\`\`\`
  `,

  quiz: [
    { question: "Pod?", options: ["Container", "Unit terkecil K8s (bisa 1+ container)", "Node", "Service"], correctAnswer: 1 },
    { question: "kubectl logs?", options: ["Deploy", "Lihat log Pod", "Delete", "Scale"], correctAnswer: 1 },
    { question: "Init container?", options: ["Main app", "Jalan sebelum container utama (setup)", "Sidecar", "Database"], correctAnswer: 1 }
  ],

  codeExamples: []
};