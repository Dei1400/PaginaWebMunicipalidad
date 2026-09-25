import Container from '../ui/Container';
import Link from '../ui/Link';
import municipalLogo from '../../assets/logo-municipalidad-limón.png';
import './Footer.css';

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 8.5h2V5h-2.8C10.4 5 9 6.7 9 9.3V11H7v3.5h2V21h3.8v-6.5h2.7L16 11h-3.2V9.6c0-.8.4-1.1 1.2-1.1z" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="16.7" cy="7.3" r="1" />
  </svg>
);

const IconYoutube = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 8.4a3 3 0 0 0-2.1-2.1C17 5.8 12 5.8 12 5.8s-5 0-6.9.5A3 3 0 0 0 3 8.4 31.3 31.3 0 0 0 2.5 12c0 1.2.1 2.4.5 3.6a3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1c.4-1.2.5-2.4.5-3.6s-.1-2.4-.5-3.6z" />
    <path className="footer__social-icon-cutout" d="M10.4 14.8V9.2L15.2 12z" />
  </svg>
);

const IconTiktok = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15.2 4c.3 2.3 1.6 3.8 3.8 4v3.4a7.3 7.3 0 0 1-3.7-1.1v5.1c0 3.4-2.2 5.6-5.3 5.6a5 5 0 0 1-5-5c0-3.1 2.4-5.2 5.5-5.1.3 0 .6 0 .9.1v3.5a2.8 2.8 0 0 0-1.1-.2c-1.1 0-1.9.7-1.9 1.7s.7 1.7 1.7 1.7c1.2 0 1.9-.8 1.9-2.2V4z" />
  </svg>
);

const IconLocation = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 22s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12z" />
    <circle className="footer__social-icon-cutout" cx="12" cy="10" r="2.4" />
  </svg>
);

const socialLinks = [
  { label: 'Facebook', icon: <IconFacebook />, href: 'https://www.facebook.com/213442062061381' },
  { label: 'Instagram', icon: <IconInstagram />, href: 'https://www.instagram.com/municlimon/' },
  { label: 'YouTube', icon: <IconYoutube />, href: 'https://www.youtube.com/@municlimon' },
  { label: 'TikTok', icon: <IconTiktok />, href: 'https://www.tiktok.com/@municlimon' },
  { label: 'Ubicación', icon: <IconLocation />, href: 'https://www.google.com/maps/search/?api=1&query=9.99311,-83.02562' },
];

const serviceLinks = [
  { label: 'Urbano', to: '/servicios#urbano' },
  { label: 'Ambiente', to: '/servicios#ambiente' },
  { label: 'Desarrollo Social', to: '/servicios#desarrollo-social' },
  { label: 'Empleo y emprendimiento', to: '/servicios#empleo-emprendimiento' },
  { label: 'Educación, cultura y deporte', to: '/servicios#educacion-cultura-deporte' },
  { label: 'Seguridad y convivencia', to: '/servicios#seguridad-convivencia' },
  { label: 'Comercio y economía', to: '/servicios#comercio-economia' },
  { label: 'Atención ciudadana', to: '/servicios#atencion-ciudadana' },
];

const transparencyLinks = [
  { label: 'Acceso a la información', to: '/transparencia#acceso-informacion' },
  { label: 'Presupuestos y finanzas', to: '/transparencia#presupuestos-finanzas' },
  { label: 'Contratación pública', to: '/transparencia#contratacion-publica' },
  { label: 'Rendición de cuentas', to: '/transparencia#rendicion-cuentas' },
  { label: 'Auditoría Interna', to: '/transparencia#auditoria-interna' },
  { label: 'Normativa', to: '/transparencia#normativa' },
  { label: 'Concejo Municipal', to: '/transparencia#concejo-municipal' },
  { label: 'Obras y proyectos', to: '/transparencia#obras-proyectos' },
  { label: 'Datos abiertos', to: '/transparencia#datos-abiertos' },
];

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__grid">
          <section className="footer__section footer__section--brand">
            <div className="footer__brand">
              <img
                className="footer__logo"
                src={municipalLogo}
                alt=""
                aria-hidden="true"
              />
              <h2 className="footer__brand-title">
                Municipalidad de Limón
              </h2>
            </div>

            <p>
              Gobierno local al servicio de la
              comunidad limonense.
            </p>

            <div className="footer__socials" aria-label="Redes sociales y ubicación">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  external
                  className="footer__social-link"
                  aria-label={item.label}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </section>

          <section className="footer__section">
            <h2 className="footer__title">
              Contacto
            </h2>

            <ul className="footer__list">
              <li>
                <span className="footer__meta-label">Teléfono central</span>
                <Link href="tel:+50627584444">
                  2758-4444
                </Link>
              </li>

              <li>
                <span className="footer__meta-label">Central secundaria</span>
                <Link href="tel:+50627587073">
                  2758-7073
                </Link>
              </li>

              <li>
                <span className="footer__meta-label">Correo institucional</span>
                <Link href="mailto:alcaldia@municlimon.go.cr">
                  alcaldia@municlimon.go.cr
                </Link>
              </li>

              <li>
                <span className="footer__meta-label">Ubicación</span>
                <Link href="https://www.google.com/maps/search/?api=1&query=9.99311,-83.02562" external>
                  Limón Centro
                </Link>
              </li>
            </ul>
          </section>

          <section className="footer__section">
            <h2 className="footer__title">
              Servicios
            </h2>

            <ul className="footer__list">
              {serviceLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer__section">
            <h2 className="footer__title">
              Transparencia
            </h2>

            <ul className="footer__list">
              {transparencyLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Municipalidad
            de Limón
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
