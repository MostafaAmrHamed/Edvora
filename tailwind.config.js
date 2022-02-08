module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#292929',
          2: '#131313',
        },
        subtext: '#FFFFFF99',
      },
      fontFamily: {
        body: ['Noto Sans Display'],
      },
    },
  },
  plugins: [],
}
