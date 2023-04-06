/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.html"],
  theme: {
    
    
    extend: {
      colors: {
        mainBg: "#1E1F1F",
        boxBg:"#252626",
        lyellow:"#F2FE8D",
        lpurple:"#AA9EB7",
        lgrey: "#9ca3af",
        lmint: "#B2D0CE",
        ldark:"#79767D"
      },
      backgroundImage:{
        'profile': "url('https://randomuser.me/api/portraits/women/47.jpg')",
      },
      spacing: {
        'cardH': '170px',
        'cardW' : '148px',
        'sameH': '100px',
        'sameW': '100px',
        'boxH': '620px',
        'boxW': '355px'
      }
    },
  },
  plugins: [],
}

