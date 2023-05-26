import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';

function CartWidget() {
  const { cartItems } = useCartContext();

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <>
      {cartItems.length > 0 && (
        <Link className="nav-link p-2 border rounded bg-success" to="/cart">
          <i className="fa-solid fa-cart-shopping fa-lg text-white"></i>
          <span className="badge bg-danger ms-1">{getTotalItems()}</span>
        </Link>
      )}
    </>
  );
}

export default CartWidget;
