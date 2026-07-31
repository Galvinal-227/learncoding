export const chapter = {
  slug: "git-submodules",
  title: "Submodules",
  description: "Kelola dependensi Git di dalam Git dengan submodules.",
  icon: "SiGit",
  color: "#F05032",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["git-remote-repos"],
  tags: ["git", "submodule", "dependency", "monorepo"],
  order: 18,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Submodule?

Submodule adalah **repository Git di dalam repository Git**. Berguna untuk:
- 📦 Shared library yang dipakai banyak project
- 🧩 Microservices dalam monorepo
- 📚 Dokumentasi terpisah
- 🎨 Design system / UI kit

## Menambah Submodule

\`\`\`bash
# Format: git submodule add <url> <path>
git submodule add https://github.com/company/shared-utils.git libs/utils
git submodule add https://github.com/company/design-system.git packages/ui

git commit -m "chore: add shared-utils and design-system submodules"
\`\`\`

Setelah add, Git membuat:
- Folder submodule (isi repo lain)
- File **.gitmodules** (daftar submodule)

\`\`\`ini
# .gitmodules
[submodule "libs/utils"]
    path = libs/utils
    url = https://github.com/company/shared-utils.git
[submodule "packages/ui"]
    path = packages/ui
    url = https://github.com/company/design-system.git
\`\`\`

## Clone Repo dengan Submodule

\`\`\`bash
# Cara 1: clone + init + update
git clone https://github.com/company/main-app.git
cd main-app
git submodule init
git submodule update

# Cara 2: clone sekaligus (recommended!)
git clone --recurse-submodules https://github.com/company/main-app.git

# Cara 3: clone dulu, baru submodule
git clone https://github.com/company/main-app.git
cd main-app
git submodule update --init --recursive
\`\`\`

## Update Submodule

\`\`\`bash
# Update ke commit terbaru dari remote
cd libs/utils
git pull origin main
cd ../..
git add libs/utils
git commit -m "chore: update shared-utils to latest"

# Update semua submodule
git submodule update --remote

# Update + merge
git submodule update --remote --merge
\`\`\`

## Bekerja di Dalam Submodule

\`\`\`bash
cd libs/utils

# Submodule dalam detached HEAD? Checkout branch dulu
git switch main

# Buat perubahan
echo "export function newUtil() {}" >> index.js
git add index.js
git commit -m "feat: add newUtil function"
git push origin main

# Kembali ke repo utama
cd ../..
git add libs/utils
git commit -m "feat: update shared-utils with newUtil"
\`\`\`

## Menghapus Submodule

\`\`\`bash
# Hapus dari .gitmodules
git submodule deinit libs/utils

# Hapus folder
git rm libs/utils

# Hapus dari .git/modules (opsional)
rm -rf .git/modules/libs/utils

git commit -m "chore: remove shared-utils submodule"
\`\`\`

## Submodule vs Monorepo Tools

| | Git Submodule | Lerna/Nx/Turborepo |
|---|--------------|-------------------|
| Setup | Manual | Tool-based |
| Versioning | Per repo | Unified |
| Dependency | Explicit commit | Workspace protocol |
| Complexity | Tinggi | Sedang |
| Cocok untuk | Cross-team, external | Single team, internal |

## Submodule Status

\`\`\`bash
# Cek status submodule
git submodule status

# Output:
#  abc1234 libs/utils (v1.2.0)
#  def5678 packages/ui (heads/main)
# +ghi9012 libs/utils (ada perubahan lokal!)

# Tanda di depan hash:
# (spasi) = clean
# + = ada perubahan lokal
# - = belum di-init
# U = merge conflict
\`\`\`

## Tips Submodule

\`\`\`
✅ Commit di submodule dulu, baru commit di repo utama
✅ Gunakan branch, jangan detached HEAD
✅ Pull dengan --recurse-submodules
✅ Dokumentasikan workflow submodule di README
✅ Pertimbangkan alternatif: monorepo tools, npm packages
❌ Jangan edit submodule tanpa checkout branch
❌ Jangan lupa push submodule sebelum push repo utama
\`\`\`

## Alternatif Modern

Jika tidak cocok dengan submodule, pertimbangkan:
- 📦 **NPM packages** (private registry)
- 🧩 **Monorepo tools** (Nx, Turborepo, Lerna)
- 🎯 **Git subtree** (lebih simpel dari submodule)
- 📚 **Docker images** (untuk services)
  `,

  quiz: [
    {
      question: "Apa itu Git submodule?",
      options: [
        "Branch baru",
        "Repository Git di dalam repository Git",
        "Fitur staging",
        "Jenis merge"
      ],
      correctAnswer: 1,
      explanation: "Submodule adalah cara menyematkan repository Git lain ke dalam repository utama. Berguna untuk shared libraries atau dependencies."
    },
    {
      question: "Clone repo + submodule sekaligus?",
      options: [
        "git clone",
        "git clone --recurse-submodules",
        "git clone --with-submodules",
        "git clone --all"
      ],
      correctAnswer: 1,
      explanation: "--recurse-submodules otomatis menginisialisasi dan meng-clone semua submodule saat clone repo utama."
    },
    {
      question: "File konfigurasi submodule?",
      options: [".gitmodules", "package.json", ".gitconfig", "submodule.yml"],
      correctAnswer: 0,
      explanation: ".gitmodules menyimpan daftar submodule (path + URL). File ini di-track Git dan dishare ke tim."
    },
    {
      question: "Kenapa submodule sering dalam detached HEAD?",
      options: [
        "Bug",
        "Submodule checkout commit spesifik, bukan branch",
        "Setting default",
        "Harus di-fix manual"
      ],
      correctAnswer: 1,
      explanation: "Submodule menyimpan pointer ke commit spesifik (bukan branch). Saat update, Git checkout commit tersebut → detached HEAD. Solusi: git switch main."
    }
  ],

  codeExamples: [
    {
      title: "Workflow Submodule Lengkap",
      language: "bash",
      code: `# === Setup Awal ===
# Buat repo utama
git init main-app
cd main-app

# Tambah submodule
git submodule add https://github.com/company/shared-lib.git libs/shared
git commit -m "chore: add shared-lib submodule"

# === Clone oleh Developer Lain ===
git clone --recurse-submodules https://github.com/company/main-app.git
cd main-app

# === Update Submodule ke Versi Terbaru ===
cd libs/shared
git fetch
git checkout v2.0.0
cd ../..
git add libs/shared
git commit -m "chore: update shared-lib to v2.0.0"

# === Edit Kode di Submodule ===
cd libs/shared
git switch main  # Checkout branch dulu!
echo "export const VERSION = '2.0.1'" >> index.js
git add index.js
git commit -m "feat: add VERSION constant"
git push origin main
cd ../..

# Commit perubahan di repo utama
git add libs/shared
git commit -m "feat: update shared-lib (add VERSION constant)"

# === Cek Status Submodule ===
git submodule status
#  1234567 libs/shared (v2.0.1)

# === Hapus Submodule ===
git submodule deinit libs/shared
git rm libs/shared
git commit -m "chore: remove shared-lib submodule"`

    }
  ]
};