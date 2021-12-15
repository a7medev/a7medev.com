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
      sans: ['Readex Pro', 'system-ui'],
      serif: ['DM Serif Display', 'Georgia'],
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
