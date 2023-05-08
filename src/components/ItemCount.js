import React, { useState } from 'react';
import "../styles/ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (count <= stock) {
      onAdd(count);
    }
  };

  return (
    <div className="bg-white p-4 square">
      <div className="input-group mb-2 border rounded border-success-subtle">
        <button className="btn btn-success" onClick={handleDecrease}>-</button>
        <span className="ms-auto my-auto">{count}</span>
        <button className="btn btn-success ms-auto " onClick={handleIncrease}>+</button>
      </div>
      <div className="input-group mx-auto mb-2 d-grid">
        <button className="btn btn-success" onClick={handleAdd} disabled={stock === 0}>
          {stock === 0 ? 'Fora de estoque' : `Adicionar ao carrinho`}
        </button>
      </div>
    </div>
  );
}

export default ItemCount;