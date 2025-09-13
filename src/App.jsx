import React, { useState } from "react";
import "./index.css";
import Header from "./componentes/Header";
import ProductCard from "./componentes/ProductCard";
import productos from "./data/productos";
import Cart from "./componentes/Cart";
import Footer from "./componentes/Footer";

const App = () => {
  const [page, setPage] = useState("store"); // "store" o "cart"
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (producto) => {
    setCartItems((prev) => [...prev, producto]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header
        cartCount={cartItems.length}
        onCartClick={() => setPage("cart")}
      />

      <main className="contenido">
        {page === "store" && (
          <>
            <h2>Bienvenido a la Tienda de Repuesto de Autos</h2>
            <p>Aquí encontrarás repuestos de calidad para tu vehículo 🚗🔧.</p>

            <div className="product-grid">
              {productos.map((prod) => (
                <ProductCard
                  key={prod.id}
                  nombre={prod.nombre}
                  precio={prod.precio}
                  imagen={prod.imagen}
                  onAddToCart={() => handleAddToCart(prod)}
                />
              ))}
            </div>
          </>
        )}

        {page === "cart" && (
          <Cart
            cartItems={cartItems}
            onRemoveFromCart={handleRemoveFromCart}
            onBackToStore={() => setPage("store")}
          />
        )}
      </main>

      <Footer />
    </>
  );
};

export default App;
