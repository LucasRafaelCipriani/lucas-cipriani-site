import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animationDuration: {
        0: '0ms',
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
      },
      colors: {
        main: '#16A34A',
        'main-hover': '#15803D',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        DEFAULT: '100%',
        '2xl': '1400px',
      },
    },
    'duration-200': {},
  },
  plugins: [
    require('tailwindcss/plugin')(function ({
      addUtilities,
      theme,
    }: {
      addUtilities: (
        utilities: Record<string, any>,
        variants?: string[]
      ) => void;
      theme: (path: string) => any;
    }) {
      const durations = theme('animationDuration') as Record<string, string>;
      const newUtilities = Object.entries(durations).reduce<
        Record<string, { 'animation-duration': string }>
      >((acc, [key, value]) => {
        acc[`.anim-duration-${key}`] = {
          'animation-duration': value,
        };
        return acc;
      }, {});
      addUtilities(newUtilities, ['responsive']);
    }),
  ],
};
export default config;
