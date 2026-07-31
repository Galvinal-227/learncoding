export const chapter = {
  slug: "testing",
  title: "Testing dengan Storybook",
  description: "Menggunakan Storybook untuk testing visual, interaksi, dan aksesibilitas.",
  icon: "SiStorybook",
  color: "#FF4785",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["storybook-introduction", "storybook-stories"],
  tags: ["storybook", "testing", "visual", "interaction", "a11y"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Testing dengan Storybook

Storybook mendukung berbagai jenis testing:
- **Visual Testing** - Perubahan visual
- **Interaction Testing** - Perilaku interaksi
- **Accessibility Testing** - Aksesibilitas
- **Snapshot Testing** - Output komponen
- **Unit Testing** - Fungsi komponen

## Visual Testing

### Chromatic
\`\`\`bash
npm install --save-dev chromatic
\`\`\`

\`\`\`json
{
    "scripts": {
        "chromatic": "npx chromatic --project-token=YOUR_TOKEN"
    }
}
\`\`\`

\`\`\`bash
# Run visual tests
npm run chromatic

# Run with specific build
npm run chromatic -- --build-script-name=build-storybook
\`\`\`

## Interaction Testing

### Setup
\`\`\`bash
npm install --save-dev @storybook/test @storybook/testing-library @storybook/jest
\`\`\`

### Writing Interaction Tests
\`\`\`jsx
import { userEvent, within, expect, waitFor } from '@storybook/test';

export const InteractionTest = {
    args: {
        label: 'Click Me'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        
        // Find element
        const button = canvas.getByRole('button', { name: /click me/i });
        
        // Interact
        await userEvent.click(button);
        
        // Assert
        await expect(button).toBeDisabled();
        
        // Wait for async
        await waitFor(() => {
            expect(canvas.getByText('Clicked')).toBeInTheDocument();
        });
    }
};
\`\`\`

### Advanced Interaction Tests
\`\`\`jsx
export const ComplexInteraction = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        
        // Step 1: Fill form
        await step('Fill form fields', async () => {
            await userEvent.type(canvas.getByLabelText('Name'), 'John Doe');
            await userEvent.type(canvas.getByLabelText('Email'), 'john@example.com');
        });
        
        // Step 2: Submit form
        await step('Submit form', async () => {
            await userEvent.click(canvas.getByRole('button', { name: /submit/i }));
        });
        
        // Step 3: Check success message
        await step('Verify success', async () => {
            await expect(canvas.getByText('Success!')).toBeInTheDocument();
        });
        
        // Step 4: Check data
        await step('Verify data', async () => {
            const submitted = await canvas.findByTestId('submitted-data');
            expect(submitted).toHaveTextContent('John Doe');
        });
    }
};
\`\`\`

## Accessibility Testing

### A11y Addon
\`\`\`bash
npm install --save-dev @storybook/addon-a11y
\`\`\`

### A11y Tests
\`\`\`jsx
export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        a11y: {
            config: {
                rules: [
                    { id: 'color-contrast', enabled: true },
                    { id: 'button-name', enabled: true },
                    { id: 'aria-required-attr', enabled: true }
                ]
            }
        }
    }
};
\`\`\`

### Custom A11y Checks
\`\`\`jsx
export const A11yTest = {
    args: {
        label: 'Submit'
    },
    parameters: {
        a11y: {
            config: {
                rules: [
                    {
                        id: 'color-contrast',
                        enabled: true,
                        options: {
                            contrast: 4.5
                        }
                    }
                ]
            }
        }
    },
    play: async ({ canvasElement }) => {
        // Run a11y checks
        const results = await axe.run(canvasElement);
        expect(results.violations).toHaveLength(0);
    }
};
\`\`\`

## Snapshot Testing

### Setup
\`\`\`bash
npm install --save-dev @storybook/addon-storyshots
\`\`\`

### Snapshot Tests
\`\`\`javascript
// storybook.test.js
import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
    configPath: '.storybook',
    test: ({ story, context }) => {
        // Custom snapshot test
        const rendered = story.render();
        expect(rendered).toMatchSnapshot();
    }
});
\`\`\`

### Image Snapshot
\`\`\`javascript
// image-snapshot.test.js
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
    suite: 'Image snapshots',
    test: imageSnapshot({
        storybookUrl: 'http://localhost:6006',
        getMatchOptions: () => ({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        })
    })
});
\`\`\`

## Unit Testing with Storybook

### Testing Hooks
\`\`\`jsx
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
    test('should increment', () => {
        const { result } = renderHook(() => useCounter(0));
        
        act(() => {
            result.current.increment();
        });
        
        expect(result.current.count).toBe(1);
    });
});
\`\`\`

### Testing Components
\`\`\`jsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('renders with label', () => {
        render(<Button label="Click" />);
        expect(screen.getByText('Click')).toBeInTheDocument();
    });
});
\`\`\`

## CI/CD Integration

### GitHub Actions
\`\`\`yaml
name: Storybook Tests
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build Storybook
        run: npm run build-storybook
        
      - name: Run Chromatic
        run: npx chromatic --project-token="\${{ secrets.CHROMATIC_TOKEN }}"
        
      - name: Run Interaction Tests
        run: npm run test-storybook
        
      - name: Run A11y Tests
        run: npm run test:a11y
\`\`\`

### GitLab CI
\`\`\`yaml
# .gitlab-ci.yml
stages:
  - test

storybook-tests:
  stage: test
  image: node:18
  script:
    - npm ci
    - npm run build-storybook
    - npx chromatic --project-token=$CHROMATIC_TOKEN
    - npm run test-storybook
  artifacts:
    paths:
      - storybook-static/
\`\`\`

## Test Scripts

\`\`\`json
{
    "scripts": {
        "test": "jest",
        "test:storybook": "test-storybook",
        "test:a11y": "jest --testMatch='**/*.a11y.test.js'",
        "test:interaction": "jest --testMatch='**/*.interaction.test.js'",
        "test:visual": "npx chromatic",
        "test:all": "npm run test:storybook && npm run test:a11y && npm run test:visual"
    }
}
\`\`\`

## Best Practices

1. **Test user interactions** with play functions
2. **Run accessibility tests** on all components
3. **Use visual testing** for UI changes
4. **Write unit tests** for complex logic
5. **Integrate with CI/CD** pipeline
6. **Maintain test coverage** > 80%
7. **Use snapshot tests** for stable components
8. **Test edge cases** and error states
9. **Keep tests isolated** and deterministic
10. **Document test cases** in stories
  `,
  quiz: [
    {
      question: "Tool untuk visual testing di Storybook adalah?",
      options: [
        "Jest",
        "Chromatic",
        "Cypress",
        "Playwright"
      ],
      correctAnswer: 1
    },
    {
      question: "Library untuk interaction testing adalah?",
      options: [
        "@storybook/testing-library",
        "@storybook/test",
        "@storybook/jest",
        "Semua di atas"
      ],
      correctAnswer: 3
    },
    {
      question: "Addon untuk accessibility testing adalah?",
      options: [
        "@storybook/addon-a11y",
        "@storybook/addon-accessibility",
        "@storybook/addon-testing",
        "@storybook/addon-interactions"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Testing Setup",
      code: `// package.json
{
    "scripts": {
        "test": "jest",
        "test:storybook": "test-storybook",
        "test:a11y": "jest --testMatch='**/*.a11y.test.js'",
        "test:interaction": "jest --testMatch='**/*.interaction.test.js'",
        "test:visual": "npx chromatic --project-token=$CHROMATIC_TOKEN",
        "test:all": "npm run test:storybook && npm run test:a11y && npm run test:visual"
    },
    "devDependencies": {
        "@storybook/test": "^7.0.0",
        "@storybook/testing-library": "^0.2.0",
        "@storybook/jest": "^0.1.0",
        "@storybook/addon-a11y": "^7.0.0",
        "@storybook/addon-storyshots": "^7.0.0",
        "@storybook/addon-storyshots-puppeteer": "^7.0.0",
        "chromatic": "^6.0.0",
        "@testing-library/react": "^14.0.0",
        "jest": "^29.0.0"
    }
}

// __tests__/Button.a11y.test.js
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from '../src/components/Button';

expect.extend(toHaveNoViolations);

describe('Button Accessibility', () => {
    test('should have no accessibility violations', async () => {
        const { container } = render(
            <Button variant="primary" label="Submit" />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
    
    test('disabled button should have no violations', async () => {
        const { container } = render(
            <Button disabled label="Submit" />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});

// __tests__/Button.interaction.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../src/components/Button';

describe('Button Interactions', () => {
    test('should handle click events', async () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} label="Click Me" />);
        
        const button = screen.getByText('Click Me');
        await userEvent.click(button);
        
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    
    test('should be disabled when disabled prop is true', async () => {
        render(<Button disabled label="Click Me" />);
        const button = screen.getByText('Click Me');
        expect(button).toBeDisabled();
    });
});

// __tests__/Button.visual.test.js
import { render } from '@testing-library/react';
import { Button } from '../src/components/Button';

describe('Button Visual Tests', () => {
    test('should match snapshot', () => {
        const { container } = render(
            <Button variant="primary" label="Submit" />
        );
        expect(container).toMatchSnapshot();
    });
    
    test('different variants should match snapshots', () => {
        const variants = ['primary', 'secondary', 'danger'];
        variants.forEach(variant => {
            const { container } = render(
                <Button variant={variant} label={variant} />
            );
            expect(container).toMatchSnapshot(\`button-\${variant}\`);
        });
    });
});

// stories/Button.stories.jsx - with tests
import { Button } from './Button';
import { userEvent, within, expect } from '@storybook/test';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        // A11y configuration
        a11y: {
            config: {
                rules: [
                    { id: 'color-contrast', enabled: true },
                    { id: 'button-name', enabled: true }
                ]
            }
        }
    }
};

export const Primary = {
    args: {
        label: 'Button',
        variant: 'primary'
    }
};

export const WithInteractionTest = {
    args: {
        label: 'Click Me',
        variant: 'primary'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        
        // Test: Button exists
        const button = canvas.getByRole('button');
        await expect(button).toBeInTheDocument();
        
        // Test: Button has correct text
        await expect(button).toHaveTextContent('Click Me');
        
        // Test: Click interaction
        await userEvent.click(button);
        
        // Test: Button becomes disabled after click
        await expect(button).toBeDisabled();
    }
};

export const A11yTest = {
    args: {
        label: 'Accessible Button'
    },
    parameters: {
        a11y: {
            config: {
                rules: [
                    { id: 'color-contrast', enabled: true, options: { contrast: 4.5 } }
                ]
            }
        }
    }
};

// test-storybook.js - Custom Storybook Test Runner
import { TestRunner } from '@storybook/test-runner';
import { toHaveNoViolations } from 'jest-axe';
import { axe } from '@storybook/test-runner';

expect.extend(toHaveNoViolations);

const customTestRunner = (config) => {
    const runner = new TestRunner(config);
    
    runner.run({
        // A11y test for every story
        afterEach: async (story, context) => {
            const { container } = context;
            const results = await axe(container);
            expect(results).toHaveNoViolations();
        }
    });
};

export default customTestRunner;

// .storybook/test-runner.js
module.exports = {
    // Custom test runner configuration
    config: {
        testMatch: [
            '<rootDir>/src/**/*.stories.@(js|jsx|ts|tsx)'
        ],
        setupFilesAfterEnv: ['<rootDir>/.storybook/test-setup.js']
    }
};

// .storybook/test-setup.js
import { setProjectAnnotations } from '@storybook/react';
import * as globalAnnotations from './preview';

// Apply global annotations
setProjectAnnotations(globalAnnotations);

// Global test setup
beforeEach(() => {
    // Setup common test data
});

afterEach(() => {
    // Cleanup after each test
});`,
      language: "javascript"
    }
  ]
};