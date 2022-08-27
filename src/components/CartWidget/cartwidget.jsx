import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <>
            <div className="header_bottom_left my-3">
                <div className="categories">
                    <ul className="list-group">
                        <h3><i className="bi bi-cart4"></i> Carrito (0)</h3>
                        <li><Link to={`/`}>NO HAY ITEMS</Link></li>

                    </ul>
                </div>
            </div>
        </>
    );
}

export default CartWidget;