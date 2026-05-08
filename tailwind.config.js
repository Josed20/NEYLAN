/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        nelyan: {
          black: '#111111',
          ink: '#1f1c19',
          cappuccino: '#9b8a78',
          latte: '#ddd2c5',
          cream: '#f7f3ee',
          ivory: '#fffaf5',
          rose: '#d8b8ad',
          olive: '#8f9672',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Montserrat', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(31, 28, 25, 0.10)',
        glow: '0 24px 70px rgba(155, 138, 120, 0.22)',
      },
    },
  },
  plugins: [],
}
