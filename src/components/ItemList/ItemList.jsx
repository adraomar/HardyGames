import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
    return (
        <>
            {
                items.map((elemento, index) => (
                    <Item key={index} id={elemento.id} nombre={elemento.nombre} precio={elemento.precio}></Item>
                ))
            }

            {items.length < 1 &&
                <h1 className="text-light mt-1 text-uppercase">
                    No hay resultado...
                </h1>
            }
        </>
    );
}

export default ItemList;