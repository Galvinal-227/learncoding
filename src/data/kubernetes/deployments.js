export const chapter = {
  slug: "kubernetes-deployments",
  title: "Deployments & ReplicaSets",
  description: "Manage replicas, rolling updates, rollbacks dengan Deployments.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["kubernetes-pods"],
  tags: ["kubernetes", "deployment", "replicaset", "rolling-update"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Deployment

Deployment mengelola **ReplicaSet** dan menyediakan **declarative updates** untuk Pods.

## Deployment YAML

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: web
spec:
  replicas: 3                    # 3 instances
  selector:
    matchLabels:
      app: web
  template:                       # Pod template
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: app
        image: nginx:1.25
        ports:
        - containerPort: 80
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1
\`\`\`

## Perintah Deployment

\`\`\`bash
# Create
kubectl apply -f deployment.yaml

# List
kubectl get deployments
kubectl get replicasets
kubectl get pods

# Scale
kubectl scale deployment my-app --replicas=5

# Update image
kubectl set image deployment/my-app app=nginx:1.26

# Rolling restart
kubectl rollout restart deployment my-app

# Status
kubectl rollout status deployment my-app

# History
kubectl rollout history deployment my-app

# Rollback
kubectl rollout undo deployment my-app
kubectl rollout undo deployment my-app --to-revision=2

# Delete
kubectl delete deployment my-app
\`\`\`

## Rolling Update Strategies

| Strategy | Cara | Use Case |
|----------|------|----------|
| **RollingUpdate** | Ganti satu per satu (default) | Zero downtime |
| **Recreate** | Hapus semua → buat baru | Ada downtime, simple |

## Scaling

### Manual
\`\`\`bash
kubectl scale deployment my-app --replicas=5
\`\`\`

### Auto (HPA - Horizontal Pod Autoscaler)
\`\`\`bash
kubectl autoscale deployment my-app --min=2 --max=10 --cpu-percent=70
\`\`\`

\`\`\`yaml
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
  `,

  quiz: [
    { question: "Deployment: strategy default?", options: ["Recreate", "RollingUpdate (zero downtime)", "Blue-Green", "Canary"], correctAnswer: 1 },
    { question: "Scale manual?", options: ["kubectl scale deployment name --replicas=N", "Auto only", "Via YAML only", "Via GUI only"], correctAnswer: 0 },
    { question: "Rollback?", options: ["kubectl undo", "kubectl rollout undo deployment name", "kubectl revert", "kubectl rollback"], correctAnswer: 1 }
  ],

  codeExamples: []
};