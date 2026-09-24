import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import { municipalidadCategories } from '../../data/municipalidad';
import './Municipalidad.css';

function DetalleInstitucion({ data }) {
  return (
    <>
      <p>{data.historia}</p>
      <div className="muni__vision-mision">
      </div>
      <h4>Valores institucionales</h4>
      <ul className="muni__checklist">
        {data.valores.map((valor) => (
          <li key={valor}>{valor}</li>
        ))}
      </ul>
      <h4>Rol dentro del cantón</h4>
      <ul className="muni__checklist">
        {data.rol.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function DetalleOrganizacion({ data }) {
  const [abierta, setAbierta] = useState(0);

  return (
    <>
      <p>{data.descripcion}</p>
      <div className="muni__areas-grid">
        {data.areas.map((area) => (
          <div key={area.nombre} className="muni__area-card">
            <p className="muni__area-nombre">{area.nombre}</p>
            <p>{area.descripcion}</p>
          </div>
        ))}
      </div>

      <h4>Direcciones y unidades</h4>
      <div className="muni__acordeon">
        {data.direcciones.map((direccion, index) => (
          <div key={direccion.nombre} className="muni__acordeon-item">
            <button
              type="button"
              className="muni__acordeon-pregunta"
              aria-expanded={abierta === index}
              onClick={() => setAbierta(abierta === index ? -1 : index)}
            >
              {direccion.nombre}
              <span aria-hidden="true">{abierta === index ? '-' : '+'}</span>
            </button>
            {abierta === index && (
              <ul className="muni__acordeon-respuesta">
                {direccion.unidades.map((unidad) => (
                  <li key={unidad}>{unidad}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function DetalleDirectorio({ data }) {
  return (
    <>
      <p>{data.descripcion}</p>
      <table className="muni__tabla">
        <thead>
          <tr>
            <th>Departamento / Oficina</th>
            <th>Teléfono</th>
            <th>Correo electrónico</th>
          </tr>
        </thead>
        <tbody>
          {data.contactos.map((fila) => (
            <tr key={fila.departamento}>
              <td>{fila.departamento}</td>
              <td>{fila.telefono}</td>
              <td>{fila.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function DetalleContacto({ data }) {
  return (
    <>
      <h4>Ubicación principal</h4>
      <p>{data.ubicacion}</p>
      <h4>Horario de atención</h4>
      <p>{data.horario}</p>
      <h4>Vías de contacto general</h4>
      <ul className="muni__checklist">
        {data.vias.map((via) => (
          <li key={via}>{via}</li>
        ))}
      </ul>
    </>
  );
}

function DetalleDependencias({ data }) {
  return (
    <>
      <p>{data.descripcion}</p>
      <div className="muni__dependencias-grid">
        {data.dependencias.map((dep) => (
          <div key={dep.nombre} className="muni__dependencia-card">
            <p className="muni__dependencia-nombre">{dep.nombre}</p>
            <p>{dep.descripcion}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function DetalleTrabaje({ data }) {
  return (
    <>
      <p>{data.descripcion}</p>
      <h4>Convocatorias y vacantes</h4>
      <ul className="muni__checklist">
        {data.convocatorias.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h4>Requisitos generales</h4>
      <ul className="muni__checklist">
        {data.requisitos.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h4>Proceso de selección</h4>
      <ol className="muni__pasos">
        {data.proceso.map((paso) => (
          <li key={paso.numero}>
            <span className="muni__paso-numero">{paso.numero}</span>
            <p>{paso.texto}</p>
          </li>
        ))}
      </ol>
      <p>
        <strong>Registro de elegibles:</strong> envía tu oferta de servicios a{' '}
        <a href={`mailto:${data.registro.correo}`}>{data.registro.correo}</a> con el asunto
        &ldquo;{data.registro.asunto}&rdquo;.
      </p>
    </>
  );
}

function renderDetalle(category) {
  switch (category.id) {
    case 'institucion':
      return <DetalleInstitucion data={category.data} />;
    case 'organizacion':
      return <DetalleOrganizacion data={category.data} />;
    case 'directorio':
      return <DetalleDirectorio data={category.data} />;
    case 'contacto':
      return <DetalleContacto data={category.data} />;
    case 'dependencias':
      return <DetalleDependencias data={category.data} />;
    case 'trabaje-con-nosotros':
      return <DetalleTrabaje data={category.data} />;
    default:
      return null;
  }
}

function Municipalidad() {
  const [selectedId, setSelectedId] = useState(municipalidadCategories[0].id);
  const selected = municipalidadCategories.find((category) => category.id === selectedId);

  return (
    <div className="muni">
      <PageHeader
        title="La Municipalidad"
        description="Conozca la institución, su organización interna, el directorio de contactos y las oportunidades laborales de la Municipalidad de Limón."
        breadcrumbItems={[{ label: 'La Municipalidad' }]}
      />

      <section className="section muni__folder-section" aria-labelledby="muni-categories-title">
        <div className="container">
          <h2 id="muni-categories-title">Explore la Municipalidad</h2>

          <div className="muni__tabs" role="tablist" aria-label="Secciones de La Municipalidad">
            {municipalidadCategories.map((category) => {
              const isSelected = category.id === selectedId;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`muni__tab muni__tab--${category.color} ${
                    isSelected ? 'muni__tab--active' : ''
                  }`}
                  onClick={() => setSelectedId(category.id)}
                >
                  {category.title}
                </button>
              );
            })}
          </div>

          {selected && (
            <div className={`muni__folder-body muni__folder-body--${selected.color}`} role="tabpanel">
              {renderDetalle(selected)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Municipalidad;