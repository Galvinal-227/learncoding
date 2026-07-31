export const chapter = {
  slug: "git-commits",
  title: "Commits",
  description: "Kuasai seni membuat commit yang bermakna: pesan, ukuran, frekuensi, dan best practices.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["git-staging"],
  tags: ["git", "commit", "message", "history"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Commit?

Commit adalah **snapshot** (foto) dari perubahan file di repository. Setiap commit punya:
- Hash unik (SHA-1) - identifier
- Author & timestamp
- Pesan commit
- Pointer ke parent commit(s)
- Snapshot file

## Anatomi Commit

\`\`\`bash
commit 8f3a2b1c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a
Author: Budi Santoso <budi@email.com>
Date:   Mon Jan 15 09:30:00 2026 +0700

    feat: add user login with Google OAuth
    
    Implement Google OAuth 2.0 authentication flow.
    - Add Google login button
    - Handle callback and token exchange
    - Store user session in httpOnly cookie
    
    Closes #123
\`\`\`

## Commit Message Convention

### Format Standard (Conventional Commits)
\`\`\`
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
\`\`\`

### Types yang Umum

| Type | Kapan Digunakan |
|------|----------------|
| **feat** | Fitur baru |
| **fix** | Bug fix |
| **docs** | Dokumentasi |
| **style** | Formatting, whitespace (bukan kode) |
| **refactor** | Restruktur kode (bukan fitur/bug) |
| **perf** | Performance improvement |
| **test** | Tambah/perbaiki test |
| **chore** | Build, dependencies, config |
| **ci** | CI/CD changes |
| **revert** | Revert commit sebelumnya |

### Contoh Baik vs Buruk

\`\`\`bash
# ❌ BURUK
git commit -m "fix bug"
git commit -m "update"
git commit -m "wip"
git commit -m "."

# ✅ BAIK
git commit -m "feat: add Google OAuth login"
git commit -m "fix: resolve validation error on empty email field"
git commit -m "docs: update API documentation for v2 endpoints"
git commit -m "refactor: extract payment calculation to separate service"
git commit -m "perf: reduce bundle size by removing unused dependencies"
\`\`\`

## Aturan Commit Message

### 1. Subject Line
\`\`\`
✅ Max 50 karakter
✅ Huruf kecil (kecuali proper noun)
✅ Tanpa titik di akhir
✅ Imperative mood ("add", bukan "added" atau "adds")
✅ Bahasa Inggris (standar industri)
\`\`\`

### 2. Body (Opsional)
\`\`\`
✅ Dipisahkan 1 baris kosong dari subject
✅ Max 72 karakter per baris
✅ Jelaskan WHAT dan WHY (bukan HOW)
✅ HOW sudah jelas dari kode
\`\`\`

### 3. Footer
\`\`\`
✅ Referensi issue: "Closes #123", "Refs #456"
✅ Breaking changes: "BREAKING CHANGE: ..."
\`\`\`

## Ukuran Commit yang Ideal

### Atomic Commits
Satu commit = **satu perubahan logis**. Bisa di-revert tanpa side effect.

\`\`\`bash
# ❌ BURUK: Satu commit besar campur aduk
git commit -m "feat: add checkout, fix login bug, update readme, refactor utils"

# ✅ BAIK: Pisahkan per perubahan logis
git commit -m "feat: add checkout page with payment integration"
git commit -m "fix: resolve login redirect loop"
git commit -m "docs: update README with setup instructions"
git commit -m "refactor: extract date formatting to utils"
\`\`\`

### Indikator Commit Terlalu Besar:
- ❌ Tidak bisa dijelaskan dalam 50 karakter
- ❌ Menyentuh >10 file unrelated
- ❌ Ada kata "dan", "juga", "serta" di pesan

## Frekuensi Commit

\`\`\`
✅ Commit sering! (setiap 15-60 menit kerja)
✅ Commit setiap ada unit kerja selesai
✅ Commit sebelum pulang / ganti task
✅ Commit sebelum eksperimen (biar gampang balik)
❌ Jangan commit sekali sehari (kehilangan history detail)
❌ Jangan commit code yang belum selesai ke main
\`\`\`

## Amend Commit (Perbaiki Commit Terakhir)

\`\`\`bash
# Lupa nambah file
git add forgotten-file.js
git commit --amend

# Edit pesan commit terakhir
git commit --amend -m "feat: new better message"

# Amend tanpa ubah pesan (tambah file aja)
git commit --amend --no-edit

# ⚠️ Hanya untuk commit yang BELUM di-push!
# Jangan amend commit yang sudah di remote!
\`\`\`

## Melihat History Commit

\`\`\`bash
# Lihat daftar commit
git log --oneline

# Lihat detail commit tertentu
git show 8f3a2b1

# Lihat file yang berubah di commit
git show --stat 8f3a2b1

# Lihat commit dalam range
git log HEAD~5..HEAD

# Lihat commit by author
git log --author="Budi"

# Cari commit dengan kata kunci
git log --grep="checkout"
\`\`\`

## Revert Commit (Membatalkan Commit)

\`\`\`bash
# Buat commit baru yang membatalkan commit tertentu
git revert 8f3a2b1

# Revert tanpa auto-commit
git revert --no-commit 8f3a2b1

# Revert merge commit (perlu specify parent)
git revert -m 1 <merge-commit-hash>
\`\`\`

## Cherry-pick (Ambil Commit Spesifik)

\`\`\`bash
# Ambil commit dari branch lain ke branch saat ini
git cherry-pick 8f3a2b1

# Cherry-pick range
git cherry-pick 8f3a2b1..9g4b3c2

# Cherry-pick tanpa auto-commit
git cherry-pick --no-commit 8f3a2b1
\`\`\`

## Best Practices

\`\`\`
✅ Commit atomik (satu perubahan logis)
✅ Pesan jelas dan deskriptif
✅ Ikuti conventional commits
✅ Commit sering (minimal setiap jam)
✅ Test sebelum commit (minimal build berhasil)
✅ Review perubahan sebelum commit (git diff --staged)
✅ Jangan commit file yang tidak sengaja (.env, node_modules)
✅ Jangan commit kode yang di-comment (pakai Git history)
✅ Amend hanya untuk commit lokal (belum di-push)
\`\`\`

## Visualisasi Commit yang Baik

\`\`\`
# History bersih dengan pesan jelas:
* 8f3a2b1 feat: add Google OAuth login
* 7e4d5c2 feat: add login page UI
* 6c3b4a1 refactor: extract form validation hook
* 5a2f3e0 test: add unit tests for auth service
* 4b1c2d9 fix: resolve CORS issue with API calls

# History buruk dengan pesan tidak jelas:
* 9g4b3c2 fix bug
* 8f3a2b1 update
* 7e4d5c2 wip
* 6c3b4a1 .
* 5a2f3e0 asdfghjkl
\`\`\`
  `,

  quiz: [
    {
      question: "Conventional commit untuk bug fix?",
      options: ["feat:", "fix:", "bug:", "patch:"],
      correctAnswer: 1,
      explanation: "fix: digunakan untuk perbaikan bug. Format: fix: <deskripsi singkat>."
    },
    {
      question: "Kenapa commit harus atomik?",
      options: [
        "Lebih cepat",
        "Satu perubahan logis = mudah di-revert, di-review, dipahami",
        "Wajib aturan Git",
        "Biar keren"
      ],
      correctAnswer: 1,
      explanation: "Atomic commit mudah di-revert tanpa side effect, mudah di-review karena perubahannya kecil, dan git blame langsung jelas."
    },
    {
      question: "Apa itu commit --amend?",
      options: [
        "Hapus commit",
        "Perbaiki commit terakhir (sebelum push)",
        "Merge commit",
        "Buat commit baru"
      ],
      correctAnswer: 1,
      explanation: "git commit --amend memperbaiki commit terakhir (tambah file, edit pesan). HANYA untuk commit lokal yang belum di-push!"
    },
    {
      question: "git revert vs git reset?",
      options: [
        "Sama",
        "revert: buat commit baru pembatal; reset: hapus commit dari history",
        "reset lebih aman",
        "revert tidak bisa di-undo"
      ],
      correctAnswer: 1,
      explanation: "git revert membuat commit baru yang membatalkan perubahan (aman untuk shared branch). git reset menghapus commit dari history (bahaya untuk shared branch)."
    },
    {
      question: "Subject commit maksimal berapa karakter?",
      options: ["Tidak terbatas", "50 karakter", "100 karakter", "20 karakter"],
      correctAnswer: 1,
      explanation: "50 karakter adalah best practice agar pesan commit tidak terpotong di berbagai tools (git log --oneline, GitHub, terminal)."
    }
  ],

  codeExamples: [
    {
      title: "Workflow Commit yang Baik",
      language: "bash",
      code: `# === Workflow Commit Sehari-hari ===

# 1. Pagi: tarik update terbaru
git pull origin main

# 2. Buat branch fitur
git switch -c feature/checkout-page

# 3. Kerja, commit kecil & sering
# Commit 1: struktur dasar
git add src/pages/checkout/
git commit -m "feat: add checkout page structure"

# Commit 2: form
git add src/components/CheckoutForm.jsx
git commit -m "feat: add checkout form with validation"

# Commit 3: integrasi API
git add src/services/payment.js
git commit -m "feat: integrate payment gateway API

Add Midtrans integration for credit card and bank transfer.
Handle success, pending, and error states.

Closes #456"

# 4. Sebelum push, review history
git log --oneline origin/main..HEAD
# 8f3a2b1 feat: integrate payment gateway API
# 7e4d5c2 feat: add checkout form with validation
# 6c3b4a1 feat: add checkout page structure

# 5. History sudah rapi? Push!
git push -u origin feature/checkout-page

# === Perbaiki Commit Terakhir ===

# Oops, lupa nambah file test
git add src/__tests__/checkout.test.js
git commit --amend --no-edit
# ⚠️ Hanya karena belum di-push!

# === Revert Commit di Main ===

# Bug di production! Revert commit penyebab
git switch main
git pull origin main
git revert 8f3a2b1 -m "revert: payment gateway integration

Temporary rollback due to production issue #789"
git push origin main`
    }
  ]
};