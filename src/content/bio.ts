// Texto en primera persona, versión directa: sin narrativa de "esto me ayudó/me permitió", solo el dato.
export const intro = [
  'Teatro, televisión, cine, publicidad, locución e imitaciones: frente a cámara, en escena y detrás del micrófono.',
];

export interface Block {
  id: string;
  title: string;
  paragraphs: string[];
}

// Orden pedido por Nelson: Teatro, Cine, Televisión, Ecuestre y, al final de todo, Voz y publicidad.
// (El bloque de Imitaciones se sacó del todo por pedido explícito.)
export const career: Block[] = [
  {
    id: 'teatro',
    title: 'Teatro',
    paragraphs: [
      'Trabajé bajo la dirección de <strong>Agustín Alezzo</strong>: <strong>Central Park West</strong> (Woody Allen) y <strong>La colección</strong> (Harold Pinter).',
      '<strong>El reñidero</strong>, de Sergio De Cecco, en el <strong>Teatro San Martín</strong>. <strong>Los cuentos de Hoffmann</strong> y <strong>Atila</strong> en el <strong>Teatro Colón</strong>.',
    ],
  },
  {
    id: 'cine',
    title: 'Cine y producciones audiovisuales',
    paragraphs: [
      '<strong>No te olvides de mí</strong>, dirigida por <strong>Fernanda Remondo</strong>, protagonizada por <strong>Leonardo Sbaraglia</strong>. <strong>Road Movie</strong>, dirigida por <strong>Dennis Smith</strong>.',
      'Cortometraje <strong>Como Susi</strong>, presentado en festivales. Cortometrajes para <strong>Telefe</strong>.',
      '<strong>Artigas</strong>: interpreté al personaje histórico <strong>José Rondeau</strong>.',
    ],
  },
  {
    id: 'television',
    title: 'Televisión',
    paragraphs: [
      '<strong>Videomatch</strong> en los años 90. <strong>El Paparazzi</strong> (Canal 9). <strong>Canal 13 de San Luis</strong>, varios personajes para un programa del Mundial 2013.',
      '<strong>Sin código</strong>, <strong>Hombres de honor</strong>, <strong>Collar de Esmeralda</strong>, <strong>Los Roldán</strong>, <strong>Casados con hijos</strong>, <strong>RRDT</strong>, entre otros.',
    ],
  },
  {
    id: 'ecuestre',
    title: 'Mundo ecuestre',
    paragraphs: [
      'Trabajé en el cuidado de caballos y jugué al <strong>polo</strong>. Excelente nivel de equitación y trabajo rural.',
      'También realicé humor para páginas de polo como <strong>Pololine</strong> y <strong>ESPN Polo</strong>, con imitaciones de jugadores como <strong>Adolfo Cambiaso</strong>.',
    ],
  },
  {
    id: 'voz',
    title: 'Actor de voz y publicidad',
    paragraphs: [
      'Actor de voz y locutor publicitario.',
      'Campañas para <strong>Ford</strong>, <strong>Amarok</strong>, <strong>Stella Artois</strong>, <strong>YPF</strong>, <strong>Vinos Los Intocables</strong> y <strong>Pago Fácil</strong>.',
    ],
  },
];
