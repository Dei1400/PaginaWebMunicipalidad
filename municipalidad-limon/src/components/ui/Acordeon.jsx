// src/components/ui/Acordeon.jsx

import { useState } from 'react';

function Acordeon({ temas }) {
  const [abierto, setAbierto] = useState(0);

  return (
    <div className="gobierno__acordeon">
      {temas.map((tema, i) => (
        <div key={i} className="gobierno__acordeon-item">
          <button
            type="button"
            className="gobierno__acordeon-pregunta"
            onClick={() => setAbierto(abierto === i ? null : i)}
          >
            {tema.pregunta}
            <span>{abierto === i ? '−' : '+'}</span>
          </button>
          {abierto === i && (
            <p className="gobierno__acordeon-respuesta">{tema.respuesta}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Acordeon;