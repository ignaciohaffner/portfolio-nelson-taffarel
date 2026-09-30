export const SITE_URL = (import.meta.env.SITE_URL ?? 'https://nelsontaffarel.netlify.app').replace(/\/$/, '');

// Interruptores de los "chiches": en false desaparecen sin tocar nada más.
export const features = {
  backToTop: true, // botón claqueta para volver arriba
  sideNav: true, // índice lateral con la sección activa (desktop)
} as const;

export const site = {
  name: 'Nelson Taffarel',
  roles: ['Actor dramático', 'Actor de voz', 'Imitador'],
  alternateName: 'Nel Taffarel',
  rolesLine: 'Actor dramático · Actor de voz · Imitador',
  location: 'Gualeguaychú, Entre Ríos', // solo para datos estructurados (JSON-LD); ya no se muestra en pantalla
  mail: 'neltaffarel@gmail.com', // confirmado por Nelson
  tagline: 'Actor, actor de voz e imitador con trayectoria en teatro, cine y televisión.', // sin uso en el sitio; queda para /hero-opciones
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
  contactText:
    'Para propuestas de actuación, teatro, televisión, cine, publicidad, locuciones, castings, eventos y proyectos audiovisuales:',
} as const;
