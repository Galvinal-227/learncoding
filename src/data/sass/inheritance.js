export const chapter = {
  slug: "inheritance",
  title: "Inheritance (Extend)",
  description: "Menggunakan @extend untuk mewarisi properti CSS dari selector lain.",
  icon: "SiSass",
  color: "#CC6699",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["sass-introduction", "sass-mixins"],
  tags: ["sass", "inheritance", "extend", "css", "reusable"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Inheritance?

Inheritance di Sass menggunakan @extend untuk mewarisi properti dari satu selector ke selector lain. Ini membantu menghindari duplikasi kode dan menjaga DRY (Don't Repeat Yourself).

## Dasar @extend

\`\`\`scss
// Base styles
.message {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
}

// Inherit dari .message
.success {
    @extend .message;
    border-color: #2ecc71;
    background: #d5f5e3;
}

.error {
    @extend .message;
    border-color: #e74c3c;
    background: #fadbd8;
}

.warning {
    @extend .message;
    border-color: #f39c12;
    background: #fdebd0;
}

// Output CSS
// .message, .success, .error, .warning {
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     margin-bottom: 10px;
// }
// .success { border-color: #2ecc71; background: #d5f5e3; }
// .error { border-color: #e74c3c; background: #fadbd8; }
// .warning { border-color: #f39c12; background: #fdebd0; }
\`\`\`

## Placeholder Selectors (%)

Placeholder selector adalah selector khusus yang tidak di-compile kecuali di-extend.

\`\`\`scss
// Placeholder selector
%button-base {
    display: inline-block;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
}

// Extend placeholder
.btn-primary {
    @extend %button-base;
    background: #3498db;
    color: white;
}

.btn-secondary {
    @extend %button-base;
    background: #2ecc71;
    color: white;
}

// %button-base tidak di-compile
// Hanya .btn-primary dan .btn-secondary yang muncul di CSS
\`\`\`

## @extend dengan Multiple Selectors

\`\`\`scss
// Multiple inheritance
%flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

%box-shadow {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card {
    @extend %flex-center;
    @extend %box-shadow;
    padding: 20px;
    background: white;
    border-radius: 8px;
}

// Output
// .card {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//     padding: 20px;
//     background: white;
//     border-radius: 8px;
// }
\`\`\`

## @extend vs @mixin

### @extend (Inheritance)
\`\`\`scss
// Menggabungkan selector
%button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
}

.btn-primary {
    @extend %button;
    background: blue;
}

.btn-secondary {
    @extend %button;
    background: green;
}

// Output: .btn-primary, .btn-secondary { ... }
\`\`\`

### @mixin (Reusable)
\`\`\`scss
// Duplikasi kode
@mixin button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
}

.btn-primary {
    @include button;
    background: blue;
}

.btn-secondary {
    @include button;
    background: green;
}

// Output: .btn-primary { ... } .btn-secondary { ... }
\`\`\`

## Kapan Menggunakan @extend vs @mixin

### Gunakan @extend ketika:
1. Selector saling terkait secara semantic
2. Ingin menghemat ukuran file CSS
3. Menggunakan placeholder selectors
4. Tidak perlu parameter

### Gunakan @mixin ketika:
1. Membutuhkan parameter
2. Perlu conditional logic
3. Ingin explicit code
4. Tidak ingin selector digabungkan

## Advanced Inheritance

### Chain Inheritance
\`\`\`scss
%base {
    padding: 10px;
}

%extended {
    @extend %base;
    margin: 10px;
}

%more-extended {
    @extend %extended;
    border: 1px solid #ccc;
}

.element {
    @extend %more-extended;
    background: #f8f9fa;
}
\`\`\`

### Inheritance dengan Pseudo Classes
\`\`\`scss
%link {
    color: #3498db;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
        color: darken(#3498db, 10%);
    }
}

.link {
    @extend %link;
    font-weight: 600;
}

// Output
// %link { color: #3498db; text-decoration: none; }
// %link:hover { text-decoration: underline; color: #2980b9; }
// .link { font-weight: 600; }
\`\`\`

## Common Use Cases

### 1. Typography System
\`\`\`scss
%heading {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5em;
}

h1 {
    @extend %heading;
    font-size: 2.5rem;
}

h2 {
    @extend %heading;
    font-size: 2rem;
}

h3 {
    @extend %heading;
    font-size: 1.5rem;
}
\`\`\`

### 2. Button System
\`\`\`scss
%btn {
    display: inline-block;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    
    &:hover {
        transform: translateY(-2px);
    }
}

.btn-primary {
    @extend %btn;
    background: #3498db;
    color: white;
    
    &:hover {
        background: #2980b9;
    }
}

.btn-outline {
    @extend %btn;
    background: transparent;
    border: 2px solid #3498db;
    color: #3498db;
    
    &:hover {
        background: #3498db;
        color: white;
    }
}
\`\`\`

### 3. Card System
\`\`\`scss
%card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card {
    @extend %card;
    
    &-header {
        padding: 20px;
        border-bottom: 1px solid #eee;
    }
    
    &-body {
        padding: 20px;
    }
    
    &-footer {
        padding: 20px;
        background: #f8f9fa;
    }
}

.card-featured {
    @extend %card;
    border: 2px solid #3498db;
    box-shadow: 0 4px 8px rgba(52,152,219,0.2);
}
\`\`\`

## Best Practices

### 1. Gunakan Placeholder Selectors
\`\`\`scss
// ✅ Gunakan % untuk tidak di-compile
%message { ... }

// ❌ Bisa di-compile tanpa digunakan
.message { ... }
\`\`\`

### 2. Jangan Over-extend
\`\`\`scss
// ❌ Terlalu banyak extend
.element {
    @extend %a;
    @extend %b;
    @extend %c;
    @extend %d;
}

// ✅ Batasi extend
.element {
    @extend %base;
    // Custom styles
}
\`\`\`

### 3. Hindari Extend di Media Queries
\`\`\`scss
// ❌ Tidak bisa di-extend di media query
@media (max-width: 768px) {
    .mobile-element {
        @extend %desktop-element; // Error
    }
}

// ✅ Gunakan mixin
@mixin desktop-element { ... }
\`\`\`

## Contoh Lengkap

\`\`\`scss
// _base.scss
%container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

%flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

%grid {
    display: grid;
    gap: 20px;
}

// _typography.scss
%heading {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5em;
    color: #1a1a1a;
}

%text {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
}

// _components.scss
%button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    &:active {
        transform: translateY(0);
    }
}

%card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s ease;
    
    &:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }
}

// main.scss
.container {
    @extend %container;
}

.grid {
    @extend %grid;
    grid-template-columns: repeat(3, 1fr);
}

.hero {
    @extend %flex-center;
    min-height: 400px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    h1 {
        @extend %heading;
        font-size: 3rem;
        color: white;
    }
    
    p {
        @extend %text;
        color: rgba(255,255,255,0.9);
    }
}

.btn {
    &-primary {
        @extend %button;
        background: #3498db;
        color: white;
        
        &:hover {
            background: #2980b9;
        }
    }
    
    &-secondary {
        @extend %button;
        background: #2ecc71;
        color: white;
        
        &:hover {
            background: #27ae60;
        }
    }
    
    &-outline {
        @extend %button;
        background: transparent;
        border: 2px solid #3498db;
        color: #3498db;
        
        &:hover {
            background: #3498db;
            color: white;
        }
    }
}

.card {
    @extend %card;
    
    &-header {
        padding: 20px;
        border-bottom: 1px solid #eee;
        
        h2 {
            @extend %heading;
            font-size: 1.5rem;
            margin: 0;
        }
    }
    
    &-body {
        padding: 20px;
        
        p {
            @extend %text;
            margin: 0;
        }
    }
    
    &-footer {
        padding: 20px;
        background: #f8f9fa;
        @extend %flex-center;
    }
}

// Responsive
@media (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
    }
    
    .hero {
        min-height: 300px;
        padding: 20px;
        
        h1 {
            font-size: 2rem;
        }
    }
}

// Output CSS akan menggabungkan semua selector
// yang menggunakan @extend yang sama
\`\`\`
  `,
  quiz: [
    {
      question: "Keyword untuk inheritance di Sass adalah?",
      options: [
        "@inherit",
        "@extend",
        "@use",
        "@mixin"
      ],
      correctAnswer: 1
    },
    {
      question: "Placeholder selector dimulai dengan?",
      options: [
        "$",
        "%",
        "&",
        "@"
      ],
      correctAnswer: 1
    },
    {
      question: "Keuntungan @extend dibanding @mixin adalah?",
      options: [
        "Lebih cepat",
        "Menghemat ukuran CSS",
        "Mendukung parameter",
        "Lebih mudah"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Inheritance System",
      code: `// _placeholders.scss - Placeholder System

// 1. Layout Placeholders
%container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    
    @media (max-width: 768px) {
        padding: 0 16px;
    }
}

%flex {
    display: flex;
}

%flex-center {
    @extend %flex;
    align-items: center;
    justify-content: center;
}

%flex-between {
    @extend %flex;
    align-items: center;
    justify-content: space-between;
}

%flex-column {
    @extend %flex;
    flex-direction: column;
}

%grid {
    display: grid;
}

%grid-2 {
    @extend %grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

%grid-3 {
    @extend %grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

%grid-4 {
    @extend %grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

// 2. Typography Placeholders
%heading {
    font-family: 'Inter', -apple-system, sans-serif;
    font-weight: 700;
    line-height: 1.2;
    color: #1a1a1a;
}

%h1 {
    @extend %heading;
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
        font-size: 2rem;
    }
}

%h2 {
    @extend %heading;
    font-size: 2rem;
    
    @media (max-width: 768px) {
        font-size: 1.75rem;
    }
}

%h3 {
    @extend %heading;
    font-size: 1.5rem;
}

%h4 {
    @extend %heading;
    font-size: 1.25rem;
}

%text {
    font-family: 'Inter', -apple-system, sans-serif;
    line-height: 1.6;
    color: #333;
}

%text-sm {
    @extend %text;
    font-size: 0.875rem;
}

%text-base {
    @extend %text;
    font-size: 1rem;
}

%text-lg {
    @extend %text;
    font-size: 1.125rem;
}

%text-muted {
    @extend %text;
    color: #6c757d;
}

// 3. Component Placeholders
%button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    text-align: center;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    &:active {
        transform: translateY(0);
    }
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
}

%button-primary {
    @extend %button;
    background: #3498db;
    color: white;
    
    &:hover {
        background: #2980b9;
    }
}

%button-success {
    @extend %button;
    background: #2ecc71;
    color: white;
    
    &:hover {
        background: #27ae60;
    }
}

%button-danger {
    @extend %button;
    background: #e74c3c;
    color: white;
    
    &:hover {
        background: #c0392b;
    }
}

%button-outline {
    @extend %button;
    background: transparent;
    border: 2px solid currentColor;
    
    &:hover {
        background: currentColor;
        color: white;
    }
}

%card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    
    &:hover {
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        transform: translateY(-4px);
    }
}

%card-hover {
    @extend %card;
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    }
}

%badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

%badge-primary {
    @extend %badge;
    background: #3498db;
    color: white;
}

%badge-success {
    @extend %badge;
    background: #2ecc71;
    color: white;
}

%badge-danger {
    @extend %badge;
    background: #e74c3c;
    color: white;
}

%badge-warning {
    @extend %badge;
    background: #f39c12;
    color: white;
}

// 4. Utility Placeholders
%sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}

%clearfix {
    &::after {
        content: '';
        display: table;
        clear: both;
    }
}

// ============================================
// 5. Usage Examples
// ============================================
.container {
    @extend %container;
}

.header {
    @extend %flex-between;
    padding: 20px 0;
}

.grid {
    @extend %grid-3;
    
    @media (max-width: 768px) {
        @extend %grid-2;
    }
    
    @media (max-width: 576px) {
        @extend %grid;
        grid-template-columns: 1fr;
    }
}

.card {
    @extend %card-hover;
    
    &-header {
        padding: 20px;
        border-bottom: 1px solid #eee;
        
        h2 {
            @extend %h3;
            margin: 0;
        }
    }
    
    &-body {
        padding: 20px;
        
        p {
            @extend %text-base;
            margin: 0 0 10px;
        }
    }
    
    &-footer {
        padding: 20px;
        background: #f8f9fa;
        @extend %flex-between;
    }
}

.btn {
    &-primary {
        @extend %button-primary;
    }
    
    &-success {
        @extend %button-success;
    }
    
    &-danger {
        @extend %button-danger;
    }
    
    &-outline {
        @extend %button-outline;
        color: #3498db;
        
        &:hover {
            background: #3498db;
            color: white;
        }
    }
}

.badge {
    &-primary { @extend %badge-primary; }
    &-success { @extend %badge-success; }
    &-danger { @extend %badge-danger; }
    &-warning { @extend %badge-warning; }
}

// Hidden element
.sr-only {
    @extend %sr-only;
}`,
      language: "scss"
    }
  ]
};