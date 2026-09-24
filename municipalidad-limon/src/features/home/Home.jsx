import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Link from '../../components/ui/Link';
import heroBg from '../../../public/images/hero.jpeg';
import cityOfLifeLogo from '../../assets/limon-ciudad-de-la-vida.svg';

import './Home.css';

/* ── SVG icon components (CSS-coloreados, sin emojis) ── */
const IconUrbano = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 9 12 2 23 9" /><path d="M21 20V9H3v11" /><path d="M9 20v-9h6v9" /><line x1="1" y1="20" x2="23" y2="20" />
  </svg>
);
const IconAmbiente = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /><circle cx="12" cy="5" r="3" /><path d="M6 12a6 6 0 0 1 12 0" />
  </svg>
);
const IconSocial = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconEmpleo = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const IconEducacion = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);
const IconSeguridad = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconComercio = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l1-7h16l1 7" /><path d="M3 9a5 5 0 0 0 10 0 5 5 0 0 0 10 0" /><path d="M5 22V12h14v10" /><line x1="9" y1="22" x2="9" y2="17" /><line x1="15" y1="22" x2="15" y2="17" /><line x1="9" y1="17" x2="15" y2="17" />
  </svg>
);
const IconAtencion = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);
const IconPagos = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);
const IconPatentes = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="15" x2="15" y2="15" /><line x1="9" y1="11" x2="11" y2="11" />
  </svg>
);
const IconFormularios = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);
const IconContacto = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconSello = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="26" r="24" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="26" cy="26" r="19" stroke="white" strokeWidth="1" fill="none" strokeDasharray="3 2" />
    <line x1="26" y1="38" x2="26" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M26 24 Q20 18 14 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M26 24 Q22 16 18 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M26 24 Q30 16 34 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M26 24 Q32 18 38 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M26 24 Q26 19 26 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M16 36 Q19 34 22 36 Q25 38 28 36 Q31 34 34 36" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
  </svg>
);

const services = [
  { icon: <IconUrbano />,    title: 'Urbano',                    description: 'Recolección, limpieza, parques y mantenimiento urbano.',                                                                  path: '/servicios/urbano' },
  { icon: <IconAmbiente />,  title: 'Ambiente',                  description: 'Programas ambientales, residuos valorizables, educación y reportes ambientales.',                                          path: '/servicios/ambiente' },
  { icon: <IconSocial />,    title: 'Desarrollo Social',         description: 'Programas de apoyo social y atención a mujeres, niñez, personas adultas mayores y comunidades.',                           path: '/servicios/desarrollo-social' },
  { icon: <IconEmpleo />,    title: 'Empleo y emprendimiento',   description: 'Intermediación de empleo, capacitación, emprendimiento y oportunidades productivas.',                                       path: '/servicios/empleo-emprendimiento' },
  { icon: <IconEducacion />, title: 'Educación, cultura y deporte', description: 'Actividades, programas, talleres, eventos y espacios de formación, cultura, deporte y recreación.',                    path: '/servicios/educacion-cultura-deporte' },
  { icon: <IconSeguridad />, title: 'Seguridad y convivencia',   description: 'Policía Municipal, vigilancia, estacionómetros, convivencia y reportes de seguridad.',                                     path: '/servicios/seguridad-convivencia' },
  { icon: <IconComercio />,  title: 'Comercio y economía',       description: 'Mercado municipal, plazas, economía local y apoyo a comercios.',                                                           path: '/servicios/comercio-economia' },
  { icon: <IconAtencion />,  title: 'Atención ciudadana',        description: 'Consultas, ventanilla única, orientación presencial y derivación a áreas responsables.',                                   path: '/servicios/atencion-ciudadana' },
];

const newsItems = [
  { id: 1, title: 'Aviso de la segunda audiencia presupuestaria - 24 de septiembre de 2026',  date: 'Publicado el 17 de septiembre de 2026', description: 'De conformidad con la Resolución No. R-26-0320 adoptada el 23 de julio de 2026, la Comisión de la Ciudad celebrará su Segunda Audiencia Presupuestaria el jueves 24 de septiembre de 2026 a las 17:05 horas en la sala de sesiones de la Comisión, ubicada en el Ayuntamiento Municipal, Limón Centro.' },
  { id: 2, title: 'Aviso de reunión de la Comisión - 24 de septiembre de 2026',              date: 'Publicado el 17 de septiembre de 2026', description: 'La reunión ordinaria de la Comisión de la Ciudad se llevará a cabo el jueves 24 de septiembre de 2026 a las 9:00 a. m. en la sala de sesiones de la Comisión, ubicada en el Ayuntamiento Municipal, Limón Centro.' },
  { id: 3, title: 'Aviso de la primera audiencia presupuestaria - 10 de septiembre de 2026', date: 'Publicado el 2 de septiembre de 2026',  description: 'De conformidad con la Resolución No. R-26-0320 adoptada el 23 de julio de 2026, la Comisión de la Ciudad celebrará su Primera Audiencia Presupuestaria el jueves 10 de septiembre de 2026 a las 17:05 horas en la sala de sesiones de la Comisión.' },
  { id: 4, title: 'Aviso de reunión de la Comisión - 10 de septiembre de 2026',              date: 'Publicado el 2 de septiembre de 2026',  description: 'La reunión ordinaria de la Comisión de la Ciudad se llevará a cabo el jueves 10 de septiembre de 2026 a las 9:00 a. m. en la sala de sesiones de la Comisión.' },
  { id: 5, title: 'Reunión de la Asociación de Propietarios de Limón Centro',               date: 'Publicado el 18 de agosto de 2026',     description: 'Dos o más comisionados de la ciudad, junto con miembros de su personal, podrían participar en una reunión de la Asociación de Propietarios para tratar asuntos relacionados con la calidad de vida y novedades comunitarias que afectan al cantón.' },
  { id: 6, title: 'Fiesta oficial para ver el partido en el parque central',                 date: 'Publicado el 17 de julio de 2026',      description: 'La presidenta de la ciudad se complace en dar la bienvenida a uno de los grupos oficiales de transmisión. Si bien el evento principal ha concluido, la emoción continúa para toda la comunidad.' },
];

const quickLinks = [
  { to: '/servicios/urbano',        icon: <IconUrbano />,      label: 'Servicios urbanos' },
  { to: '/servicios/ambiente',      icon: <IconAmbiente />,    label: 'Ambiente' },
  { to: '/tramites/impuestos-pagos',icon: <IconPagos />,       label: 'Impuestos y pagos' },
  { to: '/tramites/patentes',       icon: <IconPatentes />,    label: 'Patentes' },
  { to: '/tramites/formularios',    icon: <IconFormularios />, label: 'Formularios' },
  { to: '/municipalidad',           icon: <IconContacto />,    label: 'Contacto' },
];

const navSearchOptions = [
  { label: 'Inicio', description: 'Página principal de la Municipalidad de Limón.', path: '/', keywords: ['home', 'principal'] },
  { label: 'Servicios', description: 'Servicios municipales por área de atención.', path: '/servicios', keywords: ['programas', 'areas municipales'] },
  { label: 'Trámites', description: 'Guía de trámites, pagos, patentes y formularios.', path: '/tramites', keywords: ['pagos', 'patentes', 'formularios', 'permisos'] },
  { label: 'Gobierno Municipal', description: 'Información del Concejo, alcaldía y organización municipal.', path: '/gobierno-municipal', keywords: ['concejo', 'alcaldia', 'comision'] },
  { label: 'Municipalidad', description: 'Contacto, atención ciudadana e información institucional.', path: '/municipalidad', keywords: ['contacto', 'telefono', 'horario'] },
  { label: 'Cantón', description: 'Historia, distritos y datos del cantón de Limón.', path: '/canton', keywords: ['historia', 'distritos', 'mapa'] },
  { label: 'Transparencia', description: 'Presupuesto, auditoría, planes y rendición de cuentas.', path: '/transparencia', keywords: ['presupuesto', 'auditoria', 'plan', 'rendicion'] },
];

const placeholderOptions = [
  'Buscar pagos municipales',
  'Buscar patentes',
  'Buscar recolección',
  'Buscar presupuesto',
  'Buscar contacto',
  'Buscar actividades culturales',
];

function normalizeSearch(value) {
  return value
    .toLocaleLowerCase('es')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function getInitialMotionPreference() {
  return typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;
}

function HighlightedText({ text, query }) {
  const normalizedText = normalizeSearch(text);
  const normalizedQuery = normalizeSearch(query.trim());
  const matchIndex = normalizedQuery ? normalizedText.indexOf(normalizedQuery) : -1;

  if (matchIndex === -1) {
    return text;
  }

  const matchEnd = matchIndex + normalizedQuery.length;

  return (
    <>
      {text.slice(0, matchIndex)}
      <mark>{text.slice(matchIndex, matchEnd)}</mark>
      {text.slice(matchEnd)}
    </>
  );
}

function buildSearchOptions() {
  const serviceOptions = services.map((service) => ({
    label: service.title,
    description: service.description,
    path: '/servicios',
    keywords: ['servicio', service.title, service.description],
  }));

  const quickLinkOptions = quickLinks.map((link) => ({
    label: link.label,
    description: 'Acceso rápido a una sección frecuente del sitio.',
    path: link.to,
    keywords: ['acceso rapido', link.label],
  }));

  const newsOptions = newsItems.slice(0, 4).map((item) => ({
    label: item.title,
    description: item.date,
    path: '/noticias',
    keywords: ['noticia', 'aviso', item.title, item.description],
  }));

  return [...navSearchOptions, ...quickLinkOptions, ...serviceOptions, ...newsOptions];
}

/* ──────────────────────────────────────────────────────── */

function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('noticias');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [typedPlaceholder, setTypedPlaceholder] = useState('');
  const [isDeletingPlaceholder, setIsDeletingPlaceholder] = useState(false);
  const [activeSearchOptionIndex, setActiveSearchOptionIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialMotionPreference);

  const searchOptions = useMemo(() => buildSearchOptions(), []);
  const normalizedSearchQuery = normalizeSearch(searchQuery.trim());
  const visibleSearchOptions = useMemo(() => {
    if (!normalizedSearchQuery) {
      return searchOptions.slice(0, 6);
    }

    return searchOptions
      .filter((option) => {
        const content = [option.label, option.description, ...option.keywords].join(' ');
        return normalizeSearch(content).includes(normalizedSearchQuery);
      })
      .slice(0, 6);
  }, [normalizedSearchQuery, searchOptions]);

  const hasSearchQuery = searchQuery.trim().length > 0;
  const showSearchSuggestions =
    isSearchFocused && hasSearchQuery && visibleSearchOptions.length > 0;
  const showNoSearchResults =
    isSearchFocused && hasSearchQuery && visibleSearchOptions.length === 0;
  const showSearchPanel = showSearchSuggestions || showNoSearchResults;
  const activeSearchOption = showSearchSuggestions
    ? visibleSearchOptions[Math.min(activeSearchOptionIndex, visibleSearchOptions.length - 1)]
    : undefined;
  const animatedPlaceholder = prefersReducedMotion
    ? placeholderOptions[placeholderIndex]
    : typedPlaceholder;

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    function handleMotionPreferenceChange(event) {
      setPrefersReducedMotion(event.matches);
    }

    motionQuery.addEventListener('change', handleMotionPreferenceChange);

    return () => motionQuery.removeEventListener('change', handleMotionPreferenceChange);
  }, []);

  useEffect(() => {
    if (searchQuery || prefersReducedMotion) {
      return undefined;
    }

    const currentPlaceholder = placeholderOptions[placeholderIndex];
    const isComplete = typedPlaceholder.length === currentPlaceholder.length;
    const isDeleted = typedPlaceholder.length === 0;
    const timeout = window.setTimeout(
      () => {
        if (!isDeletingPlaceholder && isComplete) {
          setIsDeletingPlaceholder(true);
          return;
        }

        if (isDeletingPlaceholder && isDeleted) {
          setIsDeletingPlaceholder(false);
          setPlaceholderIndex((currentIndex) => (currentIndex + 1) % placeholderOptions.length);
          return;
        }

        const nextLength = isDeletingPlaceholder
          ? typedPlaceholder.length - 1
          : typedPlaceholder.length + 1;

        setTypedPlaceholder(currentPlaceholder.slice(0, nextLength));
      },
      !isDeletingPlaceholder && isComplete ? 1200 : isDeletingPlaceholder ? 35 : 70,
    );

    return () => window.clearTimeout(timeout);
  }, [isDeletingPlaceholder, placeholderIndex, prefersReducedMotion, searchQuery, typedPlaceholder]);

  function goToSearchOption(option) {
    setSearchQuery(option.label);
    setIsSearchFocused(false);
    navigate(option.path);
  }

  function updateSearchQuery(value) {
    setSearchQuery(value);
    setIsSearchFocused(true);
    setActiveSearchOptionIndex(0);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();

    if (activeSearchOption) {
      goToSearchOption(activeSearchOption);
    }
  }

  function handleSearchKeyDown(event) {
    if (event.key === 'Escape') {
      setIsSearchFocused(false);
      return;
    }

    if (!showSearchSuggestions) {
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveSearchOptionIndex((currentIndex) =>
        currentIndex + 1 >= visibleSearchOptions.length ? 0 : currentIndex + 1,
      );
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveSearchOptionIndex((currentIndex) =>
        currentIndex - 1 < 0 ? visibleSearchOptions.length - 1 : currentIndex - 1,
      );
    }
  }

  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="home__hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="home__hero-overlay">
          <div className="container">

            <div className="home__hero-content">
              <div className="home__brand">
                <img
                  className="home__brand-image"
                  src={cityOfLifeLogo}
                  alt="Limón, ciudad de la vida"
                />
              </div>



              {/* Buscador */}
              <form className="home__search" onSubmit={handleSearchSubmit} role="search">
                <label htmlFor="home-search" className="home__search-label">
                  Buscar en el sitio
                </label>
                <div className="home__search-group">
                  <input
                    id="home-search"
                    type="search"
                    value={searchQuery}
                    onBlur={() => window.setTimeout(() => setIsSearchFocused(false), 120)}
                    onChange={(event) => updateSearchQuery(event.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onKeyDown={handleSearchKeyDown}
                    placeholder={animatedPlaceholder}
                    autoComplete="off"
                    aria-autocomplete="list"
                    aria-controls="home-search-suggestions"
                    aria-expanded={showSearchPanel}
                    aria-activedescendant={
                      activeSearchOption
                        ? `home-search-suggestion-${activeSearchOptionIndex}`
                        : undefined
                    }
                  />
                  <button type="submit">Buscar</button>
                </div>
                <div
                  id="home-search-suggestions"
                  className={`home__search-suggestions${
                    showSearchPanel ? ' home__search-suggestions--visible' : ''
                  }`}
                  role="listbox"
                  aria-label="Sugerencias de búsqueda"
                >
                  {showSearchSuggestions &&
                    visibleSearchOptions.map((option, optionIndex) => (
                      <button
                        key={`${option.path}-${option.label}`}
                        id={`home-search-suggestion-${optionIndex}`}
                        type="button"
                        className={`home__search-suggestion${
                          optionIndex === activeSearchOptionIndex
                            ? ' home__search-suggestion--active'
                            : ''
                        }`}
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => goToSearchOption(option)}
                        role="option"
                        aria-selected={optionIndex === activeSearchOptionIndex}
                      >
                        <span className="home__search-suggestion-title">
                          <HighlightedText text={option.label} query={searchQuery} />
                        </span>
                        <span className="home__search-suggestion-description">
                          <HighlightedText text={option.description} query={searchQuery} />
                        </span>
                      </button>
                    ))}
                  {showNoSearchResults && (
                    <p className="home__search-empty" role="status">
                      No encontramos coincidencias. Intente con otra palabra.
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* Accesos rápidos */}
            <div className="home__featured">
              <div className="home__featured-heading">
                <span>Accesos rápidos</span>
              </div>
              <div className="home__featured-grid">
                {quickLinks.map(({ to, icon, label }) => (
                  <Link key={to} to={to} className="home__featured-card">
                    <span className="home__featured-icon" aria-hidden="true">
                      {icon}
                    </span>
                    <span className="home__featured-title">{label}</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section className="section home__services-section">
        <div className="home__services-bg-decor">
          <div className="home__services-bg-left">
            <div className="home__services-bg-bar" />
            <div className="home__services-bg-bar" />
            <div className="home__services-bg-bar" />
            <div className="home__services-bg-bar" />
          </div>
          <div className="home__services-bg-right">
            <div className="home__services-bg-bar" />
            <div className="home__services-bg-bar" />
            <div className="home__services-bg-bar" />
            <div className="home__services-bg-bar" />
          </div>
        </div>

        <div className="container relative-z">
          <div className="section-heading">
            <p className="section-heading__eyebrow">SERVICIOS</p>
            <p>
              Conozca los servicios, programas y oportunidades
              disponibles para la comunidad de Limón.
            </p>
          </div>

          <div className="home__services">
            {services.map((service) => (
              <Card
                key={service.path}
                title={service.title}
                description={service.description}
                href={service.path}
                className="home__service-card"
              />
            ))}
          </div>

          <div className="home__section-action">
            <Link to="/servicios" variant="arrow">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ── NOTICIAS Y EVENTOS (TABS) ── */}
      <section className="home__tab-section">
        <div className="home__tabs-container container">
          <div className="home__tabs" role="tablist" aria-label="Contenido de noticias y eventos">
            {[
              { key: 'noticias',   label: 'Noticias' },
              { key: 'reuniones',  label: 'Reuniones y eventos' },
              { key: 'television', label: 'Televisión de la ciudad' },
              { key: 'social',     label: 'Social' },
            ].map(({ key, label }) => (
              <button
                key={key}
                id={`tab-${key}`}
                className={`home__tab${activeTab === key ? ' home__tab--active' : ''}`}
                onClick={() => setActiveTab(key)}
                role="tab"
                type="button"
                aria-selected={activeTab === key}
                aria-controls="news-tabpanel"
                tabIndex={activeTab === key ? 0 : -1}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div
          id="news-tabpanel"
          className="home__tab-content container"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          tabIndex="0"
        >
          {activeTab === 'noticias' ? (
            <div className="home__news-grid">
              {newsItems.map((item) => (
                <div key={item.id} className="home__news-card">
                  <div className="home__news-card-image">
                    <div className="home__news-card-placeholder">
                      <IconSello />
                      <span className="home__news-card-city">LIMÓN</span>
                    </div>
                  </div>
                  <div className="home__news-card-body">
                    <h3 className="home__news-card-title">{item.title}</h3>
                    <p className="home__news-card-date">{item.date}</p>
                    <p className="home__news-card-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="home__news-empty">
              <p>Próximamente más información sobre esta sección.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}

export default Home;
