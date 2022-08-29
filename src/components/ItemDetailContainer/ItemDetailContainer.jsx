import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        let productos;

        fetch("https://api.rawg.io/api/games?key=15c0ed5bc35d476baecf48a6c8529477")
            .then(dataJson => dataJson.json())
            .then(data => {
                productos = data.results;
            })

        new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find((elemento) => Number(elemento.id) === Number(id)))
            }, 3500);
        }).then((data) => {
            setItem(data);
        })
    }, [id])

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