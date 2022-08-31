import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ({ item, count }) => {
    let carrito = [];

    carrito.push(item);

    return (
        <>
            <div className="header_bottom_left my-3">
                <div className="categories">
                    <ul className="list-group">
                        <h3><i className="bi bi-cart4"></i> Carrito ({carrito.length})</h3>
                        {
                            carrito.map((elemento, index) =>
                            <li key={index}><Link to={`/`}>{elemento.name} ({count})</Link></li>
                            )
                        }
                        {
                            carrito.length < 1 &&
                            <li><Link to={`/`}>NO HAY ITEMS</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default CartWidget;