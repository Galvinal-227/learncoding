export const chapter = {
  slug: "accessibility-aria",
  title: "ARIA (Accessible Rich Internet Applications)",
  description: "Pelajari ARIA - atribut khusus untuk meningkatkan aksesibilitas aplikasi web dinamis.",
  icon: "SiAccessibility",
  color: "#0066CC",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["accessibility-introduction"],
  tags: ["aksesibilitas", "aria", "role", "screen-reader"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu ARIA?

ARIA (Accessible Rich Internet Applications) adalah set atribut HTML yang memberikan **informasi tambahan** ke screen reader untuk elemen interaktif.

⚠️ **Aturan #1 ARIA:** No ARIA is better than bad ARIA. Gunakan HTML semantik dulu!

## 3 Kategori ARIA

### 1. Roles (Peran)
Memberi tahu screen reader apa fungsi elemen:
\`\`\`html
<div role="button" tabindex="0">Tombol Kustom</div>
<div role="alert">Form berhasil dikirim!</div>
<div role="navigation">...</div>
<div role="tablist">...</div>
<div role="dialog">...</div>
\`\`\`

### 2. Properties (Properti)
Informasi tambahan yang jarang berubah:
\`\`\`html
<input aria-required="true">
<div aria-label="Tutup dialog">×</div>
<div aria-labelledby="judulForm">
<div aria-describedby="infoTambahan">
<div aria-haspopup="true">
\`\`\`

### 3. States (Keadaan)
Informasi yang bisa berubah:
\`\`\`html
<button aria-expanded="false">Buka Menu</button>
<div aria-hidden="true">...</div>
<input aria-disabled="true">
<div aria-checked="false">
<div aria-current="page">
\`\`\`

## ARIA Paling Sering Dipakai

### aria-label
Memberi label untuk screen reader (tidak terlihat):
\`\`\`html
<button aria-label="Tutup">×</button>
<a href="/" aria-label="Kembali ke beranda">
    <i class="home-icon"></i>
</a>
\`\`\`

### aria-labelledby
Mengacu ke elemen lain sebagai label:
\`\`\`html
<h2 id="judulDialog">Konfirmasi Hapus</h2>
<div role="dialog" aria-labelledby="judulDialog">
    <p>Yakin hapus data ini?</p>
</div>
\`\`\`

### aria-describedby
Memberi deskripsi tambahan:
\`\`\`html
<input aria-describedby="infoPassword">
<small id="infoPassword">Minimal 8 karakter</small>
\`\`\`

### aria-hidden
Menyembunyikan dari screen reader:
\`\`\`html
<!-- Ikon dekoratif -->
<i class="icon" aria-hidden="true"></i>

<!-- Konten yang sedang disembunyikan -->
<div aria-hidden="true" hidden>Konten tersembunyi</div>
\`\`\`

### aria-expanded
Indikator buka/tutup:
\`\`\`html
<button aria-expanded="false" aria-controls="menu">
    Menu
</button>
<ul id="menu" hidden>
    <li>Item 1</li>
</ul>

<script>
btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    menu.hidden = expanded;
});
</script>
\`\`\`

### aria-live
Memberi tahu screen reader tentang perubahan konten:
\`\`\`html
<!-- Notifikasi langsung -->
<div aria-live="assertive" id="notifikasi"></div>

<!-- Update santai -->
<div aria-live="polite" id="status"></div>
\`\`\`
- \`off\`: Default, tidak diumumkan
- \`polite\`: Tunggu sampai screen reader selesai
- \`assertive\`: Interupsi, segera diumumkan

## Live Regions untuk SPA

\`\`\`html
<!-- Untuk aplikasi React/Vue/Angular -->
<div aria-live="polite" aria-atomic="true">
    <!-- Konten dinamis akan diumumkan screen reader -->
</div>
\`\`\`

## Kapan TIDAK Pakai ARIA?

\`\`\`html
<!-- ❌ Jangan! HTML5 sudah aksesibel -->
<button role="button">Tombol</button>

<!-- ✅ HTML5 sudah cukup -->
<button>Tombol</button>

<!-- ❌ Jangan ganti role semantik -->
<h1 role="button">Ini heading, bukan tombol!</h1>
\`\`\`

## Checklist ARIA

\`\`\`
✅ Pakai HTML semantik dulu
✅ Tambah aria-label untuk elemen tanpa teks
✅ Gunakan aria-expanded untuk toggle
✅ Gunakan aria-live untuk konten dinamis
✅ Jangan ganti role elemen native
✅ Test dengan screen reader
\`\`\`
  `,

  quiz: [
    { question: "Apa aturan #1 ARIA?", options: ["Selalu pakai ARIA", "No ARIA is better than bad ARIA", "ARIA menggantikan HTML", "ARIA hanya untuk tombol"], correctAnswer: 1, explanation: "Jika bisa pakai HTML semantik native, jangan pakai ARIA. ARIA yang salah justru memperburuk aksesibilitas." },
    { question: "Apa fungsi aria-live?", options: ["Menyembunyikan elemen", "Memberi tahu screen reader tentang perubahan konten", "Animasi live", "Autoplay video"], correctAnswer: 1, explanation: "aria-live membuat screen reader mengumumkan perubahan konten di elemen tersebut, penting untuk aplikasi dinamis/SPA." },
    { question: "Apa beda aria-live='polite' vs 'assertive'?", options: ["Sama", "polite: tunggu; assertive: interupsi langsung", "assertive lebih lambat", "polite tidak berfungsi"], correctAnswer: 1, explanation: "polite menunggu screen reader selesai bicara. assertive langsung interupsi untuk notifikasi penting." }
  ],

  codeExamples: [
    {
      title: "Demo ARIA: Menu Toggle",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>ARIA Demo</title>
<style>body{font-family:Arial;padding:20px}.menu-btn{background:#0066CC;color:white;border:none;padding:10px 20px;border-radius:4px;cursor:pointer}.menu{list-style:none;padding:10px;background:#f5f5f5;border-radius:4px;margin-top:5px;max-width:200px}.menu a{display:block;padding:8px;text-decoration:none;color:#333}.status{background:#fff3cd;padding:10px;border-radius:4px;margin:10px 0}</style>
</head>
<body>
    <h1>Demo ARIA</h1>
    
    <button class="menu-btn" id="menuBtn" 
            aria-expanded="false" 
            aria-controls="mainMenu">
        ☰ Menu
    </button>
    
    <ul class="menu" id="mainMenu" hidden role="menu" aria-labelledby="menuBtn">
        <li role="none"><a href="#" role="menuitem">Beranda</a></li>
        <li role="none"><a href="#" role="menuitem">Tentang</a></li>
        <li role="none"><a href="#" role="menuitem">Layanan</a></li>
        <li role="none"><a href="#" role="menuitem">Kontak</a></li>
    </ul>
    
    <p>Tambah item:</p>
    <button onclick="addItem()">+ Tambah</button>
    
    <div class="status" aria-live="polite" id="statusMsg">
        Status: Siap
    </div>
    
    <script>
        const btn = document.getElementById('menuBtn');
        const menu = document.getElementById('mainMenu');
        
        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !expanded);
            menu.hidden = expanded;
        });
        
        function addItem() {
            const li = document.createElement('li');
            li.innerHTML = '<a href="#">Item Baru</a>';
            menu.appendChild(li);
            document.getElementById('statusMsg').textContent = 
                '✅ Item berhasil ditambahkan! (' + new Date().toLocaleTimeString() + ')';
        }
    </script>
</body>
</html>`
    }
  ]
};