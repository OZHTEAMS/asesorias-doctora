/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0f172a', // Azul noche profundo (slate-900)
        secondary: '#d97706', // Dorado suave (amber-600)
        background: '#fefce8', // Blanco hueso (amber-50)
        accent: '#ffffff', // Blanco
      },
    },
  },
  plugins: [],
}