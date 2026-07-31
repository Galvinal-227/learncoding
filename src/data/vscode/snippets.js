export const chapter = {
  slug: "vscode-snippets",
  title: "Snippets",
  description: "Buat code snippets kustom untuk menulis kode lebih cepat.",
  icon: "SiVisualstudiocode",
  color: "#007ACC",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["vscode-settings"],
  tags: ["vscode", "snippets", "shortcuts", "productivity"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Membuat Snippet Kustom

Buka Command Palette (Ctrl+Shift+P) lalu pilih "Snippets: Configure User Snippets" dan pilih bahasa yang diinginkan (contoh: javascript.json).

## Struktur Snippet

Setiap snippet memiliki 3 properti utama:

- **prefix**: shortcut yang diketik untuk memicu snippet
- **body**: kode yang akan dihasilkan (bisa string atau array of strings)
- **description**: deskripsi singkat tentang snippet

## Tab Stops

Gunakan tab stops untuk menentukan posisi kursor saat menekan Tab:

- Tab stop 1, 2, 3, dst untuk urutan lompatan kursor
- Tab stop 0 untuk posisi akhir kursor
- Placeholder dengan format: namaVariabel sebagai teks default

## Contoh Snippet Berguna

**Console Log:**
- Prefix: clg
- Body: console.log(variable);

**Import React:**
- Prefix: imr
- Body: import React from 'react';

**Try Catch Block:**
- Prefix: tryc
- Body: try { ... } catch (error) { console.error(error); }

**React Component:**
- Prefix: rfc
- Body: export default function Component() { return (JSX); }

## Variabel Snippet

Gunakan variabel built-in berikut:

- TM_FILENAME: Nama file saat ini
- TM_DIRECTORY: Direktori file saat ini
- CLIPBOARD: Isi clipboard
- CURRENT_YEAR: Tahun sekarang (2026)
- CURRENT_MONTH: Bulan sekarang (01-12)
- CURRENT_DATE: Tanggal sekarang (01-31)

## Built-in Snippets Bawaan

VS Code sudah menyediakan snippet bawaan:

- clg untuk console.log()
- for untuk for loop
- fore untuk forEach
- fun untuk function
- imp untuk import module
\`\`\`
  `,

  quiz: [
    { question: "Snippet prefix?", options: ["Description", "Shortcut to trigger snippet", "Filename", "Folder"], correctAnswer: 1 },
    { question: "Tab stop untuk posisi kursor?", options: ["Variable", "Placeholder yang dilompati dengan Tab", "Filename", "Default value"], correctAnswer: 1 }
  ],

  codeExamples: []
};