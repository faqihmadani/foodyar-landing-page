module.exports = {
  purge: [
    './public/**/*.html',
    './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'quicksand': 'Quicksand',
    },
    colors:{
      'myBlue': '#272042',
      'myYellow': '#F7C531',
      'myGray': '#8B8BA5',
      'myPink': '#FBE0DC',
      'white':'#ffffff'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
