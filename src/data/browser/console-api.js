export const chapter = {
  slug: "browser-console-api",
  title: "Console API",
  description: "Kuasai Console API untuk logging, debugging, dan profiling JavaScript.",
  icon: "SiGooglechrome",
  color: "#4285F4",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["browser-devtools"],
  tags: ["browser", "console", "debugging", "logging"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Console API Lengkap

### Basic Logging
\`\`\`javascript
console.log('Pesan biasa');
console.info('Informasi');
console.warn('⚠️ Peringatan');
console.error('❌ Error');
console.debug('Debug (tidak tampil default)');
\`\`\`

### Styling Console
\`\`\`javascript
console.log('%c Styled Text', 'color: blue; font-size: 20px; font-weight: bold');
console.log('%c Error %c Message', 'color: red', 'color: black');
\`\`\`

### Data Visualization
\`\`\`javascript
// Table
console.table([
    { name: 'Budi', age: 25, city: 'Jakarta' },
    { name: 'Siti', age: 23, city: 'Bandung' }
]);

// Table dengan kolom tertentu
console.table(data, ['name', 'age']);
\`\`\`

### Grouping
\`\`\`javascript
console.group('User Details');
console.log('Name: Budi');
console.log('Age: 25');
console.group('Address');
console.log('City: Jakarta');
console.groupEnd();
console.groupEnd();

// Collapsed by default
console.groupCollapsed('Details');
console.log('Hidden content');
console.groupEnd();
\`\`\`

### Timing
\`\`\`javascript
console.time('API Call');
await fetch('/api/data');
console.timeEnd('API Call'); // "API Call: 234.56ms"

console.timeLog('API Call'); // Log intermediate time
\`\`\`

### Counting
\`\`\`javascript
for (let i = 0; i < 5; i++) {
    console.count('Loop');
}
// Loop: 1, Loop: 2, ..., Loop: 5
console.countReset('Loop');
\`\`\`

### Assertions
\`\`\`javascript
console.assert(user.isAdmin, 'User bukan admin!');
// Hanya log jika assertion FALSE
\`\`\`

### Trace
\`\`\`javascript
function a() { b(); }
function b() { c(); }
function c() { console.trace('Trace stack'); }
a();
// Menampilkan: c → b → a
\`\`\`

### Clear
\`\`\`javascript
console.clear(); // Bersihkan console
\`\`\`

## Console Utility Functions

\`\`\`javascript
$('.card')           // document.querySelector
$$('.card')          // document.querySelectorAll
$x('//div[@class]')  // XPath selector
$0, $1, $2...        // 5 elemen terakhir dipilih di Elements
$_                   // Hasil ekspresi terakhir
copy(obj)            // Copy ke clipboard
inspect(el)          // Buka di Elements panel
monitor(fn)          // Monitor function calls
debug(fn)            // Auto-breakpoint saat function dipanggil
\`\`\`
  `,

  quiz: [
    { question: "console.table() untuk?", options: ["Membuat tabel HTML", "Menampilkan data tabular", "Menyimpan data", "Mengurutkan data"], correctAnswer: 1 },
    { question: "console.time() / timeEnd() untuk?", options: ["Timer aplikasi", "Mengukur durasi eksekusi kode", "SetTimeout", "Scheduling"], correctAnswer: 1 },
    { question: "$0 di console adalah?", options: ["Window", "Elemen terakhir dipilih di Elements", "jQuery", "Global variable"], correctAnswer: 1 }
  ],

  codeExamples: []
};