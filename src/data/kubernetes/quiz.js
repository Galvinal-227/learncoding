export const chapter = {
  slug: "kubernetes-quiz",
  title: "Quiz Akhir Kubernetes",
  description: "Uji pemahamanmu tentang Kubernetes.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["kubernetes-monitoring"],
  tags: ["kubernetes", "quiz"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir Kubernetes\n\n15 soal.`,
  quiz: [
    { question: "K8s?", options: ["Kubernetes (8 huruf)", "K8 Storage", "Kernel 8", "Kube 8"], correctAnswer: 0 },
    { question: "Unit terkecil?", options: ["Container", "Pod", "Node", "Service"], correctAnswer: 1 },
    { question: "etcd?", options: ["Runtime", "Database key-value K8s", "LB", "Proxy"], correctAnswer: 1 },
    { question: "Scheduler?", options: ["Meeting", "Pilih node untuk Pod baru", "Deploy", "Monitor"], correctAnswer: 1 },
    { question: "Deployment strategy?", options: ["Recreate", "RollingUpdate (zero downtime)", "Blue-Green", "Canary"], correctAnswer: 1 },
    { question: "Service default?", options: ["NodePort", "ClusterIP (internal)", "LB", "ExternalName"], correctAnswer: 1 },
    { question: "ConfigMap vs Secret?", options: ["Sama", "ConfigMap: non-sensitive; Secret: sensitive", "Secret kecil", "ConfigMap deprecated"], correctAnswer: 1 },
    { question: "PV?", options: ["Pod", "PersistentVolume (storage)", "Service", "Deploy"], correctAnswer: 1 },
    { question: "Helm?", options: ["DB", "Package manager K8s", "Container", "Network"], correctAnswer: 1 },
    { question: "Scale manual?", options: ["kubectl scale deploy name --replicas=N", "Auto only", "YAML only", "GUI only"], correctAnswer: 0 },
    { question: "Ingress?", options: ["DB", "HTTP routing ke Services", "Container", "Pod"], correctAnswer: 1 },
    { question: "Rollback?", options: ["kubectl undo", "kubectl rollout undo deploy name", "kubectl revert", "kubectl rollback"], correctAnswer: 1 },
    { question: "Prometheus?", options: ["DB", "Metrics + alerting", "Container", "Ingress"], correctAnswer: 1 },
    { question: "kubectl top?", options: ["Deploy", "Resource usage", "Delete", "Scale"], correctAnswer: 1 },
    { question: "NodePort range?", options: ["80-443", "3000-5000", "30000-32767", "1-65535"], correctAnswer: 2 }
  ]
};