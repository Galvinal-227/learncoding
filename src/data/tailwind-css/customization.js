export const chapter = {
  slug: "customization",
  title: "Customization",
  description: "Mengustomisasi Tailwind CSS sesuai kebutuhan project.",
  icon: "SiTailwindcss",
  color: "#06B6D4",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["tailwind-introduction", "tailwind-installation"],
  tags: ["tailwind", "customization", "theme", "configuration"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Customization di Tailwind

Tailwind sangat customizable melalui file konfigurasi.

## 1. Theme Configuration

### Colors
\`\`\`javascript
// tailwind.config.js
module.exports = {
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#000000',
            
            // Custom colors
            primary: {
                50: '#eff6ff',
                100: '#dbeafe',
                200: '#bfdbfe',
                300: '#93c5fd',
                400: '#60a5fa',
                500: '#3b82f6',
                600: '#2563eb',
                700: '#1d4ed8',
                800: '#1e40af',
                900: '#1e3a8a'
            },
            
            // Brand colors
            brand: {
                DEFAULT: '#FF4785',
                light: '#FF6B9D',
                dark: '#E63E6C'
            }
        }
    }
};
\`\`\`

### Fonts
\`\`\`javascript
module.exports = {
    theme: {
        fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            mono: ['Fira Code', 'monospace']
        }
    }
};
\`\`\`

### Spacing
\`\`\`javascript
module.exports = {
    theme: {
        spacing: {
            px: '1px',
            0: '0',
            0.5: '0.125rem',
            1: '0.25rem',
            1.5: '0.375rem',
            2: '0.5rem',
            2.5: '0.625rem',
            3: '0.75rem',
            3.5: '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            14: '3.5rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem'
        }
    }
};
\`\`\`

### Screens (Breakpoints)
\`\`\`javascript
module.exports = {
    theme: {
        screens: {
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1920px'
        }
    }
};
\`\`\`

## 2. Extending Theme

### Extend Colors
\`\`\`javascript
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a'
                },
                secondary: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95'
                }
            }
        }
    }
};
\`\`\`

### Extend Fonts
\`\`\`javascript
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                'display': ['Inter', 'sans-serif'],
                'body': ['Inter', 'sans-serif'],
                'logo': ['Merriweather', 'serif']
            },
            fontSize: {
                'xxs': '0.625rem',
                'tiny': '0.6875rem'
            }
        }
    }
};
\`\`\`

### Extend Spacing
\`\`\`javascript
module.exports = {
    theme: {
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
                '192': '48rem'
            }
        }
    }
};
\`\`\`

## 3. Custom Utilities

\`\`\`css
@layer utilities {
    .text-shadow {
        text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .text-shadow-lg {
        text-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    
    .text-shadow-none {
        text-shadow: none;
    }
    
    .bg-pattern {
        background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
        background-size: 20px 20px;
    }
    
    .animation-delay-100 {
        animation-delay: 100ms;
    }
    
    .animation-delay-200 {
        animation-delay: 200ms;
    }
    
    .animation-delay-300 {
        animation-delay: 300ms;
    }
}
\`\`\`

## 4. Custom Plugins

\`\`\`javascript
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
    plugins: [
        // Custom plugin
        plugin(function({ addBase, addComponents, addUtilities, theme }) {
            addBase({
                'h1': {
                    fontSize: theme('fontSize.4xl'),
                    fontWeight: theme('fontWeight.bold')
                },
                'h2': {
                    fontSize: theme('fontSize.3xl'),
                    fontWeight: theme('fontWeight.semibold')
                }
            });
            
            addComponents({
                '.btn': {
                    padding: theme('spacing.2') + ' ' + theme('spacing.4'),
                    borderRadius: theme('borderRadius.lg'),
                    fontWeight: theme('fontWeight.medium'),
                    '&:hover': {
                        opacity: '0.8'
                    }
                }
            });
            
            addUtilities({
                '.text-shadow': {
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }
            });
        })
    ]
};
\`\`\`

## 5. Config Presets

\`\`\`javascript
// tailwind.config.js
module.exports = {
    presets: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ],
    // ...
};
\`\`\`

## 6. Prefix

\`\`\`javascript
module.exports = {
    prefix: 'tw-',
    // ...
};
\`\`\`

## 7. Important

\`\`\`javascript
module.exports = {
    important: true,
    // or
    important: '#app',
    // ...
};
\`\`\`

## 8. Variants

\`\`\`javascript
module.exports = {
    variants: {
        extend: {
            backgroundColor: ['active'],
            opacity: ['disabled'],
            cursor: ['disabled']
        }
    }
};
\`\`\`

## 9. Safelist

\`\`\`javascript
module.exports = {
    safelist: [
        'bg-red-500',
        'text-3xl',
        'lg:text-4xl',
        {
            pattern: /^bg-(red|blue|green|yellow)-(500|600|700)$/,
            variants: ['hover', 'focus']
        }
    ]
};
\`\`\`
  `,
  quiz: [
    {
      question: "File untuk konfigurasi Tailwind adalah?",
      options: [
        "tailwind.js",
        "tailwind.config.js",
        "config.tailwind.js",
        "tailwindcss.js"
      ],
      correctAnswer: 1
    },
    {
      question: "Property untuk menambah warna custom adalah?",
      options: [
        "colors",
        "theme.colors",
        "extend.colors",
        "custom.colors"
      ],
      correctAnswer: 2
    },
    {
      question: "Property untuk menambah breakpoints adalah?",
      options: [
        "screens",
        "breakpoints",
        "media",
        "viewport"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Customization",
      code: `// ============================================
// tailwind.config.js - Complete Customization
// ============================================
/** @type {import('tailwindcss').Config} */
module.exports = {
    // Content
    content: [
        './src/**/*.{html,js,jsx,ts,tsx,vue}',
        './public/**/*.html'
    ],
    
    // Dark mode
    darkMode: 'class',
    
    // Prefix
    prefix: '',
    
    // Important
    important: false,
    
    // Separator
    separator: ':',
    
    // Theme
    theme: {
        // 1. Screens (Breakpoints)
        screens: {
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
            'print': { raw: 'print' }
        },
        
        // 2. Colors
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#000000',
            
            // Brand colors
            brand: {
                DEFAULT: '#FF4785',
                light: '#FF6B9D',
                dark: '#E63E6C',
                lighter: '#FF8FB3',
                darker: '#CC2E5A'
            },
            
            // Custom palette
            primary: {
                50: '#eff6ff',
                100: '#dbeafe',
                200: '#bfdbfe',
                300: '#93c5fd',
                400: '#60a5fa',
                500: '#3b82f6',
                600: '#2563eb',
                700: '#1d4ed8',
                800: '#1e40af',
                900: '#1e3a8a'
            },
            
            secondary: {
                50: '#f5f3ff',
                100: '#ede9fe',
                200: '#ddd6fe',
                300: '#c4b5fd',
                400: '#a78bfa',
                500: '#8b5cf6',
                600: '#7c3aed',
                700: '#6d28d9',
                800: '#5b21b6',
                900: '#4c1d95'
            }
        },
        
        // 3. Spacing
        spacing: {
            px: '1px',
            0: '0',
            0.5: '0.125rem',
            1: '0.25rem',
            1.5: '0.375rem',
            2: '0.5rem',
            2.5: '0.625rem',
            3: '0.75rem',
            3.5: '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            14: '3.5rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem',
            128: '32rem',
            144: '36rem',
            192: '48rem'
        },
        
        // 4. Typography
        fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            serif: ['Merriweather', 'Georgia', 'serif'],
            mono: ['Fira Code', 'Courier New', 'monospace'],
            display: ['Inter', 'sans-serif'],
            body: ['Inter', 'sans-serif']
        },
        
        fontSize: {
            xxs: ['0.625rem', { lineHeight: '0.875rem' }],
            xs: ['0.75rem', { lineHeight: '1rem' }],
            sm: ['0.875rem', { lineHeight: '1.25rem' }],
            base: ['1rem', { lineHeight: '1.5rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '1.75rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
            '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
            '5xl': ['3rem', { lineHeight: '1' }],
            '6xl': ['3.75rem', { lineHeight: '1' }],
            '7xl': ['4.5rem', { lineHeight: '1' }],
            '8xl': ['6rem', { lineHeight: '1' }],
            '9xl': ['8rem', { lineHeight: '1' }]
        },
        
        fontWeight: {
            thin: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900'
        },
        
        // 5. Border Radius
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            DEFAULT: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px'
        },
        
        // 6. Shadows
        boxShadow: {
            sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
            none: 'none',
            // Custom
            brand: '0 4px 14px rgba(255, 71, 133, 0.3)',
            'brand-lg': '0 8px 24px rgba(255, 71, 133, 0.4)'
        },
        
        // 7. Animation
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'fade-out': 'fadeOut 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'slide-in': 'slideIn 0.3s ease-out',
                'spin-slow': 'spin 3s linear infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'bounce-slow': 'bounce 2s infinite'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' }
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' }
                }
            }
        }
    },
    
    // ============================================
    // Variants
    // ============================================
    variants: {
        extend: {
            backgroundColor: ['active', 'disabled'],
            borderColor: ['active', 'disabled'],
            opacity: ['disabled'],
            cursor: ['disabled'],
            transform: ['hover', 'focus'],
            scale: ['hover', 'focus', 'active'],
            rotate: ['hover', 'group-hover'],
            translate: ['hover', 'group-hover']
        }
    },
    
    // ============================================
    // Safelist
    // ============================================
    safelist: [
        // Static classes
        'bg-red-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'rounded-full',
        'shadow-lg',
        
        // Patterns
        {
            pattern: /^bg-(red|blue|green|yellow|purple|pink)-(100|200|300|400|500|600|700|800|900)$/,
            variants: ['hover', 'focus', 'dark']
        },
        {
            pattern: /^text-(red|blue|green|yellow|purple|pink)-(100|200|300|400|500|600|700|800|900)$/,
            variants: ['hover', 'dark']
        }
    ],
    
    // ============================================
    // Plugins
    // ============================================
    plugins: [
        // Official plugins
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
        
        // Custom plugin
        function({ addBase, addComponents, addUtilities, theme, addVariant }) {
            // Base styles
            addBase({
                'h1': {
                    fontSize: theme('fontSize.4xl'),
                    fontWeight: theme('fontWeight.bold'),
                    lineHeight: theme('lineHeight.tight')
                },
                'h2': {
                    fontSize: theme('fontSize.3xl'),
                    fontWeight: theme('fontWeight.semibold'),
                    lineHeight: theme('lineHeight.tight')
                },
                'h3': {
                    fontSize: theme('fontSize.2xl'),
                    fontWeight: theme('fontWeight.semibold'),
                    lineHeight: theme('lineHeight.tight')
                },
                'html': {
                    scrollBehavior: 'smooth'
                },
                'body': {
                    backgroundColor: theme('colors.white'),
                    color: theme('colors.gray.900')
                },
                'body.dark': {
                    backgroundColor: theme('colors.gray.900'),
                    color: theme('colors.white')
                }
            });
            
            // Components
            addComponents({
                '.container': {
                    maxWidth: theme('screens.2xl'),
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft: theme('spacing.4'),
                    paddingRight: theme('spacing.4'),
                    '@screen sm': {
                        paddingLeft: theme('spacing.6'),
                        paddingRight: theme('spacing.6')
                    },
                    '@screen lg': {
                        paddingLeft: theme('spacing.8'),
                        paddingRight: theme('spacing.8')
                    }
                },
                
                '.btn': {
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: theme('spacing.2') + ' ' + theme('spacing.4'),
                    borderRadius: theme('borderRadius.lg'),
                    fontWeight: theme('fontWeight.medium'),
                    transition: 'all 0.2s ease-in-out',
                    cursor: 'pointer',
                    '&:hover': {
                        opacity: '0.9'
                    },
                    '&:focus': {
                        outline: 'none',
                        ring: '2px',
                        ringColor: theme('colors.primary.500'),
                        ringOffset: '2px'
                    },
                    '&:disabled': {
                        opacity: '0.5',
                        cursor: 'not-allowed'
                    }
                },
                
                '.btn-primary': {
                    backgroundColor: theme('colors.primary.500'),
                    color: theme('colors.white'),
                    '&:hover': {
                        backgroundColor: theme('colors.primary.600')
                    }
                },
                
                '.btn-secondary': {
                    backgroundColor: theme('colors.secondary.500'),
                    color: theme('colors.white'),
                    '&:hover': {
                        backgroundColor: theme('colors.secondary.600')
                    }
                },
                
                '.card': {
                    backgroundColor: theme('colors.white'),
                    borderRadius: theme('borderRadius.lg'),
                    boxShadow: theme('boxShadow.md'),
                    overflow: 'hidden'
                },
                '.card.dark': {
                    backgroundColor: theme('colors.gray.800')
                }
            });
            
            // Utilities
            addUtilities({
                '.text-shadow': {
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                },
                '.text-shadow-lg': {
                    textShadow: '0 4px 8px rgba(0,0,0,0.2)'
                },
                '.text-shadow-none': {
                    textShadow: 'none'
                },
                '.bg-pattern': {
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                },
                '.bg-pattern-dark': {
                    backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                },
                '.animation-delay-100': {
                    animationDelay: '100ms'
                },
                '.animation-delay-200': {
                    animationDelay: '200ms'
                },
                '.animation-delay-300': {
                    animationDelay: '300ms'
                },
                '.animation-delay-500': {
                    animationDelay: '500ms'
                },
                '.scrollbar-hide': {
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    }
                }
            });
            
            // Custom variant
            addVariant('children', '& > *');
            addVariant('hover-child', '&:hover > *');
            addVariant('group-hover-child', '.group:hover & > *');
        }
    ]
};`,
      language: "javascript"
    }
  ]
};