import React from "react";
import "./css/Header.css";
import logo from "../img/LOGO.png"; // 👉 importa tu logo

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="header">
      {/* Logo en la izquierda */}
      <div className="logo">
        <img src={logo} alt="Logo MT" />
      </div>

      {/* Título centrado */}
      <h1 className="header-title">
        Tienda de Repuestos de Autos: Torres Anticona
      </h1>

      {/* Carrito en la derecha */}
      <div className="cart-icon" onClick={onCartClick}>
        🛒
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
    </header>
  );
};

export default Header;
