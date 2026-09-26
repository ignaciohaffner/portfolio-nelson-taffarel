// Texto verbatim de la biografía. Los <span font-semibold> originales pasan a <strong>.
export interface BioItem {
  title: string;
  html: string;
}

export const bio: BioItem[] = [
  {
    title: 'Sobre mí',
    html: 'Actor formado en el prestigioso taller de arte dramático de <strong>Agustín Alezzo</strong>, con una profunda pasión por la interpretación. Además, perfeccioné mis habilidades en danza y actuación con <strong>Ana Frenkel</strong>. Apasionado por el deporte, practico <strong>equitación</strong>, <strong>rugby</strong>, <strong>golf</strong> y <strong>Ashtanga Yoga</strong>, fusionando arte y disciplina en cada paso.',
  },
  {
    title: 'Experiencia en TV',
    html: 'He participado en reconocidas producciones televisivas como <em>Amor mío</em>, <em>Conflictos en red</em>, <em>Sin código</em>, <em>Hombres de honor</em>, <em>Los Roldán</em>, <em>Alma pirata</em>, <em>Casi ángeles</em> y <em>RRDT</em>. También incursioné en la comedia con programas icónicos como <em>Casados con hijos</em>, <em>TyC Sports</em> y <em>VideoMatch</em> (1995-1997).',
  },
  {
    title: 'Teatro',
    html: 'Sobre las tablas, he llevado a escena grandes clásicos en teatros como el <strong>San Martín</strong> y <strong>El Duende</strong>. Obras de <strong>Woody Allen</strong>, <strong>Harold Pinter</strong> y <strong>El Reñidero</strong> han sido parte de mi trayectoria, siempre bajo la dirección del maestro <strong>Agustín Alezzo</strong>.',
  },
  {
    title: 'Publicidad & Videoclips',
    html: 'He sido parte de campañas publicitarias para marcas líderes como <strong>La Serenísima</strong>, <strong>Arcor</strong>, <strong>Gancia</strong>, <strong>AFIP</strong>, <strong>Plusbelle</strong>, <strong>Ford</strong> y <strong>Pago Fácil</strong>. Además, participé en videoclips de artistas como <strong>Los Nocheros</strong>, <strong>Pimpinela</strong> y <strong>León Gieco</strong>, fusionando la actuación con la música.',
  },
];
