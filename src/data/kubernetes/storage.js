export const chapter = {
  slug: "kubernetes-storage",
  title: "Persistent Storage",
  description: "Kelola storage persistent dengan PV, PVC, dan StorageClass.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["kubernetes-pods"],
  tags: ["kubernetes", "storage", "pv", "pvc"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Storage Concepts

| Resource | Fungsi | Analogi |
|----------|--------|---------|
| **PV** (PersistentVolume) | Storage fisik (disediakan admin) | Hard disk |
| **PVC** (PersistentVolumeClaim) | Request storage (oleh user) | Minta hard disk |
| **StorageClass** | Provisioning otomatis | Katalog hard disk |

## PersistentVolume (PV)

\`\`\`yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-pv
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: /mnt/data
\`\`\`

## PersistentVolumeClaim (PVC)

\`\`\`yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
\`\`\`

## Gunakan di Pod

\`\`\`yaml
spec:
  containers:
  - name: app
    volumeMounts:
    - name: data
      mountPath: /app/data
  volumes:
  - name: data
    persistentVolumeClaim:
      claimName: my-pvc
\`\`\`

## Access Modes

| Mode | Arti |
|------|------|
| **ReadWriteOnce (RWO)** | Satu node baca-tulis |
| **ReadOnlyMany (ROX)** | Banyak node baca |
| **ReadWriteMany (RWX)** | Banyak node baca-tulis |
  `,

  quiz: [
    { question: "PV?", options: ["Pod", "PersistentVolume (storage fisik)", "Service", "Deployment"], correctAnswer: 1 },
    { question: "PVC?", options: ["Plastic", "PersistentVolumeClaim (request storage)", "Container", "Network"], correctAnswer: 1 }
  ],

  codeExamples: []
};