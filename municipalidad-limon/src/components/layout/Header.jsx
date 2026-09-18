// src/components/layout/Header.jsx

import Container from '../ui/Container';

function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <a href="/" className="header__brand">
            <span className="header__title">
              Municipalidad de Limón
            </span>
          </a>

          <div className="header__contact">
            <span>2758-4444</span>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;