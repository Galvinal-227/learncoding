export const chapter = {
  slug: "introduction",
  title: "Pengenalan Storybook",
  description: "Memahami apa itu Storybook dan manfaatnya dalam pengembangan UI components.",
  icon: "SiStorybook",
  color: "#FF4785",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["storybook", "ui", "components", "documentation"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Storybook?

Storybook adalah tool untuk mengembangkan dan mendokumentasikan UI components secara terisolasi. Storybook memungkinkan developer untuk:

- **Membangun komponen** secara independen
- **Melihat semua state** komponen
- **Mendokumentasikan** penggunaan komponen
- **Testing visual** dan interaktif
- **Kolaborasi** dengan designer

## Manfaat Storybook

### 1. Pengembangan Terisolasi
- Fokus pada satu komponen
- Tidak tergantung pada aplikasi
- Mudah debugging

### 2. Dokumentasi Hidup
- Dokumentasi yang selalu up-to-date
- Interaktif dan eksploratif
- Contoh penggunaan nyata

### 3. Testing
- Visual regression testing
- Accessibility testing
- Interaction testing

### 4. Kolaborasi
- Designer melihat komponen
- Reviewer mudah memberikan feedback
- Developer lain mudah mengadopsi

## Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| **Stories** | Skenario penggunaan komponen |
| **Controls** | Interaksi dengan props |
| **Actions** | Melihat event yang terjadi |
| **Addons** | Ekstensi fungsionalitas |
| **Docs** | Dokumentasi otomatis |
| **Theming** | Light/dark mode |

## Cara Kerja Storybook

\`\`\`
┌─────────────────────────────────────┐
│           Storybook UI              │
├─────────────────────────────────────┤
│  ┌───────────┐  ┌─────────────────┐ │
│  │  Sidebar  │  │   Canvas        │ │
│  │           │  │                  │ │
│  │  Button   │  │   [Button]      │ │
│  │  ────     │  │                  │ │
│  │  Primary  │  │   Controls      │ │
│  │  Secondary│  │   ──────────    │ │
│  │  Danger   │  │   Label: "Click"│ │
│  │           │  │   Variant:      │ │
│  │  Card     │  │   Primary ▼     │ │
│  │  ────     │  │   Size:         │ │
│  │  Default  │  │   Medium ▼      │ │
│  │  Hover    │  │                  │ │
│  │  Selected │  │   Actions       │ │
│  │           │  │   ──────────    │ │
│  │  Modal    │  │   onClick: 🔄   │ │
│  └───────────┘  └─────────────────┘ │
└─────────────────────────────────────┘
\`\`\`

## Instalasi

\`\`\`bash
# Untuk React
npx storybook@latest init

# Untuk Vue
npx storybook@latest init --type vue3

# Untuk Angular
npx storybook@latest init --type angular

# Untuk Svelte
npx storybook@latest init --type svelte
\`\`\`

## Struktur Folder

\`\`\`
.storybook/
├── main.js          # Konfigurasi utama
├── preview.js       # Konfigurasi preview
└── manager.js       # Konfigurasi UI

src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.stories.jsx
│   │   └── Button.css
│   └── Card/
│       ├── Card.jsx
│       └── Card.stories.jsx
└── stories/
    ├── Introduction.mdx
    └── assets/
\`\`\`

## Contoh Story Sederhana

\`\`\`jsx
// Button.stories.jsx
import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger']
        }
    }
};

// Default story
export const Primary = {
    args: {
        label: 'Button',
        variant: 'primary'
    }
};

// Secondary story
export const Secondary = {
    args: {
        label: 'Button',
        variant: 'secondary'
    }
};

// With children
export const WithChildren = {
    args: {
        children: 'Click Me',
        variant: 'primary'
    }
};
\`\`\`

## Ekosistem Storybook

### Framework Support
- React
- Vue
- Angular
- Svelte
- Web Components
- React Native
- Ember
- Preact
- Riot

### Addons Populer
- **@storybook/addon-essentials** - Paket dasar
- **@storybook/addon-interactions** - Testing interaksi
- **@storybook/addon-a11y** - Accessibility
- **@storybook/addon-links** - Navigasi antar stories
- **@storybook/addon-viewport** - Responsive testing
- **@storybook/addon-docs** - Dokumentasi MDX
- **@storybook/addon-measure** - Ukuran komponen
- **@storybook/addon-outline** - Outline komponen

## Best Practices

1. **Satu story per state** komponen
2. **Gunakan Controls** untuk interaksi
3. **Tulis dokumentasi** dengan MDX
4. **Test visual** dengan Chromatic
5. **Gunakan addons** untuk accessibility
6. **Organisir stories** dengan folder
7. **Dokumentasikan props** dengan JSDoc
8. **Gunakan args** untuk reusability
9. **Test interaksi** dengan addon-interactions
10. **Integrasikan dengan CI/CD**

## Storybook vs Alternatives

| Tool | Keunggulan | Kekurangan |
|------|------------|------------|
| **Storybook** | Ekosistem besar, banyak addons | Setup kompleks |
| **Chromatic** | Visual testing terintegrasi | Berbayar |
| **Styleguidist** | React saja, sederhana | Fitur terbatas |
| **Docz** | Dokumentasi murni | Tidak untuk development |
| **Figma** | Design tool | Tidak untuk development |
| **Playroom** | Zero-config | Terbatas |
  `,
  quiz: [
    {
      question: "Apa fungsi utama Storybook?",
      options: [
        "Membuat API",
        "Mengembangkan UI components terisolasi",
        "Mengelola database",
        "Membuat server"
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
      question: "Addon untuk accessibility testing adalah?",
      options: [
        "@storybook/addon-a11y",
        "@storybook/addon-accessibility",
        "@storybook/addon-axe",
        "@storybook/addon-testing"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Basic Storybook Setup",
      code: `// .storybook/main.js
module.exports = {
    stories: [
        '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../src/**/*.@(mdx)'
    ],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
        '@storybook/addon-links',
        '@storybook/addon-viewport'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    docs: {
        autodocs: true
    }
};

// .storybook/preview.js
import '../src/index.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    backgrounds: {
        default: 'light',
        values: [
            { name: 'light', value: '#ffffff' },
            { name: 'dark', value: '#1a1a1a' }
        ]
    },
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

// src/components/Button/Button.jsx
import React from 'react';
import './Button.css';

export const Button = ({ 
    label, 
    variant = 'primary', 
    size = 'medium', 
    disabled = false,
    onClick 
}) => {
    const className = \`btn btn-\${variant} btn-\${size}\`;
    
    return (
        <button 
            className={className} 
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

// src/components/Button/Button.stories.jsx
import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger', 'success', 'warning']
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large']
        },
        onClick: { action: 'clicked' }
    }
};

export const Primary = {
    args: {
        label: 'Button',
        variant: 'primary',
        size: 'medium'
    }
};

export const Secondary = {
    args: {
        label: 'Button',
        variant: 'secondary'
    }
};

export const Danger = {
    args: {
        label: 'Delete',
        variant: 'danger'
    }
};

export const Small = {
    args: {
        label: 'Small',
        size: 'small'
    }
};

export const Large = {
    args: {
        label: 'Large',
        size: 'large'
    }
};

export const Disabled = {
    args: {
        label: 'Disabled',
        disabled: true
    }
};

// Group stories
export const AllSizes = {
    render: () => (
        <div style={{ display: 'flex', gap: '10px' }}>
            <Button label="Small" size="small" />
            <Button label="Medium" size="medium" />
            <Button label="Large" size="large" />
        </div>
    )
};

export const AllVariants = {
    render: () => (
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Button label="Primary" variant="primary" />
            <Button label="Secondary" variant="secondary" />
            <Button label="Success" variant="success" />
            <Button label="Danger" variant="danger" />
            <Button label="Warning" variant="warning" />
        </div>
    )
};`,
      language: "javascript"
    }
  ]
};