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
  return (
    <nav
      className="navbar"
      aria-label="Navegación principal"
    >
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