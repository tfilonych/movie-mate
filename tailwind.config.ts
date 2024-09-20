import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{ts,jsx,tsx,mdx}',
    './src/app/**/*.{ts,jsx,tsx,mdx}',
    './src/hoc/**/*.{ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        starwars: ['StarJedi', 'sans-serif'], // Add Star Wars font here
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
      textShadow: {
        poster: ' 0 0 60px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        brand: '#7b89eb',
        borderColor: '#292e3d',
      },
      keyframes: {
        'text-glow': {
          '0%, 10%, 90%, 100%': { width: '0%' },
          '50%': { width: '100%' },
        },
        'text-scale': {
          '0%': { transform: 'scale(2)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        twinkleRay: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.1)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'rotateY(90deg)' },
          '100%': { opacity: '1', transform: 'rotateY(0deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.5)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        move: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        scale: 'text-scale 5s ease-in-out',
        'text-glow': 'text-glow 7s ease 0.4s infinite alternate both',
        fadeUp: 'fadeUp 5s ease-in-out 2s forwards', // You can adjust duration
        'twinkle-ray':
          'twinkleRay var(--twinkle-duration, 5s) infinite ease-in-out',
        'twinkle-ray-delayed':
          'twinkleRay var(--twinkle-duration, 5s) infinite ease-in-out 0.5s',
        twinkle:
          'twinkle var(--twinkle-duration, 5s) infinite ease-in-out, move var(--move-duration, 15s) infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;
