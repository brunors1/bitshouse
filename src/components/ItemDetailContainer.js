import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId: itemIdParam } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const db = getFirestore();
      const itemDocRef = doc(db, 'items', itemIdParam);

      try {
        const itemDocSnapshot = await getDoc(itemDocRef);
        if (itemDocSnapshot.exists()) {
          const itemData = itemDocSnapshot.data();
          setItem(itemData);
        } else {
          console.log('Item not found');
        }
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
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
    );
  }

  return (
    <section>
      <div className="container bg-white">
        <ItemDetail
          id={item.id}
          key={item.id}
          title={item.title}
          price={item.price}
          pictureUrl={item.pictureUrl}
          description={item.description}
          stock={item.stock}
          subCategory={item.subCategory}
          category={item.category}
        />
      </div>
    </section>
  );
}

export default ItemDetailContainer;
