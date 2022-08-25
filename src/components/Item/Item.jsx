import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";

const Item = ({ item }) => {
    const onAdd = (contador) => {
        alert("Se agregaron '" + contador + "' copia(s) del juego '" + item.name + "'.");
    }

    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <Link to={`/item/${item.id}`}>
                        <img src={item.background_image} className="card-img-top h-100" alt="..." />
                    </Link>
                    <div className="card-body text-center">
                        <div className="content_top">
                            <div className="heading">
                                <h3 className="card-title m-1">{item.name}</h3>
                            </div>
                        </div>
                        <p className="card-text m-3">$ {item.suggestions_count}</p>
                        <ItemCount stock={5} initial={0} onAdd={onAdd}></ItemCount>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Actualizado {item.updated}(s)</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;