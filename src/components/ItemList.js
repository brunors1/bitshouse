import React from 'react';
import Item from './Item';

function ItemList({ items }) {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          pictureUrl={item.pictureUrl}
          buttonLabel={item.buttonLabel}
        />
      ))}
    </div>
  );
}

export default ItemList;
