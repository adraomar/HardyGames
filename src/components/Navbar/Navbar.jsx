import React from 'react';
import logo from '../../assets/images/logo2.png';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-white">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <Link to={`/`} className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <div className="logo">
                            <img src={logo} className="logo" alt="" />
                        </div>
                    </Link>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><button type="button" className="button-5 mx-1" role="button">Inicio</button></li>
                        <li><button type="button" className="button-5 mx-1" role="button">Productos</button></li>
                        <li><button type="button" className="button-5 mx-1" role="button">Sobre Nosotros</button></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <button type="button" className="button-68 mx-1" role="button">Conectarse</button>
                        <button type="button" className="button-68 mx-1" role="button">Registrarse</button>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Navbar;