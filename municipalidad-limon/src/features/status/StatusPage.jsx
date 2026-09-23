import { useLocation } from 'react-router-dom';
import Link from '../../components/ui/Link';
import './StatusPage.css';

const statusContent = {
  construction: {
    eyebrow: 'Contenido en preparación',
    label: 'Próximamente',
    title: 'Página en construcción',
    description:
      'Estamos organizando y verificando esta información para ofrecerle una consulta clara, útil y confiable.',
    visualLabel: 'Actualización en curso',
  },
  error: {
    eyebrow: 'Disponibilidad temporal',
    label: 'Recurso no disponible',
    title: 'No pudimos abrir este recurso',
    description:
      'El documento existe, pero su fuente no está respondiendo en este momento. El resto del portal continúa disponible.',
    visualLabel: 'Error temporal',
  },
};

function StatusIllustration({ variant }) {
  if (variant === 'error') {
    return (
      <svg viewBox="0 0 360 260" role="img" aria-label="Documento temporalmente no disponible">
        <rect className="status-page__svg-frame" x="42" y="28" width="276" height="204" rx="18" />
        <path className="status-page__svg-document" d="M111 69h96l42 42v86H111z" />
        <path className="status-page__svg-fold" d="M207 69v42h42" />
        <path className="status-page__svg-line" d="M145 140h70M145 164h48" />
        <circle className="status-page__svg-signal" cx="263" cy="65" r="28" />
        <path className="status-page__svg-symbol" d="M253 55l20 20M273 55l-20 20" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 360 260" role="img" aria-label="Página en proceso de construcción">
      <rect className="status-page__svg-frame" x="42" y="28" width="276" height="204" rx="18" />
      <circle className="status-page__svg-dot" cx="69" cy="55" r="5" />
      <circle className="status-page__svg-dot" cx="87" cy="55" r="5" />
      <circle className="status-page__svg-dot" cx="105" cy="55" r="5" />
      <path className="status-page__svg-line" d="M73 91h126M73 116h214" />
      <rect className="status-page__svg-block" x="73" y="145" width="82" height="54" rx="8" />
      <rect className="status-page__svg-block status-page__svg-block--secondary" x="171" y="145" width="116" height="54" rx="8" />
      <path className="status-page__svg-symbol" d="M239 91v36M221 109h36" />
    </svg>
  );
}

function StatusPage({ variant = 'construction' }) {
  const location = useLocation();
  const content = statusContent[variant] || statusContent.construction;
  const resourceTitle = location.state?.resourceTitle;

  return (
    <div className={`status-page status-page--${variant}`}>
      <section
        className="status-page__hero"
        aria-labelledby="status-page-title"
      >
        <div className="status-page__overlay">
          <div className="container status-page__hero-grid">
            <div className="status-page__content">
              <p className="status-page__eyebrow">{content.eyebrow}</p>
              <p className="status-page__label">{content.label}</p>
              <h1 id="status-page-title">{content.title}</h1>
              <p className="status-page__description">{content.description}</p>

              {resourceTitle && (
                <p className="status-page__resource">
                  <span>Recurso solicitado</span>
                  <strong>{resourceTitle}</strong>
                </p>
              )}

              <div className="status-page__actions">
                <Link
                  to="/transparencia"
                  className="status-page__action status-page__action--primary"
                >
                  Volver a Transparencia
                </Link>
                <Link
                  to="/"
                  className="status-page__action status-page__action--secondary"
                >
                  Ir al inicio
                </Link>
              </div>
            </div>

            <div className="status-page__visual">
              <span>{content.visualLabel}</span>
              <StatusIllustration variant={variant} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StatusPage;
