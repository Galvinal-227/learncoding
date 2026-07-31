/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Pixelify Sans"', 'sans-serif'],
      },
      colors: {
        apple: {
          black: '#000000',
          white: '#ffffff',
          gray: {
            light: '#f5f5f7',
            medium: '#86868b',
            dark: '#1d1d1f',
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}