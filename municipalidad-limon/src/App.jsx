import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './features/home/Home';
import StatusPage from './features/status/StatusPage';
import Tramites from './features/tramites/Tramites';
import Transparencia from './features/transparencia/Transparencia';
import GobiernoMunicipal from './features/gobierno-municipal/GobiernoMunicipal';
import Servicios from './features/servicios/Servicios';
import Canton from './features/canton/Canton';
import Municipalidad from './features/municipalidad/Municipalidad';

function Servicios() {
  return <h1>Servicios</h1>;
}


function Noticias() {
  return <h1>Noticias</h1>;
}

function Contacto() {
  return <h1>Contacto</h1>;
}

function App() {
  return (
    <Layout>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/tramites" element={<Tramites />} />
        <Route path="/tramites/:categoryId" element={<Tramites />} />
        <Route path="/municipalidad" element={<Municipalidad />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route
          path="/en-construccion"
          element={<StatusPage variant="construction" />}
        />
        <Route
          path="/error-interno"
          element={<StatusPage variant="error" />}
        />
        <Route path="/gobierno-municipal" element={<GobiernoMunicipal />} />
        <Route path="/canton" element={<Canton />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Layout>
  );
}

export default App;
