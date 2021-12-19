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
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
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
