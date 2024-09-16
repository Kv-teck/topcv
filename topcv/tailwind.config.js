/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      important: true,
      backgroundImage: {
        'hero-pattern': "url('https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/bg_header.webp')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '100%': '100%',
        '16': '4rem',
        '64': '18rem',
        '20': '20%'
      },
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 1rem',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
        'top-4': 'center top 1rem',
        '50':'50%',
      }
      
    },
  },
  plugins: [],
}