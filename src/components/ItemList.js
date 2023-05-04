import React, { useState, useEffect } from 'react';
import Item from './Item';

const mockData = [
  {id: 1,title: 'Item 1',buttonLabel: 'Detalhes',price: 'R$: 300,00',pictureUrl: 'https://picsum.photos/id/1/200/200'},
  {id: 2,title: 'Item 2',buttonLabel: 'Detalhes',price: 'R$: 100,00',pictureUrl: 'https://picsum.photos/id/2/200/200'},
  {id: 3,title: 'Item 3',buttonLabel: 'Detalhes',price: 'R$: 600,00',pictureUrl: 'https://picsum.photos/id/3/200/200'},
  {id: 4,title: 'Item 4',buttonLabel: 'Detalhes',price: 'R$: 450,00',pictureUrl: 'https://picsum.photos/id/4/200/200'},
  {id: 5,title: 'Item 5',buttonLabel: 'Detalhes',price: 'R$: 230,00',pictureUrl: 'https://picsum.photos/id/5/200/200'},
  {id: 6,title: 'Item 6',buttonLabel: 'Detalhes',price: 'R$: 870,00',pictureUrl: 'https://picsum.photos/id/6/200/200'},
  {id: 7,title: 'Item 7',buttonLabel: 'Detalhes',price: 'R$: 320,00',pictureUrl: 'https://picsum.photos/id/7/200/200'},
  {id: 8,title: 'Item 8',buttonLabel: 'Detalhes',price: 'R$: 700,00',pictureUrl: 'https://picsum.photos/id/8/200/200'}
];

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
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
        <Item key={item.id} id={item.id} title={item.title} buttonLabel={item.buttonLabel} price={item.price} pictureUrl={item.pictureUrl}/>
      ))}
    </div>
  );
}

export default ItemList;
