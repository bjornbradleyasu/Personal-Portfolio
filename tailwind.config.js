/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:           '#FAF7F2',
        surface:      '#F0EBE1',
        'surface-alt':'#E8E0D0',
        'text-primary':   '#1A1410',
        'text-secondary': '#6B5E52',
        accent:       '#D46B2F',
        'accent-light':'#F0A86B',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          md: '2rem',
          lg: '2.5rem',
        },
      },
    },
  },
  plugins: [],
} 