// Texto en primera persona entregado por Nelson (revisado por él, con la ronda de correcciones
// del 28/09/2026: menos repetición de Gualeguaychú/nombre, TV ampliada, orden de bloques y ecuestre).
export const intro = [
  'Soy <strong>Nel Taffarel</strong>. Mi nombre completo es <strong>Nelson Taffarel</strong> y soy actor, actor de voz e imitador.',
  'A lo largo de mi recorrido trabajé en teatro, televisión, cine, publicidad, locución e imitaciones, desarrollando distintos registros de interpretación frente a cámara, sobre el escenario y detrás del micrófono.',
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
      'El teatro ocupa un lugar muy importante en mi formación y en mi desarrollo como actor.',
      'Tuve la oportunidad de trabajar bajo la dirección de <strong>Agustín Alezzo</strong>, participando en propuestas sobre textos de autores como <strong>Woody Allen</strong> y <strong>Harold Pinter</strong>, entre ellas <strong>Central Park West</strong> y <strong>La colección</strong>.',
      'También formé parte de <strong>El reñidero</strong>, de Sergio De Cecco, en el ámbito del <strong>Teatro San Martín</strong>, y participé en producciones del <strong>Teatro Colón</strong> como <strong>Los cuentos de Hoffmann</strong> y <strong>Atila</strong>.',
    ],
  },
  {
    id: 'cine',
    title: 'Cine y producciones audiovisuales',
    paragraphs: [
      'Mi recorrido audiovisual incluye participaciones en cine, cortometrajes y producciones para televisión.',
      'Participé en <strong>No te olvides de mí</strong>, dirigida por <strong>Fernanda Remondo</strong> y protagonizada por <strong>Leonardo Sbaraglia</strong>, y en <strong>Road Movie</strong>, dirigida por <strong>Dennis Smith</strong>.',
      'También formé parte del cortometraje <strong>Como Susi</strong>, presentado en distintos festivales, y participé en cortometrajes realizados para <strong>Telefe</strong>.',
      'En la producción <strong>Artigas</strong> interpreté al personaje histórico <strong>José Rondeau</strong>, una experiencia muy valiosa dentro de mi carrera.',
    ],
  },
  {
    id: 'television',
    title: 'Televisión',
    paragraphs: [
      'Mi experiencia en televisión incluye participaciones en <strong>Videomatch</strong> en los años 90, <strong>El Paparazzi</strong> (Canal 9) y <strong>Canal 13 de San Luis</strong>, haciendo varios personajes para un programa del Mundial 2013.',
      // TODO-CONTENIDO: Nelson mencionó un tercer programa que no se entendió bien en el audio
      // ("cociar de esmeralda" en la transcripción automática). Confirmar el nombre exacto antes
      // de agregarlo.
      'También participé en <strong>Sin código</strong> y <strong>Hombres de honor</strong>.',
    ],
  },
  {
    id: 'imitaciones',
    title: 'Imitaciones',
    paragraphs: [
      'Las imitaciones forman parte de mis comienzos y siguen siendo una de las facetas más personales de mi trabajo.',
      'A través de la observación de voces, gestos y personajes, fui desarrollando una forma de interpretación vinculada al humor, la caracterización y la creación de personajes.',
      'Con el tiempo, esta experiencia también se integró a mi trabajo en televisión, publicidad y actuación de voz.',
    ],
  },
  {
    id: 'ecuestre',
    title: 'Mundo ecuestre',
    paragraphs: [
      'Fuera del ámbito artístico, también desarrollé una relación muy cercana con el mundo de los caballos: cuento con experiencia en <strong>cuidado y manejo de caballos</strong> y también practiqué <strong>polo</strong> como deportista.',
      'Desde un lugar más artístico, además, desarrollé imitaciones de jugadores de polo y humor para <strong>Pololine</strong>, entre ellas una imitación de <strong>Adolfo Cambiaso</strong>.',
      // TODO-CONTENIDO: Nelson mencionó que de ESPN Polo lo llamaron pero aclaró que nunca llegó
      // a trabajar ahí ("me llamaron pero nunca laburé"). No se agrega como crédito real hasta que
      // él confirme explícitamente que quiere incluirlo.
    ],
  },
  {
    id: 'voz',
    title: 'Actor de voz y publicidad',
    paragraphs: [
      'Además de mi trabajo como actor, desarrollé una faceta profesional como <strong>actor de voz y locutor publicitario</strong>.',
      'Participé en piezas y campañas vinculadas a marcas como <strong>Ford</strong>, <strong>Amarok</strong>, <strong>Stella Artois</strong>, <strong>YPF</strong>, <strong>Vinos Los Intocables</strong> y <strong>Pago Fácil</strong>.',
    ],
  },
];
