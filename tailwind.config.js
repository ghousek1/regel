/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      monospace: ['JetBrains Mono', 'monospace'],
      uno: ['Prime', 'display']
    },
    screens: {
      'below-md': "860px",
    }
  },
  },
  plugins: [],
}
