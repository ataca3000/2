module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff6600',
          600: '#e65c00',
        },
        gray: {
          900: '#111111',
          800: '#1a1a1a',
          700: '#2a2a2a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
