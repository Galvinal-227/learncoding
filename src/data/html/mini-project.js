export const chapter = {
  slug: "html-mini-project",
  title: "Proyek Mini",
  description: "Gabungkan semua yang telah dipelajari dengan membuat halaman web lengkap.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 45,
  prerequisites: ["html-best-practices"],
  tags: ["html", "proyek", "praktek"],
  order: 28,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Proyek: Halaman Profil Pribadi

Buat halaman profil pribadi yang mencakup semua elemen HTML yang telah dipelajari.

## Spesifikasi

Halaman harus memiliki:
- Header dengan navigasi
- Section tentang diri
- Tabel keahlian
- Form kontak
- Embed peta lokasi
- Footer

## Hasil yang Diharapkan

Lihat code example di bawah untuk hasil lengkapnya.
  `,

  quiz: [],

  codeExamples: [
    {
      title: "Halaman Profil Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profil - Budi Santoso | Web Developer</title>
    <meta name="description" content="Halaman profil profesional Budi Santoso, Web Developer dari Jakarta.">
</head>
<body>
    <header>
        <h1>Budi Santoso</h1>
        <nav aria-label="Navigasi utama">
            <ul>
                <li><a href="#tentang">Tentang</a></li>
                <li><a href="#keahlian">Keahlian</a></li>
                <li><a href="#portofolio">Portofolio</a></li>
                <li><a href="#kontak">Kontak</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="tentang">
            <h2>Tentang Saya</h2>
            <figure>
                <img src="foto-profil.jpg" alt="Foto Budi Santoso" width="200" height="200" loading="lazy">
                <figcaption>Budi Santoso - Web Developer</figcaption>
            </figure>
            <p>Halo! Saya seorang <strong>Web Developer</strong> dengan pengalaman 5 tahun membangun website modern.</p>
            <p>Saya tinggal di <address>Jakarta Selatan, Indonesia</address>.</p>
        </section>

        <section id="keahlian">
            <h2>Keahlian</h2>
            <table>
                <caption>Daftar Keahlian Teknis</caption>
                <thead>
                    <tr>
                        <th scope="col">Kategori</th>
                        <th scope="col">Teknologi</th>
                        <th scope="col">Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Frontend</th>
                        <td>HTML, CSS, JavaScript</td>
                        <td>Expert</td>
                    </tr>
                    <tr>
                        <th scope="row">Frontend</th>
                        <td>React, Next.js</td>
                        <td>Advanced</td>
                    </tr>
                    <tr>
                        <th scope="row">Backend</th>
                        <td>Node.js, Express</td>
                        <td>Intermediate</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section id="portofolio">
            <h2>Portofolio</h2>
            <article>
                <h3>Website E-Commerce</h3>
                <figure>
                    <img src="proyek1.jpg" alt="Tampilan website e-commerce" loading="lazy" width="400" height="250">
                    <figcaption>Proyek website e-commerce menggunakan React</figcaption>
                </figure>
                <p>Membangun platform e-commerce dengan fitur keranjang belanja dan pembayaran.</p>
            </article>
        </section>

        <section id="kontak">
            <h2>Hubungi Saya</h2>
            <form action="/api/kontak" method="POST">
                <div>
                    <label for="nama">Nama *</label>
                    <input type="text" id="nama" name="nama" required>
                </div>
                <div>
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div>
                    <label for="pesan">Pesan *</label>
                    <textarea id="pesan" name="pesan" rows="5" required></textarea>
                </div>
                <button type="submit">Kirim Pesan</button>
            </form>
        </section>

        <section>
            <h2>Lokasi</h2>
            <iframe src="https://www.google.com/maps/embed?..." 
                    width="600" height="450" style="border:0;" 
                    allowfullscreen="" loading="lazy"
                    title="Peta lokasi kantor">
            </iframe>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Budi Santoso</p>
        <nav aria-label="Media sosial">
            <a href="https://github.com/budi" target="_blank" rel="noopener">GitHub</a> |
            <a href="https://linkedin.com/in/budi" target="_blank" rel="noopener">LinkedIn</a>
        </nav>
    </footer>
</body>
</html>`,
      output: "Halaman profil pribadi lengkap yang menggabungkan semua konsep HTML."
    }
  ]
};