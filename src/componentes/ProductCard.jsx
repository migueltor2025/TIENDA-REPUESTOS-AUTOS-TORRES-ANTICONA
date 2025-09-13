import React from "react";
import "./css/ProductCard.css";

const ProductCard = ({ nombre, precio, imagen, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={imagen} alt={nombre} className="product-image" />
      <h3 className="product-title">{nombre}</h3>
      <p className="product-price">S/. {precio}</p>
      <button className="product-button" onClick={onAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
