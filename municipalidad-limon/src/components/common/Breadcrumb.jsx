import { Link } from 'react-router-dom';
import './Breadcrumb.css';

function Breadcrumb({ items = [] }) {
  return (
    <nav
      className="breadcrumb"
      aria-label="Ruta de navegación"
    >
      <ol className="breadcrumb__list">
        <li className="breadcrumb__item">
          <Link to="/">Inicio</Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="breadcrumb__item"
            >
              <span
                className="breadcrumb__separator"
                aria-hidden="true"
              >
                /
              </span>

              {isLast || !item.path ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link to={item.path}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;