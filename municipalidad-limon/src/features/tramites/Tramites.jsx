import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Link from '../../components/ui/Link';
import './Tramites.css';

const categories = [
  {
    id: 'patentes',
    icon: '🏪',
    title: 'Patentes',
    description: 'Gestiones para solicitar, renovar o actualizar una patente comercial.',
    actions: ['Solicitar una patente comercial', 'Renovar una patente', 'Modificar o cerrar una patente'],
    requirements: ['Formulario de solicitud', 'Documento de identificación', 'Documentación del negocio'],
    office: 'Área de Rentas y Patentes',
  },
  {
    id: 'impuestos-pagos',
    icon: '💳',
    title: 'Impuestos y pagos',
    description: 'Consulte obligaciones municipales, estados de cuenta y opciones de pago.',
    actions: ['Consultar estado de cuenta', 'Realizar un pago municipal', 'Solicitar un arreglo de pago'],
    requirements: ['Número de identificación', 'Número de finca o patente', 'Datos de contacto'],
    office: 'Departamento de Cobros',
  },
  {
    id: 'propiedades-catastro',
    icon: '🏠',
    title: 'Propiedades y catastro',
    description: 'Gestiones de bienes inmuebles, catastro y certificaciones.',
    actions: ['Presentar una declaración', 'Actualizar información catastral', 'Solicitar una certificación'],
    requirements: ['Documento de identificación', 'Número de finca o plano', 'Documento de respaldo'],
    office: 'Unidad de Catastro y Bienes Inmuebles',
  },
  {
    id: 'zmt',
    icon: '🌊',
    title: 'Zona Marítimo Terrestre',
    description: 'Concesiones, permisos y documentación relacionados con la ZMT.',
    actions: ['Consultar una concesión', 'Presentar documentación', 'Consultar el estado de una gestión'],
    requirements: ['Formulario o nota de solicitud', 'Documento de identificación', 'Plano y documentos de respaldo'],
    office: 'Unidad de Zona Marítimo Terrestre',
  },
  {
    id: 'mercado-comercio',
    icon: '🛍️',
    title: 'Mercado y comercio',
    description: 'Solicitudes para mercado municipal, plazas y espacios comerciales.',
    actions: ['Solicitar un espacio comercial', 'Consultar requisitos', 'Gestionar permisos comerciales'],
    requirements: ['Formulario de solicitud', 'Documento de identificación', 'Información de la actividad'],
    office: 'Administración de Mercado y Plazas',
  },
  {
    id: 'formularios',
    icon: '📝',
    title: 'Formularios',
    description: 'Formularios digitales y descargables por tipo de gestión.',
    actions: ['Formularios de patentes', 'Formularios de bienes inmuebles', 'Formularios de permisos'],
    requirements: ['Seleccione el formulario', 'Complete campos obligatorios', 'Adjunte los documentos indicados'],
    office: 'Ventanilla Única Municipal',
  },
];

function Tramites() {
  const [selectedId, setSelectedId] = useState(categories[0].id);
  const selectedCategory = categories.find((category) => category.id === selectedId);

  return (
    <main className="tramites">
      <PageHeader
        title="Trámites"
        description="Encuentre la información y los requisitos para sus gestiones municipales."
        breadcrumbItems={[{ label: 'Trámites' }]}
      />

      <section className="section" aria-labelledby="tramites-categories-title">
        <div className="container">
          <p className="tramites__eyebrow">Categorías</p>
          <h2 id="tramites-categories-title">Explore los trámites por tema</h2>

          <div className="tramites__grid">
            {categories.map((category) => {
              const isSelected = category.id === selectedId;

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
              </div>
            </div>

            <footer className="tramites__detail-footer">
              <p><strong>Área responsable:</strong> {selectedCategory.office}</p>
              <Link to="/contacto" variant="arrow">Solicitar orientación</Link>
            </footer>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Tramites;
