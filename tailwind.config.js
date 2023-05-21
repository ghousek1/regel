/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      monospace: ['Roboto Mono', 'monospace'],
      Uno: ['Prime', 'display'],
      Dos: ['TriakisFont', 'display'],
      Poppins: ["Poppins", "sans-serif"],
      Inter: ["Inter", "sans-serif"]
    },
    screens: {
      'below-md': "860px",
    }
  },
  },
  plugins: [],
}
