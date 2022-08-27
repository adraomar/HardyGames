import React from "react";
import '../Item/Item.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    const onAdd = (contador) => {
        alert("Se agregaron '" + contador + "' copia(s) del juego '" + item.name + "'.");
    }

    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <Link to={`/item/${item.id}`}>
                        <img src={item.background_image} className="card-img-top" alt="..." />
                    </Link>
                    <h5 className="card-title p-3 mb-3 d-flex align-items-center justify-content-center bg-dark text-white">{item.name}</h5>
                    <div className="card-body d-flex flex-column mb-3 d-flex justify-content-center">
                        <p className="card-text text-center">Precio: $ {item.suggestions_count}</p>
                        <ItemCount stock={5} initial={0} onAdd={onAdd} className="m"></ItemCount>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;