/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' if you want to use the system preference
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          light: '#1B7632',
          dark: '#2E8B57',
        },
        secondary: {
          light: '#F9A825',
          dark: '#FFD54F',
        },
        background: {
          light: '#FFFFFF',
          dark: '#121212',
        },
        text: {
          light: '#333333',
          dark: '#E0E0E0',
        },
        accent: {
          light: '#E57373',
          dark: '#FF7043',
        },
        // Safari editorial palette
        ivory: '#FBF7EF',
        sand: '#EEE3CC',
        stone: '#D8C9A8',
        olive: {
          DEFAULT: '#454F32',
          deep: '#262D1A',
        },
        gold: {
          DEFAULT: '#B9975B',
          soft: '#D9C393',
        },
        clay: {
          DEFAULT: '#763B22',
          deep: '#4E2515',
        },
        ink: '#1A1611',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'ui-serif', 'Georgia', 'serif'],
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        reveal: 'reveal 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fade-in 1.1s ease forwards',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16,1,0.3,1)',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    }
  ],
}
