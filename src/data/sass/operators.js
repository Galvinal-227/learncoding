export const chapter = {
  slug: "operators",
  title: "Operators",
  description: "Menggunakan operator di Sass untuk perhitungan dan logika.",
  icon: "SiSass",
  color: "#CC6699",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["sass-introduction", "sass-variables"],
  tags: ["sass", "operators", "math", "logic", "comparison"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Operators?

Operators di Sass digunakan untuk melakukan operasi matematika, perbandingan, dan logika pada nilai-nilai di Sass.

## Arithmetic Operators

### Penjumlahan (+)
\`\`\`scss
// Numbers
$width: 100px + 50px; // 150px
$height: 20 + 30; // 50

// Strings
$name: 'Hello' + ' World'; // 'Hello World'
$class: 'btn-' + 'primary'; // 'btn-primary'
\`\`\`

### Pengurangan (-)
\`\`\`scss
$width: 100px - 30px; // 70px
$margin: 20 - 5; // 15
$padding: 1rem - 0.5rem; // 0.5rem
\`\`\`

### Perkalian (*)
\`\`\`scss
$width: 100px * 2; // 200px
$height: 50% * 3; // 150%
$scale: 1.5 * 2; // 3
\`\`\`

### Pembagian (/)
\`\`\`scss
$width: 200px / 2; // 100px
$height: 100% / 4; // 25%
$result: 20 / 5; // 4
\`\`\`

### Modulus (%)
\`\`\`scss
$remainder: 10 % 3; // 1
$even: 4 % 2; // 0
$odd: 5 % 2; // 1
\`\`\`

## Comparison Operators

### Equal (==)
\`\`\`scss
@if 10 == 10 {
    // true
}

@if 10px == 10px {
    // true
}

@if 'hello' == 'hello' {
    // true
}
\`\`\`

### Not Equal (!=)
\`\`\`scss
@if 10 != 20 {
    // true
}

@if 10px != 20px {
    // true
}
\`\`\`

### Greater Than (>)
\`\`\`scss
@if 20 > 10 {
    // true
}

@if 100px > 50px {
    // true
}
\`\`\`

### Less Than (<)
\`\`\`scss
@if 10 < 20 {
    // true
}

@if 50px < 100px {
    // true
}
\`\`\`

### Greater or Equal (>=)
\`\`\`scss
@if 20 >= 20 {
    // true
}

@if 100px >= 50px {
    // true
}
\`\`\`

### Less or Equal (<=)
\`\`\`scss
@if 10 <= 20 {
    // true
}

@if 50px <= 100px {
    // true
}
\`\`\`

## Logical Operators

### AND (and)
\`\`\`scss
@if $width > 100px and $height > 50px {
    // Kedua kondisi harus true
}

@if $is-mobile and $is-touch {
    // Kedua kondisi true
}
\`\`\`

### OR (or)
\`\`\`scss
@if $is-mobile or $is-tablet {
    // Satu kondisi true
}

@if $color == red or $color == blue {
    // Satu kondisi true
}
\`\`\`

### NOT (not)
\`\`\`scss
@if not $is-mobile {
    // Kondisi false
}

@if not $is-dark {
    // false = light
}
\`\`\`

## String Operators

### Concatenation (+)
\`\`\`scss
$class: 'btn' + '-' + 'primary'; // 'btn-primary'
$url: 'https://' + 'example.com'; // 'https://example.com'
$selector: '.' + $class; // '.btn-primary'
\`\`\`

### Interpolation (#{})
\`\`\`scss
$name: 'primary';
$color: #3498db;

.#{$name}-button {
    color: $color;
}

// Output: .primary-button { color: #3498db; }
\`\`\`

## Color Operators

\`\`\`scss
// Addition
$color: #3498db + #111; // #45a9ec

// Subtraction
$color: #3498db - #111; // #2387ca

// Multiplication
$color: #3498db * 2; // Tidak valid untuk warna

// Mixing colors with operators
$color1: #3498db;
$color2: #2ecc71;
$mixed: $color1 + $color2; // #62ff4c
\`\`\`

## Unit Operations

\`\`\`scss
// Same units
$width: 100px + 50px; // 150px
$margin: 2rem + 1.5rem; // 3.5rem

// Different units (konsisten)
$result: 10px + 5; // 15px (integer ditambahkan)
$result: 20px - 5px; // 15px

// Percentages
$width: 50% + 25%; // 75%
$height: 100% / 2; // 50%

// Complex units
$speed: 100px / 2s; // 50px/s
$density: 10px / 5px; // 2
\`\`\`

## Advanced Examples

### Conditional Styling
\`\`\`scss
@function get-color($type) {
    @if $type == 'primary' {
        @return #3498db;
    } @else if $type == 'secondary' {
        @return #2ecc71;
    } @else if $type == 'danger' {
        @return #e74c3c;
    } @else {
        @return #666;
    }
}

.element {
    color: get-color('primary');
}

// Responsive with operators
$screen-width: 100vw;

.element {
    font-size: $screen-width / 100 + 12px;
    
    @if $screen-width < 768px {
        padding: 10px;
    } @else {
        padding: 20px;
    }
}
\`\`\`

### Grid System with Operators
\`\`\`scss
$grid-columns: 12;
$grid-gap: 20px;

@function column-width($columns, $total: $grid-columns) {
    @return (100% / $total) * $columns;
}

@function column-gap($count) {
    @return $grid-gap * ($count - 1);
}

.col {
    &-4 {
        width: column-width(4);
        margin-right: $grid-gap;
        
        &:last-child {
            margin-right: 0;
        }
    }
    
    &-6 {
        width: column-width(6);
    }
    
    &-8 {
        width: column-width(8);
    }
}
\`\`\`

### Responsive Typography with Operators
\`\`\`scss
$base-font: 16px;
$scale: 1.25;

@function font-size($level) {
    @return $base-font * pow($scale, $level);
}

@function pow($number, $exponent) {
    $result: 1;
    @for $i from 1 through $exponent {
        $result: $result * $number;
    }
    @return $result;
}

h1 { font-size: font-size(4); } // 16 * 1.25^4 = 39.06px
h2 { font-size: font-size(3); } // 16 * 1.25^3 = 31.25px
h3 { font-size: font-size(2); } // 16 * 1.25^2 = 25px
h4 { font-size: font-size(1); } // 16 * 1.25^1 = 20px
\`\`\`

## Best Practices

### 1. Use Parentheses for Clarity
\`\`\`scss
// ✅ Jelas
$width: (100px + 50px) / 2;
$result: (10 + 5) * 2;

// ❌ Tidak jelas
$width: 100px + 50px / 2;
$result: 10 + 5 * 2;
\`\`\`

### 2. Consistent Units
\`\`\`scss
// ✅ Unit konsisten
$width: 100px + 50px; // 150px

// ❌ Unit tidak konsisten
$width: 100px + 2rem; // Error
\`\`\`

### 3. Use Variables
\`\`\`scss
// ✅ Dengan variabel
$spacing: 20px;
$padding: $spacing * 2;

// ❌ Hardcode
$padding: 40px;
\`\`\`

## Complete Example

\`\`\`scss
// _operators.scss - Complete Operators System

// 1. Configuration
$grid-columns: 12;
$grid-gap: 20px;
$base-font: 16px;
$scale: 1.25;
$breakpoints: (
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
);

// 2. Helper Functions
@function pow($base, $exponent) {
    $result: 1;
    @for $i from 1 through $exponent {
        $result: $result * $base;
    }
    @return $result;
}

@function font-size($level) {
    @return $base-font * pow($scale, $level);
}

@function col-width($cols) {
    @return (100% / $grid-columns) * $cols;
}

@function breakpoint($name) {
    @return map-get($breakpoints, $name);
}

// 3. Grid System
.grid {
    display: grid;
    grid-template-columns: repeat($grid-columns, 1fr);
    gap: $grid-gap;
    
    .col {
        &-1 { grid-column: span 1; width: col-width(1); }
        &-2 { grid-column: span 2; width: col-width(2); }
        &-3 { grid-column: span 3; width: col-width(3); }
        &-4 { grid-column: span 4; width: col-width(4); }
        &-5 { grid-column: span 5; width: col-width(5); }
        &-6 { grid-column: span 6; width: col-width(6); }
        &-7 { grid-column: span 7; width: col-width(7); }
        &-8 { grid-column: span 8; width: col-width(8); }
        &-9 { grid-column: span 9; width: col-width(9); }
        &-10 { grid-column: span 10; width: col-width(10); }
        &-11 { grid-column: span 11; width: col-width(11); }
        &-12 { grid-column: span 12; width: col-width(12); }
    }
    
    // Responsive dengan operators
    @media (max-width: breakpoint('md')) {
        grid-template-columns: repeat(6, 1fr);
    }
    
    @media (max-width: breakpoint('sm')) {
        grid-template-columns: 1fr;
        
        .col {
            width: 100% !important;
            grid-column: span 1 !important;
        }
    }
}

// 4. Typography System
h1 { font-size: font-size(4); }  // 16 * 1.25^4 = 39.06px
h2 { font-size: font-size(3); }  // 16 * 1.25^3 = 31.25px
h3 { font-size: font-size(2); }  // 16 * 1.25^2 = 25px
h4 { font-size: font-size(1); }  // 16 * 1.25^1 = 20px
h5 { font-size: font-size(0); }  // 16 * 1.25^0 = 16px
h6 { font-size: font-size(-1); } // 16 * 1.25^-1 = 12.8px

// 5. Spacing System
$spacing-unit: 8px;
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

@each $key, $value in $spacers {
    .p-#{$key} { padding: $value; }
    .m-#{$key} { margin: $value; }
    .px-#{$key} { padding-left: $value; padding-right: $value; }
    .py-#{$key} { padding-top: $value; padding-bottom: $value; }
    .mx-#{$key} { margin-left: $value; margin-right: $value; }
    .my-#{$key} { margin-top: $value; margin-bottom: $value; }
    
    .pt-#{$key} { padding-top: $value; }
    .pr-#{$key} { padding-right: $value; }
    .pb-#{$key} { padding-bottom: $value; }
    .pl-#{$key} { padding-left: $value; }
    .mt-#{$key} { margin-top: $value; }
    .mr-#{$key} { margin-right: $value; }
    .mb-#{$key} { margin-bottom: $value; }
    .ml-#{$key} { margin-left: $value; }
}

// 6. Conditional Styling
$theme: 'dark';

.element {
    background: #fff;
    color: #333;
    
    @if $theme == 'dark' {
        background: #1a1a1a;
        color: #fff;
    } @else if $theme == 'light' {
        background: #fff;
        color: #333;
    }
    
    @if length($theme) > 0 {
        border: 1px solid #ddd;
    }
}

// 7. Color Operations
$primary: #3498db;
$secondary: #2ecc71;
$danger: #e74c3c;

.btn {
    &-primary {
        background: $primary;
        color: #fff;
        
        &:hover {
            background: $primary - #222;
        }
    }
    
    &-secondary {
        background: $secondary;
        color: #fff;
        
        &:hover {
            background: $secondary - #222;
        }
    }
    
    &-danger {
        background: $danger;
        color: #fff;
        
        &:hover {
            background: $danger - #222;
        }
    }
}

// 8. Complex Calculations
@function fluid($min, $max, $min-viewport: 320px, $max-viewport: 1200px) {
    $min-px: strip-unit($min);
    $max-px: strip-unit($max);
    $min-vp: strip-unit($min-viewport);
    $max-vp: strip-unit($max-viewport);
    $slope: ($max-px - $min-px) / ($max-vp - $min-vp);
    $intercept: $min-px - $slope * $min-vp;
    
    @return clamp($min, calc(#{$intercept}px + #{$slope} * 100vw), $max);
}

@function strip-unit($number) {
    @return $number / ($number * 0 + 1);
}

.fluid-text {
    font-size: fluid(16px, 24px);
}

.fluid-container {
    padding: fluid(10px, 40px);
    max-width: fluid(600px, 1200px);
}`,
      language: "scss"
    };