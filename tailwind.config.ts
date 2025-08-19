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
        primary: '#155dfc',
        background: {
          light: '#ffffff',
          dark: '#0a0a0a',
        },
        foreground: {
          light: '#171717',
          dark: '#ededed',
        },
        surface: {
          light: '#f8f9fa',
          dark: '#1a1a1a',
        },
        border: {
          light: '#e5e7eb',
          dark: '#2a2a2a',
        },
      },
    },
  },
  plugins: [],
}

export default config
