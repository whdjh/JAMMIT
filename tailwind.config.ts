// tailwind.config.ts
import { type Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Pretendard Variable"', 'sans-serif'],
      },
    },
    screens: {
      pc: '1000px',
    },
  },
  plugins: [],
};
export default config;
