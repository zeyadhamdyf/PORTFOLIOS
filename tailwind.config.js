/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080808',
          sec: '#111111',
          card: '#171717',
          gold: '#D4AF37',
          goldLight: '#F5D77A',
          goldDark: '#AA820A',
          text: '#FFFFFF',
          muted: '#A3A3A3',
        },
        light: {
          bg: '#FFFFFF',
          sec: '#F4FAFD',
          card: '#FFFFFF',
          bluePrimary: '#012A4A',
          blueSecondary: '#2A6F97',
          babyBlue: '#A9D6E5',
          text: '#012A4A',
          muted: '#466070',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.35)',
        'blue-sm': '0 4px 15px rgba(42, 111, 151, 0.12)',
        'blue-md': '0 8px 25px rgba(42, 111, 151, 0.18)',
        'blue-lg': '0 15px 40px rgba(1, 42, 74, 0.2)',
      },
    },
  },
  plugins: [],
};
