import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-col">
          <h4>Legales</h4>
          <ul>
            <li>Términos y condiciones</li>
            <li>Política de privacidad</li>
            <li>Aviso legal</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quiénes somos</h4>
          <ul>
            <li><Link to="/historia">Historia</Link></li>
            <li>Misión y visión</li>
            <li>Trabaja con nosotros</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>Atención al cliente</li>
            <li>Redes sociales</li>
            <li>Sucursales</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Cartelera</h4>
          <ul>
            <li>Cine+</li>
            <li><Link to="/membresias">Membresías</Link></li>
            <li>Preventas</li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2026 Cinépolis. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
