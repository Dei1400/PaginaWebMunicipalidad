import PageHeader from '../../components/common/PageHeader';
import './Tramites.css';

const categories = [
  {
    icon: '🏪',
    title: 'Patentes',
    description: 'Solicite, renueve o actualice una patente comercial.',
  },
  {
    icon: '💳',
    title: 'Impuestos y pagos',
    description: 'Consulte sus obligaciones y opciones de pago municipal.',
  },
  {
    icon: '🏠',
    title: 'Propiedades y catastro',
    description: 'Realice gestiones de bienes inmuebles y catastro.',
  },
  {
    icon: '🌊',
    title: 'Zona Marítimo Terrestre',
    description: 'Consulte concesiones, permisos y documentación.',
  },
  {
    icon: '🛍️',
    title: 'Mercado y comercio',
    description: 'Solicite espacios comerciales y permisos asociados.',
  },
  {
    icon: '📝',
    title: 'Formularios',
    description: 'Encuentre formularios para sus gestiones municipales.',
  },
];

function Tramites() {
  return (
    <main className="tramites">
      <PageHeader
        title="Trámites"
        description="Encuentre la información necesaria para realizar sus gestiones municipales."
        breadcrumbItems={[{ label: 'Trámites' }]}
      />

      <section className="tramites__intro section" aria-labelledby="tramites-title">
        <div className="container">
          <p className="tramites__eyebrow">Atención ciudadana</p>
          <h2 id="tramites-title">¿Qué trámite necesita realizar?</h2>
          <p className="tramites__lead">
            Seleccione una categoría para conocer las gestiones disponibles.
          </p>

          <div className="tramites__grid">
            {categories.map((category) => (
              <article className="tramites__card" key={category.title}>
                <span className="tramites__icon" aria-hidden="true">
                  {category.icon}
                </span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span className="tramites__link">Ver gestiones →</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Tramites;