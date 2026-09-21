import { useId } from 'react';
import './Input.css';

function Input({
  id,
  label,
  helperText,
  error,
  required = false,
  className = '',
  inputClassName = '',
  type = 'text',
  ...props
}) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const helperId = helperText ? `${inputId}-helper` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [errorId, !errorId && helperId].filter(Boolean).join(' ');
  const hasError = Boolean(error);

  return (
    <div className={`input-field ${className}`.trim()}>
      {label && (
        <label className="input-field__label" htmlFor={inputId}>
          <span>{label}</span>
          {required && (
            <>
              <span className="input-field__required" aria-hidden="true">
                *
              </span>
              <span className="input-field__required-text">obligatorio</span>
            </>
          )}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        required={required}
        aria-invalid={hasError ? 'true' : undefined}
        aria-describedby={describedBy || undefined}
        className={`input-field__control ${inputClassName}`.trim()}
        {...props}
      />

      {hasError ? (
        <p className="input-field__message input-field__message--error" id={errorId} role="alert">
          {error}
        </p>
      ) : (
        helperText && (
          <p className="input-field__message" id={helperId}>
            {helperText}
          </p>
        )
      )}
    </div>
  );
}

export default Input;
