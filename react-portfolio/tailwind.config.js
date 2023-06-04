/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      colors:{
        'offWhite':{
          100: '#F5F0E8',
          200: '#F0E7DB',
        },
        'offDark':{
          100:'#313134',
          200:'#202023',
        },
      },
    },
  },
  plugins: [],
}

