import { useEffect, useId, useRef, useState } from 'react';
import accessibilityLogo from '../../assets/accessibility_logo.png';
import useAccessibilityPreferences from '../common/accessibility/useAccessibilityPreferences.js';
import './AccessibilityWidget.css';

const EDITABLE_SELECTOR = [
  'input[type="text"]',
  'input[type="search"]',
  'textarea',
  '[contenteditable="true"]',
  '[contenteditable=""]',
].join(', ');

const READABLE_SELECTOR = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'li',
  'a',
  'button',
  'label',
  'td',
  'th',
  'dt',
  'dd',
  'blockquote',
  '[aria-label]',
].join(', ');

function getSpeechRecognitionConstructor() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function getReadableText(target) {
  if (!(target instanceof window.Element)) {
    return '';
  }

  const readableElement = target.closest(READABLE_SELECTOR) || target;

  if (
    readableElement instanceof window.HTMLInputElement ||
    readableElement instanceof window.HTMLTextAreaElement
  ) {
    return (
      readableElement.value ||
      readableElement.getAttribute('aria-label') ||
      readableElement.getAttribute('placeholder') ||
      ''
    ).trim();
  }

  return (
    readableElement.innerText ||
    readableElement.getAttribute('aria-label') ||
    readableElement.getAttribute('alt') ||
    ''
  ).trim();
}

function getEditableValue(target) {
  if (
    target instanceof window.HTMLInputElement ||
    target instanceof window.HTMLTextAreaElement
  ) {
    return target.value.trim();
  }

  if (target.isContentEditable) {
    return (target.innerText || target.textContent || '').trim();
  }

  return '';
}

function updateEditableValue(target, value) {
  if (target instanceof window.HTMLInputElement) {
    const valueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    )?.set;

    valueSetter?.call(target, value);
    target.dispatchEvent(new window.Event('input', { bubbles: true }));
    target.dispatchEvent(new window.Event('change', { bubbles: true }));
    return;
  }

  if (target instanceof window.HTMLTextAreaElement) {
    const valueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      'value',
    )?.set;

    valueSetter?.call(target, value);
    target.dispatchEvent(new window.Event('input', { bubbles: true }));
    target.dispatchEvent(new window.Event('change', { bubbles: true }));
    return;
  }

  if (target.isContentEditable) {
    target.textContent = value;
    target.dispatchEvent(
      new window.InputEvent('input', {
        bubbles: true,
        inputType: 'insertText',
        data: value,
      }),
    );
  }
}

function getRecognitionErrorMessage(errorCode) {
  const messages = {
    'audio-capture': 'No se encontró un micrófono disponible.',
    network: 'No fue posible conectar con el servicio de reconocimiento.',
    'no-speech': 'No se detectó voz. Intente nuevamente.',
    'not-allowed':
      'El navegador no concedió permiso para usar el micrófono. Revise sus permisos de privacidad.',
    'service-not-allowed':
      'El servicio de reconocimiento de voz no está disponible en este navegador.',
    'language-not-supported':
      'El navegador no admite el idioma configurado para el dictado.',
  };

  return messages[errorCode] || 'No fue posible completar el dictado.';
}

function ToggleControl({
  label,
  description,
  icon,
  pressed,
  onClick,
  disabled = false,
}) {
  return (
    <button
      type="button"
      className={`accessibility-widget__toggle ${pressed ? 'accessibility-widget__toggle--active' : ''}`}
      aria-pressed={pressed}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="accessibility-widget__toggle-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="accessibility-widget__toggle-content">
        <span className="accessibility-widget__toggle-label">{label}</span>
        <span className="accessibility-widget__toggle-description">
          {description}
        </span>
      </span>
    </button>
  );
}

function AccessibilityWidget() {
  const panelId = useId();
  const titleId = useId();
  const descriptionId = useId();
  const widgetRef = useRef(null);
  const launcherRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const shouldRestoreFocusRef = useRef(false);
  const guideRef = useRef(null);
  const recognitionRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [textToSpeechActive, setTextToSpeechActive] = useState(false);
  const [speechToTextActive, setSpeechToTextActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [speechSupport] = useState(() => ({
    textToSpeech:
      'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window,
    speechToText: Boolean(getSpeechRecognitionConstructor()),
  }));

  const {
    preferences,
    limits,
    hasActivePreferences,
    increaseTextSize,
    decreaseTextSize,
    increaseTextSpacing,
    decreaseTextSpacing,
    toggleColorMode,
    toggleUnderlineLinks,
    toggleLargeCursor,
    toggleReadingGuide,
    resetPreferences,
  } = useAccessibilityPreferences();

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      return;
    }

    if (shouldRestoreFocusRef.current) {
      previousFocusRef.current?.focus();
    }

    shouldRestoreFocusRef.current = false;
    previousFocusRef.current = null;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        shouldRestoreFocusRef.current = true;
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleOutsidePointerDown(event) {
      if (
        event.target instanceof window.Node &&
        !widgetRef.current?.contains(event.target)
      ) {
        shouldRestoreFocusRef.current = false;
        previousFocusRef.current = null;
        setIsOpen(false);
      }
    }

    document.addEventListener('pointerdown', handleOutsidePointerDown, true);

    return () =>
      document.removeEventListener(
        'pointerdown',
        handleOutsidePointerDown,
        true,
      );
  }, [isOpen]);

  useEffect(() => {
    if (!preferences.readingGuide) {
      return undefined;
    }

    function updateGuidePosition(event) {
      const guide = guideRef.current;

      if (guide) {
        const position = Math.max(0, event.clientY - guide.offsetHeight / 2);
        guide.style.transform = `translateY(${position}px)`;
      }
    }

    window.addEventListener('pointermove', updateGuidePosition, {
      passive: true,
    });

    return () => window.removeEventListener('pointermove', updateGuidePosition);
  }, [preferences.readingGuide]);

  useEffect(() => {
    if (!textToSpeechActive || !speechSupport.textToSpeech) {
      return undefined;
    }

    function readSelectedContent(event) {
      if (
        event.target instanceof window.Element &&
        event.target.closest('.accessibility-widget')
      ) {
        return;
      }

      const text = getReadableText(event.target);

      if (!text) {
        setStatusMessage('El elemento seleccionado no contiene texto legible.');
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      window.speechSynthesis.cancel();

      const utterance = new window.SpeechSynthesisUtterance(text);
      utterance.lang = 'es-CR';
      utterance.onstart = () => setStatusMessage('Leyendo el contenido seleccionado.');
      utterance.onend = () => setStatusMessage('Lectura finalizada.');
      utterance.onerror = () =>
        setStatusMessage('No fue posible leer el contenido seleccionado.');

      window.speechSynthesis.speak(utterance);
    }

    document.addEventListener('click', readSelectedContent, true);

    return () => {
      document.removeEventListener('click', readSelectedContent, true);
      window.speechSynthesis.cancel();
    };
  }, [speechSupport.textToSpeech, textToSpeechActive]);

  useEffect(() => {
    if (!speechToTextActive || !speechSupport.speechToText) {
      return undefined;
    }

    const SpeechRecognition = getSpeechRecognitionConstructor();
    let activeTarget = null;
    let accumulatedTranscript = '';
    let restartTimeoutId = null;
    document.body.classList.add('accessibility-speech-input-active');

    function stopPreviousRecognition() {
      if (restartTimeoutId !== null) {
        window.clearTimeout(restartTimeoutId);
        restartTimeoutId = null;
      }

      const previousRecognition = recognitionRef.current;

      if (previousRecognition) {
        recognitionRef.current = null;
        previousRecognition.abort();
      }
    }

    function startRecognition(target, continueDictation = false) {
      stopPreviousRecognition();

      if (!continueDictation || activeTarget !== target) {
        activeTarget = target;
        accumulatedTranscript = getEditableValue(target);
      }

      const recognition = new SpeechRecognition();
      let recognitionFailed = false;
      let receivedResult = false;

      recognition.lang = 'es-ES';
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognitionRef.current = recognition;

      recognition.onstart = () => {
        if (recognitionRef.current === recognition) {
          setIsListening(true);
          setStatusMessage('Escuchando. Dicte el texto para el campo seleccionado.');
        }
      };

      recognition.onresult = (event) => {
        if (recognitionRef.current !== recognition) {
          return;
        }

        let transcriptChunk = '';

        for (let resultIndex = event.resultIndex; resultIndex < event.results.length; resultIndex += 1) {
          if (event.results[resultIndex].isFinal) {
            transcriptChunk += event.results[resultIndex][0].transcript;
          }
        }

        if (transcriptChunk.trim()) {
          receivedResult = true;
          accumulatedTranscript = [
            accumulatedTranscript,
            transcriptChunk.trim(),
          ]
            .filter(Boolean)
            .join(' ');
          updateEditableValue(target, accumulatedTranscript);
          setStatusMessage('El texto dictado se agregó al campo seleccionado.');
        }
      };

      recognition.onerror = (event) => {
        if (recognitionRef.current !== recognition) {
          return;
        }

        recognitionFailed = true;
        setStatusMessage(getRecognitionErrorMessage(event.error));
      };

      recognition.onend = () => {
        if (recognitionRef.current === recognition) {
          recognitionRef.current = null;
          setIsListening(false);

          if (
            !recognitionFailed &&
            receivedResult &&
            activeTarget === target &&
            document.activeElement === target
          ) {
            setStatusMessage('Texto agregado. Puede continuar dictando.');
            restartTimeoutId = window.setTimeout(() => {
              restartTimeoutId = null;
              startRecognition(target, true);
            }, 250);
          } else if (!recognitionFailed) {
            setStatusMessage(
              'Dictado finalizado. Vuelva a enfocar el campo para continuar.',
            );
          }
        }
      };

      try {
        recognition.start();
      } catch {
        recognitionRef.current = null;
        setIsListening(false);
        setStatusMessage('No fue posible iniciar el reconocimiento de voz.');
      }
    }

    function handleEditableFocus(event) {
      if (
        event.target instanceof window.Element &&
        event.target.matches(EDITABLE_SELECTOR)
      ) {
        startRecognition(event.target);
      }
    }

    function handleEditableBlur(event) {
      if (
        event.target instanceof window.Element &&
        event.target.matches(EDITABLE_SELECTOR)
      ) {
        activeTarget = null;

        if (restartTimeoutId !== null) {
          window.clearTimeout(restartTimeoutId);
          restartTimeoutId = null;
        }

        recognitionRef.current?.stop();
      }
    }

    document.addEventListener('focusin', handleEditableFocus);
    document.addEventListener('focusout', handleEditableBlur);

    return () => {
      document.removeEventListener('focusin', handleEditableFocus);
      document.removeEventListener('focusout', handleEditableBlur);
      document.body.classList.remove('accessibility-speech-input-active');
      activeTarget = null;

      if (restartTimeoutId !== null) {
        window.clearTimeout(restartTimeoutId);
      }

      const currentRecognition = recognitionRef.current;
      recognitionRef.current = null;
      currentRecognition?.abort();
    };
  }, [speechSupport.speechToText, speechToTextActive]);

  function openPanel() {
    previousFocusRef.current = document.activeElement;
    shouldRestoreFocusRef.current = true;
    setIsOpen(true);
  }

  function closePanel() {
    shouldRestoreFocusRef.current = true;
    setIsOpen(false);
  }

  function toggleTextToSpeech() {
    if (!speechSupport.textToSpeech) {
      return;
    }

    const nextState = !textToSpeechActive;
    setTextToSpeechActive(nextState);

    if (nextState) {
      setStatusMessage(
        'Texto a voz activado. Seleccione contenido fuera del panel para escucharlo.',
      );
    } else {
      window.speechSynthesis.cancel();
      setStatusMessage('Texto a voz desactivado.');
    }
  }

  function toggleSpeechToText() {
    if (!speechSupport.speechToText) {
      return;
    }

    const nextState = !speechToTextActive;
    setSpeechToTextActive(nextState);

    if (nextState) {
      setStatusMessage(
        'Voz a texto activada. Enfoque un campo de texto para comenzar a dictar.',
      );
    } else {
      const currentRecognition = recognitionRef.current;
      recognitionRef.current = null;
      currentRecognition?.abort();
      setIsListening(false);
      setStatusMessage('Voz a texto desactivada.');
    }
  }

  function resetAllSettings() {
    resetPreferences();
    setTextToSpeechActive(false);
    setSpeechToTextActive(false);
    setIsListening(false);
    window.speechSynthesis?.cancel();
    const currentRecognition = recognitionRef.current;
    recognitionRef.current = null;
    currentRecognition?.abort();
    setStatusMessage('Se restablecieron las opciones de accesibilidad.');
  }

  const hasAnyActiveSetting =
    hasActivePreferences || textToSpeechActive || speechToTextActive;

  return (
    <div ref={widgetRef} className="accessibility-widget">
      <p
        className="accessibility-widget__announcer"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {statusMessage}
      </p>

      {preferences.readingGuide && (
        <div
          ref={guideRef}
          className="accessibility-reading-guide"
          aria-hidden="true"
        />
      )}

      {isOpen && (
        <section
          id={panelId}
          className="accessibility-widget__panel"
          role="dialog"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
        >
          <div className="accessibility-widget__header">
            <h2 id={titleId}>Opciones de accesibilidad</h2>
            <button
              ref={closeButtonRef}
              type="button"
              className="accessibility-widget__icon-button"
              onClick={closePanel}
              aria-label="Cerrar opciones de accesibilidad"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <p id={descriptionId} className="accessibility-widget__intro">
            Personalice la presentación y la interacción del sitio según sus
            necesidades.
          </p>

          <div className="accessibility-widget__content">
            <section
              className="accessibility-widget__section"
              aria-labelledby={`${titleId}-text`}
            >
              <h3 id={`${titleId}-text`}>Texto</h3>

              <div className="accessibility-widget__stepper">
                <div>
                  <span className="accessibility-widget__stepper-label">
                    Tamaño del texto
                  </span>
                  <output
                    className="accessibility-widget__stepper-value"
                    aria-live="polite"
                  >
                    {preferences.textScale}%
                  </output>
                </div>
                <div className="accessibility-widget__stepper-actions">
                  <button
                    type="button"
                    onClick={decreaseTextSize}
                    disabled={
                      preferences.textScale <= limits.minimumTextScale
                    }
                    aria-label="Disminuir el tamaño del texto"
                  >
                    A−
                  </button>
                  <button
                    type="button"
                    onClick={increaseTextSize}
                    disabled={
                      preferences.textScale >= limits.maximumTextScale
                    }
                    aria-label="Aumentar el tamaño del texto"
                  >
                    A+
                  </button>
                </div>
              </div>

              <div className="accessibility-widget__stepper">
                <div>
                  <span className="accessibility-widget__stepper-label">
                    Espaciado del texto
                  </span>
                  <output
                    className="accessibility-widget__stepper-value"
                    aria-live="polite"
                  >
                    Nivel {preferences.spacingLevel} de{' '}
                    {limits.maximumSpacingLevel}
                  </output>
                </div>
                <div className="accessibility-widget__stepper-actions">
                  <button
                    type="button"
                    onClick={decreaseTextSpacing}
                    disabled={preferences.spacingLevel <= 0}
                    aria-label="Disminuir el espaciado del texto"
                  >
                    −
                  </button>
                  <button
                    type="button"
                    onClick={increaseTextSpacing}
                    disabled={
                      preferences.spacingLevel >= limits.maximumSpacingLevel
                    }
                    aria-label="Aumentar el espaciado del texto"
                  >
                    +
                  </button>
                </div>
              </div>
            </section>

            <section
              className="accessibility-widget__section"
              aria-labelledby={`${titleId}-visual`}
            >
              <h3 id={`${titleId}-visual`}>Presentación</h3>
              <div className="accessibility-widget__toggle-grid">
                <ToggleControl
                  label="Invertir colores"
                  description="Invierte los colores de toda la página."
                  icon="◐"
                  pressed={preferences.colorMode === 'inverted'}
                  onClick={() => toggleColorMode('inverted')}
                />
                <ToggleControl
                  label="Tonos grises"
                  description="Elimina el color de la página."
                  icon="◑"
                  pressed={preferences.colorMode === 'grayscale'}
                  onClick={() => toggleColorMode('grayscale')}
                />
                <ToggleControl
                  label="Subrayar enlaces"
                  description="Hace más visibles los enlaces del sitio."
                  icon="U̲"
                  pressed={preferences.underlineLinks}
                  onClick={toggleUnderlineLinks}
                />
                <ToggleControl
                  label="Cursor grande"
                  description="Aumenta la visibilidad del puntero."
                  icon="↖"
                  pressed={preferences.largeCursor}
                  onClick={toggleLargeCursor}
                />
                <ToggleControl
                  label="Guía de lectura"
                  description="Muestra una línea que sigue el puntero."
                  icon="↔"
                  pressed={preferences.readingGuide}
                  onClick={toggleReadingGuide}
                />
              </div>
            </section>

            <section
              className="accessibility-widget__section"
              aria-labelledby={`${titleId}-voice`}
            >
              <h3 id={`${titleId}-voice`}>Herramientas de voz</h3>
              <div className="accessibility-widget__toggle-grid">
                <ToggleControl
                  label="Texto a voz"
                  description={
                    speechSupport.textToSpeech
                      ? 'Lee en voz alta el contenido que seleccione.'
                      : 'No está disponible en este navegador.'
                  }
                  icon="🔊"
                  pressed={textToSpeechActive}
                  onClick={toggleTextToSpeech}
                  disabled={!speechSupport.textToSpeech}
                />
                <ToggleControl
                  label="Voz a texto"
                  description={
                    speechSupport.speechToText
                      ? isListening
                        ? 'Escuchando el campo seleccionado.'
                        : 'Permite dictar en campos de texto.'
                      : 'No está disponible en este navegador.'
                  }
                  icon="🎤"
                  pressed={speechToTextActive}
                  onClick={toggleSpeechToText}
                  disabled={!speechSupport.speechToText}
                />
              </div>
            </section>
          </div>

          <div className="accessibility-widget__footer">
            {statusMessage && (
              <p className="accessibility-widget__status">{statusMessage}</p>
            )}
            <button
              type="button"
              className="accessibility-widget__reset"
              onClick={resetAllSettings}
              disabled={!hasAnyActiveSetting}
            >
              Restablecer opciones
            </button>
          </div>
        </section>
      )}

      <button
        ref={launcherRef}
        type="button"
        className="accessibility-widget__launcher"
        aria-label={`${isOpen ? 'Cerrar' : 'Abrir'} opciones de accesibilidad`}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={isOpen ? closePanel : openPanel}
      >
        <img
          className="accessibility-widget__launcher-icon"
          src={accessibilityLogo}
          alt=""
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

export default AccessibilityWidget;
