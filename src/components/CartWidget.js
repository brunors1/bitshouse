import React, { Fragment } from "react";

function CartWidget() {
    return (
        <a className="nav-link p-2 border rounded bg-success" href="#">
          <i className="fa-solid fa-cart-shopping fa-lg text-white"></i>
        </a>
    );
}

export default CartWidget;