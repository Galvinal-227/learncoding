export const chapter = {
  slug: "stories",
  title: "Menulis Stories",
  description: "Cara menulis stories untuk komponen di Storybook.",
  icon: "SiStorybook",
  color: "#FF4785",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["storybook-introduction", "storybook-setup"],
  tags: ["storybook", "stories", "components", "args"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Stories?

Stories adalah cara untuk mendokumentasikan dan menguji berbagai state dari sebuah komponen di Storybook.

## Struktur Story

### Basic Story
\`\`\`jsx
// Button.stories.jsx
import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs']
};

// Single story
export const Primary = {
    args: {
        label: 'Button',
        variant: 'primary'
    }
};
\`\`\`

### Multiple Stories
\`\`\`jsx
export const Primary = {
    args: {
        label: 'Primary',
        variant: 'primary'
    }
};

export const Secondary = {
    args: {
        label: 'Secondary',
        variant: 'secondary'
    }
};

export const Danger = {
    args: {
        label: 'Danger',
        variant: 'danger'
    }
};

export const Large = {
    args: {
        label: 'Large Button',
        size: 'large'
    }
};

export const Disabled = {
    args: {
        label: 'Disabled',
        disabled: true
    }
};
\`\`\`

## CSF (Component Story Format)

### CSF 2 (Classic)
\`\`\`jsx
export default {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary']
        }
    }
};

export const Primary = (args) => <Button {...args} />;
Primary.args = {
    label: 'Button',
    variant: 'primary'
};
\`\`\`

### CSF 3 (Modern - Recommended)
\`\`\`jsx
export default {
    title: 'Button',
    component: Button
};

export const Primary = {
    args: {
        label: 'Button',
        variant: 'primary'
    }
};
\`\`\`

## Stories with Render Function

\`\`\`jsx
// Custom render
export const WithCustomRender = {
    render: (args) => (
        <div style={{ padding: '20px', background: '#f5f5f5' }}>
            <Button {...args} />
        </div>
    ),
    args: {
        label: 'Custom Render'
    }
};

// Multiple components
export const AllSizes = {
    render: () => (
        <div style={{ display: 'flex', gap: '10px' }}>
            <Button label="Small" size="small" />
            <Button label="Medium" size="medium" />
            <Button label="Large" size="large" />
        </div>
    )
};
\`\`\`

## Stories with Children

\`\`\`jsx
export const WithChildren = {
    args: {
        children: 'Click Me',
        variant: 'primary'
    }
};

// Complex children
export const WithComplexChildren = {
    render: () => (
        <Button>
            <span>🚀</span>
            <span>Launch</span>
        </Button>
    )
};
\`\`\`

## Stories with Play Function

\`\`\`jsx
import { userEvent, within } from '@storybook/testing-library';

export const WithInteraction = {
    args: {
        label: 'Click Me'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByText('Click Me');
        await userEvent.click(button);
    }
};
\`\`\`

## Story Composition

\`\`\`jsx
// Reusing stories
export const PrimaryDisabled = {
    ...Primary,
    args: {
        ...Primary.args,
        disabled: true
    }
};

// Combining stories
export const AllVariants = {
    render: () => (
        <div style={{ display: 'flex', gap: '10px' }}>
            <Button {...Primary.args} />
            <Button {...Secondary.args} />
            <Button {...Danger.args} />
        </div>
    )
};
\`\`\`

## Parameterized Stories

\`\`\`jsx
export const WithParameters = {
    args: {
        label: 'Button'
    },
    parameters: {
        backgrounds: {
            default: 'dark'
        },
        viewport: {
            defaultViewport: 'mobile'
        }
    }
};
\`\`\`

## Stories with Decorators

\`\`\`jsx
// Global decorator
export const decorators = [
    (Story) => (
        <div style={{ margin: '20px' }}>
            <Story />
        </div>
    )
];

// Story-level decorator
export const WithWrapper = {
    args: {
        label: 'Button'
    },
    decorators: [
        (Story) => (
            <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
                <Story />
            </div>
        )
    ]
};
\`\`\`

## MDX Stories

\`\`\`mdx
<!-- Button.stories.mdx -->
import { Meta, Story, Canvas } from '@storybook/blocks';
import { Button } from './Button';

<Meta title="Components/Button" component={Button} />

# Button

Buttons are used to trigger actions.

## Primary Button

<Canvas>
    <Story name="Primary">
        <Button variant="primary">Primary</Button>
    </Story>
</Canvas>

## Secondary Button

<Canvas>
    <Story name="Secondary">
        <Button variant="secondary">Secondary</Button>
    </Story>
</Canvas>
\`\`\`

## Stories with Hooks

\`\`\`jsx
import { useState } from 'react';

export const WithState = {
    render: () => {
        const [count, setCount] = useState(0);
        return (
            <div>
                <Button 
                    label={\`Count: \${count}\`}
                    onClick={() => setCount(count + 1)}
                />
            </div>
        );
    }
};
\`\`\`

## Best Practices

### 1. Naming
\`\`\`jsx
// ✅ Good naming
export const Primary = { ... };
export const Secondary = { ... };
export const Disabled = { ... };

// ❌ Bad naming
export const Story1 = { ... };
export const Story2 = { ... };
\`\`\`

### 2. Organize Stories
\`\`\`jsx
// ✅ Grouped by component
export default {
    title: 'Components/Button'
};

// ✅ Grouped by variant
export default {
    title: 'Button/Variants'
};
\`\`\`

### 3. Use Args
\`\`\`jsx
// ✅ Use args
export const Primary = {
    args: {
        variant: 'primary',
        label: 'Button'
    }
};

// ❌ Hardcoded values
export const Primary = {
    render: () => <Button variant="primary" label="Button" />
};
\`\`\`

### 4. Document States
\`\`\`jsx
// Document each state
export const Loading = { ... };
export const Success = { ... };
export const Error = { ... };
\`\`\`

## Story Templates

\`\`\`jsx
// Template pattern
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
    variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
    variant: 'secondary'
};
\`\`\`
  `,
  quiz: [
    {
      question: "Format story terbaru di Storybook adalah?",
      options: [
        "CSF 1",
        "CSF 2",
        "CSF 3",
        "MDX"
      ],
      correctAnswer: 2
    },
    {
      question: "Property untuk passing props ke story adalah?",
      options: [
        "props",
        "args",
        "params",
        "options"
      ],
      correctAnswer: 1
    },
    {
      question: "Fungsi untuk interaksi di story adalah?",
      options: [
        "test",
        "play",
        "run",
        "execute"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Stories Examples",
      code: `// src/components/Card/Card.jsx
import React from 'react';
import './Card.css';

export const Card = ({ 
    title, 
    description, 
    image, 
    variant = 'default',
    size = 'medium',
    onClick,
    children
}) => {
    const className = \`card card-\${variant} card-\${size}\`;
    
    return (
        <div className={className} onClick={onClick}>
            {image && <img src={image} alt={title} className="card-image" />}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                {children && <div className="card-footer">{children}</div>}
            </div>
        </div>
    );
};

// src/components/Card/Card.stories.jsx
import { Card } from './Card';
import { Button } from '../Button/Button';

export default {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'elevated', 'outlined', 'filled']
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large']
        },
        onClick: { action: 'clicked' }
    },
    parameters: {
        layout: 'centered'
    }
};

// 1. Basic Stories
export const Default = {
    args: {
        title: 'Default Card',
        description: 'This is a default card with description.',
        variant: 'default',
        size: 'medium'
    }
};

export const Elevated = {
    args: {
        title: 'Elevated Card',
        description: 'This card has elevation/shadow effect.',
        variant: 'elevated',
        size: 'medium'
    }
};

export const Outlined = {
    args: {
        title: 'Outlined Card',
        description: 'This card has an outline border.',
        variant: 'outlined',
        size: 'medium'
    }
};

export const Filled = {
    args: {
        title: 'Filled Card',
        description: 'This card has a filled background.',
        variant: 'filled',
        size: 'medium'
    }
};

// 2. Sizes
export const Small = {
    args: {
        title: 'Small Card',
        description: 'Compact card for dense layouts.',
        size: 'small'
    }
};

export const Large = {
    args: {
        title: 'Large Card',
        description: 'Large card with more space.',
        size: 'large'
    }
};

// 3. With Image
export const WithImage = {
    args: {
        title: 'Card with Image',
        description: 'This card includes an image at the top.',
        image: 'https://via.placeholder.com/400x200',
        size: 'medium'
    }
};

// 4. With Children (Footer)
export const WithFooter = {
    args: {
        title: 'Card with Footer',
        description: 'This card has interactive elements in the footer.',
        size: 'medium',
        children: (
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <Button label="Action" size="small" variant="primary" />
                <Button label="Cancel" size="small" variant="secondary" />
            </div>
        )
    }
};

// 5. Interactive Story
export const Interactive = {
    args: {
        title: 'Clickable Card',
        description: 'Click on this card to trigger an action.',
        size: 'medium'
    },
    parameters: {
        docs: {
            description: {
                story: 'This card responds to click events.'
            }
        }
    }
};

// 6. Play Function (Interaction Testing)
export const WithInteraction = {
    args: {
        title: 'Interactive Card',
        description: 'Click me!'
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement);
        
        await step('Click the card', async () => {
            const card = canvas.getByText('Interactive Card').closest('.card');
            await userEvent.click(card);
        });
        
        await step('Verify interaction', async () => {
            // Check if something changed
        });
    }
};

// 7. Complex State
export const WithState = {
    render: () => {
        const [expanded, setExpanded] = useState(false);
        
        return (
            <Card
                title="Stateful Card"
                description={expanded ? 'This card is expanded!' : 'Click to expand'}
                onClick={() => setExpanded(!expanded)}
                size="medium"
            >
                {expanded && (
                    <div style={{ padding: '10px', background: '#f0f0f0', borderRadius: '4px' }}>
                        <p>Additional content shown when expanded.</p>
                        <Button label="Close" size="small" onClick={() => setExpanded(false)} />
                    </div>
                )}
            </Card>
        );
    }
};

// 8. Multiple Cards
export const CardGrid = {
    render: () => (
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            maxWidth: '800px'
        }}>
            <Card title="Card 1" description="Description for card 1" />
            <Card title="Card 2" description="Description for card 2" />
            <Card title="Card 3" description="Description for card 3" />
            <Card title="Card 4" description="Description for card 4" />
        </div>
    ),
    parameters: {
        layout: 'fullscreen'
    }
};

// 9. All Variants
export const AllVariants = {
    render: () => (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Card title="Default" description="Default variant" variant="default" />
            <Card title="Elevated" description="Elevated variant" variant="elevated" />
            <Card title="Outlined" description="Outlined variant" variant="outlined" />
            <Card title="Filled" description="Filled variant" variant="filled" />
        </div>
    )
};

// 10. Dark Theme
export const DarkTheme = {
    args: {
        title: 'Dark Theme Card',
        description: 'This card uses dark theme.',
        variant: 'elevated'
    },
    parameters: {
        backgrounds: {
            default: 'dark'
        },
        docs: {
            description: {
                story: 'Shows the card component in dark theme context.'
            }
        }
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '20px', background: '#1a1a1a', borderRadius: '8px' }}>
                <Story />
            </div>
        )
    ]
};

// 11. Mobile View
export const MobileView = {
    args: {
        title: 'Mobile Card',
        description: 'This card is optimized for mobile.',
        size: 'small'
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile'
        }
    }
};

// 12. Story Composition
export const ComposedStories = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3>Primary</h3>
            <Card {...Primary.args} />
            <h3>Elevated</h3>
            <Card {...Elevated.args} />
            <h3>With Footer</h3>
            <Card {...WithFooter.args} />
        </div>
    )
};`,
      language: "jsx"
    }
  ]
};