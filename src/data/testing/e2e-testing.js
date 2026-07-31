export const chapter = {
  slug: "e2e-testing",
  title: "E2E Testing",
  description: "Menguji aplikasi dari ujung ke ujung dengan Cypress dan Playwright.",
  icon: "SiTestinglibrary",
  color: "#E33332",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["testing-introduction", "testing-integration-testing"],
  tags: ["testing", "e2e", "cypress", "playwright"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu E2E Testing?

E2E (End-to-End) testing menguji seluruh aplikasi dari frontend ke backend.

## Cypress

### Install
\`\`\`bash
npm install cypress --save-dev
npx cypress open
\`\`\`

### Example Test
\`\`\`javascript
// cypress/e2e/login.cy.js
describe('Login Flow', () => {
    beforeEach(() => {
        cy.visit('/login');
    });
    
    it('shows error for invalid credentials', () => {
        cy.get('[data-testid="email"]').type('invalid@example.com');
        cy.get('[data-testid="password"]').type('wrongpass');
        cy.get('[data-testid="submit"]').click();
        cy.contains('Invalid credentials').should('be.visible');
    });
    
    it('logs in successfully', () => {
        cy.get('[data-testid="email"]').type('user@example.com');
        cy.get('[data-testid="password"]').type('password123');
        cy.get('[data-testid="submit"]').click();
        cy.url().should('include', '/dashboard');
        cy.contains('Welcome').should('be.visible');
    });
});
\`\`\`

### Cypress Commands
\`\`\`javascript
// cypress/support/commands.js
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(password);
    cy.get('[data-testid="submit"]').click();
});

// Usage
cy.login('user@example.com', 'password123');
\`\`\`

## Playwright

### Install
\`\`\`bash
npm init playwright@latest
\`\`\`

### Example Test
\`\`\`javascript
// tests/login.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Login Flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/login');
    });
    
    test('shows error for invalid credentials', async ({ page }) => {
        await page.fill('[data-testid="email"]', 'invalid@example.com');
        await page.fill('[data-testid="password"]', 'wrongpass');
        await page.click('[data-testid="submit"]');
        await expect(page.locator('text=Invalid credentials')).toBeVisible();
    });
    
    test('logs in successfully', async ({ page }) => {
        await page.fill('[data-testid="email"]', 'user@example.com');
        await page.fill('[data-testid="password"]', 'password123');
        await page.click('[data-testid="submit"]');
        await expect(page).toHaveURL('/dashboard');
        await expect(page.locator('text=Welcome')).toBeVisible();
    });
});
\`\`\`

## E2E Best Practices

1. **Test critical user paths**
2. **Use data-testid** - Bukan class atau ID
3. **Keep tests independent**
4. **Use page objects**
5. **Handle async operations**
6. **Test across browsers**
7. **Run in CI/CD**
8. **Use visual testing**

## Page Object Pattern

\`\`\`javascript
// pages/LoginPage.js
class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = '[data-testid="email"]';
        this.passwordInput = '[data-testid="password"]';
        this.submitButton = '[data-testid="submit"]';
    }
    
    async navigate() {
        await this.page.goto('/login');
    }
    
    async login(email, password) {
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.submitButton);
    }
    
    async getErrorMessage() {
        return this.page.locator('text=Invalid credentials');
    }
}

// test
test('login with page object', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('user@example.com', 'password123');
    await expect(page).toHaveURL('/dashboard');
});
\`\`\`
  `,
  quiz: [
    {
      question: "Tools untuk E2E testing adalah?",
      options: ["Jest", "Cypress", "Mocha", "Chai"],
      correctAnswer: 1
    },
    {
      question: "Selector yang disarankan untuk E2E testing adalah?",
      options: ["class", "id", "data-testid", "tag"],
      correctAnswer: 2
    },
    {
      question: "Pattern untuk mengorganisir E2E test adalah?",
      options: ["Factory Pattern", "Page Object Pattern", "Singleton Pattern", "Observer Pattern"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete E2E Tests",
      code: `// ============================================
// 1. Login Flow (Cypress)
// ============================================
// cypress/e2e/login.cy.js
describe('Login Flow', () => {
    beforeEach(() => {
        cy.visit('/login');
    });
    
    it('displays login form', () => {
        cy.get('[data-testid="email"]').should('be.visible');
        cy.get('[data-testid="password"]').should('be.visible');
        cy.get('[data-testid="submit"]').should('be.visible');
    });
    
    it('shows validation errors', () => {
        cy.get('[data-testid="submit"]').click();
        cy.contains('Email is required').should('be.visible');
        cy.contains('Password is required').should('be.visible');
    });
    
    it('logs in successfully and redirects', () => {
        cy.intercept('POST', '/api/auth/login', {
            statusCode: 200,
            body: { token: 'fake-token', user: { id: 1, name: 'Test' } }
        }).as('login');
        
        cy.get('[data-testid="email"]').type('test@example.com');
        cy.get('[data-testid="password"]').type('password123');
        cy.get('[data-testid="submit"]').click();
        
        cy.wait('@login');
        cy.url().should('include', '/dashboard');
        cy.contains('Welcome, Test').should('be.visible');
    });
});

// ============================================
// 2. Todo App (Cypress)
// ============================================
// cypress/e2e/todo.cy.js
describe('Todo App', () => {
    beforeEach(() => {
        cy.visit('/todos');
    });
    
    it('adds a new todo', () => {
        cy.get('[data-testid="todo-input"]').type('Buy groceries{enter}');
        cy.contains('Buy groceries').should('be.visible');
        cy.get('[data-testid="todo-count"]').should('contain', '1');
    });
    
    it('toggles todo completion', () => {
        cy.get('[data-testid="todo-input"]').type('Task 1{enter}');
        cy.get('[data-testid="todo-checkbox"]').click();
        cy.get('[data-testid="todo-item"]').should('have.class', 'completed');
    });
    
    it('deletes a todo', () => {
        cy.get('[data-testid="todo-input"]').type('Task to delete{enter}');
        cy.get('[data-testid="delete-btn"]').click();
        cy.contains('Task to delete').should('not.exist');
        cy.get('[data-testid="todo-count"]').should('contain', '0');
    });
});

// ============================================
// 3. API Testing (Playwright)
// ============================================
// tests/api.spec.js
const { test, expect } = require('@playwright/test');

test.describe('API Tests', () => {
    let apiContext;
    
    test.beforeAll(async ({ playwright }) => {
        apiContext = await playwright.request.newContext({
            baseURL: 'https://api.example.com'
        });
    });
    
    test('creates and fetches user', async () => {
        const createResponse = await apiContext.post('/users', {
            data: {
                name: 'Test User',
                email: 'test@example.com'
            }
        });
        expect(createResponse.ok()).toBeTruthy();
        const user = await createResponse.json();
        
        const getResponse = await apiContext.get(\`/users/\${user.id}\`);
        expect(getResponse.ok()).toBeTruthy();
        const fetched = await getResponse.json();
        expect(fetched.name).toBe('Test User');
    });
});

// ============================================
// 4. Visual Regression (Cypress)
// ============================================
// cypress/e2e/visual.cy.js
describe('Visual Regression', () => {
    it('homepage matches snapshot', () => {
        cy.visit('/');
        cy.percySnapshot('Homepage');
    });
    
    it('dashboard matches snapshot', () => {
        cy.login('user@example.com', 'password123');
        cy.visit('/dashboard');
        cy.percySnapshot('Dashboard');
    });
});

// ============================================
// 5. Custom Commands (Cypress)
// ============================================
// cypress/support/commands.js
Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
        cy.visit('/login');
        cy.get('[data-testid="email"]').type(email);
        cy.get('[data-testid="password"]').type(password);
        cy.get('[data-testid="submit"]').click();
        cy.url().should('include', '/dashboard');
    });
});

Cypress.Commands.add('createTodo', (text) => {
    cy.get('[data-testid="todo-input"]').type(text);
    cy.get('[data-testid="todo-input"]').type('{enter}');
});

Cypress.Commands.add('getTodo', (text) => {
    return cy.contains('[data-testid="todo-item"]', text);
});`,
      language: "javascript"
    }
  ]
};