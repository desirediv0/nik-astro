/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#b8860b',
        'gold-light': '#f0c040',
        'gold-pale': '#fdf3dc',
        'gold-border': '#e8d080',
        cream: '#fffdf7',
        'cream-border': '#f0ebe0',
        'nik-dark': '#0e0c08',
        'nik-dark-mid': '#1e1a0f',
        ink: '#1a1202',
        'body-text': '#6b5c3e',
        'muted-gold': '#a89060',
        'subtle-gold': '#7d5a00',
        'nik-red': '#c0392b',
        'wa-green': '#25d366',
        'wa-green-dark': '#1ab854',
        'wa-green-bg': 'rgba(37,211,102,0.1)',
        'wa-green-border': 'rgba(37,211,102,0.25)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Palatino Linotype', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'nik-sm': '8px',
        'nik-md': '14px',
        'nik-lg': '18px',
        'nik-xl': '24px',
      },
      boxShadow: {
        card: '0 2px 20px rgba(0,0,0,0.06)',
        gold: '0 8px 40px rgba(184,134,11,0.13)',
        wa: '0 4px 20px rgba(37,211,102,0.35)',
      },
    },
  },
  plugins: [],
}

