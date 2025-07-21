/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefcf3',
          100: '#fef7e0',
          200: '#fce8a8',
          300: '#fad980',
          400: '#F9C47D',
          500: '#f7b955',
          600: '#e6a042',
          700: '#cc8b35',
          800: '#a6722b',
          900: '#8a5f24',
        },
        navy: {
          50: '#f0f3f9',
          100: '#dde4f0',
          200: '#c2cfe3',
          300: '#9bb0d1',
          400: '#7289bc',
          500: '#5569a8',
          600: '#475394',
          700: '#3d4578',
          800: '#343a63',
          900: '#2d3154',
        }
      }
    },
  },
  plugins: [],
};
