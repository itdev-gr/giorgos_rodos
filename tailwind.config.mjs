/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        theme: '#1CA8CB',
        title: '#113D48',
        body: '#6E7070',
        smoke: '#E9F6F9',
        'smoke-2': '#F3F4F6',
        yellow: '#FFB539',
        'th-border': '#E9EDF5',
        light: '#E1E4E5',
        gray: '#E1E4E5',
      },
      fontFamily: {
        title: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        style: ['Cormorant Garamond', 'serif'],
      },
      maxWidth: {
        container: '1320px',
      },
      spacing: {
        section: '120px',
        'section-mobile': '80px',
      },
      screens: {
        xs: '480px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
};
