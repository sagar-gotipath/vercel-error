module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple-gray': '#141A22',
        mariner: {
          50: '#B2C5F3',
          100: '#A0B8F0',
          200: '#7D9DEB',
          300: '#5983E5',
          400: '#3668E0',
          500: '#2053CD',
          600: '#183F9C',
          700: '#112C6C',
          800: '#09183B',
          // 900: "#02040B",
          900: '#0F62FE',
        },
      },
      keyframes: {
        // logo slide
        // logoSlide: {
        //   '0%': {
        //     transform: 'translateX(30%)',
        //   },
        //   '100%': {
        //     transform: 'translateX(-70%)',
        //   },
        // },
        slidingLeftToRight: {
          '0%': { transform: 'translateX(50px)' },
          '100%': { transform: 'translateX(-1900px)' },
        },
        slideUp: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shake: {
          '10%': {
            transform: 'translate(-1px, 0)',
          },

          '20%': {
            transform: 'translate(2px, 0)',
          },

          '30%': {
            transform: 'translate(-4px, 0)',
          },

          '40%': {
            transform: 'translate(4px, 0)',
          },
          '50%': {
            transform: 'translate(-4px, 0)',
          },

          '60%': {
            transform: 'translate(4px, 0)',
          },
          '70%': {
            transform: 'translate(-4px, 0)',
          },
          '80%': {
            transform: 'translate(2px, 0)',
          },
          '90%': {
            transform: 'translate(-1px, 0)',
          },
        },
      },
      animation: {
        // custom animation for after hero section image sliding
        slideToRight: 'slidingLeftToRight 50s linear infinite backwards',
        slideUp: 'slideUp 1s ease-in-out ',
        slideUpDelay: 'slideUp 1.5s ease-in-out',
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
        // logoSlide: 'logoSlide 10s ease-in-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cloud-bg': "url('/images/bg_gradient.png')",
        globe_bg_shadow: "url('/images/globe_shadow.png')",
        toffee_bg: "url('/images/bg.jpg')",
      },
    },
  },
  plugins: [require('tailwindcss-font-inter'), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
