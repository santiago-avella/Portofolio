/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        greenCustom1: '#001514',
        greenCustom2: '#294936',
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

