export const chapter = {
  slug: "best-practices",
  title: "Sass Best Practices",
  description: "Best practices dalam menggunakan Sass untuk CSS yang maintainable dan scalable.",
  icon: "SiSass",
  color: "#CC6699",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["sass-introduction"],
  tags: ["sass", "best-practices", "architecture", "maintainable"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Sass Best Practices

## 1. Architecture & Organization

### 7-1 Pattern
\`\`\`
scss/
├── abstracts/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _functions.scss
│   └── _placeholders.scss
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

### Import Order
\`\`\`scss
// main.scss
// 1. Abstracts
@use 'abstracts/variables';
@use 'abstracts/mixins';
@use 'abstracts/functions';
@use 'abstracts/placeholders';

// 2. Base
@use 'base/reset';
@use 'base/typography';
@use 'base/utilities';

// 3. Layout
@use 'layout/header';
@use 'layout/footer';
@use 'layout/sidebar';
@use 'layout/grid';

// 4. Components
@use 'components/buttons';
@use 'components/cards';
@use 'components/forms';
@use 'components/navigation';

// 5. Pages
@use 'pages/home';
@use 'pages/about';
@use 'pages/contact';

// 6. Themes
@use 'themes/light';
@use 'themes/dark';
\`\`\`

## 2. Naming Conventions

### Variables
\`\`\`scss
// ✅ Good
$primary-color: #3498db;
$font-size-base: 16px;
$spacing-unit: 8px;
$breakpoint-desktop: 1200px;

// ❌ Bad
$primary: #3498db;
$size: 16px;
$space: 8px;
$bp: 1200px;
\`\`\`

### Mixins
\`\`\`scss
// ✅ Good
@mixin flex-center { ... }
@mixin responsive($breakpoint) { ... }
@mixin text-ellipsis { ... }

// ❌ Bad
@mixin fc { ... }
@mixin r($b) { ... }
@mixin te { ... }
\`\`\`

### Functions
\`\`\`scss
// ✅ Good
@function get-color($key) { ... }
@function calculate-width($columns) { ... }
@function em($pixels) { ... }

// ❌ Bad
@function gc($k) { ... }
@function cw($c) { ... }
@function e($p) { ... }
\`\`\`

## 3. Nesting Best Practices

### Maximum 3-4 Levels
\`\`\`scss
// ✅ Good (3 levels)
.nav {
    ul {
        li {
            a { ... }
        }
    }
}

// ❌ Bad (5 levels)
.container {
    .row {
        .col {
            .card {
                .button { ... }
            }
        }
    }
}
\`\`\`

### Use & Selector Wisely
\`\`\`scss
// ✅ Good
.button {
    &-primary { ... }
    &-secondary { ... }
    
    &:hover { ... }
}

// ❌ Bad
.button {
    .container & { ... }
    .header & { ... }
    .footer & { ... }
}
\`\`\`

## 4. Variables Best Practices

### Organize Variables
\`\`\`scss
// _variables.scss
// Colors
$color-primary: #3498db;
$color-secondary: #2ecc71;
$color-danger: #e74c3c;

// Typography
$font-family-base: 'Inter', sans-serif;
$font-size-base: 16px;
$font-weight-normal: 400;

// Spacing
$spacing-unit: 8px;
$spacing-xs: $spacing-unit * 0.5;
$spacing-sm: $spacing-unit;
$spacing-md: $spacing-unit * 2;

// Breakpoints
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
\`\`\`

### Use Variables for Everything
\`\`\`scss
// ✅ Good
$border-radius: 4px;
.element {
    border-radius: $border-radius;
}

// ❌ Bad
.element {
    border-radius: 4px;
}
\`\`\`

## 5. Mixins vs Extend

### Use Mixins for:
- Parameterized styles
- Conditional logic
- Complex calculations
- Media queries

\`\`\`scss
// ✅ Use mixins
@mixin responsive($breakpoint) {
    @if $breakpoint == 'mobile' {
        @media (max-width: 576px) { @content; }
    }
}

@mixin button($color) {
    background: $color;
    padding: 10px 20px;
}
\`\`\`

### Use Extend for:
- Static styles
- Semantic relationships
- Placeholder selectors

\`\`\`scss
// ✅ Use extend
%text-base {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
}

.paragraph {
    @extend %text-base;
    margin-bottom: 20px;
}
\`\`\`

## 6. Performance Best Practices

### Avoid Over-Nesting
\`\`\`scss
// ❌ Bad (overly specific)
.container .row .col .card .title { ... }

// ✅ Good
.card-title { ... }
\`\`\`

### Use @extend Wisely
\`\`\`scss
// ✅ Good (grouped selectors)
%button {
    padding: 10px 20px;
}
.btn-primary, .btn-secondary {
    @extend %button;
}

// ❌ Bad (too many extends)
.element {
    @extend %a;
    @extend %b;
    @extend %c;
    @extend %d;
}
\`\`\`

### Compress Output
\`\`\`bash
# Production build
sass input.scss output.css --style=compressed
\`\`\`

## 7. Documentation Best Practices

### Comment Your Code
\`\`\`scss
/// Primary color for the theme
/// @type Color
$primary-color: #3498db !default;

/// Creates a button with the specified color
/// @param {Color} $color - The button color
/// @param {String} $size - The button size (sm, md, lg)
@mixin button($color, $size: 'md') {
    // ...
}

/// Calculates the width of a column
/// @param {Number} $columns - Number of columns
/// @param {Number} $total - Total columns (default: 12)
/// @return {Percentage}
@function col-width($columns, $total: 12) {
    @return percentage($columns / $total);
}
\`\`\`

## 8. SCSS vs CSS

### Use SCSS Features
\`\`\`scss
// ✅ Use SCSS features
$color: #3498db;
.element {
    background: $color;
    color: darken($color, 10%);
}

// ❌ Don't write plain CSS
.element {
    background: #3498db;
    color: #2980b9;
}
\`\`\`

## 9. Testing Best Practices

### Test Your Mixins
\`\`\`scss
// Test mixin
@mixin button {
    padding: 10px 20px;
}

// Test function
@function add($a, $b) {
    @return $a + $b;
}

// Test with sample
.test-button {
    @include button;
}

.test-add {
    value: add(10, 20); // 30
}
\`\`\`

## 10. Accessibility

### Use Contrast
\`\`\`scss
// Ensure text is readable
.element {
    color: $primary-color;
    background: $background-color;
    
    // Check contrast
    @if color.lightness($primary-color) < 50% {
        color: white;
    } @else {
        color: black;
    }
}
\`\`\`

## Checklist

### Before Starting
- [ ] Plan architecture
- [ ] Define variables
- [ ] Setup folder structure
- [ ] Choose naming convention

### During Development
- [ ] Use @use instead of @import
- [ ] Keep nesting shallow
- [ ] Use variables consistently
- [ ] Document complex code
- [ ] Use mixins for reusable code
- [ ] Use @extend for inheritance

### Before Production
- [ ] Remove unused code
- [ ] Optimize with --style=compressed
- [ ] Check browser compatibility
- [ ] Test responsiveness
- [ ] Validate accessibility
- [ ] Review performance

## Common Mistakes to Avoid

### 1. Over-Nesting
\`\`\`scss
// ❌ Avoid
.header .nav .menu .item .link { ... }

// ✅ Better
.nav-link { ... }
\`\`\`

### 2. Not Using Variables
\`\`\`scss
// ❌ Avoid
.element {
    color: #3498db;
    border: 1px solid #3498db;
}

// ✅ Better
$primary: #3498db;
.element {
    color: $primary;
    border: 1px solid $primary;
}
\`\`\`

### 3. Using @import
\`\`\`scss
// ❌ Avoid
@import 'variables';
@import 'mixins';

// ✅ Better
@use 'variables';
@use 'mixins';
\`\`\`

### 4. Hardcoded Values
\`\`\`scss
// ❌ Avoid
.element {
    padding: 20px;
    margin: 10px;
}

// ✅ Better
$spacing: 8px;
.element {
    padding: $spacing * 2.5; // 20px
    margin: $spacing * 1.25; // 10px
}
\`\`\`

## Example: Complete Best Practices

\`\`\`scss
// _variables.scss
$theme-colors: (
    'primary': #3498db,
    'secondary': #2ecc71,
    'danger': #e74c3c
);

$spacing-unit: 8px;
$spacers: (
    'xs': $spacing-unit * 0.5,
    'sm': $spacing-unit,
    'md': $spacing-unit * 2,
    'lg': $spacing-unit * 3,
    'xl': $spacing-unit * 4
);

// _mixins.scss
@mixin flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

@mixin card($shadow: true) {
    background: white;
    border-radius: 8px;
    
    @if $shadow {
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
}

// _components.scss
.card {
    @include card(true);
    
    &-header {
        padding: map-get($spacers, 'md');
        border-bottom: 1px solid #eee;
    }
    
    &-body {
        padding: map-get($spacers, 'md');
    }
}

// main.scss
@use 'variables';
@use 'mixins';
@use 'components';
\`\`\`
  `,
  quiz: [
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
      question: "Apa yang harus digunakan untuk parameterized styles?",
      options: [
        "@extend",
        "@mixin",
        "@function",
        "@import"
      ],
      correctAnswer: 1
    },
    {
      question: "Apa yang harus digunakan untuk static styles inheritance?",
      options: [
        "@extend",
        "@mixin",
        "@function",
        "@import"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Best Practices System",
      code: `// _variables.scss
// 1. Colors
$colors: (
    'primary': #3b82f6,
    'secondary': #6b7280,
    'success': #10b981,
    'danger': #ef4444,
    'warning': #f59e0b,
    'info': #3b82f6
);

// 2. Typography
$font-family: (
    'sans': ('Inter', -apple-system, sans-serif),
    'serif': ('Georgia', serif),
    'mono': ('JetBrains Mono', monospace)
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
    '5xl': 3rem
);

// 3. Spacing
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

// 4. Breakpoints
$breakpoints: (
    'sm': 640px,
    'md': 768px,
    'lg': 1024px,
    'xl': 1280px,
    '2xl': 1536px
);

// 5. Shadows
$shadows: (
    'sm': 0 1px 2px 0 rgb(0 0 0 / 0.05),
    'base': 0 1px 3px 0 rgb(0 0 0 / 0.1),
    'md': 0 4px 6px -1px rgb(0 0 0 / 0.1),
    'lg': 0 10px 15px -3px rgb(0 0 0 / 0.1),
    'xl': 0 20px 25px -5px rgb(0 0 0 / 0.1)
);

// 6. Z-index
$z-index: (
    'dropdown': 1000,
    'sticky': 1020,
    'fixed': 1030,
    'modal': 1050,
    'popover': 1060,
    'tooltip': 1070
);

// _functions.scss
@function color($key) {
    @return map-get($colors, $key);
}

@function spacing($key) {
    @return map-get($spacers, $key);
}

@function breakpoint($key) {
    @return map-get($breakpoints, $key);
}

@function shadow($key) {
    @return map-get($shadows, $key);
}

@function z-index($key) {
    @return map-get($z-index, $key);
}

// _mixins.scss
@mixin respond-to($breakpoint) {
    $bp: breakpoint($breakpoint);
    @if $bp {
        @media (max-width: $bp) {
            @content;
        }
    }
}

@mixin flex($direction: row, $justify: flex-start, $align: stretch) {
    display: flex;
    flex-direction: $direction;
    justify-content: $justify;
    align-items: $align;
}

@mixin grid($columns: 3, $gap: 20px) {
    display: grid;
    grid-template-columns: repeat($columns, 1fr);
    gap: $gap;
}

@mixin button($variant: 'primary', $size: 'base') {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: spacing(2) spacing(4);
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    
    $bg: color($variant);
    background: $bg;
    color: contrast($bg);
    
    &:hover {
        background: darken($bg, 10%);
        transform: translateY(-2px);
        box-shadow: shadow('md');
    }
    
    &:active {
        transform: translateY(0);
    }
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
    
    @if $size == 'sm' {
        padding: spacing(1) spacing(3);
        font-size: map-get($font-sizes, 'sm');
    }
    @if $size == 'lg' {
        padding: spacing(3) spacing(6);
        font-size: map-get($font-sizes, 'lg');
    }
}

@mixin card($shadow: 'md') {
    background: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: shadow($shadow);
    transition: all 0.3s ease;
    
    &:hover {
        box-shadow: shadow('lg');
        transform: translateY(-4px);
    }
}

// _components/buttons.scss
.btn {
    @include button();
    
    &-sm {
        @include button($size: 'sm');
    }
    
    &-lg {
        @include button($size: 'lg');
    }
    
    &-outline {
        background: transparent;
        border: 2px solid color('primary');
        color: color('primary');
        
        &:hover {
            background: color('primary');
            color: white;
        }
    }
}

// _components/cards.scss
.card {
    @include card();
    
    &-header {
        padding: spacing(4);
        border-bottom: 1px solid #e5e7eb;
        
        h2, h3 {
            margin: 0;
            font-size: map-get($font-sizes, 'xl');
            font-weight: 600;
        }
    }
    
    &-body {
        padding: spacing(4);
    }
    
    &-footer {
        padding: spacing(4);
        background: #f9fafb;
        border-top: 1px solid #e5e7eb;
    }
}

// _layouts/grid.scss
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 spacing(4);
    
    @include respond-to('lg') {
        padding: 0 spacing(3);
    }
    
    @include respond-to('md') {
        padding: 0 spacing(2);
    }
}

.grid {
    @include grid(3, spacing(4));
    
    @include respond-to('lg') {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @include respond-to('md') {
        grid-template-columns: 1fr;
    }
}

// main.scss
@use 'abstracts/variables';
@use 'abstracts/functions';
@use 'abstracts/mixins';
@use 'base/reset';
@use 'base/typography';
@use 'components/buttons';
@use 'components/cards';
@use 'layouts/grid';

// Custom styles
.hero {
    padding: spacing(10) 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    h1 {
        font-size: map-get($font-sizes, '5xl');
        font-weight: 700;
        margin-bottom: spacing(4);
        
        @include respond-to('md') {
            font-size: map-get($font-sizes, '3xl');
        }
    }
    
    p {
        font-size: map-get($font-sizes, 'lg');
        margin-bottom: spacing(6);
        opacity: 0.9;
    }
}`,
      language: "scss"
    }
  ]
};