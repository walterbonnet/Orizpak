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
        brand: {
          'warm-white': '#fdfaea',
          'sand': '#f3eedf',
          'charcoal': '#283618',
          'olive': '#606c38',
          'earth': '#f97924',
          'green-vibrant': '#79a64f',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '24px',
        '2xl': '16px',
        'xl': '12px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(42, 42, 42, 0.04), 0 2px 8px -1px rgba(42, 42, 42, 0.02)',
      },
      spacing: {
        // 8px scale alignment
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
      },
      transitionDuration: {
        '200': '200ms',
      },
    },
  },
  plugins: [],
};

export default config;
