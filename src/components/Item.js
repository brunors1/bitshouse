import React from "react";
import { Link } from "react-router-dom";


function Item ({id, title, price, pictureUrl, buttonLabel, categoryId}) {
    return (
            <div className="col" key={id}>
                <div className="card h-100">
                    <p className="text-center fw-semibold text-bg-info">{categoryId}</p>
                    <img className='card-img-top' src={pictureUrl} alt={title} />
                    <div className="card-body mx-auto text-center">
                        <h5 className="card-title">{title}</h5>
                    </div>
                    <h4 className="card-text text-center">{price}</h4>
                    <div className="card-footer d-grid">
                        <Link className="btn btn-success" to={`/item/${id}`}>{buttonLabel}</Link>
                    </div>
                </div>
            </div>
    )
}

export default Item;