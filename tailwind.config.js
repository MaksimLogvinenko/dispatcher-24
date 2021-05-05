module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'regular': ['TT Norms Regular', 'ui-serif',],
      'medium': ['TT Norms Medium', 'ui-serif',],
      'bold': ['TT Norms Bold', 'ui-serif',],
    },
    colors: {
      primary: '#5276AA',
      secondary: '#363636',
      white: '#ffffff',
      gray: {
        light: '#F6F5FB'
      },
    },
    container: {
      center: true,
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
  ],
}
