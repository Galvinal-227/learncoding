export const chapter = {
  slug: "microservices-introduction",
  title: "Pengenalan Microservices",
  description: "Pahami apa itu microservices, kelebihan, kekurangan, dan kapan menggunakannya.",
  icon: "SiKubernetes",
  color: "#326CE5",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["software-architecture-introduction"],
  tags: ["microservices", "architecture", "distributed", "monolith"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Microservices?

Microservices adalah **gaya arsitektur** di mana aplikasi dibangun sebagai kumpulan **service kecil, independen, dan loosely coupled**. Setiap service punya:
- Business logic sendiri
- Database sendiri
- Bisa di-deploy independen
- Berkomunikasi via API (HTTP/gRPC/Message Queue)

## Monolith vs Microservices

| | Monolith | Microservices |
|---|----------|---------------|
| Struktur | Satu aplikasi besar | Banyak service kecil |
| Database | Satu database shared | Database per service |
| Deployment | Satu unit | Independen per service |
| Scaling | Sulit (scale semua) | Mudah (scale service tertentu) |
| Development | Simple (awal) | Kompleks |
| Debugging | Mudah | Sulit (distributed tracing) |
| Team | Cocok tim kecil | Cocok banyak tim |

## Kapan Microservices?

✅ Aplikasi besar dengan banyak modul
✅ Banyak tim (masing-masing handle service)
✅ Butuh scaling independen (service A heavy, service B light)
✅ Butuh teknologi berbeda per service (Node.js, Python, Go)
✅ Frequent deployment (CI/CD)

❌ Aplikasi kecil/sederhana (over-engineering)
❌ Startup early-stage (MVP cepat)
❌ Tim kecil (<10 orang)
❌ Tidak ada DevOps infrastructure

## Karakteristik Microservices

| Karakteristik | Deskripsi |
|---------------|-----------|
| **Decentralized** | Tidak ada central governance |
| **Independent** | Deploy, scale, update sendiri-sendiri |
| **Resilient** | Satu service gagal ≠ semua gagal |
| **API-driven** | Komunikasi via well-defined APIs |
| **Own data** | Setiap service punya database sendiri |
| **CI/CD** | Automated pipeline per service |

## Contoh Arsitektur E-Commerce

\`\`\`
┌──────────┐     ┌──────────┐     ┌──────────┐
│  Product │     │  Order   │     │ Payment  │
│  Service │     │  Service │     │  Service │
│  (Node)  │     │  (Go)    │     │ (Python) │
└──────────┘     └──────────┘     └──────────┘
      │                │                │
      ▼                ▼                ▼
┌──────────┐     ┌──────────┐     ┌──────────┐
│ Product  │     │  Order   │     │ Payment  │
│   DB     │     │   DB     │     │   DB     │
└──────────┘     └──────────┘     └──────────┘

          ┌─────────────────┐
          │   API Gateway   │
          └─────────────────┘
                    │
              ┌──────────┐
              │  Client  │
              └──────────┘
\`\`\`

## Tantangan Microservices

| Tantangan | Solusi |
|-----------|--------|
| Kompleksitas | Service mesh (Istio), API Gateway |
| Network latency | gRPC, async messaging |
| Data consistency | Saga pattern, event-driven |
| Debugging | Distributed tracing (Jaeger) |
| Deployment | Kubernetes, Helm |
| Monitoring | Prometheus, Grafana, ELK |
  `,

  quiz: [
    { question: "Microservices vs Monolith?", options: ["Sama", "Micro: small, independent; Mono: one big app", "Mono lebih cepat selalu", "Micro deprecated"], correctAnswer: 1 },
    { question: "Database microservices?", options: ["Satu shared DB", "Satu DB per service", "Tanpa database", "Hanya cache"], correctAnswer: 1 },
    { question: "Kapan TIDAK perlu microservices?", options: ["Aplikasi besar", "Startup early-stage / MVP / tim kecil", "Banyak tim", "High traffic"], correctAnswer: 1 }
  ],

  codeExamples: []
};