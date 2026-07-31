export const chapter = {
  slug: "kubernetes-introduction",
  title: "Pengenalan Kubernetes",
  description: "Pahami apa itu Kubernetes, sejarahnya, dan kenapa jadi standar container orchestration.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["docker-introduction"],
  tags: ["kubernetes", "k8s", "container", "orchestration"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Kubernetes?

Kubernetes (sering disingkat **K8s** - 8 huruf antara K dan S) adalah platform open-source untuk **mengotomatisasi deployment, scaling, dan management** aplikasi container. Dibuat oleh Google, sekarang dikelola CNCF.

## Masalah yang Diselesaikan

### Tanpa Orchestration:
\`\`\`
- Container mati → manual restart
- Traffic naik → manual deploy instance baru
- Update aplikasi → downtime
- Multi-container → konfigurasi network rumit
\`\`\`

### Dengan Kubernetes:
\`\`\`
- Container mati → auto-restart
- Traffic naik → auto-scale
- Update aplikasi → rolling update (zero downtime)
- Multi-container → service discovery otomatis
\`\`\`

## Docker vs Docker Compose vs Kubernetes

| | Docker | Docker Compose | Kubernetes |
|---|--------|---------------|------------|
| Scope | Single container | Multi-container (single host) | Multi-container (multi-host) |
| Scaling | Manual | Manual | Auto |
| Load Balancing | Manual | Manual | Built-in |
| Self-healing | ❌ | ❌ | ✅ |
| Rolling Updates | ❌ | ❌ | ✅ |
| Production-ready | ❌ | ❌ | ✅ |

## Konsep Dasar

| Konsep | Analogi | Fungsi |
|--------|---------|--------|
| **Pod** | Apartemen 1 unit | Unit terkecil (1+ container) |
| **Node** | Gedung | Server (VM/physical) |
| **Cluster** | Kompleks apartemen | Kumpulan node |
| **Deployment** | Manajer gedung | Manage replicas & updates |
| **Service** | Resepsionis | Alamat tetap + load balancer |
| **ConfigMap** | Buku panduan | Konfigurasi aplikasi |
| **Secret** | Brankas | Data sensitif (password, token) |

## Tools Kubernetes

### Local Development
- **Minikube** - Single-node cluster lokal
- **kind** (Kubernetes IN Docker) - Cluster dalam Docker
- **k3s** - Kubernetes ringan (IoT, edge)
- **Docker Desktop** - Built-in Kubernetes

### Production
- **GKE** (Google Kubernetes Engine)
- **EKS** (Amazon Elastic Kubernetes Service)
- **AKS** (Azure Kubernetes Service)
- **DigitalOcean Kubernetes**

## kubectl (CLI)

\`\`\`bash
# Install kubectl
brew install kubectl  # Mac
choco install kubernetes-cli  # Windows

# Cek cluster
kubectl cluster-info
kubectl get nodes
kubectl get pods
kubectl get services
\`\`\`

## YAML Structure

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app
  labels:
    app: web
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
\`\`\`
  `,

  quiz: [
    { question: "K8s singkatan?", options: ["Kubernetes (8 huruf antara K dan S)", "K8 Storage", "Kernel 8 System", "Kube 8 Services"], correctAnswer: 0 },
    { question: "Unit terkecil di K8s?", options: ["Container", "Pod", "Node", "Service"], correctAnswer: 1 },
    { question: "kubectl?", options: ["Database", "CLI untuk manage K8s cluster", "Container runtime", "Monitoring tool"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "kubectl pertama",
      language: "bash",
      code: `# Cek cluster
kubectl cluster-info

# Lihat nodes
kubectl get nodes

# Deploy aplikasi pertama
kubectl create deployment hello --image=nginx

# Lihat pods
kubectl get pods

# Expose ke internet
kubectl expose deployment hello --port=80 --type=LoadBalancer

# Akses
kubectl get services`
    }
  ]
};