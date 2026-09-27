/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // tag 'pixel' tetap dipakai di component, tapi render jadi Inter
        pixel: ['"Inter"', 'system-ui', 'sans-serif'],
        // alias tambahan biar fleksibel
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        apple: {
          black: '#000000',
          white: '#ffffff',
          gray: {
            light: '#f5f5f7',
            medium: '#86868b',
            dark: '#1d1d1f',
          },
        },
        ink: {
          950: '#0a0a0a',
          900: '#111111',
          800: '#1a1a1a',
          700: '#262626',
          600: '#404040',
        },
        accent: {
          blue: '#7dd3fc',
          green: '#4ade80',
          purple: '#a78bfa',
          pink: '#f472b6',
          yellow: '#fbbf24',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      fontSize: {
        'display-xs': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem',   { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2',  letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1',  letterSpacing: '-0.03em' }],
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
    },
  },
  plugins: [],
}
