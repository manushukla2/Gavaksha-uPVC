import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1e90ff',
          teal: '#06b6d4'
        }
      }
    },
  },
  plugins: [],
}
export default config
