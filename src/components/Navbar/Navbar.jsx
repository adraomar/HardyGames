import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="headertop_desc">
            <div className="wrap">
                <div className="nav_list">
                    <ul>
                        <li><a href="/#">Inicio</a></li>
                        <li><a href="/#">Sobre nosotros</a></li>
                        <li><a href="/#">Contacto</a></li>
                    </ul>
                </div>
                <div className="account_desc">
                    <ul>
                        <li><a href="/#">Registrarse</a></li>
                        <li><a href="/#">Iniciar sesion</a></li>
                        <li><a href="/#">Productos</a></li>
                        <li><a href="/#">Checkout</a></li>
                        <li><a href="/#">Mi cuenta</a></li>
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    );
}

export default Navbar;