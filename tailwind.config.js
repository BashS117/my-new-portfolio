/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Agrega las variables personalizadas de colores aquí
        'Soft-blue': 'hsl(215, 51%, 70%)',
        'Cyan': 'hsl(178, 100%, 50%)',
        'Very-dark-blue-main': 'hsl(217, 54%, 11%)',
        'Very-dark-blue-card': 'hsl(216, 50%, 16%)',
        'Very-dark-blue': 'hsl(215, 32%, 27%)',
        'White': 'hsl(0, 0%, 100%)',


        'navy': '#0a192f',
        'slate': 'hsl(225, 20%, 61%)',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        'green': '#64ffda',
      },
       fontSize: {
        clamp: "clamp(40px, 8vw, 60px)",
      },
    },
  },
  plugins: [],
}

