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

export interface Photo {
  src: ImageMetadata;
  alt: string;
}

// TODO-CONTENIDO: alt descriptivo por foto (obra, programa, contexto). Placeholder hasta validar con Ignacio.
const ALT = 'Nelson Taffarel, actor — retrato';

export const heroPhoto: Photo = { src: hero, alt: ALT };

// Orden idéntico al del sitio original; 10-13 son fotos personales agregadas después, en mejor resolución.
export const gallery: Photo[] = [p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12, p13].map((src) => ({
  src,
  alt: ALT,
}));
