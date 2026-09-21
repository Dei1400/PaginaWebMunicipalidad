import './Button.css';

function Button({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  disabled = false,
  className = '',
}) {
  return (
    <button
      type={type}
      className={`button button--${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;  