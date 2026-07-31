export const chapter = {
  slug: "browser-storage-inspection",
  title: "Storage & Application",
  description: "Inspeksi dan kelola storage browser: localStorage, sessionStorage, cookies, IndexedDB.",
  icon: "SiGooglechrome",
  color: "#4285F4",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["browser-devtools"],
  tags: ["browser", "storage", "cookies", "localstorage"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Application Panel

Panel Application menampilkan **semua data yang disimpan** oleh website.

## Storage Types

| Storage | Kapasitas | Expired | Domain |
|---------|-----------|---------|--------|
| **localStorage** | 5-10 MB | Never | Per origin |
| **sessionStorage** | 5-10 MB | Tab close | Per origin |
| **Cookies** | 4 KB | Bisa diatur | Per domain |
| **IndexedDB** | >250 MB | Never | Per origin |
| **Cache Storage** | Bervariasi | Manual | Per origin |

## localStorage

\`\`\`javascript
// Simpan
localStorage.setItem('theme', 'dark');
localStorage.setItem('user', JSON.stringify({ name: 'Budi' }));

// Baca
const theme = localStorage.getItem('theme');
const user = JSON.parse(localStorage.getItem('user'));

// Hapus
localStorage.removeItem('theme');
localStorage.clear(); // Hapus semua
\`\`\`

### Inspeksi di DevTools
Application → Storage → Local Storage → domain

## Cookies

\`\`\`javascript
// Set cookie
document.cookie = "theme=dark; path=/; max-age=86400; SameSite=Lax";

// Baca (semua jadi string)
console.log(document.cookie);
\`\`\`

### Inspeksi
Application → Storage → Cookies → domain

### Cookie Attributes
\`\`\`
Name=Value; Domain=...; Path=/; Expires=...; Max-Age=...; Secure; HttpOnly; SameSite
\`\`\`

## IndexedDB

\`\`\`javascript
// Buka database
const request = indexedDB.open('MyDB', 1);

request.onsuccess = (event) => {
    const db = event.target.result;
    // Gunakan database...
};
\`\`\`

### Inspeksi
Application → Storage → IndexedDB → database

## Service Workers & Cache

Application → Service Workers
Application → Cache Storage

## Clear Storage

\`\`\`
Application → Storage → Clear storage
✅ Unregister service workers
✅ Local and session storage
✅ IndexedDB
✅ Cookies
✅ Cache
\`\`\`
  `,

  quiz: [
    { question: "localStorage vs sessionStorage?", options: ["Sama", "localStorage: permanen; sessionStorage: hilang saat tab ditutup", "sessionStorage lebih besar", "localStorage lebih cepat"], correctAnswer: 1 },
    { question: "Cookie HttpOnly artinya?", options: ["Hanya HTTP", "Tidak bisa diakses JavaScript", "Lebih cepat", "Hanya untuk domain"], correctAnswer: 1 },
    { question: "Storage kapasitas terbesar?", options: ["Cookies", "localStorage", "sessionStorage", "IndexedDB"], correctAnswer: 3, explanation: "IndexedDB bisa menyimpan ratusan MB, jauh lebih besar dari localStorage (5-10MB)." }
  ],

  codeExamples: []
};