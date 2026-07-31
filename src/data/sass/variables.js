export const chapter = {
  slug: "variables",
  title: "Variables",
  description: "Menggunakan variabel di Sass untuk menyimpan nilai yang reusable.",
  icon: "SiSass",
  color: "#CC6699",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["sass-introduction"],
  tags: ["sass", "variables", "css", "reusable"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Variables?

Variables di Sass digunakan untuk menyimpan nilai yang bisa digunakan kembali di seluruh stylesheet. Ini membuat kode lebih DRY (Don't Repeat Yourself) dan mudah dikelola.

## Mendefinisikan Variables

\`\`\`scss
// Syntax: $nama-variable: nilai;
$primary-color: #3498db;
$font-size: 16px;
$padding: 20px;
$border-radius: 4px;

// Menggunakan variable
.button {
    color: $primary-color;
    font-size: $font-size;
    padding: $padding;
    border-radius: $border-radius;
}
\`\`\`

## Tipe Data Variables

### 1. Numbers
\`\`\`scss
$font-size: 16px;
$line-height: 1.5;
$z-index: 1000;
$opacity: 0.8;
$scale: 1.2;
\`\`\`

### 2. Strings
\`\`\`scss
$font-family: 'Arial', sans-serif;
$name: "My Project";
$direction: left;
$display: flex;
\`\`\`

### 3. Colors
\`\`\`scss
$primary: #3498db;
$secondary: rgba(52, 152, 219, 0.5);
$danger: hsl(0, 80%, 50%);
$warning: #f39c12;
\`\`\`

### 4. Booleans
\`\`\`scss
$is-dark: true;
$is-rtl: false;
$is-mobile: false;
$debug: true;
\`\`\`

### 5. Lists
\`\`\`scss
$colors: #3498db, #2ecc71, #e74c3c;
$sizes: 10px, 20px, 30px, 40px;
$breakpoints: 576px, 768px, 992px, 1200px;

// Mengakses item
$first-color: nth($colors, 1); // #3498db
$second-size: nth($sizes, 2); // 20px
\`\`\`

### 6. Maps
\`\`\`scss
$theme: (
    primary: #3498db,
    secondary: #2ecc71,
    danger: #e74c3c,
    warning: #f39c12,
    dark: #2c3e50,
    light: #ecf0f1
);

$spacing: (
    xs: 4px,
    sm: 8px,
    md: 16px,
    lg: 24px,
    xl: 32px,
    xxl: 48px
);

// Mengakses map
$primary-color: map-get($theme, primary); // #3498db
$large-spacing: map-get($spacing, lg); // 24px
\`\`\`

## Scope Variables

### Local Scope
\`\`\`scss
$global-color: #3498db; // Global

.button {
    $local-color: #2ecc71; // Local
    color: $local-color; // Bisa diakses
}

// color: $local-color; // Error - tidak bisa diakses di luar
\`\`\`

### Global Scope dengan !global
\`\`\`scss
$color: #3498db;

.button {
    $color: #2ecc71 !global;
    color: $color; // #2ecc71
}

// $color sekarang #2ecc71 (global)
\`\`\`

### Default Values
\`\`\`scss
$primary-color: #3498db !default;

// Jika belum didefinisikan, gunakan default
// Jika sudah didefinisikan, gunakan nilai yang ada
\`\`\`

## Variable Interpolation

\`\`\`scss
$name: "primary";
$color: #3498db;

// Interpolasi untuk nama
.#{$name}-button {
    background: $color;
}

// Output: .primary-button { background: #3498db; }

// Interpolasi untuk properti
$property: "background-color";
#{$property}: $color;

// Output: background-color: #3498db;
\`\`\`

## Best Practices Variables

### 1. Naming Convention
\`\`\`scss
// Camel case
$primaryColor: #3498db;

// Snake case (recommended)
$primary-color: #3498db;

// Prefix untuk komponen
$btn-primary-bg: #3498db;
$btn-primary-color: white;
\`\`\`

### 2. Organize Variables

\`\`\`scss
// _variables.scss
// Colors
$color-primary: #3498db;
$color-secondary: #2ecc71;
$color-danger: #e74c3c;
$color-warning: #f39c12;

// Typography
$font-family-base: 'Inter', sans-serif;
$font-size-base: 16px;
$font-weight-normal: 400;
$font-weight-bold: 700;

// Spacing
$spacing-unit: 8px;
$spacing-xs: $spacing-unit * 0.5;
$spacing-sm: $spacing-unit;
$spacing-md: $spacing-unit * 2;
$spacing-lg: $spacing-unit * 3;
$spacing-xl: $spacing-unit * 4;

// Breakpoints
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;

// Z-index
$z-index-dropdown: 1000;
$z-index-sticky: 1020;
$z-index-fixed: 1030;
$z-index-modal-backdrop: 1040;
$z-index-modal: 1050;
$z-index-popover: 1060;
$z-index-tooltip: 1070;

// Borders
$border-radius-sm: 4px;
$border-radius-md: 8px;
$border-radius-lg: 12px;
$border-radius-circle: 50%;

// Shadows
$shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
$shadow-md: 0 4px 6px rgba(0,0,0,0.1);
$shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
$shadow-xl: 0 20px 25px rgba(0,0,0,0.1);

// Transitions
$transition-fast: 0.15s ease;
$transition-base: 0.3s ease;
$transition-slow: 0.5s ease;
\`\`\`

## Contoh Lengkap

\`\`\`scss
// _variables.scss
// Theme
$theme-colors: (
    'primary': #3498db,
    'secondary': #2ecc71,
    'danger': #e74c3c,
    'warning': #f39c12,
    'info': #3498db,
    'dark': #2c3e50,
    'light': #ecf0f1
);

// Spacing
$spacers: (
    0: 0,
    1: 0.25rem,
    2: 0.5rem,
    3: 1rem,
    4: 1.5rem,
    5: 3rem
);

// Font Sizes
$font-sizes: (
    xs: 0.75rem,
    sm: 0.875rem,
    base: 1rem,
    lg: 1.125rem,
    xl: 1.25rem,
    2xl: 1.5rem,
    3xl: 1.875rem,
    4xl: 2.25rem,
    5xl: 3rem
);

// Theme configuration
$config: (
    colors: $theme-colors,
    spacing: $spacers,
    font-sizes: $font-sizes,
    breakpoints: (
        sm: 576px,
        md: 768px,
        lg: 992px,
        xl: 1200px
    ),
    shadows: (
        sm: 0 1px 2px 0 rgb(0 0 0 / 0.05),
        base: 0 1px 3px 0 rgb(0 0 0 / 0.1),
        md: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        lg: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
    )
);

// Usage
.button {
    background: map-get($theme-colors, 'primary');
    padding: map-get($spacers, 3) map-get($spacers, 4);
    font-size: map-get($font-sizes, 'lg');
    box-shadow: map-get(map-get($config, shadows), 'md');
}
\`\`\`
  `,
  quiz: [
    {
      question: "Syntax untuk mendefinisikan variable di Sass adalah?",
      options: [
        "@variable $name",
        "$name: value",
        "var($name)",
        "--name: value"
      ],
      correctAnswer: 1
    },
    {
      question: "Tipe data di Sass yang digunakan untuk menyimpan key-value pairs adalah?",
      options: [
        "List",
        "Map",
        "Array",
        "Object"
      ],
      correctAnswer: 1
    },
    {
      question: "Keyword untuk membuat variable menjadi global adalah?",
      options: [
        "!global",
        "global",
        "@global",
        "!important"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Variables System",
      code: `// _variables.scss - Complete Design System
// 1. Colors
$colors: (
    'blue': (
        50: #eff6ff,
        100: #dbeafe,
        200: #bfdbfe,
        300: #93c5fd,
        400: #60a5fa,
        500: #3b82f6,
        600: #2563eb,
        700: #1d4ed8,
        800: #1e40af,
        900: #1e3a8a
    ),
    'gray': (
        50: #f9fafb,
        100: #f3f4f6,
        200: #e5e7eb,
        300: #d1d5db,
        400: #9ca3af,
        500: #6b7280,
        600: #4b5563,
        700: #374151,
        800: #1f2937,
        900: #111827
    )
);

// 2. Semantic Colors
$semantic: (
    'primary': map-get($colors, 'blue', 500),
    'success': #10b981,
    'warning': #f59e0b,
    'danger': #ef4444,
    'info': #3b82f6
);

// 3. Typography
$font-family-sans: 'Inter', system-ui, -apple-system, sans-serif;
$font-family-serif: 'Merriweather', serif;
$font-family-mono: 'JetBrains Mono', 'Courier New', monospace;

$font-weights: (
    'thin': 100,
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semibold': 600,
    'bold': 700,
    'extrabold': 800,
    'black': 900
);

$font-sizes: (
    'xs': 0.75rem,
    'sm': 0.875rem,
    'base': 1rem,
    'lg': 1.125rem,
    'xl': 1.25rem,
    '2xl': 1.5rem,
    '3xl': 1.875rem,
    '4xl': 2.25rem,
    '5xl': 3rem,
    '6xl': 3.75rem,
    '7xl': 4.5rem
);

$line-heights: (
    'none': 1,
    'tight': 1.25,
    'snug': 1.375,
    'normal': 1.5,
    'relaxed': 1.625,
    'loose': 2
);

// 4. Spacing
$spacing-unit: 0.25rem;
$spacers: (
    0: 0,
    1: $spacing-unit * 1,
    2: $spacing-unit * 2,
    3: $spacing-unit * 3,
    4: $spacing-unit * 4,
    5: $spacing-unit * 5,
    6: $spacing-unit * 6,
    7: $spacing-unit * 7,
    8: $spacing-unit * 8,
    9: $spacing-unit * 9,
    10: $spacing-unit * 10
);

// 5. Breakpoints
$breakpoints: (
    'sm': 640px,
    'md': 768px,
    'lg': 1024px,
    'xl': 1280px,
    '2xl': 1536px
);

// 6. Borders
$radius: (
    'none': 0,
    'sm': 0.125rem,
    'base': 0.25rem,
    'md': 0.375rem,
    'lg': 0.5rem,
    'xl': 0.75rem,
    '2xl': 1rem,
    '3xl': 1.5rem,
    'full': 9999px
);

// 7. Shadows
$shadows: (
    'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    'base': '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    'md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'
);

// 8. Transitions
$transitions: (
    'none': 'none',
    'fast': '150ms ease',
    'base': '250ms ease',
    'slow': '350ms ease',
    'slower': '500ms ease'
);

// 9. Z-index
$z-index: (
    'auto': 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
    'dropdown': 1000,
    'sticky': 1020,
    'fixed': 1030,
    'modal-backdrop': 1040,
    'modal': 1050,
    'popover': 1060,
    'tooltip': 1070
);
`,
      language: "scss"
    }
  ]
};