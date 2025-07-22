// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#F3EADE',
        'brand-bg-darker': '#EAD9C9',
        'brand-primary': '#1F1F1F',
        'brand-secondary': '#FFFFFF',
        'brand-accent': '#E58B44',
        // New colors inspired by the reference image
        'brand-hero-bg': '#4A2F2B',  // Dark, earthy background
        'brand-bottle': '#1A1A1A',  // Dark bottle color
        'brand-pedestal': '#3D2826', // Pedestal color
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        // Add a serif font for headings, as seen in the reference
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards 0.5s',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
export default config
