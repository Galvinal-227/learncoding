export const chapter = {
  slug: "mixins",
  title: "Mixins",
  description: "Membuat dan menggunakan mixins untuk reusable code blocks di Sass.",
  icon: "SiSass",
  color: "#CC6699",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["sass-introduction", "sass-variables"],
  tags: ["sass", "mixins", "reusable", "css"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Mixins?

Mixins adalah blok kode CSS yang bisa digunakan kembali di seluruh stylesheet. Mixins membantu menghindari pengulangan kode dan memungkinkan parameter untuk fleksibilitas.

## Dasar Mixins

### Mendefinisikan Mixin
\`\`\`scss
// Definisi mixin dengan @mixin
@mixin button-base {
    display: inline-block;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
}

// Menggunakan mixin dengan @include
.btn-primary {
    @include button-base;
    background: #3498db;
    color: white;
}

.btn-secondary {
    @include button-base;
    background: #2ecc71;
    color: white;
}
\`\`\`

### Mixin dengan Parameter
\`\`\`scss
// Mixin dengan parameter
@mixin button($bg, $color: white) {
    display: inline-block;
    padding: 10px 20px;
    background: $bg;
    color: $color;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background: darken($bg, 10%);
    }
}

// Penggunaan
.btn-primary {
    @include button(#3498db);
}

.btn-success {
    @include button(#2ecc71);
}

.btn-danger {
    @include button(#e74c3c);
}
\`\`\`

## Mixin dengan Parameter Default

\`\`\`scss
@mixin box-shadow($x: 0, $y: 2px, $blur: 4px, $color: rgba(0,0,0,0.1)) {
    box-shadow: $x $y $blur $color;
}

// Penggunaan dengan default
.card {
    @include box-shadow;
}

// Dengan nilai custom
.modal {
    @include box-shadow(0, 4px, 8px, rgba(0,0,0,0.3));
}
\`\`\`

## Advanced Mixins

### Mixin dengan Conditional
\`\`\`scss
@mixin responsive($breakpoint) {
    @if $breakpoint == 'mobile' {
        @media (max-width: 576px) { @content; }
    }
    @else if $breakpoint == 'tablet' {
        @media (max-width: 768px) { @content; }
    }
    @else if $breakpoint == 'desktop' {
        @media (max-width: 992px) { @content; }
    }
    @else if $breakpoint == 'large' {
        @media (max-width: 1200px) { @content; }
    }
}

// Penggunaan
.container {
    padding: 20px;
    
    @include responsive('tablet') {
        padding: 10px;
    }
}
\`\`\`

### Mixin dengan Multiple Arguments
\`\`\`scss
@mixin flex($direction: row, $justify: flex-start, $align: stretch) {
    display: flex;
    flex-direction: $direction;
    justify-content: $justify;
    align-items: $align;
}

// Penggunaan
.header {
    @include flex(row, space-between, center);
}

.nav {
    @include flex(column, center, stretch);
}
\`\`\`

### Mixin dengan Keyword Arguments
\`\`\`scss
@mixin transition($properties...) {
    transition: $properties;
}

@mixin position($position: relative, $args...) {
    position: $position;
    @each $arg in $args {
        @if index(top bottom left right, $arg) {
            #{$arg}: nth($args, index($args, $arg) + 1);
        }
    }
}

// Penggunaan
.element {
    @include transition(all 0.3s ease, transform 0.2s);
    @include position(absolute, top 20px, left 30px);
}
\`\`\`

## Mixin dengan @content

\`\`\`scss
@mixin media($breakpoint) {
    @media (min-width: $breakpoint) {
        @content;
    }
}

// Penggunaan dengan @content
.container {
    padding: 10px;
    
    @include media(768px) {
        padding: 20px;
    }
    
    @include media(1024px) {
        padding: 30px;
        max-width: 1200px;
        margin: 0 auto;
    }
}

// Output:
// .container { padding: 10px; }
// @media (min-width: 768px) { .container { padding: 20px; } }
// @media (min-width: 1024px) { .container { padding: 30px; max-width: 1200px; margin: 0 auto; } }
\`\`\`

## Common Mixins Examples

### 1. Typography
\`\`\`scss
@mixin text-style($size, $weight: 400, $line-height: 1.5) {
    font-size: $size;
    font-weight: $weight;
    line-height: $line-height;
}

@mixin heading($level) {
    @if $level == 1 {
        @include text-style(2.5rem, 700, 1.2);
    }
    @else if $level == 2 {
        @include text-style(2rem, 600, 1.3);
    }
    @else if $level == 3 {
        @include text-style(1.5rem, 600, 1.4);
    }
}

h1 { @include heading(1); }
h2 { @include heading(2); }
h3 { @include heading(3); }
\`\`\`

### 2. Layout
\`\`\`scss
@mixin container($max-width: 1200px) {
    max-width: $max-width;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
}

@mixin grid($columns: 2, $gap: 20px) {
    display: grid;
    grid-template-columns: repeat($columns, 1fr);
    gap: $gap;
}

@mixin center-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
\`\`\`

### 3. Effects
\`\`\`scss
@mixin hover-effect($property: transform, $value: scale(1.05)) {
    transition: $property 0.3s ease;
    
    &:hover {
        #{$property}: $value;
    }
}

@mixin gradient($start, $end, $direction: to bottom) {
    background: linear-gradient($direction, $start, $end);
}

@mixin glass-effect($blur: 10px, $bg: rgba(255,255,255,0.1)) {
    backdrop-filter: blur($blur);
    background: $bg;
    border: 1px solid rgba(255,255,255,0.2);
}
\`\`\`

### 4. Animations
\`\`\`scss
@mixin animation($name, $duration: 1s, $timing: ease, $iteration: infinite) {
    animation: $name $duration $timing $iteration;
}

@mixin keyframes($name) {
    @keyframes #{$name} {
        @content;
    }
}

@include keyframes(fadeIn) {
    from { opacity: 0; }
    to { opacity: 1; }
}

@include keyframes(slideIn) {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

.element {
    @include animation(fadeIn, 0.5s, ease, 1);
}
\`\`\`

## Best Practices Mixins

### 1. Single Responsibility
\`\`\`scss
// ✅ Satu tanggung jawab
@mixin text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

// ❌ Terlalu banyak tanggung jawab
@mixin text-ellipsis-and-color {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
    font-size: 14px;
}
\`\`\`

### 2. Naming Convention
\`\`\`scss
// ✅ Nama yang jelas
@mixin flex-center { ... }
@mixin responsive($breakpoint) { ... }

// ❌ Nama tidak jelas
@mixin fc { ... }
@mixin r($b) { ... }
\`\`\`

### 3. Gunakan untuk Reusable Code
\`\`\`scss
// ✅ Reusable
@mixin button-base {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
}

// ❌ Tidak reusable
@mixin specific-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background: #3498db;
    color: white;
}
\`\`\`

## Contoh Lengkap

\`\`\`scss
// _mixins.scss - Complete Mixin Library

// 1. Layout Mixins
@mixin flex($direction: row, $wrap: nowrap, $justify: flex-start, $align: stretch) {
    display: flex;
    flex-direction: $direction;
    flex-wrap: $wrap;
    justify-content: $justify;
    align-items: $align;
}

@mixin grid($cols: 3, $gap: 20px) {
    display: grid;
    grid-template-columns: repeat($cols, 1fr);
    gap: $gap;
}

@mixin container($max-width: 1200px, $padding: 20px) {
    max-width: $max-width;
    margin: 0 auto;
    padding: 0 $padding;
}

@mixin center($type: 'flex') {
    @if $type == 'flex' {
        @include flex(row, nowrap, center, center);
    }
    @else if $type == 'absolute' {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @else if $type == 'grid' {
        display: grid;
        place-items: center;
    }
}

// 2. Responsive Mixins
@mixin respond($breakpoint) {
    @if $breakpoint == 'xs' {
        @media (max-width: 576px) { @content; }
    }
    @else if $breakpoint == 'sm' {
        @media (max-width: 768px) { @content; }
    }
    @else if $breakpoint == 'md' {
        @media (max-width: 992px) { @content; }
    }
    @else if $breakpoint == 'lg' {
        @media (max-width: 1200px) { @content; }
    }
    @else if $breakpoint == 'xl' {
        @media (max-width: 1400px) { @content; }
    }
}

@mixin min-respond($breakpoint) {
    @if $breakpoint == 'sm' {
        @media (min-width: 576px) { @content; }
    }
    @else if $breakpoint == 'md' {
        @media (min-width: 768px) { @content; }
    }
    @else if $breakpoint == 'lg' {
        @media (min-width: 992px) { @content; }
    }
    @else if $breakpoint == 'xl' {
        @media (min-width: 1200px) { @content; }
    }
}

// 3. Typography Mixins
@mixin font($size, $weight: 400, $line-height: 1.5, $family: 'Inter') {
    font-family: $family, -apple-system, sans-serif;
    font-size: $size;
    font-weight: $weight;
    line-height: $line-height;
}

@mixin heading($level: 1) {
    @if $level == 1 {
        @include font(2.5rem, 700, 1.2);
    }
    @else if $level == 2 {
        @include font(2rem, 600, 1.3);
    }
    @else if $level == 3 {
        @include font(1.5rem, 600, 1.4);
    }
    @else if $level == 4 {
        @include font(1.25rem, 600, 1.5);
    }
    @else if $level == 5 {
        @include font(1.125rem, 500, 1.6);
    }
    @else if $level == 6 {
        @include font(1rem, 500, 1.6);
    }
}

// 4. Button Mixins
@mixin button($bg, $color: white, $hover-darken: 10%) {
    display: inline-block;
    padding: 12px 24px;
    background: $bg;
    color: $color;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background: darken($bg, $hover-darken);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba($bg, 0.3);
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

// 5. Shadow Mixins
@mixin shadow($level: 1) {
    @if $level == 1 {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    }
    @else if $level == 2 {
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    @else if $level == 3 {
        box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    }
    @else if $level == 4 {
        box-shadow: 0 20px 25px rgba(0,0,0,0.1);
    }
    @else if $level == 5 {
        box-shadow: 0 25px 50px rgba(0,0,0,0.25);
    }
}

// 6. Utility Mixins
@mixin truncate($lines: 1) {
    @if $lines == 1 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    @else {
        display: -webkit-box;
        -webkit-line-clamp: $lines;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
}

@mixin aspect-ratio($width: 16, $height: 9) {
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

// 7. Card Component using Mixins
.card {
    @include shadow(2);
    background: white;
    border-radius: 8px;
    overflow: hidden;
    
    &-header {
        padding: 20px;
        border-bottom: 1px solid #eee;
        @include flex(row, nowrap, space-between, center);
        
        h3 {
            @include heading(3);
            margin: 0;
        }
    }
    
    &-body {
        padding: 20px;
        
        p {
            @include font(1rem, 400, 1.6);
            color: #666;
        }
    }
    
    &-footer {
        padding: 20px;
        background: #f8f9fa;
        
        .btn {
            @include button(#3498db);
            
            &-secondary {
                @include button(#6c757d);
            }
        }
    }
}
\`\`\`
  `,
  quiz: [
    {
      question: "Keyword untuk mendefinisikan mixin adalah?",
      options: [
        "@mixin",
        "@define",
        "@function",
        "@include"
      ],
      correctAnswer: 0
    },
    {
      question: "Keyword untuk menggunakan mixin adalah?",
      options: [
        "@mixin",
        "@use",
        "@include",
        "@import"
      ],
      correctAnswer: 2
    },
    {
      question: "Apa fungsi @content dalam mixin?",
      options: [
        "Membuat content baru",
        "Memungkinkan passing CSS block",
        "Membuat variable",
        "Mengimport file"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Mixin Library",
      code: `// _mixins.scss - Complete Mixin Library

// ============================================
// 1. FLEXBOX MIXINS
// ============================================
@mixin flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

@mixin flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@mixin flex-column {
    display: flex;
    flex-direction: column;
}

@mixin flex-wrap {
    display: flex;
    flex-wrap: wrap;
}

// ============================================
// 2. GRID MIXINS
// ============================================
@mixin grid-cols($cols: 12, $gap: 20px) {
    display: grid;
    grid-template-columns: repeat($cols, 1fr);
    gap: $gap;
}

@mixin grid-auto($min: 250px, $gap: 20px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax($min, 1fr));
    gap: $gap;
}

// ============================================
// 3. RESPONSIVE MIXINS
// ============================================
@mixin mobile {
    @media (max-width: 576px) { @content; }
}

@mixin tablet {
    @media (max-width: 768px) { @content; }
}

@mixin desktop {
    @media (max-width: 992px) { @content; }
}

@mixin large {
    @media (max-width: 1200px) { @content; }
}

// ============================================
// 4. BUTTON MIXINS
// ============================================
@mixin btn-base {
    display: inline-block;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    text-align: center;
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
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
}

@mixin btn-color($bg, $color: white) {
    @include btn-base;
    background: $bg;
    color: $color;
    
    &:hover {
        background: darken($bg, 10%);
        box-shadow: 0 4px 12px rgba($bg, 0.3);
    }
}

// ============================================
// 5. TYPOGRAPHY MIXINS
// ============================================
@mixin text($size, $weight: 400, $color: #333) {
    font-size: $size;
    font-weight: $weight;
    color: $color;
    line-height: 1.6;
}

@mixin heading($size, $weight: 700, $color: #1a1a1a) {
    font-size: $size;
    font-weight: $weight;
    color: $color;
    line-height: 1.2;
    margin-bottom: 0.5em;
}

// ============================================
// 6. POSITIONING MIXINS
// ============================================
@mixin absolute($top: null, $right: null, $bottom: null, $left: null) {
    position: absolute;
    top: $top;
    right: $right;
    bottom: $bottom;
    left: $left;
}

@mixin fixed($top: null, $right: null, $bottom: null, $left: null) {
    position: fixed;
    top: $top;
    right: $right;
    bottom: $bottom;
    left: $left;
}

@mixin relative($top: null, $right: null, $bottom: null, $left: null) {
    position: relative;
    top: $top;
    right: $right;
    bottom: $bottom;
    left: $left;
}

// ============================================
// 7. EFFECTS MIXINS
// ============================================
@mixin hover-scale($scale: 1.05) {
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale($scale);
    }
}

@mixin hover-lift($distance: -4px) {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY($distance);
        box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    }
}

@mixin glass($blur: 10px, $bg: rgba(255,255,255,0.1)) {
    backdrop-filter: blur($blur);
    -webkit-backdrop-filter: blur($blur);
    background: $bg;
    border: 1px solid rgba(255,255,255,0.2);
}

// ============================================
// 8. UTILITY MIXINS
// ============================================
@mixin truncate($lines: 1) {
    @if $lines == 1 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    } @else {
        display: -webkit-box;
        -webkit-line-clamp: $lines;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
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

// ============================================
// 9. ANIMATION MIXINS
// ============================================
@mixin keyframes($name) {
    @keyframes #{$name} {
        @content;
    }
}

@mixin animate($name, $duration: 1s, $easing: ease, $iteration: 1) {
    animation: $name $duration $easing $iteration;
}

// ============================================
// 10. COMPONENT MIXINS
// ============================================
@mixin card($shadow-level: 2, $radius: 8px) {
    background: white;
    border-radius: $radius;
    overflow: hidden;
    
    @if $shadow-level == 1 {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    } @else if $shadow-level == 2 {
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    } @else if $shadow-level == 3 {
        box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    } @else if $shadow-level == 4 {
        box-shadow: 0 20px 25px rgba(0,0,0,0.1);
    }
}

// ============================================
// EXAMPLE USAGE
// ============================================
.card {
    @include card(2);
    
    &-header {
        @include flex-between;
        padding: 20px;
        border-bottom: 1px solid #eee;
        
        h2 {
            @include heading(1.5rem);
            margin: 0;
        }
    }
    
    &-body {
        padding: 20px;
        
        p {
            @include text(1rem, 400, #666);
        }
    }
    
    &-footer {
        padding: 20px;
        background: #f8f9fa;
        @include flex-between;
    }
}

.btn {
    &-primary {
        @include btn-color(#3498db);
    }
    
    &-success {
        @include btn-color(#2ecc71);
    }
    
    &-danger {
        @include btn-color(#e74c3c);
    }
}

@media (max-width: 768px) {
    .card {
        @include card(1);
    }
}`,
      language: "scss"
    }
  ]
};