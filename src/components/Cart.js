import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';

function Cart() {
  const { cartItems, removeItem, clear } = useCartContext();

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleClearCart = () => {
    clear();
  };

  const renderCartItem = (item) => {
    return (
      <div key={item.id} className="card mb-3">
        <div className="row g-0">
          <div className="col-md-2">
            <img src={item.pictureUrl} className="img-fluid" alt={item.title} />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">Preço: R$ {item.price}</p>
              <p className="card-text">Quantidade: {item.quantity}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remover Item
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return (
        <div>
          <p>Nenhum item no carrinho.</p>
          <Link to="/" className="btn btn-success">
            Voltar para o início
          </Link>
        </div>
      );
    }

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
      <div className="row">
        <div className="col-md-8">
          {cartItems.map(renderCartItem)}
        </div>
        <div className="col-md-4 border rounded my-auto py-5">
          <div className="d-flex flex-column align-items-center">
            <p className="fw-bold">Total: R$ {total.toFixed(2)}</p>
            <Link to="/checkout" className="btn btn-success">
              Finalizar Compra
            </Link>
            <button className="btn btn-danger mt-3" onClick={handleClearCart}>
              Limpar Carrinho
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container bg-white p-4">
      <h1 className="text-center">Carrinho</h1>
      {renderCartItems()}
    </div>
  );
}

export default Cart;
