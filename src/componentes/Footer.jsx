import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <p>
          © {new Date().getFullYear()} Tienda de Repuesto de Autos - Torres Anticona Miguel Angel.
          Todos los derechos reservados.
        </p>
        <ul className="footer-links">
          <li><a href="#">Políticas de Privacidad</a></li>
          <li><a href="#">Términos y Condiciones</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">📕 Libro de Reclamaciones</a></li> {/* Nuevo */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
