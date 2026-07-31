export const chapter = {
  slug: "design-patterns-introduction",
  title: "Pengenalan Design Patterns",
  description: "Pahami apa itu design patterns, sejarahnya, dan kenapa penting dalam software engineering.",
  icon: "SiPattern",
  color: "#FF6B6B",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["design-patterns", "oop", "architecture", "gang-of-four"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Design Patterns?

Design patterns adalah **solusi umum yang sudah terbukti** untuk masalah yang sering muncul dalam software design. Bukan kode jadi, tapi **template/blueprint** yang bisa disesuaikan.

## Sejarah

- **1977** - Christopher Alexander (arsitek) memperkenalkan konsep "pattern language" untuk arsitektur bangunan
- **1994** - **Gang of Four (GoF)**: Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides menerbitkan *"Design Patterns: Elements of Reusable Object-Oriented Software"*
- Buku ini mendefinisikan **23 design patterns klasik** yang masih dipakai sampai sekarang

## Kenapa Design Patterns?

- 🗣️ **Shared vocabulary** - "Kita pakai Observer pattern" → semua langsung paham
- ✅ **Proven solutions** - Sudah diuji bertahun-tahun
- 🔧 **Reusable** - Tidak perlu reinvent the wheel
- 📚 **Maintainable** - Kode lebih terstruktur
- 🎓 **Learning** - Memahami pola = memahami OOP lebih dalam

## 3 Kategori GoF Patterns

| Kategori | Jumlah | Contoh | Deskripsi |
|----------|--------|--------|-----------|
| **Creational** | 5 | Singleton, Factory, Builder | Cara membuat object |
| **Structural** | 7 | Adapter, Decorator, Facade | Cara menyusun class/object |
| **Behavioral** | 11 | Observer, Strategy, Command | Cara komunikasi antar object |

## Anti-Patterns (Yang Harus Dihindari)

| Anti-Pattern | Deskripsi |
|--------------|-----------|
| **God Object** | Satu class melakukan segalanya |
| **Spaghetti Code** | Tidak ada struktur, kusut |
| **Golden Hammer** | Pakai solusi yang sama untuk semua masalah |
| **Premature Optimization** | Optimasi sebelum tahu bottleneck |
| **Copy-Paste Programming** | Duplikasi kode, bukan reusable |

## Design Patterns dalam JavaScript

JavaScript adalah bahasa **multi-paradigm** (OOP, functional, event-driven), jadi beberapa pattern GoF:
- ✅ Masih relevan (Observer, Singleton, Factory, Strategy)
- ⚠️ Adaptasi berbeda (Module pattern instead of class, closure untuk encapsulation)
- ❌ Kurang relevan (Abstract Factory, Builder — lebih ke OOP klasik)

## Kapan Menggunakan?

\`\`\`
✅ Saat menghadapi masalah yang sudah umum
✅ Saat butuh struktur yang scalable
✅ Saat tim sudah familiar dengan patterns
❌ Jangan dipaksakan (over-engineering)
❌ Jangan untuk masalah sederhana
❌ Jangan sebelum pahami masalahnya
\`\`\`
  `,

  quiz: [
    { question: "Gang of Four (GoF) menerbitkan buku tahun?", options: ["1984", "1994", "2004", "2014"], correctAnswer: 1 },
    { question: "3 kategori GoF patterns?", options: ["Create, Read, Delete", "Creational, Structural, Behavioral", "Start, Process, End", "Input, Output, Storage"], correctAnswer: 1 },
    { question: "Apa itu God Object (anti-pattern)?", options: ["Object suci", "Satu class melakukan terlalu banyak hal", "Object untuk testing", "Object immutable"], correctAnswer: 1 }
  ],

  codeExamples: []
};