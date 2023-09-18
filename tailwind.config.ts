import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './source/**/*.{js,ts,jsx,tsx,mdx}',
    './slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      gray: '#8492a6',
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',
      white: '#fff',
      black: '#393939',
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
