export const chapter = {
  slug: "addons",
  title: "Addons",
  description: "Menggunakan addons untuk memperluas fungsionalitas Storybook.",
  icon: "SiStorybook",
  color: "#FF4785",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["storybook-introduction", "storybook-setup"],
  tags: ["storybook", "addons", "plugins", "extensions"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Addons?

Addons adalah ekstensi yang menambahkan fungsionalitas tambahan ke Storybook.

## Addons Essentials

### 1. @storybook/addon-essentials
\`\`\`bash
npm install --save-dev @storybook/addon-essentials
\`\`\`

**Includes:**
- Docs
- Controls
- Actions
- Viewport
- Backgrounds
- Toolbars
- Measure
- Outline

### 2. @storybook/addon-docs
\`\`\`bash
npm install --save-dev @storybook/addon-docs
\`\`\`

\`\`\`javascript
// main.js
module.exports = {
    addons: [
        '@storybook/addon-docs'
    ]
};

// MDX stories
import { Meta, Story, Canvas } from '@storybook/blocks';

<Meta title="Button" component={Button} />

# Button

<Canvas>
    <Story name="Primary">
        <Button variant="primary">Primary</Button>
    </Story>
</Canvas>
\`\`\`

### 3. @storybook/addon-interactions
\`\`\`bash
npm install --save-dev @storybook/addon-interactions @storybook/testing-library @storybook/jest
\`\`\`

\`\`\`jsx
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export const Interactive = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');
        
        await userEvent.click(button);
        await expect(button).toBeDisabled();
    }
};
\`\`\`

### 4. @storybook/addon-a11y
\`\`\`bash
npm install --save-dev @storybook/addon-a11y
\`\`\`

\`\`\`jsx
export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        a11y: {
            config: {
                rules: [
                    { id: 'color-contrast', enabled: true }
                ]
            }
        }
    }
};
\`\`\`

### 5. @storybook/addon-viewport
\`\`\`bash
npm install --save-dev @storybook/addon-viewport
\`\`\`

\`\`\`jsx
export const parameters = {
    viewport: {
        viewports: {
            mobile: {
                name: 'Mobile',
                styles: { width: '375px', height: '667px' }
            },
            tablet: {
                name: 'Tablet',
                styles: { width: '768px', height: '1024px' }
            },
            desktop: {
                name: 'Desktop',
                styles: { width: '1280px', height: '800px' }
            }
        }
    }
};
\`\`\`

### 6. @storybook/addon-backgrounds
\`\`\`bash
npm install --save-dev @storybook/addon-backgrounds
\`\`\`

\`\`\`jsx
export const parameters = {
    backgrounds: {
        default: 'light',
        values: [
            { name: 'light', value: '#ffffff' },
            { name: 'dark', value: '#1a1a1a' },
            { name: 'gray', value: '#f5f5f5' }
        ]
    }
};
\`\`\`

### 7. @storybook/addon-measure
\`\`\`bash
npm install --save-dev @storybook/addon-measure
\`\`\`

### 8. @storybook/addon-outline
\`\`\`bash
npm install --save-dev @storybook/addon-outline
\`\`\`

## Community Addons

### 1. @storybook/addon-storysource
\`\`\`bash
npm install --save-dev @storybook/addon-storysource
\`\`\`

\`\`\`javascript
// main.js
module.exports = {
    addons: [
        '@storybook/addon-storysource'
    ]
};
\`\`\`

### 2. @storybook/addon-design-assets
\`\`\`bash
npm install --save-dev @storybook/addon-design-assets
\`\`\`

\`\`\`jsx
export default {
    title: 'Components/Button',
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/...'
        }
    }
};
\`\`\`

### 3. storybook-addon-themes
\`\`\`bash
npm install --save-dev storybook-addon-themes
\`\`\`

\`\`\`jsx
export const parameters = {
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: 'light-theme' },
            { name: 'dark', class: 'dark-theme' }
        ]
    }
};
\`\`\`

### 4. @storybook/addon-links
\`\`\`bash
npm install --save-dev @storybook/addon-links
\`\`\`

\`\`\`jsx
import { linkTo } from '@storybook/addon-links';

export default {
    title: 'Navigation',
    component: Navigation
};

export const WithLink = {
    render: () => (
        <button onClick={linkTo('Components/Button', 'Primary')}>
            Go to Button
        </button>
    )
};
\`\`\`

## Custom Addons

### 1. Create Custom Addon
\`\`\`javascript
// .storybook/addons/custom-addon.js
import { addons, types } from '@storybook/manager-api';
import React from 'react';

const MyAddon = () => {
    return <div>My Custom Addon</div>;
};

addons.register('my-custom-addon', () => {
    addons.add('my-custom-addon/panel', {
        type: types.PANEL,
        title: 'My Addon',
        render: ({ active }) => (
            active && <MyAddon />
        )
    });
});
\`\`\`

### 2. Register Custom Addon
\`\`\`javascript
// .storybook/main.js
module.exports = {
    addons: [
        './addons/custom-addon.js'
    ]
};
\`\`\`

## Addon Configuration

### main.js Configuration
\`\`\`javascript
module.exports = {
    addons: [
        // Essentials
        '@storybook/addon-essentials',
        
        // Interactions
        '@storybook/addon-interactions',
        
        // Accessibility
        '@storybook/addon-a11y',
        
        // Design
        '@storybook/addon-design-assets',
        
        // Custom
        './.storybook/addons/my-addon.js'
    ],
    
    // Configure addons
    features: {
        interactionsDebugger: true
    }
};
\`\`\`

### Addon Parameters
\`\`\`jsx
// preview.js
export const parameters = {
    // A11y
    a11y: {
        config: {
            rules: [
                { id: 'color-contrast', enabled: true },
                { id: 'label', enabled: true }
            ]
        }
    },
    
    // Design
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/...'
    },
    
    // Themes
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: 'light-theme' },
            { name: 'dark', class: 'dark-theme' }
        ]
    }
};
\`\`\`

## Best Practices

### 1. Use Essentials Addon
\`\`\`javascript
// ✅ Use essentials
addons: ['@storybook/addon-essentials']

// ❌ Install individually
addons: [
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    // ... etc
]
\`\`\`

### 2. Keep Addons Updated
\`\`\`bash
npm update @storybook/addon-essentials
npm update @storybook/addon-interactions
\`\`\`

### 3. Use Addons Sparingly
\`\`\`javascript
// ✅ Only necessary addons
addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
]

// ❌ Too many addons
addons: [
    // 10+ addons
]
\`\`\`

### 4. Configure Addons Properly
\`\`\`jsx
// ✅ Configure addons
parameters: {
    a11y: {
        config: {
            rules: [
                { id: 'color-contrast', enabled: true }
            ]
        }
    }
}

// ❌ No configuration
parameters: {
    // Empty
}
\`\`\`
  `,
  quiz: [
    {
      question: "Addon untuk accessibility testing adalah?",
      options: [
        "@storybook/addon-a11y",
        "@storybook/addon-accessibility",
        "@storybook/addon-testing",
        "@storybook/addon-interactions"
      ],
      correctAnswer: 0
    },
    {
      question: "Addon untuk testing interaksi adalah?",
      options: [
        "@storybook/addon-interactions",
        "@storybook/addon-testing",
        "@storybook/addon-play",
        "@storybook/addon-actions"
      ],
      correctAnswer: 0
    },
    {
      question: "Addon essentials mencakup semua kecuali?",
      options: [
        "Docs",
        "Controls",
        "Interactions",
        "Actions"
      ],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "Complete Addons Configuration",
      code: `// .storybook/main.js - Complete Addons Configuration
const path = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../docs/**/*.stories.@(js|jsx|ts|tsx|mdx)'
    ],
    
    addons: [
        // 1. Core Addons
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-links',
        
        // 2. Accessibility
        '@storybook/addon-a11y',
        
        // 3. Design & Documentation
        '@storybook/addon-docs',
        '@storybook/addon-design-assets',
        
        // 4. Development Tools
        '@storybook/addon-storysource',
        '@storybook/addon-measure',
        '@storybook/addon-outline',
        '@storybook/addon-viewport',
        
        // 5. Styling
        'storybook-addon-themes',
        '@storybook/addon-backgrounds',
        
        // 6. Custom Addons
        './.storybook/addons/custom-addon.js'
    ],
    
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    
    docs: {
        autodocs: true,
        defaultName: 'Documentation'
    },
    
    features: {
        interactionsDebugger: true,
        buildStoriesJson: true
    },
    
    typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript'
    },
    
    staticDirs: ['../public', '../assets']
};

// .storybook/preview.js - Addon Parameters
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/index.css';

export const decorators = [
    withThemeByClassName({
        themes: {
            light: 'light-theme',
            dark: 'dark-theme'
        },
        defaultTheme: 'light'
    })
];

export const parameters = {
    // 1. Actions
    actions: {
        argTypesRegex: '^on[A-Z].*',
        handles: ['click', 'mouseenter', 'mouseleave']
    },
    
    // 2. Controls
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        },
        expanded: true,
        sort: 'requiredFirst'
    },
    
    // 3. Docs
    docs: {
        inlineStories: true,
        source: {
            type: 'code'
        },
        toc: {
            headingSelector: 'h2, h3',
            ignoreSelector: '#',
            title: 'Table of Contents'
        }
    },
    
    // 4. Backgrounds
    backgrounds: {
        default: 'light',
        values: [
            { name: 'Light', value: '#ffffff' },
            { name: 'Dark', value: '#1a1a1a' },
            { name: 'Gray', value: '#f5f5f5' },
            { name: 'White', value: '#ffffff' },
            { name: 'Black', value: '#000000' }
        ],
        grid: {
            cellSize: 20,
            opacity: 0.5,
            cellAmount: 5
        }
    },
    
    // 5. Viewport
    viewport: {
        viewports: {
            xs: {
                name: 'XS - Mobile',
                styles: { width: '375px', height: '667px' },
                type: 'mobile'
            },
            sm: {
                name: 'SM - Mobile',
                styles: { width: '640px', height: '800px' },
                type: 'mobile'
            },
            md: {
                name: 'MD - Tablet',
                styles: { width: '768px', height: '1024px' },
                type: 'tablet'
            },
            lg: {
                name: 'LG - Desktop',
                styles: { width: '1024px', height: '800px' },
                type: 'desktop'
            },
            xl: {
                name: 'XL - Desktop',
                styles: { width: '1280px', height: '800px' },
                type: 'desktop'
            },
            '2xl': {
                name: '2XL - Desktop',
                styles: { width: '1536px', height: '800px' },
                type: 'desktop'
            }
        },
        defaultViewport: 'lg'
    },
    
    // 6. A11y
    a11y: {
        config: {
            rules: [
                { id: 'color-contrast', enabled: true },
                { id: 'label', enabled: true },
                { id: 'button-name', enabled: true },
                { id: 'link-name', enabled: true },
                { id: 'image-alt', enabled: true }
            ]
        }
    },
    
    // 7. Themes
    themes: {
        default: 'light',
        list: [
            { name: 'Light', class: 'light-theme', color: '#ffffff' },
            { name: 'Dark', class: 'dark-theme', color: '#1a1a1a' }
        ],
        clearable: false,
        decorator: (Story, context) => {
            return <Story />;
        }
    },
    
    // 8. Design Assets
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/...'
    },
    
    // 9. Layout
    layout: 'padded',
    
    // 10. Options
    options: {
        storySort: {
            order: [
                'Introduction',
                'Getting Started',
                'Components',
                ['Atoms', 'Molecules', 'Organisms'],
                'Pages',
                'Design System'
            ]
        },
        panelPosition: 'bottom'
    }
};

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'circlehollow',
            items: [
                { value: 'light', icon: 'sun', title: 'Light' },
                { value: 'dark', icon: 'moon', title: 'Dark' }
            ],
            showName: true
        }
    },
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        defaultValue: 'en',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'en', title: 'English' },
                { value: 'id', title: 'Indonesian' },
                { value: 'ja', title: 'Japanese' }
            ]
        }
    }
};

// .storybook/addons/custom-addon.js - Custom Addon Example
import { addons, types } from '@storybook/manager-api';
import React from 'react';
import { styled } from '@storybook/theming';

const Container = styled.div({
    padding: '20px',
    fontFamily: 'sans-serif'
});

const Title = styled.h2({
    fontSize: '16px',
    marginBottom: '10px',
    fontWeight: '600'
});

const Info = styled.p({
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.6'
});

const CustomPanel = () => {
    return (
        <Container>
            <Title>📊 Component Metrics</Title>
            <Info>Total components: 42</Info>
            <Info>Total stories: 156</Info>
            <Info>Last updated: {new Date().toLocaleDateString()}</Info>
        </Container>
    );
};

addons.register('custom-addon/metrics', () => {
    addons.add('custom-addon/metrics/panel', {
        type: types.PANEL,
        title: 'Metrics',
        render: ({ active }) => active && <CustomPanel />
    });
});

// Usage in stories
// components/Button/Button.stories.jsx
export const WithAddons = {
    args: {
        label: 'Button with Addons'
    },
    parameters: {
        // A11y parameters
        a11y: {
            config: {
                rules: [
                    { id: 'color-contrast', enabled: true }
                ]
            }
        },
        
        // Design parameters
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/...'
        },
        
        // Background parameters
        backgrounds: {
            default: 'dark'
        },
        
        // Viewport parameters
        viewport: {
            defaultViewport: 'mobile'
        },
        
        // Docs parameters
        docs: {
            description: {
                story: 'This story demonstrates all addons working together.'
            }
        }
    }
};`,
      language: "javascript"
    }
  ]
};