export const chapter = {
  slug: "javascript-fetch-api",
  title: "Fetch API",
  description: "Kuasai Fetch API untuk melakukan HTTP request ke server.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["javascript-promises"],
  tags: ["javascript", "fetch", "api", "http"],
  order: 24,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Fetch API

Fetch API adalah interface modern untuk melakukan HTTP request (menggantikan XMLHttpRequest).

## GET Request

\`\`\`javascript
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
\`\`\`

## POST Request

\`\`\`javascript
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nama: 'Budi', umur: 25 })
})
    .then(res => res.json())
    .then(data => console.log(data));
\`\`\`

## Async/Await Style

\`\`\`javascript
async function getUsers() {
    try {
        const response = await fetch('https://api.example.com/users');
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

## Response Methods

\`\`\`javascript
response.json();     // Parse JSON
response.text();     // Parse text
response.blob();     // Parse binary (gambar, file)
response.formData(); // Parse FormData
\`\`\`

## AbortController (Timeout)

\`\`\`javascript
const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 5000);

const response = await fetch(url, { signal: controller.signal });
clearTimeout(timeout);
\`\`\`
  `,

  quiz: [
    { question: "Apa return value fetch()?", options: ["Data langsung", "Promise<Response>", "JSON", "String"], correctAnswer: 1 },
    { question: "Bagaimana cek response sukses?", options: ["response.status === 200", "response.ok", "response.success", "A dan B"], correctAnswer: 3 }
  ]
};