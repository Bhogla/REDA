/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        solar: '#FF9644',
        'solar-light': '#FFCE99',
        'green-deep': '#1B5E20',
        'blue-trust': '#1E3A8A',
        'bg-warm': '#FFFDF1',
        'brand-primary': '#562F00',
        'brand-secondary': '#4B5563',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 16px rgba(86, 47, 0, 0.08)',
        'card-hover': '0 8px 32px rgba(86, 47, 0, 0.14)',
      },
    },
  },
  plugins: [],
};
