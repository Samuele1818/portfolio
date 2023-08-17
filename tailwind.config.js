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
   backgroundImage: {
    darkgr:
     'linear-gradient(to right top, #0d1c31, #0c182a, #0a1524, #07101e, #030b18)',
    cyangr:
     'linear-gradient(to right top, #083344, #0b2939, #0c202e, #0a1723, #030b18)',
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
