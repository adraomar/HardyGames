import React from 'react';
import logo from '../../assets/images/logo.png';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-white">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <Link to={`/`} className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img src={logo} className="logo" alt="" />
                    </Link>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to={`/`} className="button-5 mx-1 link-light">Inicio</Link></li>
                        <li><Link to={`/`} className="button-5 mx-1 link-light">Productos</Link></li>
                        <li><Link to={`/nosotros`} className="button-5 mx-1 link-light">Sobre Nosotros</Link></li>
                    </ul>

                    <div className="col-md-3 text-end"></div>
                </header>
            </div>
        </>
    );
}

export default Navbar;