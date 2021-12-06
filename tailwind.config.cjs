module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui'],
      serif: ['DM Serif Display', 'Georgia'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#FAB316',
      accent: '#00AEE0',
      text: '#fff',
      background: {
        DEFAULT: '#04213F',
        light: '#04294F',
      },
    },
  },
};
