import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Alert from '../../components/ui/Alert';
import Link from '../../components/ui/Link';
import { gobiernoCategories, visionMision } from '../../data/gobiernoMunicipal';
import './GobiernoMunicipal.css';

function personaIniciales(nombre) {
  return nombre
    .split(' ')
    .map((palabra) => palabra[0])
    .slice(0, 2)
    .join('');
}

function TarjetaPersona({ nombre, cargo, foto }) {
  return (
    <div className="gobierno__persona">
      {foto ? (
        <img src={foto} alt={nombre} className="gobierno__persona-foto" />
      ) : (
        <div className="gobierno__persona-iniciales" aria-hidden="true">
          {personaIniciales(nombre)}
        </div>
      )}
      <div>
        <p className="gobierno__persona-nombre">{nombre}</p>
        <p className="gobierno__persona-cargo">{cargo}</p>
      </div>
    </div>
  );
}

function DetalleAlcaldia({ data }) {
  return (
    <>
      <p>{data.descripcion}</p>
      <TarjetaPersona {...data.persona} />
      <ul className="gobierno__checklist">
        {data.funciones.map((funcion) => (
          <li key={funcion}>{funcion}</li>
        ))}
      </ul>
    </>
  );
}

function DetalleVicealcaldias({ data }) {
  return (
    <>
      <p>{data.descripcion}</p>
      <div className="gobierno__personas-grid">
        {data.personas.map((persona) => (
          <TarjetaPersona key={persona.nombre} {...persona} />
        ))}
      </div>
    </>
  );
}

function DetalleConcejo({ data }) {
  const [temaAbierto, setTemaAbierto] = useState(0);

  return (
    <>
      <div className="gobierno__acordeon">
        {data.temas.map((tema, index) => (
          <div key={tema.pregunta} className="gobierno__acordeon-item">
            <button
              type="button"
              className="gobierno__acordeon-pregunta"
              aria-expanded={temaAbierto === index}
              onClick={() => setTemaAbierto(temaAbierto === index ? -1 : index)}
            >
              {tema.pregunta}
              <span aria-hidden="true">{temaAbierto === index ? '-' : '+'}</span>
            </button>
            {temaAbierto === index && (
              <p className="gobierno__acordeon-respuesta">{tema.respuesta}</p>
            )}
          </div>
        ))}
      </div>

      <TarjetaPersona {...data.presidencia} />

      <div className="gobierno__regidores">
        {data.regidores.map((grupo) => (
          <div key={grupo.partido} className="gobierno__partido">
            <p className="gobierno__partido-nombre">{grupo.partido}</p>
            <ul>
              {grupo.nombres.map((nombre) => (
                <li key={nombre}>{nombre}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

function DetalleSecretaria({ data }) {
  return (
    <>
      <p>{data.descripcion}</p>
      <ol className="gobierno__pasos">
        {data.pasos.map((paso) => (
          <li key={paso.numero}>
            <span className="gobierno__paso-numero">{paso.numero}</span>
            <p>{paso.texto}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

function DetalleSesiones({ data }) {
  return (
    <>
      <p>{data.descripcion}</p>
      <table className="gobierno__tabla">
        <thead>
          <tr>
            <th>Tipo de sesión</th>
            <th>Día / hora</th>
          </tr>
        </thead>
        <tbody>
          {data.calendario.map((fila) => (
            <tr key={fila.tipo}>
              <td>{fila.tipo}</td>
              <td>
                {fila.dia}
                {fila.hora !== '—' && ` - ${fila.hora}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href={data.transmision} external variant="primary">
        Ver transmisión en vivo
      </Link>
    </>
  );
}

function DetallePeriodos({ data }) {
  return (
    <>
      <div className="gobierno__timeline">
        {data.cuadrenios.map((cuadrenio) => (
          <div key={cuadrenio.periodo} className="gobierno__timeline-item">
            <div className="gobierno__timeline-punto" aria-hidden="true" />
            <div>
              <p className="gobierno__timeline-periodo">{cuadrenio.periodo}</p>
              <p>Alcalde: {cuadrenio.alcalde}</p>
              <p>Vicealcaldías: {cuadrenio.vicealcaldias}</p>
              <p>Concejo: {cuadrenio.concejo}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="gobierno__archivo">{data.archivo}</p>
    </>
  );
}

function renderDetalle(category) {
  switch (category.id) {
    case 'alcaldia':
      return <DetalleAlcaldia data={category.data} />;
    case 'vicealcaldias':
      return <DetalleVicealcaldias data={category.data} />;
    case 'concejo-municipal':
      return <DetalleConcejo data={category.data} />;
    case 'secretaria-concejo':
      return <DetalleSecretaria data={category.data} />;
    case 'sesiones-municipales':
      return <DetalleSesiones data={category.data} />;
    case 'periodos-anteriores':
      return <DetallePeriodos data={category.data} />;
    default:
      return null;
  }
}

function GobiernoMunicipal() {
  const [selectedId, setSelectedId] = useState(gobiernoCategories[0].id);
  const selected = gobiernoCategories.find((category) => category.id === selectedId);

  return (
    <div className="gobierno">
      <PageHeader
        title="Gobierno Municipal"
        description="Conozca la estructura de gobierno de la Municipalidad de Limón: quién la dirige, cómo se integra el Concejo Municipal y dónde consultar sesiones, acuerdos e información de períodos anteriores."
        breadcrumbItems={[{ label: 'Gobierno Municipal' }]}
      />

      <section className="gobierno__vision-section">
        <div className="container">
          <div className="gobierno__vision-mision">
            <Alert title="Visión">{visionMision.vision}</Alert>
            <Alert title="Misión">{visionMision.mision}</Alert>
          </div>
        </div>
      </section>
      <section
        className="section gobierno__folder-section"
        aria-labelledby="gobierno-categories-title"
      >
        <div className="container">
          <p className="gobierno__eyebrow">Secciones</p>
          <h2 id="gobierno-categories-title">Explore la estructura de gobierno</h2>

          <div className="gobierno__tabs" role="tablist" aria-label="Secciones de Gobierno Municipal">
            {gobiernoCategories.map((category) => {
              const isSelected = category.id === selectedId;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`gobierno__tab gobierno__tab--${category.color} ${
                    isSelected ? 'gobierno__tab--active' : ''
                  }`}
                  onClick={() => setSelectedId(category.id)}
                >
                  {category.title}
                </button>
              );
            })}
          </div>

          {selected && (
            <div
              className={`gobierno__folder-body gobierno__folder-body--${selected.color}`}
              role="tabpanel"
            >
              <div className="gobierno__folder-heading">
                <span
                  className={`gobierno__folder-icon gobierno__folder-icon--${selected.color}`}
                  aria-hidden="true"
                >
                  {selected.icon}
                </span>
                <h3>{selected.title}</h3>
              </div>

              <div className="gobierno__folder-content">
                {renderDetalle(selected)}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default GobiernoMunicipal;
      