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
    dark: '#1f1926',
    lightDark: '#474747',
    light: '#f5f0f0',
   },
   screens: {
    '3xl': '1800px',
   },
   boxShadow: {
    cs: '4px 12px 16px rgba(31, 25, 38, 0.22);',
   },
  },
 },
 plugins: [
  require('@tailwindcss/typography'),
  process.env.NODE_ENV === 'production'
   ? { cssnano: {} }
   : {},
 ],
}
