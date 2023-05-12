import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function CartWidget() {
    return (
        <Link className="nav-link p-2 border rounded bg-success" to="/cart">
          <i className="fa-solid fa-cart-shopping fa-lg text-white"></i>
        </Link>
    );
}

export default CartWidget;