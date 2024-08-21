/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#fffff",
        primaryColor: "#64FFDA",
        textColor: "#00000",
        textHoverColor: "#ffffff"
      },
      animation: {
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        profileAnimate: {
          '0%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
        },
      },
      animation: {
        profile: 'profileAnimate 8s ease-in-out infinite 1s',
      },
    },
    screens: {
      'xsm': '350px',
      'xs': '476px',
      'sm': '640px',
      'md': '768px',
      'bs': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      
      '4xl-mx': { 'max': '2135px' },
      '3xl-mx': { 'max': '1835px' },
      '2xl-mx': { 'max': '1535px' },
      'xl-mx': { 'max': '1284px' },
      'lg-mx': { 'max': '1028px' },
      'bs-mx': { 'max': '899px' },
      'md-mx': { 'max': '767px' },
      'sm-mx': { 'max': '639px' },
      'xs-mx': { 'max': '475px' },
      'xsm-mx': { 'max': '360px' }
    }

  },
  plugins: [],
}