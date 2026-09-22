import { useId, useMemo, useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Link from '../../components/ui/Link';
import './Tramites.css';

const categories = [
  {
    id: 'patentes', icon: '🏪', title: 'Patentes',
    description: 'Gestiones para solicitar, renovar, modificar, trasladar o cerrar una patente comercial.',
    actions: ['Solicitar una patente comercial', 'Renovar una patente', 'Modificar, trasladar o cerrar una patente'],
    requirements: ['Formulario de solicitud correspondiente', 'Documento de identificación de la persona solicitante', 'Documentación del negocio según el tipo de gestión'],
    office: 'Área de Rentas y Patentes',
  },
  {
    id: 'impuestos-pagos', icon: '💳', title: 'Impuestos y pagos',
    description: 'Consulte obligaciones municipales, estados de cuenta y opciones de pago.',
    actions: ['Consultar estado de cuenta', 'Realizar un pago municipal', 'Solicitar un arreglo de pago'],
    requirements: ['Número de cédula o identificación tributaria', 'Número de finca o número de patente, si aplica', 'Datos de contacto para recibir la constancia'],
    office: 'Departamento de Cobros',
  },
  {
    id: 'propiedades-catastro', icon: '🏠', title: 'Propiedades y catastro',
    description: 'Gestiones de bienes inmuebles, catastro, declaraciones y certificaciones.',
    actions: ['Presentar una declaración de bienes inmuebles', 'Actualizar información catastral', 'Solicitar una certificación municipal'],
    requirements: ['Documento de identificación', 'Número de finca o plano catastrado', 'Documento que respalde el cambio solicitado'],
    office: 'Unidad de Catastro y Bienes Inmuebles',
  },
  {
    id: 'zmt', icon: '🌊', title: 'Zona Marítimo Terrestre',
    description: 'Concesiones, permisos y documentación relacionados con la Zona Marítimo Terrestre.',
    actions: ['Solicitar información sobre una concesión', 'Presentar documentación para un permiso', 'Consultar el estado de una gestión ZMT'],
    requirements: ['Formulario y nota de solicitud', 'Documento de identificación o personería jurídica', 'Plano, ubicación y documentos de respaldo'],
    office: 'Unidad de Zona Marítimo Terrestre',
  },
  {
    id: 'mercado-comercio', icon: '🛍️', title: 'Mercado y comercio',
    description: 'Solicitudes para el mercado municipal, plazas, espacios comerciales y permisos asociados.',
    actions: ['Solicitar un espacio comercial', 'Consultar requisitos del mercado municipal', 'Gestionar permisos para actividades comerciales'],
    requirements: ['Formulario de solicitud', 'Documento de identificación', 'Información de la actividad o espacio solicitado'],
    office: 'Administración de Mercado y Plazas',
  },
  {
    id: 'formularios', icon: '📝', title: 'Formularios',
    description: 'Encuentre formularios digitales y descargables organizados por tipo de gestión.',
    actions: ['Formularios de patentes', 'Formularios de bienes inmuebles', 'Formularios de permisos y solicitudes generales'],
    requirements: ['Seleccione el formulario según su gestión', 'Complete los campos obligatorios', 'Adjunte los documentos indicados en cada formulario'],
    office: 'Ventanilla Única Municipal',
  },
];

function Tramites() {
  const searchId = useId();
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(categories[0].id);
  const normalizedQuery = query.trim().toLocaleLowerCase('es');

  const visibleCategories = useMemo(() => {
    if (!normalizedQuery) return categories;

    return categories.filter((category) => {
      const searchableContent = [category.title, category.description, category.office, ...category.actions]
        .join(' ')
        .toLocaleLowerCase('es');

      return searchableContent.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  const selectedCategory = visibleCategories.find((category) => category.id === selectedId)
    || visibleCategories[0];

  function handleSearch(event) {
    event.preventDefault();
  }

  return (
    <main className="tramites">
      <PageHeader
        title="Trámites"
        description="Encuentre la información, los requisitos y la orientación necesaria para realizar sus gestiones municipales."
        breadcrumbItems={[{ label: 'Trámites' }]}
      />

      <section className="tramites__search-section">
        <div className="container">
          <p className="tramites__eyebrow">Atención ciudadana</p>
          <h2>¿Qué trámite necesita realizar?</h2>
          <p className="tramites__lead">Busque por nombre, tema o gestión antes de visitar la Municipalidad.</p>
          <form className="tramites__search-form" onSubmit={handleSearch} role="search">
            <Input
              id={searchId}
              label="Buscar un trámite"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ejemplo: patente, pago o catastro"
              helperText="La búsqueda muestra las categorías y gestiones relacionadas."
            />
            <Button type="submit" className="tramites__search-button">Buscar</Button>
          </form>
        </div>
      </section>

      <section className="section" aria-labelledby="tramites-categories-title">
        <div className="container">
          <div className="tramites__section-heading">
            <div>
              <p className="tramites__eyebrow">Categorías</p>
              <h2 id="tramites-categories-title">Explore los trámites por tema</h2>
            </div>
            <p className="tramites__results" aria-live="polite">{visibleCategories.length} categorías encontradas</p>
          </div>

          <div className="tramites__grid">
            {visibleCategories.map((category) => {
              const isSelected = category.id === selectedCategory?.id;
              return (
                <button
                  className={`tramites__card ${isSelected ? 'tramites__card--selected' : ''}`}
                  key={category.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(category.id)}
                >
                  <span className="tramites__icon" aria-hidden="true">{category.icon}</span>
                  <span className="tramites__card-content">
                    <span className="tramites__card-title">{category.title}</span>
                    <span className="tramites__card-description">{category.description}</span>
                    <span className="tramites__card-link">Ver gestiones →</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {selectedCategory && (
        <section className="tramites__detail-section" aria-labelledby="tramite-detail-title">
          <div className="container">
            <article className="tramites__detail">
              <div className="tramites__detail-heading">
                <span className="tramites__icon" aria-hidden="true">{selectedCategory.icon}</span>
                <div>
                  <p className="tramites__eyebrow">Información del trámite</p>
                  <h2 id="tramite-detail-title">{selectedCategory.title}</h2>
                  <p>{selectedCategory.description}</p>
                </div>
              </div>
              <div className="tramites__detail-grid">
                <div>
                  <h3>Gestiones disponibles</h3>
                  <ul>{selectedCategory.actions.map((action) => <li key={action}>{action}</li>)}</ul>
                </div>
                <div>
                  <h3>Documentos habituales</h3>
                  <ul>{selectedCategory.requirements.map((requirement) => <li key={requirement}>{requirement}</li>)}</ul>
                  <p className="tramites__note">Los requisitos pueden variar según el caso.</p>
                </div>
              </div>
              <footer className="tramites__detail-footer">
                <p><strong>Área responsable:</strong> {selectedCategory.office}</p>
                <Link to="/contacto" variant="arrow">Solicitar orientación</Link>
              </footer>
            </article>
          </div>
        </section>
      )}
    </main>
  );
}

export default Tramites;
