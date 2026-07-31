export const chapter = {
  slug: "bootstrap-components",
  title: "Components",
  description: "Jelajahi komponen-komponen siap pakai Bootstrap: navbar, card, modal, alert, dan lainnya.",
  icon: "SiBootstrap",
  color: "#7952B3",
  difficulty: "Beginner",
  estimatedReadingTime: 25,
  prerequisites: ["bootstrap-grid-system"],
  tags: ["bootstrap", "components", "navbar", "card", "modal"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Komponen Bootstrap

Bootstrap menyediakan puluhan komponen siap pakai. Berikut yang paling sering dipakai:

## 1. Navbar

\`\`\`html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
\`\`\`

## 2. Card

\`\`\`html
<div class="card" style="width: 18rem;">
    <img src="gambar.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Judul Card</h5>
        <p class="card-text">Deskripsi singkat tentang card ini.</p>
        <a href="#" class="btn btn-primary">Baca Selengkapnya</a>
    </div>
</div>
\`\`\`

## 3. Button

\`\`\`html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>

<!-- Outline -->
<button class="btn btn-outline-primary">Outline</button>

<!-- Size -->
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-sm">Small</button>
\`\`\`

## 4. Alert

\`\`\`html
<div class="alert alert-primary">Notifikasi biasa</div>
<div class="alert alert-success">✅ Operasi berhasil!</div>
<div class="alert alert-danger">❌ Terjadi kesalahan!</div>
<div class="alert alert-warning alert-dismissible fade show">
    ⚠️ Perhatian!
    <button class="btn-close" data-bs-dismiss="alert"></button>
</div>
\`\`\`

## 5. Badge

\`\`\`html
<span class="badge bg-primary">Baru</span>
<span class="badge bg-danger">5</span>
<span class="badge rounded-pill bg-success">Aktif</span>
\`\`\`

## 6. Spinner

\`\`\`html
<div class="spinner-border text-primary"></div>
<div class="spinner-grow text-success"></div>
\`\`\`

## 7. Progress Bar

\`\`\`html
<div class="progress">
    <div class="progress-bar" style="width: 75%">75%</div>
</div>
<div class="progress mt-2">
    <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" 
         style="width: 60%">Loading...</div>
</div>
\`\`\`

## 8. List Group

\`\`\`html
<ul class="list-group">
    <li class="list-group-item active">Item aktif</li>
    <li class="list-group-item">Item kedua</li>
    <li class="list-group-item d-flex justify-content-between">
        Notifications
        <span class="badge bg-primary rounded-pill">14</span>
    </li>
</ul>
\`\`\`
  `,

  quiz: [
    { question: "Class untuk tombol utama Bootstrap?", options: ["btn btn-main", "btn btn-primary", "btn btn-first", "btn btn-blue"], correctAnswer: 1 },
    { question: "Class card di Bootstrap?", options: [".panel", ".box", ".card", ".widget"], correctAnswer: 2 },
    { question: "navbar-expand-lg artinya?", options: ["Selalu expanded", "Hamburger menu di bawah lg, expanded di lg+", "Hidden di mobile", "Hanya lg screen"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Dashboard Sederhana Bootstrap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">📊 Dashboard</a>
            <div class="ms-auto">
                <span class="badge bg-danger rounded-pill">3</span>
                <img src="https://via.placeholder.com/32" class="rounded-circle ms-2">
            </div>
        </div>
    </nav>
    
    <div class="container mt-4">
        <div class="row g-3">
            <div class="col-md-3">
                <div class="card bg-primary text-white">
                    <div class="card-body">
                        <h5>Users</h5>
                        <h2>1,234</h2>
                        <small>↑ 12% dari bulan lalu</small>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card bg-success text-white">
                    <div class="card-body"><h5>Revenue</h5><h2>Rp 45M</h2></div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card bg-warning text-white">
                    <div class="card-body"><h5>Orders</h5><h2>567</h2></div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card bg-danger text-white">
                    <div class="card-body"><h5>Tickets</h5><h2>23</h2></div>
                </div>
            </div>
        </div>
        
        <div class="row mt-4">
            <div class="col-md-8">
                <div class="card"><div class="card-body"><h5>Chart Area</h5><div class="bg-light p-5 text-center">📈 Grafik di sini</div></div></div>
            </div>
            <div class="col-md-4">
                <div class="card"><div class="card-header fw-bold">Recent Activity</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">User baru mendaftar</li>
                        <li class="list-group-item">Order #1234 completed</li>
                        <li class="list-group-item">Payment received</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    }
  ]
};