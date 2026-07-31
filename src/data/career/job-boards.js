export const chapter = {
  slug: "career-job-boards",
  title: "Mencari Lowongan Kerja",
  description: "Platform dan strategi mencari lowongan kerja developer.",
  icon: "SiLinkedin",
  color: "#0A66C2",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["career-resume"],
  tags: ["career", "job", "lowongan", "apply"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Platform Cari Kerja

### Global (Remote)
| Platform | Cocok Untuk |
|----------|-------------|
| **LinkedIn Jobs** | Semua level, paling populer |
| **Indeed** | General job search |
| **Glassdoor** | Cek gaji + review perusahaan |
| **Wellfound (AngelList)** | Startup, tech-focused |
| **Remote OK** | Remote work exclusively |
| **We Work Remotely** | Remote jobs |
| **Toptal** | Freelance (top 3%) |
| **Upwork** | Freelance (semua level) |

### Indonesia
| Platform | Cocok Untuk |
|----------|-------------|
| **Jobstreet** | General |
| **Kalibrr** | Tech & startup |
| **Glints** | Entry-mid level |
| **Tech in Asia Jobs** | Tech companies |
| **LinkedIn Jobs** | Semua level |

## Strategi Mencari Kerja

### 1. Quality over Quantity
\`\`\`
❌ Apply 100 lowongan dengan template generic
✅ Apply 10-15 lowongan yang benar-benar cocok dengan resume tailored
\`\`\`

### 2. Portfolio > CV
\`\`\`
Untuk developer: Project GitHub > Resume
- Live demo project
- Clean code
- README yang jelas
- Deployed di Vercel/Netlify
\`\`\`

### 3. Target Companies
Buat daftar 20-30 perusahaan impian. Pantau halaman karir mereka.

### 4. Referral (Gold!)
Minta referral dari karyawan. Beberapa perusahaan kasih bonus referral Rp 5-20 juta.

### 5. Recruiter Outreach
LinkedIn → cari recruiter perusahaan target → kirim pesan singkat + resume.

## Red Flags Perusahaan

\`\`\`
❌ Minta bayar untuk interview/tes
❌ Job desc tidak jelas
❌ Gaji tidak transparan
❌ Review buruk di Glassdoor
❌ Turnover tinggi
❌ Interview >4 tahap tanpa alasan jelas
❌ Tidak ada kontrak tertulis
\`\`\`
  `,

  quiz: [
    { question: "Platform untuk startup job?", options: ["Jobstreet", "Wellfound (AngelList)", "Indeed", "Glassdoor"], correctAnswer: 1 },
    { question: "Lebih penting portfolio atau CV untuk developer?", options: ["CV", "Portfolio (GitHub + live demo)", "Sama", "Tidak keduanya"], correctAnswer: 1 },
    { question: "Red flag perusahaan?", options: ["Gaji besar", "Minta bayar untuk interview", "Remote work", "Flexible hours"], correctAnswer: 1 }
  ],

  codeExamples: []
};