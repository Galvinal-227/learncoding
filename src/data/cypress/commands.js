export const chapter = {
  slug: "cypress-commands",
  title: "Cypress Commands",
  description: "Pelajari commands penting: get, find, click, type, select, intercept.",
  icon: "SiCypress",
  color: "#69D3A7",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["cypress-assertions"],
  tags: ["cypress", "commands", "interact", "api"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Query Commands (Mencari Elemen)

### get() - Paling Sering Dipakai
\`\`\`javascript
cy.get('.card');                   // By class
cy.get('#submit');                 // By id
cy.get('input[name="email"]');     // By attribute
cy.get('nav a');                   // By tag + descendant
cy.get('[data-testid="hero"]');    // By data attribute (rekomendasi!)
\`\`\`

### contains() - Cari Berdasarkan Teks
\`\`\`javascript
cy.contains('Submit');
cy.contains('button', 'Save');
cy.contains('.card', 'Featured');
\`\`\`

### find() - Cari di Dalam Elemen
\`\`\`javascript
cy.get('.card').find('h3');
cy.get('form').find('input[type="email"]');
\`\`\`

## Action Commands (Interaksi)

### click()
\`\`\`javascript
cy.get('button').click();
cy.contains('Save').click();
cy.get('button').click({ force: true });  // Skip visibility check
cy.get('button').click({ multiple: true }); // Klik semua
\`\`\`

### type()
\`\`\`javascript
cy.get('input').type('Hello World');
cy.get('input').type('{enter}');          // Keyboard special
cy.get('input').type('{selectall}{del}'); // Clear input
cy.get('input').clear().type('New text'); // Clear + type
\`\`\`

### select()
\`\`\`javascript
cy.get('select').select('jakarta');
cy.get('select').select(['red', 'blue']); // Multi-select
\`\`\`

### check() / uncheck()
\`\`\`javascript
cy.get('input[type="checkbox"]').check();
cy.get('input[type="radio"]').check('option1');
cy.get('input[type="checkbox"]').uncheck();
\`\`\`

## Network Commands

### request() - HTTP Request
\`\`\`javascript
cy.request('GET', '/api/users').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.length(10);
});

cy.request('POST', '/api/users', {
    name: 'Budi',
    email: 'budi@email.com'
});
\`\`\`

### intercept() - Stub/Mock API
\`\`\`javascript
// Mock response
cy.intercept('GET', '/api/users', {
    statusCode: 200,
    body: [{ id: 1, name: 'Budi' }]
}).as('getUsers');

// Tunggu request selesai
cy.wait('@getUsers');

// Intercept dengan dynamic response
cy.intercept('POST', '/api/login', (req) => {
    req.reply({ token: 'fake-jwt-token' });
});
\`\`\`

## Utility Commands

\`\`\`javascript
cy.log('Debug message');
cy.url().should('include', '/dashboard');
cy.title().should('eq', 'My App');
cy.screenshot();  // Manual screenshot
cy.scrollTo('bottom');
cy.reload();      // Refresh halaman
cy.go('back');    // Browser back
cy.go('forward'); // Browser forward
\`\`\`

## Chaining

\`\`\`javascript
cy.get('.card')
    .should('have.length', 3)
    .first()
    .find('h3')
    .should('have.text', 'Title');
\`\`\`
  `,

  quiz: [
    { question: "get() vs contains()?", options: ["Sama", "get: by selector; contains: by text", "contains lebih cepat", "get deprecated"], correctAnswer: 1 },
    { question: "intercept() untuk?", options: ["Debug", "Stub/mock network request", "Click element", "Type text"], correctAnswer: 1 },
    { question: "Data attribute rekomendasi untuk testing?", options: ["id", "class", "data-testid", "name"], correctAnswer: 2, explanation: "data-testid tidak berubah saat styling/refactor, stabil untuk testing." }
  ],

  codeExamples: [
    {
      title: "Test dengan API Intercept",
      language: "javascript",
      code: `// cypress/e2e/dashboard.cy.js
describe('Dashboard', () => {
    beforeEach(() => {
        // Mock API
        cy.intercept('GET', '/api/user', {
            statusCode: 200,
            body: { name: 'Budi', role: 'admin' }
        }).as('getUser');
        
        cy.intercept('GET', '/api/stats', {
            statusCode: 200,
            body: { visitors: 1234, revenue: 50000 }
        }).as('getStats');
        
        cy.visit('/dashboard');
    });
    
    it('should display user info', () => {
        cy.wait('@getUser');
        cy.contains('Welcome, Budi').should('be.visible');
        cy.contains('admin').should('be.visible');
    });
    
    it('should display stats', () => {
        cy.wait('@getStats');
        cy.contains('1,234').should('be.visible');
        cy.contains('50,000').should('be.visible');
    });
    
    it('should handle error', () => {
        cy.intercept('GET', '/api/user', {
            statusCode: 500,
            body: { error: 'Server error' }
        }).as('getUserError');
        
        cy.visit('/dashboard');
        cy.wait('@getUserError');
        cy.contains('Error loading data').should('be.visible');
    });
});`
    }
  ]
};