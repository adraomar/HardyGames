import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
    const [contador, setContador] = useState(props.initial);

    const aumentarContador = () => {
        let stock = props.stock;

        if (contador < stock && stock > 0) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        let limite = props.initial;

        if (contador > limite) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <button onClick={disminuirContador} disabled={contador === props.initial} className="btn btn-warning"> - </button>
            <input type="number" className="text-center" value={contador} readOnly></input>
            <button onClick={aumentarContador} disabled={contador === props.stock} className="btn btn-warning"> + </button>
            <div>
                <button disabled={contador === props.initial} onClick={() => props.onAdd(contador)} className="btn btn-primary">
                    Agregar al carrito
                </button>
            </div>
        </>
    );
}

export default ItemCount;