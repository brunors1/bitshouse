import React from 'react';
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div className='container bg-secondary p-2'>
        <div className='text-center bg-light rounded'>
                <h1 className='text-success'>FAQ</h1>
                <h4 className='pb-2'>Perguntas Frequentes</h4>
        </div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" 
                    aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <strong className="text-success">Quais são os métodos de pagamento aceitos pela BitsHouse?</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body fw-semibold">
                        Nós aceitamos diversos metódos de pagamento, desde Boleto, Cartão de Crédito e PIX, ou até mesmo Débito Online.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" 
                    aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <strong className="text-success">Quanto tempo leva para processar e despachar um pedido?</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body fw-semibold">
                       O tempo para despachar os itens pode variar, normalmente sendo de 1 dia útil.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" 
                    aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong className="text-success">Qual é a política de devolução da BitsHouse?</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body fw-semibold">
                        A política de devolução da Bitshouse é a mesma do CDC, itens podem ser devolvidos em até 7 dias após o recebimento.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" 
                    aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        <strong className="text-success">Vocês oferecem garantia nos componentes de computador?</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                    <div className="accordion-body fw-semibold">
                        Todos os componentes vendidos possuem garantia, sendo 3 meses com nossa loja e o restante com o fabricante.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" 
                    aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                        <strong className="text-success">Quais são as opções de envio disponíveis?</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                    <div className="accordion-body fw-semibold">
                        Enviamos todos os produtos via correios e também por transportadoras cadastradas.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" 
                    aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                        <strong className="text-success">Vocês realizam entregas internacionais?</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
                    <div className="accordion-body fw-semibold">
                        No momento nós trabalhamos apenas com entregas nacionais.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" 
                    aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                        <strong className="text-success">Posso acompanhar o status do meu pedido?</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse">
                    <div className="accordion-body fw-semibold">
                        Sim, nós enviamos via e-mail os dados de seu pedido junto com o codigo de acompanhamento.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" 
                    aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                        <strong className="text-success">Como faço para cancelar um pedido?</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse">
                    <div className="accordion-body fw-semibold">
                        Para cancelar seu pedido entre em contato conosco para que possamos validar a situação do pedido. <Link to="/about">Clique Aqui</Link>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" 
                    aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                        <strong className="text-success">Quais são as medidas de segurança adotadas para proteger meus dados pessoais?</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse">
                    <div className="accordion-body fw-semibold">
                        Seus dados pessoais e de compra estão totalmente protegidos com a gente, nós usamos criptografia, 
                        segurança de servidores, acesso restrito e atualizamos constamente nossa segurança virtual.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" 
                    aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
                        <strong className="text-success">Vocês oferecem assistência técnica para a instalação dos componentes?</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTen" className="accordion-collapse collapse">
                    <div className="accordion-body fw-semibold">
                        Não trabalhamos com a instalação de componentes, apenas com a vendas deles.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEleven" 
                    aria-expanded="false" aria-controls="panelsStayOpen-collapseEleven">
                        <strong className="text-success">Como faço para acompanhar as últimas novidades e promoções da BitsHouse?</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseEleven" className="accordion-collapse collapse">
                    <div className="accordion-body fw-semibold">
                        Nós temos uma Newsletter com todas as novidades e promoções da BitsHosue, basta assinar logo abaixo do site para receber e-mail com nossas as nossas novidades.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwelve" 
                    aria-expanded="false" aria-controls="panelsStayOpen-collapseTwelve">
                        <strong className="text-success">Posso devolver um produto danificado durante o transporte?</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwelve" className="accordion-collapse collapse">
                    <div className="accordion-body fw-semibold">
                        Claro, apenas pedimos que nossos clientes antes de abrir a caixa tire fotos ou grave para verificarmos como o item foi recebido, com essas informações entre e contato conosco <Link to="/about">Aqui</Link>.
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Faq;
