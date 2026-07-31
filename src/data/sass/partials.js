export const chapter = {
  slug: "partials",
  title: "Partials & Import",
  description: "Memecah stylesheet menjadi file-file kecil dengan partials dan import.",
  icon: "SiSass",
  color: "#CC6699",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["sass-introduction"],
  tags: ["sass", "partials", "import", "modular"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Partials?

Partials adalah file Sass terpisah yang di-import ke dalam file utama. Nama file partial dimulai dengan underscore (_) untuk menandakan bahwa file tersebut tidak akan di-compile menjadi CSS terpisah.

## Struktur Partials

### 1. Partials File
\`\`\`scss
// _variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-family: 'Arial', sans-serif;

// _mixins.scss
@mixin button-base {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

// _reset.scss
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
\`\`\`

### 2. Main File
\`\`\`scss
// main.scss
@import 'variables';
@import 'mixins';
@import 'reset';
@import 'components/buttons';
@import 'components/cards';
@import 'layout/header';
@import 'layout/footer';
\`\`\`

## Organisasi Partials

### Folder Structure

\`\`\`
scss/
├── abstracts/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _functions.scss
│   └── _config.scss
├── base/
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _utilities.scss
├── components/
│   ├── _buttons.scss
│   ├── _cards.scss
│   ├── _forms.scss
│   └── _navigation.scss
├── layout/
│   ├── _header.scss
│   ├── _footer.scss
│   ├── _sidebar.scss
│   └── _grid.scss
├── pages/
│   ├── _home.scss
│   ├── _about.scss
│   └── _contact.scss
├── themes/
│   ├── _light.scss
│   └── _dark.scss
└── main.scss
\`\`\`

### Main File dengan Organisasi

\`\`\`scss
// main.scss - Entry Point

// 1. Abstracts
@import 'abstracts/variables';
@import 'abstracts/mixins';
@import 'abstracts/functions';
@import 'abstracts/config';

// 2. Base
@import 'base/reset';
@import 'base/typography';
@import 'base/utilities';

// 3. Layout
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/grid';

// 4. Components
@import 'components/buttons';
@import 'components/cards';
@import 'components/forms';
@import 'components/navigation';

// 5. Pages
@import 'pages/home';
@import 'pages/about';
@import 'pages/contact';

// 6. Themes
@import 'themes/light';
@import 'themes/dark';
\`\`\`

## @import vs @use vs @forward

### 1. @import (Legacy)
\`\`\`scss
// @import - Global scope
@import 'variables';
@import 'mixins';
@import 'reset';

// Semua variable dan mixins global
// Bisa menyebabkan konflik nama
\`\`\`

### 2. @use (Modern)
\`\`\`scss
// @use - Namespaced scope
@use 'variables';
@use 'mixins';
@use 'reset';

// Akses dengan namespace
.element {
    color: variables.$primary-color;
    @include mixins.button-base;
}

// Atau dengan as
@use 'variables' as vars;
@use 'mixins' as m;

.element {
    color: vars.$primary-color;
    @include m.button-base;
}
\`\`\`

### 3. @forward
\`\`\`scss
// _index.scss - Forward multiple files
@forward 'variables';
@forward 'mixins';
@forward 'functions';

// Main file
@use 'index' as *;

// Akses langsung tanpa namespace
.element {
    color: $primary-color;
    @include button-base;
}
\`\`\`

## @use dengan Konfigurasi

### Variables dengan Default
\`\`\`scss
// _config.scss
$primary-color: #3498db !default;
$secondary-color: #2ecc71 !default;
$font-family: 'Arial', sans-serif !default;

// main.scss
@use 'config' with (
    $primary-color: #e74c3c,
    $font-family: 'Helvetica', sans-serif
);
\`\`\`

### Mixins dengan Default
\`\`\`scss
// _mixins.scss
@mixin button($bg: #3498db, $color: white) {
    background: $bg;
    color: $color;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
}

// main.scss
@use 'mixins';

.element {
    @include mixins.button(#e74c3c, white);
}
\`\`\`

## Best Practices

### 1. Naming Convention
\`\`\`scss
// ✅ Gunakan underscore
_variables.scss
_mixins.scss

// ❌ Jangan tanpa underscore
variables.scss
mixins.scss
\`\`\`

### 2. Organization
\`\`\`scss
// ✅ Organisasi yang jelas
abstracts/
base/
components/
layout/
pages/
themes/

// ❌ Semua di root
_variables.scss
_mixins.scss
_reset.scss
_buttons.scss
_header.scss
\`\`\`

### 3. Import Order
\`\`\`scss
// ✅ Urutan yang benar
1. Abstracts (variables, mixins, functions)
2. Base (reset, typography)
3. Layout (header, footer)
4. Components (buttons, cards)
5. Pages (home, about)
6. Themes (light, dark)

// ❌ Urutan acak
@import 'buttons';
@import 'variables';
@import 'header';
@import 'reset';
\`\`\`

### 4. @use instead of @import
\`\`\`scss
// ✅ Modern
@use 'variables';
@use 'mixins';

// ❌ Legacy
@import 'variables';
@import 'mixins';
\`\`\`

## Contoh Lengkap

\`\`\`scss
// _variables.scss
$colors: (
    primary: #3498db,
    secondary: #2ecc71,
    danger: #e74c3c,
    warning: #f39c12
);

$spacing: (
    xs: 4px,
    sm: 8px,
    md: 16px,
    lg: 24px,
    xl: 32px
);

// _mixins.scss
@mixin flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

@mixin responsive($breakpoint) {
    @if $breakpoint == sm {
        @media (max-width: 576px) { @content; }
    }
    @if $breakpoint == md {
        @media (max-width: 768px) { @content; }
    }
    @if $breakpoint == lg {
        @media (max-width: 992px) { @content; }
    }
}

// _buttons.scss
.btn {
    padding: map-get($spacing, md) map-get($spacing, lg);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &-primary {
        background: map-get($colors, primary);
        color: white;
    }
}

// main.scss
@use 'variables' as vars;
@use 'mixins' as m;
@use 'buttons';

.container {
    @include m.flex-center;
    padding: vars.$spacing;
}

.card {
    @include m.responsive(md) {
        padding: vars.$spacing;
    }
}
\`\`\`
  `,
  quiz: [
    {
      question: "Apa nama file partial di Sass?",
      options: [
        "Dimulai dengan underscore (_)",
        "Dimulai dengan dot (.)",
        "Dimulai dengan @",
        "Tidak ada aturan khusus"
      ],
      correctAnswer: 0
    },
    {
      question: "Perintah @use digunakan untuk?",
      options: [
        "Membuat variable",
        "Import file dengan namespace",
        "Membuat mixin",
        "Membuat function"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa fungsi @forward?",
      options: [
        "Membuat variable global",
        "Meneruskan import dari file lain",
        "Membuat function",
        "Membuat class"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Partial System",
      code: `// SCSS Architecture with Partials

// 1. abstracts/_variables.scss
$theme: (
    'colors': (
        'primary': #3498db,
        'secondary': #2ecc71,
        'danger': #e74c3c,
        'warning': #f39c12,
        'success': #27ae60,
        'info': #3498db,
        'dark': #2c3e50,
        'light': #ecf0f1
    ),
    'spacing': (
        'xs': 0.25rem,
        'sm': 0.5rem,
        'md': 1rem,
        'lg': 1.5rem,
        'xl': 2rem,
        '2xl': 3rem
    ),
    'breakpoints': (
        'sm': 576px,
        'md': 768px,
        'lg': 992px,
        'xl': 1200px
    ),
    'typography': (
        'font-family': ('Inter', -apple-system, sans-serif),
        'font-sizes': (
            'xs': 0.75rem,
            'sm': 0.875rem,
            'base': 1rem,
            'lg': 1.125rem,
            'xl': 1.25rem,
            '2xl': 1.5rem,
            '3xl': 1.875rem
        )
    )
);

// 2. abstracts/_functions.scss
@function theme($category, $key) {
    @return map-get(map-get($theme, $category), $key);
}

@function color($key) {
    @return theme('colors', $key);
}

@function spacing($key) {
    @return theme('spacing', $key);
}

@function breakpoint($key) {
    @return theme('breakpoints', $key);
}

// 3. abstracts/_mixins.scss
@mixin text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

@mixin aspect-ratio($width, $height) {
    position: relative;
    
    &::before {
        content: '';
        display: block;
        padding-top: ($height / $width) * 100%;
    }
    
    > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}

@mixin hover($property, $value) {
    transition: $property 0.3s ease;
    
    &:hover {
        #{$property}: $value;
    }
}

// 4. base/_reset.scss
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    font-family: theme('typography', 'font-family');
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

// 5. components/_buttons.scss
@use 'abstracts/variables' as vars;
@use 'abstracts/functions' as fn;
@use 'abstracts/mixins' as m;

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: fn.spacing('sm') fn.spacing('lg');
    font-size: fn.theme('typography', 'font-sizes', 'base');
    font-weight: 600;
    border: 2px solid transparent;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.3s ease;
    
    @each $name, $color in fn.theme('colors') {
        &-#{$name} {
            background: $color;
            color: white;
            
            &:hover {
                background: darken($color, 10%);
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba($color, 0.3);
            }
            
            &:active {
                transform: translateY(0);
            }
        }
    }
    
    &-outline {
        background: transparent;
        
        @each $name, $color in fn.theme('colors') {
            &-#{$name} {
                color: $color;
                border-color: $color;
                
                &:hover {
                    background: $color;
                    color: white;
                }
            }
        }
    }
    
    &-sm {
        padding: fn.spacing('xs') fn.spacing('md');
        font-size: fn.theme('typography', 'font-sizes', 'sm');
    }
    
    &-lg {
        padding: fn.spacing('md') fn.spacing('xl');
        font-size: fn.theme('typography', 'font-sizes', 'lg');
    }
    
    &-block {
        width: 100%;
        display: flex;
    }
    
    &-disabled {
        opacity: 0.6;
        pointer-events: none;
        cursor: not-allowed;
    }
}

// 6. main.scss
@use 'abstracts/variables';
@use 'abstracts/functions';
@use 'abstracts/mixins';
@use 'base/reset';
@use 'components/buttons';

// Custom styles
.app {
    min-height: 100vh;
    background: #f8f9fa;
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 fn.spacing('lg');
    }
}
`,
      language: "scss"
    }
  ]
};