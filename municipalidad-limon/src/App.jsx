// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

function Home() {
  return <h1>Inicio</h1>;
}

function Servicios() {
  return <h1>Servicios</h1>;
}

function Transparencia() {
  return <h1>Transparencia</h1>;
}




function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
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