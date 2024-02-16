import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#2D3E50',
        white: '#FFF',
        cian: '#00B8D4',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
        opacity: 'opacity',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
