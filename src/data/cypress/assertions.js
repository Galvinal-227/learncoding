export const chapter = {
  slug: "cypress-assertions",
  title: "Assertions & Expectations",
  description: "Kuasai assertions di Cypress untuk memvalidasi state aplikasi.",
  icon: "SiCypress",
  color: "#69D3A7",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["cypress-writing-tests"],
  tags: ["cypress", "assertion", "should", "expect"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Dua Jenis Assertions

### 1. Implicit (Built-in)
Beberapa command sudah auto-assert:
\`\`\`javascript
cy.visit('/');         // Assert page loaded
cy.get('.card');       // Assert element exists (retry 4 detik)
cy.contains('Submit'); // Assert text exists
\`\`\`

### 2. Explicit (should / expect)
\`\`\`javascript
cy.get('.card').should('be.visible');
cy.get('.card').should('have.length', 3);
cy.get('input').should('have.value', 'Budi');
\`\`\`

## Common Assertions

### Visibility
\`\`\`javascript
cy.get('.modal').should('be.visible');
cy.get('.modal').should('not.be.visible');
cy.get('.tooltip').should('exist');
cy.get('.spinner').should('not.exist');
\`\`\`

### Text & Content
\`\`\`javascript
cy.get('h1').should('contain', 'Welcome');
cy.get('h1').should('have.text', 'Welcome Back!');
cy.get('.alert').should('include.text', 'Error');
cy.get('.card').should('contain.html', '<span>');
\`\`\`

### Attributes & CSS
\`\`\`javascript
cy.get('a').should('have.attr', 'href', '/about');
cy.get('input').should('have.attr', 'placeholder');
cy.get('button').should('have.class', 'active');
cy.get('.box').should('have.css', 'background-color', 'rgb(255, 0, 0)');
\`\`\`

### Form Values
\`\`\`javascript
cy.get('input').should('have.value', 'budi@email.com');
cy.get('textarea').should('not.have.value');
cy.get('select').should('have.value', 'jakarta');
cy.get('input[type="checkbox"]').should('be.checked');
cy.get('input[type="checkbox"]').should('not.be.checked');
\`\`\`

### Length & Count
\`\`\`javascript
cy.get('li').should('have.length', 5);
cy.get('li').should('have.length.greaterThan', 2);
cy.get('li').should('have.length.lessThan', 10);
\`\`\`

## expect() Assertions

\`\`\`javascript
cy.get('input').invoke('val').then((value) => {
    expect(value).to.include('@');
    expect(value.length).to.be.at.least(5);
});

cy.wrap({ name: 'Budi', age: 25 }).should((obj) => {
    expect(obj).to.have.property('name', 'Budi');
    expect(obj.age).to.be.within(18, 60);
});
\`\`\`

## Chai Assertions (Built-in)

\`\`\`javascript
// Equality
expect('hello').to.equal('hello');
expect([1,2,3]).to.deep.equal([1,2,3]);

// Type
expect(42).to.be.a('number');
expect([]).to.be.an('array');

// Boolean
expect(true).to.be.true;
expect(null).to.be.null;
expect(undefined).to.be.undefined;

// Length
expect('hello').to.have.lengthOf(5);
expect([1,2,3]).to.have.length(3);

// String
expect('hello@email.com').to.include('@');
expect('Hello World').to.match(/^Hello/);
\`\`\`
  `,

  quiz: [
    { question: "Cek element visible?", options: ["cy.get('.el').visible()", "cy.get('.el').should('be.visible')", "cy.get('.el').isVisible()", "cy.visible('.el')"], correctAnswer: 1 },
    { question: "Cek jumlah element?", options: ["cy.get('li').count()", "cy.get('li').should('have.length', 5)", "cy.get('li').length(5)", "cy.count('li', 5)"], correctAnswer: 1 }
  ],

  codeExamples: []
};