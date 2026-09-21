// src/components/layout/Header.jsx

import Container from '../ui/Container';
import logoLimon from '../../assets/imagenes/logo.png';

function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <a href="/" className="header__brand">
            <img src={logoLimon} alt="Escudo de la Municipalidad de Limón" style={{ height: 40 }} />
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