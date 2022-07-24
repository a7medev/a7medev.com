module.exports = {
  darkMode: 'class',
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
      primary: {
        light: '#FAB316',
        dark: '#ef541a',
        darker: '#cf3d07',
      },
      accent: {
        light: '#37d2ff',
        dark: '#084c91',
      },
      text: {
        light: '#fff',
        dark: '#111',
      },
      background: {
        light: '#aed2fa',
        lighter: '#c4dffd',
        dark: '#04294F',
        darker: '#04213F',
      },
    },
  },
};
