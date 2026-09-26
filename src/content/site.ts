export const SITE_URL = (import.meta.env.SITE_URL ?? 'https://nelsontaffarel.netlify.app').replace(/\/$/, '');

export const site = {
  name: 'Nelson Taffarel',
  roles: ['Actor', 'Comediante', 'Locutor'],
  rolesLine: 'Actor • Comediante • Locutor',
  cta: 'Conóceme',
  // TODO-CONTENIDO: validar con Nelson (≈150 caracteres)
  description:
    'Sitio oficial de Nelson Taffarel, actor argentino formado con Agustín Alezzo. TV (Casi Ángeles, Los Roldán), teatro, publicidad y reels.',
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
    { title: 'Galería', href: '#galeria' },
    { title: 'Reels', href: '#reels' },
    { title: 'Contacto', href: '#contacto' },
  ],
  sections: {
    bio: 'Biografía',
    gallery: 'Galería',
    reels: 'Reels',
    contact: 'Contacto',
  },
} as const;
