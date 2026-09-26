import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// El dominio definitivo todavía no existe: se cambia con SITE_URL (Netlify) sin tocar código.
const site = (process.env.SITE_URL ?? 'https://nelsontaffarel.netlify.app').replace(/\/$/, '');

export default defineConfig({
  site,
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
  vite: {
    define: { 'import.meta.env.SITE_URL': JSON.stringify(site) },
  },
});
