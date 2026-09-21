// src/pages/gobiernoMunicipal.jsx

import { useState } from 'react';
import Section from '../components/ui/Section';
import TarjetaAutoridad from '../components/ui/TarjetaAutoridad';
import Checklist from '../components/ui/Checklist';
import Acordeon from '../components/ui/Acordeon';
import PasosNumerados from '../components/ui/PasosNumerados';
import TablaSesiones from '../components/ui/TablaSesiones';
import LineaDeTiempo from '../components/ui/LineaDeTiempo';
import {
  navGobierno,
  alcaldia,
  vicealcaldias,
  concejoMunicipal,
  secretariaConsejo,
  sesionesMunicipales,
  periodosAnteriores,
} from '../data/gobiernoMunicipal';
import { visionMision } from '../data/visionMision';
import '../styles/gobierno.css';

function Gobierno() {
  const [activo, setActivo] = useState(navGobierno[0].slug);

  return (
    <Section title="Gobierno Municipal" className="gobierno">
      <p className="gobierno__intro">
        Conozca la estructura de gobierno de la Municipalidad de Limón: quién
        la dirige, cómo se integra el Concejo Municipal y dónde consultar
        sesiones, acuerdos e información de períodos anteriores.
      </p>

      <div className="gobierno__vision-mision">
        <div>
          <h4>Visión</h4>
          <p>{visionMision.vision}</p>
        </div>
        <div>
          <h4>Misión</h4>
          <p>{visionMision.mision}</p>
        </div>
      </div>

      <nav className="gobierno__nav-list" aria-label="Secciones de Gobierno Municipal">
        {navGobierno.map((item) => (
          <button
            key={item.slug}
            type="button"
            className={
              item.slug === activo
                ? 'gobierno__nav-link gobierno__nav-link--active'
                : 'gobierno__nav-link'
            }
            onClick={() => setActivo(item.slug)}
          >
            {item.titulo}
          </button>
        ))}
      </nav>

      <article className="gobierno__detail">
        {activo === 'alcaldia' && (
          <>
            <h3>Alcaldía</h3>
            {alcaldia.descripcion.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <TarjetaAutoridad {...alcaldia.persona} />
            <Checklist items={alcaldia.funciones} />
          </>
        )}

        {activo === 'vicealcaldias' && (
          <>
            <h3>Vicealcaldías</h3>
            {vicealcaldias.descripcion.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="gobierno__autoridades-grid">
              {vicealcaldias.personas.map((persona, i) => (
                <TarjetaAutoridad key={i} {...persona} />
              ))}
            </div>
          </>
        )}

        {activo === 'consejo-municipal' && (
          <>
            <h3>Concejo Municipal</h3>
            <Acordeon temas={concejoMunicipal.temas} />
            <TarjetaAutoridad {...concejoMunicipal.presidencia} />
            <div className="gobierno__regidores">
              {concejoMunicipal.regidores.map((grupo, i) => (
                <div key={i} className="gobierno__partido">
                  <p className="gobierno__partido-nombre">{grupo.partido}</p>
                  <ul>
                    {grupo.nombres.map((nombre, j) => (
                      <li key={j}>{nombre}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {activo === 'secretaria-consejo' && (
          <>
            <h3>Secretaría del Concejo</h3>
            {secretariaConsejo.descripcion.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <PasosNumerados pasos={secretariaConsejo.pasos} />
          </>
        )}

        {activo === 'sesiones-municipales' && (
          <>
            <h3>Sesiones municipales</h3>
            {sesionesMunicipales.descripcion.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <TablaSesiones
              calendario={sesionesMunicipales.calendario}
              transmision={sesionesMunicipales.transmision}
            />
          </>
        )}

        {activo === 'periodos-anteriores' && (
          <>
            <h3>Períodos anteriores</h3>
            <LineaDeTiempo cuadrenios={periodosAnteriores.cuadrenios} />
            <p className="gobierno__archivo">{periodosAnteriores.archivo}</p>
          </>
        )}
      </article>
    </Section>
  );
}

export default Gobierno;