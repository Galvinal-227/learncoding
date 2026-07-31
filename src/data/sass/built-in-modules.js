export const chapter = {
  slug: "built-in-modules",
  title: "Built-in Modules",
  description: "Menggunakan built-in modules di Sass: color, list, map, math, string, dan selector.",
  icon: "SiSass",
  color: "#CC6699",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["sass-introduction", "sass-functions"],
  tags: ["sass", "modules", "built-in", "color", "math"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Built-in Modules?

Sass memiliki built-in modules yang menyediakan fungsi-fungsi untuk manipulasi warna, list, map, matematika, string, dan selector.

## Color Module

### Color Functions
\`\`\`scss
@use 'sass:color';

// Manipulasi warna dasar
$color: #3498db;

// Lighten / Darken
$light: color.scale($color, $lightness: 20%); // 20% lebih terang
$dark: color.scale($color, $lightness: -20%); // 20% lebih gelap

// Adjust
$adjusted: color.adjust($color, $red: 10, $green: -20);

// Saturation
$saturated: color.scale($color, $saturation: 30%);
$desaturated: color.scale($color, $saturation: -30%);

// Hue
$hue-shifted: color.adjust($color, $hue: 60deg);

// Mix
$mixed: color.mix(#3498db, #2ecc71, 50%); // 50-50 mix

// Operations
$complement: color.complement($color); // Warna komplementer
$invert: color.invert($color); // Invert
$grayscale: color.grayscale($color); // Grayscale
$alpha: color.alpha($color); // Opacity

// Contrast
$contrast: color.contrast($color); // Hitam atau putih

// Lightness check
$is-light: color.lightness($color) > 50%;
\`\`\`

### Advanced Color
\`\`\`scss
@use 'sass:color';

// HSL
$color: hsl(210, 50%, 50%);

$hue: color.hue($color); // 210
$saturation: color.saturation($color); // 50%
$lightness: color.lightness($color); // 50%

// RGB
$color: rgb(52, 152, 219);

$red: color.red($color); // 52
$green: color.green($color); // 152
$blue: color.blue($color); // 219

// Color interpolation
$gradient-start: #3498db;
$gradient-end: #2ecc71;
$middle: color.mix($gradient-start, $gradient-end, 50%);
\`\`\`

## List Module

### List Functions
\`\`\`scss
@use 'sass:list';

$list: (1, 2, 3, 4, 5);

// Get nth item
$first: list.nth($list, 1); // 1
$last: list.nth($list, -1); // 5

// Length
$length: list.length($list); // 5

// Join
$new-list: list.join($list, (6, 7)); // (1, 2, 3, 4, 5, 6, 7)

// Append
$appended: list.append($list, 6); // (1, 2, 3, 4, 5, 6)

// Index of
$index: list.index($list, 3); // 3

// Zip (combine lists)
$colors: (red, green, blue);
$sizes: (10px, 20px, 30px);
$zipped: list.zip($colors, $sizes); // ((red, 10px), (green, 20px), (blue, 30px))

// Separation
$separator: list.separator($list); // space or comma
$is-comma: list.is-comma-separated($list);
$is-space: list.is-space-separated($list);

// Set nth
$new: list.set-nth($list, 2, 10); // (1, 10, 3, 4, 5)
\`\`\`

## Map Module

### Map Functions
\`\`\`scss
@use 'sass:map';

$map: (
    'primary': #3498db,
    'secondary': #2ecc71,
    'danger': #e74c3c
);

// Get value
$primary: map.get($map, 'primary'); // #3498db

// Set value
$new-map: map.set($map, 'warning', #f39c12);
// (primary: #3498db, secondary: #2ecc71, danger: #e74c3c, warning: #f39c12)

// Has key
$has-primary: map.has-key($map, 'primary'); // true
$has-warning: map.has-key($map, 'warning'); // false

// Merge maps
$more-colors: (
    'info': #3498db,
    'success': #2ecc71
);
$merged: map.merge($map, $more-colors);

// Remove keys
$removed: map.remove($map, 'danger');

// Keys and values
$keys: map.keys($map); // ('primary', 'secondary', 'danger')
$values: map.values($map); // (#3498db, #2ecc71, #e74c3c)

// Deep get
$deep-map: (
    'theme': (
        'colors': (
            'primary': #3498db,
            'secondary': #2ecc71
        )
    )
);
$primary: map.get($deep-map, 'theme', 'colors', 'primary');
\`\`\`

## Math Module

### Math Functions
\`\`\`scss
@use 'sass:math';

// Basic math
$result: math.div(100, 4); // 25
$remainder: math.rem(10, 3); // 1

// Percent
$percent: math.percentage(0.25); // 25%

// Rounding
$rounded: math.round(3.7); // 4
$floor: math.floor(3.7); // 3
$ceil: math.ceil(3.2); // 4

// Absolute
$abs: math.abs(-10); // 10

// Min / Max
$min: math.min(10, 20, 5, 15); // 5
$max: math.max(10, 20, 5, 15); // 20

// Random
$random: math.random(); // 0-1
$random-int: math.random(10); // 1-10

// Trigonometry
$sin: math.sin(90deg); // 1
$cos: math.cos(0deg); // 1
$tan: math.tan(45deg); // 1

// Log / Power
$log: math.log(10); // 2.3025
$pow: math.pow(2, 3); // 8
$sqrt: math.sqrt(16); // 4

// Clamp
$clamped: math.clamp(10, 25, 30); // 25
\`\`\`

## String Module

### String Functions
\`\`\`scss
@use 'sass:string';

$string: 'Hello World';

// Length
$length: string.length($string); // 11

// Index
$index: string.index($string, 'World'); // 7

// Slice
$slice: string.slice($string, 7, 11); // 'World'
$first: string.slice($string, 1, 1); // 'H'
$last: string.slice($string, -5); // 'World'

// Case
$upper: string.to-upper-case($string); // 'HELLO WORLD'
$lower: string.to-lower-case($string); // 'hello world'

// Insert
$inserted: string.insert('Hello', ' World', 6); // 'Hello World'

// Quote / Unquote
$quoted: string.quote('Hello'); // '"Hello"'
$unquoted: string.unquote('"Hello"'); // Hello

// Unique ID
$id: string.unique-id(); // 'u123456789'
\`\`\`

## Selector Module

### Selector Functions
\`\`\`scss
@use 'sass:selector';

// Append
$selector: selector.append('.btn', '.primary');
// .btn.primary

// Nest
$nested: selector.nest('.container', '.item');
// .container .item

// Unify
$unified: selector.unify('.btn', '.primary');
// .btn.primary

// Parse
$parsed: selector.parse('.container .item');
// (('.container', '.item'))

// Replace
$replaced: selector.replace('.btn', '.btn', '.button');
// .button

// Simple selector
$is-simple: selector.is-simple('.btn'); // true
$simple: selector.simple-selectors('.btn.primary');
// ('.btn', '.primary')
\`\`\`

## Meta Module

### Meta Functions
\`\`\`scss
@use 'sass:meta';

// Type checking
$type: meta.type-of(10); // 'number'
$type: meta.type-of('#3498db'); // 'color'
$type: meta.type-of('hello'); // 'string'

// Call function
@function add($a, $b) {
    @return $a + $b;
}
$result: meta.call(add, 10, 20); // 30

// Global variable
$global: meta.global-variable-exists('primary-color');

// Function exists
$exists: meta.function-exists('add'); // true

// Mixin exists
$exists: meta.mixin-exists('button'); // true

// Get function
$fn: meta.get-function('add');
$result: meta.call($fn, 10, 20); // 30

// Module variables
$vars: meta.module-variables('module-name');
\`\`\`

## Complete Examples

### Color System
\`\`\`scss
@use 'sass:color';
@use 'sass:map';

$colors: (
    'primary': #3498db,
    'secondary': #2ecc71,
    'danger': #e74c3c,
    'warning': #f39c12,
    'info': #3498db,
    'dark': #2c3e50,
    'light': #ecf0f1
);

@function get-color($name, $variant: 'base') {
    $color: map.get($colors, $name);
    
    @if $variant == 'light' {
        @return color.scale($color, $lightness: 20%);
    } @else if $variant == 'dark' {
        @return color.scale($color, $lightness: -20%);
    } @else if $variant == 'transparent' {
        @return color.change($color, $alpha: 0.5);
    } @else {
        @return $color;
    }
}

// Usage
.element {
    background: get-color('primary');
    color: get-color('primary', 'light');
    border: 1px solid get-color('primary', 'transparent');
}
\`\`\`

### Responsive System
\`\`\`scss
@use 'sass:map';
@use 'sass:math';

$breakpoints: (
    'sm': 576px,
    'md': 768px,
    'lg': 992px,
    'xl': 1200px,
    'xxl': 1400px
);

@function breakpoint($name) {
    @return map.get($breakpoints, $name);
}

@function next-breakpoint($name) {
    $keys: map.keys($breakpoints);
    $index: index($keys, $name);
    
    @if $index and $index < length($keys) {
        @return map.get($breakpoints, list.nth($keys, $index + 1));
    }
    
    @return null;
}

@mixin respond-to($name) {
    $breakpoint: breakpoint($name);
    @if $breakpoint {
        @media (max-width: $breakpoint) {
            @content;
        }
    }
}

@mixin respond-above($name) {
    $next: next-breakpoint($name);
    @if $next {
        @media (min-width: $next) {
            @content;
        }
    }
}
\`\`\`

### Math Utilities
\`\`\`scss
@use 'sass:math';
@use 'sass:list';

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

@function strip-unit($value) {
    @return math.div($value, $value * 0 + 1);
}

@function add($values...) {
    $sum: 0;
    @each $value in $values {
        $sum: $sum + $value;
    }
    @return $sum;
}

@function multiply($values...) {
    $result: 1;
    @each $value in $values {
        $result: $result * $value;
    }
    @return $result;
}

// Usage
.container {
    max-width: fluid(600px, 1200px);
    padding: fluid(10px, 40px);
}

.grid {
    grid-template-columns: grid-cols(3, 20px);
    gap: 20px;
}
\`\`\`

### String Utilities
\`\`\`scss
@use 'sass:string';
@use 'sass:list';

@function to-kebab($string) {
    $string: string.to-lower-case($string);
    $result: '';
    
    @for $i from 1 through string.length($string) {
        $char: string.slice($string, $i, $i);
        @if $char == ' ' {
            $result: $result + '-';
        } @else {
            $result: $result + $char;
        }
    }
    
    @return $result;
}

@function to-camel($string) {
    $string: string.to-lower-case($string);
    $result: '';
    $next-upper: false;
    
    @for $i from 1 through string.length($string) {
        $char: string.slice($string, $i, $i);
        
        @if $char == ' ' {
            $next-upper: true;
        } @else if $next-upper {
            $result: $result + string.to-upper-case($char);
            $next-upper: false;
        } @else {
            $result: $result + $char;
        }
    }
    
    @return $result;
}

// Usage
$class: to-kebab('Hello World'); // 'hello-world'
$property: to-camel('background color'); // 'backgroundColor'
\`\`\`
  `,
  quiz: [
    {
      question: "Module untuk manipulasi warna di Sass adalah?",
      options: [
        "sass:color",
        "sass:colors",
        "sass:palette",
        "sass:theme"
      ],
      correctAnswer: 0
    },
    {
      question: "Fungsi untuk mendapatkan nilai dari map adalah?",
      options: [
        "map-get",
        "map.value",
        "map.get",
        "map-get-value"
      ],
      correctAnswer: 2
    },
    {
      question: "Module untuk operasi matematika adalah?",
      options: [
        "sass:math",
        "sass:calc",
        "sass:arithmetic",
        "sass:numbers"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Built-in Modules System",
      code: `// _modules.scss - Complete Module System

@use 'sass:color';
@use 'sass:map';
@use 'sass:math';
@use 'sass:list';
@use 'sass:string';
@use 'sass:meta';
@use 'sass:selector';

// ============================================
// 1. COLOR SYSTEM
// ============================================
$palette: (
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

@function color($name, $shade: 500) {
    $colors: map.get($palette, $name);
    @return map.get($colors, $shade);
}

@function alpha($color, $opacity: 0.5) {
    @return color.change($color, $alpha: $opacity);
}

@function tint($color, $percentage: 20%) {
    @return color.mix(white, $color, $percentage);
}

@function shade($color, $percentage: 20%) {
    @return color.mix(black, $color, $percentage);
}

@function contrast($color) {
    @return color.contrast($color);
}

// ============================================
// 2. THEME SYSTEM
// ============================================
$theme: (
    'colors': (
        'primary': color('blue', 500),
        'secondary': color('gray', 500),
        'success': #10b981,
        'danger': #ef4444,
        'warning': #f59e0b,
        'info': #3b82f6
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
        'xl': 1200px,
        '2xl': 1400px
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

@function theme($path...) {
    $current: $theme;
    @each $key in $path {
        $current: map.get($current, $key);
    }
    @return $current;
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

// ============================================
// 3. MATH UTILITIES
// ============================================
@function strip-unit($value) {
    @return math.div($value, $value * 0 + 1);
}

@function px-to-rem($px, $base: 16px) {
    @return math.div(strip-unit($px), strip-unit($base)) * 1rem;
}

@function px-to-em($px, $base: 16px) {
    @return math.div(strip-unit($px), strip-unit($base)) * 1em;
}

@function percentage($target, $context) {
    @return math.div(strip-unit($target), strip-unit($context)) * 100%;
}

@function fluid($min, $max, $min-viewport: 320px, $max-viewport: 1200px) {
    $min-px: strip-unit($min);
    $max-px: strip-unit($max);
    $min-vp: strip-unit($min-viewport);
    $max-vp: strip-unit($max-viewport);
    
    $slope: math.div($max-px - $min-px, $max-vp - $min-vp);
    $intercept: $min-px - $slope * $min-vp;
    
    @return clamp($min, calc(#{$intercept}px + #{$slope} * 100vw), $max);
}

@function clamp-font($min, $max) {
    @return fluid($min, $max);
}

@function grid-cols($columns, $gap: spacing('md')) {
    @return repeat($columns, 1fr);
}

@function z-index($name) {
    $z-indexes: (
        'base': 0,
        'above': 1,
        'below': -1,
        'dropdown': 1000,
        'sticky': 1020,
        'fixed': 1030,
        'modal-backdrop': 1040,
        'modal': 1050,
        'popover': 1060,
        'tooltip': 1070
    );
    @return map.get($z-indexes, $name);
}

// ============================================
// 4. STRING UTILITIES
// ============================================
@function to-kebab($string) {
    $string: string.to-lower-case($string);
    $result: '';
    $prev: '';
    
    @for $i from 1 through string.length($string) {
        $char: string.slice($string, $i, $i);
        $code: string.to-upper-case($char);
        
        @if $char == ' ' {
            $result: $result + '-';
        } @else if $char == $code and $i > 1 {
            $result: $result + '-' + $char;
        } @else {
            $result: $result + $char;
        }
    }
    
    @return $result;
}

@function to-camel($string) {
    $string: string.to-lower-case($string);
    $result: '';
    $next-upper: false;
    
    @for $i from 1 through string.length($string) {
        $char: string.slice($string, $i, $i);
        
        @if $char == ' ' or $char == '-' {
            $next-upper: true;
        } @else if $next-upper {
            $result: $result + string.to-upper-case($char);
            $next-upper: false;
        } @else {
            $result: $result + $char;
        }
    }
    
    @return $result;
}

@function to-pascal($string) {
    $camel: to-camel($string);
    @return string.to-upper-case(string.slice($camel, 1, 1)) + string.slice($camel, 2);
}

// ============================================
// 5. RESPONSIVE MIXINS
// ============================================
@mixin respond-to($breakpoint) {
    $bp: breakpoint($breakpoint);
    @if $bp {
        @media (max-width: $bp) {
            @content;
        }
    }
}

@mixin respond-above($breakpoint) {
    $bp: breakpoint($breakpoint);
    @if $bp {
        $next: $bp + 1;
        @media (min-width: $next) {
            @content;
        }
    }
}

@mixin respond-between($min, $max) {
    $min-bp: breakpoint($min);
    $max-bp: breakpoint($max);
    
    @if $min-bp and $max-bp {
        @media (min-width: $min-bp) and (max-width: $max-bp) {
            @content;
        }
    }
}

// ============================================
// 6. COMPONENT MIXINS
// ============================================
@mixin button($variant: 'primary', $size: 'md') {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: spacing('sm') spacing('lg');
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    $bg: color($variant);
    $text: color.contrast($bg);
    
    background: $bg;
    color: $text;
    
    &:hover {
        background: color.scale($bg, $lightness: -10%);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba($bg, 0.3);
    }
    
    @if $size == 'sm' {
        padding: spacing('xs') spacing('md');
        font-size: theme('typography', 'font-sizes', 'sm');
    } @else if $size == 'lg' {
        padding: spacing('md') spacing('xl');
        font-size: theme('typography', 'font-sizes', 'lg');
    }
}

@mixin card($shadow: true) {
    background: white;
    border-radius: 0.5rem;
    overflow: hidden;
    
    @if $shadow {
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        
        &:hover {
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
            transform: translateY(-2px);
            transition: all 0.3s ease;
        }
    }
}

// ============================================
// 7. EXAMPLE USAGE
// ============================================
.element {
    // Colors
    background: color('primary');
    color: contrast(color('primary'));
    border: 1px solid alpha(color('primary'), 0.5);
    
    // Typography
    font-size: theme('typography', 'font-sizes', 'base');
    font-family: theme('typography', 'font-family');
    
    // Spacing
    padding: spacing('md') spacing('lg');
    margin: spacing('sm') 0;
    
    // Fluid
    font-size: fluid(16px, 24px);
    padding: fluid(10px, 30px);
    
    // Z-index
    z-index: z-index('dropdown');
    
    // Responsive
    @include respond-to('md') {
        padding: spacing('sm');
    }
}

.btn {
    @include button('primary', 'md');
}

.card {
    @include card(true);
    
    &-header {
        padding: spacing('md');
        border-bottom: 1px solid #e5e7eb;
    }
    
    &-body {
        padding: spacing('md');
    }
}`,
      language: "scss"
    }
  ]
};