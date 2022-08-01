import React from 'react';

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-outline-light mx-3"><i className="bi bi-cart" style={{ fontSize: 18 }}></i><span className="badge text-bg-success ms-3">4</span></button>
    );
}

export default CartWidget;