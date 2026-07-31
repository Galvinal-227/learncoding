export const chapter = {
  slug: "performance-compression",
  title: "Compression (Gzip, Brotli)",
  description: "Kompresi response dengan Gzip dan Brotli untuk transfer data lebih kecil.",
  icon: "SiLighthouse",
  color: "#F44B21",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["performance-introduction"],
  tags: ["performance", "compression", "gzip", "brotli"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Compression?

Text files (HTML, CSS, JS, JSON) bisa dikompres **60-80%**. Lebih kecil = lebih cepat.

## Gzip

### Nginx
\`\`\`nginx
http {
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/javascript
        application/javascript
        application/json
        image/svg+xml;
}
\`\`\`

### Express
\`\`\`javascript
import compression from 'compression';

app.use(compression({
    level: 6,           // Compression level (0-9)
    threshold: 1024,    // Min size to compress
    filter: (req, res) => {
        // Don't compress images
        if (req.headers['x-no-compression']) return false;
        return compression.filter(req, res);
    }
}));
\`\`\`

## Brotli (Better than Gzip)

### Nginx + Brotli
\`\`\`bash
# Install brotli module
sudo apt install nginx-module-brotli
\`\`\`

\`\`\`nginx
# nginx.conf
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/javascript application/json image/svg+xml;
\`\`\`

### Node.js
\`\`\`javascript
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

// Compress file
createReadStream('large-file.js')
    .pipe(createBrotliCompress())
    .pipe(createWriteStream('large-file.js.br'));
\`\`\`

## Gzip vs Brotli

| | Gzip | Brotli |
|---|------|--------|
| Compression | Good | Better (20% smaller) |
| Speed | Fast | Slower (compress only) |
| Decompression | Fast | Fast |
| Browser support | 100% | 97% |
| CDN support | All | Most |
| Best for | Dynamic content | Static assets |

## CDN Auto-Compression

\`\`\`
Cloudflare: Auto Brotli + Gzip
Vercel: Auto Brotli
Netlify: Auto Brotli
\`\`\`

## Check Compression

\`\`\`bash
curl -H "Accept-Encoding: br" -I https://example.com | grep content-encoding
# content-encoding: br

curl -H "Accept-Encoding: gzip" -I https://example.com | grep content-encoding
# content-encoding: gzip
\`\`\`
  `,

  quiz: [
    { question: "Brotli vs Gzip?", options: ["Sama", "Brotli: better compression (20% smaller)", "Gzip better", "Both same"], correctAnswer: 1 },
    { question: "Express compression?", options: ["Manual", "compression middleware", "nginx only", "Browser only"], correctAnswer: 1 }
  ],

  codeExamples: []
};