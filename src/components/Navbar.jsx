import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        Tienda React
      </Link>
      <div className="categories">
        <Link to="/category/vehiculos">Vehículos</Link>
        <Link to="/category/tecnologia">Tecnología</Link>
      </div>
      <Link to="/cart" className="cart-icon">
        🛒 {cart.length}
      </Link>
    </nav>
  );
};

export default Navbar;
