export const chapter = {
  slug: "parcel-transformers",
  title: "Transformers & Plugins",
  description: "Gunakan transformers untuk SCSS, TypeScript, JSX, dan custom transformations.",
  icon: "SiParcel",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["parcel-zero-config"],
  tags: ["parcel", "transformers", "plugins", "scss"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Built-in Transformers

Parcel auto-detect dan apply transformers:

\`\`\`
✅ JavaScript/TypeScript → @parcel/transformer-js
✅ JSX/TSX → @parcel/transformer-js
✅ CSS → @parcel/transformer-css
✅ SCSS/Sass → @parcel/transformer-sass (auto-install)
✅ HTML → @parcel/transformer-html
✅ JSON → @parcel/transformer-json
✅ Images → @parcel/transformer-image
✅ Raw → @parcel/transformer-raw
✅ SVG → @parcel/transformer-svg
\`\`\`

## SCSS (Auto Setup)

\`\`\`bash
# Parcel akan auto-install sass
npm install -D sass  # Atau Parcel auto-install
\`\`\`

\`\`\`scss
// styles.scss
$primary: #3498db;

body {
    background: $primary;
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}
\`\`\`

\`\`\`javascript
import './styles.scss'; // Langsung bisa!
\`\`\`

## Custom Transformer Config

\`\`\`json
// .parcelrc
{
    "extends": "@parcel/config-default",
    "transformers": {
        "*.custom": ["@parcel/transformer-raw"]
    }
}
\`\`\`

## PostCSS Integration

\`\`\`bash
npm install -D postcss autoprefixer tailwindcss
\`\`\`

\`\`\`javascript
// postcss.config.js
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}
    }
};
\`\`\`

## Babel Integration

\`\`\`bash
npm install -D @babel/core @babel/preset-env
\`\`\`

\`\`\`json
// .parcelrc
{
    "extends": "@parcel/config-default",
    "transformers": {
        "*.{js,mjs,jsm,jsx,es6,cjs,ts,tsx}": [
            "@parcel/transformer-babel",
            "@parcel/transformer-js",
            "@parcel/transformer-react-refresh-wrap"
        ]
    }
}
\`\`\`

## Custom Transformer

\`\`\`javascript
// custom-transformer.js
import { Transformer } from '@parcel/plugin';

export default new Transformer({
    async transform({ asset }) {
        const code = await asset.getCode();
        const result = code.toUpperCase();
        asset.setCode(result);
        return [asset];
    }
});
\`\`\`

\`\`\`json
// .parcelrc
{
    "transformers": {
        "*.uppercase": ["./custom-transformer.js"]
    }
}
\`\`\`
  `,

  quiz: [
    { question: "SCSS in Parcel?", options: ["Not supported", "Auto (install sass or auto-install)", "Manual config", "Webpack only"], correctAnswer: 1 },
    { question: ".parcelrc?", options: ["Package list", "Parcel configuration file", "CSS file", "HTML"], correctAnswer: 1 }
  ],

  codeExamples: []
};