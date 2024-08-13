/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white:{
          100:'#f5f5f5',
          200:'#e6e6e6',
          300:"#e8eced",
          400:"#8b9ba0",
          500:'#eff1f1',
          600:'#dde3e5'

        },
        green:{
          100:'#052e2b',
          200:'#68da6a',
          300:'#05504b',
          400:'#05704b',
          
      
        },
        gray:{
          100:'#6a7e85'
        },
        orange:{
          100:'#f2eeeb',
          200:'#e2dbd2'
        },
        blue:{
          100:'#6a7e85',
          200:'#145186',
          300:'#80e8ff',
          400:'#0e487f'
        },
        black:{
          100:'#1a201e'
        }
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* For Firefox */
          'scrollbar-width': 'none',
          /* For Chrome, Edge, and Safari */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
}
