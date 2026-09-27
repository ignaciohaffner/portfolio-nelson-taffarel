// Texto entregado por Nelson (revisado por él). Los **negritas** originales pasan a <strong>.
export const intro = [
  '<strong>Nel Taffarel</strong>, nombre artístico de <strong>Nelson Taffarel</strong>, es actor, actor de voz e imitador argentino, oriundo de <strong>Gualeguaychú, Entre Ríos</strong>.',
  'Su trayectoria abarca teatro, televisión, cine, cortometrajes, publicidad, locución e imitaciones, con experiencias en algunos de los principales escenarios y medios de la Argentina.',
];

export const about = {
  title: 'Sobre mí',
  paragraphs: [
    'La actuación y la interpretación forman parte de mi vida desde hace muchos años.',
    'Mi recorrido comenzó vinculado al teatro y a las imitaciones, y con el tiempo se extendió a la televisión, el cine, la publicidad y el trabajo como actor de voz.',
    'A lo largo de mi trayectoria tuve la oportunidad de trabajar con reconocidos directores, participar en producciones televisivas y cinematográficas y formar parte de obras presentadas en escenarios como el <strong>Teatro San Martín</strong> y el <strong>Teatro Colón</strong>.',
    'Cada experiencia fue aportando nuevas herramientas a mi trabajo como intérprete, tanto frente a cámara y sobre un escenario como detrás de un micrófono.',
  ],
};

export type Part =
  | { p: string }
  | { list: string[] }
  | { items: { title: string; html: string }[] };

export interface Block {
  id: string;
  title: string;
  subtitle?: string;
  parts: Part[];
}

export const career: Block[] = [
  {
    id: 'teatro',
    title: 'Teatro',
    subtitle: 'Formación y trayectoria teatral',
    parts: [
      { p: 'El teatro constituye una parte fundamental de mi desarrollo como actor.' },
      { p: 'Tuve la oportunidad de trabajar bajo la dirección de <strong>Agustín Alezzo</strong>, uno de los grandes maestros y directores del teatro argentino.' },
      { p: 'Bajo su dirección participé en trabajos sobre textos de reconocidos dramaturgos internacionales, entre ellos:' },
      { list: ['<strong>Central Park West</strong>, de Woody Allen.', '<strong>La colección</strong>, de Harold Pinter.'] },
      { p: 'También participé en <strong>El reñidero</strong>, obra de Sergio De Cecco, en el ámbito del <strong>Teatro San Martín</strong>.' },
      { p: 'Mi experiencia teatral incluye además participaciones en producciones realizadas en el <strong>Teatro Colón</strong>, entre ellas:' },
      { list: ['<strong>Los cuentos de Hoffmann</strong>', '<strong>Atila</strong>'] },
      { p: 'Estas experiencias fueron fundamentales para mi formación y para desarrollar distintos registros dentro de la actuación.' },
    ],
  },
  {
    id: 'cine',
    title: 'Cine',
    parts: [
      { p: 'Mi trayectoria también incluye participaciones en largometrajes y cortometrajes.' },
      {
        items: [
          { title: 'No te olvides de mí', html: 'Participé como actor en <strong>No te olvides de mí</strong>, película dirigida por <strong>Fernanda Remondo</strong> y protagonizada por <strong>Leonardo Sbaraglia</strong>.' },
          { title: 'Road Movie', html: 'Participé en <strong>Road Movie</strong>, dirigida por <strong>Dennis Smith</strong>.' },
          { title: 'Como Susi', html: 'Formé parte del cortometraje <strong>Como Susi</strong>, producción que participó en distintos festivales.' },
          { title: 'Cortometrajes para Telefe', html: 'También participé como actor en diferentes <strong>cortometrajes realizados para Telefe</strong>, ampliando mi experiencia en distintos formatos audiovisuales.' },
        ],
      },
    ],
  },
  {
    id: 'television',
    title: 'Televisión',
    parts: [
      { p: 'A lo largo de mi carrera participé en diferentes producciones y programas de televisión.' },
      { p: 'Entre mis trabajos y experiencias se encuentran:' },
      { list: ['<strong>Videomatch</strong>', 'Trabajos en <strong>Canal 9</strong>', '<strong>Casados con Hijos</strong>', '<strong>Los Únicos</strong>', 'Diferentes participaciones televisivas y audiovisuales'] },
      { p: 'La televisión me permitió desarrollar distintos registros actorales y complementar la experiencia adquirida previamente en teatro.' },
    ],
  },
  {
    id: 'artigas',
    title: 'Artigas',
    subtitle: 'José Rondeau',
    parts: [
      { p: 'Participé en la producción <strong>Artigas</strong>, interpretando al personaje histórico <strong>José Rondeau</strong>.' },
      { p: 'Este trabajo significó la posibilidad de abordar un personaje histórico y desarrollar una interpretación vinculada a un contexto y una época determinados.' },
    ],
  },
  {
    id: 'voz',
    title: 'Actor de voz y publicidad',
    parts: [
      { p: 'Además de mi trabajo como actor frente a cámara y sobre el escenario, desarrollé una trayectoria como <strong>actor de voz y locutor publicitario</strong>.' },
      { p: 'Participé con mi voz en diferentes piezas y campañas para marcas y empresas como:' },
      { list: ['<strong>Ford</strong>', '<strong>Amarok</strong>', '<strong>Stella Artois</strong>', '<strong>YPF</strong>', '<strong>Vinos Los Intocables</strong>', '<strong>Pago Fácil</strong>'] },
      { p: 'El trabajo de voz me permitió explorar otros registros interpretativos, combinando actuación, locución, creación de personajes y comunicación publicitaria.' },
    ],
  },
  {
    id: 'imitaciones',
    title: 'Imitaciones',
    parts: [
      { p: 'Las imitaciones forman parte de mis comienzos y siguen siendo una de las facetas más personales de mi trabajo artístico.' },
      { p: 'Desde joven desarrollé la observación de voces, gestos y personalidades, transformándolas en personajes y contenidos humorísticos.' },
      { p: 'Con el tiempo, esta capacidad también se integró a mi trabajo profesional en televisión, actuación y voz.' },
      { p: 'Actualmente continúo desarrollando imitaciones y contenidos vinculados al humor y la interpretación.' },
    ],
  },
  {
    id: 'ecuestre',
    title: 'Trayectoria ecuestre',
    parts: [
      { p: 'Además de mi actividad artística, desarrollé durante años una relación muy cercana con el mundo de los caballos.' },
      { p: 'Tuve experiencia en el <strong>cuidado y manejo de caballos</strong>, adquiriendo conocimientos vinculados a la actividad ecuestre.' },
      { p: 'También desarrollé actividad deportiva como <strong>jugador de polo</strong>.' },
      { p: 'Esta experiencia forma parte de mi recorrido personal y constituye otra faceta de una vida vinculada a diferentes disciplinas, tanto artísticas como deportivas.' },
    ],
  },
];
