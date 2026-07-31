export const chapter = {
  slug: "kubernetes-architecture",
  title: "Arsitektur Kubernetes",
  description: "Pahami arsitektur K8s: Control Plane, Worker Nodes, dan komponen-komponennya.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["kubernetes-introduction"],
  tags: ["kubernetes", "architecture", "control-plane", "nodes"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Arsitektur K8s

\`\`\`
┌─────────────────────────────────────────┐
│            CONTROL PLANE                 │
│  ┌──────────┐  ┌──────────┐            │
│  │   API    │  │ Scheduler│            │
│  │  Server  │  │          │            │
│  └──────────┘  └──────────┘            │
│  ┌──────────┐  ┌──────────┐            │
│  │Controller│  │   etcd   │            │
│  │ Manager  │  │(Database)│            │
│  └──────────┘  └──────────┘            │
└─────────────────────────────────────────┘
              │          │
    ┌─────────┘          └─────────┐
    ▼                              ▼
┌────────────┐              ┌────────────┐
│  Worker    │              │  Worker    │
│  Node 1    │              │  Node 2    │
│            │              │            │
│ ┌────────┐ │              │ ┌────────┐ │
│ │  Pod   │ │              │ │  Pod   │ │
│ │┌──────┐│ │              │ │┌──────┐│ │
│ ││Cont1 ││ │              │ ││Cont1 ││ │
│ │└──────┘│ │              │ │└──────┘│ │
│ └────────┘ │              │ └────────┘ │
│ kubelet    │              │ kubelet    │
│ kube-proxy │              │ kube-proxy │
└────────────┘              └────────────┘
\`\`\`

## Control Plane Components

| Komponen | Fungsi |
|----------|--------|
| **API Server** | Gerbang utama, semua komunikasi lewat sini (REST API) |
| **etcd** | Database key-value untuk semua data cluster |
| **Scheduler** | Menentukan node mana yang menjalankan Pod baru |
| **Controller Manager** | Mengontrol state cluster (Deployment, ReplicaSet, dll) |

## Worker Node Components

| Komponen | Fungsi |
|----------|--------|
| **kubelet** | Agent yang memastikan container berjalan di Pod |
| **kube-proxy** | Network proxy, atur komunikasi antar Pod |
| **Container Runtime** | containerd, CRI-O (jalanin container) |

## Alur Deploy Aplikasi

\`\`\`
1. kubectl apply -f deployment.yaml → API Server
2. API Server simpan ke etcd
3. Scheduler lihat Pod baru → pilih Node yang cocok
4. kubelet di Node tersebut → tarik image → jalankan container
5. Controller Manager monitor → pastikan state sesuai
\`\`\`

## Namespaces

Isolasi virtual dalam cluster:

\`\`\`bash
kubectl get namespaces
# default       # Default namespace
# kube-system   # Komponen K8s sendiri
# kube-public   # Public data
# production    # Custom namespace
# development   # Custom namespace
\`\`\`

\`\`\`yaml
apiVersion: v1
kind: Namespace
metadata:
  name: production
\`\`\`
  `,

  quiz: [
    { question: "etcd?", options: ["Container runtime", "Database key-value K8s", "Load balancer", "Network proxy"], correctAnswer: 1 },
    { question: "Scheduler?", options: ["Jadwal meeting", "Pilih node untuk Pod baru", "Deploy aplikasi", "Monitor"], correctAnswer: 1 },
    { question: "kubelet?", options: ["Database", "Agent di node (jalankan container)", "CLI", "API"], correctAnswer: 1 }
  ],

  codeExamples: []
};