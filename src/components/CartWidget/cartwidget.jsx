import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <>
            <div className="cart">
                <div className="btn-group">
                    <div className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                    <i className="bi bi-cart4"></i> Carrito (0)
                    </div>
                    <ul className="dropdown-menu">
                        <li><Link to={`/`} className="dropdown-item">No tienes ningun producto</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default CartWidget;