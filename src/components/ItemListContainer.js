import React, { Fragment, useState } from "react";
import ItemCount from "./ItemCount";

const Greetings = ({texto}) => {
  return (
    <h1 className="text-center">{texto}</h1>
  )
}

function ItemListContainer() {
  const handleAdd = (count) => {
    console.log(`Adicionar ${count} itens ao carrinho`);
  }

  return (
    <div className="container">
      <section className="bg-white">
        <Greetings texto="Olá, Seja Bem Vindo(a) a minha futura loja virtual!"/>
        <Greetings texto="Aqui teremos diversos hardwares e componentes de computador."/>
      </section>
      <section>
        <ItemCount stock={10} initial={1} onAdd={handleAdd}/>
      </section>
    </div>
  );
}

export default ItemListContainer;
