export const chapter = {
  slug: "plugins",
  title: "Plugins",
  description: "Menggunakan dan membuat plugins di Tailwind CSS.",
  icon: "SiTailwindcss",
  color: "#06B6D4",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["tailwind-introduction", "tailwind-customization"],
  tags: ["tailwind", "plugins", "extensions"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Plugins di Tailwind

Plugins adalah cara untuk menambahkan fungsionalitas baru ke Tailwind CSS.

## Official Plugins

### 1. @tailwindcss/forms
\`\`\`bash
npm install @tailwindcss/forms
\`\`\`

\`\`\`javascript
// tailwind.config.js
module.exports = {
    plugins: [
        require('@tailwindcss/forms')
    ]
};
\`\`\`

### 2. @tailwindcss/typography
\`\`\`bash
npm install @tailwindcss/typography
\`\`\`

\`\`\`javascript
module.exports = {
    plugins: [
        require('@tailwindcss/typography')
    ]
};
\`\`\`

\`\`\`html
<article class="prose prose-blue dark:prose-invert">
    <h1>Heading</h1>
    <p>Content with prose styling</p>
</article>
\`\`\`

### 3. @tailwindcss/aspect-ratio
\`\`\`bash
npm install @tailwindcss/aspect-ratio
\`\`\`

\`\`\`html
<div class="aspect-w-16 aspect-h-9">
    <iframe src="..."></iframe>
</div>
\`\`\`

### 4. @tailwindcss/container-queries
\`\`\`bash
npm install @tailwindcss/container-queries
\`\`\`

\`\`\`html
<div class="@container">
    <div class="@lg:flex">
        ...
    </div>
</div>
\`\`\`

## Custom Plugin

### Basic Plugin
\`\`\`javascript
// plugins/custom.js
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, addComponents, addBase, theme }) {
    // Add utilities
    addUtilities({
        '.text-shadow': {
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        },
        '.text-shadow-lg': {
            textShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }
    });
    
    // Add components
    addComponents({
        '.btn': {
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            fontWeight: '600'
        },
        '.btn-primary': {
            backgroundColor: theme('colors.blue.500'),
            color: theme('colors.white'),
            '&:hover': {
                backgroundColor: theme('colors.blue.600')
            }
        }
    });
    
    // Add base styles
    addBase({
        'h1': {
            fontSize: theme('fontSize.4xl'),
            fontWeight: theme('fontWeight.bold')
        }
    });
});
\`\`\`

### Plugin with Options
\`\`\`javascript
// plugins/buttons.js
const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(
    function(options = {}) {
        return function({ addComponents, theme }) {
            const colors = options.colors || ['blue', 'red', 'green'];
            
            const buttons = {};
            
            colors.forEach(color => {
                buttons[\`.btn-\${color}\`] = {
                    backgroundColor: theme(\`colors.\${color}.500\`),
                    color: theme('colors.white'),
                    padding: '0.5rem 1rem',
                    borderRadius: '0.25rem',
                    fontWeight: '600',
                    '&:hover': {
                        backgroundColor: theme(\`colors.\${color}.600\`)
                    }
                };
            });
            
            addComponents(buttons);
        };
    },
    function() {
        return {
            theme: {
                extend: {
                    colors: {
                        brand: '#FF4785'
                    }
                }
            }
        };
    }
);
\`\`\`

### Plugin with Variants
\`\`\`javascript
module.exports = plugin(function({ addVariant, matchVariant }) {
    // Simple variant
    addVariant('hocus', ['hover', 'focus']);
    
    // Complex variant
    addVariant('child', '& > *');
    addVariant('hover-child', '&:hover > *');
    addVariant('group-hover-child', '.group:hover & > *');
    
    // Match variant
    matchVariant('min', (value) => {
        return \`@media (min-width: \${value})\`;
    });
});
\`\`\`

### Plugin with Theme
\`\`\`javascript
module.exports = plugin(function({ addBase, theme }) {
    addBase({
        'body': {
            backgroundColor: theme('colors.white'),
            color: theme('colors.gray.900')
        },
        'body.dark': {
            backgroundColor: theme('colors.gray.900'),
            color: theme('colors.white')
        }
    });
});
\`\`\`

## Plugin Examples

### Typography Scale Plugin
\`\`\`javascript
// plugins/typography.js
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, theme }) {
    const sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'];
    
    const utilities = {};
    
    sizes.forEach(size => {
        const fontSize = theme(\`fontSize.\${size}\`);
        if (fontSize) {
            utilities[\`.text-\${size}-responsive\`] = {
                fontSize: fontSize,
                '@screen sm': {
                    fontSize: theme(\`fontSize.\${size}\`)
                },
                '@screen lg': {
                    fontSize: theme(\`fontSize.\${size}\`)
                }
            };
        }
    });
    
    addUtilities(utilities);
});
\`\`\`

### Spacing Scale Plugin
\`\`\`javascript
// plugins/spacing.js
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, theme }) {
    const spacings = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24];
    
    const utilities = {};
    
    spacings.forEach(spacing => {
        const value = theme(\`spacing.\${spacing}\`);
        if (value) {
            utilities[\`.m-\${spacing}\`] = { margin: value };
            utilities[\`.p-\${spacing}\`] = { padding: value };
            utilities[\`.gap-\${spacing}\`] = { gap: value };
        }
    });
    
    addUtilities(utilities);
});
\`\`\`

## Menggunakan Plugin

### 1. Install
\`\`\`bash
npm install @tailwindcss/forms
npm install @tailwindcss/typography
\`\`\`

### 2. Configure
\`\`\`javascript
// tailwind.config.js
module.exports = {
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('./plugins/custom.js')
    ]
};
\`\`\`

### 3. Use
\`\`\`html
<!-- Forms plugin -->
<input class="form-input">
<select class="form-select">
    <option>Option</option>
</select>

<!-- Typography plugin -->
<article class="prose prose-blue dark:prose-invert">
    <h1>Title</h1>
    <p>Content</p>
</article>

<!-- Custom plugin -->
<div class="text-shadow">Shadow text</div>
<button class="btn btn-primary">Primary</button>
\`\`\`

## Best Practices

1. **Use official plugins** when possible
2. **Create reusable plugins** for project
3. **Document plugin options** clearly
4. **Test plugins** thoroughly
5. **Publish plugins** for community
6. **Keep plugins focused** on one thing
7. **Use TypeScript** for plugin development
8. **Add examples** in documentation
  `,
  quiz: [
    {
      question: "Official plugin untuk forms adalah?",
      options: [
        "@tailwindcss/forms",
        "@tailwindcss/form",
        "tailwind-forms",
        "tailwindcss-forms"
      ],
      correctAnswer: 0
    },
    {
      question: "Official plugin untuk typography adalah?",
      options: [
        "@tailwindcss/typography",
        "@tailwindcss/prose",
        "tailwind-typography",
        "tailwindcss-typography"
      ],
      correctAnswer: 0
    },
    {
      question: "Function untuk membuat plugin adalah?",
      options: [
        "plugin()",
        "createPlugin()",
        "tailwind.plugin()",
        "makePlugin()"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Plugin System",
      code: `// ============================================
// 1. plugins/animations.js
// ============================================
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, matchUtilities, theme }) {
    // Static utilities
    addUtilities({
        '.animate-fade-in': {
            animation: 'fadeIn 0.5s ease-in-out'
        },
        '.animate-fade-out': {
            animation: 'fadeOut 0.5s ease-in-out'
        },
        '.animate-slide-up': {
            animation: 'slideUp 0.5s ease-out'
        },
        '.animate-slide-down': {
            animation: 'slideDown 0.5s ease-out'
        },
        '.animate-scale-in': {
            animation: 'scaleIn 0.3s ease-out'
        },
        '.animate-rotate': {
            animation: 'rotate 2s linear infinite'
        }
    });
    
    // Dynamic utilities
    matchUtilities({
        'animate-duration': (value) => ({
            animationDuration: value
        }),
        'animate-delay': (value) => ({
            animationDelay: value
        }),
        'animate-iteration': (value) => ({
            animationIterationCount: value
        })
    }, {
        values: {
            '100': '100ms',
            '200': '200ms',
            '300': '300ms',
            '500': '500ms',
            '700': '700ms',
            '1000': '1000ms',
            '1500': '1500ms',
            '2000': '2000ms',
            '3000': '3000ms'
        }
    });
    
    // Keyframes
    addUtilities({
        '@keyframes fadeIn': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' }
        },
        '@keyframes fadeOut': {
            '0%': { opacity: '1' },
            '100%': { opacity: '0' }
        },
        '@keyframes slideUp': {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        '@keyframes slideDown': {
            '0%': { transform: 'translateY(-20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        '@keyframes scaleIn': {
            '0%': { transform: 'scale(0.8)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' }
        },
        '@keyframes rotate': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' }
        }
    });
});

// ============================================
// 2. plugins/container-queries.js
// ============================================
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addVariant, matchVariant }) {
    // Container queries
    addVariant('@xs', '@container (min-width: 320px)');
    addVariant('@sm', '@container (min-width: 480px)');
    addVariant('@md', '@container (min-width: 640px)');
    addVariant('@lg', '@container (min-width: 768px)');
    addVariant('@xl', '@container (min-width: 1024px)');
    addVariant('@2xl', '@container (min-width: 1280px)');
    
    // Match variant for custom container queries
    matchVariant('@min', (value) => {
        return \`@container (min-width: \${value})\`;
    });
    
    matchVariant('@max', (value) => {
        return \`@container (max-width: \${value})\`;
    });
});

// ============================================
// 3. plugins/utilities.js
// ============================================
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, theme }) {
    addUtilities({
        // Text utilities
        '.text-shadow': {
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        },
        '.text-shadow-lg': {
            textShadow: '0 4px 8px rgba(0,0,0,0.2)'
        },
        '.text-shadow-xl': {
            textShadow: '0 8px 16px rgba(0,0,0,0.3)'
        },
        '.text-shadow-none': {
            textShadow: 'none'
        },
        
        // Background utilities
        '.bg-pattern': {
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
        },
        '.bg-pattern-dark': {
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
        },
        '.bg-pattern-dots': {
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '16px 16px',
            backgroundPosition: '0 0'
        },
        
        // Border utilities
        '.border-dashed-2': {
            borderWidth: '2px',
            borderStyle: 'dashed'
        },
        '.border-dashed-3': {
            borderWidth: '3px',
            borderStyle: 'dashed'
        },
        '.border-dashed-4': {
            borderWidth: '4px',
            borderStyle: 'dashed'
        },
        
        // Scroll utilities
        '.scrollbar-hide': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        '.scrollbar-show': {
            '-ms-overflow-style': 'auto',
            'scrollbar-width': 'auto',
            '&::-webkit-scrollbar': {
                display: 'block'
            }
        },
        
        // Touch utilities
        '.tap-highlight-none': {
            '-webkit-tap-highlight-color': 'transparent'
        },
        '.user-select-none': {
            userSelect: 'none'
        },
        '.user-select-all': {
            userSelect: 'all'
        },
        '.user-select-auto': {
            userSelect: 'auto'
        },
        
        // Misc utilities
        '.pointer-events-none': {
            pointerEvents: 'none'
        },
        '.pointer-events-auto': {
            pointerEvents: 'auto'
        },
        '.will-change-transform': {
            willChange: 'transform'
        },
        '.will-change-opacity': {
            willChange: 'opacity'
        },
        '.will-change-scroll': {
            willChange: 'scroll-position'
        },
        
        // Focus ring utilities
        '.focus-ring': {
            outline: 'none',
            '&:focus': {
                outline: '2px solid',
                outlineColor: theme('colors.blue.500'),
                outlineOffset: '2px'
            }
        },
        '.focus-ring-offset-2': {
            '&:focus': {
                outlineOffset: '2px'
            }
        },
        '.focus-ring-offset-4': {
            '&:focus': {
                outlineOffset: '4px'
            }
        }
    });
});

// ============================================
// 4. plugins/components.js
// ============================================
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    addComponents({
        // Buttons
        '.btn': {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.5rem 1rem',
            borderRadius: theme('borderRadius.lg'),
            fontWeight: '600',
            transition: 'all 0.2s ease-in-out',
            cursor: 'pointer',
            '&:focus': {
                outline: '2px solid',
                outlineColor: theme('colors.blue.500'),
                outlineOffset: '2px'
            },
            '&:disabled': {
                opacity: '0.5',
                cursor: 'not-allowed'
            },
            '&:hover': {
                transform: 'translateY(-1px)'
            },
            '&:active': {
                transform: 'translateY(0)'
            }
        },
        
        '.btn-sm': {
            padding: '0.25rem 0.75rem',
            fontSize: theme('fontSize.sm')
        },
        
        '.btn-lg': {
            padding: '0.75rem 1.5rem',
            fontSize: theme('fontSize.lg')
        },
        
        '.btn-primary': {
            backgroundColor: theme('colors.blue.500'),
            color: theme('colors.white'),
            '&:hover': {
                backgroundColor: theme('colors.blue.600')
            }
        },
        
        '.btn-secondary': {
            backgroundColor: theme('colors.gray.500'),
            color: theme('colors.white'),
            '&:hover': {
                backgroundColor: theme('colors.gray.600')
            }
        },
        
        '.btn-success': {
            backgroundColor: theme('colors.green.500'),
            color: theme('colors.white'),
            '&:hover': {
                backgroundColor: theme('colors.green.600')
            }
        },
        
        '.btn-danger': {
            backgroundColor: theme('colors.red.500'),
            color: theme('colors.white'),
            '&:hover': {
                backgroundColor: theme('colors.red.600')
            }
        },
        
        '.btn-outline': {
            backgroundColor: 'transparent',
            color: theme('colors.blue.500'),
            border: '2px solid',
            borderColor: theme('colors.blue.500'),
            '&:hover': {
                backgroundColor: theme('colors.blue.500'),
                color: theme('colors.white')
            }
        },
        
        // Cards
        '.card': {
            backgroundColor: theme('colors.white'),
            borderRadius: theme('borderRadius.lg'),
            boxShadow: theme('boxShadow.md'),
            overflow: 'hidden'
        },
        
        '.card-dark': {
            backgroundColor: theme('colors.gray.800'),
            color: theme('colors.white')
        },
        
        '.card-header': {
            padding: '1rem 1.5rem',
            borderBottom: '1px solid',
            borderColor: theme('colors.gray.200')
        },
        
        '.card-body': {
            padding: '1.5rem'
        },
        
        '.card-footer': {
            padding: '1rem 1.5rem',
            borderTop: '1px solid',
            borderColor: theme('colors.gray.200')
        },
        
        // Badges
        '.badge': {
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.125rem 0.625rem',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: '600',
            lineHeight: '1.25rem'
        },
        
        '.badge-primary': {
            backgroundColor: theme('colors.blue.100'),
            color: theme('colors.blue.800')
        },
        
        '.badge-success': {
            backgroundColor: theme('colors.green.100'),
            color: theme('colors.green.800')
        },
        
        '.badge-danger': {
            backgroundColor: theme('colors.red.100'),
            color: theme('colors.red.800')
        },
        
        '.badge-warning': {
            backgroundColor: theme('colors.yellow.100'),
            color: theme('colors.yellow.800')
        }
    });
});

// ============================================
// 5. tailwind.config.js
// ============================================
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
    
    theme: {
        extend: {}
    },
    
    plugins: [
        // Official plugins
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
        
        // Custom plugins
        require('./plugins/animations'),
        require('./plugins/container-queries'),
        require('./plugins/utilities'),
        require('./plugins/components')
    ]
};`,
      language: "javascript"
    }
  ]
};