import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { mockData } from './ItemList';

const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItems().then(result => {
      setItem(result[0]);
    });
  }, []);

  if (!item) {
    return (
      <section>
        <div className="container d-flex justify-content-center bg-white">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Carregando produtos...</span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className='container bg-white'>
        <ItemDetail key={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl} description={item.description} stock={item.stock} />
      </div>
    </section>
  )
}

export default ItemDetailContainer;