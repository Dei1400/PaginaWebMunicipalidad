// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

function Home() {
  return <h1>Inicio</h1>;
}

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
        <Route path="/municipalidad" element={<Municipalidad />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Layout>
  );
}

export default App;