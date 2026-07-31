export const chapter = {
  slug: "javascript-date",
  title: "Date & Time",
  description: "Pelajari cara bekerja dengan tanggal dan waktu di JavaScript.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["javascript-data-types"],
  tags: ["javascript", "date", "waktu", "tanggal"],
  order: 18,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Date Object

\`\`\`javascript
const now = new Date();                    // Sekarang
const specific = new Date('2026-01-15');    // Tanggal spesifik
const detailed = new Date(2026, 0, 15, 9, 30, 0); // Tahun, Bulan(0-11), Hari, Jam, Menit, Detik
const timestamp = new Date(1700000000000);   // Dari timestamp
\`\`\`

## Get Methods

\`\`\`javascript
const d = new Date();
d.getFullYear();     // 2026
d.getMonth();        // 0-11 (Januari = 0!)
d.getDate();         // 1-31
d.getDay();          // 0-6 (Minggu = 0)
d.getHours();        // 0-23
d.getMinutes();      // 0-59
d.getTime();         // Timestamp (ms sejak 1970)
\`\`\`

## Set Methods

\`\`\`javascript
d.setFullYear(2027);
d.setMonth(6);       // Juli
d.setDate(20);
d.setHours(14);
\`\`\`

## Formatting

\`\`\`javascript
d.toLocaleDateString('id-ID');    // "15 Januari 2026"
d.toLocaleTimeString('id-ID');    // "09:30:00"
d.toLocaleString('id-ID');        // "15/01/2026 09.30.00"
d.toISOString();                  // "2026-01-15T02:30:00.000Z"
\`\`\`

## Perhitungan Tanggal

\`\`\`javascript
const besok = new Date();
besok.setDate(besok.getDate() + 1);

const selisih = date2 - date1; // Milidetik
const hari = selisih / (1000 * 60 * 60 * 24);
\`\`\`
  `,

  quiz: [
    { question: "Bulan Januari di JavaScript bernilai?", options: ["1", "0", "Jan", "01"], correctAnswer: 1, explanation: "getMonth() mengembalikan 0-11, di mana Januari = 0, Desember = 11." },
    { question: "Method untuk mendapatkan timestamp (ms sejak 1970)?", options: [".getTimestamp()", ".getTime()", ".now()", ".getMilliseconds()"], correctAnswer: 1 }
  ]
};