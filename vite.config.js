import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const pages = [
  'index', 'productos', 'pecanos', 'nueces', 'almendras', 'avellanas',
  'precios', 'biblioteca', 'eventos', 'contacto', 'aviso-legal', 'privacidad',
];

export default defineConfig({
  root: 'src',
  base: './',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      input: Object.fromEntries(pages.map((page) => [page, resolve(process.cwd(), 'src', `${page}.html`)])),
    },
  },
});
