import React from "react";
import "./css/Cart.css";

const Cart = ({ cartItems, onRemoveFromCart, onBackToStore }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.precio, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">🛒 Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-items-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.nombre}</h4>
                  <p>S/. {item.precio}</p>
                </div>
                <button
                  className="cart-remove-button"
                  onClick={() => onRemoveFromCart(index)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: S/. {calculateTotal()}</h3>
          </div>
        </>
      )}
      <button className="back-button" onClick={onBackToStore}>
        🔙 Seguir Comprando
      </button>
    </div>
  );
};

export default Cart;
