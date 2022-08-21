import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


const CartWidget = () => {
    return (
        <button type="button" className="btn btn-outline-light mx-3"><i className="bi bi-cart" style={{ fontSize: 18 }}></i><span className="badge text-bg-success ms-3">0</span></button>
    );
}

export default CartWidget;