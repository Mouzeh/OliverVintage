/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './stores/**/*.{js,ts}',
    './types/**/*.{ts}'
  ],
  theme: {
    extend: {
      colors: {
        'vintage-cream': '#FAF8F5',
        'vintage-forest': '#2C4C3B',
        'vintage-terracota': '#C06E52',
        'vintage-graphite': '#1C1C1A'
      },
      fontFamily: {
        'display': ['SegmentAKey', 'sans-serif'],
        'body': ['Inter', 'Geist', 'sans-serif'],
        'segment': ['SegmentAKey', 'serif']
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
}