import React from 'react'

const ItemDetail = ({ item }) => {
    const { id, name } = item;

    return (
        <div>
            <h1>{name}</h1>
            <p>{id}</p>
        </div>
    )
}

export default ItemDetail