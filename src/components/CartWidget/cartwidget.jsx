import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = ({ item, count}) => {
    const { items } = useContext(CartContext);

    return (
        <>
            <div className="header_bottom_left my-3">
                <div className="categories">
                    <ul className="list-group">
                        <h3><i className="bi bi-cart4"></i> Carrito ({items.reduce((pv, cv) => pv + cv.quantity, 0)})</h3>
                        {items.length > 0 && (
                            items.map((elemento, index) =>
                            <li key={index}><Link to={`/cart`}>{elemento.name} ({elemento.quantity})</Link></li>
                            )
                        )}
                        {items.length < 1 &&
                            <li><Link to={`/`}>NO HAY ITEMS</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default CartWidget;