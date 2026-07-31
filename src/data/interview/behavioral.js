export const chapter = {
  slug: "interview-behavioral",
  title: "Behavioral Interviews",
  description: "Kuasai behavioral interview dengan STAR method dan jawaban siap pakai.",
  icon: "SiCodinginterview",
  color: "#4A154B",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["interview-introduction"],
  tags: ["interview", "behavioral", "star-method", "soft-skills"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## STAR Method

Framework menjawab pertanyaan behavioral:

| | Deskripsi | Durasi |
|---|-----------|--------|
| **S**ituation | Konteks: di mana, kapan, posisi apa? | 30 detik |
| **T**ask | Tantangan/tugas yang dihadapi | 30 detik |
| **A**ction | Apa yang KAMU lakukan (spesifik!) | 2-3 menit |
| **R**esult | Hasil, impact, metrics (angka!) | 30 detik |

## Contoh Jawaban STAR

### Q: "Ceritakan tentang konflik dengan rekan kerja"

\`\`\`
S (Situation):
"Di startup sebelumnya, saya (Frontend Lead) dan lead backend 
berselisih tentang implementasi API. Dia ingin REST, 
saya usul GraphQL untuk fleksibilitas frontend."

T (Task):
"Deadline 2 minggu. Frontend butuh data fleksibel, 
backend concern performa."

A (Action):
"Saya menginisiasi meeting khusus. Saya riset benchmark 
REST vs GraphQL. Presentasi data: GraphQL mengurangi 
over-fetching 40%, tapi ada overhead 15% di server. 
Saya usul: GraphQL untuk endpoints frontend-frequent, 
REST untuk internal services. Saya volunteer bantu setup 
Apollo Server."

R (Result):
"Deadline tercapai. Page load turun 30%. Backend lead 
kemudian mengusulkan GraphQL ke tim lain. 
Hubungan kerja kami justru lebih baik."
\`\`\`

## Pertanyaan Behavioral Umum

| Kategori | Contoh Pertanyaan |
|----------|-------------------|
| **Teamwork** | Ceritakan konflik dengan rekan kerja |
| **Leadership** | Kapan kamu memimpin inisiatif? |
| **Failure** | Ceritakan kegagalan terbesarmu |
| **Challenge** | Proyek paling menantang? |
| **Growth** | Bagaimana kamu belajar teknologi baru? |
| **Feedback** | Bagaimana respon terhadap kritik? |
| **Priority** | Bagaimana handle multiple deadlines? |

## Siapkan 8-10 Cerita

\`\`\`
1. Proyek paling sukses (dengan metrics)
2. Kegagalan & pelajaran
3. Konflik dengan tim
4. Deadline ketat
5. Mentoring junior
6. Inovasi/inisiatif pribadi
7. Adaptasi teknologi baru
8. Handle stakeholder sulit
\`\`\`

## Tips

\`\`\`
✅ Fokus ke AKU, bukan tim (I, not we)
✅ Pakai metrics/angka (improve 30%, save 10 jam)
✅ Jujur - termasuk kegagalan
✅ Siapkan cerita dalam 2-3 menit
✅ Latihan cerita (bukan hafalan kata-per-kata)
✅ Hubungkan ke role yang dilamar
\`\`\`
  `,

  quiz: [
    { question: "STAR: Action?", options: ["Situasi", "Apa yang KAMU lakukan (spesifik)", "Hasil", "Tim"], correctAnswer: 1 },
    { question: "Behavioral: fokus ke?", options: ["Tim (we)", "Diri sendiri (I - apa yang saya lakukan)", "Manager", "Perusahaan"], correctAnswer: 1 }
  ],

  codeExamples: []
};