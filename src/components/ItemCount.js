import React, { useState } from 'react';

function ItemCount({ stock, initial=1, onAdd }) {
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
      setCount(initial);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      if (parsedValue <= stock && parsedValue >= 1) {
        setCount(parsedValue);
      } else if (parsedValue > stock) {
        setCount(stock);
      } else if (parsedValue < 1) {
        setCount(1);
      }
    }
  };

  return (
    <div className="square">
      <div className="input-group mb-2 rounded border-success-subtle">
        <button className="btn btn-warning border-end" onClick={handleDecrease}>
          <i className="fas fa-minus"></i>
        </button>
        <input
          type="text"
          className="form-control text-center border-0 fw-bold"
          value={count}
          onChange={handleInputChange}
        />
        <button className="btn btn-warning border-start" onClick={handleIncrease}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="m-auto mb-2 d-grid gap-2">
        <button
          className="btn btn-warning fw-semibold"
          onClick={handleAdd}
          disabled={stock === 0}
        >
          {stock === 0 ? 'Fora de estoque' : `Adicionar ao carrinho`}
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
