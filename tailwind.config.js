/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      cursive: ['Nerko One', 'cursive'],
    },
  },
  extend: {},
  plugins: [daisyui],
};
