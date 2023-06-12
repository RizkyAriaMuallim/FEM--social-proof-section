/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-SoftPink' : 'hsl(333, 80%, 67%)',
        'p-Very-Dark-Magenta' : 'hsl(300, 43%, 22%)',
        'neutral-white' : 'hsl(0, 0%, 100%)',
        'Light-Grayish-Magenta' : 'hsl(300, 24%, 96%)',
      },
      textColor: {
        'p-Very-Dark-Magenta' : 'hsl(300, 43%, 22%)',
        'neutral-white' : 'hsl(0, 0%, 100%)',
      },
      height: {
        'container' : '550px',
      }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
