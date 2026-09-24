import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../ui/Container';
import './Navbar.css';

const navigationItems = [
  {
    label: 'Inicio',
    path: '/',
    priority: 'primary',
  },
  {
    label: 'Servicios',
    path: '/servicios',
    priority: 'primary',
  },
  {
    label: 'Trámites',
    path: '/tramites',
    priority: 'primary',
  },
  {
    label: 'Gobierno Municipal',
    path: '/gobierno-municipal',
  },
  {
    label: 'Municipalidad',
    path: '/municipalidad',
  },
  {
    label: 'Cantón',
    path: '/canton',
  },
  {
    label: 'Transparencia',
    path: '/transparencia',
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <Container>
        <div className="navbar__inner">
          <button
            className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label="Alternar navegación principal"
          >
            <span className="navbar__toggle-icon"></span>
            <span className="navbar__toggle-text">Menú</span>
          </button>

          <ul
            id="primary-navigation"
            className={`navbar__list ${isOpen ? 'navbar__list--open' : ''}`}
          >
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? `navbar__link navbar__link--active navbar__link--${item.priority || 'default'}`
                      : `navbar__link navbar__link--${item.priority || 'default'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? 'navbar__cta navbar__cta--active'
                : 'navbar__cta'
            }
          >
            Atención ciudadana
          </NavLink>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
