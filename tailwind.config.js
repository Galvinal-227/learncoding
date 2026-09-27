/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Body text — pixel tapi readable
        pixel: ['"Pixelify Sans"', 'sans-serif'],
        // Heading / hero — classic pixel impact
        display: ['"Press Start 2P"', 'cursive'],
        // Code block / terminal — retro monospace
        terminal: ['"VT323"', 'monospace'],
        // Inline code — modern mono, jelas
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
        // Warna retro tambahan
        neon: {
          green: '#a8ff60',
          cyan: '#5ffbf1',
          pink: '#ff6ec7',
          yellow: '#ffe066',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      fontSize: {
        // Skala khusus untuk Press Start 2P (font-nya besar, jadi perlu lebih kecil)
        'display-xs': ['0.75rem', { lineHeight: '1.4' }],
        'display-sm': ['1rem', { lineHeight: '1.4' }],
        'display-md': ['1.5rem', { lineHeight: '1.3' }],
        'display-lg': ['2rem', { lineHeight: '1.3' }],
        'display-xl': ['3rem', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}
