/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
       'xxxs': '320px',
       'xxs' : '375px',
       'xs' : '425px',
     },
     
    extend: {
      colors: {
        lightPurple: '#BC3FFF',
        shadeWhite: '#FAFAFA',
        paleViolet: 'hsl(276, 100%, 81%)',
        moderateViolet: 'hsl(276, 55%, 52%)',
        lightMagenta: 'hsl(293, 100%, 63%)',
        lightViolet: 'hsl(264, 100%, 61%)',
        anotherWhite: '#F5F3F8',
        lightGrayish: 'hsl(270, 20%, 96%)',
        backgroundChat: '#ECE5F3',
        veryDark: 'hsl(271, 36%, 24%)',
        darkGrayish: 'hsl(270, 7%, 64%)',
        grayPlaceho: 'hsl(206, 6%, 79%)',
        backgroundPhone: '#F5F3F8',
        chatRight: 'hsl(271, 15%, 43%)',
      },
      screens: {
        '1xl': '1440px',
        '3xl': '1920px',
      },
      fontFamily: {
        body: ['Rubik'],
      },
      fontSize: {
      'xxl': '37px',
      
     },
    },
  },
  plugins: [],
}

