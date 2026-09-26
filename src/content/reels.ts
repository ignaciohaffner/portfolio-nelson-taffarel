export interface Reel {
  title: string;
  id: string;
  // TODO-CONTENIDO: fecha real de subida (YYYY-MM-DD) desde YouTube
  uploadDate: string;
}

export const reels: Reel[] = [
  { title: 'REEL 1', id: 'KCo6z-yXb60', uploadDate: '2025-01-01' },
  { title: 'REEL 2', id: 'OBYoz-8YC3s', uploadDate: '2025-01-01' },
  { title: 'REEL 3', id: 'QIl6qiG8fpA', uploadDate: '2025-01-01' },
  { title: 'REEL 4', id: 'V2-pi55aP7g', uploadDate: '2025-01-01' },
  // TODO-CONTENIDO: el link de REEL AUDIO repite el de REEL 4 (V2-pi55aP7g). Pedir el correcto.
  { title: 'REEL AUDIO', id: 'V2-pi55aP7g', uploadDate: '2025-01-01' },
];
