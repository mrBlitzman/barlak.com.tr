/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/partials/index.html", "./views/partials/login.html", "./views/partials/postshare.html", "./deneme.html" ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        josephinsans: ['Josephin Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

