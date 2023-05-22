import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      const db = getFirestore();
      const itemsCollectionRef = collection(db, 'Items');

      let itemsQuery;
      if (categoryId) {
        const categoryQuery = query(itemsCollectionRef, where('category', '==', categoryId));
        itemsQuery = categoryQuery;
      } else {
        itemsQuery = itemsCollectionRef;
      }

      try {
        const querySnapshot = await getDocs(itemsQuery);
        const itemsData = querySnapshot.docs.map((doc) => doc.data());
        setFilteredItems(itemsData);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div className="container bg-secondary p-2">
      <section className="my-2">
        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        ) : (
          <ItemList items={filteredItems} />
        )}
      </section>
    </div>
  );
}

export default ItemListContainer;