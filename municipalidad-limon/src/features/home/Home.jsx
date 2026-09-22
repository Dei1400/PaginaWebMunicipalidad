
import Card from '../../components/ui/Card';
import Link from '../../components/ui/Link';
import Alert from '../../components/ui/Alert';

import './Home.css';

const services = [
  {
    icon: '📄',
    title: 'Trámites municipales',
    description:
      'Consulte requisitos, documentos y pasos para realizar sus trámites.',
    path: '/tramites',
  },
  {
    icon: '💰',
    title: 'Impuestos municipales',
    description:
      'Consulte información relacionada con sus obligaciones municipales.',
    path: '/servicios/impuestos',
  },
  {
    icon: '🏗️',
    title: 'Permisos de construcción',
    description:
      'Encuentre información sobre requisitos y procesos relacionados con construcción.',
    path: '/servicios/construccion',
  },
  {
    icon: '🏛️',
    title: 'Ventanilla Única',
    description:
      'Conozca los servicios y gestiones disponibles mediante la Ventanilla Única.',
    path: '/servicios/ventanilla-unica',
  },
];

function Home() {
  return (
    <div className="home">

    <section className="home__hero">
      <div className="home__hero-overlay">
        <div className="container">
          <div className="home__hero-content">
            <div className="home__brand">
              <div className="home__brand-mark" aria-hidden="true">
                ML
              </div>

              <div className="home__brand-name">
                <span>Municipalidad de</span>
                <strong>Limón</strong>
              </div>
            </div>



            <form className="home__search">
              <label
                htmlFor="home-search"
                className="home__search-label"
              >
                Buscar en el sitio
              </label>

              <div className="home__search-group">
                <input
                  id="home-search"
                  type="search"
                  placeholder="¿Qué necesita encontrar?"
                  aria-label="Buscar en el sitio"
                />

                <button type="submit">
                  Buscar
                </button>
              </div>
            </form>
          </div>

          <div className="home__featured">
            <div className="home__featured-heading">
              <span>Accesos rápidos</span>
            </div>

            <div className="home__featured-grid">
              <Link
                to="/servicios/urbano"
                className="home__featured-card"
              >
                <span
                  className="home__featured-icon"
                  aria-hidden="true"
                >
                  ♻
                </span>

                <span className="home__featured-title">
                  Servicios urbanos
                </span>
              </Link>

              <Link
                to="/servicios/ambiente"
                className="home__featured-card"
              >
                <span
                  className="home__featured-icon"
                  aria-hidden="true"
                >
                  ◉
                </span>

                <span className="home__featured-title">
                  Ambiente
                </span>
              </Link>

              <Link
                to="/tramites/impuestos-pagos"
                className="home__featured-card"
              >
                <span
                  className="home__featured-icon"
                  aria-hidden="true"
                >
                  ₡
                </span>

                <span className="home__featured-title">
                  Impuestos y pagos
                </span>
              </Link>

              <Link
                to="/tramites/patentes"
                className="home__featured-card"
              >
                <span
                  className="home__featured-icon"
                  aria-hidden="true"
                >
                  ▣
                </span>

                <span className="home__featured-title">
                  Patentes
                </span>
              </Link>

              <Link
                to="/tramites/formularios"
                className="home__featured-card"
              >
                <span
                  className="home__featured-icon"
                  aria-hidden="true"
                >
                  □
                </span>

                <span className="home__featured-title">
                  Formularios
                </span>
              </Link>

              <Link
                to="/la-municipalidad/contacto"
                className="home__featured-card"
              >
                <span
                  className="home__featured-icon"
                  aria-hidden="true"
                >
                  ☎
                </span>

                <span className="home__featured-title">
                  Contacto
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="section">
        <div className="container">

          <div className="section-heading">
            <p className="section-heading__eyebrow">
              Servicios
            </p>

            <h2>
              ¿Qué necesita realizar?
            </h2>

            <p>
              Acceda directamente a los principales
              servicios y trámites municipales.
            </p>
          </div>

          <div className="home__services">
            {services.map((service) => (
              <Card
                key={service.path}
                icon={service.icon}
                title={service.title}
                description={service.description}
              >
                <Link
                  to={service.path}
                  variant="arrow"
                >
                  Más información
                </Link>
              </Card>
            ))}
          </div>

          <div className="home__section-action">
            <Link
              to="/servicios"
              variant="arrow"
            >
              Ver todos los servicios
            </Link>
          </div>

        </div>
      </section>

      <section className="section home__notice-section">
        <div className="container">

          <div className="section-heading">
            <p className="section-heading__eyebrow">
              Avisos
            </p>

            <h2>
              Información importante
            </h2>
          </div>

          <Alert
            title="Información para la ciudadanía"
            variant="info"
          >
            Consulte los requisitos y condiciones
            específicas antes de realizar un trámite
            municipal.
          </Alert>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="section-heading">
            <p className="section-heading__eyebrow">
              Actualidad
            </p>

            <h2>
              Noticias
            </h2>
          </div>

          <div className="home__news">
            <Card
              title="Noticias municipales"
              description="Consulte las noticias y comunicados de la Municipalidad de Limón."
            >
              <Link
                to="/noticias"
                variant="arrow"
              >
                Ver noticias
              </Link>
            </Card>

            <Card
              title="Proyectos municipales"
              description="Conozca información sobre proyectos y obras desarrolladas en el cantón."
            >
              <Link
                to="/municipalidad"
                variant="arrow"
              >
                Conocer proyectos
              </Link>
            </Card>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;