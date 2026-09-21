// src/pages/Gobierno.jsx

import { useState } from 'react';
import Section from '../components/ui/Section';
import { gobiernoSecciones } from '../data/gobiernoMunicipal';
import '../styles/gobierno.css';

function Gobierno() {
  const [activo, setActivo] = useState(gobiernoSecciones[0].slug);
  const seccion = gobiernoSecciones.find((s) => s.slug === activo);

  return (
    
    <Section title="Gobierno Municipal" className="gobierno">
      <p className="gobierno__intro">
        Conozca la estructura de gobierno de la Municipalidad de Limón: quién
        la dirige, cómo se integra el Concejo Municipal y dónde consultar
        sesiones, acuerdos e información de períodos anteriores.
      </p>

      <nav className="gobierno__nav-list" aria-label="Secciones de Gobierno Municipal">
        {gobiernoSecciones.map((s) => (
          <button
            key={s.slug}
            type="button"
            className={
              s.slug === activo
                ? 'gobierno__nav-link gobierno__nav-link--active'
                : 'gobierno__nav-link'
            }
            onClick={() => setActivo(s.slug)}
          >
            {s.titulo}
          </button>
        ))}
      </nav>

      <article className="gobierno__detail">
        <h3>{seccion.titulo}</h3>
        {seccion.contenido.map((parrafo, i) => (
          <p key={i}>{parrafo}</p>
        ))}
      </article>
    </Section>
  );
}

export default Gobierno;