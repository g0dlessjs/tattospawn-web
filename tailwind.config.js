/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Green colors matching the logo (neon/toxic green)
        primary: {
          50: '#f0fff0',
          100: '#dcffd4',
          200: '#baffac',
          300: '#89ff74',
          400: '#54ff3d',
          500: '#39ff14',
          600: '#2bcc0f',
          700: '#1e990a',
          800: '#1a7a0a',
          900: '#16610a',
          950: '#053805',
        },
        // Secondary green accents
        accent: {
          50: '#e8ffe8',
          100: '#c8ffc8',
          200: '#92ff92',
          300: '#5cff5c',
          400: '#39ff39',
          500: '#22cc22',
          600: '#1a991a',
          700: '#157515',
          800: '#125512',
          900: '#0f420f',
          950: '#072607',
        },
        dark: {
          50: '#f6f6f6',
          100: '#e2e2e2',
          200: '#c4c4c4',
          300: '#a6a6a6',
          400: '#888888',
          500: '#6b6b6b',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0a0a0a',
          950: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
