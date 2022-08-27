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
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Precio: $ {item.suggestions_count}</p>
                        <ItemCount stock={5} initial={0} onAdd={onAdd}></ItemCount>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;