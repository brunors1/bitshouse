import React, { Fragment, useState, useEffect } from "react";
import Greetings from "./Greetings";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [showItemList, setShowItemList] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowItemList(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleAdd = (count) => {
    console.log(`Adicionar ${count} itens ao carrinho`);
  };

  return (
    <div className="container">
      <section className="bg-white my-2">
        <Greetings texto="Olá, Seja Bem Vindo(a) a minha futura loja virtual!" />
        <Greetings texto="Aqui teremos diversos hardwares e componentes de computador." />
      </section>
      <section className="my-2">
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      </section>
      {showItemList && (
        <section id="itemList" className="my-2">
          <ItemList />
        </section>
      )}
    </div>
  );
}

export default ItemListContainer;
