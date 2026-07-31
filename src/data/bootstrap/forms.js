export const chapter = {
  slug: "bootstrap-forms",
  title: "Forms & Input",
  description: "Bangun form profesional dengan Bootstrap form controls dan validation.",
  icon: "SiBootstrap",
  color: "#7952B3",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["bootstrap-components"],
  tags: ["bootstrap", "forms", "input", "validation"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Form di Bootstrap

Bootstrap menyediakan styling lengkap untuk form controls, layout, dan validasi.

## Basic Form

\`\`\`html
<form>
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="nama@email.com">
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password">
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="remember">
        <label class="form-check-label" for="remember">Ingat saya</label>
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
</form>
\`\`\`

## Form Layout

### Horizontal
\`\`\`html
<form>
    <div class="row mb-3">
        <label for="email" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="email">
        </div>
    </div>
</form>
\`\`\`

### Inline
\`\`\`html
<form class="row row-cols-lg-auto g-3 align-items-center">
    <div class="col-12">
        <input type="email" class="form-control" placeholder="Email">
    </div>
    <div class="col-12">
        <input type="password" class="form-control" placeholder="Password">
    </div>
    <div class="col-12">
        <button class="btn btn-primary">Login</button>
    </div>
</form>
\`\`\`

## Input Types

\`\`\`html
<!-- Text -->
<input type="text" class="form-control">

<!-- Select -->
<select class="form-select">
    <option selected>Pilih...</option>
    <option value="1">Option 1</option>
</select>

<!-- Textarea -->
<textarea class="form-control" rows="3"></textarea>

<!-- File -->
<input type="file" class="form-control">

<!-- Range -->
<input type="range" class="form-range">

<!-- Color -->
<input type="color" class="form-control form-control-color">

<!-- Switch -->
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox">
    <label class="form-check-label">Dark Mode</label>
</div>
\`\`\`

## Validation

\`\`\`html
<form class="was-validated">
    <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" required>
        <div class="valid-feedback">✅ Valid!</div>
        <div class="invalid-feedback">❌ Format email salah</div>
    </div>
</form>
\`\`\`

## Input Group

\`\`\`html
<div class="input-group mb-3">
    <span class="input-group-text">@</span>
    <input type="text" class="form-control" placeholder="Username">
</div>

<div class="input-group mb-3">
    <span class="input-group-text">Rp</span>
    <input type="number" class="form-control">
    <span class="input-group-text">.00</span>
</div>
\`\`\`

## Floating Labels

\`\`\`html
<div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingEmail" placeholder="nama@email.com">
    <label for="floatingEmail">Email</label>
</div>
\`\`\`
  `,

  quiz: [
    { question: "Class input Bootstrap?", options: ["form-input", "form-control", "input-field", "bootstrap-input"], correctAnswer: 1 },
    { question: "Class validasi sukses?", options: [".valid-feedback", ".success-feedback", ".good-feedback", ".ok-feedback"], correctAnswer: 0 },
    { question: "Input group untuk?", options: ["Group input", "Menambah teks/ikon di input", "Multiple form", "Form layout"], correctAnswer: 1 }
  ],

  codeExamples: []
};