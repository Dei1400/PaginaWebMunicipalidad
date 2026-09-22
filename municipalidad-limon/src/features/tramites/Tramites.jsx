import { useId, useMemo, useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Link from '../../components/ui/Link';
import './Tramites.css';

const tramiteCategories = [
  {
    id: 'patentes',
    icon: '🏪',
    title: 'Patentes',
    description:
      'Gestiones para solicitar, renovar, modificar, trasladar o cerrar una patente comercial.',
    actions: [
      'Solicitar una patente comercial',
      'Renovar una patente',
      'Modificar, trasladar o cerrar una patente',
    ],
    requirements: [
      'Formulario de solicitud correspondiente',
      'Documento de identificación de la persona solicitante',
      'Documentación del negocio según el tipo de gestión',
    ],
    office: 'Área de Rentas y Patentes',
  },
  {
    id: 'impuestos-pagos',
    icon: '💳',
    title: 'Impuestos y pagos',
    description:
      'Consulte obligaciones municipales, estados de cuenta y opciones de pago.',
    actions: [
      'Consultar estado de cuenta',
      'Realizar un pago municipal',
      'Solicitar un arreglo de pago',
    ],
    requirements: [
      'Número de cédula o identificación tributaria',
      'Número de finca o número de patente, si aplica',
      'Datos de contacto para recibir la constancia',
    ],
    office: 'Departamento de Cobros',
  },
  {
    id: 'propiedades-catastro',
    icon: '🏠',
    title: 'Propiedades y catastro',
    description:
      'Gestiones de bienes inmuebles, catastro, declaraciones y certificaciones.',
    actions: [
      'Presentar una declaración de bienes inmuebles',
      'Actualizar información catastral',
      'Solicitar una certificación municipal',
    ],
    requirements: [
      'Documento de identificación',
      'Número de finca o plano catastrado',
      'Documento que respalde el cambio solicitado',
    ],
    office: 'Unidad de Catastro y Bienes Inmuebles',
  },
  {
    id: 'zmt',
    icon: '🌊',
    title: 'Zona Marítimo Terrestre',
    description:
      'Concesiones, permisos y documentación relacionados con la Zona Marítimo Terrestre.',
    actions: [
      'Solicitar información sobre una concesión',
      'Presentar documentación para un permiso',
      'Consultar el estado de una gestión ZMT',
    ],
    requirements: [
      'Formulario y nota de solicitud',
      'Documento de identificación o personería jurídica',
      'Plano, ubicación y documentos de respaldo',
    ],
    office: 'Unidad de Zona Marítimo Terrestre',
  },
  {
    id: 'mercado-comercio',
    icon: '🛍️',
    title: 'Mercado y comercio',
    description:
      'Solicitudes para el mercado municipal, plazas, espacios comerciales y permisos asociados.',
    actions: [
      'Solicitar un espacio comercial',
      'Consultar requisitos del mercado municipal',
      'Gestionar permisos para actividades comerciales',
    ],
    requirements: [
      'Formulario de solicitud',
      'Documento de identificación',
      'Información de la actividad o espacio solicitado',
    ],
    office: 'Administración de Mercado y Plazas',
  },
  {
    id: 'formularios',
    icon: '📝',
    title: 'Formularios',
    description:
      'Encuentre formularios digitales y descargables organizados por tipo de gestión.',
    actions: [
      'Formularios de patentes',
      'Formularios de bienes inmuebles',
      'Formularios de permisos y solicitudes generales',
    ],
    requirements: [
      'Seleccione el formulario según su gestión',
      'Complete los campos obligatorios',
      'Adjunte los documentos indicados en cada formulario',
    ],
    office: 'Ventanilla Única Municipal',
  },
];

function Tramites() {
  const searchId = useId();
  const [query, setQuery] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    tramiteCategories[0].id,
  );

  const normalizedQuery = query.trim().toLocaleLowerCase('es');
  const visibleCategories = useMemo(() => {
    if (!normalizedQuery) {
      return tramiteCategories;
    }

    return tramiteCategories.filter((category) => {
      const searchableContent = [
        category.title,
        category.description,
        category.office,
        ...category.actions,
        ...category.requirements,
      ]
        .join(' ')
        .toLocaleLowerCase('es');

      return searchableContent.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  const selectedCategory =
    visibleCategories.find((category) => category.id === selectedCategoryId) ||
    visibleCategories[0] ||
    null;

  function handleSearchSubmit(event) {
    event.preventDefault();
  }

  function clearSearch() {
    setQuery('');
  }

  return (
    <div className="tramites">
      <PageHeader
        title="Trámites"
        description="Encuentre la información, los requisitos y la orientación necesaria para realizar sus gestiones municipales."
        breadcrumbItems={[{ label: 'Trámites' }]}
      />

      <section className="tramites__search-section">
        <div className="container">
          <div className="tramites__intro">
            <p className="tramites__eyebrow">Atención ciudadana</p>
            <h2>¿Qué trámite necesita realizar?</h2>
            <p>
              Busque por nombre, tema o gestión para encontrar una ruta clara
              antes de visitar la Municipalidad.
            </p>
          </div>

          <form className="tramites__search-form" onSubmit={handleSearchSubmit} role="search">
            <Input
              id={searchId}
              label="Buscar un trámite"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ejemplo: patente, pago o catastro"
              helperText="La búsqueda muestra las categorías y gestiones relacionadas."
            />
            <Button type="submit" className="tramites__search-button">
              Buscar
            </Button>
          </form>

          {query && (
            <button type="button" className="tramites__clear-search" onClick={clearSearch}>
              Limpiar búsqueda
            </button>
          )}
        </div>
      </section>

      <section className="section tramites__categories-section" aria-labelledby="tramites-categories-title">
        <div className="container">
          <div className="tramites__section-heading">
            <div>
              <p className="tramites__eyebrow">Categorías</p>
              <h2 id="tramites-categories-title">Explore los trámites por tema</h2>
            </div>
            <p className="tramites__results" aria-live="polite">
              {visibleCategories.length === 1
                ? '1 categoría encontrada'
                : `${visibleCategories.length} categorías encontradas`}
            </p>
          </div>

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
                    onClick={() => setSelectedCategoryId(category.id)}
                  >
                    <span className="tramites__category-icon" aria-hidden="true">
                      {category.icon}
                    </span>
                    <span className="tramites__category-content">
                      <span className="tramites__category-title">{category.title}</span>
                      <span className="tramites__category-description">{category.description}</span>
                      <span className="tramites__category-action">Ver gestiones <span aria-hidden="true">→</span></span>
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="tramites__empty-state" role="status">
              <h3>No encontramos un trámite con esa búsqueda.</h3>
              <p>Pruebe con una palabra más general o explore todas las categorías.</p>
              <Button type="button" variant="tertiary" onClick={clearSearch}>
                Ver todas las categorías
              </Button>
            </div>
          )}
        </div>
      </section>

      {selectedCategory && visibleCategories.length > 0 && (
        <section className="tramites__detail-section" aria-labelledby="tramite-detail-title">
          <div className="container">
            <div className="tramites__detail">
              <div className="tramites__detail-heading">
                <div className="tramites__detail-title-wrap">
                  <span className="tramites__category-icon" aria-hidden="true">
                    {selectedCategory.icon}
                  </span>
                  <div>
                    <p className="tramites__detail-label">Información del trámite</p>
                    <h2 id="tramite-detail-title">{selectedCategory.title}</h2>
                  </div>
                </div>
                <p>{selectedCategory.description}</p>
              </div>

              <div className="tramites__detail-grid">
                <div>
                  <h3>Gestiones disponibles</h3>
                  <ul className="tramites__action-list">
                    {selectedCategory.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3>Documentos habituales</h3>
                  <ul className="tramites__requirement-list">
                    {selectedCategory.requirements.map((requirement) => (
                      <li key={requirement}>{requirement}</li>
                    ))}
                  </ul>
                  <p className="tramites__requirements-note">
                    Los requisitos pueden variar según el caso. Confírmelos con el área responsable antes de presentar su solicitud.
                  </p>
                </div>
              </div>

              <div className="tramites__detail-footer">
                <div>
                  <p className="tramites__detail-label">Área responsable</p>
                  <p className="tramites__office">{selectedCategory.office}</p>
                </div>
                <Link to="/contacto" variant="arrow">
                  Solicitar orientación
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section tramites__steps-section" aria-labelledby="tramites-steps-title">
        <div className="container">
          <div className="tramites__intro">
            <p className="tramites__eyebrow">Antes de iniciar</p>
            <h2 id="tramites-steps-title">Realice su trámite en tres pasos</h2>
          </div>

          <ol className="tramites__steps">
            <li>
              <span className="tramites__step-number">1</span>
              <div>
                <h3>Identifique la gestión</h3>
                <p>Seleccione la categoría y la gestión que mejor describe su necesidad.</p>
              </div>
            </li>
            <li>
              <span className="tramites__step-number">2</span>
              <div>
                <h3>Prepare sus documentos</h3>
                <p>Revise los requisitos y reúna los respaldos antes de presentar la solicitud.</p>
              </div>
            </li>
            <li>
              <span className="tramites__step-number">3</span>
              <div>
                <h3>Solicite orientación</h3>
                <p>Si tiene dudas, contacte a la Municipalidad para conocer el canal de atención correspondiente.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Tramites;