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
        <div className="container">
          <div className="home__hero-content">

            <p className="home__eyebrow">
              Municipalidad de Limón
            </p>

            <h1>
              Servicios e información
              <br />
              para la comunidad
            </h1>

            <p className="home__hero-description">
              Encuentre trámites, servicios, información
              municipal y canales de contacto.
            </p>

            <div className="home__hero-actions">
              <Link
                to="/servicios"
                variant="arrow"
              >
                Ver servicios
              </Link>

              <Link
                to="/tramites"
                variant="subtle"
              >
                Consultar trámites
              </Link>
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