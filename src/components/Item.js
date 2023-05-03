import React from "react";


function Item ({id, title, price, pictureUrl, description}) {
    return (
            <div className="col">
                <div className="card h-100" key={id}>
                    <img className='card-img-top' src={pictureUrl} alt={title} />
                    <div className="card-body mx-auto text-center">
                        <h2 className="card-title">{title}</h2>
                        <h4 className="card-text">{price}</h4>
                        <button type="button" className="btn btn-success">{description}</button>
                    </div>
                </div>
            </div>
    )
}

export default Item;