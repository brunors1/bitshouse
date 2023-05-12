import React from "react";


function Item ({id, title, price, pictureUrl, buttonLabel}) {
    return (
            <div className="col" key={id}>
                <div className="card h-100">
                    <img className='card-img-top' src={pictureUrl} alt={title} />
                    <div className="card-body mx-auto text-center">
                        <h5 className="card-title">{title}</h5>
                    </div>
                    <h4 className="card-text text-center">{price}</h4>
                    <div className="card-footer d-grid">
                        <button type="button" className="btn btn-success">{buttonLabel}</button>
                    </div>
                </div>
            </div>
    )
}

export default Item;