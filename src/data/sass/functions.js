export const chapter = {
  slug: "functions",
  title: "Functions",
  description: "Membuat dan menggunakan functions di Sass untuk manipulasi nilai.",
  icon: "SiSass",
  color: "#CC6699",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["sass-introduction", "sass-variables"],
  tags: ["sass", "functions", "computed", "values"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Functions?

Functions di Sass adalah blok kode yang mengembalikan nilai. Functions berguna untuk melakukan perhitungan, manipulasi data, dan logika yang complex.

## Dasar Functions

### Mendefinisikan Function
\`\`\`scss
// Function sederhana
@function double($number) {
    @return $number * 2;
}

// Penggunaan
.element {
    width: double(100px); // 200px
    height: double(50px); // 100px
}
\`\`\`

### Function dengan Multiple Parameters
\`\`\`scss
@function add($a, $b) {
    @return $a + $b;
}

@function subtract($a, $b) {
    @return $a - $b;
}

@function multiply($a, $b) {
    @return $a * $b;
}

// Penggunaan
.element {
    width: add(100px, 50px); // 150px
    height: multiply(20px, 3); // 60px
}
\`\`\`

## Type Checking

### Menggunakan @if
\`\`\`scss
@function is-light($color) {
    @if lightness($color) > 50% {
        @return true;
    } @else {
        @return false;
    }
}

// Penggunaan
.element {
    @if is-light(#3498db) {
        color: darken(#3498db, 40%);
    } @else {
        color: lighten(#3498db, 40%);
    }
}
\`\`\`

### Type Checking Functions
\`\`\`scss
@function ensure-px($value) {
    @if unit($value) == '' {
        @return $value + 'px';
    } @else {
        @return $value;
    }
}

.element {
    padding: ensure-px(20); // 20px
    margin: ensure-px(1rem); // 1rem (tidak diubah)
}
\`\`\`

## List Functions

\`\`\`scss
// List functions
@function get-color($colors, $index) {
    @return nth($colors, $index);
}

@function list-join($list1, $list2) {
    @return join($list1, $list2);
}

@function list-prepend($list, $item) {
    @return join($item, $list);
}

// Penggunaan
$colors: #3498db, #2ecc71, #e74c3c;

.element {
    color: get-color($colors, 1); // #3498db
    background: get-color($colors, 2); // #2ecc71
}

$sizes: (10px, 20px);
$more-sizes: list-join($sizes, (30px, 40px)); // (10px, 20px, 30px, 40px)
\`\`\`

## Map Functions

\`\`\`scss
// Map functions
@function get($map, $key) {
    @return map-get($map, $key);
}

@function set($map, $key, $value) {
    @return map-merge($map, ($key: $value));
}

@function has($map, $key) {
    @return map-has-key($map, $key);
}

// Penggunaan
$theme: (
    primary: #3498db,
    secondary: #2ecc71,
    danger: #e74c3c
);

.element {
    color: get($theme, primary); // #3498db
    
    @if has($theme, warning) {
        background: get($theme, warning);
    } @else {
        background: get($theme, secondary);
    }
}

$updated-theme: set($theme, warning, #f39c12);
// (primary: #3498db, secondary: #2ecc71, danger: #e74c3c, warning: #f39c12)
\`\`\`

## Advanced Functions

### Color Manipulation
\`\`\`scss
@function shade($color, $percentage) {
    @return mix(black, $color, $percentage);
}

@function tint($color, $percentage) {
    @return mix(white, $color, $percentage);
}

@function alpha($color, $opacity) {
    @return rgba($color, $opacity);
}

// Penggunaan
.element {
    color: shade(#3498db, 30%); // Lebih gelap
    background: tint(#3498db, 30%); // Lebih terang
    border: alpha(#3498db, 0.5); // Transparan
}
\`\`\`

### Responsive Functions
\`\`\`scss
$breakpoints: (
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
);

@function breakpoint($name) {
    @return map-get($breakpoints, $name);
}

@function min-breakpoint($name) {
    @return breakpoint($name) + 1;
}

@function max-breakpoint($name) {
    @return breakpoint($name) - 1;
}

// Penggunaan
@media (max-width: max-breakpoint(md)) {
    .element {
        padding: 10px;
    }
}
\`\`\`

### Math Functions
\`\`\`scss
@function percentage($target, $context) {
    @return $target / $context * 100%;
}

@function em($pixels, $base: 16px) {
    @return $pixels / $base * 1em;
}

@function rem($pixels, $base: 16px) {
    @return $pixels / $base * 1rem;
}

@function strip-unit($value) {
    @return $value / ($value * 0 + 1);
}

// Penggunaan
.element {
    width: percentage(300px, 1200px); // 25%
    font-size: em(16px); // 1em
    margin: rem(24px); // 1.5rem
    padding: strip-unit(20px) + 'px'; // 20px
}
\`\`\`

### String Functions
\`\`\`scss
@function to-upper($string) {
    @return to-upper-case($string);
}

@function to-lower($string) {
    @return to-lower-case($string);
}

@function str-replace($string, $search, $replace: '') {
    $index: str-index($string, $search);
    @if $index {
        @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);
    }
    @return $string;
}

// Penggunaan
$class: 'button-primary';
$class: str-replace($class, '-', ' '); // 'button primary'
\`\`\`

## Best Practices

### 1. Naming Convention
\`\`\`scss
// ✅ Nama deskriptif
@function get-color($key) { ... }
@function calculate-width($columns) { ... }

// ❌ Nama tidak jelas
@function gc($k) { ... }
@function cw($c) { ... }
\`\`\`

### 2. Document Functions
\`\`\`scss
/// Get color from theme
/// @param {String} $key - Color key
/// @return {Color} Color value
@function theme-color($key) {
    @return map-get($theme-colors, $key);
}
\`\`\`

### 3. Keep Pure
\`\`\`scss
// ✅ Pure function (tidak mengubah state)
@function add($a, $b) {
    @return $a + $b;
}

// ❌ Impure (mengubah state)
@function add-to-global($a) {
    $global: $global + $a;
    @return $global;
}
\`\`\`

## Contoh Lengkap

\`\`\`scss
// _functions.scss - Complete Function Library

// ============================================
// 1. COLOR FUNCTIONS
// ============================================
@function color($key) {
    $colors: (
        primary: #3498db,
        secondary: #2ecc71,
        danger: #e74c3c,
        warning: #f39c12,
        info: #3498db,
        light: #f8f9fa,
        dark: #2c3e50
    );
    @return map-get($colors, $key);
}

@function tint($color, $percentage: 20%) {
    @return mix(white, $color, $percentage);
}

@function shade($color, $percentage: 20%) {
    @return mix(black, $color, $percentage);
}

@function alpha($color, $opacity: 0.5) {
    @return rgba($color, $opacity);
}

@function contrast($color) {
    @if lightness($color) > 50% {
        @return darken($color, 40%);
    } @else {
        @return lighten($color, 40%);
    }
}

// ============================================
// 2. TYPOGRAPHY FUNCTIONS
// ============================================
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

@function font-size($key) {
    @return map-get($font-sizes, $key);
}

@function clamp-font($min, $max, $viewport: 100vw) {
    @return clamp($min, calc(#{$min} + (#{strip-unit($max)} - #{strip-unit($min)}) * ((#{$viewport} - 320px) / (1200 - 320))), $max);
}

// ============================================
// 3. SPACING FUNCTIONS
// ============================================
$spacing-base: 0.25rem;

@function spacing($multiplier) {
    @return $spacing-base * $multiplier;
}

@function spacers($values...) {
    $result: ();
    @each $value in $values {
        $result: append($result, spacing($value));
    }
    @return $result;
}

// ============================================
// 4. MATH FUNCTIONS
// ============================================
@function strip-unit($value) {
    @return $value / ($value * 0 + 1);
}

@function px-to-rem($px, $base: 16px) {
    @return strip-unit($px) / strip-unit($base) * 1rem;
}

@function px-to-em($px, $base: 16px) {
    @return strip-unit($px) / strip-unit($base) * 1em;
}

@function percentage($target, $context) {
    @return strip-unit($target) / strip-unit($context) * 100%;
}

// ============================================
// 5. STRING FUNCTIONS
// ============================================
@function to-kebab($string) {
    @return to-lower-case(str-replace($string, ' ', '-'));
}

@function to-camel($string) {
    $result: '';
    @each $word in str-split($string, '-') {
        $first: str-slice($word, 1, 1);
        $rest: str-slice($word, 2);
        $result: $result + to-upper-case($first) + $rest;
    }
    @return $result;
}

@function str-replace($string, $search, $replace: '') {
    $index: str-index($string, $search);
    @if $index {
        @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);
    }
    @return $string;
}

@function str-split($string, $separator) {
    $result: ();
    $index: str-index($string, $separator);
    @if $index {
        $first: str-slice($string, 1, $index - 1);
        $rest: str-slice($string, $index + 1);
        $result: append($result, $first);
        $result: join($result, str-split($rest, $separator));
    } @else {
        $result: append($result, $string);
    }
    @return $result;
}

// ============================================
// 6. RESPONSIVE FUNCTIONS
// ============================================
$breakpoints: (
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px
);

@function breakpoint($name) {
    @return map-get($breakpoints, $name);
}

@function from($name) {
    @return breakpoint($name);
}

@function until($name) {
    @return breakpoint($name) - 1px;
}

// ============================================
// 7. COMPLEX FUNCTIONS
// ============================================
@function fluid($min, $max, $min-viewport: 320px, $max-viewport: 1200px) {
    $min-px: strip-unit($min);
    $max-px: strip-unit($max);
    $min-vp: strip-unit($min-viewport);
    $max-vp: strip-unit($max-viewport);
    $slope: ($max-px - $min-px) / ($max-vp - $min-vp);
    $intercept: $min-px - $slope * $min-vp;
    
    @return clamp($min, calc(#{$intercept}px + #{$slope} * 100vw), $max);
}

@function grid-cols($columns, $gap: 20px) {
    @return repeat($columns, 1fr);
}

@function z-index($name) {
    $z-indexes: (
        auto: auto,
        base: 0,
        above: 1,
        below: -1,
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        modal-backdrop: 1040,
        modal: 1050,
        popover: 1060,
        tooltip: 1070
    );
    @return map-get($z-indexes, $name);
}

// ============================================
// 8. USAGE EXAMPLES
// ============================================
.element {
    // Colors
    background: color('primary');
    color: contrast(color('primary'));
    
    // Typography
    font-size: font-size('lg');
    
    // Spacing
    padding: spacing(2) spacing(4);
    
    // Math
    width: percentage(300px, 1200px);
    font-size: px-to-rem(16px);
    
    // Fluid
    font-size: fluid(16px, 24px);
    padding: fluid(10px, 20px);
    
    // Responsive
    @media (max-width: until('md')) {
        padding: spacing(1);
    }
    
    // Z-index
    z-index: z-index('modal');
}

// Using functions in mixins
@mixin respond-to($breakpoint) {
    @media (max-width: until($breakpoint)) {
        @content;
    }
}

@mixin fluid-type($min, $max) {
    font-size: fluid($min, $max);
}

// Usage
.card {
    @include respond-to('md') {
        padding: spacing(2);
    }
    
    h2 {
        @include fluid-type(20px, 32px);
    }
}`,
      language: "scss"
    };