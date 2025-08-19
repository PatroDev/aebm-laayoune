/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 12s linear infinite', // rotation lente 12s
      },
      colors: {
        primary: '#1E40AF', // Bleu foncé
        secondary: '#FBBF24', // Jaune vif
        accent: '#EF4444', // Rouge vif
        background: '#F3F4F6', // Gris clair
        text: '#111827', // Gris très foncé
      },
    },
  },
  plugins: [],
};
