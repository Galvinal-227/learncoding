export const chapter = {
  slug: "setup",
  title: "Setup Storybook",
  description: "Menginstal dan mengkonfigurasi Storybook untuk berbagai framework.",
  icon: "SiStorybook",
  color: "#FF4785",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["storybook-introduction"],
  tags: ["storybook", "setup", "configuration", "installation"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Instalasi Storybook

### 1. React + Vite
\`\`\`bash
# Install Storybook
npx storybook@latest init

# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
\`\`\`

### 2. React + Webpack
\`\`\`bash
npx storybook@latest init --type react_webpack
npm run storybook
\`\`\`

### 3. Vue 3 + Vite
\`\`\`bash
npx storybook@latest init --type vue3-vite
npm run storybook
\`\`\`

### 4. Angular
\`\`\`bash
npx storybook@latest init --type angular
npm run storybook
\`\`\`

### 5. Svelte
\`\`\`bash
npx storybook@latest init --type svelte
npm run storybook
\`\`\`

### 6. Manual Install
\`\`\`bash
# Install dependencies
npm install --save-dev @storybook/react @storybook/addon-essentials

# Add scripts to package.json
{
    "scripts": {
        "storybook": "storybook dev -p 6006",
        "build-storybook": "storybook build"
    }
}
\`\`\`

## Konfigurasi Storybook

### .storybook/main.js
\`\`\`javascript
// main.js - Konfigurasi utama
module.exports = {
    // Where to find stories
    stories: [
        '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../src/**/*.@(mdx)'
    ],
    
    // Addons
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
        '@storybook/addon-links',
        '@storybook/addon-viewport',
        '@storybook/addon-storysource'
    ],
    
    // Framework
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    
    // Static assets
    staticDirs: ['../public'],
    
    // Docs
    docs: {
        autodocs: true,
        defaultName: 'Documentation'
    },
    
    // Core
    core: {
        disableTelemetry: true
    },
    
    // Typescript
    typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => 
                prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
        }
    }
};
\`\`\`

### .storybook/preview.js
\`\`\`javascript
// preview.js - Preview configuration
import '../src/index.css';
import { withThemeByClassName } from '@storybook/addon-themes';

// Global decorators
export const decorators = [
    withThemeByClassName({
        themes: {
            light: 'light-theme',
            dark: 'dark-theme'
        },
        defaultTheme: 'light'
    })
];

// Global parameters
export const parameters = {
    // Actions
    actions: {
        argTypesRegex: '^on[A-Z].*'
    },
    
    // Controls
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        },
        expanded: true,
        sort: 'requiredFirst'
    },
    
    // Backgrounds
    backgrounds: {
        default: 'light',
        values: [
            { name: 'light', value: '#ffffff' },
            { name: 'dark', value: '#1a1a1a' },
            { name: 'gray', value: '#f5f5f5' }
        ]
    },
    
    // Viewport
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
    },
    
    // Docs
    docs: {
        inlineStories: true,
        source: {
            type: 'auto'
        }
    },
    
    // Layout
    layout: 'padded',
    
    // Options
    options: {
        storySort: {
            order: [
                'Introduction',
                'Components',
                ['Button', 'Card', 'Modal'],
                'Pages',
                ['Home', 'About']
            ]
        }
    }
};

// Global types
export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'circlehollow',
            items: [
                { value: 'light', icon: 'circlehollow', title: 'Light' },
                { value: 'dark', icon: 'circle', title: 'Dark' }
            ]
        }
    }
};
\`\`\`

### .storybook/manager.js
\`\`\`javascript
// manager.js - UI Configuration
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

// Custom theme
const theme = create({
    base: 'light',
    brandTitle: 'My Component Library',
    brandUrl: 'https://example.com',
    brandImage: '/logo.svg',
    brandTarget: '_self',
    
    colorPrimary: '#FF4785',
    colorSecondary: '#FF4785',
    
    // UI
    appBg: '#ffffff',
    appContentBg: '#f5f5f5',
    appBorderColor: '#e0e0e0',
    appBorderRadius: 4,
    
    // Typography
    fontBase: '"Inter", sans-serif',
    fontCode: '"Fira Code", monospace',
    
    // Text colors
    textColor: '#333333',
    textInverseColor: '#ffffff',
    
    // Toolbar
    barTextColor: '#333333',
    barSelectedColor: '#FF4785',
    barBg: '#ffffff',
    
    // Form
    inputBg: '#ffffff',
    inputBorder: '#d0d0d0',
    inputTextColor: '#333333',
    inputBorderRadius: 4
});

// Apply theme
addons.setConfig({
    theme,
    enableShortcuts: true,
    sidebar: {
        showRoots: true,
        collapsedRoots: ['other']
    }
});
\`\`\`

## Package.json Scripts

\`\`\`json
{
    "scripts": {
        "storybook": "storybook dev -p 6006",
        "build-storybook": "storybook build",
        "storybook:build": "storybook build -o storybook-static",
        "storybook:preview": "storybook dev --port 6006 --no-open",
        "storybook:test": "test-storybook"
    }
}
\`\`\`

## Environment Variables

\`\`\`bash
# .env.storybook
STORYBOOK_API_URL=http://localhost:3000
STORYBOOK_ENV=development
STORYBOOK_FEATURE_FLAG=true
\`\`\`

\`\`\`javascript
// storybook/preview.js
const apiUrl = process.env.STORYBOOK_API_URL || 'http://localhost:3000';

export const parameters = {
    // ...
    apiUrl
};
\`\`\`

## Troubleshooting

### Common Issues

1. **Missing dependencies**
\`\`\`bash
npm install --save-dev @storybook/react @storybook/addon-essentials
\`\`\`

2. **Vite compatibility**
\`\`\`bash
npm install --save-dev @storybook/react-vite
\`\`\`

3. **CSS not loading**
\`\`\`javascript
// preview.js
import '../src/index.css';
\`\`\`

4. **Port conflict**
\`\`\`json
// package.json
"storybook": "storybook dev -p 6007"
\`\`\`

5. **TypeScript errors**
\`\`\`javascript
// main.js
typescript: {
    check: false,
    reactDocgen: false
}
\`\`\`

## Production Build

\`\`\`bash
# Build for production
npm run build-storybook

# Deploy to GitHub Pages
npm run build-storybook
npx gh-pages -d storybook-static

# Deploy to Netlify
# Build command: npm run build-storybook
# Publish directory: storybook-static
\`\`\`
  `,
  quiz: [
    {
      question: "Perintah untuk start Storybook adalah?",
      options: [
        "npm start",
        "npm run storybook",
        "npm run dev",
        "npm run serve"
      ],
      correctAnswer: 1
    },
    {
      question: "File konfigurasi utama Storybook adalah?",
      options: [
        "storybook.config.js",
        "main.js",
        "config.js",
        "storybook.json"
      ],
      correctAnswer: 1
    },
    {
      question: "Port default Storybook adalah?",
      options: [
        "3000",
        "6006",
        "8000",
        "8080"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Storybook Setup",
      code: `// .storybook/main.js - Full Configuration
const path = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../src/**/*.@(mdx)',
        '../docs/**/*.stories.@(js|jsx|ts|tsx|mdx)'
    ],
    
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
        '@storybook/addon-links',
        '@storybook/addon-viewport',
        '@storybook/addon-storysource',
        '@storybook/addon-themes',
        '@storybook/addon-docs',
        '@storybook/addon-measure',
        '@storybook/addon-outline'
    ],
    
    framework: {
        name: '@storybook/react-vite',
        options: {
            builder: {
                viteConfigPath: '.storybook/vite.config.js'
            }
        }
    },
    
    staticDirs: ['../public', '../assets'],
    
    docs: {
        autodocs: true,
        defaultName: 'Docs'
    },
    
    core: {
        disableTelemetry: true,
        enableCrashReporter: false
    },
    
    typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => 
                prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
        }
    },
    
    features: {
        storyStoreV7: true,
        buildStoriesJson: true,
        previewCsfV3: true
    },
    
    webpackFinal: async (config) => {
        // Add custom webpack config
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../src'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@utils': path.resolve(__dirname, '../src/utils')
        };
        
        return config;
    }
};

// .storybook/preview.js - Full Preview Configuration
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/index.css';

// Theme decorator
export const decorators = [
    withThemeByClassName({
        themes: {
            light: 'light',
            dark: 'dark'
        },
        defaultTheme: 'light'
    }),
    (Story) => {
        return (
            <div style={{ padding: '20px', maxWidth: '100%' }}>
                <Story />
            </div>
        );
    }
];

export const parameters = {
    actions: {
        argTypesRegex: '^on[A-Z].*',
        handles: ['click', 'mouseenter', 'mouseleave']
    },
    
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
            email: /email/i
        },
        expanded: true,
        hideNoControlsWarning: false,
        sort: 'requiredFirst'
    },
    
    backgrounds: {
        default: 'light',
        values: [
            { name: 'light', value: '#ffffff' },
            { name: 'dark', value: '#1a1a1a' },
            { name: 'gray', value: '#f5f5f5' }
        ],
        grid: {
            cellSize: 20,
            opacity: 0.5,
            cellAmount: 5
        }
    },
    
    viewport: {
        viewports: {
            xs: {
                name: 'XS',
                styles: { width: '375px', height: '667px' },
                type: 'mobile'
            },
            sm: {
                name: 'SM',
                styles: { width: '640px', height: '800px' },
                type: 'mobile'
            },
            md: {
                name: 'MD',
                styles: { width: '768px', height: '1024px' },
                type: 'tablet'
            },
            lg: {
                name: 'LG',
                styles: { width: '1024px', height: '800px' },
                type: 'desktop'
            },
            xl: {
                name: 'XL',
                styles: { width: '1280px', height: '800px' },
                type: 'desktop'
            },
            '2xl': {
                name: '2XL',
                styles: { width: '1536px', height: '800px' },
                type: 'desktop'
            }
        },
        defaultViewport: 'lg'
    },
    
    docs: {
        inlineStories: true,
        source: {
            type: 'code',
            language: 'jsx'
        },
        canvas: {
            sourceState: 'shown'
        },
        toc: {
            headingSelector: 'h2, h3',
            ignoreSelector: '#',
            title: 'Table of Contents'
        }
    },
    
    layout: 'padded',
    
    options: {
        storySort: {
            method: 'alphabetical',
            order: [
                'Introduction',
                'Getting Started',
                'Components',
                ['Atoms', 'Molecules', 'Organisms', 'Templates'],
                'Pages',
                'Design System',
                ['Colors', 'Typography', 'Spacing']
            ]
        },
        panelPosition: 'bottom'
    },
    
    previewTabs: {
        'storybook/docs/panel': { index: -1 },
        canvas: { title: 'Canvas' }
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
                { value: 'id', title: 'Indonesian' }
            ]
        }
    }
};

// .storybook/manager.js - UI Manager Configuration
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import logo from '../public/logo.svg';

const theme = create({
    base: 'light',
    brandTitle: 'My Component Library',
    brandUrl: 'https://example.com',
    brandImage: logo,
    brandTarget: '_self',
    
    colorPrimary: '#FF4785',
    colorSecondary: '#FF4785',
    
    appBg: '#f8f9fa',
    appContentBg: '#ffffff',
    appBorderColor: '#e0e0e0',
    appBorderRadius: 8,
    
    fontBase: '"Inter", -apple-system, sans-serif',
    fontCode: '"Fira Code", "Courier New", monospace',
    
    textColor: '#333333',
    textInverseColor: '#ffffff',
    textMutedColor: '#666666',
    
    barTextColor: '#333333',
    barSelectedColor: '#FF4785',
    barBg: '#ffffff',
    
    inputBg: '#ffffff',
    inputBorder: '#d0d0d0',
    inputTextColor: '#333333',
    inputBorderRadius: 4
});

addons.setConfig({
    theme,
    enableShortcuts: true,
    sidebar: {
        showRoots: true,
        collapsedRoots: ['other'],
        renderLabel: (item) => {
            return \`🔹 \${item.name}\`;
        }
    },
    toolbar: {
        title: {
            hidden: false
        },
        zoom: {
            hidden: false
        },
        eject: {
            hidden: true
        },
        copy: {
            hidden: false
        },
        fullscreen: {
            hidden: false
        }
    }
});`,
      language: "javascript"
    }
  ]
};