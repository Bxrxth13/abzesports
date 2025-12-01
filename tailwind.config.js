/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        'sec-m':'clamp(16px,4vw,24px)',
        'sec-t':'clamp(24px,5vw,32px)',
        'sec-d':'clamp(32px,6vw,48px)',
        'sec-x':'clamp(12px,3.5vw,32px)'
      },
      maxWidth: { container: '1200px' }
    },
  },
  plugins: [],
};
