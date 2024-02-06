/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'spartan': ['League Spartan','sans-serif']
    },
    colors:{
      'cornflowerblue':'#7c5dfa',
      'heliotrope':'#9277FF',
      'mirage':'#1E2139',
      'ebonyclay':'#252945',
      'vulcan':'#0C0E16',
      'silvercove':'#7E88C3',
      'balihai':'#888EB0',
      'selago':'#DFE3FA',
      'whisper':'#F8F8FB', //bg-light
      'miragedp':'#141625', //bg-dark
      'monalisa':'#FF9797',
      'burntsienna':'#EC5757',
    },
    extend: {
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out ',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        }
      }  
    }
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant("children","&>*")
    })
  ],
}