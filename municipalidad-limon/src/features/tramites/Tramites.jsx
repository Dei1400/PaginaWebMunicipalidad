import { useId, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import heroBg from '../../../public/images/hero.jpeg';
import municipalLogo from '../../assets/logo.svg';
import Breadcrumb from '../../components/common/Breadcrumb';
import Link from '../../components/ui/Link';
import './Tramites.css';

const tramiteCategories = [
  {
    id: 'patentes',
    icon: 'store',
    title: 'Patentes',
    description:
      'Gestiones para solicitar, renovar, modificar, trasladar o cerrar una patente comercial.',
    actions: [
      'Solicitar una patente comercial o provisional',
      'Renovar o actualizar una patente existente',
      'Trasladar, traspasar, ampliar o eliminar una patente',
      'Presentar la declaración jurada del impuesto de patentes',
    ],
    requirements: [
      'Formulario correspondiente a la gestión',
      'Identificación de la persona solicitante o personería jurídica',
      'Documentación de la actividad comercial solicitada',
    ],
    office: 'Área de Rentas y Patentes',
    contact: 'rentas@municlimon.go.cr · 2758-7220 / 2758-4444 ext. 112',
    contactHref: 'mailto:rentas@municlimon.go.cr',
    resources: [
      {
        title: 'Solicitud de patente comercial',
        description:
          'Formulario publicado por Rentas para iniciar una licencia comercial.',
        kind: 'error',
      },
      {
        title: 'Cambios sobre una patente existente',
        description:
          'Formularios para traslado, traspaso, ampliación o eliminación de la licencia.',
        kind: 'error',
      },
    ],
  },
  {
    id: 'impuestos-pagos',
    icon: 'payment',
    title: 'Impuestos y pagos',
    description:
      'Consulte obligaciones municipales, estados de cuenta y opciones de pago.',
    actions: [
      'Consultar obligaciones municipales pendientes',
      'Solicitar un estado de cuenta',
      'Reportar un pago por depósito o transferencia',
      'Solicitar un arreglo de pago',
    ],
    requirements: [
      'Número de cédula o identificación tributaria',
      'Número de finca o número de patente, si aplica',
      'Correo electrónico y teléfono de contacto',
      'Comprobante de pago cuando corresponda',
    ],
    office: 'Departamento de Cobros',
    contact: 'cobros@municlimon.go.cr · 2758-4444 / 2798-1101',
    contactHref: 'mailto:cobros@municlimon.go.cr',
    resources: [
      {
        title: 'Consulta de pendientes de cobro',
        description:
          'Sistema del IFAM enlazado por la Municipalidad para consultar obligaciones pendientes.',
        kind: 'external',
        href: 'https://cobro.ifam.go.cr/consultamlim/Consulta.aspx',
      },
      {
        title: 'Solicitud de estado de cuenta',
        description:
          'Formulario oficial para solicitar el estado del periodo actual o del año completo.',
        kind: 'external',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSfY_jYKsqMnYyj2BgiVyJduCDF4Z3XhoKhVP4AH3PsZnaQFzw/viewform',
      },
      {
        title: 'Solicitud de arreglo de pago',
        description:
          'Documento publicado por Cobros, actualmente con disponibilidad inestable.',
        kind: 'error',
      },
    ],
  },
  {
    id: 'propiedades-catastro',
    icon: 'property',
    title: 'Propiedades y catastro',
    description:
      'Gestiones de bienes inmuebles, catastro, declaraciones y certificaciones.',
    actions: [
      'Presentar una declaración de bienes inmuebles',
      'Solicitar uso de suelo, alineamiento, visado o resello',
      'Gestionar una exoneración o certificación de valor',
    ],
    requirements: [
      'Identificación de la persona propietaria o representante legal',
      'Número de finca, certificación literal o plano catastrado',
      'Documentos de respaldo específicos para la gestión',
    ],
    office: 'Catastro y Bienes Inmuebles',
    contact: '2758-4444 · Catastro ext. 215 · Bienes Inmuebles ext. 208 o 209',
    contactHref: 'tel:+50627584444',
    resources: [
      {
        title: 'Solicitud de uso de suelo',
        description:
          'Formulario de Catastro para consultar la compatibilidad de una actividad con su ubicación.',
        kind: 'error',
      },
      {
        title: 'Requisitos para visado o resello',
        description:
          'Documentos orientativos publicados para planos y trámites catastrales.',
        kind: 'error',
      },
      {
        title: 'Declaraciones y exoneraciones',
        description:
          'Estamos preparando una guía unificada para identificar cada caso de bienes inmuebles.',
        kind: 'construction',
      },
    ],
  },
  {
    id: 'zmt',
    icon: 'coast',
    title: 'Zona Marítimo Terrestre',
    description:
      'Concesiones, permisos y documentación relacionados con la Zona Marítimo Terrestre.',
    actions: [
      'Presentar una solicitud de concesión',
      'Completar la información de la persona solicitante',
      'Consultar el estado de una gestión ZMT',
    ],
    requirements: [
      'Formulario de concesión e información de la persona solicitante',
      'Documento de identificación o personería jurídica',
      'Plano, ubicación y documentos de respaldo',
    ],
    office: 'Unidad de Zona Marítimo Terrestre',
    contact: '2758-4444',
    contactHref: 'tel:+50627584444',
    resources: [
      {
        title: 'Solicitud de concesión',
        description:
          'Formulario publicado para iniciar la gestión sobre la franja costera del cantón.',
        kind: 'error',
      },
      {
        title: 'Información de la persona solicitante',
        description:
          'Documento complementario requerido por la Unidad de Zona Marítimo Terrestre.',
        kind: 'error',
      },
    ],
  },
  {
    id: 'mercado-comercio',
    icon: 'market',
    title: 'Mercado y comercio',
    description:
      'Solicitudes para el mercado municipal, plazas, espacios comerciales y permisos asociados.',
    actions: [
      'Solicitar el alquiler de un espacio comercial',
      'Consultar requisitos del mercado municipal',
      'Gestionar la modificación o rectificación de un local',
    ],
    requirements: [
      'Solicitud dirigida a la Unidad de Mercado',
      'Documento de identificación',
      'Información de la actividad o espacio solicitado',
    ],
    office: 'Unidad de Mercado y Plazas',
    contact: '2798-2682',
    contactHref: 'tel:+50627982682',
    resources: [
      {
        title: 'Solicitud de alquiler de un local',
        description:
          'La guía digital se encuentra en preparación; la Unidad de Mercado brinda orientación directa.',
        kind: 'construction',
      },
      {
        title: 'Modificación o rectificación de un local',
        description:
          'Estamos estructurando los requisitos antes de incorporarlos al portal.',
        kind: 'construction',
      },
    ],
  },
  {
    id: 'formularios',
    icon: 'forms',
    title: 'Formularios',
    description:
      'Encuentre formularios digitales y descargables organizados por tipo de gestión.',
    actions: [
      'Localizar formularios de patentes',
      'Localizar formularios de catastro y bienes inmuebles',
      'Localizar formularios de ingeniería y permisos',
    ],
    requirements: [
      'Seleccione el formulario según su gestión',
      'Complete todos los campos obligatorios',
      'Adjunte los documentos indicados en cada formulario',
    ],
    office: 'Ventanilla Única Municipal',
    contact: 'ventanilla.unica@municlimon.go.cr · 2758-4444',
    contactHref: 'mailto:ventanilla.unica@municlimon.go.cr',
    resources: [
      {
        title: 'Formularios de patentes',
        description:
          'Solicitudes comerciales, traslados, traspasos y otras gestiones de licencias.',
        kind: 'error',
      },
      {
        title: 'Formularios de catastro',
        description:
          'Uso de suelo, alineamiento, visados, resellos y visto bueno de ubicación.',
        kind: 'error',
      },
      {
        title: 'Formularios de ingeniería',
        description:
          'La nueva biblioteca para obras, movimientos de tierra y aguas pluviales está en preparación.',
        kind: 'construction',
      },
    ],
  },
];

const resourceLabels = {
  construction: 'Contenido en preparación',
  error: 'Disponibilidad temporal',
  external: 'Sistema oficial externo',
};

function normalizeSearchText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es');
}

function TramiteIcon({ name }) {
  const commonProps = {
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (name === 'payment') {
    return (
      <svg {...commonProps}>
        <rect x="6" y="11" width="36" height="26" rx="4" />
        <path d="M6 19h36M12 30h9" />
      </svg>
    );
  }

  if (name === 'property') {
    return (
      <svg {...commonProps}>
        <path d="M7 22 24 8l17 14M11 20v20h26V20M19 40V28h10v12" />
      </svg>
    );
  }

  if (name === 'coast') {
    return (
      <svg {...commonProps}>
        <path d="M5 17c5 0 5-4 10-4s5 4 10 4 5-4 10-4 5 4 8 4M5 26c5 0 5-4 10-4s5 4 10 4 5-4 10-4 5 4 8 4M5 35c5 0 5-4 10-4s5 4 10 4 5-4 10-4 5 4 8 4" />
      </svg>
    );
  }

  if (name === 'market') {
    return (
      <svg {...commonProps}>
        <path d="M9 20v20h30V20M6 20h36L38 9H10zM15 20v-3M24 20v-3M33 20v-3M17 40V29h14v11" />
      </svg>
    );
  }

  if (name === 'forms') {
    return (
      <svg {...commonProps}>
        <path d="M13 5h16l8 8v30H13zM29 5v9h8M19 23h12M19 30h12M19 37h8" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M7 20h34L37 9H11zM10 20v21h28V20M16 20v-3M24 20v-3M32 20v-3M18 41V29h12v12" />
    </svg>
  );
}

function TramiteResourceLink({ resource, categoryId }) {
  if (resource.kind === 'external') {
    return (
      <Link
        href={resource.href}
        external
        className="tramites__resource-link"
        aria-label={`${resource.title}, abre un sistema oficial externo`}
      >
        Abrir sistema
      </Link>
    );
  }

  return (
    <Link
      to={resource.kind === 'error' ? '/error-interno' : '/en-construccion'}
      state={{
        resourceTitle: resource.title,
        returnTo: `/tramites/${categoryId}`,
        returnLabel: 'Volver a Trámites',
      }}
      variant="arrow"
      className="tramites__resource-link"
    >
      Consultar estado
    </Link>
  );
}

function Tramites() {
  const searchId = useId();
  const categoriesHeadingRef = useRef(null);
  const detailHeadingRef = useRef(null);
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [query, setQuery] = useState('');

  const requestedCategoryId = tramiteCategories.some(
    (category) => category.id === categoryId,
  )
    ? categoryId
    : tramiteCategories[0].id;

  const normalizedQuery = normalizeSearchText(query.trim());
  const visibleCategories = useMemo(() => {
    if (!normalizedQuery) {
      return tramiteCategories;
    }

    return tramiteCategories.filter((category) => {
      const searchableContent = [
        category.title,
        category.description,
        category.office,
        category.contact,
        ...category.actions,
        ...category.requirements,
        ...category.resources.flatMap((resource) => [
          resource.title,
          resource.description,
        ]),
      ].join(' ');

      return normalizeSearchText(searchableContent).includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  const selectedCategory =
    visibleCategories.find(
      (category) => category.id === requestedCategoryId,
    ) ||
    visibleCategories[0] ||
    null;

  function handleSearchSubmit(event) {
    event.preventDefault();
    categoriesHeadingRef.current?.focus();
  }

  function clearSearch() {
    setQuery('');
    requestAnimationFrame(() => document.getElementById(searchId)?.focus());
  }

  function handleCategorySelect(nextCategoryId) {
    navigate(`/tramites/${nextCategoryId}`, {
      replace: Boolean(categoryId),
    });

    if (window.matchMedia('(max-width: 768px)').matches) {
      requestAnimationFrame(() => detailHeadingRef.current?.focus());
    }
  }

  return (
    <main className="tramites">
      <section className="tramites__hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="tramites__hero-overlay">
          <div className="container">
            <div className="tramites__hero-content">
              <div className="tramites__brand">
                <div className="tramites__brand-mark" aria-hidden="true">
                  <img src={municipalLogo} alt="" />
                </div>
                <div className="tramites__brand-name">
                  <strong>Municipalidad de Limón</strong>
                </div>
              </div>

              <form
                className="tramites__hero-search"
                onSubmit={handleSearchSubmit}
                role="search"
              >
                <label htmlFor={searchId} className="tramites__search-label">
                  Buscar trámites municipales
                </label>
                <input
                  id={searchId}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="¿Qué trámite necesita encontrar?"
                />
                <button type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        className="tramites__categories-section"
        aria-labelledby="tramites-categories-title"
      >
        <div className="container tramites__catalog-container">
          <Breadcrumb items={[{ label: 'Trámites' }]} />

          <div className="tramites__section-heading">
            <div>
              <h1
                id="tramites-categories-title"
                ref={categoriesHeadingRef}
                tabIndex="-1"
              >
                Trámites por área municipal
              </h1>
              <p>
                Encuentre la gestión que necesita, revise los requisitos y
                confirme el canal de atención correspondiente.
              </p>
            </div>
            <p className="tramites__results" aria-live="polite">
              {visibleCategories.length === 1
                ? '1 categoría encontrada'
                : `${visibleCategories.length} categorías encontradas`}
            </p>
          </div>

          {query && (
            <button
              type="button"
              className="tramites__clear-search"
              onClick={clearSearch}
            >
              Limpiar búsqueda
            </button>
          )}

          {visibleCategories.length > 0 ? (
            <div className="tramites__category-grid">
              {visibleCategories.map((category) => {
                const isSelected = category.id === selectedCategory?.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    className={`tramites__category ${isSelected ? 'tramites__category--selected' : ''}`}
                    aria-pressed={isSelected}
                    aria-controls="tramite-detail-panel"
                    onClick={() => handleCategorySelect(category.id)}
                  >
                    <span
                      className="tramites__category-icon"
                      aria-hidden="true"
                    >
                      <TramiteIcon name={category.icon} />
                    </span>
                    <span className="tramites__category-content">
                      <span className="tramites__category-title">
                        {category.title}
                      </span>
                      <span className="tramites__category-description">
                        {category.description}
                      </span>
                      <span className="tramites__category-action">
                        Ver {category.actions.length}{' '}
                        {category.actions.length === 1 ? 'gestión' : 'gestiones'}
                        <span aria-hidden="true"> →</span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="tramites__empty-state">
              <span aria-hidden="true">?</span>
              <div>
                <h3>No encontramos un trámite con esa búsqueda</h3>
                <p>
                  Pruebe con una palabra más general, como “pago”, “propiedad”
                  o “formulario”.
                </p>
                <button
                  type="button"
                  className="tramites__empty-button"
                  onClick={clearSearch}
                >
                  Ver todas las categorías
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {selectedCategory && visibleCategories.length > 0 && (
        <section
          id="tramite-detail-panel"
          className="tramites__detail-section"
          aria-labelledby="tramite-detail-title"
        >
          <div className="container">
            <div className="tramites__detail">
              <div className="tramites__detail-heading">
                <div className="tramites__detail-title-wrap">
                  <span
                    className="tramites__category-icon"
                    aria-hidden="true"
                  >
                    <TramiteIcon name={selectedCategory.icon} />
                  </span>
                  <div>
                    <p className="tramites__detail-label">
                      Orientación del trámite
                    </p>
                    <h2
                      id="tramite-detail-title"
                      ref={detailHeadingRef}
                      tabIndex="-1"
                    >
                      {selectedCategory.title}
                    </h2>
                  </div>
                </div>
                <p>{selectedCategory.description}</p>
              </div>

              <div className="tramites__detail-grid">
                <section>
                  <h3>Gestiones disponibles</h3>
                  <ul className="tramites__action-list">
                    {selectedCategory.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3>Documentos habituales</h3>
                  <ul className="tramites__requirement-list">
                    {selectedCategory.requirements.map((requirement) => (
                      <li key={requirement}>{requirement}</li>
                    ))}
                  </ul>
                  <p className="tramites__requirements-note">
                    Los requisitos pueden variar según el caso. Confírmelos con
                    el área responsable antes de presentar su solicitud.
                  </p>
                </section>
              </div>

              <section
                className="tramites__resources"
                aria-labelledby="tramites-resources-title"
              >
                <div className="tramites__resources-heading">
                  <div>
                    <p className="tramites__detail-label">Siguiente paso</p>
                    <h3 id="tramites-resources-title">
                      Recursos para esta categoría
                    </h3>
                  </div>
                  <p>
                    Cada recurso indica si está disponible, abre un sistema
                    oficial o presenta una incidencia temporal.
                  </p>
                </div>

                <div className="tramites__resource-grid">
                  {selectedCategory.resources.map((resource) => (
                    <article
                      key={resource.title}
                      className={`tramites__resource-card tramites__resource-card--${resource.kind}`}
                    >
                      <p className="tramites__resource-status">
                        {resourceLabels[resource.kind]}
                      </p>
                      <h4>{resource.title}</h4>
                      <p>{resource.description}</p>
                      <TramiteResourceLink
                        resource={resource}
                        categoryId={selectedCategory.id}
                      />
                    </article>
                  ))}
                </div>
              </section>

              <div className="tramites__detail-footer">
                <div>
                  <p className="tramites__detail-label">Área responsable</p>
                  <p className="tramites__office">{selectedCategory.office}</p>
                  <p className="tramites__contact">{selectedCategory.contact}</p>
                </div>
                <Link href={selectedCategory.contactHref} variant="arrow">
                  Contactar al área
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section
        className="section tramites__steps-section"
        aria-labelledby="tramites-steps-title"
      >
        <div className="container">
          <div className="tramites__intro">
            <p className="tramites__eyebrow">Antes de iniciar</p>
            <h2 id="tramites-steps-title">Realice su trámite en tres pasos</h2>
            <p>
              Una preparación breve puede evitar desplazamientos y solicitudes
              incompletas.
            </p>
          </div>

          <ol className="tramites__steps">
            <li>
              <span className="tramites__step-number">1</span>
              <div>
                <h3>Identifique la gestión</h3>
                <p>
                  Seleccione la categoría que mejor describe su necesidad.
                </p>
              </div>
            </li>
            <li>
              <span className="tramites__step-number">2</span>
              <div>
                <h3>Prepare sus documentos</h3>
                <p>
                  Revise los requisitos y reúna los respaldos antes de presentar
                  la solicitud.
                </p>
              </div>
            </li>
            <li>
              <span className="tramites__step-number">3</span>
              <div>
                <h3>Confirme el canal</h3>
                <p>
                  Compruebe si puede completar la gestión en línea o si debe
                  contactar al área responsable.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Tramites;
