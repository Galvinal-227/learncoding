export const chapter = {
  slug: "css-mini-project",
  title: "Proyek Mini CSS",
  description: "Gabungkan semua yang telah dipelajari dengan membuat landing page responsif lengkap.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 45,
  prerequisites: ["css-best-practices"],
  tags: ["css", "proyek", "landing-page"],
  order: 30,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Proyek: Landing Page Profesional

Buat landing page responsif dengan semua teknik CSS yang telah dipelajari.

### Yang Akan Dibuat:
- Navbar responsif dengan flexbox
- Hero section dengan gradien
- Card grid dengan CSS Grid
- Animasi dan transisi
- Dark mode support
- Mobile responsive
  `,

  quiz: [],

  codeExamples: [
    {
      title: "Landing Page Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechPro - Solusi Digital</title>
    <style>
        /* ===== CSS Variables ===== */
        :root {
            --primary: #4f46e5;
            --primary-dark: #3730a3;
            --bg: #ffffff;
            --text: #1f2937;
            --text-light: #6b7280;
            --card-bg: #f9fafb;
            --border: #e5e7eb;
            --shadow: 0 4px 6px rgba(0,0,0,0.07);
            --radius: 12px;
            --max-width: 1200px;
        }
        
        /* ===== Reset ===== */
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        
        /* ===== Base ===== */
        body {
            font-family: 'Segoe UI', system-ui, sans-serif;
            color: var(--text);
            background: var(--bg);
            line-height: 1.6;
        }
        .container { max-width: var(--max-width); margin: 0 auto; padding: 0 20px; }
        
        /* ===== Navbar ===== */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 20px;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        .nav-links { display: flex; gap: 24px; list-style: none; }
        .nav-links a { text-decoration: none; color: var(--text); font-weight: 500; transition: color 0.3s; }
        .nav-links a:hover { color: var(--primary); }
        
        /* ===== Hero ===== */
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: clamp(60px, 10vw, 120px) 20px;
        }
        .hero h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: 16px; }
        .hero p { font-size: clamp(1rem, 2vw, 1.25rem); opacity: 0.9; max-width: 600px; margin: 0 auto 30px; }
        
        /* ===== Buttons ===== */
        .btn {
            display: inline-block;
            padding: 12px 28px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;
            font-size: 1rem;
        }
        .btn-primary { background: white; color: var(--primary); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.2); }
        .btn-outline { border: 2px solid white; color: white; background: transparent; margin-left: 12px; }
        .btn-outline:hover { background: white; color: var(--primary); }
        
        /* ===== Features ===== */
        .features { padding: 80px 0; }
        .section-title { text-align: center; margin-bottom: 50px; }
        .section-title h2 { font-size: clamp(1.5rem, 3vw, 2.5rem); margin-bottom: 10px; }
        .section-title p { color: var(--text-light); }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }
        .feature-card {
            background: var(--card-bg);
            padding: 30px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }
        .feature-icon { font-size: 3rem; margin-bottom: 16px; }
        .feature-card h3 { margin-bottom: 10px; }
        .feature-card p { color: var(--text-light); }
        
        /* ===== Pricing ===== */
        .pricing { background: var(--card-bg); padding: 80px 0; }
        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            align-items: center;
        }
        .price-card {
            background: white;
            padding: 40px 30px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            text-align: center;
            transition: transform 0.3s;
        }
        .price-card.featured {
            transform: scale(1.05);
            border: 2px solid var(--primary);
        }
        .price { font-size: 3rem; font-weight: 700; color: var(--primary); margin: 20px 0; }
        .price span { font-size: 1rem; color: var(--text-light); }
        .price-card ul { list-style: none; margin: 20px 0; }
        .price-card li { padding: 8px 0; border-bottom: 1px solid var(--border); }
        
        /* ===== Footer ===== */
        .footer {
            background: #1f2937;
            color: white;
            text-align: center;
            padding: 40px 20px;
        }
        .footer a { color: #93c5fd; text-decoration: none; }
        
        /* ===== Responsive ===== */
        @media (max-width: 768px) {
            .nav-links { display: none; }
            .price-card.featured { transform: none; }
        }
        
        /* ===== Animations ===== */
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate { animation: fadeInUp 0.6s ease forwards; }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar">
        <h2>🚀 TechPro</h2>
        <ul class="nav-links">
            <li><a href="#features">Fitur</a></li>
            <li><a href="#pricing">Harga</a></li>
            <li><a href="#contact">Kontak</a></li>
        </ul>
    </nav>
    
    <!-- Hero -->
    <section class="hero">
        <h1 class="animate">Solusi Digital untuk Bisnis Anda</h1>
        <p>Kami membantu bisnis bertransformasi ke era digital dengan solusi teknologi terkini.</p>
        <a href="#" class="btn btn-primary">Mulai Sekarang</a>
        <a href="#" class="btn btn-outline">Pelajari Lebih</a>
    </section>
    
    <!-- Features -->
    <section class="features" id="features">
        <div class="container">
            <div class="section-title">
                <h2>Fitur Unggulan</h2>
                <p>Kenapa memilih layanan kami</p>
            </div>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3>Cepat</h3>
                    <p>Website super cepat dengan optimasi terbaik.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔒</div>
                    <h3>Aman</h3>
                    <p>Keamanan level enterprise untuk data Anda.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3>Responsif</h3>
                    <p>Tampil sempurna di semua perangkat.</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Pricing -->
    <section class="pricing" id="pricing">
        <div class="container">
            <div class="section-title">
                <h2>Paket Harga</h2>
                <p>Pilih paket yang sesuai kebutuhan</p>
            </div>
            <div class="pricing-grid">
                <div class="price-card">
                    <h3>Basic</h3>
                    <div class="price">Rp99k<span>/bln</span></div>
                    <ul>
                        <li>10 GB Storage</li>
                        <li>Basic Support</li>
                        <li>1 Domain</li>
                    </ul>
                    <a href="#" class="btn btn-primary">Pilih Basic</a>
                </div>
                <div class="price-card featured">
                    <h3>Pro</h3>
                    <div class="price">Rp299k<span>/bln</span></div>
                    <ul>
                        <li>100 GB Storage</li>
                        <li>Priority Support</li>
                        <li>5 Domain</li>
                        <li>SSL Gratis</li>
                    </ul>
                    <a href="#" class="btn btn-primary">Pilih Pro</a>
                </div>
                <div class="price-card">
                    <h3>Enterprise</h3>
                    <div class="price">Rp999k<span>/bln</span></div>
                    <ul>
                        <li>Unlimited Storage</li>
                        <li>Dedicated Support</li>
                        <li>Unlimited Domain</li>
                        <li>Custom Features</li>
                    </ul>
                    <a href="#" class="btn btn-primary">Pilih Enterprise</a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2026 TechPro. Dibuat menggunakan HTML & CSS</p>
        <p><a href="#">Kebijakan Privasi</a> | <a href="#">Syarat & Ketentuan</a></p>
    </footer>
</body>
</html>`
    }
  ]
};