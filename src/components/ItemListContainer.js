import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import mockData from "./mockData";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      const filtered = filterItemsByCategory(categoryId);
      setFilteredItems(filtered);
    } else {
      setFilteredItems(allItems);
    }
  }, [categoryId, allItems]);

  const getMockData = () => {
    return new Promise((resolve, reject) => {
      resolve(mockData);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getMockData();
        setAllItems(result);
        setTimeout(() => setLoading(false), 2000); // delay de 2 segundos
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const filterItemsByCategory = (category) => {
    return allItems.filter((item) => item.category === category);
  };

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
