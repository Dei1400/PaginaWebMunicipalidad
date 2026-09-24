export const municipalidadCategories = [
  {
    id: 'institucion',
    color: 'primary',
    title: 'La Institución',
    summary: 'Quiénes somos y qué nos guía',
    data: {
      historia:
        'Limón fue establecido como cantón mediante la Ley N° 59 del 25 de julio de 1892. A lo largo de su historia, la Municipalidad ha impulsado el desarrollo urbano, social y cultural de la provincia caribeña, consolidándose como eje central para la gestión local de una de las zonas portuarias, turísticas y multiculturales más estratégicas del país.',
      mision:
        'Promover el desarrollo integral del cantón de Limón mediante la prestación eficiente de servicios públicos, el ordenamiento territorial y la participación ciudadana, garantizando una mejor calidad de vida para todos sus habitantes.',
      vision:
        'Ser un gobierno local moderno, eficiente, transparente e inclusivo, líder en el desarrollo sostenible, la innovación administrativa y la reactivación económica del Caribe costarricense.',
      valores: [
        'Transparencia y Rendición de Cuentas',
        'Responsabilidad Social y Ambiental',
        'Eficiencia en la Gestión Pública',
        'Integridad y Ética',
        'Inclusión y Respeto a la Diversidad Cultural',
      ],
      rol: [
        'Administración de servicios públicos locales (recolección de residuos, mantenimiento de vías cantonales, parques, áreas verdes y cementerios).',
        'Regulación del uso del suelo mediante el Plan Regulador Cantonal.',
        'Otorgamiento y fiscalización de licencias comerciales y patentes de licores.',
        'Planificación e impulso de proyectos socioeconómicos en los distritos del cantón: Limón, Valle La Estrella, Río Blanco y Matama.',
      ],
    },
  },
  {
    id: 'organizacion',
    color: 'primary-hover',
    title: 'Organización Municipal',
    summary: 'Cómo se organiza internamente',
    data: {
      descripcion:
        'La Municipalidad de Limón está estructurada en dos grandes áreas de decisión y gestión: el Gobierno Municipal (político-deliberativo) y la Administración Municipal (ejecutiva y operativa).',
      areas: [
        { nombre: 'Concejo Municipal', descripcion: 'Integrado por Regidores y Síndicos electos popularmente, encargado de aprobar presupuestos, reglamentos y políticas locales.' },
        { nombre: 'Alcaldía Municipal', descripcion: 'Dirige la administración ejecutiva y ejecuta los acuerdos tomados por el Concejo Municipal.' },
        { nombre: 'Dirección de Hacienda Municipal', descripcion: 'Gestiona los recursos financieros, la recaudación de tributos y la contabilidad institucional.' },
        { nombre: 'Dirección de Desarrollo Urbano e Infraestructura', descripcion: 'Planifica el ordenamiento territorial y ejecuta las obras de infraestructura cantonal.' },
        { nombre: 'Dirección de Servicios Municipales', descripcion: 'Vela por el aseo público, la recolección de residuos, el reciclaje y los espacios comunitarios.' },
      ],
      direcciones: [
        { nombre: 'Dirección de Administración y Servicios Internos', unidades: ['Recursos Humanos', 'Proveeduría', 'Informática', 'Archivo Central'] },
        { nombre: 'Dirección de Hacienda Municipal', unidades: ['Cobros y Recaudación', 'Contabilidad', 'Patentes y Licencias', 'Tesorería'] },
        { nombre: 'Dirección de Desarrollo Urbano e Infraestructura', unidades: ['Planificación Urbana', 'Control de Obras Privadas', 'Gestión Vial Cantonal', 'Catastro y Valoraciones'] },
        { nombre: 'Dirección de Servicios y Gestión Ambiental', unidades: ['Aseo y Residuos', 'Parques y Zonas Verdes', 'Cementerio Municipal', 'Gestión Ambiental'] },
      ],
    },
  },
  {
    id: 'directorio',
    color: 'secondary',
    title: 'Directorio',
    summary: 'Teléfonos, correos y oficinas',
    data: {
      descripcion: 'A continuación se detallan los contactos directos de las principales dependencias:',
      contactos: [
        { departamento: 'Central Telefónica / Recepción', telefono: '+506 2758-0000', correo: 'info@municlimon.go.cr' },
        { departamento: 'Alcaldía Municipal', telefono: '+506 2758-0001', correo: 'alcaldia@municlimon.go.cr' },
        { departamento: 'Secretaría del Concejo Municipal', telefono: '+506 2758-0002', correo: 'concejo@municlimon.go.cr' },
        { departamento: 'Plataforma de Servicios (Atención)', telefono: '+506 2758-0020', correo: 'servicios@municlimon.go.cr' },
        { departamento: 'Departamento de Patentes', telefono: '+506 2758-0035', correo: 'patentes@municlimon.go.cr' },
        { departamento: 'Cobros y Gestión de Morosidad', telefono: '+506 2758-0040', correo: 'cobros@municlimon.go.cr' },
        { departamento: 'Catastro y Valoraciones', telefono: '+506 2758-0050', correo: 'catastro@municlimon.go.cr' },
        { departamento: 'Unidad Técnica de Gestión Vial', telefono: '+506 2758-0055', correo: 'gestionvial@municlimon.go.cr' },
        { departamento: 'Gestión Ambiental y Reciclaje', telefono: '+506 2758-0060', correo: 'ambiental@municlimon.go.cr' },
        { departamento: 'Recursos Humanos (Talento Humano)', telefono: '+506 2758-0070', correo: 'rrhh@municlimon.go.cr' },
        { departamento: 'Oficina de la Mujer (OFIM)', telefono: '+506 2758-0080', correo: 'ofim@municlimon.go.cr' },
      ],
    },
  },
  {
    id: 'contacto',
    color: 'secondary-hover',
    title: 'Contacto',
    summary: 'Ubicación, horario y vías generales',
    data: {
      ubicacion: 'Edificio Municipal, frente al Parque Vargas (costado oeste). Calle 1, avenidas 2 y 3. Distrito Primero (Limón Centro), Cantón Central de Limón, Costa Rica.',
      horario: 'Lunes a viernes de 7:30 a.m. a 3:30 p.m. (jornada continua).',
      vias: [
        'Teléfono central: +506 2758-0000',
        'Sitio web oficial: www.municlimon.go.cr',
        'Formulario de consultas y peticiones (PQRS) disponible en la sección "Contacto / Atención Ciudadana" del portal web institucional.',
      ],
    },
  },
  {
    id: 'dependencias',
    color: 'accent',
    title: 'Dependencias municipales',
    summary: 'Áreas responsables y servicios',
    data: {
      descripcion: 'Cada dependencia atiende un área específica de servicios municipales:',
      dependencias: [
        { nombre: 'Plataforma de Servicios', descripcion: 'Ventanilla única de atención para emisión de certificaciones de uso de suelo, estado de cuenta, arreglos de pago, quejas y sugerencias.' },
        { nombre: 'Departamento de Patentes y Licencias', descripcion: 'Tramitación y renovación de patentes comerciales, licencias de licores y permisos para eventos o espectáculos públicos.' },
        { nombre: 'Unidad Técnica de Gestión Vial Cantonal (UTGVC)', descripcion: 'Planificación, construcción y mantenimiento de carreteras, caminos, puentes y sistemas de drenaje pluvial de la red vial cantonal.' },
        { nombre: 'Departamento de Catastro y Valoraciones', descripcion: 'Declaración de bienes inmuebles, actualización de planos catastrados y valoración de propiedades para fines tributarios.' },
        { nombre: 'Unidad de Gestión Ambiental', descripcion: 'Coordinación de la recolección ordinaria de residuos, proyectos de reciclaje, centros de acopio, reforestación y educación ambiental.' },
        { nombre: 'Oficina Municipal de la Mujer (OFIM)', descripcion: 'Capacitación profesional, apoyo al emprendimiento femenino y atención a situaciones de violencia intrafamiliar o equidad de género.' },
      ],
    },
  },
  {
    id: 'trabaje-con-nosotros',
    color: 'support',
    title: 'Trabaje con Nosotros',
    summary: 'Concursos y oportunidades laborales',
    data: {
      descripcion: 'La Municipalidad de Limón selecciona su personal mediante procesos públicos de reclutamiento basados en los principios de idoneidad, transparencia e igualdad de oportunidades.',
      convocatorias: [
        'El portal web institucional (sección "Trabaje con Nosotros" / "Empleo Público").',
        'Las redes sociales oficiales de la Municipalidad de Limón.',
      ],
      requisitos: [
        'Ser mayor de edad y presentar documento de identidad vigente (cédula de identidad costarricense o DIMEX).',
        'Cumplir con los requisitos académicos y de experiencia especificados en el perfil del puesto.',
        'Hoja de vida actualizada y firmada, adjuntando atestados.',
        'Hoja de delincuencia con vigencia no mayor a 3 meses.',
      ],
      proceso: [
        { numero: 1, texto: 'Publicación del concurso público y recepción de ofertas digitales o presenciales.' },
        { numero: 2, texto: 'Análisis de admisibilidad y cumplimiento de requisitos mínimos.' },
        { numero: 3, texto: 'Evaluación técnica, prueba de conocimientos, entrevista y examen psicométrico.' },
        { numero: 4, texto: 'Conformación de la terna finalista y nombramiento institucional.' },
      ],
      registro: {
        correo: 'rrhh@municlimon.go.cr',
        asunto: 'Oferta de Servicios - [Nombre completo] - [Profesión u Oficio]',
      },
    },
  },
];