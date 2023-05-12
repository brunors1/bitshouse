import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

function ItemDetail({id, category, pictureUrl, title, description, price, stock}) {
  const [quantity, setQuantity] = useState(0);
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);

  const handleAddToCart = (count) => {
    setQuantity(count);
  };

  const handleCepChange = (event) => {
    const cepValue = event.target.value;
    const onlyNumbers = /^[0-9]+$/.test(cepValue);
    if (onlyNumbers || cepValue === '') {
      setCep(cepValue);
    }
  };  

  const handleSearchCep = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setAddress(data);
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <div key={id}>
        <div className='row border p-4'>
            <div className='col-md-6 text-start align-self-center fw-semibold text-dark'>
            <Link className='btn btn-success fw-semibold' to="/">Lista de Itens</Link>
            </div>
            <div className='col-md-6 text-end'>
            <button className='btn btn-outline-danger rounded mx-2'><i className="fa-regular fa-heart fa-lg"></i></button>
            <button className='btn btn-outline-primary rounded'><i className="fa-solid fa-share-nodes fa-lg"></i></button>
            </div>
        </div>
        <div className="row p-5 border">
            <div className="col-md-6 text-center">
            <img  className='img-fluid' src={pictureUrl} alt={title}/>
            </div>
            <div className="col-md-6 border rounded bg-dark text-white p-5 my-auto">
            <h2 className='p-2'>{title}</h2>
            <h5 className='p-2'>{description}</h5>
            <h3 className='text-success p-2'><i className="fa-sharp fa-solid fa-barcode text-white me-3"></i>{price}</h3>
            <p className='p-2'>Estoque: <span className='border rounded px-3 py-2 fw-bold text-warning'>{stock}</span></p>
            <div className="mt-4">
                <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control fw-semibold"
                    placeholder="CEP"
                    value={cep}
                    onChange={handleCepChange}
                    pattern="[0-9]*"
                    title="Por favor, insira apenas números"
                />
                <button
                    type="button"
                    className="btn btn-success fw-semibold"
                    onClick={handleSearchCep}
                >
                    Calcular Frete
                </button>
                </div>
                {address && address.erro === undefined && (
                <div className="my-3">
                    <p>
                    Preço do frete: <strong>Frete Grátis</strong>  <i className="fa-solid fa-truck text-warning"></i>
                    </p>
                </div>
                )}
            </div>
            {stock === 0 ? (
                <p>Fora de estoque</p>
            ) : (
                <div className="d-grid">
                {quantity === 0 ? (
                    <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
                ) : (
                    <Link className='btn btn-success mt-2 fw-semibold' to="/cart" type='button'>Ir para o Carrinho</Link>
                )}
                </div>
            )}
            </div>
        </div>
        </div>
    );
}

export default ItemDetail;