export const SITE_URL = (import.meta.env.SITE_URL ?? 'https://nelsontaffarel.netlify.app').replace(/\/$/, '');

// Interruptores de los "chiches": en false desaparecen sin tocar nada más.
export const features = {
  filmLook: true, // grano de película + barras de cine en el hero
  beforeAfter: true, // galería: personaje → Nelson (hover / botón en el lightbox)
} as const;

export const site = {
  name: 'Nelson Taffarel',
  roles: ['Actor', 'Actor de voz', 'Imitador'],
  alternateName: 'Nel Taffarel',
  rolesLine: 'Actor · Actor de voz · Imitador',
  location: 'Gualeguaychú, Entre Ríos',
  tagline: 'Actor, actor de voz e imitador con trayectoria en teatro, cine y televisión.',
  cta: 'Conóceme',
  description:
    'Sitio oficial de Nelson Taffarel (Nel Taffarel), actor argentino de Gualeguaychú. Trayectoria en teatro, televisión, cine, publicidad, locución e imitaciones.',
  shortBio:
    'Nel Taffarel, nombre artístico de Nelson Taffarel, es un actor, actor de voz e imitador argentino de Gualeguaychú, Entre Ríos. Su trayectoria abarca teatro, televisión, cine, publicidad y locución. Trabajó bajo la dirección de Agustín Alezzo, participó en producciones del Teatro San Martín y el Teatro Colón y desarrolló trabajos en televisión, cine y campañas publicitarias.',
  links: {
    instagram: 'https://www.instagram.com/neltaffarel/',
    vimeo: 'https://vimeo.com/nelsontaffarel',
  },
  credit: {
    prefix: 'Hecho por',
    name: 'IGNACIO HAFFNER',
    url: 'http://www.linkedin.com/in/ignacio-haffner-3965b017a/',
  },
  nav: [
    { title: 'Inicio', href: '#home' },
    { title: 'Biografía', href: '#biografia' },
    { title: 'Trayectoria', href: '#trayectoria' },
    { title: 'Videos', href: '#videos' },
    { title: 'Galería', href: '#galeria' },
    { title: 'Contacto', href: '#contacto' },
  ],
  sections: {
    bio: 'Biografía',
    career: 'Trayectoria',
    reels: 'Videos',
    gallery: 'Galería',
    contact: 'Contacto',
  },
  videosText:
    'Una selección de trabajos, imitaciones, participaciones televisivas, material audiovisual y distintos momentos de la trayectoria artística de <strong>Nel Taffarel</strong>.',
  galleryText:
    'Imágenes de trabajos actorales, teatro, televisión, cine, publicidad y diferentes momentos de la trayectoria de Nel Taffarel.',
  contactText:
    'Para propuestas de actuación, teatro, televisión, cine, publicidad, locuciones, castings, eventos y proyectos audiovisuales:',
  footerText:
    'Soy Nel Taffarel, actor, actor de voz e imitador de Gualeguaychú, Entre Ríos. Mi recorrido incluye teatro, cine, televisión, publicidad, locución e imitaciones.',
} as const;
