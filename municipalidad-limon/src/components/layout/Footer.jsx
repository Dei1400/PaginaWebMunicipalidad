// src/components/layout/Footer.jsx

import Container from '../ui/Container';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div>
            <h2>Municipalidad de Limón</h2>
            <p>
              Gobierno local al servicio de la comunidad limonense.
            </p>
          </div>

          <div>
            <h2>Contacto</h2>
            <p>Teléfono: 2758-4444</p>
            <p>alcaldia@municlimon.go.cr</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Municipalidad de Limón
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;