import './Card.css';

function Card({
  children,
  title,
  description,
  icon,
  image,
  href,
  className = '',
}) {
  const classes = `card ${className}`.trim();

  const content = (
    <>
      {image && (
        <div className="card__image-wrapper">
          <img
            src={image}
            alt=""
            className="card__image"
          />
        </div>
      )}

      {icon && (
        <div className="card__icon" aria-hidden="true">
          {icon}
        </div>
      )}

      <div className="card__content">
        {title && <h3 className="card__title">{title}</h3>}

        {description && (
          <p className="card__description">
            {description}
          </p>
        )}

        {children}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${classes} card--link`}>
        {content}
      </a>
    );
  }

  return <article className={classes}>{content}</article>;
}

export default Card;