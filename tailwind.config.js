/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bento: {
          bg: '#EAECEF',
          surface: '#FFFFFF',
          lavender: '#7B88D7',
          mint: '#9FE3DB',
          violet: '#8C79C8',
          amber: '#F5BF62',
          charcoal: '#323639',
          pink: '#ED5199',
          dark: {
            bg: '#0A0D14',
            surface: '#111622',
            card: '#161B2A',
            hover: '#1E2438',
            border: 'rgba(255, 255, 255, 0.08)',
            accent: '#818CF8'
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        persian: ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'bento': '0 20px 40px -15px rgba(0, 0, 0, 0.07), 0 0 0 1px rgba(0, 0, 0, 0.04)',
        'bento-dark': '0 20px 50px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'glow-pink': '0 0 25px rgba(237, 81, 153, 0.45)',
        'glow-lavender': '0 0 35px rgba(123, 136, 215, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
