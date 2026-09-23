// src/data/canton.js

import mapaDistritos from '../assets/imagenes/mapa.png';

export const cantonInfo = {
  nombre: 'Cantón de Limón',
  numeroCanton: 'Cantón 01, Provincia de Limón',
  cabecera: 'Ciudad de Limón (Puerto Limón)',
};

export const cantonCategories = [
  {
    id: 'historia',
    color: 'primary',
    title: 'Historia',
    summary: 'Cómo se formó y evolucionó históricamente el cantón.',
    data: {
      hitos: [
        {
          periodo: 'Época precolombina',
          descripcion:
            'Región habitada originalmente por grupos indígenas ancestrales como los huetares, suerres y bribris.',
        },
        {
          periodo: '1502',
          descripcion:
            'Cristóbal Colón desembarca en la Isla Quiribrí (actual Isla Uvita), frente a las costas de Limón, durante su cuarto y último viaje.',
        },
        {
          periodo: '1870–1871',
          descripcion:
            'Se decreta la apertura del puerto de Limón y comienza la construcción del Ferrocarril al Atlántico, buscando una salida directa al Océano Atlántico para exportar café.',
        },
        {
          periodo: 'Finales del siglo XIX',
          descripcion:
            'La construcción de la vía férrea atrae grandes flujos migratorios de trabajadores caribeños (principalmente de Jamaica), así como comunidades chinas e italianas, que enriquecen la región con su idioma, costumbres, música y gastronomía.',
        },
        {
          periodo: '25 de julio de 1909',
          descripcion:
            'Se establece oficialmente como cantón mediante la Ley N.° 59.',
        },
      ],
    },
  },
  {
    id: 'geografia',
    color: 'primary-hover',
    title: 'Geografía',
    summary: 'Dónde está ubicado el cantón, su relieve y biodiversidad.',
    data: {
      descripcion: [
        'El cantón de Limón se ubica en la costa Caribeña de Costa Rica, con una superficie de 1,765.79 km². Limita al norte con el cantón de Matina, al sur con Talamanca, al oeste con Turrialba (provincia de Cartago) y al este con el mar Caribe.',
        'Su clima es tropical húmedo, con altas temperaturas y lluvias abundantes durante todo el año, sin una estación seca prolongada.',
        'El relieve combina llanuras costeras bajas y aluviales con zonas de alta pendiente pertenecientes a las estribaciones de la Cordillera de Talamanca. Entre los ríos más importantes están el Banano, el Bananito y el Estrella.',
        'Cuenta con ecosistemas de gran biodiversidad, como la Reserva Biológica Hitoy Cerere (bosque pluvial preatlántico), además de manglares, bosques tropicales húmedos y arrecifes costeros.',
      ],
    },
  },
  {
    id: 'distritos',
    color: 'secondary',
    title: 'Distritos',
    summary: 'Cómo está organizado territorialmente el cantón.',
    data: {
      mapa: mapaDistritos,
      distritos: [
        {
          nombre: 'Limón',
          numero: 'Distrito 01 · Cabecera',
          codigoPostal: '70101',
          descripcion:
            'Alberga el casco urbano central, el centro comercial, el Parque Vargas, las instalaciones portuarias históricas y los principales servicios administrativos y de salud.',
        },
        {
          nombre: 'Valle La Estrella',
          numero: 'Distrito 02',
          codigoPostal: '70102',
          descripcion:
            'Zona predominantemente agrícola y rural, históricamente vinculada a la producción bananera y de cacao. Aloja la entrada a la Reserva Biológica Hitoy Cerere.',
        },
        {
          nombre: 'Río Blanco',
          numero: 'Distrito 03',
          codigoPostal: '70103',
          descripcion:
            'Sector de expansión residencial, comercial e industrial ubicado al oeste del centro de la ciudad, conectado directamente por la Ruta Nacional 32.',
        },
        {
          nombre: 'Matama',
          numero: 'Distrito 04',
          codigoPostal: '70104',
          descripcion:
            'Comprende comunidades rurales y costeras al sur del cantón (como Bomba y Beverly), con paisajes naturales y actividad agropecuaria.',
        },
      ],
    },
  },
  {
    id: 'cultura-identidad',
    color: 'secondary-hover',
    title: 'Cultura e identidad',
    summary: 'Qué define social y culturalmente a Limón.',
    data: {
      descripcion:
        'Limón tiene la identidad afrocostarricense más marcada del país, enriquecida por la migración caribeña, china e italiana que llegó con la construcción del ferrocarril.',
      elementos: [
        'Calipso limonense, declarado Patrimonio Cultural Inmaterial de Costa Rica, con Walter Ferguson ("El Rey del Calipso") como figura emblemática',
        'Mekatelyu (inglés criollo de Limón), dialecto caribeño hablado junto al español',
        'Día de la Persona Negra y la Cultura Afrocostarricense (31 de agosto), con el tradicional "Grand Parade"',
        'Carnavales de Limón, celebrados cada octubre con comparsas, desfiles y máscaras',
      ],
      gastronomia: [
        { nombre: 'Rice and Beans', descripcion: 'Arroz y frijoles en leche de coco y chile panameño, con pollo o pescado y patacones.' },
        { nombre: 'Rondón (Run-Down)', descripcion: 'Sopa de leche de coco con pescado o mariscos, yuca, plátano verde, ñame y chile panameño.' },
        { nombre: 'Patí', descripcion: 'Pastel de harina relleno de carne molida con chile panameño y especias.' },
        { nombre: 'Pan Bon', descripcion: 'Pan negro especiado con frutas confitadas, pasas y vainilla.' },
      ],
    },
  },
  {
    id: 'patrimonio',
    color: 'accent',
    title: 'Patrimonio',
    summary: 'Catálogo oficial y visual del patrimonio del cantón.',
    data: {
      items: [
        {
          nombre: 'Calipso Limonense',
          descripcion: 'Expresión musical declarada Patrimonio Cultural Inmaterial de Costa Rica, interpretada con guitarra, banjo, tumba y el "quijongo" (tina de baño convertida en bajo).',
        },
        {
          nombre: 'Isla Uvita (Isla Quiribrí)',
          descripcion: 'Sitio histórico donde desembarcó Cristóbal Colón en 1502, frente a la bahía de Limón.',
        },
        {
          nombre: 'Parque Vargas',
          descripcion: 'Parque central histórico frente al mar, punto de encuentro tradicional de la ciudad de Limón.',
        },
        {
          nombre: 'Patrimonio arquitectónico del casco central',
          descripcion: 'Edificaciones históricas ligadas al desarrollo portuario y ferroviario del cantón.',
        },
      ],
    },
  },
  {
    id: 'turismo',
    color: 'support',
    title: 'Turismo',
    summary: 'Descubra y planifique una visita a Limón.',
    data: {
      atractivos: [
        {
          nombre: 'Turismo de cruceros',
          descripcion: 'Puerto de Limón, punto de llegada de cruceros internacionales a la costa Caribe.',
        },
        {
          nombre: 'Isla Uvita',
          descripcion: 'Recorridos en bote al sitio histórico del desembarco de Colón, frente a la bahía.',
        },
        {
          nombre: 'Reserva Biológica Hitoy Cerere',
          descripcion: 'Senderismo en bosque pluvial preatlántico de alta biodiversidad, en Valle La Estrella.',
        },
        {
          nombre: 'Casco central histórico',
          descripcion: 'Patrimonio arquitectónico, gastronomía caribeña y cultura viva en la ciudad de Limón.',
        },
      ],
    },
  },
  {
    id: 'datos-canton',
    color: 'primary',
    title: 'Datos del cantón',
    summary: 'Fichero de datos básicos y actuales del cantón.',
    data: {
      estadisticas: [
        { etiqueta: 'Población (INEC 2024)', valor: '92,335 habitantes' },
        { etiqueta: 'Superficie', valor: '1,765.79 km²' },
        { etiqueta: 'Cabecera', valor: 'Puerto Limón' },
        { etiqueta: 'Número de distritos', valor: '4' },
        { etiqueta: 'Fundación como cantón', valor: '25 de julio de 1909 (Ley N.° 59)' },
        { etiqueta: 'Clima', valor: 'Tropical húmedo' },
      ],
    },
  },
];