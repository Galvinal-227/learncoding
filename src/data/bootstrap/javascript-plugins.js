export const chapter = {
  slug: "bootstrap-javascript-plugins",
  title: "JavaScript Plugins",
  description: "Gunakan plugin JavaScript Bootstrap: Modal, Tooltip, Toast, Carousel, Collapse.",
  icon: "SiBootstrap",
  color: "#7952B3",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["bootstrap-components"],
  tags: ["bootstrap", "javascript", "modal", "toast", "carousel"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Plugin Bootstrap 5

Bootstrap 5 plugin **tanpa jQuery**, murni vanilla JavaScript!

## 1. Modal

### HTML
\`\`\`html
<!-- Tombol trigger -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Buka Modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Judul Modal</h5>
                <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <p>Konten modal di sini...</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                <button class="btn btn-primary">Simpan</button>
            </div>
        </div>
    </div>
</div>
\`\`\`

### JavaScript
\`\`\`javascript
const modal = new bootstrap.Modal(document.getElementById('myModal'));
modal.show();
modal.hide();

// Event
modalElement.addEventListener('shown.bs.modal', () => {
    console.log('Modal terbuka');
});
\`\`\`

## 2. Tooltip

\`\`\`html
<button data-bs-toggle="tooltip" data-bs-placement="top" title="Ini tooltip!">
    Hover aku
</button>
\`\`\`

\`\`\`javascript
const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltips.forEach(t => new bootstrap.Tooltip(t));
\`\`\`

## 3. Toast (Notifikasi)

\`\`\`html
<div class="toast" id="myToast">
    <div class="toast-header">
        <strong class="me-auto">Notifikasi</strong>
        <small>Sekarang</small>
        <button class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">Data berhasil disimpan!</div>
</div>
\`\`\`

\`\`\`javascript
const toast = new bootstrap.Toast(document.getElementById('myToast'));
toast.show();
\`\`\`

## 4. Carousel

\`\`\`html
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="bg-primary text-white p-5 text-center"><h2>Slide 1</h2></div>
        </div>
        <div class="carousel-item">
            <div class="bg-success text-white p-5 text-center"><h2>Slide 2</h2></div>
        </div>
    </div>
    <button class="carousel-control-prev" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    </button>
</div>
\`\`\`

## 5. Collapse

\`\`\`html
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#content">
    Toggle Content
</button>
<div class="collapse" id="content">
    <div class="card card-body mt-2">Konten tersembunyi!</div>
</div>
\`\`\`
  `,

  quiz: [
    { question: "Bootstrap 5 plugin pakai?", options: ["jQuery", "Vanilla JavaScript", "React", "Angular"], correctAnswer: 1 },
    { question: "Attribute untuk trigger modal?", options: ["data-toggle", "data-bs-toggle", "data-modal", "data-open"], correctAnswer: 1 },
    { question: "Tooltip init?", options: ["$('.tooltip').tooltip()", "new bootstrap.Tooltip(el)", "el.tooltip()", "bootstrap.tooltip(el)"], correctAnswer: 1 }
  ],

  codeExamples: []
};