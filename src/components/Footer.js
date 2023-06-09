import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Footer = () => {
  const handleSubscribe = () => {
    Swal.fire({
      title: "Inscrição realizada!",
      text: "Agora você está inscrito em nossa newsletter.",
      icon: "success",
      confirmButtonText: "OK"
    });
  };

  return (
    <footer className="bg-dark" data-bs-theme="dark">
      <div className="container pt-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-success fw-semibold">Menu</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-dark-emphasis">
                  - Inicio
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-dark-emphasis">
                  - Produtos
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/about" className="nav-link p-0 text-dark-emphasis">
                  - Sobre
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/faq" className="nav-link p-0 text-dark-emphasis">
                  - FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-success fw-semibold">Categorias</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/category/hardware"
                  className="nav-link p-0 text-dark-emphasis"
                >
                  - Hardware
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/category/monitores"
                  className="nav-link p-0 text-dark-emphasis"
                >
                  - Monitores
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/category/perifericos"
                  className="nav-link p-0 text-dark-emphasis"
                >
                  - Periféricos
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/category/acessorios"
                  className="nav-link p-0 text-dark-emphasis"
                >
                  - Acessórios
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 offset-md-2 mb-3">
            <form>
              <h5 className="text-success">Inscreva-se para nossa newsletter</h5>
              <p className="text-dark-emphasis">
                Resumo mensal do que há de novo e promoções de tirar o fôlego.
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Endereço de e-mail
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="E-mail"
                />
                <button
                  className="btn btn-success fw-semibold"
                  type="button"
                  onClick={handleSubscribe}
                >
                  Inscrever
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 border-top">
          <p className="text-dark-emphasis">
            © 2023 BitsHouse, Todos os direitos reservados.
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link className="link-body-emphasis" to="/">
                <i className="fa-brands fa-twitter fa-lg"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="/">
                <i className="fa-brands fa-instagram fa-lg"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="/">
                <i className="fa-brands fa-facebook fa-lg"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
