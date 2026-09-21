import './Alert.css';

function Alert({
  children,
  title,
  variant = 'info',
  className = '',
}) {
  const classes = `alert alert--${variant} ${className}`.trim();

  return (
    <div
      className={classes}
      role={variant === 'error' ? 'alert' : 'status'}
    >
      <div className="alert__content">
        {title && (
          <h2 className="alert__title">
            {title}
          </h2>
        )}

        <div className="alert__message">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Alert;