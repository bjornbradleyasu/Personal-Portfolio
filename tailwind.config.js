/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:           '#EAE2D5',
        surface:      '#EDE5D6',
        'surface-alt':'#BBA98E',
        canvas:       '#DDD0BB',
        'text-primary':   '#1E1511',
        'text-secondary': '#4A3422',
        accent:       '#8B3A10',
        'accent-light':'#A84E1E',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body:    ['"Plus Jakarta Sans"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
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