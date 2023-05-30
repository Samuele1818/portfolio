module.exports = {
 mode: 'jit',
 darkMode: 'class',
 content: [
  './app/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './modules/**/*.{js,ts,jsx,tsx}',
 ],
 theme: {
  extend: {
   colors: {
    electricViolet: '#6600FF',
    lochmara: '#0092DB',
    bastille: '#1f1926',
    hintOfRed: '#f5f0f0',
   },
   screens: {
    '3xl': '1800px',
   },
  },
 },
 plugins: [
  process.env.NODE_ENV === 'production'
   ? { cssnano: {} }
   : {},
 ],
}
