import React from 'react';

function ItemDetail({ id, title, price, pictureUrl, description, stock, category, subCategory }) {
  return (
    <div key={id}>
        <div className='row border py-2'>
            <div className='col-md-6 text-start'>
                {/* Futuro Atalho */}
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
                <div className='d-grid'>
                    <button className='btn btn-success mt-2 fw-semibold' type='button'>Comprar</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ItemDetail;
