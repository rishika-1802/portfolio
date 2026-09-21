import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#090909',
          subtle: '#101010',
          card: '#171717',
          elevated: '#1E1E1E',
          border: '#2A2A2A',
        },
        light: {
          primary: '#F5F5F5',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        violet: {
          primary: '#7C3AED',
          secondary: '#A855F7',
          highlight: '#C084FC',
          glow: 'rgba(124, 58, 237, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      },
      boxShadow: {
        'violet-glow': '0 0 30px -5px rgba(124, 58, 237, 0.25)',
        'violet-sm': '0 0 15px -3px rgba(124, 58, 237, 0.2)',
        'card-hover': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(124, 58, 237, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

export default config
