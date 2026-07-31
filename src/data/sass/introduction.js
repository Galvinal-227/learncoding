export const chapter = {
  slug: "introduction",
  title: "Pengenalan Sass",
  description: "Memahami apa itu Sass, kelebihannya, dan bagaimana memulainya.",
  icon: "SiSass",
  color: "#CC6699",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["sass", "css", "preprocessor", "introduction"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Sass?

Sass (Syntactically Awesome Style Sheets) adalah CSS preprocessor yang memperluas kemampuan CSS dengan fitur-fitur seperti variabel, nesting, mixins, inheritance, dan functions.

## Dua Sintaks Sass

### 1. SCSS (Sassy CSS)
\`\`\`scss
// SCSS - Mirip CSS
$primary-color: #3498db;

.button {
    background-color: $primary-color;
    padding: 10px 20px;
    
    &:hover {
        background-color: darken($primary-color, 10%);
    }
}
\`\`\`

### 2. Indented (Sass)
\`\`\`sass
// Sass - Tanpa kurung dan titik koma
$primary-color: #3498db

.button
    background-color: $primary-color
    padding: 10px 20px
    &:hover
        background-color: darken($primary-color, 10%)
\`\`\`

## Kelebihan Sass

| Fitur | Deskripsi |
|-------|-----------|
| **Variables** | Simpan nilai yang reusable |
| **Nesting** | Hierarki CSS yang lebih bersih |
| **Mixins** | Reusable code blocks |
| **Inheritance** | Share CSS properties |
| **Functions** | Manipulasi nilai |
| **Partials** | Modular CSS |
| **Operators** | Matematika dalam CSS |

## Instalasi

### 1. Global Install
\`\`\`bash
# Install via npm
npm install -g sass

# Compile SCSS ke CSS
sass input.scss output.css

# Watch mode
sass --watch input.scss:output.css

# Watch entire folder
sass --watch styles/scss:styles/css
\`\`\`

### 2. Project Local
\`\`\`bash
npm install sass --save-dev
\`\`\`

### 3. With Node.js
\`\`\`javascript
const sass = require('sass');

const result = sass.compile('styles.scss');
console.log(result.css);
\`\`\`

## Setup dengan Tools

### VS Code Extensions
- **Live Sass Compiler** - Compile otomatis
- **Sass** - Syntax highlighting
- **SCSS Formatter** - Formatting

### Build Tools
\`\`\`javascript
// Webpack
module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
};

// Gulp
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});
\`\`\`

## Struktur Folder

\`\`\`
styles/
├── scss/
│   ├── abstracts/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── _functions.scss
│   ├── base/
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── components/
│   │   ├── _buttons.scss
│   │   └── _cards.scss
│   ├── layout/
│   │   ├── _header.scss
│   │   └── _footer.scss
│   ├── pages/
│   │   ├── _home.scss
│   │   └── _about.scss
│   └── main.scss
└── css/
    └── main.css
\`\`\`

## Compile Options

\`\`\`bash
# Output styles
sass input.scss output.css --style=expanded
sass input.scss output.css --style=compressed
sass input.scss output.css --style=compact
sass input.scss output.css --style=nested

# Source maps
sass input.scss output.css --source-map

# Watch with source maps
sass --watch styles.scss:styles.css --source-map
\`\`\`

## Example: Basic Usage

\`\`\`scss
// variables.scss
$primary: #3498db;
$secondary: #2ecc71;
$font-family: 'Arial', sans-serif;
$spacing: 20px;

// styles.scss
@import 'variables';

body {
    font-family: $font-family;
    margin: $spacing;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: $spacing;
}

.btn {
    display: inline-block;
    padding: 10px $spacing;
    background: $primary;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
        background: darken($primary, 10%);
    }
}
\`\`\`

## Perbedaan dengan CSS

| CSS | Sass |
|-----|------|
| Tidak ada variabel | Ada variabel |
| Tidak bisa nesting | Bisa nesting |
| Tidak ada mixins | Ada mixins |
| Tidak ada functions | Ada functions |
| Tidak bisa matematika | Bisa matematika |
| Tidak modular | Modular dengan partials |
| Tidak ada inheritance | Ada inheritance |
| Kode berulang | DRY (Don't Repeat Yourself) |
  `,
  quiz: [
    {
      question: "Apa itu Sass?",
      options: [
        "CSS Framework",
        "CSS Preprocessor",
        "JavaScript Library",
        "HTML Templating"
      ],
      correctAnswer: 1
    },
    {
      question: "Dua sintaks Sass adalah?",
      options: [
        "SCSS dan CSS",
        "SCSS dan Indented (Sass)",
        "Sass dan Less",
        "CSS dan Less"
      ],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk watch file Sass adalah?",
      options: [
        "sass watch input.scss",
        "sass --watch input.scss:output.css",
        "sass -w input.scss",
        "sass compile --watch"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Sass Setup Example",
      code: `// package.json
{
    "name": "sass-project",
    "scripts": {
        "sass": "sass --watch scss:css",
        "sass:build": "sass scss:css --style=compressed",
        "sass:dev": "sass scss:css --source-map"
    },
    "devDependencies": {
        "sass": "^1.69.0"
    }
}

// main.scss - Entry point
@import 'abstracts/variables';
@import 'abstracts/mixins';
@import 'abstracts/functions';

@import 'base/reset';
@import 'base/typography';

@import 'layout/header';
@import 'layout/footer';

@import 'components/buttons';
@import 'components/cards';

@import 'pages/home';
@import 'pages/about';

// _variables.scss
$colors: (
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

$breakpoints: (
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px
);

$typography: (
    font-family: ('Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif),
    font-sizes: (
        xs: 12px,
        sm: 14px,
        md: 16px,
        lg: 20px,
        xl: 24px,
        xxl: 32px,
        xxxl: 48px
    )
);
`,
      language: "scss"
    }
  ]
};