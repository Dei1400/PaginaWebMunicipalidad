import { Link as RouterLink } from 'react-router-dom';
import './Link.css';

function Link({
  children,
  to,
  href,
  variant = 'default',
  external = false,
  className = '',
  ...props
}) {
  const classes = `link link--${variant} ${className}`.trim();

  if (external) {
    return (
      <a
        href={href || to}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
        <span className="link__external-icon" aria-hidden="true">
          ↗
        </span>
      </a>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={to} className={classes} {...props}>
      {children}
    </RouterLink>
  );
}

export default Link;