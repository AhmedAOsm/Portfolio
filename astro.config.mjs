import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ahmedayman.work.gd',
  base: '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
