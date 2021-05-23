module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        active: "var(--active)",
        inactive: "var(--inactive)",
        main: "var(--main)",
        background: "var(--background)",
        navcolor: "var(--navcolor)",
        accent: "var(--accent)",
      },
      backgroundImage: theme => ({
        'programming-icons': "url('img/programming-icons.svg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
