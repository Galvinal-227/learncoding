export const chapter = {
  slug: "kubernetes-configmaps-secrets",
  title: "ConfigMaps & Secrets",
  description: "Kelola konfigurasi aplikasi dengan ConfigMaps dan data sensitif dengan Secrets.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["kubernetes-pods"],
  tags: ["kubernetes", "configmap", "secret", "configuration"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## ConfigMap

Simpan **konfigurasi non-sensitif**:

\`\`\`yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  NODE_ENV: production
  LOG_LEVEL: info
  app.properties: |
    db.host=postgres
    db.port=5432
    cache.ttl=300
\`\`\`

### Gunakan di Pod
\`\`\`yaml
spec:
  containers:
  - name: app
    envFrom:
    - configMapRef:
        name: app-config
    # Atau per variabel
    env:
    - name: NODE_ENV
      valueFrom:
        configMapKeyRef:
          name: app-config
          key: NODE_ENV
  # Atau mount sebagai file
    volumeMounts:
    - name: config
      mountPath: /etc/config
  volumes:
  - name: config
    configMap:
      name: app-config
\`\`\`

## Secret

Simpan **data sensitif** (password, token, API key):

\`\`\`yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
type: Opaque
data:
  DB_PASSWORD: cGFzc3dvcmQxMjM=  # Base64 encoded
  API_KEY: c2VjcmV0LWtleQ==
\`\`\`

### Create via CLI
\`\`\`bash
kubectl create secret generic app-secret \\
  --from-literal=DB_PASSWORD=password123 \\
  --from-literal=API_KEY=secret-key

kubectl create secret tls tls-secret \\
  --cert=cert.pem --key=key.pem
\`\`\`

### Gunakan di Pod
\`\`\`yaml
env:
- name: DB_PASSWORD
  valueFrom:
    secretKeyRef:
      name: app-secret
      key: DB_PASSWORD
\`\`\`
  `,

  quiz: [
    { question: "ConfigMap vs Secret?", options: ["Sama", "ConfigMap: non-sensitive; Secret: sensitive (Base64)", "Secret lebih kecil", "ConfigMap deprecated"], correctAnswer: 1 },
    { question: "Secret encoding?", options: ["Plain text", "Base64", "MD5", "SHA256"], correctAnswer: 1 }
  ],

  codeExamples: []
};