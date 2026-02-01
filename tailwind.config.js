/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        premium: {
          "primary": "#57534e",
          "primary-content": "#fafaf9",
          "secondary": "#44403c",
          "secondary-content": "#fafaf9",
          "accent": "#78716c",
          "accent-content": "#fafaf9",
          "neutral": "#292524",
          "neutral-content": "#e7e5e4",
          "base-100": "#1c1917",
          "base-200": "#292524",
          "base-300": "#44403c",
          "base-content": "#fafaf9",
          "info": "#78716c",
          "success": "#57534e",
          "warning": "#a8a29e",
          "error": "#78716c",
        },
      },
    ],
  },
}
