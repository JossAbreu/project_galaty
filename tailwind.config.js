/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      objectPosition: {
        'center-bottom': 'center bottom',
        'center-top': 'center top',
      }

    },
  },
  plugins: [],
}

