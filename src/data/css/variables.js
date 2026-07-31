export const chapter = {
  slug: "css-variables",
  title: "CSS Variables (Custom Properties)",
  description: "Kuasai CSS Variables untuk kode yang lebih bersih, konsisten, dan mudah di-maintain.",
  icon: "SiCss3",
  color: "#1572B6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["css-syntax"],
  tags: ["css", "variabel", "custom-properties", "maintainable"],
  order: 27,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu CSS Variables?

CSS Variables (Custom Properties) memungkinkan kamu menyimpan nilai yang bisa digunakan ulang di seluruh stylesheet.

## Sintaks Dasar

### Mendefinisikan
\`\`\`css
:root {
    --primary-color: #1572B6;
    --secondary-color: #2ecc71;
    --font-size-base: 16px;
    --spacing-unit: 8px;
}
\`\`\`

### Menggunakan
\`\`\`css
.button {
    background: var(--primary-color);
    font-size: var(--font-size-base);
    padding: var(--spacing-unit) calc(var(--spacing-unit) * 2);
}
\`\`\`

## Fallback Value

\`\`\`css
/* Jika --warna tidak ada, gunakan blue */
color: var(--warna, blue);
\`\`\`

## Scope

### Global (di :root)
\`\`\`css
:root {
    --text-color: #333;
}
\`\`\`

### Lokal (di selector spesifik)
\`\`\`css
.card {
    --card-padding: 20px;
    padding: var(--card-padding);
}

.card--small {
    --card-padding: 10px; /* Override */
}
\`\`\`

## Keunggulan

### 1. Tema (Theme)
\`\`\`css
:root {
    --bg: white;
    --text: #333;
}

[data-theme="dark"] {
    --bg: #1a1a1a;
    --text: #f5f5f5;
}

body {
    background: var(--bg);
    color: var(--text);
}
\`\`\`

### 2. Perhitungan dengan calc()
\`\`\`css
:root {
    --spacing: 16px;
}

.element {
    padding: calc(var(--spacing) * 2);
    margin: calc(var(--spacing) / 2);
}
\`\`\`

### 3. Modifikasi via JavaScript
\`\`\`javascript
document.documentElement.style.setProperty('--primary', '#ff0000');
\`\`\`

## Design Token System

\`\`\`css
:root {
    /* Warna */
    --color-primary: #1572B6;
    --color-primary-light: #4a90d9;
    --color-primary-dark: #0d5a91;
    
    /* Tipografi */
    --font-family: 'Inter', sans-serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 2rem;
    
    /* Spacing */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 20px;
    --space-6: 24px;
    --space-8: 32px;
    --space-10: 40px;
    --space-12: 48px;
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-full: 9999px;
    
    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 25px rgba(0,0,0,0.15);
}
\`\`\`

## Dark Mode dengan Variables

\`\`\`css
:root {
    --bg: #ffffff;
    --text: #333333;
    --card-bg: #f5f5f5;
    --border: #e0e0e0;
}

@media (prefers-color-scheme: dark) {
    :root {
        --bg: #1a1a2e;
        --text: #e0e0e0;
        --card-bg: #16213e;
        --border: #2a2a4a;
    }
}

/* Atau dengan class */
[data-theme="dark"] {
    --bg: #1a1a2e;
    --text: #e0e0e0;
    --card-bg: #16213e;
    --border: #2a2a4a;
}
\`\`\`
  `,

  quiz: [
    {
      question: "Di mana sebaiknya mendefinisikan CSS Variables global?",
      options: ["body", ":root", "html", "*"],
      correctAnswer: 1,
      explanation: ":root (pseudo-class untuk <html>) adalah tempat standar untuk mendefinisikan variabel global karena memiliki scope tertinggi."
    },
    {
      question: "Bagaimana cara mengubah CSS Variable via JavaScript?",
      options: [
        "document.style.setProperty()",
        "document.documentElement.style.setProperty()",
        "window.setCSSVariable()",
        "document.css.variables.set()"
      ],
      correctAnswer: 1,
      explanation: "Gunakan document.documentElement.style.setProperty('--nama', 'nilai') untuk mengubah variabel di :root."
    }
  ],

  codeExamples: [
    {
      title: "Design System dengan CSS Variables",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <style>
        :root {
            --primary: #1572B6;
            --primary-dark: #0d5a91;
            --bg: #ffffff;
            --text: #333333;
            --card-bg: #f5f5f5;
            --space: 16px;
            --radius: 8px;
            --shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        [data-theme="dark"] {
            --bg: #1a1a2e;
            --text: #e0e0e0;
            --card-bg: #16213e;
            --shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        
        body {
            background: var(--bg);
            color: var(--text);
            font-family: Arial;
            padding: 20px;
            transition: background 0.3s, color 0.3s;
        }
        
        .btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: calc(var(--space) * 0.75) calc(var(--space) * 1.5);
            border-radius: var(--radius);
            cursor: pointer;
        }
        .btn:hover { background: var(--primary-dark); }
        
        .card {
            background: var(--card-bg);
            padding: var(--space);
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            margin: var(--space) 0;
        }
        
        .theme-toggle {
            position: fixed; top: 20px; right: 20px;
        }
    </style>
</head>
<body>
    <button class="theme-toggle btn" onclick="toggleTheme()">🌓 Toggle Theme</button>
    
    <h1>Design System</h1>
    
    <div class="card">
        <h3>Kartu Informasi</h3>
        <p>Warna dan spacing menggunakan CSS Variables. Coba toggle dark mode!</p>
        <button class="btn">Aksi</button>
    </div>
    
    <script>
        function toggleTheme() {
            const html = document.documentElement;
            const current = html.getAttribute('data-theme');
            html.setAttribute('data-theme', current === 'dark' ? '' : 'dark');
        }
    </script>
</body>
</html>`
    }
  ]
};