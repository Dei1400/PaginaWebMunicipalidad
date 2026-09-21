import Container from '../ui/Container';
import Link from '../ui/Link';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__content">

          <Link
            to="/"
            className="header__brand"
          >
            <span className="header__title">
              Municipalidad de Limón
            </span>
          </Link>

          <div className="header__actions">
            <Link
              href="tel:+50627584444"
              variant="subtle"
            >
              2758-4444
            </Link>
          </div>

        </div>
      </Container>
    </header>
  );
}

export default Header;