import React, { useState, useEffect } from 'react';
import Item from './Item';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const mockData = [
      {id: 1,title: 'Item 1',description: 'Detalhes',price: 'R$: 300,00',pictureUrl: 'https://picsum.photos/id/1/200/200'},
      {id: 2,title: 'Item 2',description: 'Detalhes',price: 'R$: 100,00',pictureUrl: 'https://picsum.photos/id/2/200/200'},
      {id: 3,title: 'Item 3',description: 'Detalhes',price: 'R$: 600,00',pictureUrl: 'https://picsum.photos/id/3/200/200'},
      {id: 4,title: 'Item 4',description: 'Detalhes',price: 'R$: 450,00',pictureUrl: 'https://picsum.photos/id/4/200/200'},
      {id: 5,title: 'Item 5',description: 'Detalhes',price: 'R$: 230,00',pictureUrl: 'https://picsum.photos/id/5/200/200'},
      {id: 6,title: 'Item 6',description: 'Detalhes',price: 'R$: 870,00',pictureUrl: 'https://picsum.photos/id/6/200/200'},
      {id: 7,title: 'Item 7',description: 'Detalhes',price: 'R$: 320,00',pictureUrl: 'https://picsum.photos/id/7/200/200'},
      {id: 8,title: 'Item 8',description: 'Detalhes',price: 'R$: 700,00',pictureUrl: 'https://picsum.photos/id/8/200/200'}
    ];

    const fetchItems = async () => {
      return mockData;
    };

    fetchItems().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {items.map((item) => (
        <Item id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl}/>
      ))}
    </div>
  )   
}

export default ItemList;