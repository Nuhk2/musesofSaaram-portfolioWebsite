// tailwind.config.js
module.exports = {
  mode: 'jit',
  darkMode: 'media', // or remove this line entirely
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // replaces 'purge' in v3
  theme: {
    extend: {
      colors: {
        gold: '#D4A574',
      },
      fontFamily: {
        neue: ['"Neue Montreal"', 'sans-serif'],
        silk: ['"Silk Serif"', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
    },
  },
  plugins: [],
};
