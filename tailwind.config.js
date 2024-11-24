/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      fontWeight: {
        '550': '510',
      },
      keyframes: {
        'slide-fade': {
          '0%': { opacity: '0', transform: 'translateY(50%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-fade': 'slide-fade 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

