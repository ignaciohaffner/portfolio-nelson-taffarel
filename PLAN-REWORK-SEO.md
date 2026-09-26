# Plan de rework — nelsontaffarel (SEO + UI + performance)

> Documento de handoff para el agente que ejecuta. Leelo completo antes de tocar código.
> Fecha: 2026-09-26 · Autor del plan: Ignacio Haffner + Claude

---

## 0. Objetivo

1. **Que "Nelson Taffarel" aparezca #1 en Google** (y en la primera página para "Nelson Taffarel actor", "actor Casi Ángeles Taffarel", etc.).
2. **Que la página cargue casi al instante**: Lighthouse 100 en Performance, SEO, Accesibilidad y Best Practices en mobile.
3. **Rediseño visual completo** con dirección *editorial cinematográfica*.
4. **El contenido no se toca**: los textos de la biografía, los títulos, las fotos, los reels y los links quedan exactamente iguales. Cambia la forma, no lo que dice. Si hace falta texto nuevo (alt de fotos, meta description), se marca como `TODO-CONTENIDO` y lo valida Ignacio.

### Decisiones ya tomadas

| Tema | Decisión |
|---|---|
| Stack | **Astro** (salida estática), **en este mismo repo**, reemplazando Vite + React |
| Estética | Editorial cinematográfica (oscura, la foto manda, tipografía de afiche o créditos de cine) |
| Hosting | Netlify (el mismo sitio, `nelsontaffarel.netlify.app`) |
| Dominio | Se compra en NIC.ar (idealmente `nelsontaffarel.com.ar`). El código se prepara con el dominio parametrizado. |
| Tema claro/oscuro | **Se elimina el toggle.** Un solo tema oscuro cinematográfico: sin parpadeo al cargar, menos JS y una identidad más fuerte. |

---

## 1. Diagnóstico: por qué hoy no aparece

### 1.1 Críticos (explican que no rankee)

| # | Problema | Dónde | Impacto |
|---|---|---|---|
| C1 | **El HTML está vacío.** Es una SPA de React renderizada en el cliente, y lo que recibe el crawler es solo `<div id="root"></div>`. | `index.html`, `src/main.tsx` | Google tiene que ejecutar el JS para ver el contenido (cola de render lenta). Bing, WhatsApp, Instagram y otros buscadores no ven nada. |
| C2 | **La biografía muestra 1 de 4 bloques.** El carrusel solo pone en el DOM el item activo. | `src/components/Biography.tsx` | TV, teatro y publicidad (Casi Ángeles, Los Roldán, San Martín, Arcor…) **nunca se indexan**. Justo ahí están las keywords. |
| C3 | **No hay metadatos.** Falta `meta description`, Open Graph, Twitter card, canonical y schema.org. | `index.html` | No hay snippet controlado, la vista previa al compartir es fea y Google no entiende que es la web oficial de una persona. |
| C4 | **`lang="en"`** en una página que está en español. | `index.html` | Señal de idioma equivocada para Google Argentina. |
| C5 | **Subdominio `*.netlify.app`, sin Search Console, sin sitemap, sin robots.txt y sin backlinks.** | Infraestructura | Es probable que ni esté bien indexada. Hay que verificarlo con `site:nelsontaffarel.netlify.app`. |
| C6 | **Dos `<h1>`** (el logo del header y el hero). | `Header.tsx`, `Hero.tsx` | Jerarquía confusa. |

### 1.2 Performance

| # | Problema | Dónde |
|---|---|---|
| P1 | La foto del hero va como `background-image` CSS desde imgur: el navegador la descubre tarde y el LCP sale malo. Además no es indexable como imagen. | `Hero.tsx` |
| P2 | Las 9 fotos se cargan directo desde imgur: sin redimensionar, sin AVIF/WebP, sin `width/height` (genera CLS), sin `loading="lazy"` ni `srcset`. | `Gallery.tsx` |
| P3 | El iframe de YouTube carga completo apenas abre la página (unos 500 KB a 1 MB de JS de terceros). | `Reels.tsx` |
| P4 | Framer Motion, React y Radix se cargan enteros para animaciones que se resuelven con CSS. | todo `src/` |
| P5 | No hay favicon propio (queda `vite.svg`), ni fuentes definidas, ni headers de caché. | `public/`, Netlify |

### 1.3 Bugs y accesibilidad

- **La sección Galería no tiene `id="galeria"`**, así que el link del menú no funciona (`Gallery.tsx`).
- **"REEL 4" y "REEL AUDIO" apuntan al mismo video** (`V2-pi55aP7g`). → `TODO-CONTENIDO`: pedir el link correcto del reel de audio.
- Los dots del carrusel y los botones del menú mobile no tienen `aria-label`.
- El lightbox de la galería no cierra con Escape, no atrapa el foco y tiene `alt="Selected image"` en inglés.
- Los alt de las fotos son genéricos ("Nelson Taffarel 1…9").
- Los iconos de sección son emojis (🎭📺🎬🎥): se ven distintos en cada sistema y le quitan seriedad.
- Quedó un `"use client"` sin uso en `Hero.tsx` y un README de template.

### 1.4 UI

La estética actual es de template: violeta `purple-600` en todos los títulos, cards grises con sombra, todo centrado y carrusel. No transmite "actor con 30 años de trayectoria". Se toma **solo como referencia de qué evitar**.

---

## 2. Arquitectura nueva (Astro)

### 2.1 Migración en el mismo repo

```bash
git checkout -b feat/astro-rework
# Borrar lo de Vite/React:
#   src/App.tsx, src/main.tsx, src/components/**, src/lib/, src/assets/react.svg,
#   index.html, vite.config.ts, tsconfig.app.json, tsconfig.node.json,
#   components.json, eslint.config.js (reemplazar), public/vite.svg, postcss.config.js
npm create astro@latest -- --template minimal --no-install --skip-houston .   # o instalar a mano
npm i astro @astrojs/sitemap
npm i -D @fontsource-variable/<fuentes>   # ver §3.2
npm uninstall react react-dom framer-motion @radix-ui/react-accordion @radix-ui/react-slot @radix-ui/react-tabs lucide-react class-variance-authority clsx tailwind-merge tailwindcss-animate @vitejs/plugin-react-swc vite
```

- **Sin Tailwind y sin React.** CSS propio con custom properties, scopeado por componente de Astro. En un sitio de una sola página es más liviano y más fácil de mantener.
- **JS de cliente solo en dos islas chicas**, con `<script>` de Astro en vanilla TS: el lightbox de la galería y el facade de YouTube. Presupuesto: **< 10 KB de JS en total**.

### 2.2 Estructura

```
astro.config.mjs          # site: import.meta.env.SITE_URL ?? 'https://nelsontaffarel.netlify.app', integración sitemap
netlify.toml              # build + headers de caché
public/
  robots.txt
  favicon.svg, favicon.ico, apple-touch-icon.png
  og-nelson-taffarel.jpg  # 1200×630
src/
  content/
    site.ts               # nombre, roles, links (IG, Vimeo), crédito "Hecho por"
    bio.ts                # los 4 bloques de biografía, TEXTO VERBATIM
    gallery.ts            # lista de fotos + alt (TODO-CONTENIDO)
    reels.ts              # títulos + IDs de YouTube
  assets/photos/          # fotos descargadas de imgur, renombradas (ver §4.4)
  styles/tokens.css       # §3
  styles/global.css
  layouts/Base.astro      # <head> completo, SEO, JSON-LD
  components/
    SiteHeader.astro
    Hero.astro
    Biography.astro
    Gallery.astro         # + <script> del lightbox (<dialog>)
    Reels.astro           # + <script> del facade YouTube
    Contact.astro
    SiteFooter.astro
  pages/index.astro
```

### 2.3 Contenido: reglas

- Copiar **literalmente** los textos de `Biography.tsx`, incluidos los énfasis (`<strong>`, `<em>`, `font-semibold` → `<strong>`).
- Los 4 bloques quedan **siempre visibles en el HTML**, como secciones con `<h3>`. Nada de carruseles.
- Se mantienen el hero ("Nelson Taffarel", "Actor • Comediante • Locutor", CTA "Conóceme"), los títulos de sección, los links a Instagram y Vimeo y el crédito "Hecho por IGNACIO HAFFNER".

---

## 3. Dirección visual — "Créditos de cine"

> El agente que ejecuta tiene que correr `/impeccable` en modo **Experience** (portfolio), pasar por `init` (PRODUCT.md) y `new-work`, y guardar la dirección final en `DESIGN.md`. Lo que sigue es la dirección de partida; se puede refinar pero no cambiar de mundo.

### 3.1 Concepto

La página se lee como **la secuencia de títulos de una película y su press kit**: fondo casi negro cálido, fotos a sangre con grano sutil, el nombre enorme en una serif de alto contraste (tipo afiche) y los créditos (programas, obras, marcas) tipografiados como **lista de créditos**, con ritmo y sin cards.

### 3.2 Tokens iniciales

```css
:root {
  --ink:        #0f0e0c;  /* fondo, negro cálido de sala */
  --ink-2:      #181613;  /* superficies */
  --bone:       #ece5d8;  /* texto principal (contraste > 14:1) */
  --bone-dim:   #a39b8d;  /* texto secundario (verificar ≥ 4.5:1 sobre --ink) */
  --curtain:    #b3261e;  /* acento único: rojo telón. Uso escaso: CTA, hover, subrayados */
  --rule:       #2a2723;  /* líneas finas */

  --font-display: "Bodoni Moda Variable", "Didot", serif;   /* nombre, H2 */
  --font-text:    "Public Sans Variable", system-ui, sans-serif; /* cuerpo, UI */

  --step-hero: clamp(3.5rem, 12vw, 11rem);
  --step-h2:   clamp(2.25rem, 6vw, 4.5rem);
  --measure:   62ch;
}
```

- Fuentes **self-hosted** con `@fontsource-variable`, solo el subset `latin`, `font-display: swap` y **preload** de la fuente display.
- Cero violeta. Cero sombras de card. Cero emojis: si hace falta, se numeran las secciones en estilo "escena": `01 — Sobre mí`.

### 3.3 Secciones

| Sección | Diseño |
|---|---|
| **Header** | Fijo, transparente sobre el hero y con fondo `--ink` al hacer scroll (CSS `animation-timeline` con fallback de JS mínimo). El nombre va como texto, **no como `h1`**. Anclas reales `<a href="#biografia">` (sin JS) + `scroll-margin-top`. En mobile, menú `<dialog>` o `<details>`. |
| **Hero** | Foto a sangre como `<Picture>` de Astro con `fetchpriority="high"` y `loading="eager"`, y viñeta con gradiente. **Único `<h1>`: "Nelson Taffarel"** en display gigante, alineado abajo a la izquierda (no centrado). Roles abajo en versalitas con tracking. CTA "Conóceme" como link con subrayado rojo. |
| **Biografía** | Editorial a dos columnas en desktop: número y título de sección a la izquierda (sticky), texto a la derecha con `--measure`. En "Experiencia en TV" y "Publicidad", los nombres en `<em>`/`<strong>` se destacan con tipografía, **sin cambiar el párrafo**. Aparición suave con CSS (`@starting-style` / `animation-timeline: view()`), respetando `prefers-reduced-motion`. |
| **Galería** | Grilla editorial asimétrica (CSS grid con spans variados, **no masonry por JS**) y aspect-ratios reales. Click → `<dialog>` lightbox con navegación por flechas y teclado, Esc para cerrar y foco atrapado. |
| **Reels** | Un video grande + lista de reels como "tracklist" numerada. **Facade**: se muestra el thumbnail `i.ytimg.com/vi/<id>/maxresdefault.jpg` con un botón play, y el iframe (`youtube-nocookie.com`) se inyecta recién al hacer click. |
| **Contacto** | Cierre tipo "fin de créditos": links grandes en tipografía display a Instagram y Vimeo. Footer con "Hecho por IGNACIO HAFFNER". |

### 3.4 Motion

Todo en CSS: fade/translate corto al entrar en viewport, zoom lento del hero (Ken Burns, 20 s) y hover de fotos con un leve cambio de exposición. Todo desactivado con `prefers-reduced-motion: reduce`. **Sin librería de animación.**

---

## 4. SEO on-page (checklist de implementación)

### 4.1 `<head>` en `Base.astro`

```html
<html lang="es-AR">
<title>Nelson Taffarel — Actor, comediante y locutor | Sitio oficial</title>
<meta name="description" content="TODO-CONTENIDO (≈150 caracteres). Propuesta: Sitio oficial de Nelson Taffarel, actor argentino formado con Agustín Alezzo. TV (Casi Ángeles, Los Roldán), teatro, publicidad y reels.">
<link rel="canonical" href="{SITE_URL}/">
<meta name="robots" content="index, follow, max-image-preview:large">
<!-- Open Graph -->
<meta property="og:type" content="profile">
<meta property="og:locale" content="es_AR">
<meta property="og:title" content="Nelson Taffarel — Actor, comediante y locutor">
<meta property="og:description" content="…">
<meta property="og:url" content="{SITE_URL}/">
<meta property="og:image" content="{SITE_URL}/og-nelson-taffarel.jpg">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="profile:first_name" content="Nelson"><meta property="profile:last_name" content="Taffarel">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0f0e0c">
<link rel="icon" href="/favicon.svg" type="image/svg+xml"> + ico + apple-touch-icon
<link rel="sitemap" href="/sitemap-index.xml">
```

> La meta description es texto nuevo: `TODO-CONTENIDO`, validar con Ignacio.

### 4.2 Datos estructurados (JSON-LD)

- **`Person`**: `name`, `jobTitle` (["Actor", "Comediante", "Locutor"]), `nationality: AR`, `image`, `url`, **`sameAs`** (Instagram, Vimeo y, cuando existan, IMDb, Wikidata, Alternativa Teatral y YouTube), `alumniOf` / `knowsAbout` solo con datos que ya están en la bio (Agustín Alezzo, Ana Frenkel).
- **`WebSite`** con `name` y `url`.
- **`ProfilePage`** con `mainEntity` → Person. Es el formato que Google recomienda para páginas de perfil.
- **`VideoObject`** por cada reel (`name`, `thumbnailUrl`, `embedUrl`, `uploadDate` → `TODO-CONTENIDO`: sacarla de YouTube).
- Validar en <https://search.google.com/test/rich-results> y <https://validator.schema.org>.

### 4.3 Semántica

- Un solo `<h1>`. `<h2>` por sección (Biografía, Galería, Reels, Contacto) y `<h3>` por bloque de la bio.
- `<header>`, `<nav aria-label="Principal">`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- Links externos con `rel="noopener"` (sin `noreferrer` en IG/Vimeo, así esos sitios ven de dónde viene el tráfico).
- Link "Saltar al contenido".

### 4.4 Imágenes

1. **Bajar las 10 imágenes de imgur** (hero + 9 de galería) a `src/assets/photos/` con nombres descriptivos: `nelson-taffarel-actor-hero.jpg`, `nelson-taffarel-01.jpg`, … Si hay originales en mejor calidad, pedírselos a Ignacio.
2. Usar `<Picture>` de Astro con `formats={['avif','webp']}`, `widths` y `sizes` correctos. Astro pone `width/height` solo.
3. Galería con `loading="lazy"` y `decoding="async"`. El hero no.
4. **Alt descriptivos** → `TODO-CONTENIDO`: por cada foto, qué muestra (obra, programa, contexto). Mientras tanto, placeholder `"Nelson Taffarel, actor — retrato"`.
5. Generar `og-nelson-taffarel.jpg` 1200×630 a partir del hero, con el nombre sobreimpreso.

### 4.5 Rastreo

- `@astrojs/sitemap` → `/sitemap-index.xml`.
- `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://<dominio>/sitemap-index.xml
  ```
- **Todo parametrizado** con `site` en `astro.config.mjs` + variable `SITE_URL` en Netlify, así el cambio de dominio no requiere tocar código.

---

## 5. Performance: presupuesto y criterios de aceptación

| Métrica (mobile, Lighthouse / PageSpeed) | Objetivo |
|---|---|
| Performance / SEO / A11y / Best Practices | **100 / 100 / 100 / 100** (mínimo 95 en Performance) |
| LCP | < 1.8 s |
| CLS | < 0.02 |
| INP | < 100 ms |
| JS total enviado | < 10 KB (sin contar YouTube tras el click) |
| Peso total primera carga | < 500 KB |

`netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[headers]]
  for = "/_astro/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## 6. Fases de ejecución (para el agente)

Cada fase termina con `npm run build` limpio y un commit.

### Fase 1 — Base Astro (sin diseño)
- [x] Rama `feat/astro-rework`. Borrar Vite/React y crear Astro según §2.1.
- [x] Pasar el contenido a `src/content/*.ts` **verbatim** (hacer diff contra los `.tsx` viejos antes de borrarlos).
- [x] `Base.astro` con todo el `<head>` de §4.1, JSON-LD de §4.2, sitemap y robots.
- [x] HTML semántico sin estilos, con todas las secciones y anclas funcionando.
- **Aceptación:** `curl` del `dist/index.html` muestra **todo el texto de la bio**, un solo h1 y el JSON-LD. `npm run build` ok.

### Fase 2 — Imágenes y medios
- [x] Descargar las fotos de imgur a `src/assets/photos/` y usar `<Picture>`.
- [x] Facade de YouTube en Reels.
- [x] Generar OG image y favicons.
- **Aceptación:** ninguna request a imgur. YouTube no carga nada hasta el click.

### Fase 3 — Diseño (Impeccable)
- [ ] `/impeccable init` → PRODUCT.md (portfolio de actor, audiencia: directores de casting, productoras, agencias, público).
- [ ] `/impeccable` new-work con la dirección de §3 → DESIGN.md + `tokens.css`.
- [ ] Implementar las secciones de §3.3 y el motion de §3.4.
- [ ] Correr `node ~/.claude/skills/impeccable/scripts/detect.mjs --json src/` una vez y corregir.
- **Aceptación:** screenshots a 375 px y 1440 px, sin scroll horizontal, contraste AA en todo.

### Fase 4 — Pulido y a11y
- [ ] `/impeccable audit` y `/impeccable polish`.
- [ ] Lightbox accesible (Esc, flechas, foco), aria-labels y skip link.
- [ ] `prefers-reduced-motion` verificado.
- **Aceptación:** Lighthouse mobile dentro del presupuesto de §5. Rich Results Test sin errores.

### Fase 5 — Deploy
- [ ] `netlify.toml`, variable `SITE_URL` y deploy preview de la rama.
- [ ] Revisar el preview en un celular real y compartir el link por WhatsApp para verificar la tarjeta OG.
- [ ] Merge a `main`.
- [ ] Reemplazar el README de template por uno real.

---

## 7. SEO off-page: lo que **no** es código (y pesa igual o más)

Esto lo hace Ignacio o Nelson. Sin estos pasos, el sitio puede quedar técnicamente perfecto y aun así no aparecer.

### 7.1 Apenas se deploya
1. **Google Search Console**: dar de alta la propiedad, verificar, enviar `sitemap-index.xml` y pedir indexación de la home (Inspección de URL → Solicitar indexación).
2. **Bing Webmaster Tools**: importar desde Search Console (también alimenta a DuckDuckGo y ChatGPT search).
3. Revisar `site:nelsontaffarel.netlify.app` para ver qué hay indexado hoy.

### 7.2 Dominio propio (NIC.ar)
1. Registrar `nelsontaffarel.com.ar` (y si se puede, también `.com` para redirigir).
2. En Netlify: Domain management → agregar el dominio como **primary**. Netlify redirige automáticamente `*.netlify.app` → dominio con **301**, y emite HTTPS con Let's Encrypt.
3. Cambiar `SITE_URL` en Netlify, redeployar, agregar la **nueva propiedad** en Search Console y usar "Cambio de dirección" si la vieja estaba indexada.

### 7.3 Autoridad y entidad (lo que más mueve la aguja para una búsqueda de nombre)
Google tiene que entender que **este sitio es la fuente oficial de la persona "Nelson Taffarel"**. Para eso, que todos sus perfiles apunten acá y viceversa (`sameAs`):

- [ ] **Link en la bio de Instagram** (`@neltaffarel`) al dominio nuevo. Es el backlink más importante.
- [ ] Link en la descripción de **Vimeo** y del canal de **YouTube** donde están los reels.
- [ ] **IMDb**: crear o reclamar el perfil, cargar créditos (Casi Ángeles, Los Roldán, Alma Pirata…) y el sitio oficial.
- [ ] **Wikidata**: crear el item de Nelson Taffarel (actor argentino) con la propiedad "sitio web oficial" (P856) y los IDs de IMDb/Instagram. Es la vía más directa para un **Knowledge Panel**.
- [ ] **Alternativa Teatral** y **Cinenacional.com**: perfil con link.
- [ ] Agencia de representación o casting, si tiene: pedir que linkeen al sitio.
- [ ] Portfolio de Ignacio: link a "nelsontaffarel.com.ar" como proyecto.
- [ ] Cuando aparezca el Knowledge Panel, **reclamarlo** ("¿Sos Nelson Taffarel?") desde Google.

### 7.4 Keywords objetivo

| Intención | Keyword | Dónde se cubre |
|---|---|---|
| Navegacional (principal) | Nelson Taffarel | title, h1, JSON-LD, dominio |
| Navegacional | Nelson Taffarel actor | title, description |
| Asociada | Taffarel Casi Ángeles / Los Roldán / Alma Pirata | bio TV (ya está en el contenido, ahora visible) |
| Asociada | actor formado con Agustín Alezzo | bio "Sobre mí" |
| Profesional | reel Nelson Taffarel / locutor | sección Reels, VideoObject |

> Expectativa realista: para la búsqueda del nombre exacto, con esto debería estar **en la primera página en 2 a 6 semanas** después de Search Console + el link de Instagram. El Knowledge Panel tarda más (meses) y depende de Wikidata/IMDb.

---

## 8. Pendientes de contenido (`TODO-CONTENIDO`)

Nada de esto bloquea las fases 1 a 4. Se completa antes del merge.

1. Meta description final (§4.1).
2. Alt descriptivo de cada una de las 10 fotos (§4.4).
3. **Link correcto de "REEL AUDIO"** (hoy repite el de REEL 4).
4. Fotos originales en alta calidad, si existen.
5. Fecha de subida de cada reel (para VideoObject).
6. ¿Hay mail o representante para contacto? Hoy solo hay IG y Vimeo. Un mail visible suma para casting y para SEO local. **Solo si Nelson quiere; no se agrega sin su OK.**
7. Dominio definitivo.

---

## 9. Riesgos

| Riesgo | Mitigación |
|---|---|
| Se pierde contenido en la migración | Diff textual de los `.tsx` viejos contra `src/content/*.ts` en la Fase 1 antes de borrar |
| imgur borra o bloquea las fotos | Se descargan al repo en la Fase 2 (esto además es mejora de performance) |
| Cambio de dominio hace perder lo indexado | 301 automático de Netlify + "Cambio de dirección" en Search Console |
| El diseño "cinematográfico" baja el contraste | Tokens validados AA. Nada de texto gris sobre foto sin viñeta |
