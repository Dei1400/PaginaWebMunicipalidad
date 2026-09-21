// src/components/ui/TablaSesiones.jsx

function TablaSesiones({ calendario, transmision }) {
  return (
    <div className="gobierno__tabla-wrap">
      <table className="gobierno__tabla">
        <thead>
          <tr>
            <th>Tipo de sesión</th>
            <th>Día / hora</th>
          </tr>
        </thead>
        <tbody>
          {calendario.map((fila, i) => (
            <tr key={i}>
              <td>{fila.tipo}</td>
              <td>
                {fila.dia}
                {fila.hora !== '—' && ` · ${fila.hora}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {transmision && (
        <a
          href={transmision}
          target="_blank"
          rel="noreferrer"
          className="gobierno__transmision"
        >
          ▶ Ver transmisión en vivo
        </a>
      )}
    </div>
  );
}

export default TablaSesiones;