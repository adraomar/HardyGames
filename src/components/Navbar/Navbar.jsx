import React from 'react';
import './navbar.css';
import logo from './hardygames-logo.png';

const Navbar = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/#" className="d-flex align-items-start mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src={logo} alt="" />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li className="active"><a href="/#" className="nav-link px-2 text-white">Inicio</a></li>
                        <li><a href="/#" className="nav-link px-2 text-white">Ofertas</a></li>
                        <li><a href="/#" className="nav-link px-2 text-white">Sobre Nosotros</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Buscar producto..." aria-label="Search" aria-describedby="btnBuscar"/>
                            <button className="btn btn-outline-secondary" type="button" id="btnBuscar"><i className="bi bi-search"></i></button>
                        </div>
                    </form>

                    <div className="text-end">
                        <button id="btnVerCarrito" type="button" className="btn btn-outline-light mx-3"><i className="bi bi-cart" style={{fontSize: 18}}></i><span className="badge text-bg-success ms-3">4</span></button>
                        <button id="btnConectarse" type="button" className="btn btn-warning me-2">Conectarse</button>
                        <button id="btnRegistrarse" type="button" className="btn btn-outline-danger">Registrarse</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;