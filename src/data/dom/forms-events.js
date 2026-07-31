export const chapter = {
  slug: "dom-forms-events",
  title: "Event pada Form",
  description: "Pelajari event khusus pada form: submit, input, change, focus, blur.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["dom-events"],
  tags: ["dom", "form", "event", "submit", "input"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Form Events

Form memiliki event khusus yang memudahkan interaksi.

## submit

Trigger saat form disubmit (klik submit atau Enter):

\`\`\`javascript
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Cegah reload halaman!
    const data = new FormData(form);
    console.log(Object.fromEntries(data));
});
\`\`\`

## input

Trigger SETIAP kali nilai input berubah (real-time):

\`\`\`javascript
input.addEventListener('input', (e) => {
    console.log('Nilai:', e.target.value);
    // Validasi real-time, character counter, dll
});
\`\`\`

## change

Trigger saat nilai final berubah (setelah blur untuk text, langsung untuk select/checkbox):

\`\`\`javascript
select.addEventListener('change', (e) => {
    console.log('Dipilih:', e.target.value);
});
\`\`\`

## focus & blur

\`\`\`javascript
input.addEventListener('focus', () => {
    console.log('Input aktif');
});
input.addEventListener('blur', () => {
    console.log('Input ditinggalkan');
});
\`\`\`

## FormData API

\`\`\`javascript
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    // Iterasi
    for (const [key, value] of formData) {
        console.log(key, value);
    }
    
    // Konversi ke object
    const data = Object.fromEntries(formData);
    console.log(data);
});
\`\`\`

## Validasi Built-in

\`\`\`javascript
form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
        console.log('Form tidak valid!');
    }
});
\`\`\`
  `,

  quiz: [
    { question: "Kenapa harus e.preventDefault() di submit?", options: ["Biar cepat", "Cegah reload halaman", "Validasi", "Hanya formalitas"], correctAnswer: 1, explanation: "Default behavior form submit adalah reload halaman. preventDefault() mencegah itu untuk handle dengan JavaScript." },
    { question: "Beda event 'input' dan 'change'?", options: ["Sama", "input: real-time setiap ketik; change: setelah blur/select", "change lebih cepat", "input tidak didukung"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Form dengan Validasi Real-time",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Form Events</title>
<style>body{font-family:Arial;max-width:500px;margin:40px auto}input,textarea{width:100%;padding:10px;margin:5px 0 15px;border:2px solid #ddd;border-radius:4px}input.valid{border-color:green}input.invalid{border-color:red}.error{color:red;font-size:12px}</style>
</head>
<body>
    <h1>Form Pendaftaran</h1>
    <form id="registerForm">
        <label>Nama *</label>
        <input type="text" id="nama" required minlength="3">
        <span class="error" id="namaError"></span>
        
        <label>Email *</label>
        <input type="email" id="email" required>
        <span class="error" id="emailError"></span>
        
        <label>Password *</label>
        <input type="password" id="password" required minlength="6">
        <span class="error" id="passError"></span>
        
        <button type="submit">Daftar</button>
        <p id="charCount" style="font-size:12px;color:#666"></p>
    </form>
    <div id="result"></div>
    
    <script>
        const form = document.getElementById('registerForm');
        const nama = document.getElementById('nama');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        // Input real-time validation
        nama.addEventListener('input', () => {
            const error = document.getElementById('namaError');
            if (nama.value.length < 3) {
                nama.className = 'invalid';
                error.textContent = 'Minimal 3 karakter';
            } else {
                nama.className = 'valid';
                error.textContent = '';
            }
        });
        
        email.addEventListener('input', () => {
            const error = document.getElementById('emailError');
            if (!email.value.includes('@')) {
                email.className = 'invalid';
                error.textContent = 'Format email tidak valid';
            } else {
                email.className = 'valid';
                error.textContent = '';
            }
        });
        
        // Character counter
        password.addEventListener('input', () => {
            document.getElementById('charCount').textContent = 
                \`\${password.value.length} karakter (min 6)\`;
        });
        
        // Submit
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = new FormData(form);
            const obj = Object.fromEntries(data);
            document.getElementById('result').innerHTML = 
                \`<h3>Data Terkirim:</h3><pre>\${JSON.stringify(obj, null, 2)}</pre>\`;
            form.reset();
        });
    </script>
</body>
</html>`
    }
  ]
};