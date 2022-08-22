import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = (item) => {
    const onAdd = (contador) => {
        alert("Se ha agregado " + contador + " " + item.nombre + " al carrito");
    }

    return (
        <>
            <div className="col">
                <div className="card text-center">
                    <div className="card-header">
                        <h3 classNameclassName="h3"># {item.id} - {item.nombre}</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text mb-3">Nombre: {item.nombre}</p>
                        <p className="card-text mb-3">Precio: {item.precio}</p>
                        <ItemCount stock={5} initial={0} onAdd={onAdd}></ItemCount>
                    </div>
                    <div className="card-footer text-muted">
                        Producto nuevo!
                    </div>
                </div>
            </div>

        </>
    )
}

export default Item;