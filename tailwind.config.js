module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        electricViolet: '#6600FF',
        puertoRico: '#3ABEAA',
        bastille: '#1f1926',
        hintOfRed: '#f5f0f0'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
