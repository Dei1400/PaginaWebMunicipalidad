// src/components/ui/PasosNumerados.jsx

function PasosNumerados({ pasos }) {
  return (
    <div className="gobierno__pasos">
      {pasos.map((paso) => (
        <div key={paso.numero} className="gobierno__paso">
          <div className="gobierno__paso-numero">{paso.numero}</div>
          <p>{paso.texto}</p>
        </div>
      ))}
    </div>
  );
}

export default PasosNumerados;