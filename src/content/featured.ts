export interface Featured {
  title: string;
  // ID del video de YouTube: lo que va después de "v=" en youtube.com/watch?v=XXXX (o después de youtu.be/)
  id: string;
}

// Para agregar un video: sumar una línea. Mientras la lista esté vacía, la sección no se muestra.
// Ejemplo: { title: 'Publicidad X', id: 'dQw4w9WgXcQ' },
export const featured: Featured[] = [
  { title: 'Stella Artois 0.0', id: 'girwUvJAbGo' },
  { title: 'Netflix · Peaky Blinders', id: 'BN2kcwecnmA' },
  { title: 'Publicidad Carrefour', id: 'yXVofkV6yl0' },
  { title: 'Ford Maverick · Voz 1', id: 'opEFcb38Rv4' },
  { title: 'Ford Maverick · Voz 2', id: 'S3VN-cLar_I' },
  { title: 'Locución Pago Fácil', id: '9a2HgptELSM' },
  { title: 'Danette', id: 'FJJXcuAZkeM' },
];
