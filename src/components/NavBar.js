import React from 'react';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container gap-3">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand text-success fs-2" to="/">BITS<span className="text-white">House</span></Link>
            <div className="collapse navbar-collapse fs-5" id="navbarTogglerDemo03">
              <div className="mx-auto">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link mx-2" to="/">Inicio</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle mx-2" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Produtos
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/category/hardware">
                          Hardware
                        </Link>
                      </li>
                      <li><hr className="dropdown-divider"/></li>
                      <li>
                        <Link className="dropdown-item" to="/category/monitores">
                          Monitores
                        </Link>
                      </li>
                      <li><hr className="dropdown-divider"/></li>
                      <li>
                        <Link className="dropdown-item" to="/category/perifericos">
                          Periféricos
                        </Link>
                      </li>
                      <li><hr className="dropdown-divider"/></li>
                      <li>
                        <Link className="dropdown-item" to="/category/acessorios">
                          Acessórios
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2" to="/about">Sobre</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2" to="/contact">Contato</Link>
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
              <Link className="nav-link p-2 border rounded bg-success" to="/account">
                <i className="fa-solid fa-user fa-lg text-white"></i>
              </Link>
            </div>
          </div>
        </nav>
    );
}

export default NavBar;