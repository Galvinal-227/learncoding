export const chapter = {
  slug: "accessibility-keyboard-navigation",
  title: "Navigasi Keyboard",
  description: "Pastikan website bisa dioperasikan sepenuhnya dengan keyboard.",
  icon: "SiAccessibility",
  color: "#0066CC",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["accessibility-semantic-html"],
  tags: ["aksesibilitas", "keyboard", "navigasi", "fokus"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Keyboard Navigation Penting?

Banyak pengguna tidak bisa/tidak menggunakan mouse:
- Pengguna screen reader (full keyboard)
- Pengguna dengan tremor/cerebral palsy
- Pengguna switch devices
- Power user (lebih cepat)

## Tombol Keyboard Penting

| Tombol | Fungsi |
|--------|--------|
| **Tab** | Fokus ke elemen berikutnya |
| **Shift + Tab** | Fokus ke elemen sebelumnya |
| **Enter** | Aktivasi link/button |
| **Space** | Aktivasi button/toggle checkbox |
| **Arrow Keys** | Navigasi dalam komponen (tab, menu, select) |
| **Escape** | Tutup dialog/modal/dropdown |

## Elemen yang Otomatis Fokus

Elemen interaktif native sudah bisa di-Tab:
\`\`\`html
<a href="...">     ✅
<button>           ✅
<input>            ✅
<select>           ✅
<textarea>         ✅
\`\`\`

## Elemen yang Perlu tabindex

\`\`\`html
<!-- tabindex="0": Bisa di-tab (urutan natural) -->
<div tabindex="0" role="button">Klik Aku</div>

<!-- tabindex="-1": Tidak bisa di-tab, tapi bisa fokus via JS -->
<div tabindex="-1" id="modal">...</div>

<!-- ❌ tabindex positif (>0): Mengubah urutan - HINDARI! -->
<div tabindex="1">Ini buruk!</div>
\`\`\`

## Focus Indicator

\`\`\`css
/* ❌ Jangan hilangkan outline tanpa ganti! */
:focus { outline: none; }

/* ✅ Ganti dengan yang lebih baik */
:focus {
    outline: 2px solid #0066CC;
    outline-offset: 2px;
}

/* ✅ Style khusus keyboard-only */
:focus-visible {
    outline: 2px solid #0066CC;
    outline-offset: 2px;
}
\`\`\`

## Focus Trap (Modal)

Saat modal terbuka, Tab harus berputar di dalamnya:
\`\`\`javascript
function trapFocus(modal) {
    const focusable = modal.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}
\`\`\`

## Checklist Keyboard

\`\`\`
✅ Semua interaktif bisa di-tab
✅ Urutan tab logis (sesuai visual)
✅ Focus indicator jelas
✅ Skip link berfungsi
✅ Modal trap focus
✅ Escape tutup modal/dialog
✅ Tidak ada keyboard trap
\`\`\`
  `,

  quiz: [
    { question: "Apa nilai tabindex untuk elemen yang bisa di-tab (urutan natural)?", options: ["1", "0", "-1", "auto"], correctAnswer: 1, explanation: "tabindex='0' membuat elemen bisa di-tab dalam urutan natural (sesuai posisi di DOM)." },
    { question: "Kenapa tabindex positif (>0) harus dihindari?", options: ["Tidak berfungsi", "Mengacaukan urutan tab natural", "Hanya untuk form", "Deprecated"], correctAnswer: 1, explanation: "tabindex positif memaksa urutan fokus tidak natural, membingungkan pengguna keyboard dan screen reader." },
    { question: "Apa yang terjadi saat Escape ditekan di modal?", options: ["Tidak ada", "Harusnya menutup modal", "Refresh halaman", "Fokus ke address bar"], correctAnswer: 1, explanation: "Escape adalah shortcut standar untuk menutup dialog/modal. Ini ekspektasi pengguna keyboard." }
  ],

  codeExamples: [
    {
      title: "Modal dengan Focus Trap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head><title>Focus Trap Demo</title>
<style>
    body { font-family: Arial; padding: 20px; }
    button { padding: 10px 20px; cursor: pointer; }
    .modal-overlay {
        display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.5); z-index: 1000;
        align-items: center; justify-content: center;
    }
    .modal-overlay.open { display: flex; }
    .modal {
        background: white; padding: 30px; border-radius: 8px;
        max-width: 400px; width: 90%;
    }
    .modal h3 { margin-top: 0; }
    .modal input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 4px; }
    :focus-visible { outline: 2px solid #0066CC; outline-offset: 2px; }
</style>
</head>
<body>
    <h1>Focus Trap Demo</h1>
    <p>Tab untuk navigasi. Buka modal, Tab harus berputar di dalamnya.</p>
    <button onclick="openModal()">Buka Modal</button>
    
    <div class="modal-overlay" id="overlay">
        <div class="modal" id="modal" role="dialog" aria-labelledby="modalTitle">
            <h3 id="modalTitle">Konfirmasi</h3>
            <p>Fokus terperangkap di modal ini.</p>
            <label for="nama">Nama:</label>
            <input type="text" id="nama" placeholder="Ketik di sini">
            <div style="margin-top:15px;display:flex;gap:10px;justify-content:flex-end;">
                <button onclick="closeModal()">Batal</button>
                <button onclick="closeModal()">OK</button>
            </div>
        </div>
    </div>
    
    <script>
        const overlay = document.getElementById('overlay');
        const modal = document.getElementById('modal');
        
        function openModal() {
            overlay.classList.add('open');
            modal.querySelector('input').focus();
            document.addEventListener('keydown', handleKeyDown);
        }
        
        function closeModal() {
            overlay.classList.remove('open');
            document.removeEventListener('keydown', handleKeyDown);
            document.querySelector('button').focus(); // Kembalikan fokus
        }
        
        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                closeModal();
                return;
            }
            if (e.key === 'Tab') {
                const focusable = modal.querySelectorAll('button, input, [tabindex]:not([tabindex="-1"])');
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
    </script>
</body>
</html>`
    }
  ]
};