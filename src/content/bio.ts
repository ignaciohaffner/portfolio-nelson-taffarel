// Texto en primera persona, versión directa: sin narrativa de "esto me ayudó/me permitió", solo el dato.
export const intro = [
  'Soy <strong>Nel Taffarel</strong>. Mi nombre completo es <strong>Nelson Taffarel</strong> y soy actor, actor de voz e imitador.',
  'Trabajé en teatro, televisión, cine, publicidad, locución e imitaciones: frente a cámara, en escena y detrás del micrófono.',
];

export interface Block {
  id: string;
  title: string;
  paragraphs: string[];
}

// Orden pedido por Nelson: Teatro, Cine, Televisión, Imitaciones, Ecuestre y, al final de todo, Voz y publicidad.
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
      // TODO-CONTENIDO: Nelson mencionó un tercer programa que no se entendió bien en el audio
      // ("cociar de esmeralda" en la transcripción automática). Confirmar el nombre exacto antes
      // de agregarlo.
      '<strong>Sin código</strong> y <strong>Hombres de honor</strong>.',
    ],
  },
  {
    id: 'imitaciones',
    title: 'Imitaciones',
    paragraphs: [
      'Imito voces, gestos y personajes desde chico.',
      'Hoy es parte de mi trabajo en televisión, publicidad y actuación de voz.',
    ],
  },
  {
    id: 'ecuestre',
    title: 'Mundo ecuestre',
    paragraphs: [
      'Cuidado y manejo de caballos. Jugué al <strong>polo</strong> como deportista.',
      'Imitaciones de jugadores de polo y humor para <strong>Pololine</strong>, entre ellas <strong>Adolfo Cambiaso</strong>.',
      // TODO-CONTENIDO: Nelson mencionó que de ESPN Polo lo llamaron pero aclaró que nunca llegó
      // a trabajar ahí ("me llamaron pero nunca laburé"). No se agrega como crédito real hasta que
      // él confirme explícitamente que quiere incluirlo.
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
