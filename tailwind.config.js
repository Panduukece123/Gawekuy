/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./**/*.{html,js}", // Ini akan memindai semua file .html dan .js di folder root dan subfolder
    "./src/**/*.{html,js}" // Jika Anda punya folder src
  ],
  theme: {
    extend: {
      colors: {
        blue1: "#608BC1",
        dark: "#0f172a",
        secondary: "#64748b" 
      },
    },
  },
  plugins: [],
}

