// src/components/layout/Navbar.jsx

import { NavLink } from 'react-router-dom';
import Container from '../ui/Container';

const navigationItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Municipalidad', path: '/municipalidad' },
  { label: 'Transparencia', path: '/transparencia' },
  { label: 'Noticias', path: '/noticias' },
  { label: 'Contacto', path: '/contacto' },
];

function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <Container>
        <ul className="navbar__list">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
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
      </Container>
    </nav>
  );
}

export default Navbar;