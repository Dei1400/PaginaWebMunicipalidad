import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import { cantonCategories } from '../../data/canton';
import historiaFondo from '../../assets/imagenes/rioblanco.jpg';
import geografiaFondo from '../../assets/imagenes/valle.jpg';
import './Canton.css';

const fotosPorCategoria = {
  historia: historiaFondo,
  geografia: geografiaFondo,
};

const anchaPorCategoria = new Set(['distritos', 'patrimonio', 'turismo', 'datos-canton']);

function DetalleHistoria({ data }) {
  return (
    <div className="canton__timeline">
      {data.hitos.map((hito) => (
        <div key={hito.periodo} className="canton__timeline-item">
          <div className="canton__timeline-punto" aria-hidden="true" />
          <div>
            <p className="canton__timeline-periodo">{hito.periodo}</p>
            <p>{hito.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function DetalleGeografia({ data }) {
  return data.descripcion.map((parrafo, index) => <p key={index}>{parrafo}</p>);
}

function DetalleDistritos({ data }) {
  const [activo, setActivo] = useState(data.distritos[0].nombre);

  return (
    <div className="canton__distritos-grid">
      <div>
        {data.distritos.map((distrito) => {
          const isActivo = distrito.nombre === activo;

          return (
            <div key={distrito.nombre} className="canton__distrito-item">
              <button
                type="button"
                className={`canton__distrito-boton ${
                  isActivo ? 'canton__distrito-boton--activo' : ''
                }`}
                aria-expanded={isActivo}
                onClick={() => setActivo(distrito.nombre)}
              >
                <span>{distrito.nombre}</span>
                <span className="canton__distrito-numero">{distrito.numero}</span>
              </button>
              {isActivo && (
                <div className="canton__distrito-detalle">
                  <p>{distrito.descripcion}</p>
                  <p className="canton__distrito-cp">
                    Código postal: {distrito.codigoPostal}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <img
        src={data.mapa}
        alt="Mapa de los distritos del cantón de Limón"
        className="canton__mapa"
      />
    </div>
  );
}

function DetalleCultura({ data }) {
  return (
    <>
      <p>{data.descripcion}</p>

      <ul className="canton__checklist">
        {data.elementos.map((elemento) => (
          <li key={elemento}>{elemento}</li>
        ))}
      </ul>

      <h3 className="canton__subtitulo">Gastronomía tradicional</h3>
      <div className="canton__gastronomia-grid">
        {data.gastronomia.map((plato) => (
          <div key={plato.nombre} className="canton__gastronomia-card">
            <p className="canton__gastronomia-nombre">{plato.nombre}</p>
            <p>{plato.descripcion}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function DetallePatrimonio({ data }) {
  return (
    <div className="canton__galeria">
      {data.items.map((item) => (
        <div key={item.nombre} className="canton__galeria-card">
          <p className="canton__galeria-nombre">{item.nombre}</p>
          <p>{item.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

function DetalleTurismo({ data }) {
  return (
    <div className="canton__galeria">
      {data.atractivos.map((atractivo) => (
        <div key={atractivo.nombre} className="canton__galeria-card">
          <p className="canton__galeria-nombre">{atractivo.nombre}</p>
          <p>{atractivo.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

function DetalleDatos({ data }) {
  return (
    <div className="canton__stats-grid">
      {data.estadisticas.map((stat) => (
        <div key={stat.etiqueta} className="canton__stat-card">
          <p className="canton__stat-valor">{stat.valor}</p>
          <p className="canton__stat-etiqueta">{stat.etiqueta}</p>
        </div>
      ))}
    </div>
  );
}

function renderDetalle(category) {
  switch (category.id) {
    case 'historia':
      return <DetalleHistoria data={category.data} />;
    case 'geografia':
      return <DetalleGeografia data={category.data} />;
    case 'distritos':
      return <DetalleDistritos data={category.data} />;
    case 'cultura-identidad':
      return <DetalleCultura data={category.data} />;
    case 'patrimonio':
      return <DetallePatrimonio data={category.data} />;
    case 'turismo':
      return <DetalleTurismo data={category.data} />;
    case 'datos-canton':
      return <DetalleDatos data={category.data} />;
    default:
      return null;
  }
}

function Canton() {
  const [selectedId, setSelectedId] = useState(cantonCategories[0].id);
  const selected = cantonCategories.find((category) => category.id === selectedId);
  const foto = fotosPorCategoria[selectedId];
  const esAncha = anchaPorCategoria.has(selectedId);

  return (
    <div className="canton">
      <PageHeader
        title="El Cantón"
        description="Conozca la historia, geografía, distritos, cultura y datos del cantón de Limón."
        breadcrumbItems={[{ label: 'El Cantón' }]}
      />

      <div className="canton__tabs-wrapper">
        <div className="container">
          <div className="canton__tabs" role="tablist" aria-label="Secciones de El Cantón">
            {cantonCategories.map((category) => {
              const isSelected = category.id === selectedId;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`canton__tab canton__tab--${category.color} ${
                    isSelected ? 'canton__tab--active' : ''
                  }`}
                  onClick={() => setSelectedId(category.id)}
                >
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`canton__panel canton__panel--${selected.color}`}
        style={foto ? { backgroundImage: `url(${foto})` } : undefined}
        role="tabpanel"
      >
        <div className="container">
          <div className={`canton__tarjeta ${esAncha ? 'canton__tarjeta--ancha' : ''}`}>
            <p className="canton__eyebrow">{selected.title}</p>
            <h2>{selected.summary}</h2>
            {renderDetalle(selected)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canton;