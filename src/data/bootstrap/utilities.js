export const chapter = {
  slug: "bootstrap-utilities",
  title: "Utility Classes",
  description: "Pelajari utility classes Bootstrap untuk spacing, text, display, flex, dan lainnya.",
  icon: "SiBootstrap",
  color: "#7952B3",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["bootstrap-introduction"],
  tags: ["bootstrap", "utility", "spacing", "flex"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Utility Classes

Bootstrap punya ratusan utility classes untuk styling cepat tanpa CSS kustom.

## Spacing (Margin & Padding)

Format: \`{property}{sides}-{size}\`

\`\`\`html
<!-- Margin -->
<div class="m-0">margin: 0</div>
<div class="m-3">margin: 1rem</div>
<div class="mt-3">margin-top</div>
<div class="mb-3">margin-bottom</div>
<div class="ms-3">margin-left (start)</div>
<div class="me-3">margin-right (end)</div>
<div class="mx-3">margin-left + right</div>
<div class="my-3">margin-top + bottom</div>

<!-- Padding -->
<div class="p-3">padding: 1rem</div>
<div class="px-4 py-2">padding horizontal + vertikal</div>
\`\`\`

### Size: 0-5 + auto
\`\`\`
0 = 0
1 = 0.25rem (4px)
2 = 0.5rem  (8px)
3 = 1rem    (16px)
4 = 1.5rem  (24px)
5 = 3rem    (48px)
auto = auto margin
\`\`\`

## Display

\`\`\`html
<div class="d-none">Hidden</div>
<div class="d-block">Block</div>
<div class="d-inline">Inline</div>
<div class="d-inline-block">Inline-block</div>
<div class="d-flex">Flex</div>
<div class="d-grid">Grid</div>

<!-- Responsive -->
<div class="d-none d-md-block">Hidden mobile, tampil tablet+</div>
\`\`\`

## Flex Utilities

\`\`\`html
<div class="d-flex justify-content-center align-items-center">
    Konten di tengah
</div>
<div class="d-flex justify-content-between">Spasi antara</div>
<div class="flex-grow-1">Tumbuh</div>
\`\`\`

## Text

\`\`\`html
<p class="text-start">Kiri</p>
<p class="text-center">Tengah</p>
<p class="text-end">Kanan</p>

<p class="text-primary">Biru</p>
<p class="text-success">Hijau</p>
<p class="text-danger">Merah</p>
<p class="text-muted">Abu-abu</p>

<p class="fw-bold">Tebal</p>
<p class="fst-italic">Miring</p>
<p class="text-uppercase">uppercase</p>
<p class="text-truncate" style="max-width:200px">Teks panjang terpotong...</p>
\`\`\`

## Background & Border

\`\`\`html
<div class="bg-primary text-white p-3">Primary background</div>
<div class="bg-light p-3">Light background</div>

<div class="border p-3">Default border</div>
<div class="border border-primary p-3">Primary border</div>
<div class="border rounded p-3">Rounded</div>
<div class="border rounded-circle p-3">Circle</div>
<div class="shadow p-3">Shadow</div>
\`\`\`

## Width & Height

\`\`\`html
<div class="w-50">Width 50%</div>
<div class="w-100">Width 100%</div>
<div class="mw-100">Max width 100%</div>
<div class="vh-100">Height 100vh</div>
\`\`\`
  `,

  quiz: [
    { question: "Class margin-bottom 1rem?", options: ["mb-1", "mb-3", "mb-4", "mb-0"], correctAnswer: 1, explanation: "mb-3 = margin-bottom: 1rem (16px). Size 3 = 1rem." },
    { question: "Class untuk hidden di mobile, tampil di desktop?", options: ["d-md-none", "d-none d-md-block", "hidden-mobile", "show-desktop"], correctAnswer: 1 },
    { question: "Class flex centering?", options: ["flex-center", "text-center", "justify-content-center align-items-center", "center-flex"], correctAnswer: 2 }
  ],

  codeExamples: []
};