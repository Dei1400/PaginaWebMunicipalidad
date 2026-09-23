import { useEffect, useState } from 'react';

// Constantes de configuración y almacenamiento
const STORAGE_KEY = 'municipalidad-limon:accessibility:v1';
const MIN_TEXT_SCALE = 80;
const MAX_TEXT_SCALE = 200;
const TEXT_SCALE_STEP = 10;
const MAX_SPACING_LEVEL = 3;

// Preferencias iniciales por defecto
const DEFAULT_PREFERENCES = {
  textScale: 100,
  spacingLevel: 0,
  colorMode: 'default',
  underlineLinks: false,
  largeCursor: false,
  readingGuide: false,
};

// Valores de espaciado predefinidos (letras y palabras)
const SPACING_VALUES = [
  { letterSpacing: 'normal', wordSpacing: 'normal' },
  { letterSpacing: '0.04em', wordSpacing: '0.05em' },
  { letterSpacing: '0.08em', wordSpacing: '0.1em' },
  { letterSpacing: '0.12em', wordSpacing: '0.16em' },
];

// Mantiene un valor dentro de un rango mínimo y máximo permitido
function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

// Valida y formatea las preferencias para asegurar que no haya valores corruptos o fuera de los límites
function normalizePreferences(storedPreferences) {
  const requestedScale = Number(storedPreferences?.textScale);
  const normalizedScale = Number.isFinite(requestedScale)
    ? clamp(
        Math.round(requestedScale / TEXT_SCALE_STEP) * TEXT_SCALE_STEP,
        MIN_TEXT_SCALE,
        MAX_TEXT_SCALE,
      )
    : DEFAULT_PREFERENCES.textScale;

  const requestedSpacing = Number(storedPreferences?.spacingLevel);
  const normalizedSpacing = Number.isInteger(requestedSpacing)
    ? clamp(requestedSpacing, 0, MAX_SPACING_LEVEL)
    : DEFAULT_PREFERENCES.spacingLevel;

  const colorMode = ['default', 'inverted', 'grayscale'].includes(
    storedPreferences?.colorMode,
  )
    ? storedPreferences.colorMode
    : DEFAULT_PREFERENCES.colorMode;

  return {
    textScale: normalizedScale,
    spacingLevel: normalizedSpacing,
    colorMode,
    underlineLinks: storedPreferences?.underlineLinks === true,
    largeCursor: storedPreferences?.largeCursor === true,
    readingGuide: storedPreferences?.readingGuide === true,
  };
}

// Obtiene las preferencias desde el almacenamiento local del navegador
function loadPreferences() {
  try {
    const storedPreferences = window.localStorage.getItem(STORAGE_KEY);

    return storedPreferences
      ? normalizePreferences(JSON.parse(storedPreferences))
      : { ...DEFAULT_PREFERENCES };
  } catch {
    return { ...DEFAULT_PREFERENCES };
  }
}

// Remueve todas las clases y variables CSS de accesibilidad aplicadas al documento
function clearDocumentPreferences() {
  const root = document.documentElement;
  const body = document.body;

  root.style.removeProperty('--accessibility-font-size');
  root.classList.remove(
    'accessibility-color-inverted',
    'accessibility-color-grayscale',
    'accessibility-large-cursor',
  );
  root.removeAttribute('data-accessibility-font-size');

  body.style.removeProperty('--accessibility-letter-spacing');
  body.style.removeProperty('--accessibility-word-spacing');
  body.classList.remove('accessibility-underline-links');
  body.removeAttribute('data-accessibility-text-spacing');
}

// Hook principal para manejar la lógica y el estado de la accesibilidad
function useAccessibilityPreferences() {
  const [preferences, setPreferences] = useState(loadPreferences);

  // Aplica los cambios visuales al documento cada vez que las preferencias cambian
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const spacing = SPACING_VALUES[preferences.spacingLevel];

    if (preferences.textScale === DEFAULT_PREFERENCES.textScale) {
      root.style.removeProperty('--accessibility-font-size');
      root.removeAttribute('data-accessibility-font-size');
    } else {
      root.style.setProperty(
        '--accessibility-font-size',
        `${preferences.textScale}%`,
      );
      root.setAttribute('data-accessibility-font-size', 'true');
    }

    if (preferences.spacingLevel === DEFAULT_PREFERENCES.spacingLevel) {
      body.style.removeProperty('--accessibility-letter-spacing');
      body.style.removeProperty('--accessibility-word-spacing');
      body.removeAttribute('data-accessibility-text-spacing');
    } else {
      body.style.setProperty(
        '--accessibility-letter-spacing',
        spacing.letterSpacing,
      );
      body.style.setProperty(
        '--accessibility-word-spacing',
        spacing.wordSpacing,
      );
      body.setAttribute('data-accessibility-text-spacing', 'true');
    }

    root.classList.toggle(
      'accessibility-color-inverted',
      preferences.colorMode === 'inverted',
    );
    root.classList.toggle(
      'accessibility-color-grayscale',
      preferences.colorMode === 'grayscale',
    );
    root.classList.toggle(
      'accessibility-large-cursor',
      preferences.largeCursor,
    );
    body.classList.toggle(
      'accessibility-underline-links',
      preferences.underlineLinks,
    );

    // Guarda las preferencias actualizadas en el almacenamiento local
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    } catch {
      // The preferences remain active even when browser storage is unavailable.
    }
  }, [preferences]);

  // Limpia el documento cuando el componente o hook se desmonta
  useEffect(() => clearDocumentPreferences, []);

  // Funciones controladoras para aumentar o disminuir el tamaño del texto
  function increaseTextSize() {
    setPreferences((currentPreferences) => {
      if (currentPreferences.textScale >= MAX_TEXT_SCALE) {
        return currentPreferences;
      }

      return {
        ...currentPreferences,
        textScale: currentPreferences.textScale + TEXT_SCALE_STEP,
      };
    });
  }

  function decreaseTextSize() {
    setPreferences((currentPreferences) => {
      if (currentPreferences.textScale <= MIN_TEXT_SCALE) {
        return currentPreferences;
      }

      return {
        ...currentPreferences,
        textScale: currentPreferences.textScale - TEXT_SCALE_STEP,
      };
    });
  }

  // Funciones controladoras para el espaciado de lectura
  function increaseTextSpacing() {
    setPreferences((currentPreferences) => {
      if (currentPreferences.spacingLevel >= MAX_SPACING_LEVEL) {
        return currentPreferences;
      }

      return {
        ...currentPreferences,
        spacingLevel: currentPreferences.spacingLevel + 1,
      };
    });
  }

  function decreaseTextSpacing() {
    setPreferences((currentPreferences) => {
      if (currentPreferences.spacingLevel <= 0) {
        return currentPreferences;
      }

      return {
        ...currentPreferences,
        spacingLevel: currentPreferences.spacingLevel - 1,
      };
    });
  }

  // Funciones para activar/desactivar modos de visualización específicos
  function toggleColorMode(colorMode) {
    setPreferences((currentPreferences) => ({
      ...currentPreferences,
      colorMode:
        currentPreferences.colorMode === colorMode ? 'default' : colorMode,
    }));
  }

  function toggleUnderlineLinks() {
    setPreferences((currentPreferences) => ({
      ...currentPreferences,
      underlineLinks: !currentPreferences.underlineLinks,
    }));
  }

  function toggleLargeCursor() {
    setPreferences((currentPreferences) => ({
      ...currentPreferences,
      largeCursor: !currentPreferences.largeCursor,
    }));
  }

  function toggleReadingGuide() {
    setPreferences((currentPreferences) => ({
      ...currentPreferences,
      readingGuide: !currentPreferences.readingGuide,
    }));
  }

  // Restaura todas las configuraciones a sus valores predeterminados
  function resetPreferences() {
    setPreferences({ ...DEFAULT_PREFERENCES });
  }

  // Determina si el usuario tiene alguna configuración personalizada activa
  const hasActivePreferences = Object.entries(DEFAULT_PREFERENCES).some(
    ([preferenceName, defaultValue]) =>
      preferences[preferenceName] !== defaultValue,
  );

  // Expone el estado y los métodos para usarlos en la interfaz
  return {
    preferences,
    limits: {
      minimumTextScale: MIN_TEXT_SCALE,
      maximumTextScale: MAX_TEXT_SCALE,
      maximumSpacingLevel: MAX_SPACING_LEVEL,
    },
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
  };
}

export default useAccessibilityPreferences;
