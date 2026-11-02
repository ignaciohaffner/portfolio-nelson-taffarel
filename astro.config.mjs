import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio principal; SITE_URL (Netlify) permite cambiarlo sin tocar código.
const site = (process.env.SITE_URL ?? 'https://nelsontaffarel.com.ar').replace(/\/$/, '');

export default defineConfig({
  site,
  // hero-opciones es temporal y noindex: fuera del sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/hero-opciones') })],
  build: { inlineStylesheets: 'always' },
  vite: {
    define: { 'import.meta.env.SITE_URL': JSON.stringify(site) },
  },
});
