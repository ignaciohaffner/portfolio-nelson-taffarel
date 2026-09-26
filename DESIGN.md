# Design — "Créditos de cine"

Dirección pinneada por `PLAN-REWORK-SEO.md` §3 y construida en `src/styles/tokens.css`. Tema oscuro único, sin toggle.

## Mundo
La página se lee como la secuencia de títulos de una película y su press kit: negro cálido de sala, retrato B/N, nombre gigante en serif de alto contraste y la trayectoria tipografiada como lista de créditos, con filetes finos. Sin cards, sin sombras, sin emojis, sin violeta.

## Color
| Token | Valor | Uso | Contraste sobre `--ink` |
|---|---|---|---|
| `--ink` | #0f0e0c | fondo | — |
| `--ink-2` | #181613 | superficies (placeholders de foto) | — |
| `--bone` | #ece5d8 | texto principal | 15.4:1 |
| `--bone-dim` | #a39b8d | texto secundario | 7.0:1 |
| `--curtain` | #b3261e | solo relleno decorativo (botón play, punto activo) | 2.95:1 (no se usa para texto) |
| `--curtain-lit` | #e8524a | subrayado CTA, foco, hover de texto | 5.3:1 |
| `--rule` | #2a2723 | filetes | decorativo |

Estrategia: Restrained. Un único acento (rojo telón), escaso.

## Tipografía
- Display: **Bodoni Moda Variable** (eje `opsz`), self-hosted, subset latin, preload. Nombre, H2, H3, créditos (`<em>` de la bio en display, sin cursiva), links de contacto.
- Texto/UI: **Public Sans Variable**, self-hosted, subset latin. Versalitas con tracking 0.2–0.32em para roles, menú y CTA.
- Escala: hero `clamp(3.5rem,12vw,11rem)` (excepción pinneada por el plan), H2 `clamp(2.25rem,6vw,4.5rem)`, H3 `clamp(1.5rem,2.6vw,2.125rem)`, cuerpo `clamp(1.0625rem,…,1.25rem)`, medida 62ch.

## Composición
- **Header:** fijo, transparente sobre el hero y `--ink` al scrollear (`animation-timeline: scroll()`); menú `<details>` en mobile, links en línea desde 900 px.
- **Hero:** retrato a sangre en mobile; a la derecha (46vw, máx. 640 px, resolución de la fuente) en desktop. Nombre abajo-izquierda, segunda línea indentada. CTA como link con subrayado rojo.
- **Biografía:** dos columnas (título sticky + 4 bloques con filetes), siempre visibles.
- **Galería:** grilla de 12 columnas asimétrica con aspect-ratio reales; click abre `<dialog>` (Esc, flechas, foco nativo).
- **Reels:** facade 16:9 con play rojo + tracklist numerada (`counter`).
- **Contacto:** cierre tipo fin de créditos, links display gigantes; footer con el crédito.

## Motion
Solo CSS y solo con `prefers-reduced-motion: no-preference`: deriva lenta del retrato (20 s), entrada del nombre, reveal de bloques de bio (fade + translate, `view()`), reveal de fotos (clip-path), hover de exposición en fotos.
