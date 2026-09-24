import { useId, useMemo, useState } from 'react';
import heroBg from '../../../public/images/hero.jpeg';
import municipalLogo from '../../assets/logo.svg';
import Breadcrumb from '../../components/common/Breadcrumb';
import './Servicios.css';

const icons = {
  urbano: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20V9l8-5 8 5v11" />
      <path d="M9 20v-7h6v7" />
      <path d="M3 20h18" />
      <path d="M7 10h2" />
      <path d="M15 10h2" />
    </svg>
  ),
  ambiente: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21V10" />
      <path d="M12 10c-4.5 0-7-2.5-7-7 4.5 0 7 2.5 7 7Z" />
      <path d="M12 12c4.5 0 7-2.5 7-7-4.5 0-7 2.5-7 7Z" />
      <path d="M5 21h14" />
    </svg>
  ),
  social: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="4" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  empleo: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
      <path d="M12 12v2" />
    </svg>
  ),
  educacion: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v5c3 2 7 2 10 0v-5" />
      <path d="M21 10v6" />
    </svg>
  ),
  seguridad: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  ),
  comercio: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10h16l-1-6H5l-1 6Z" />
      <path d="M6 10v10h12V10" />
      <path d="M9 20v-5h6v5" />
      <path d="M4 10a4 4 0 0 0 8 0 4 4 0 0 0 8 0" />
    </svg>
  ),
  atencion: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 18v-1a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v1" />
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21h14" />
    </svg>
  ),
};

const services = [
  {
    id: 'urbano',
    title: 'Urbano',
    summary:
      'Ayuda a encontrar información sobre recolección, limpieza, parques y mantenimiento urbano.',
    tags: ['recolección', 'limpieza', 'parques', 'mantenimiento', 'bache'],
  },
  {
    id: 'ambiente',
    title: 'Ambiente',
    summary:
      'Reúne acciones ambientales, residuos valorizables, educación ambiental y reportes ambientales.',
    tags: ['reciclaje', 'residuos', 'educación ambiental', 'ambiente', 'reportes'],
  },
  {
    id: 'desarrollo-social',
    title: 'Desarrollo Social',
    summary:
      'Centraliza programas de apoyo social, atención a mujeres, niñez, personas adultas mayores y comunidades.',
    tags: ['apoyo social', 'mujeres', 'niñez', 'adultos mayores', 'comunidad'],
  },
  {
    id: 'empleo-emprendimiento',
    title: 'Empleo y emprendimiento',
    summary:
      'Facilita acceso a intermediación de empleo, capacitación, emprendimiento y oportunidades productivas.',
    tags: ['empleo', 'capacitacion', 'emprendimiento', 'oportunidades', 'productivo'],
  },
  {
    id: 'educacion-cultura-deporte',
    title: 'Educación, cultura y deporte',
    summary:
      'Muestra actividades, programas, talleres, eventos y espacios de formación, cultura, deporte y recreación.',
    tags: ['educación', 'cultura', 'deporte', 'eventos', 'talleres'],
  },
  {
    id: 'seguridad-convivencia',
    title: 'Seguridad y convivencia',
    summary:
      'Orienta sobre Policía Municipal, vigilancia, estacionómetros, convivencia y reportes de seguridad.',
    tags: ['seguridad', 'policía', 'vigilancia', 'estacionómetros', 'convivencia'],
  },
  {
    id: 'comercio-economia',
    title: 'Comercio y economía',
    summary:
      'Reúne información sobre mercado municipal, plazas, economía local y apoyo a comercios.',
    tags: ['comercio', 'mercado', 'plazas', 'economía', 'comercios'],
  },
  {
    id: 'atencion-ciudadana',
    title: 'Atención ciudadana',
    summary:
      'Ofrece una puerta clara para consultas, ventanilla única, orientación presencial y derivación a áreas responsables.',
    tags: ['consultas', 'ventanilla única', 'orientación', 'atención', 'derivación'],
  },
];

function normalize(value) {
  return value
    .toLocaleLowerCase('es')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function Servicios() {
  const searchId = useId();
  const [query, setQuery] = useState('');

  const normalizedQuery = normalize(query.trim());
  const visibleServices = useMemo(() => {
    if (!normalizedQuery) {
      return services;
    }

    return services.filter((service) => {
      const content = [service.title, service.summary, ...service.tags].join(' ');
      return normalize(content).includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function clearSearch() {
    setQuery('');
  }

  return (
    <main className="servicios">
      <section className="servicios__hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="servicios__hero-overlay">
          <div className="container">
            <div className="servicios__hero-content">
              <div className="servicios__brand">
                <div className="servicios__brand-mark" aria-hidden="true">
                  <img src={municipalLogo} alt="" />
                </div>
                <div className="servicios__brand-name">
                  <strong>Municipalidad de Limón</strong>
                </div>
              </div>

              <form className="servicios__hero-search" onSubmit={handleSubmit} role="search">
                <label htmlFor={searchId} className="servicios__search-label">
                  Buscar servicios municipales
                </label>
                <input
                  id={searchId}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="¿Qué servicio necesita encontrar?"
                />
                <button type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="servicios__catalog" aria-labelledby="servicios-catalog-title">
        <div className="container servicios__catalog-container">
          <Breadcrumb items={[{ label: 'Servicios' }]} />

          <div className="servicios__section-heading">
            <div>
              <h1 id="servicios-catalog-title">Servicios por área municipal</h1>
              <p>
                Encuentre la puerta de entrada correcta según la necesidad ciudadana.
              </p>
            </div>
            <p className="servicios__results" aria-live="polite">
              {visibleServices.length === 1
                ? '1 servicio encontrado'
                : `${visibleServices.length} servicios encontrados`}
            </p>
          </div>

          {query && (
            <button type="button" className="servicios__clear" onClick={clearSearch}>
              Limpiar búsqueda
            </button>
          )}

          {visibleServices.length > 0 ? (
            <div className="servicios__grid">
              {visibleServices.map((service) => (
                <article
                  key={service.id}
                  className={`servicios__card servicios__card--${service.id}`}
                >
                  <span className="servicios__card-icon">{icons[service.id]}</span>
                  <div className="servicios__card-body">
                    <h2 className="servicios__card-title">{service.title}</h2>
                    <p className="servicios__card-summary">{service.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="servicios__empty" role="status">
              <h2>No encontramos servicios con esa búsqueda.</h2>
              <p>
                Intente con una palabra más general o vuelva a revisar todas las categorías.
              </p>
              <button type="button" className="servicios__empty-button" onClick={clearSearch}>
                Ver todos los servicios
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Servicios;
