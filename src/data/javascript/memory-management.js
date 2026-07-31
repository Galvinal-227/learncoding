export const chapter = {
  slug: "javascript-memory-management",
  title: "Memory Management",
  description: "Pahami cara JavaScript mengelola memori dan hindari memory leak.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["javascript-closures"],
  tags: ["javascript", "memory", "performance", "leak"],
  order: 28,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Siklus Memori

1. **Allocate** - Memori dialokasikan
2. **Use** - Memori digunakan (baca/tulis)
3. **Release** - Memori dibebaskan (garbage collection)

## Garbage Collection

JavaScript otomatis membersihkan memori yang tidak lagi direferensi (Mark and Sweep).

## Penyebab Memory Leak

### 1. Variabel Global
\`\`\`javascript
// ❌ Memory leak
function leak() {
    globalVar = 'Aku bocor!';
}

// ✅
function safe() {
    let localVar = 'Aku aman';
}
\`\`\`

### 2. Closure yang Menahan Referensi
\`\`\`javascript
function createHandler() {
    const largeData = new Array(1000000);
    return () => largeData.length; // Masih pegang referensi!
}
\`\`\`

### 3. Timer/Interval Lupa Diberhentikan
\`\`\`javascript
// ❌
setInterval(() => { }, 1000); // Jalan terus

// ✅
const id = setInterval(() => { }, 1000);
clearInterval(id); // Hentikan
\`\`\`

### 4. Event Listener Tidak Dihapus
\`\`\`javascript
// ✅ Hapus saat tidak diperlukan
element.removeEventListener('click', handler);
\`\`\`

### 5. Detached DOM Elements
\`\`\`javascript
let element = document.getElementById('btn');
element.remove();
// element masih di memori jika masih ada referensi!
element = null; // ✅ Bersihkan referensi
\`\`\`
  `,

  quiz: [
    { question: "Apa penyebab umum memory leak di JS?", options: ["Variabel lokal", "Global variable yang tidak dibersihkan", "Arrow function", "const"], correctAnswer: 1 },
    { question: "Bagaimana cara mencegah interval memory leak?", options: ["Gunakan setTimeout", "clearInterval()", "Biarkan saja", "Gunakan var"], correctAnswer: 1 }
  ]
};