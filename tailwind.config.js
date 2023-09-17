/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter-Bold', 'Inter-Medium', 'Inter-Regular', 'Inter-SemiBold'],
      },
      spacing: {
        '0.375': '6px',
        '0.5': '8px',
        '0.625': '10px',
        '0.75': '12px',
        '1': '16px',
        '1.25': '18px',
        '1.5': '24px',
        '2': '32px',
        '2.5': '40px',
        '3': '48px',
        '3.5': '54px',
        '4': '62px',
        '5.125': '82px',
        '6': '96px',
        '8.5': '136px',
        '8.75': '140px',
        '9': '148px',
        '10': '154px',
        '10.5': '168px',
        '11': '176px',
        '12': '186px',
        '14': '210px',
        '18': '288px',
        '19': '294px',
        '20': '310px',
        '22.5': '360px',
        '23.375': '374px',
      },
      colors: {
        'white': '#ffffff',
        'light-gray': '#EFEFEF',
        'gray': '#555555',
        'dark-gray': '#5A5A5A',
        'Raisin-black': '#1E1F24',
        'o': '#EC441E'
      },
    },

  },
  plugins: [],
}