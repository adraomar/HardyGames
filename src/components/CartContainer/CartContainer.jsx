import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart/Cart';

const CartContainer = () => {
    const { items, removeItem } = useContext(CartContext);
    return (

        <div className="container-fluid">
            <div className="content_top my-3">
                <div className="heading">
                    <h3>CARRITO DE COMPRAS</h3>
                </div>
            </div>

            {items.length > 0 && (
                <div className="container border m-lg-5">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col col-12 col-md-6 my-4 py-2 ">
                            {items.map((item, index) => (
                                <Cart key={index} item={item} quitar={removeItem} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {items.length < 1 && (
                <div className="container full-height d-flex align-items-center justify-content-center ">
                    <div className="w-50">
                        <h3 className="text-center text-uppercase">
                            el carrito esta vacio
                        </h3>

                        <div className="my-5 d-flex">
                            <Link to="/" className="btn btn-primary w-100 text-uppercase">
                                volver a comprar
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartContainer