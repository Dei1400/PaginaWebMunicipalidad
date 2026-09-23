import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../ui/Container';
import './Navbar.css';

const navigationItems = [
  {
    label: 'Inicio',
    path: '/',
  },
  {
    label: 'Servicios',
    path: '/servicios',
  },
  {
    label: 'Trámites',
    path: '/tramites',
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
            aria-label="Alternar menú"
          >
            <span className="navbar__toggle-icon"></span>
          </button>

          <ul className={`navbar__list ${isOpen ? 'navbar__list--open' : ''}`}>
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'navbar__link navbar__link--active'
                      : 'navbar__link'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;