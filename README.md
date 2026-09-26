# Nelson Taffarel — sitio oficial

Portfolio de Nelson Taffarel (actor, comediante y locutor). Astro estático, CSS propio y JS mínimo (lightbox, facade de YouTube y menú mobile).

## Comandos

| Comando | Acción |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Genera el sitio en `dist/` |
| `npm run preview` | Sirve `dist/` |

## Dominio (`SITE_URL`)

El dominio se parametriza con la variable `SITE_URL` (por defecto `https://nelsontaffarel.netlify.app`). Alimenta `site` en `astro.config.mjs`, el canonical, Open Graph, JSON-LD, `sitemap-index.xml` y `robots.txt`. Para cambiar de dominio: definir `SITE_URL` en Netlify y redeployar.

## Estructura

- `src/content/` — textos, links, galería y reels (fuente única del contenido).
- `src/assets/photos/`, `src/assets/reels/` — imágenes optimizadas en build (avif/webp).
- `src/styles/tokens.css`, `src/styles/global.css` — sistema visual (ver `DESIGN.md`).
- `src/layouts/Base.astro` — `<head>`, SEO y JSON-LD.
- `PRODUCT.md`, `DESIGN.md`, `PLAN-REWORK-SEO.md` — contexto de producto, diseño y plan.

## Contenido pendiente

Buscar `TODO-CONTENIDO` en `src/` (meta description, alt de fotos, fechas y link de REEL AUDIO).
