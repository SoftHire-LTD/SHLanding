/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef3ff',
          100: '#dbe6ff',
          200: '#b8cdff',
          300: '#8aaaff',
          400: '#5f8bff',      /* near #4995EF */
          500: '#4361ED',      /* primary brand */
          600: '#3C5DEC',      /* hover/darker */
          700: '#2f4ed0',
          800: '#243ea8',
          900: '#1d327f'
        },
        primary: {             /* alias primary -> brand for existing classes */
          50:  '#eef3ff',
          100: '#dbe6ff',
          200: '#b8cdff',
          300: '#8aaaff',
          400: '#5f8bff',
          500: '#4361ED',
          600: '#3C5DEC',
          700: '#2f4ed0',
          800: '#243ea8',
          900: '#1d327f'
        },
        navy: {
          900: '#021626',      /* dark sections (hero/footer background) */
          950: '#010e18'
        },
        accent: {              /* keep your gold accent for small highlights */
          50:  '#fefcf3',
          100: '#fef7e0',
          200: '#fce8a8',
          300: '#fad980',
          400: '#F9C47D',
          500: '#f7b955',
          600: '#e6a042',
          700: '#cc8b35',
          800: '#a6722b',
          900: '#8a5f24'
        }
      },
    },
  },
  plugins: [],
};
