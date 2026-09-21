import Breadcrumb from './Breadcrumb';
import './PageHeader.css';

function PageHeader({ title, description, breadcrumbItems = [] }) {
  return (
    <header className="page-header">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />

        <div className="page-header__content">
          <h1 className="page-header__title">{title}</h1>

          {description && (
            <p className="page-header__description">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}

export default PageHeader;