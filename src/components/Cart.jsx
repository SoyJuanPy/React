import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart">
      <h2>Carrito</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
