export const chapter = {
  slug: "git-bisect",
  title: "Git Bisect",
  description: "Gunakan git bisect untuk menemukan commit penyebab bug dengan binary search.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["git-advanced-log"],
  tags: ["git", "bisect", "debugging", "binary-search"],
  order: 16,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Git Bisect?

\`git bisect\` adalah alat untuk **mencari commit penyebab bug** menggunakan **binary search**. Dari ratusan commit, kamu bisa menemukan penyebab hanya dalam ~log₂(n) langkah.

## Kapan Menggunakan?

- 🐛 Bug muncul, tapi tidak tahu sejak kapan
- 📜 History commit banyak (puluhan/ratusan)
- ✅ Tahu commit terakhir yang masih OK
- ❌ Tahu commit sekarang yang rusak

## Cara Kerja

\`\`\`
Commit:  #1──#2──#3──#4──#5──#6──#7──#8──#9──#10
Status:  ✅  ✅  ✅  ✅  ?   ?   ?   ?   ?   ❌

Bisect:
Step 1: Cek #5 (tengah) → ✅ OK
Step 2: Cek #7 (tengah #5-#10) → ❌ BAD
Step 3: Cek #6 (tengah #5-#7) → ❌ BAD
Hasil: Bug pertama muncul di commit #6!
\`\`\`

## Manual Bisect

\`\`\`bash
# 1. Mulai bisect
git bisect start

# 2. Tandai versi sekarang sebagai BAD (ada bug)
git bisect bad HEAD

# 3. Tandai versi yang diketahui OK
git bisect good v1.0.0
# Atau pakai commit hash
git bisect good abc1234

# 4. Git checkout commit di tengah
# Test aplikasi (manual: buka browser, jalankan test, dll)

# 5a. Jika versi ini OK:
git bisect good

# 5b. Jika versi ini BAD (bug ada):
git bisect bad

# 6. Ulangi langkah 5 sampai Git menemukan commit penyebab
# Output: "abc1234 is the first bad commit"

# 7. Selesai, kembali ke HEAD
git bisect reset
\`\`\`

## Automated Bisect (dengan Script)

\`\`\`bash
# 1. Mulai bisect
git bisect start

# 2. Tandai good & bad
git bisect bad HEAD
git bisect good v1.0.0

# 3. Jalankan otomatis dengan script
git bisect run npm test
# Git akan otomatis menjalankan npm test di setiap langkah
# Jika exit code 0 → good
# Jika exit code 1-127 → bad

# 4. Selesai
git bisect reset
\`\`\`

### Contoh Script Test
\`\`\`bash
#!/bin/bash
# test-bug.sh
npm run build && npm run test:e2e -- --grep "checkout bug"
\`\`\`

\`\`\`bash
git bisect start
git bisect bad HEAD
git bisect good v1.0.0
git bisect run ./test-bug.sh
git bisect reset
\`\`\`

## Bisect dengan Skip

Kadang ada commit yang tidak bisa di-test (build gagal, dll):

\`\`\`bash
# Skip commit yang tidak bisa di-test
git bisect skip

# Skip range
git bisect skip HEAD~10..HEAD~5
\`\`\`

## Bisect Visualization

\`\`\`bash
# Lihat progress bisect secara visual
git bisect log
git bisect visualize
\`\`\`

## Contoh Nyata: Bug di Production

\`\`\`bash
# Situasi: User lapor form checkout error sejak 3 hari lalu
# 50+ commit dalam 3 hari, tidak tahu mana penyebab

# 1. Mulai bisect
git bisect start

# 2. Sekarang rusak
git bisect bad HEAD

# 3. 3 hari lalu masih OK (cek dari log deployment)
git bisect good HEAD~50

# 4. Otomatis test
git bisect run npm run test:checkout

# Output:
# Bisecting: 25 revisions left to test after this
# Bisecting: 12 revisions left
# Bisecting: 6 revisions left
# Bisecting: 3 revisions left
# Bisecting: 1 revision left
# abc123def456 is the first bad commit
# commit abc123def456
# Author: Budi <budi@email.com>
# Date:   Mon Jan 13 14:30:00 2026
#     refactor: simplify checkout validation

# 5. Ketemu! Commit "refactor: simplify checkout validation"
#    penyebab bug. Lihat detail:
git show abc123def456

# 6. Selesai
git bisect reset
\`\`\`

## Tips

\`\`\`
✅ Pastikan test script reliable (tidak flaky)
✅ Gunakan automated bisect jika test tersedia
✅ Commit kecil memudahkan bisect (gampang cari penyebab)
✅ Jangan jalankan bisect sambil kerja (repo di detached HEAD)
✅ Selalu git bisect reset setelah selesai
\`\`\`

## Bisect untuk Cari Commit yang Memperbaiki Bug (Kebalikan)

\`\`\`bash
# Cari commit yang MEMPERBAIKI bug (bukan menyebabkan)
git bisect start
git bisect bad HEAD~10  # Versi lama: bug ADA
git bisect good HEAD     # Versi sekarang: bug SUDAH FIX
# Lanjut seperti biasa, cari commit pertama yang GOOD
\`\`\`
  `,

  quiz: [
    {
      question: "Git bisect menggunakan algoritma?",
      options: ["Linear search", "Binary search", "Quick sort", "Bubble sort"],
      correctAnswer: 1,
      explanation: "Git bisect menggunakan binary search. Dari n commit, hanya butuh ~log₂(n) langkah. Contoh: 1000 commit hanya ~10 langkah."
    },
    {
      question: "Perintah menjalankan bisect otomatis dengan script?",
      options: ["git bisect auto", "git bisect run <script>", "git bisect exec", "git bisect test"],
      correctAnswer: 1,
      explanation: "git bisect run <script> menjalankan script otomatis. Script return 0 = good, 1-127 = bad."
    },
    {
      question: "Kenapa harus git bisect reset setelah selesai?",
      options: [
        "Tidak harus",
        "Kembali ke HEAD (selama bisect, repo di detached HEAD state)",
        "Hapus commit",
        "Reset perubahan"
      ],
      correctAnswer: 1,
      explanation: "Selama bisect, HEAD berada di commit acak (detached HEAD). git bisect reset mengembalikan ke branch semula."
    },
    {
      question: "git bisect skip untuk?",
      options: [
        "Lompat ke akhir",
        "Abaikan commit yang tidak bisa di-test (build gagal, dll)",
        "Hapus commit",
        "Percepat proses"
      ],
      correctAnswer: 1,
      explanation: "skip digunakan untuk melewati commit yang tidak bisa di-test (misal build error) tanpa menghentikan bisect."
    },
    {
      question: "Berapa langkah untuk 1024 commit dengan bisect?",
      options: ["1024", "512", "~10", "1"],
      correctAnswer: 2,
      explanation: "Binary search: log₂(1024) = 10 langkah. Sangat efisien dibanding cek satu per satu (1024 langkah)."
    }
  ],

  codeExamples: [
    {
      title: "Simulasi Git Bisect",
      language: "bash",
      code: `# Simulasi: Bug di fungsi checkout
# Ada 100 commit, kita tahu commit #1 OK, commit #100 BAD

# Buat script test
cat > test-checkout.sh << 'EOF'
#!/bin/bash
# Test apakah checkout berfungsi
node -e "
const { checkout } = require('./src/checkout');
const result = checkout({ items: [{ price: 100 }] });
if (result.total === 100) process.exit(0);  // OK
else process.exit(1);  // BAD
"
EOF
chmod +x test-checkout.sh

# Jalankan bisect otomatis
git bisect start
git bisect bad HEAD        # Commit sekarang BAD
git bisect good HEAD~100   # 100 commit lalu OK
git bisect run ./test-checkout.sh

# Output:
# Bisecting: 50 revisions left
# Bisecting: 25 revisions left
# ...
# d4e5f6a is the first bad commit
# commit d4e5f6a789...
# Author: Budi
# Date:   2026-01-14
#     refactor: change checkout calculation

# Lihat detail bug
git show d4e5f6a

# Kembali normal
git bisect reset`
    }
  ]
};