/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary — slate blue (financial trust)
        primary: '#2D5A7B',
        'primary-deep': '#1E3F56',
        'primary-light': '#3A7BA8',
        // Accents
        accent: '#C1FA6B',          // Lime green (CTAs, highlights)
        'accent-dark': '#A8E050',   // Darker lime for hover
        'accent-warm': '#FF8E6E',   // Coral (compliance warnings, penalties)
        'accent-warm-dark': '#E07A5A',
        // Dark
        dark: '#0F1B24',
        'dark-surface': '#162A38',
        // Surface & neutrals
        surface: '#F7F9FB',
        'surface-alt': '#EEF2F6',
        border: '#E2E8F0',
        'border-dark': '#CBD5E1',
        // Text
        text: '#1A2B3B',
        'text-secondary': '#5A7184',
        'text-muted': '#8899A8',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #2D5A7B 0%, #3A7BA8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #C1FA6B 0%, #A8E050 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0F1B24 0%, #162A38 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FF8E6E 0%, #E07A5A 100%)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
};
