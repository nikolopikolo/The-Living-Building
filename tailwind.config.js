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
          DEFAULT: '#262B29',
          dark: '#1c201e',
          light: '#313735',
        },
        concrete: {
          DEFAULT: '#C4B7A2',
          light: '#D7CCBC',
          dark: '#AA9C86',
        },
        moss: {
          DEFAULT: '#74826A',
          light: '#8A997F',
          dark: '#586450',
        },
        paper: {
          DEFAULT: '#E8E0D1',
          light: '#F3EDE1',
          dark: '#DDD4C3',
          warm: '#F7F3EB',
        },
        rust: {
          DEFAULT: '#965D45',
          light: '#AF7359',
          dark: '#7D4732',
        },
        ink: {
          DEFAULT: '#343B37',
          light: '#48524D',
          dark: '#202522',
        },
      },
      fontFamily: {
        editorial: ['"Cormorant Garamond"', '"Noto Serif Georgian"', 'serif'],
        sans: ['"Inter"', '"Noto Sans Georgian"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'brutalist': '4px 4px 0px 0px #262B29',
        'brutalist-sm': '2px 2px 0px 0px #262B29',
        'brutalist-rust': '3px 3px 0px 0px #965D45',
      }
    },
  },
  plugins: [],
}
