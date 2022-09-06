import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart/Cart';

const CartContainer = () => {
    const { items, clear } = useContext(CartContext);
    return (
        <>
            {
                items.map((item, index) =>
                    <Cart key={index} item={item} />
                )
            }
            {
                items.length < 1 &&
                <h2 className="h2"> El carrito está vacío...</h2>
            }
            <button className="button-5" onClick={clear}>Vaciar Carrito</button>
        </>

    )
}

export default CartContainer