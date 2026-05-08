export const WHATSAPP_URL =
  'https://wa.me/51902862020?text=Hola%20NELYAN%2C%20me%20interesa%20conocer%20la%20colecci%C3%B3n'

export const categories = [
  'Todos',
  'Polos y básicos',
  'Blusas y tops',
  'Vestidos',
  'Chalecos',
  'Cardigans y tejidos',
  'Prendas modernas',
]

export const products = [
  {
    name: 'Polo básico femenino',
    category: 'Polos y básicos',
    image: '/assets/products/producto-polo-basico-femenino.webp',
    description: 'Básico versátil para looks frescos, limpios y fáciles de combinar.',
  },
  {
    name: 'Polo mariposa negro',
    category: 'Polos y básicos',
    image: '/assets/products/producto-polo-mariposa-negro.webp',
    description: 'Prenda casual con detalle gráfico para un estilo moderno y relajado.',
  },
  {
    name: 'Blusa blanca elegante',
    category: 'Blusas y tops',
    image: '/assets/products/producto-blusa-blanca-elegante.webp',
    description: 'Una pieza luminosa y atemporal para elevar cualquier ocasión.',
  },
  {
    name: 'Blusa azul drapeada',
    category: 'Blusas y tops',
    image: '/assets/products/producto-blusa-azul-drapeada.webp',
    description: 'Diseño con caída suave que aporta presencia sin perder comodidad.',
  },
  {
    name: 'Top satinado',
    category: 'Blusas y tops',
    image: '/assets/products/producto-top-capuchino-satinado.webp',
    description: 'Textura delicada y tono capuchino para un look sofisticado.',
  },
  {
    name: 'Top halter elegante',
    category: 'Blusas y tops',
    image: '/assets/products/producto-top-halter-elegante.webp',
    description: 'Silueta femenina para salidas especiales y combinaciones delicadas.',
  },
  {
    name: 'Top satinado negro',
    category: 'Prendas modernas',
    image: '/assets/products/producto-top-satinado-negro.webp',
    description: 'Un básico de impacto con acabado suave para vestir con seguridad.',
  },
  {
    name: 'Top moderno gris',
    category: 'Prendas modernas',
    image: '/assets/products/producto-top-moderno-gris.webp',
    description: 'Diseño adaptable con detalles laterales para un estilo actual.',
  },
  {
    name: 'Vestido negro elegante',
    category: 'Vestidos',
    image: '/assets/products/producto-vestido-negro-elegante.webp',
    description: 'Silueta sofisticada para destacar con presencia y confianza.',
  },
  {
    name: 'Vestido vino moderno',
    category: 'Vestidos',
    image: '/assets/products/producto-vestido-vino-moderno.webp',
    description: 'Color intenso y diseño femenino para una salida especial.',
  },
  {
    name: 'Vestido blanco femenino',
    category: 'Vestidos',
    image: '/assets/products/producto-vestido-blanco-femenino.webp',
    description: 'Ligero, limpio y delicado para looks frescos de temporada.',
  },
  {
    name: 'Chaleco acolchado',
    category: 'Chalecos',
    image: '/assets/products/producto-chaleco-acolchado-beige.webp',
    description: 'Capa práctica y elegante para crear looks con volumen sutil.',
  },
  {
    name: 'Chaleco acolchado negro',
    category: 'Chalecos',
    image: '/assets/products/producto-chaleco-acolchado-negro.webp',
    description: 'Una pieza sobria para sumar carácter a combinaciones urbanas.',
  },
  {
    name: 'Cardigan tejido',
    category: 'Cardigans y tejidos',
    image: '/assets/products/producto-cardigan-tejido-verde.webp',
    description: 'Textura abierta y tono suave para una presencia cálida y femenina.',
  },
  {
    name: 'Cardigan azul',
    category: 'Cardigans y tejidos',
    image: '/assets/products/producto-cardigan-azul.webp',
    description: 'Tejido acogedor para looks de temporada fresca y días cotidianos.',
  },
  {
    name: 'Top halter vino',
    category: 'Prendas modernas',
    image: '/assets/products/producto-top-halter-vino.webp',
    description: 'Color protagonista y escote halter para una imagen segura.',
  },
]

export const looks = [
  {
    title: 'Look diario',
    image: '/assets/looks/look-diario-basicos.webp',
    tag: 'Básicos versátiles',
  },
  {
    title: 'Salida especial',
    image: '/assets/looks/look-salida-especial.webp',
    tag: 'Tops delicados',
  },
  {
    title: 'Estilo sofisticado',
    image: '/assets/looks/look-sofisticado.webp',
    tag: 'Vestidos con presencia',
  },
  {
    title: 'Temporada fresca',
    image: '/assets/looks/look-temporada-fresca.webp',
    tag: 'Tejidos y capas',
  },
]

export const productMessage = (productName) =>
  `https://wa.me/51902862020?text=${encodeURIComponent(
    `Hola NELYAN, me interesa consultar por ${productName}. ¿Podrían compartir disponibilidad, colores y modelos?`,
  )}`
