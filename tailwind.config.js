module.exports = {
  mode: 'jit',
  purge: ['./src/index.html'],
  corePlugins: {
    preflight: false
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
