# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro estático (decidido por el usuario en PLAN-REWORK-SEO.md §2), CSS propio con custom properties, JS vanilla solo para lightbox y facade de YouTube. Hosting en Netlify.

## Users

Portfolio personal de Nelson Taffarel (nombre artístico Nel Taffarel), actor, actor de voz e imitador argentino de Gualeguaychú. Audiencia confirmada por el usuario: directores de casting, productoras, agencias de representación y público general. Llegan desde Google (búsqueda por nombre), Instagram o un link compartido por WhatsApp, casi siempre en el celular, para confirmar quién es, ver su trabajo (reels, fotos) y saber cómo contactarlo.

## Product Purpose

Sitio oficial de Nelson Taffarel: la fuente canónica de la persona para buscadores y para casting. Éxito: aparecer primero al buscar "Nelson Taffarel", cargar casi al instante y dejar ver la trayectoria (TV, teatro, publicidad) y los reels sin fricción.

## Positioning

Es el sitio oficial de una sola persona, con 30 años de trayectoria en TV argentina, teatro con Agustín Alezzo y publicidad. Ningún otro sitio puede mostrar sus reels y su biografía en primera persona.

## Operating Context

Una sola página con anclas: Inicio, Biografía, Galería, Reels, Contacto. Los reels viven en YouTube; Instagram (@neltaffarel) y Vimeo son los canales de contacto.

## Capabilities and Constraints

- El texto vigente es el entregado y revisado por Nelson (reemplazó la bio original). Se copia verbatim en `src/content/bio.ts`; el crédito "Hecho por IGNACIO HAFFNER" se mantiene.
- El sitio debe encontrarse por "Nelson Taffarel" y por "Nel Taffarel" (h1 = Nelson; alias en title, JSON-LD y bio).
- Los 4 bloques de la biografía siempre visibles en el HTML (sin carrusel). Un solo `<h1>`.
- Sin toggle de tema: un único tema oscuro.
- Presupuesto: Lighthouse mobile ~100 en las 4 categorías, JS de cliente < 10 KB, primera carga < 500 KB.
- Dominio definitivo aún no existe: se parametriza con `SITE_URL`.
- Indefinido: mail o representante de contacto (solo con OK de Nelson).

## Brand Commitments

Dirección vinculante del plan §3: editorial cinematográfica ("créditos de cine"), fondo negro cálido, nombre en serif de alto contraste, acento único rojo telón, sin violeta, sin emojis, sin cards con sombra.

## Evidence on Hand

10 fotos (1 retrato B/N de 640×1133 y 9 fotos de 600×450 aprox., baja resolución) en `src/assets/photos/`; 5 reels de YouTube (REEL 4 y REEL AUDIO apuntan hoy al mismo video). No hay mail, agencia, ni fechas de reels: no inventar.

## Product Principles

1. El contenido manda: la forma cambia, el texto no.
2. Un nombre, una página: todo lo que Google y un director de casting necesitan está en el HTML inicial.
3. Rapidez como respeto: nada carga hasta que hace falta.
4. Sobriedad de sala de cine: acento escaso, sin adornos de template.

## Accessibility & Inclusion

Contraste AA mínimo en todo; navegación por teclado completa (skip link, lightbox con Esc/flechas/foco); `prefers-reduced-motion` respetado. Idioma es-AR.
