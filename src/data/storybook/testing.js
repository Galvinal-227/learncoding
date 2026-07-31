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
        
        const button = canvas.getByRole('button', { name: /click me/i });
        
        await userEvent.click(button);
        
        await expect(button).toBeDisabled();
        
        await waitFor(() => {
            expect(canvas.getByText('Clicked')).toBeInTheDocument();
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
                    { id: 'button-name', enabled: true }
                ]
            }
        }
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
import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
    configPath: '.storybook',
    test: ({ story, context }) => {
        const rendered = story.render();
        expect(rendered).toMatchSnapshot();
    }
});
\`\`\`

## Unit Testing

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

1. Test user interactions with play functions
2. Run accessibility tests on all components
3. Use visual testing for UI changes
4. Write unit tests for complex logic
5. Integrate with CI/CD pipeline
6. Maintain test coverage above 80 percent
7. Use snapshot tests for stable components
8. Test edge cases and error states
9. Keep tests isolated and deterministic
10. Document test cases in stories
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
        "test:visual": "npx chromatic --project-token=YOUR_TOKEN"
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
});

// stories/Button.stories.jsx
import { Button } from './Button';
import { userEvent, within, expect } from '@storybook/test';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
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
        const button = canvas.getByRole('button');
        await expect(button).toBeInTheDocument();
        await expect(button).toHaveTextContent('Click Me');
        await userEvent.click(button);
    }
};`,
      language: "javascript"
    }
  ]
};