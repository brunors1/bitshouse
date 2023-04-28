import React, { Fragment } from "react";
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container gap-3">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand text-success fs-2" href="#">BITS<span className="text-white">House</span></a>
            <div className="collapse navbar-collapse fs-5" id="navbarTogglerDemo03">
              <div className="mx-auto">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link mx-2" href="#">Inicio</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle mx-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Produtos
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Hardware</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Monitores</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Periféricos</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Acessórios</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">Sobre</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">Contato</a>
                  </li>
                </ul>
              </div>
              <div id="Search">
                <form className="input-group" role="search">
                  <input type="search" className="form-control" placeholder="Procurar"/>
                  <button className="btn btn-success" type="submit" id="search"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
              </div>
            </div>
            <div className="d-flex gap-3">
              <CartWidget/>
              <a className="nav-link p-2 border rounded bg-success" href="#">
                <i className="fa-solid fa-user fa-lg text-white"></i>
              </a>
            </div>
          </div>
        </nav>
    );
}

export default NavBar;