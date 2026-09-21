// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Link from './components/ui/Link';
import Card from './components/ui/Card';

function Inicio(){
  return (
    <section className="section">
      <div className="container">

        <h1>Municipalidad de Limón</h1>

        <p>
          Encuentre información, servicios y trámites
          municipales.
        </p>

        <div className="card-grid">

          <Card
            icon="🏛️"
            title="Servicios municipales"
            description="Consulte los principales servicios disponibles para la comunidad."
          >
            <Link to="/servicios" variant="arrow">
              Ver servicios
            </Link>
          </Card>

          <Card
            icon="📄"
            title="Trámites"
            description="Consulte requisitos, documentos y pasos para realizar sus trámites."
          >
            <Link to="/tramites" variant="arrow">
              Ver trámites
            </Link>
          </Card>

          <Card
            icon="ℹ️"
            title="Transparencia"
            description="Acceda a información pública, participación ciudadana y datos municipales."
          >
            <Link to="/transparencia" variant="arrow">
              Ver información
            </Link>
          </Card>

        </div>
      </div>
    </section>
  );
}
function Servicios() {
  return <h1>Servicios</h1>;
}

function Tramites() {
  return <h1>Trámites</h1>;
}

function Transparencia() {
  return <h1>Transparencia</h1>;
}

function Gobierno() {
  return <h1>Gobierno</h1>;
}

function Canton() {
  return <h1>Cantón</h1>;
}




function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/tramites" element={<Tramites />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/gobierno" element={<Gobierno />} />
        <Route path="/canton" element={<Canton />} />
      </Routes>
    </Layout>
  );
}

export default App;
