export const chapter = {
  slug: "cypress-custom-commands",
  title: "Custom Commands",
  description: "Buat command kustom untuk reuse code testing.",
  icon: "SiCypress",
  color: "#69D3A7",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["cypress-commands"],
  tags: ["cypress", "custom", "reusable", "commands"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Kenapa Custom Commands?

DRY (Don't Repeat Yourself) di testing. Actions yang sering dipakai diekstrak jadi command.

## Membuat Custom Command

\`\`\`javascript
// cypress/support/commands.js

// Login command
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
});

// Gunakan di test:
cy.login('user@email.com', 'password123');
\`\`\`

## Custom Commands Collection

\`\`\`javascript
// cypress/support/commands.js

// Login via API (lebih cepat dari UI)
Cypress.Commands.add('loginByApi', (email, password) => {
    cy.request('POST', '/api/login', { email, password })
        .its('body.token')
        .then(token => {
            window.localStorage.setItem('token', token);
        });
});

// Logout
Cypress.Commands.add('logout', () => {
    cy.get('.user-menu').click();
    cy.contains('Logout').click();
    cy.url().should('include', '/login');
});

// Isi form
Cypress.Commands.add('fillForm', (formData) => {
    Object.entries(formData).forEach(([field, value]) => {
        cy.get(\`[name="\${field}"]\`).type(value);
    });
});

// Drag & drop
Cypress.Commands.add('dragAndDrop', (source, target) => {
    cy.get(source).trigger('dragstart');
    cy.get(target).trigger('drop');
});

// Cek toast notification
Cypress.Commands.add('checkToast', (message, type = 'success') => {
    cy.get(\`.toast.toast--\${type}\`)
        .should('be.visible')
        .should('contain', message);
});
\`\`\`

## Parent vs Child Command

\`\`\`javascript
// Parent command (cy.login)
Cypress.Commands.add('login', () => { });

// Child command (cy.get('.card').highlight())
Cypress.Commands.add('highlight', { prevSubject: 'element' }, (subject) => {
    cy.wrap(subject).should('be.visible').css('border', '2px solid red');
});

// Gunakan:
cy.get('.card').highlight();
\`\`\`

## Overwrite Existing Command

\`\`\`javascript
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    console.log(\`Visiting: \${url}\`);
    return originalFn(url, options);
});
\`\`\`
  `,

  quiz: [
    { question: "Custom command dibuat di file?", options: ["cypress.config.js", "commands.js", "fixtures.js", "test.cy.js"], correctAnswer: 1 },
    { question: "add() vs overwrite()?", options: ["Sama", "add: baru; overwrite: ganti existing", "overwrite lebih cepat", "add deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};