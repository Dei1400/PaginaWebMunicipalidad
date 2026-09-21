// src/data/gobiernoMunicipal.js

export const gobiernoSecciones = [
  {
    slug: 'alcaldia',
    titulo: 'Alcaldía',
    resumen: 'Quién dirige la administración municipal, sus funciones, equipo de despacho y canales de contacto.',
    contenido: [
      'La Alcaldía es la máxima autoridad administrativa de la Municipalidad de Limón. Es responsable de dirigir la gestión municipal, ejecutar los acuerdos del Concejo Municipal y representar legalmente al cantón ante otras instituciones.',
      'El despacho de la Alcaldía está conformado por la persona alcaldesa o alcalde titular y las vicealcaldías de apoyo. [Nombre de la persona alcaldesa/alcalde] encabeza la administración durante el período vigente.',
      'Entre sus principales informes a la ciudadanía se encuentran el informe de labores anual, los informes de gestión y los planes municipales, disponibles para consulta y descarga en esta sección.',
    ],
    contacto: { telefono: '2758-4444', correo: 'alcaldia@municlimon.go.cr' },
  },
  {
    slug: 'vicealcaldias',
    titulo: 'Vicealcaldías',
    resumen: 'Presentación de las vicealcaldías, sus funciones, áreas delegadas y programas relacionados.',
    contenido: [
      'La Municipalidad de Limón cuenta con una primera y una segunda vicealcaldía, cuyas funciones están respaldadas por el Código Municipal y se ejercen en apoyo directo a la Alcaldía.',
      'La primera vicealcaldía asume la gestión municipal en ausencia de la persona alcaldesa o alcalde, además de coordinar áreas específicas que le sean delegadas.',
      'La segunda vicealcaldía suele encargarse de la gestión de servicios y proyectos comunitarios, así como de programas de desarrollo y protección social (oficina de la mujer, intermediación de empleo, CECUDI, CECUAM, actividades educativas, culturales y deportivas).',
    ],
  },
  {
    slug: 'consejo-municipal',
    titulo: 'Concejo Municipal',
    resumen: 'Quiénes integran el Concejo, qué decide, cuándo sesiona y cómo consultar actas, acuerdos y comisiones.',
    contenido: [
      'El Concejo Municipal es el órgano deliberativo del gobierno local, integrado por regidoras y regidores propietarios y suplentes, junto con síndicas y síndicos de los distritos del cantón.',
      'Entre sus principales funciones están la aprobación del presupuesto municipal, la fiscalización de la administración, la creación de comisiones de trabajo y la toma de acuerdos sobre asuntos de interés cantonal.',
      'En esta sección podrá consultar la conformación actual del Concejo, el detalle de cada puesto, la información de contacto de sus integrantes y el acceso a actas, acuerdos y comisiones municipales.',
    ],
  },
  {
    slug: 'secretaria-consejo',
    titulo: 'Secretaría del Concejo',
    resumen: 'Funciones de la Secretaría, contacto, solicitudes relacionadas y acceso a documentos del Concejo.',
    contenido: [
      'La Secretaría del Concejo Municipal es la dependencia encargada de levantar las actas de las sesiones, tramitar la correspondencia dirigida al Concejo y custodiar los acuerdos y documentos oficiales.',
      'A través de esta oficina la ciudadanía puede solicitar certificaciones de acuerdos, dar seguimiento a gestiones presentadas ante el Concejo y acceder a los documentos públicos generados en las sesiones.',
    ],
    contacto: { telefono: '2758-4444', correo: 'secretariaconcejo@municlimon.go.cr' },
  },
  {
    slug: 'sesiones-municipales',
    titulo: 'Sesiones municipales',
    resumen: 'Calendario de sesiones ordinarias y extraordinarias, y transmisión por canales oficiales.',
    contenido: [
      'El Concejo Municipal sesiona de forma ordinaria cada semana en el salón de sesiones municipal, y de forma extraordinaria cuando la agenda cantonal lo requiere.',
      'En esta sección se podrá consultar el calendario de sesiones, los horarios de atención asociados y los enlaces a la transmisión en vivo por los canales oficiales de la Municipalidad.',
    ],
  },
  {
    slug: 'periodos-anteriores',
    titulo: 'Períodos anteriores',
    resumen: 'Información histórica de autoridades, integración del Concejo y documentación de períodos pasados.',
    contenido: [
      'Esta sección conserva un archivo histórico con la integración de autoridades municipales, alcaldías y concejos de períodos administrativos anteriores.',
      'Su propósito es mantener la trazabilidad institucional y permitir a la ciudadanía consultar acuerdos, informes y documentación correspondientes a gestiones pasadas.',
    ],
  },
];