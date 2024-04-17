/** @type {import('tailwindcss').Config} */
// const { join } = require('path');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
      // join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
      // join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/**/*.{html, js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

