import Container from '../ui/Container';
import Link from '../ui/Link';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__grid">
          <section className="footer__section">
            <h2 className="footer__title">
              Municipalidad de Limón
            </h2>

            <p>
              Gobierno local al servicio de la
              comunidad limonense.
            </p>
          </section>

          <section className="footer__section">
            <h2 className="footer__title">
              Contacto
            </h2>

            <ul className="footer__list">
              <li>
                <Link href="tel:+50627584444">
                  2758-4444
                </Link>
              </li>

              <li>
                <Link href="tel:+50627587073">
                  2758-7073
                </Link>
              </li>

              <li>
                <Link href="mailto:alcaldia@municlimon.go.cr">
                  alcaldia@municlimon.go.cr
                </Link>
              </li>
            </ul>
          </section>

          <section className="footer__section">
            <h2 className="footer__title">
              Accesos
            </h2>

            <ul className="footer__list">
              <li>
                <Link to="/servicios">
                  Servicios
                </Link>
              </li>

              <li>
                <Link to="/transparencia">
                  Transparencia
                </Link>
              </li>

              <li>
                <Link to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Municipalidad
            de Limón
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;