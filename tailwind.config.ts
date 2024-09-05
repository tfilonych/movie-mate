import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{ts,jsx,tsx,mdx}',
    './src/app/**/*.{ts,jsx,tsx,mdx}',
    './src/hoc/**/*.{ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        portrait: '2/3',
        portraitSm: '2/3',
        landscape: '16/9',
      },
      width: {
        portrait: '342px',
        landscape: '300px',
        portraitSm: '185px',
      },
    },
  },
  plugins: [],
};
export default config;
