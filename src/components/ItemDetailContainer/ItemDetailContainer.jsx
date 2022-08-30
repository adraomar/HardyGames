import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({items}) => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        let productos = items;

        new Promise((resolve) => {
            resolve(productos.find((elemento) => Number(elemento.id) === Number(id)))
        }).then((data) => {
            setItem(data);
        })
    }, [id, items])

    return (
        <>
            <div className="content_top my-3">
                <div className="heading">
                    <h3>INFORMACION DEL JUEGO</h3>
                </div>
            </div>
            <ItemDetail item={item} />
        </>
    );
}

export default ItemDetailContainer;