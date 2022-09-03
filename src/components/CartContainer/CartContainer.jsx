import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

const CartContainer = () => {
    const { items, clear } = useContext(CartContext);
    return (
        <>
            <div>CartContainer</div>
            <ol>
                {
                    items.map((item, index) =>
                        <li key={index}>{item.name} - {item.quantity}</li>
                    )
                }
            </ol>
            {
                items.length < 1 &&
                <h2 className="h2"> NO HAY ITEMS...</h2>
            }
            <button className="button-5" onClick={clear}>Vaciar Carrito</button>
        </>

    )
}

export default CartContainer