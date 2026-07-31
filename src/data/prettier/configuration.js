export const chapter = {
  slug: "prettier-configuration",
  title: "Konfigurasi Prettier",
  description: "Konfigurasi Prettier dengan .prettierrc, package.json, dan options lengkap.",
  icon: "SiPrettier",
  color: "#F7B93E",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["prettier-introduction"],
  tags: ["prettier", "config", ".prettierrc", "options"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Config File

### .prettierrc (JSON)
\`\`\`json
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2,
    "useTabs": false,
    "trailingComma": "es5",
    "bracketSpacing": true,
    "arrowParens": "always",
    "printWidth": 100,
    "endOfLine": "lf"
}
\`\`\`

### .prettierrc.js (JavaScript)
\`\`\`javascript
export default {
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'es5',
    printWidth: 100
};
\`\`\`

### package.json
\`\`\`json
{
    "prettier": {
        "semi": true,
        "singleQuote": true,
        "tabWidth": 2
    }
}
\`\`\`

## Options Penting

| Option | Default | Deskripsi |
|--------|---------|-----------|
| **semi** | true | Titik koma di akhir statement |
| **singleQuote** | false | Single quote (true) vs double (false) |
| **tabWidth** | 2 | Lebar indentasi |
| **useTabs** | false | Gunakan tab (true) atau spasi (false) |
| **trailingComma** | "all" | Koma di akhir: "none", "es5", "all" |
| **bracketSpacing** | true | Spasi dalam { obj: 1 } |
| **arrowParens** | "always" | Tanda kurung arrow function |
| **printWidth** | 80 | Max panjang baris |
| **endOfLine** | "lf" | Line ending: "lf", "crlf", "auto" |
| **bracketSameLine** | false | `>` di baris yang sama (JSX) |
| **singleAttributePerLine** | false | Satu atribut per baris (JSX) |

## Recommended Config

\`\`\`json
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "bracketSpacing": true,
    "arrowParens": "always",
    "printWidth": 100,
    "endOfLine": "lf"
}
\`\`\`

## Override per File

\`\`\`json
{
    "semi": true,
    "singleQuote": true,
    "overrides": [
        {
            "files": "*.json",
            "options": { "tabWidth": 2 }
        },
        {
            "files": "*.md",
            "options": { "proseWrap": "always" }
        },
        {
            "files": ["*.yml", "*.yaml"],
            "options": { "tabWidth": 2, "singleQuote": false }
        }
    ]
}
\`\`\`

## EditorConfig Integration

\`\`\`ini
# .editorconfig
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
\`\`\`
  `,

  quiz: [
    { question: "semi: true?", options: ["No semicolon", "Add semicolons", "Ignore", "Error"], correctAnswer: 1 },
    { question: "trailingComma: 'es5'?", options: ["No comma", "Comma in ES5 places (arrays, objects)", "All places", "None"], correctAnswer: 1 }
  ],

  codeExamples: []
};