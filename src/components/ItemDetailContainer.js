import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { mockData } from './ItemList';
import { useParams } from 'react-router-dom';

const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId: itemIdParam } = useParams();

  useEffect(() => {
    const itemId = parseInt(itemIdParam);
    getItems().then(result => {
      const foundItem = result.find(item => item.id === itemId);
      setItem(foundItem);
    });
  }, [itemIdParam]);

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
        <ItemDetail key={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl} description={item.description} stock={item.stock} subCategory={item.subCategory} category={item.category}/>
      </div>
    </section>
  )
}

export default ItemDetailContainer;