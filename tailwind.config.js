/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#151817',
          dark: '#0D0F0E',
          light: '#222725',
        },
        panel: {
          DEFAULT: '#222725',
          dark: '#191D1B',
          light: '#2A302D',
        },
        concrete: {
          DEFAULT: '#555B56',
          light: '#6B726C',
          dark: '#3F4540',
        },
        shadow: {
          DEFAULT: '#303633',
          dark: '#1C201E',
          light: '#3E4642',
        },
        moss: {
          DEFAULT: '#687565',
          light: '#7D8C7A',
          dark: '#465044',
        },
        rust: {
          DEFAULT: '#A35243',
          light: '#BA6656',
          dark: '#7C3E33',
        },
        amber: {
          DEFAULT: '#B09A69',
          light: '#C4AD7C',
          dark: '#8E7B50',
        },
        paper: {
          DEFAULT: '#D8D7CD',
          light: '#E6E5DC',
          dark: '#939B92',
          warm: '#222725',
        },
      },
      fontFamily: {
        editorial: ['"Cormorant Garamond"', '"Noto Serif Georgian"', 'serif'],
        sans: ['"Inter"', '"Noto Sans Georgian"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'brutalist': '3px 3px 0px 0px #0D0F0E',
        'brutalist-sm': '2px 2px 0px 0px #0D0F0E',
        'brutalist-rust': '2px 2px 0px 0px #A35243',
      }
    },
  },
  plugins: [],
}
