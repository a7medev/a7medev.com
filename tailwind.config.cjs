module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    variants: {
      extend: {
        scale: ['active'],
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#FAB316',
      accent: '#37d2ff',
      text: '#fff',
      background: {
        DEFAULT: '#04213F',
        light: '#04294F',
      },
    },
  },
};
