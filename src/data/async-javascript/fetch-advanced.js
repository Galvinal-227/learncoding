export const chapter = {
  slug: "async-javascript-fetch-advanced",
  title: "Fetch API Advanced",
  description: "Teknik advanced Fetch API: headers, CORS, credentials, upload progress.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["async-javascript-async-await"],
  tags: ["async", "fetch", "api", "cors"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Custom Headers

\`\`\`javascript
const response = await fetch('/api/data', {
    headers: {
        'Authorization': \`Bearer \${token}\`,
        'Content-Type': 'application/json',
        'X-API-Key': apiKey
    }
});
\`\`\`

## Request & Response Objects

\`\`\`javascript
const request = new Request('/api/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Budi' }),
    mode: 'cors',
    credentials: 'include'
});

const response = await fetch(request);
\`\`\`

## CORS Modes

\`\`\`javascript
fetch(url, { mode: 'cors' });            // Default, cross-origin dengan CORS headers
fetch(url, { mode: 'no-cors' });          // Opaque response (limited)
fetch(url, { mode: 'same-origin' });      // Hanya same-origin
\`\`\`

## Credentials (Cookies)

\`\`\`javascript
fetch(url, { credentials: 'include' });   // Kirim cookies
fetch(url, { credentials: 'same-origin' }); // Default
fetch(url, { credentials: 'omit' });      // Jangan kirim cookies
\`\`\`

## Upload Progress

\`\`\`javascript
const formData = new FormData();
formData.append('file', file);

const xhr = new XMLHttpRequest();
xhr.upload.addEventListener('progress', (e) => {
    const percent = (e.loaded / e.total) * 100;
    console.log(\`Upload: \${percent}%\`);
});
xhr.open('POST', '/upload');
xhr.send(formData);
\`\`\`

## Stream Response

\`\`\`javascript
const response = await fetch('/large-file');
const reader = response.body.getReader();

while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    console.log('Chunk:', value.length, 'bytes');
}
\`\`\`
  `,

  quiz: [
    { question: "credentials: 'include' untuk?", options: ["Kecepatan", "Kirim cookies cross-origin", "Cache", "Compression"], correctAnswer: 1 },
    { question: "CORS singkatan?", options: ["Cross-Origin Resource Sharing", "Create-Origin Request Script", "Cross-Origin Request System", "Client-Origin Resource Sharing"], correctAnswer: 0 }
  ],

  codeExamples: []
};