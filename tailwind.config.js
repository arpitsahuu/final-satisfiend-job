/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green': 'var(--tw-green)',
        'text': 'var(--tw-text)',
        'blue': 'var(--tw-blue)',
        'gray': 'var(--tw-gray)',
        'purple': 'var(--tw-purple)',
        
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'medium': 500, 
      },
    },
  },
  plugins: [],
}
