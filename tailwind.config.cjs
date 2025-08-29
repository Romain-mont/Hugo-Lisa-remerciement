/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bridal: {
          white: '#FFFFFF',
          blush: '#F6E7EB',
          gold: '#D4AF37',
          blue: '#DCEAF5',
          violet: '#C9B3E6',
          ink: '#111827',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.4deg)' },
          '75%': { transform: 'rotate(-0.4deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(59,130,246,0)' },
          '50%': { boxShadow: '0 0 20px rgba(59,130,246,0.35)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        tilt: 'tilt 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        fadeUp: 'fadeUp 900ms cubic-bezier(0.22, 1, 0.36, 1) both',
        fadeIn: 'fadeIn 800ms ease-out both',
      },
    },
  },
  plugins: [],
}

