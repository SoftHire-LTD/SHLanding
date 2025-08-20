/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Dark Navy Blue / Midnight Blue - Professional background
        navy: {
          50: '#f1f5f9',
          100: '#e2eaf4',
          200: '#c8d8ea',
          300: '#a1bfdc',
          400: '#759dca',
          500: '#5580bb',
          600: '#4068af',
          700: '#38569f',
          800: '#324883',
          900: '#0c1c2d',   // Main dark navy
          950: '#071018'
        },
        // Bright Blue / Accent Blue - CTAs and highlights
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2d6ff7',   // Main bright blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        // Black / Dark Charcoal - Text and UI elements
        charcoal: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#222222',   // Dark charcoal
          900: '#000000',   // Pure black
        },
        // Light Grey - Backgrounds and dividers
        grey: {
          50: '#f9fafb',
          100: '#f5f5f5',   // Main light grey
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#dddddd',   // Alternative light grey
          500: '#9ca3af',
          600: '#6b7280',
          700: '#4b5563',
          800: '#374151',
          900: '#111827',
        },
        // Soft Pastel Accent Shapes - Decorative elements
        mint: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#b6e2c8',   // Main mint green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        lavender: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d6c4f2',   // Main light lavender
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        aqua: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#b0e0e6',   // Main light aqua blue
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Legacy aliases for existing components
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2d6ff7',   // Bright blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#0c1c2d'    // Navy
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2d6ff7',   // Bright blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#0c1c2d'    // Navy
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#b6e2c8',   // Mint green for accents
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d'
        }
      },
    },
  },
  plugins: [],
};
