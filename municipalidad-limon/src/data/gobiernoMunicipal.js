// src/data/gobiernoMunicipal.js

import fotoAna from '../assets/imagenes/Ana.png';
import fotoJohn from '../assets/imagenes/John.png';
import fotoKaterine from '../assets/imagenes/Katerine.png';
import fotoJuan from '../assets/imagenes/Juan.png';

export const navGobierno = [
  { slug: 'alcaldia', titulo: 'Alcaldía' },
  { slug: 'vicealcaldias', titulo: 'Vicealcaldías' },
  { slug: 'consejo-municipal', titulo: 'Concejo Municipal' },
  { slug: 'secretaria-consejo', titulo: 'Secretaría del Concejo' },
  { slug: 'sesiones-municipales', titulo: 'Sesiones municipales' },
  { slug: 'periodos-anteriores', titulo: 'Períodos anteriores' },
];

export const alcaldia = {
  descripcion: [
    'La Alcaldía es el órgano ejecutivo de la Municipalidad de Limón. Es responsable de la administración general, el presupuesto y las obras cantonales.',
  ],
  persona: {
    nombre: 'Ana Janniel Matarrita McCalla',
    cargo: 'Alcaldesa Municipal',
    foto: fotoAna,
  },
  funciones: [
    'Dirigir la administración general y el presupuesto municipal',
    'Ejecutar los acuerdos del Concejo Municipal',
    'Representar legalmente al cantón ante otras instituciones',
  ],
  contacto: {
    telefono: '2758-4444',
    correo: 'alcaldia@municlimon.go.cr',
    web: 'municlimon.go.cr',
  },
};

export const vicealcaldias = {
  descripcion: [
    'La 1.ª Vicealcaldía asume las funciones ejecutivas delegadas (proyectos sociales, área comunitaria y cultural) y la sustitución temporal de la Alcaldía. La 2.ª Vicealcaldía apoya los planes estratégicos de desarrollo.',
  ],
  personas: [
    { nombre: 'John Gutiérrez Gómez', cargo: '1.ª Vicealcaldía', foto: fotoJohn },
    { nombre: 'Katerine Calvo Lobo', cargo: '2.ª Vicealcaldía', foto: fotoKaterine },
  ],
};

export const concejoMunicipal = {
  temas: [
    {
      pregunta: 'Quiénes lo integran',
      respuesta:
        'El Concejo Municipal está integrado por 9 regidores propietarios, sus respectivos suplentes, y síndicas y síndicos de los distritos del cantón.',
    },
    {
      pregunta: 'Qué decide',
      respuesta:
        'Aprueba reglamentos, el presupuesto municipal y los acuerdos que rigen la gestión del cantón, además de fiscalizar la administración.',
    },
    {
      pregunta: 'Cuándo sesiona',
      respuesta:
        'Sesiona de forma ordinaria cada semana, y de forma extraordinaria cuando la agenda cantonal lo requiere.',
    },
    {
      pregunta: 'Cómo consultar actas y acuerdos',
      respuesta:
        'Las actas y acuerdos pueden solicitarse a través de la Secretaría del Concejo Municipal.',
    },
  ],
  presidencia: {
    nombre: 'Juan Pablo Poveda Chinchilla',
    cargo: 'Presidente del Concejo Municipal',
    foto: fotoJuan,
  },
  regidores: [
    {
      partido: 'Partido Unidos Podemos',
      nombres: [
        'Juan Pablo Poveda Chinchilla (Presidente)',
        'Katerine Calvo Lobo (Vicepresidenta)',
        'Orin George Grant Ebanks',
      ],
    },
    {
      partido: 'Partido Auténtico Limonense',
      nombres: ['Dwayne Kareem Mattis Pinnock', 'Yahuzu Acuña Martínez'],
    },
    {
      partido: 'Partido Liberación Nacional',
      nombres: ['José Ramón Retana Cerdas', 'Laura Elicena Mora Knight'],
    },
    {
      partido: 'Partido Justicia Social Costarricense',
      nombres: ['Keyvin Paul Ramírez Quesada'],
    },
    {
      partido: 'Partido Aquí Costa Rica Manda',
      nombres: ['José Luis Vásquez Mora'],
    },
  ],
};

export const secretariaConsejo = {
  descripcion: [
    'La Secretaría del Concejo Municipal es la oficina encargada de la redacción, custodia, notificación y publicación de las actas y acuerdos tomados por el Concejo.',
  ],
  pasos: [
    { numero: 1, texto: 'Presenta tu solicitud por escrito indicando el acuerdo o acta que necesitas.' },
    { numero: 2, texto: 'La Secretaría revisa la solicitud y localiza el documento en el archivo.' },
    { numero: 3, texto: 'Recibe la certificación o copia del documento solicitado.' },
  ],
};

export const sesionesMunicipales = {
  descripcion: [
    'Consulte el calendario de sesiones ordinarias y extraordinarias del Concejo Municipal.',
  ],
  calendario: [
    { tipo: 'Ordinaria', dia: 'Por confirmar', hora: 'Por confirmar' },
    { tipo: 'Extraordinaria', dia: 'Según convocatoria', hora: '—' },
  ],
  transmision: 'https://youtube.com/@municlimon',
};

export const periodosAnteriores = {
  cuadrenios: [
    {
      periodo: '2020–2024',
      alcalde: 'Néstor Mattis Williams',
      vicealcaldias: 'Ana Janniel Matarrita McCalla (1.ª), Shafton Delroy Chambers (2.º)',
      concejo: '9 regidores propietarios y 9 suplentes',
    },
    {
      periodo: '2016–2020',
      alcalde: 'Néstor Mattis Williams',
      vicealcaldias: 'Cintia Small Sánchez (1.ª), Raymond Smith Smith (2.º)',
      concejo: 'Representación de los 4 distritos (Limón centro, Valle La Estrella, Río Blanco, Matama)',
    },
  ],
  archivo:
    'Repositorio de actas y acuerdos municipales desde 2010 a la fecha, y memorias e informes de fin de mandato de cada administración.',
};