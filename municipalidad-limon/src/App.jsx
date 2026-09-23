import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './features/home/Home';
import Tramites from './features/tramites/Tramites';
import GobiernoMunicipal from './features/gobierno-municipal/GobiernoMunicipal';

function Servicios() {
  return <h1>Servicios</h1>;
}

function Municipalidad() {
  return <h1>Municipalidad</h1>;
}

function Transparencia() {
  return <h1>Transparencia</h1>;
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
        <Route path="/municipalidad" element={<Municipalidad />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/gobierno-municipal" element={<GobiernoMunicipal />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Layout>
  );
}

export default App;