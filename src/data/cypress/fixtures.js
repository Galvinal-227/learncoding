export const chapter = {
  slug: "cypress-fixtures",
  title: "Fixtures & Mock Data",
  description: "Gunakan fixtures untuk mock data yang konsisten di test.",
  icon: "SiCypress",
  color: "#69D3A7",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["cypress-commands"],
  tags: ["cypress", "fixtures", "mock", "data"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Fixtures?

Fixtures adalah file data (JSON, JS, image) yang digunakan sebagai **mock data** di test. Disimpan di \`cypress/fixtures/\`.

## Membuat Fixture

\`\`\`json
// cypress/fixtures/user.json
{
    "id": 1,
    "name": "Budi Santoso",
    "email": "budi@email.com",
    "role": "admin"
}
\`\`\`

\`\`\`json
// cypress/fixtures/users.json
[
    { "id": 1, "name": "Budi" },
    { "id": 2, "name": "Siti" },
    { "id": 3, "name": "Agus" }
]
\`\`\`

## Menggunakan Fixture

### Via cy.fixture()
\`\`\`javascript
cy.fixture('user').then((user) => {
    cy.get('input[name="email"]').type(user.email);
});
\`\`\`

### Via intercept()
\`\`\`javascript
cy.fixture('users').then((users) => {
    cy.intercept('GET', '/api/users', {
        statusCode: 200,
        body: users
    });
});

cy.visit('/users');
cy.get('.user-card').should('have.length', 3);
\`\`\`

## Contoh Lengkap

\`\`\`javascript
// cypress/e2e/profile.cy.js
describe('Profile Page', () => {
    beforeEach(() => {
        cy.fixture('user').as('userData');
    });
    
    it('should display user profile', function() {
        cy.intercept('GET', '/api/user', {
            body: this.userData
        }).as('getUser');
        
        cy.visit('/profile');
        cy.wait('@getUser');
        
        cy.contains(this.userData.name).should('be.visible');
        cy.contains(this.userData.email).should('be.visible');
    });
});
\`\`\`
  `,

  quiz: [
    { question: "Fixture disimpan di folder?", options: ["e2e/", "fixtures/", "support/", "mocks/"], correctAnswer: 1 },
    { question: "Akses fixture di test?", options: ["cy.get('fixture')", "cy.fixture('name')", "cy.load('name')", "cy.data('name')"], correctAnswer: 1 }
  ],

  codeExamples: []
};