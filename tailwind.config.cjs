/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary — Teamed-inspired palette
        'nexus-purple': '#966EFF',       // Primary purple
        'nexus-purple-deep': '#7B4FE0',  // Darker purple for hover
        'nexus-coral': '#FF8E6E',        // Gradient endpoint / warm accent
        'nexus-dark': '#121213',         // Near-black background
        // Accent
        'nexus-lime': '#C1FA6B',         // Lime green accent (CTAs, highlights)
        'nexus-lime-dark': '#A8E050',    // Darker lime for hover
        // Neutrals
        'nexus-white': '#FFFFFF',
        'nexus-offwhite': '#F8F8FA',     // Light background
        'nexus-gray-100': '#F1F1F4',     // Card backgrounds
        'nexus-gray-200': '#E2E2E8',     // Borders
        'nexus-gray-300': '#CECECE',     // Dividers
        'nexus-gray-500': '#A7A7A7',     // Muted text
        'nexus-gray-700': '#4A4A52',     // Secondary text
        'nexus-gray-900': '#1A1A1F',     // Primary text
        // Brand aliases
        brand: {
          primary: '#966EFF',
          dark: '#121213',
          accent: '#C1FA6B',
          warm: '#FF8E6E',
          text: '#1A1A1F',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #966EFF 0%, #FF8E6E 100%)',
        'gradient-brand-hover': 'linear-gradient(135deg, #7B4FE0 0%, #E07A5A 100%)',
        'gradient-dark': 'linear-gradient(180deg, #121213 0%, #1A1A2E 100%)',
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
