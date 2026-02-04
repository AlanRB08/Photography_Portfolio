/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        DMSans : ['DM+Sans', 'sans-serif'],
        Cormorant : ['Cormorant','sans-serif']
      },
      colors : {
        negro : '#000000',
        blanco : '#FFFFFF',
        grisclaro : '#D3D3D3',
        grismed : '#A9A9A9',
        grisobs : '#696969',
        beigecl : '#F5F5DC',
        beigeneut : '#D2B48C',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
