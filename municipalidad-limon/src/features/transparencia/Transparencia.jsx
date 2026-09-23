import { useId, useMemo, useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Input from '../../components/ui/Input';
import Link from '../../components/ui/Link';
import './Transparencia.css';

const transparencyCategories = [
  {
    id: 'acceso-informacion',
    title: 'Acceso a la información',
    description:
      'Información institucional, personal municipal y orientación para solicitar contenido no publicado.',
    summary:
      'La ciudadanía puede conocer cómo se organiza la institución, quiénes ocupan sus puestos y cuáles son los canales disponibles para solicitar información pública.',
    groups: [
      {
        title: 'Personal y organización',
        items: [
          'Información de jerarcas y autoridades municipales.',
          'Escalafón, perfiles de puestos e índice salarial por puesto.',
          'Complementos salariales y dietas de integrantes del Concejo Municipal.',
          'Directorio telefónico y correos de las dependencias municipales.',
        ],
      },
      {
        title: 'Cómo solicitar información',
        items: [
          'Identifique el documento, dato o dependencia responsable.',
          'Indique el periodo que necesita y un medio para recibir respuesta.',
          'Envíe la solicitud por correo o preséntela mediante los canales de atención municipal.',
          'Si el contenido ya está publicado, solicite orientación para localizarlo.',
        ],
      },
    ],
    note:
      'El registro institucional consultado indica que la Municipalidad no cuenta con asesorías externas. Este dato debe actualizarse cuando exista una nueva publicación oficial.',
    documentIds: [],
  },
  {
    id: 'presupuestos-finanzas',
    title: 'Presupuestos y finanzas',
    description:
      'Planificación, ejecución y control de los recursos financieros municipales.',
    summary:
      'El presupuesto anual relaciona la proyección de ingresos, egresos y transferencias con los objetivos, programas y proyectos que la Municipalidad espera ejecutar.',
    groups: [
      {
        title: 'Ciclo presupuestario',
        items: [
          'Formulación del plan y presupuesto ordinario.',
          'Presupuestos extraordinarios y modificaciones durante el periodo.',
          'Registro y control de la ejecución presupuestaria.',
          'Liquidación y evaluación física y financiera del plan anual.',
        ],
      },
      {
        title: 'Información disponible',
        items: [
          'Evaluación física y financiera del Plan Operativo Anual 2024.',
          'Resultados presupuestarios incluidos en el Informe de Labores 2023.',
          'Archivo presupuestario publicado para los años 2016 a 2021.',
          'Consultas de ingresos y gastos registradas ante la Contraloría General de la República.',
        ],
      },
    ],
    note:
      'La serie presupuestaria localizada no contiene periodos posteriores a 2021 como conjunto independiente; por eso se presenta como archivo histórico y no como información financiera vigente.',
    documentIds: ['evaluacion-pao-2024', 'informe-labores-2023'],
  },
  {
    id: 'contratacion-publica',
    title: 'Contratación pública',
    description:
      'Compras municipales, procedimientos, adjudicaciones y contratos públicos.',
    summary:
      'Las compras de bienes y servicios se gestionan mediante SICOP, el sistema nacional donde se concentra la trazabilidad de cada procedimiento de contratación pública.',
    groups: [
      {
        title: 'Qué puede consultar',
        items: [
          'Plan de adquisiciones y necesidades de compra institucional.',
          'Carteles, condiciones y aclaraciones de cada procedimiento.',
          'Ofertas recibidas e informes técnicos de adjudicación.',
          'Contratos, resultados e histórico de contrataciones.',
        ],
      },
      {
        title: 'Ruta de consulta',
        items: [
          'Busque a la Municipalidad de Limón como institución compradora.',
          'Filtre por número de procedimiento, descripción o periodo.',
          'Revise el expediente electrónico y la secuencia de actuaciones.',
          'Consulte cartel, ofertas, adjudicación y contrato dentro del mismo expediente.',
        ],
      },
    ],
    note:
      'SICOP se mantiene como enlace externo porque es el sistema oficial nacional donde se tramitan y publican los expedientes, no una página informativa de la Municipalidad.',
    documentIds: ['sicop'],
  },
  {
    id: 'rendicion-cuentas',
    title: 'Rendición de cuentas',
    description:
      'Relación entre lo planificado, lo ejecutado y los resultados comunicados.',
    summary:
      'Esta área permite leer la gestión como un ciclo: la estrategia define prioridades, el plan operativo traduce esas prioridades en metas y los informes muestran avances, resultados y asuntos pendientes.',
    groups: [
      {
        title: 'Planificación',
        items: [
          'El Plan Estratégico Municipal 2024–2029 orienta la gestión de mediano plazo.',
          'Integra el marco institucional, análisis participativo y diagnóstico de la organización.',
          'Define políticas, objetivos y líneas de acción para las áreas estratégicas municipales.',
          'El Plan Operativo Anual vincula metas institucionales con recursos del presupuesto.',
        ],
      },
      {
        title: 'Seguimiento y resultados',
        items: [
          'La evaluación del PAO compara avance físico y ejecución financiera.',
          'Los informes de labores reúnen resultados de gestión por periodo.',
          'Los informes de Auditoría comunican hallazgos y recomendaciones de control.',
          'Las actas documentan decisiones tomadas por el Concejo Municipal.',
        ],
      },
    ],
    note:
      'Los documentos se muestran con su periodo para evitar comparar como contemporánea información producida en años distintos.',
    documentIds: [
      'plan-estrategico-2024-2029',
      'evaluacion-pao-2024',
      'informe-labores-2023',
    ],
  },
  {
    id: 'auditoria-interna',
    title: 'Auditoría Interna',
    description:
      'Fiscalización independiente, control interno, prevención y atención de denuncias.',
    summary:
      'La Auditoría Interna depende jerárquicamente del Concejo Municipal, pero ejerce sus funciones con independencia para evaluar riesgos, controles y procesos de dirección.',
    groups: [
      {
        title: 'Funciones principales',
        items: [
          'Realizar auditorías y estudios especiales sobre fondos y actividades municipales.',
          'Verificar la suficiencia del sistema de control interno y proponer mejoras.',
          'Asesorar al Concejo y advertir sobre consecuencias de decisiones o conductas.',
          'Preparar el plan anual de trabajo y dar seguimiento a recomendaciones.',
        ],
      },
      {
        title: 'Servicios de fiscalización',
        items: [
          'Informes de control interno, relaciones de hechos y seguimiento.',
          'Legalización de libros contables y otros registros institucionales.',
          'Servicios preventivos de asesoría, advertencia y capacitación.',
          'Recepción de denuncias relacionadas con el manejo de recursos públicos.',
        ],
      },
    ],
    note:
      'La oficina se ubica en el tercer piso del Palacio Municipal. El contacto institucional publicado es 2758-4444, extensión 206.',
    documentIds: ['auditoria-08-2019', 'auditoria-09-2019'],
  },
  {
    id: 'normativa',
    title: 'Normativa',
    description:
      'Leyes, reglamentos y procedimientos que orientan la actuación municipal.',
    summary:
      'El marco normativo reúne disposiciones nacionales y municipales, mientras que el manual de procesos explica cómo las dependencias convierten esas reglas en actividades institucionales.',
    groups: [
      {
        title: 'Marco legal general',
        items: [
          'Constitución Política, Código Municipal y Ley General de la Administración Pública.',
          'Código Electoral y normativa sobre consultas populares cantonales y distritales.',
          'Leyes de control interno, contratación, corrupción y administración financiera.',
          'Normativa de caminos, construcción, planificación urbana, residuos y accesibilidad.',
        ],
      },
      {
        title: 'Regulación y procesos municipales',
        items: [
          'Reglamentos de vehículos, estacionómetros, decomisos y ética municipal.',
          'Regulación de tarifas, becas y disposición de bienes en desuso.',
          'Procedimientos de planificación, proveeduría, tesorería y contabilidad.',
          'Procesos de patentes, atención ciudadana, catastro, obras y gestión ambiental.',
        ],
      },
    ],
    note:
      'El manual localizado fue aprobado en diciembre de 2018 y complementado en marzo de 2019 para la reorganización municipal y los procedimientos de Proveeduría y Bodega.',
    documentIds: [],
  },
  {
    id: 'concejo-municipal',
    title: 'Concejo Municipal',
    description:
      'Sesiones, acuerdos, actas y servicios documentales del órgano deliberativo.',
    summary:
      'El Concejo Municipal toma decisiones mediante sesiones. La Secretaría documenta esas actuaciones, comunica los acuerdos y extiende las certificaciones solicitadas.',
    groups: [
      {
        title: 'Actividad documental',
        items: [
          'Actas de sesiones ordinarias y extraordinarias.',
          'Acuerdos adoptados y comunicaciones derivadas de cada sesión.',
          'Certificaciones de documentos y acuerdos municipales.',
          'Archivo histórico publicado para los años 2019, 2020 y parte de 2021.',
        ],
      },
      {
        title: 'Funciones de la Secretaría',
        items: [
          'Asistir a las sesiones y levantar las actas.',
          'Transcribir, comunicar y notificar los acuerdos conforme a la ley.',
          'Recibir documentos y atender consultas de las personas contribuyentes.',
          'Dar seguimiento a acuerdos y preparar certificaciones solicitadas.',
        ],
      },
    ],
    note:
      'La Secretaría del Concejo publica como teléfono de atención el 2758-0319. Las actas localizadas se identifican como archivo histórico porque la serie visible no está completa ni actualizada.',
    documentIds: [],
  },
  {
    id: 'obras-proyectos',
    title: 'Obras y proyectos',
    description:
      'Planificación, formulación y seguimiento de infraestructura municipal y vial.',
    summary:
      'La gestión de obras comprende la planificación de infraestructura, la formulación y ejecución de proyectos municipales y la conservación de la red vial cantonal.',
    groups: [
      {
        title: 'Procesos relacionados',
        items: [
          'Actualización del plan de infraestructura municipal.',
          'Formulación, ejecución y seguimiento de proyectos de facilidades municipales.',
          'Programación y ejecución de obras de conservación de caminos.',
          'Seguimiento técnico de planes reguladores e inventarios de infraestructura vial.',
        ],
      },
      {
        title: 'Organización territorial',
        items: [
          'Distrito Limón Centro.',
          'Distrito Valle de la Estrella.',
          'Distrito Río Blanco.',
          'Distrito Matama.',
        ],
      },
    ],
    note:
      'La fuente consultada no ofrece un registro consolidado y vigente con presupuesto, avance y estado de cada obra. El rediseño evita atribuir estados que no pueden verificarse.',
    documentIds: ['plan-estrategico-2024-2029', 'informe-labores-2023'],
  },
  {
    id: 'datos-abiertos',
    title: 'Datos abiertos',
    description:
      'Conjuntos de datos públicos disponibles para consulta, descarga y reutilización.',
    summary:
      'La publicación de datos abiertos busca que la información municipal pueda localizarse, comprenderse y reutilizarse sin depender de una solicitud individual.',
    groups: [
      {
        title: 'Conjuntos identificados',
        items: [
          'Presupuesto público y proyecciones anuales de ingresos y gastos.',
          'Ejecución y liquidación del presupuesto municipal.',
          'Contratación administrativa y expedientes disponibles en SICOP.',
          'Estadísticas o registros producidos por las áreas municipales.',
        ],
      },
      {
        title: 'Condiciones de apertura',
        items: [
          'La fuente menciona archivos PDF, HTML, DOCX y XLSX.',
          'Los archivos publicados no se encuentran disponibles para descarga masiva.',
          'El contenido institucional declara una licencia Creative Commons BY-SA 4.0.',
          'Cada conjunto debe conservar periodo, formato y entidad responsable.',
        ],
      },
    ],
    note:
      'El archivo presupuestario visible comprende 2016–2021. Su antigüedad y la falta de descarga masiva se comunican como limitaciones, no como características deseables del nuevo portal.',
    documentIds: ['sicop'],
  },
];

const transparencyDocuments = [
  {
    id: 'plan-estrategico-2024-2029',
    title: 'Plan Estratégico Municipal 2024–2029',
    description:
      'Define el marco institucional, los objetivos y las líneas de acción que orientan la gestión municipal de mediano plazo.',
    period: '2024–2029',
    format: 'PDF',
    source: 'Planificación institucional',
    categoryIds: ['rendicion-cuentas', 'obras-proyectos'],
    to: '/error-interno',
    featured: true,
  },
  {
    id: 'evaluacion-pao-2024',
    title: 'Evaluación física y financiera del PAO',
    description:
      'Presenta el seguimiento anual de metas, ejecución de recursos y medidas asociadas al Plan Operativo Anual.',
    period: '2024',
    format: 'PDF',
    source: 'Planificación institucional',
    categoryIds: ['presupuestos-finanzas', 'rendicion-cuentas'],
    to: '/error-interno',
    featured: true,
  },
  {
    id: 'informe-labores-2023',
    title: 'Informe de Labores 2023',
    description:
      'Reúne resultados institucionales sobre finanzas, infraestructura, atención ciudadana y servicios municipales.',
    period: '2023',
    format: 'PDF',
    source: 'Alcaldía Municipal',
    categoryIds: [
      'rendicion-cuentas',
      'presupuestos-finanzas',
      'obras-proyectos',
    ],
    to: '/error-interno',
    featured: true,
  },
  {
    id: 'auditoria-08-2019',
    title: 'Informe de Auditoría N.° 08-2019',
    description:
      'Estudio de control interno sobre el cumplimiento de horarios del personal municipal de CECOEXA.',
    period: '2019',
    format: 'PDF',
    source: 'Auditoría Interna',
    categoryIds: ['auditoria-interna', 'rendicion-cuentas'],
    to: '/error-interno',
  },
  {
    id: 'auditoria-09-2019',
    title: 'Informe de Auditoría N.° 09-2019',
    description:
      'Estudio especial sobre el uso y control de la flotilla vehicular municipal.',
    period: '2019',
    format: 'PDF',
    source: 'Auditoría Interna',
    categoryIds: ['auditoria-interna', 'rendicion-cuentas'],
    to: '/error-interno',
  },
  {
    id: 'sicop',
    title: 'Sistema Integrado de Compras Públicas',
    description:
      'Sistema nacional para consultar planes de compra, carteles, ofertas, adjudicaciones y contratos.',
    period: 'Consulta en línea',
    format: 'Sistema',
    source: 'SICOP',
    categoryIds: ['contratacion-publica', 'datos-abiertos'],
    href: 'https://www.sicop.go.cr/',
    external: true,
  },
];

const categoryById = new Map(
  transparencyCategories.map((category) => [category.id, category]),
);

const documentById = new Map(
  transparencyDocuments.map((document) => [document.id, document]),
);

function normalizeText(value) {
  return value
    .toLocaleLowerCase('es')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function getDocumentLinkProps(document) {
  if (document.external) {
    return { href: document.href, external: true };
  }

  return {
    to: document.to,
    state: { resourceTitle: document.title },
  };
}

function getDocumentAriaLabel(document) {
  if (document.external) {
    return `${document.title}, abrir sistema externo en una pestaña nueva`;
  }

  return `${document.title}, consultar disponibilidad`;
}

function Transparencia() {
  const searchId = useId();
  const categorySelectId = useId();
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    transparencyCategories[0].id,
  );
  const [query, setQuery] = useState('');

  const selectedCategory =
    categoryById.get(selectedCategoryId) || transparencyCategories[0];
  const selectedDocuments = selectedCategory.documentIds
    .map((documentId) => documentById.get(documentId))
    .filter(Boolean);
  const featuredDocuments = transparencyDocuments.filter(
    (document) => document.featured,
  );

  const normalizedQuery = normalizeText(query.trim());
  const visibleDocuments = useMemo(() => {
    if (!normalizedQuery) {
      return transparencyDocuments;
    }

    return transparencyDocuments.filter((document) => {
      const categoryNames = document.categoryIds.map(
        (categoryId) => categoryById.get(categoryId)?.title || '',
      );
      const searchableContent = normalizeText(
        [
          document.title,
          document.description,
          document.period,
          document.format,
          document.source,
          ...categoryNames,
        ].join(' '),
      );

      return searchableContent.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  return (
    <div className="transparency">
      <PageHeader
        title="Transparencia"
        description="Comprenda la gestión municipal y consulte documentos públicos organizados por tema, periodo y fuente."
        breadcrumbItems={[{ label: 'Transparencia' }]}
      />

      <section
        className="transparency__intro"
        aria-labelledby="transparency-intro-title"
      >
        <div className="container transparency__intro-grid">
          <div className="transparency__intro-content">
            <p className="transparency__eyebrow">Información pública clara</p>
            <h2 id="transparency-intro-title">
              La información esencial, explicada en este portal
            </h2>
            <p>
              Reunimos y reorganizamos el contenido institucional para que pueda
              entenderlo sin recorrer páginas dispersas. Solo deberá salir del
              portal cuando decida abrir un documento o utilizar un sistema
              público especializado.
            </p>
          </div>

          <dl className="transparency__overview-list">
            <div>
              <dt>Áreas de consulta</dt>
              <dd>{transparencyCategories.length}</dd>
            </div>
            <div>
              <dt>Documentos y sistemas</dt>
              <dd>{transparencyDocuments.length}</dd>
            </div>
            <div>
              <dt>Plan estratégico vigente</dt>
              <dd>2024–2029</dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        className="section transparency__featured-section"
        aria-labelledby="transparency-featured-title"
      >
        <div className="container">
          <div className="transparency__section-heading transparency__section-heading--featured">
            <div>
              <p className="transparency__eyebrow">Lectura prioritaria</p>
              <h2 id="transparency-featured-title">
                Planificación y resultados recientes
              </h2>
            </div>
          </div>

          <div className="transparency__featured-grid">
            {featuredDocuments.map((document) => (
              <article key={document.id} className="transparency__featured-card">
                <div className="transparency__featured-topline">
                  <span className="transparency__featured-format">
                    {document.format}
                  </span>
                  <span>{document.period}</span>
                </div>
                <p className="transparency__document-type">
                  {document.source}
                </p>
                <h3>{document.title}</h3>
                <p>{document.description}</p>
                <Link
                  {...getDocumentLinkProps(document)}
                  aria-label={getDocumentAriaLabel(document)}
                >
                  Consultar documento
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section transparency__explorer-section"
        aria-labelledby="transparency-explorer-title"
      >
        <div className="container">
          <div className="transparency__section-heading">
            <div>
              <p className="transparency__eyebrow">Contenido integrado</p>
              <h2 id="transparency-explorer-title">
                Explore la gestión municipal por tema
              </h2>
            </div>
            <p>
              Seleccione un área para consultar su información directamente en
              esta página.
            </p>
          </div>

          <div className="transparency__mobile-category">
            <label htmlFor={categorySelectId}>Área de transparencia</label>
            <select
              id={categorySelectId}
              value={selectedCategoryId}
              onChange={(event) => setSelectedCategoryId(event.target.value)}
            >
              {transparencyCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>

          <div className="transparency__explorer">
            <nav
              className="transparency__category-nav"
              aria-label="Áreas de transparencia"
            >
              {transparencyCategories.map((category, index) => {
                const isSelected = category.id === selectedCategory.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    className={`transparency__category-button ${
                      isSelected
                        ? 'transparency__category-button--selected'
                        : ''
                    }`}
                    aria-pressed={isSelected}
                    aria-controls="transparency-category-detail"
                    onClick={() => setSelectedCategoryId(category.id)}
                  >
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {category.title}
                  </button>
                );
              })}
            </nav>

            <article
              id="transparency-category-detail"
              className="transparency__category-detail"
            >
              <header className="transparency__detail-header">
                <p className="transparency__detail-label">
                  Información integrada
                </p>
                <h2>{selectedCategory.title}</h2>
                <p>{selectedCategory.description}</p>
              </header>

              <p className="transparency__detail-summary">
                {selectedCategory.summary}
              </p>

              <div className="transparency__detail-groups">
                {selectedCategory.groups.map((group) => (
                  <section key={group.title}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <aside className="transparency__detail-note">
                <span aria-hidden="true">i</span>
                <div>
                  <h3>Nota sobre la información</h3>
                  <p>{selectedCategory.note}</p>
                </div>
              </aside>

              {selectedDocuments.length > 0 ? (
                <section className="transparency__related-documents">
                  <h3>Documentos relacionados</h3>
                  <div>
                    {selectedDocuments.map((document) => (
                      <Link
                        key={document.id}
                        {...getDocumentLinkProps(document)}
                        aria-label={getDocumentAriaLabel(document)}
                      >
                        {document.title}
                      </Link>
                    ))}
                  </div>
                </section>
              ) : (
                <section className="transparency__related-documents">
                  <h3>Archivo digital</h3>
                  <p>
                    La consulta documental detallada de esta área se encuentra
                    en proceso de preparación.
                  </p>
                  <Link
                    to="/en-construccion"
                    state={{
                      resourceTitle: `Archivo de ${selectedCategory.title}`,
                    }}
                  >
                    Consultar avance
                  </Link>
                </section>
              )}
            </article>
          </div>
        </div>
      </section>

      <section
        className="section transparency__library-section"
        aria-labelledby="transparency-library-title"
      >
        <div className="container">
          <div className="transparency__library-header">
            <div>
              <p className="transparency__eyebrow">Biblioteca pública</p>
              <h2 id="transparency-library-title">Documentos y sistemas</h2>
              <p>
                Consulte los archivos originales que respaldan la información
                resumida en este portal.
              </p>
            </div>
            <p className="transparency__results" aria-live="polite">
              {visibleDocuments.length === 1
                ? '1 resultado'
                : `${visibleDocuments.length} resultados`}
            </p>
          </div>

          <div className="transparency__search">
            <Input
              id={searchId}
              label="Buscar en la biblioteca"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ejemplo: presupuesto, auditoría o plan"
              helperText="Busque por tema, periodo, formato o dependencia."
            />
          </div>

          {visibleDocuments.length > 0 ? (
            <div className="transparency__document-list">
              {visibleDocuments.map((document) => (
                <article key={document.id} className="transparency__document-row">
                  <span className="transparency__format" aria-hidden="true">
                    {document.format}
                  </span>
                  <div className="transparency__document-main">
                    <h3>{document.title}</h3>
                    <p>{document.description}</p>
                    <p className="transparency__document-meta">
                      <span>{document.period}</span>
                      <span>{document.source}</span>
                    </p>
                  </div>
                  <Link
                    {...getDocumentLinkProps(document)}
                    aria-label={getDocumentAriaLabel(document)}
                  >
                    {document.format === 'Sistema'
                      ? 'Consultar sistema'
                      : 'Consultar PDF'}
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="transparency__empty-state" role="status">
              <h3>No encontramos documentos con ese criterio</h3>
              <p>
                Pruebe con una palabra más general o consulte nuevamente toda la
                biblioteca.
              </p>
              <button type="button" onClick={() => setQuery('')}>
                Limpiar búsqueda
              </button>
            </div>
          )}
        </div>
      </section>

      <section
        className="section transparency__request-section"
        aria-labelledby="transparency-request-title"
      >
        <div className="container transparency__request-card">
          <div>
            <p className="transparency__eyebrow">Acceso a la información</p>
            <h2 id="transparency-request-title">
              ¿Necesita un documento que no está publicado?
            </h2>
            <p>
              Indique el documento, el periodo y la dependencia relacionada para
              que la Municipalidad pueda orientar su solicitud.
            </p>
          </div>
          <div className="transparency__request-actions">
            <Link href="mailto:alcaldia@municlimon.go.cr" variant="arrow">
              alcaldia@municlimon.go.cr
            </Link>
            <Link href="tel:+50627584444" variant="subtle">
              (506) 2758-4444
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Transparencia;
