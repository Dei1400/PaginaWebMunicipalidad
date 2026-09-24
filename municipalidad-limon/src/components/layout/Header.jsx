import Container from '../ui/Container';
import Link from '../ui/Link';
import municipalLogo from '../../assets/logo-municipalidad-limón.jpg';
import './Header.css';

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
    <path className="header__social-icon-cutout" d="M10.4 14.8V9.2L15.2 12z" />
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
    <circle className="header__social-icon-cutout" cx="12" cy="10" r="2.4" />
  </svg>
);

const socialLinks = [
  {
    label: 'Facebook',
    icon: <IconFacebook />,
    href: 'https://www.facebook.com/213442062061381',
  },
  {
    label: 'Instagram',
    icon: <IconInstagram />,
    href: 'https://www.instagram.com/municlimon/',
  },
  {
    label: 'YouTube',
    icon: <IconYoutube />,
    href: 'https://www.youtube.com/@municlimon',
  },
  {
    label: 'TikTok',
    icon: <IconTiktok />,
    href: 'https://www.tiktok.com/@municlimon',
  },
  {
    label: 'Ubicación',
    icon: <IconLocation />,
    href: 'https://www.google.com/maps/search/?api=1&query=9.99311,-83.02562',
  },
];

function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__content">

          <Link
            to="/"
            className="header__brand"
          >
            <img
              className="header__logo"
              src={municipalLogo}
              alt=""
              aria-hidden="true"
            />
            <span className="header__title">
              Municipalidad de Limón
            </span>
          </Link>

          <div className="header__actions">
            <div className="header__socials" aria-label="Redes sociales y ubicación">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  external
                  className="header__social-link"
                  aria-label={item.label}
                >
                  {item.icon}
                </Link>
              ))}
            </div>

            <Link
              href="tel:+50627584444"
              className="header__phone"
            >
              <span className="header__phone-icon" aria-hidden="true">☎</span>
              <span className="header__phone-text">
                <span className="header__phone-label">Atención ciudadana</span>
                <span className="header__phone-number">2758-4444</span>
              </span>
            </Link>
          </div>

        </div>
      </Container>
    </header>
  );
}

export default Header;
