// src/components/ui/LineaDeTiempo.jsx

function LineaDeTiempo({ cuadrenios }) {
  return (
    <div className="gobierno__timeline">
      {cuadrenios.map((cuadrenio, i) => (
        <div key={i} className="gobierno__timeline-item">
          <div className="gobierno__timeline-punto" />
          <div>
            <p className="gobierno__timeline-periodo">{cuadrenio.periodo}</p>
            <p>Alcalde: {cuadrenio.alcalde}</p>
            <p>Vicealcaldías: {cuadrenio.vicealcaldias}</p>
            <p>Concejo: {cuadrenio.concejo}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LineaDeTiempo;