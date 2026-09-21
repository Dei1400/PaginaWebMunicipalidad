// src/components/ui/TarjetaAutoridad.jsx

function TarjetaAutoridad({ nombre, cargo, foto }) {
  const iniciales = nombre
    .split(' ')
    .map((palabra) => palabra[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="gobierno__autoridad">
      {foto ? (
        <img src={foto} alt={nombre} className="gobierno__autoridad-foto" />
      ) : (
        <div className="gobierno__autoridad-iniciales">{iniciales}</div>
      )}
      <div>
        <p className="gobierno__autoridad-nombre">{nombre}</p>
        <p className="gobierno__autoridad-cargo">{cargo}</p>
      </div>
    </div>
  );
}

export default TarjetaAutoridad;