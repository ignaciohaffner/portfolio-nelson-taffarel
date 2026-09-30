import type { ImageMetadata } from 'astro';
import p01 from '../assets/photos/nelson-taffarel-01.jpg';
import p02 from '../assets/photos/nelson-taffarel-02.jpg';
import p03 from '../assets/photos/nelson-taffarel-03.jpg';
import p04 from '../assets/photos/nelson-taffarel-04.jpg';
import p05 from '../assets/photos/nelson-taffarel-05.png';
import p06 from '../assets/photos/nelson-taffarel-06.jpg';
import p07 from '../assets/photos/nelson-taffarel-07.jpg';
import p08 from '../assets/photos/nelson-taffarel-08.jpg';
import p09 from '../assets/photos/nelson-taffarel-09.png';
import p10 from '../assets/photos/nelson-taffarel-10.jpg';
import p11 from '../assets/photos/nelson-taffarel-11.jpg';
import p12 from '../assets/photos/nelson-taffarel-12.jpg';
import p13 from '../assets/photos/nelson-taffarel-13.jpg';
import hero from '../assets/photos/nelson-taffarel-actor-hero.jpg';

// Tanda agregada el 29/09: fotos enviadas por Nelson, ordenadas profesional → normal → personajes.
// TODO-CONTENIDO: la clasificación y el alt de cada una son una lectura de Ignacio a partir de la
// imagen; confirmar con Nelson qué obra/programa/fecha es cada una antes de darlas por definitivas.
import n14 from '../assets/photos/nelson-taffarel-14-profesional-artigas-uniforme.png';
import n15 from '../assets/photos/nelson-taffarel-15-profesional-retrato-bn.png';
import n16 from '../assets/photos/nelson-taffarel-16-profesional-artigas-sentado.png';
import n17 from '../assets/photos/nelson-taffarel-17-profesional-artigas-sepia.png';
import n18 from '../assets/photos/nelson-taffarel-18-normal-rugby.png';
import n19 from '../assets/photos/nelson-taffarel-19-normal-golf.png';
import n20 from '../assets/photos/nelson-taffarel-20-normal-yoga.png';
import n21 from '../assets/photos/nelson-taffarel-21-normal-polo-caballo.png';
import n22 from '../assets/photos/nelson-taffarel-22-normal-caballos.png';
import n23 from '../assets/photos/nelson-taffarel-23-personaje-tv-certamen.png';
import n24 from '../assets/photos/nelson-taffarel-24-personaje-imitacion-cambiaso-1.png';
import n25 from '../assets/photos/nelson-taffarel-25-personaje-imitacion-cambiaso-2.png';
import n26 from '../assets/photos/nelson-taffarel-26-personaje-carlo-mingo.png';
import n27 from '../assets/photos/nelson-taffarel-27-personaje-tv-drama.png';
import n28 from '../assets/photos/nelson-taffarel-28-personaje-paparazzi.png';
import n29 from '../assets/photos/nelson-taffarel-29-personaje-ateme.png';
import n30 from '../assets/photos/nelson-taffarel-30-personaje-equipo-de-cuarta.png';
import n31 from '../assets/photos/nelson-taffarel-31-personaje-sketch-laser.png';
import n32 from '../assets/photos/nelson-taffarel-32-personaje-sketch-gorro.png';
import n33 from '../assets/photos/nelson-taffarel-33-personaje-sketch-escritorio.png';
import n34 from '../assets/photos/nelson-taffarel-34-personaje-jinete.png';
import n35 from '../assets/photos/nelson-taffarel-35-personaje-publicidad-personal-pay.png';
import n36 from '../assets/photos/nelson-taffarel-36-personaje-publicidad-pizzeria.png';
import n37 from '../assets/photos/nelson-taffarel-37-personaje-publicidad-cocacola.png';
import n38 from '../assets/photos/nelson-taffarel-38-personaje-rodaje-bar.png';
import n39 from '../assets/photos/nelson-taffarel-39-personaje-sketch-trajes.png';
import n40 from '../assets/photos/nelson-taffarel-40-personaje-rodaje-colectivo.png';
import n41 from '../assets/photos/nelson-taffarel-41-personaje-teatro.png';
import n42 from '../assets/photos/nelson-taffarel-42-personaje-sketch-verde.png';
import n43 from '../assets/photos/nelson-taffarel-43-personaje-rodaje-monitor.png';

export interface Photo {
  src: ImageMetadata;
  alt: string;
}

// TODO-CONTENIDO: alt descriptivo por foto (obra, programa, contexto). Placeholder hasta validar con Ignacio.
const ALT = 'Nelson Taffarel, actor — retrato';

export const heroPhoto: Photo = { src: hero, alt: ALT };

// Fotos originales del sitio (imgur, fase 1) — son capturas de TV, van en "personajes".
const originalPersonajes: Photo[] = [p01, p02, p03, p04, p05, p06, p07, p08, p09].map((src) => ({
  src,
  alt: ALT,
}));

// Las 4 fotos en mejor resolución agregadas más adelante: 3 son retratos profesionales, 1 es personal.
const p10Normal: Photo = { src: p10, alt: ALT };
const p11a12a13Profesional: Photo[] = [p11, p12, p13].map((src) => ({ src, alt: ALT }));

// Profesional: retratos y fotogramas de producción, con buena calidad de imagen.
const profesional: Photo[] = [
  ...p11a12a13Profesional,
  { src: n14, alt: 'Nelson Taffarel caracterizado como José Artigas, con uniforme militar de época' },
  { src: n15, alt: 'Retrato de Nelson Taffarel en blanco y negro' },
  { src: n16, alt: 'Nelson Taffarel caracterizado como José Artigas, sentado en un despacho de época' },
  { src: n17, alt: 'Nelson Taffarel caracterizado como José Artigas, foto en tono sepia' },
];

// Normal: fotos personales y deportivas, sin personaje.
const normal: Photo[] = [
  p10Normal,
  { src: n18, alt: 'Nelson Taffarel jugando al rugby' },
  { src: n19, alt: 'Nelson Taffarel jugando al golf' },
  { src: n20, alt: 'Nelson Taffarel practicando yoga' },
  { src: n21, alt: 'Nelson Taffarel jugando al polo a caballo' },
  { src: n22, alt: 'Nelson Taffarel a caballo, junto a otros caballos' },
];

// Personajes: televisión, teatro, publicidad, imitaciones y rodajes.
const personajes: Photo[] = [
  ...originalPersonajes,
  { src: n23, alt: 'Nelson Taffarel en un certamen de televisión' },
  { src: n24, alt: 'Nelson Taffarel imitando a Adolfo Cambiaso a caballo, con casaca de polo' },
  { src: n25, alt: 'Nelson Taffarel imitando a Adolfo Cambiaso a caballo, primer plano' },
  { src: n26, alt: 'Nelson Taffarel en el sketch de televisión Carlo y Mingo' },
  { src: n27, alt: 'Nelson Taffarel en una escena dramática de televisión' },
  { src: n28, alt: 'Nelson Taffarel en su personaje de El Paparazzi, rodeado de cámaras' },
  { src: n29, alt: 'Nelson Taffarel conduciendo el programa Ateme' },
  { src: n30, alt: 'Nelson Taffarel en el programa El equipo de cuarta' },
  { src: n31, alt: 'Nelson Taffarel en un sketch de televisión, sentado en un sillón' },
  { src: n32, alt: 'Nelson Taffarel caracterizado con gorro para un sketch de televisión' },
  { src: n33, alt: 'Nelson Taffarel en un sketch de televisión, sentado en un escritorio' },
  { src: n34, alt: 'Nelson Taffarel a caballo como jinete, en una escena de producción' },
  { src: n35, alt: 'Nelson Taffarel en una publicidad de Personal Pay' },
  { src: n36, alt: 'Nelson Taffarel en una publicidad ambientada en una pizzería' },
  { src: n37, alt: 'Nelson Taffarel en una publicidad gráfica de Coca-Cola' },
  { src: n38, alt: 'Nelson Taffarel en el rodaje de una escena ambientada en un bar' },
  { src: n39, alt: 'Nelson Taffarel caracterizado para un sketch, con trajes de protección' },
  { src: n40, alt: 'Nelson Taffarel caracterizado de época, en el rodaje de una escena en un colectivo' },
  { src: n41, alt: 'Nelson Taffarel en una obra de teatro' },
  { src: n42, alt: 'Nelson Taffarel caracterizado para un sketch, con maquillaje frente a pantalla verde' },
  { src: n43, alt: 'Nelson Taffarel en un monitor de cámara durante un rodaje' },
];

// Orden pedido por Nelson: toda la galería (fotos originales + tanda del 29/09) en un solo
// orden profesional → normal → personajes, no por tanda de agregado.
export const gallery: Photo[] = [...profesional, ...normal, ...personajes];
