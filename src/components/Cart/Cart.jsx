import React from 'react'

const Cart = ({ item }) => {
    return (
        <>
            <ul>
                <li>
                    <div>ID de juego: {item.id}</div>
                    <div>Nombre del juego: {item.name}</div>
                    <div>Cantidad: {item.quantity}</div>
                </li>
                <br>
                </br>
            </ul>
        </>

    )
}

export default Cart