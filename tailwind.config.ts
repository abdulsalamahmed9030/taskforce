import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['var(--font-oswald)', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

export default config
