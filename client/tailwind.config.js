/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'grey': "rgba(255, 255, 255, 0.104)",
      'blue': '#rgb(120, 120, 120)',
      'gold': '#C79853',
      'yellow': '#D9AC59',
      'red': '#D93636',
    },
    extend: {
      // animation: {
      //   // Bounces 5 times 1s equals 5 seconds
      //   'bounce-short': 'bounce 1s ease-in-out 9'
      // }
    
        backgroundImage: {
          'hero': "url('../src/assets/homepage_pic.jpg')",
          'about': "url('../src/assets/about.jpg')",
          'clients': "url('../src/assets/clients.jpg')",
        },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
