/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    screens: {
      'sm': {'min': '375px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        // Agrega las variables personalizadas de colores aquí
        'Soft-blue': 'hsl(215, 51%, 70%)',
        'Cyan': 'hsl(178, 100%, 50%)',
        'Very-dark-blue-main': 'hsl(217, 54%, 11%)',
        'Very-dark-blue-menu-mobile': 'hsl(216, 62%, 18%)',
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
      boxShadow: {
        'custom-cyan': '4px 4px 0 var(--Cyan)',
      },
    },
  },
  plugins: [],
}

