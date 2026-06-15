export const CATEGORIES = [
  {
    id: 'chapitas',
    title: 'Chapitas Espejo',
    subtitle: 'Recuerdos perfectos para celebraciones',
    description: 'Nuestras chapitas espejo personalizadas son el recuerdo ideal para bautizos, cumpleaños, baby showers y matrimonios. Delicadas, útiles y diseñadas con la temática de tu evento.',
    images: ['images/Chapitas.jpeg'],
    priceTable: [
      { qty: '1 Unidad', price: '$800', unit: '$800 c/u', tag: 'Detalle' },
      { qty: 'Docena (12 uds)', price: '$8.400', unit: '$700 c/u', tag: 'Recomendado' },
      { qty: '25 Unidades', price: '$16.250', unit: '$650 c/u', tag: 'Económico' },
      { qty: '50 Unidades', price: '$30.000', unit: '$600 c/u', tag: 'Favorito' },
      { qty: '100 Unidades', price: '$55.000', unit: '$550 c/u', tag: 'Mejor Valor' }
    ]
  },
  {
    id: 'cintas',
    title: 'Cintas Personalizadas',
    subtitle: 'Especiales para instrumentos y eventos',
    description: 'Cintas de raso impresas con nombres, fechas o dedicatorias especiales. Ideales para envolver regalos premium, marcar instrumentos musicales, medallas o eventos corporativos con un toque de elegancia.',
    images: ['/images/Cinta margarita.jpeg', '/images/Cinta Belen.jpeg', '/images/Cinta Gabriela.jpeg', '/images/Cintas Especiales.jpeg'],
    priceTable: [
      { qty: 'Cinta margarita', price: '$2.000', unit: 'Colores personalizados', tag: 'Simple' },
      { qty: 'Cinta Belen', price: '$2.500', unit: 'Letras valor adic.', tag: 'Recomendada' },
      { qty: 'Cinta Gabriela', price: '$3.000', unit: 'Letras valor adic.', tag: 'Elegante' },
      { qty: 'Cintas especiales', price: '$4.000', unit: 'Letras incluidas', tag: 'Premium' }
    ],
    priceNote: 'Todas nuestras cintas tienen precios al por mayor. El valor final se ajusta dependiendo de la cantidad solicitada.'
  },
  {
    id: 'tazas',
    title: 'Tazas y Recipientes',
    subtitle: 'Diseños exclusivos en sublimación y vinilo',
    description: 'Tazas de cerámica y recipientes de vidrio personalizados. Hechos con sublimación de alta definición y vinilo permanente premium. Perfectas para el café de la mañana o como un regalo corporativo de gran presencia.',
    images: ['/images/Tazas Fondo Blanco.jpeg', '/images/Tazas Full Color.jpeg', '/images/Taza Empavonada.jpeg', '/images/Taza + Cuchara.jpeg', '/images/Taza Magica.mp4'],
    priceTable: [
      { qty: 'Fondo Blanco', price: '$3.000', unit: 'Personalizada', tag: 'Clásica' },
      { qty: 'Full Color', price: '$3.500', unit: 'Personalizada', tag: 'Vibrante' },
      { qty: 'Empavonada', price: '$4.000', unit: 'Personalizada', tag: 'Elegante' },
      { qty: 'Taza + Cuchara', price: '$4.500', unit: 'Personalizada', tag: 'Set' },
      { qty: 'Taza Mágica', price: '$5.000', unit: 'Personalizada', tag: 'Sorpresa' }
    ],
    priceNote: 'Todas nuestras tazas tienen precios al por mayor. El valor final se ajusta dependiendo de la cantidad solicitada.'
  },
  {
    id: 'sets-regalos',
    title: 'Sets de Regalo y Cajas',
    subtitle: 'Regalos armados con tote bags, tazas, chocolates y más',
    description: 'Sorprende a esa persona especial con una caja de regalo premium. Cada set incluye productos personalizados combinados armónicamente, decorados con cintas de raso y tarjetas dedicatorias especiales.',
    images: ['/images/cajas_1.png', '/images/cajas_2.png', '/images/Set de regalo.jpeg'],
  },
  {
    id: 'flores',
    title: 'Flores Eternas',
    subtitle: 'Hermosos ramos de rosas de jabón',
    description: 'Hermosas y aromáticas rosas de jabón presentadas en ramos premium. Un detalle que dura para siempre, no se marchita y perfuma el ambiente de forma dulce y duradera.',
    images: ['/images/flores_1.png', '/images/Ramo.jpeg'],
  },
  {
    id: 'mundo-ideas',
    title: 'Un mundo de ideas',
    subtitle: 'Detalles solitarios que complementan cualquier regalo',
    description: 'Pequeños grandes detalles diseñados para complementar tus regalos o regalar por sí solos. Llaveros personalizados, lápices decorados, imanes temáticos y marca páginas hermosos que añaden un toque único.',
    images: [
      '/images/Lapiz.jpeg',
      '/images/Llavero.jpeg',
      '/images/Llavero1.jpeg',
      '/images/Llavero2.jpeg',
      '/images/Iman.jpeg',
      '/images/Imanes.jpeg',
      '/images/Marca Páginas.jpeg',
      '/images/Recuerdos.jpeg'
    ]
  }
];

export const HERO_SLIDES = [
  {
    image: '/images/cajas_2.png',
    title: 'Sets Temáticos',
    subtitle: 'Sublimación y Cintas premium'
  },
  {
    image: '/images/cajas_1.png',
    title: 'Cajas de Regalo',
    subtitle: 'Detalles hechos con amor'
  },
  {
    image: '/images/Chapitas.jpeg',
    title: 'Chapitas Espejo',
    subtitle: 'Recuerdos personalizados'
  },
  {
    image: '/images/Tazas.jpeg',
    title: 'Tazas de Diseño',
    subtitle: 'Sublimación de alta definición'
  },
  {
    image: '/images/Ramo.jpeg',
    title: 'Flores Eternas',
    subtitle: 'Ramos que duran siempre'
  }
];

export const WHATSAPP_NUMBER = '56995749220';

export const getWhatsAppLink = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
