import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 g-2">
                {
                    items.map((elemento, index) =>
                        <Item key={index} item={elemento}></Item>
                    )
                }
                {
                    items.length < 1 &&
                    <div className="spinner-border text-success text-center" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                }
            </div>
        </>
    );
}

export default ItemList;