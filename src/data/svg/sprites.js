export const chapter = {
  slug: "sprites",
  title: "Sprites & Icons",
  description: "Membuat dan mengelola SVG sprites dan icon untuk aplikasi web.",
  icon: "SiSvg",
  color: "#FFB13B",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["svg-introduction", "svg-basic-shapes"],
  tags: ["svg", "sprites", "icons", "symbol"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## SVG Sprite

SVG sprite menggabungkan banyak icon dalam satu file SVG untuk efisiensi.

### Definisi Sprite
\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
    <symbol id="home" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </symbol>
    <symbol id="user" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M12 14c-4 0-7 2-7 4h14c0-2-3-4-7-4z" />
    </symbol>
</svg>
\`\`\`

### Penggunaan
\`\`\`html
<svg><use href="#home" /></svg>
<svg><use href="#user" /></svg>
\`\`\`

## Contoh Icon

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
    <!-- Home Icon -->
    <symbol id="icon-home" viewBox="0 0 24 24">
        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
    </symbol>
    
    <!-- User Icon -->
    <symbol id="icon-user" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M12 14c-4 0-7 2-7 4h14c0-2-3-4-7-4z" />
    </symbol>
    
    <!-- Settings Icon -->
    <symbol id="icon-settings" viewBox="0 0 24 24">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 15.6 12 3.6 3.6 0 0 1 12 15.6z" />
    </symbol>
</svg>
\`\`\`

## Styling Icon

\`\`\`css
.icon {
    width: 24px;
    height: 24px;
    fill: currentColor;
    transition: all 0.3s ease;
}
.icon:hover {
    fill: #FF6B6B;
    transform: scale(1.1);
}
\`\`\`

\`\`\`html
<svg class="icon"><use href="#icon-home" /></svg>
\`\`\`

## Icon Library

\`\`\`svg
<svg viewBox="0 0 600 200">
    <!-- Common Icons -->
    <g transform="translate(50, 50)">
        <use href="#icon-home" width="40" height="40" fill="#FF6B6B" />
        <text x="20" y="55" text-anchor="middle" font-size="12">Home</text>
    </g>
    
    <g transform="translate(150, 50)">
        <use href="#icon-user" width="40" height="40" fill="#4ECDC4" />
        <text x="20" y="55" text-anchor="middle" font-size="12">User</text>
    </g>
    
    <g transform="translate(250, 50)">
        <use href="#icon-settings" width="40" height="40" fill="#FFE66D" />
        <text x="20" y="55" text-anchor="middle" font-size="12">Settings</text>
    </g>
</svg>
\`\`\`
  `,
  quiz: [
    {
      question: "Element untuk mendefinisikan icon di sprite adalah?",
      options: [
        "icon",
        "symbol",
        "sprite",
        "def"
      ],
      correctAnswer: 1
    },
    {
      question: "Atribut untuk menggunakan sprite adalah?",
      options: [
        "src",
        "href",
        "use",
        "link"
      ],
      correctAnswer: 1
    },
    {
      question: "Element untuk menggunakan sprite adalah?",
      options: [
        "use",
        "img",
        "sprite",
        "icon"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Sprite System",
      code: `<!-- sprite.svg -->
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
    <!-- Navigation Icons -->
    <symbol id="nav-home" viewBox="0 0 24 24">
        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
    </symbol>
    <symbol id="nav-search" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </symbol>
    
    <!-- Social Icons -->
    <symbol id="social-twitter" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
    </symbol>
    
    <!-- Action Icons -->
    <symbol id="action-edit" viewBox="0 0 24 24">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </symbol>
    <symbol id="action-delete" viewBox="0 0 24 24">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </symbol>
    <symbol id="action-check" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </symbol>
    
    <!-- Media Icons -->
    <symbol id="media-play" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </symbol>
    <symbol id="media-pause" viewBox="0 0 24 24">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </symbol>
</svg>

<!-- Usage Examples -->
<!DOCTYPE html>
<html>
<head>
    <style>
        .icon {
            width: 32px;
            height: 32px;
            fill: currentColor;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .icon:hover {
            transform: scale(1.2);
            fill: #FF6B6B;
        }
        .icon-sm { width: 16px; height: 16px; }
        .icon-lg { width: 48px; height: 48px; }
        .icon-primary { fill: #FF6B6B; }
        .icon-secondary { fill: #4ECDC4; }
        
        .icon-group {
            display: flex;
            gap: 20px;
            padding: 20px;
        }
    </style>
</head>
<body>
    <!-- Navigation Icons -->
    <div class="icon-group">
        <svg class="icon icon-primary"><use href="#nav-home" /></svg>
        <svg class="icon icon-secondary"><use href="#nav-search" /></svg>
    </div>
    
    <!-- Social Icons -->
    <div class="icon-group">
        <svg class="icon"><use href="#social-twitter" /></svg>
    </div>
    
    <!-- Action Icons -->
    <div class="icon-group">
        <svg class="icon icon-sm"><use href="#action-edit" /></svg>
        <svg class="icon icon-sm"><use href="#action-delete" /></svg>
        <svg class="icon icon-sm"><use href="#action-check" /></svg>
    </div>
    
    <!-- Media Icons -->
    <div class="icon-group">
        <svg class="icon icon-lg"><use href="#media-play" /></svg>
        <svg class="icon icon-lg"><use href="#media-pause" /></svg>
    </div>
</body>
</html>`,
      language: "html"
    }
  ]
};