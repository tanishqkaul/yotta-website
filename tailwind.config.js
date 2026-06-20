/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#010810',
          900: '#020B18',
          800: '#051122',
          700: '#071526',
          600: '#0D1B2E',
          500: '#112236',
        },
        brand: {
          blue: '#3B82F6',
          'blue-dark': '#2563EB',
          cyan: '#06B6D4',
          'cyan-light': '#22D3EE',
          purple: '#A855F7',
          'purple-dark': '#7C3AED',
          pink: '#EC4899',
          gold: '#F59E0B',
          'gold-light': '#FBBF24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
        'gradient-ai': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
        'gradient-gold': 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
        'gradient-radial-glow': 'radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)',
        'grid-dots': "radial-gradient(circle, rgba(148,163,184,0.12) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '32px 32px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 25s linear infinite',
        'ticker': 'ticker 30s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'counter': 'counter 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-24px)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(6,182,212,0.6), 0 0 60px rgba(6,182,212,0.3)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'brand': '0 0 30px rgba(59,130,246,0.3)',
        'brand-lg': '0 0 60px rgba(59,130,246,0.4)',
        'cyan': '0 0 30px rgba(6,182,212,0.3)',
        'gold': '0 0 20px rgba(245,158,11,0.4)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.5), 0 0 30px rgba(59,130,246,0.15)',
      },
    },
  },
  plugins: [],
}
