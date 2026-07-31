export const chapter = {
  slug: "interview-system-design-interviews",
  title: "System Design Interviews",
  description: "Framework menjawab system design interview: requirements, estimation, architecture.",
  icon: "SiCodinginterview",
  color: "#4A154B",
  difficulty: "Advanced",
  estimatedReadingTime: 30,
  prerequisites: ["interview-technical-interviews"],
  tags: ["interview", "system-design", "architecture", "scalability"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Framework System Design

| Step | Deskripsi | Waktu |
|------|-----------|-------|
| 1. Requirements | Functional + Non-functional | 5 menit |
| 2. Capacity Estimation | Traffic, storage, bandwidth | 5 menit |
| 3. High-Level Design | Diagram arsitektur | 10 menit |
| 4. Deep Dive | Detail komponen kritis | 15 menit |
| 5. Bottlenecks & Trade-offs | Diskusi alternatif | 5 menit |

## Step 1: Requirements

### Functional:
\`\`\`
Q: "Apa fitur utama?"
- User bisa upload/view video
- User bisa like/comment
- User bisa subscribe channel
- Search video
\`\`\`

### Non-Functional:
\`\`\`
- 100M daily active users
- Video upload <1 menit
- 99.9% availability
- Low latency streaming (<2 detik)
\`\`\`

## Step 2: Capacity Estimation

\`\`\`
DAU: 100M
Video upload: 0.01% DAU × 100MB avg = 10TB/hari
Views: 1B views/hari × 5MB avg = 5PB bandwidth/hari
Storage: 10TB/hari × 365 × 3 (replication) = ~11PB/year
Cache: 20% traffic = 200GB (Redis/Memcached)
\`\`\`

## Step 3: High-Level Design

\`\`\`
┌──────────┐     ┌──────────┐     ┌──────────┐
│  Client  │────▶│   CDN    │────▶│  Video   │
│          │     │          │     │  Storage │
└──────────┘     └──────────┘     └──────────┘
     │                                 │
     ▼                                 ▼
┌──────────┐                    ┌──────────┐
│   API    │───────────────────▶│ Database │
│  Server  │                    │ (SQL+NoSQL)
└──────────┘                    └──────────┘
     │
     ▼
┌──────────┐
│ Message  │──▶ Video Processing (Queue)
│  Queue   │──▶ Notification (Queue)
└──────────┘
\`\`\`

## Contoh: Design YouTube

### Core Components:
1. **CDN**: Serve video (CloudFront/Cloudflare)
2. **Load Balancer**: Distribusi traffic
3. **API Servers**: Node.js/Go, stateless
4. **Video Processing**: Queue → Transcoding → Multiple resolutions
5. **Database**: User/Video metadata (PostgreSQL), Comments (NoSQL)
6. **Cache**: Redis untuk hot videos
7. **Search**: Elasticsearch

### Database Schema (SQL):
\`\`\`sql
users: id, email, name, created_at
videos: id, user_id, title, url, thumbnail, duration, views, created_at
comments: id, video_id, user_id, text, created_at
subscriptions: user_id, channel_id
\`\`\`

## Common System Design Questions

| Soal | Key Concepts |
|------|-------------|
| Design URL Shortener | Hash, Base62, Cache, DB |
| Design WhatsApp | WebSocket, Message Queue, Read Receipts |
| Design Twitter | Fan-out, Timeline, Cache, Search |
| Design YouTube | CDN, Video Processing, Storage |
| Design Uber | Geospatial Index, Matching, Real-time |
| Design Ticketmaster | Concurrency, Locking, Queue |

## Tips

\`\`\`
✅ Mulai dari simple, evolve ke complex
✅ Diskusikan trade-offs (SQL vs NoSQL, Cache vs No Cache)
✅ Gambar diagram (pakai tool whiteboard/excalidraw)
✅ Sebut angka (10M users, 100GB data)
✅ Jangan deep dive terlalu dini (overview dulu)
✅ Tanya interviewer: "Should I dive deeper into X?"
\`\`\`
  `,

  quiz: [
    { question: "System design: step 1?", options: ["Coding", "Requirements (functional + non-functional)", "Database schema", "Deploy"], correctAnswer: 1 },
    { question: "Design YouTube: video serving?", options: ["API Server", "CDN", "Database", "Cache"], correctAnswer: 1 }
  ],

  codeExamples: []
};