export const chapter = {
  slug: "nesting",
  title: "Nesting",
  description: "Menggunakan nesting di Sass untuk menulis CSS yang lebih terstruktur dan bersih.",
  icon: "SiSass",
  color: "#CC6699",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["sass-introduction"],
  tags: ["sass", "nesting", "css", "structure"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Nesting?

Nesting di Sass memungkinkan Anda menulis selector CSS secara hierarkis, mengikuti struktur HTML. Ini membuat kode lebih terorganisir dan mudah dibaca.

## Dasar Nesting

### CSS Biasa
\`\`\`css
.nav {
    background: #333;
}
.nav ul {
    list-style: none;
}
.nav ul li {
    display: inline-block;
}
.nav ul li a {
    color: white;
    text-decoration: none;
}
.nav ul li a:hover {
    color: #3498db;
}
\`\`\`

### SCSS dengan Nesting
\`\`\`scss
.nav {
    background: #333;
    
    ul {
        list-style: none;
        
        li {
            display: inline-block;
            
            a {
                color: white;
                text-decoration: none;
                
                &:hover {
                    color: #3498db;
                }
            }
        }
    }
}
\`\`\`

## Ampersand (&) - Parent Selector

### Basic Usage
\`\`\`scss
.button {
    background: #3498db;
    padding: 10px 20px;
    
    &:hover {
        background: darken(#3498db, 10%);
    }
    
    &:active {
        transform: scale(0.95);
    }
    
    &:focus {
        outline: 2px solid #3498db;
    }
}
\`\`\`

### Class Combinations
\`\`\`scss
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    
    &-primary {
        background: #3498db;
        color: white;
    }
    
    &-secondary {
        background: #2ecc71;
        color: white;
    }
    
    &-danger {
        background: #e74c3c;
        color: white;
    }
    
    &-large {
        padding: 15px 30px;
        font-size: 1.2rem;
    }
}

// Output:
// .btn { ... }
// .btn-primary { ... }
// .btn-secondary { ... }
// .btn-danger { ... }
// .btn-large { ... }
\`\`\`

### Multiple Selectors
\`\`\`scss
.link {
    color: #3498db;
    
    &:hover,
    &:focus {
        color: darken(#3498db, 10%);
    }
    
    &:visited {
        color: #8e44ad;
    }
}
\`\`\`

### Nested Ampersand
\`\`\`scss
.parent {
    .child {
        color: blue;
        
        .parent & {
            color: red;
        }
    }
}

// Output:
// .parent .child { color: blue; }
// .parent .parent .child { color: red; }
\`\`\`

## Media Queries dengan Nesting

\`\`\`scss
.component {
    display: flex;
    flex-direction: column;
    padding: 20px;
    
    @media (min-width: 768px) {
        flex-direction: row;
        padding: 40px;
    }
    
    @media (min-width: 1024px) {
        padding: 60px;
    }
    
    .element {
        color: #333;
        
        @media (min-width: 768px) {
            color: #666;
        }
    }
}
\`\`\`

## Advanced Nesting

### Selector Combinators
\`\`\`scss
.card {
    & > .header {
        background: #f8f9fa;
    }
    
    & + .card {
        margin-top: 20px;
    }
    
    & ~ .card {
        border-left: 2px solid #ddd;
    }
    
    .title & {
        font-weight: bold;
    }
}
\`\`\`

### Attribute Selectors
\`\`\`scss
.input {
    &[type="text"] {
        border: 1px solid #ddd;
    }
    
    &[type="submit"] {
        background: #3498db;
        color: white;
    }
    
    &[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }
}
\`\`\`

### Pseudo Elements
\`\`\`scss
.paragraph {
    &::before {
        content: "→ ";
        color: #3498db;
    }
    
    &::after {
        content: " ←";
        color: #3498db;
    }
    
    &::first-line {
        font-weight: bold;
    }
    
    &::first-letter {
        font-size: 2em;
        float: left;
    }
}
\`\`\`

## Kelebihan dan Kekurangan Nesting

### Kelebihan
1. **Readability** - Kode lebih mudah dibaca
2. **Maintainability** - Lebih mudah di-maintain
3. **Structure** - Mengikuti struktur HTML
4. **Less Repetition** - Mengurangi pengulangan selector
5. **Context** - Selector dalam konteks yang jelas

### Kekurangan
1. **Over-nesting** - Bisa menghasilkan CSS yang overspesifik
2. **Performance** - Selector yang terlalu dalam bisa mempengaruhi performance
3. **File Size** - Output CSS bisa lebih besar

## Best Practices Nesting

### 1. Maximum 3-4 Levels
\`\`\`scss
// ❌ Terlalu dalam
.page .section .container .row .col .button {
    color: red;
}

// ✅ Maksimal 3-4 level
.page {
    .section {
        .button {
            color: red;
        }
    }
}
\`\`\`

### 2. Gunakan & dengan Bijak
\`\`\`scss
// ✅ Bagus
.button {
    &-primary { ... }
    &-secondary { ... }
}

// ❌ Membingungkan
.button {
    .container & { ... }
    .header & { ... }
    .footer & { ... }
}
\`\`\`

### 3. Media Queries di Dalam
\`\`\`scss
// ✅ Media queries di dalam
.component {
    @media (min-width: 768px) {
        padding: 20px;
    }
}
\`\`\`

### 4. Gunakan untuk Context
\`\`\`scss
// ❌ Tanpa konteks
.text {
    color: red;
}
.text-large {
    font-size: 20px;
}

// ✅ Dengan konteks
.text {
    color: red;
    
    &-large {
        font-size: 20px;
    }
}
\`\`\`

## Contoh Lengkap

\`\`\`scss
// Card component dengan nesting
.card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    
    &:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    
    &-header {
        padding: 20px 20px 0;
        border-bottom: 1px solid #eee;
        
        h3 {
            margin: 0;
            font-size: 1.25rem;
            color: #333;
        }
    }
    
    &-body {
        padding: 20px;
        
        p {
            margin: 0 0 15px;
            color: #666;
            line-height: 1.6;
        }
    }
    
    &-footer {
        padding: 20px;
        background: #f8f9fa;
        border-top: 1px solid #eee;
        
        .btn {
            &-primary {
                background: #3498db;
                color: white;
            }
            
            &-secondary {
                background: #6c757d;
                color: white;
            }
        }
    }
    
    // Responsive
    @media (max-width: 768px) {
        border-radius: 0;
        
        &-header {
            padding: 15px;
            
            h3 {
                font-size: 1rem;
            }
        }
        
        &-body {
            padding: 15px;
        }
        
        &-footer {
            padding: 15px;
        }
    }
}

// Navigation dengan nesting
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #2c3e50;
    color: white;
    
    &-brand {
        font-size: 1.5rem;
        font-weight: bold;
        
        a {
            color: white;
            text-decoration: none;
            
            &:hover {
                color: #3498db;
            }
        }
    }
    
    &-links {
        display: flex;
        gap: 2rem;
        list-style: none;
        margin: 0;
        padding: 0;
        
        li {
            a {
                color: white;
                text-decoration: none;
                transition: color 0.3s ease;
                
                &:hover {
                    color: #3498db;
                }
                
                &.active {
                    color: #3498db;
                    font-weight: bold;
                }
            }
        }
    }
    
    &-toggle {
        display: none;
        flex-direction: column;
        gap: 4px;
        background: transparent;
        border: none;
        cursor: pointer;
        
        span {
            width: 25px;
            height: 3px;
            background: white;
            transition: all 0.3s ease;
        }
    }
    
    @media (max-width: 768px) {
        &-links {
            display: none;
            flex-direction: column;
            width: 100%;
            
            &.show {
                display: flex;
            }
        }
        
        &-toggle {
            display: flex;
        }
    }
}
\`\`\`
  `,
  quiz: [
    {
      question: "Apa fungsi ampersand (&) di Sass?",
      options: [
        "Membuat variable",
        "Parent selector",
        "Import file",
        "Membuat mixin"
      ],
      correctAnswer: 1
    },
    {
      question: "Berapa tingkat nesting yang disarankan?",
      options: [
        "Maksimal 2",
        "Maksimal 3-4",
        "Maksimal 5-6",
        "Tidak ada batas"
      ],
      correctAnswer: 1
    },
    {
      question: "Keuntungan nesting adalah?",
      options: [
        "Membuat CSS lebih cepat",
        "Kode lebih terstruktur dan mudah dibaca",
        "Mengurangi file size",
        "Membuat CSS lebih secure"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Advanced Nesting Patterns",
      code: `// 1. BEM with Nesting
.block {
    background: white;
    padding: 20px;
    
    &__element {
        color: #333;
        margin-bottom: 10px;
        
        &--modifier {
            color: #3498db;
            font-weight: bold;
        }
    }
    
    &--modifier {
        background: #f8f9fa;
        border: 1px solid #ddd;
    }
}

// 2. State-based Styling
.button {
    background: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    
    &.is-loading {
        opacity: 0.7;
        cursor: wait;
    }
    
    &.is-disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    &:hover:not(.is-disabled) {
        background: darken(#3498db, 10%);
    }
}

// 3. Theme-based Styling
.theme {
    &-light {
        background: white;
        color: #333;
        
        .card {
            background: #f8f9fa;
            border: 1px solid #ddd;
        }
    }
    
    &-dark {
        background: #1a1a1a;
        color: #f8f9fa;
        
        .card {
            background: #2d2d2d;
            border: 1px solid #444;
        }
    }
}

// 4. Grid System with Nesting
.grid {
    display: grid;
    gap: 20px;
    
    &-cols {
        &-2 {
            grid-template-columns: repeat(2, 1fr);
        }
        
        &-3 {
            grid-template-columns: repeat(3, 1fr);
        }
        
        &-4 {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    
    @media (max-width: 768px) {
        &-cols-2,
        &-cols-3,
        &-cols-4 {
            grid-template-columns: 1fr;
        }
    }
}

// 5. Complex Form with Nesting
.form {
    &-group {
        margin-bottom: 20px;
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: 600;
            color: #333;
        }
        
        input,
        select,
        textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            transition: border-color 0.3s ease;
            
            &:focus {
                outline: none;
                border-color: #3498db;
                box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
            }
            
            &.is-error {
                border-color: #e74c3c;
                
                &:focus {
                    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
                }
            }
        }
        
        .error-message {
            display: none;
            color: #e74c3c;
            font-size: 0.875rem;
            margin-top: 5px;
        }
        
        &.has-error {
            input {
                border-color: #e74c3c;
            }
            
            .error-message {
                display: block;
            }
        }
    }
    
    &-actions {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        margin-top: 20px;
        
        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            
            &-primary {
                background: #3498db;
                color: white;
                
                &:hover {
                    background: darken(#3498db, 10%);
                }
            }
            
            &-secondary {
                background: #6c757d;
                color: white;
                
                &:hover {
                    background: darken(#6c757d, 10%);
                }
            }
        }
    }
}`,
      language: "scss"
    }
  ]
};