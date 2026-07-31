export const chapter = {
  slug: "clean-code-comments",
  title: "Comments",
  description: "Aturan menulis komentar yang baik dan kapan tidak perlu komentar.",
  icon: "SiCleanode",
  color: "#3178C6",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["clean-code-introduction"],
  tags: ["clean-code", "comments", "dokumentasi"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kode Harus Menjelaskan Dirinya Sendiri

**Goal:** Tulis kode yang tidak perlu komentar untuk dipahami.

## ❌ Komentar Buruk

### 1. Komentar yang Menjelaskan "Apa"
\`\`\`javascript
// ❌ Tidak perlu - kode sudah jelas
// Tambah 1 ke counter
counter++;

// ❌ Redundant - fungsi sudah menjelaskan
// Fungsi untuk menghitung total
function calculateTotal(items) { }
\`\`\`

### 2. Komentar Usang
\`\`\`javascript
// ❌ Komentar tidak diupdate saat kode berubah
// Return array of strings
function getUsers() {
    return { users: [...] }; // Sekarang return object!
}
\`\`\`

### 3. Komentar sebagai Pengganti Nama Baik
\`\`\`javascript
// ❌ Buruk - jelaskan di nama fungsi
// Cek apakah user bisa akses halaman admin
function cek(user, page) { }

// ✅ Baik - nama sudah menjelaskan
function canUserAccessAdminPage(user) { }
\`\`\`

## ✅ Komentar Baik

### 1. WHY, bukan WHAT
\`\`\`javascript
// ✅ Jelaskan kenapa, bukan apa
// Gunakan timeout 5 detik karena API payment gateway
// sering slow response di jam sibuk (09:00-11:00)
const PAYMENT_TIMEOUT = 5000;
\`\`\`

### 2. Warning / TODO
\`\`\`javascript
// TODO: Refactor ke strategy pattern setelah MVP release
// FIXME: Workaround bug di library v2.1, hapus setelah update ke v2.2
// HACK: Temporary fix untuk IE11, akan dihapus Q2 2026
\`\`\`

### 3. Dokumentasi API (JSDoc)
\`\`\`javascript
/**
 * Menghitung total harga setelah diskon.
 * @param {number} price - Harga asli
 * @param {number} discountPercent - Persentase diskon (0-100)
 * @returns {number} Harga setelah diskon
 * @example
 * calculateDiscount(100000, 10) // 90000
 */
function calculateDiscount(price, discountPercent) {
    return price * (1 - discountPercent / 100);
}
\`\`\`

## Aturan Emas Komentar

\`\`\`
✅ Tulis WHY, bukan WHAT
✅ Update komentar saat update kode
✅ Hapus kode yang di-comment (pakai Git history)
✅ JSDoc untuk public API
❌ Jangan komentar kode yang sudah jelas
❌ Jangan simpan kode lama di komentar
❌ Jangan komentar sebagai pengganti nama baik
\`\`\`
  `,

  quiz: [
    { question: "Komentar yang baik menjelaskan?", options: ["Apa yang dilakukan", "Kenapa dilakukan (WHY)", "Bagaimana caranya", "Kapan dibuat"], correctAnswer: 1 },
    { question: "JSDoc untuk?", options: ["Hiasan", "Dokumentasi API/public function", "Debugging", "Logging"], correctAnswer: 1 }
  ],

  codeExamples: []
};