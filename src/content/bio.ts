// Texto en primera persona entregado por Nelson (revisado por él). Las negritas son solo de lectura rápida.
export const intro = [
  'Soy <strong>Nel Taffarel</strong>. Mi nombre completo es <strong>Nelson Taffarel</strong> y soy actor, actor de voz e imitador, nacido en <strong>Gualeguaychú, Entre Ríos</strong>.',
  'A lo largo de mi recorrido trabajé en teatro, televisión, cine, publicidad, locución e imitaciones, desarrollando distintos registros de interpretación frente a cámara, sobre el escenario y detrás del micrófono.',
];

export interface Section {
  title: string;
  paragraphs: string[];
}

export const about: Section[] = [
  {
    title: 'Mi recorrido',
    paragraphs: [
      'A lo largo de los años fui construyendo un camino que combina teatro, cine, televisión, voz, publicidad e imitaciones.',
      'Cada una de esas experiencias me permitió crecer como actor y desarrollar una mirada versátil sobre la interpretación.',
    ],
  },
  {
    title: 'Actualmente',
    paragraphs: [
      'Actualmente continúo vinculado a la actuación, los castings, la publicidad, la voz y los contenidos audiovisuales, manteniendo activa una trayectoria construida a través de diferentes experiencias y etapas.',
    ],
  },
];

export interface Block {
  id: string;
  title: string;
  paragraphs: string[];
}

export const career: Block[] = [
  {
    id: 'teatro',
    title: 'Teatro',
    paragraphs: [
      'El teatro ocupa un lugar muy importante en mi formación y en mi desarrollo como actor.',
      'Tuve la oportunidad de trabajar bajo la dirección de <strong>Agustín Alezzo</strong>, participando en propuestas sobre textos de autores como <strong>Woody Allen</strong> y <strong>Harold Pinter</strong>, entre ellas <strong>Central Park West</strong> y <strong>La colección</strong>.',
      'También formé parte de <strong>El reñidero</strong>, de Sergio De Cecco, en el ámbito del <strong>Teatro San Martín</strong>, y participé en producciones del <strong>Teatro Colón</strong> como <strong>Los cuentos de Hoffmann</strong> y <strong>Atila</strong>.',
      'Estas experiencias fueron fundamentales en mi formación y me permitieron desarrollar distintos lenguajes de actuación y trabajo escénico.',
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
      'Mi experiencia en televisión incluye participaciones en <strong>Videomatch</strong>, trabajos en <strong>Canal 9</strong>, <strong>Casados con Hijos</strong>, <strong>Los Únicos</strong> y otras producciones audiovisuales.',
      'La televisión me permitió explorar otros tiempos y registros de actuación, sumando nuevas herramientas a mi trabajo.',
    ],
  },
  {
    id: 'voz',
    title: 'Actor de voz y publicidad',
    paragraphs: [
      'Además de mi trabajo como actor, desarrollé una faceta profesional como <strong>actor de voz y locutor publicitario</strong>.',
      'Participé en piezas y campañas vinculadas a marcas como <strong>Ford</strong>, <strong>Amarok</strong>, <strong>Stella Artois</strong>, <strong>YPF</strong>, <strong>Vinos Los Intocables</strong> y <strong>Pago Fácil</strong>.',
      'El trabajo de voz me permitió seguir ampliando mis recursos expresivos y explorar nuevas formas de interpretación.',
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
      'Fuera del ámbito artístico, también desarrollé una relación muy cercana con el mundo de los caballos.',
      'Cuento con experiencia en <strong>cuidado y manejo de caballos</strong> y también practiqué <strong>polo</strong>, una disciplina que forma parte de otra de mis pasiones.',
    ],
  },
];
