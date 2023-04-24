import React, { Fragment } from "react";

const Greetings = ({texto}) => {
    return (
        <h1 className="text-center">{texto}</h1>
    )
}

function ItemListContainer() {
    return (
       <div className="container">
            <section className="bg-white">
               <Greetings texto="Olá, Seja Bem Vindo(a) a minha futura loja virtual!"/>
               <Greetings texto="Aqui teremos diversos hardwares e componentes de computador."/>
            </section>
       </div>
    );
}

export default ItemListContainer;