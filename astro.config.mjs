import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ahmedaosm.github.io',
  base: '/Portfolio',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
