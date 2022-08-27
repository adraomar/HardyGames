import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
            <div className="input-group my-3">
                <span className="input-group-btn">
                    <button type="button" onClick={disminuirContador} disabled={contador === props.initial} className="button-5 mx-2" data-type="minus" data-field="quant[2]">
                        <span className="glyphicon glyphicon-minus">-</span>
                    </button>
                </span>
                <input type="number" name="quant[2]" className="form-control input-number text-center" value={contador} readOnly />
                <span className="input-group-btn">
                    <button type="button" onClick={aumentarContador} disabled={contador === props.stock} className="button-5 mx-2" data-type="plus" data-field="quant[2]">
                        <span className="glyphicon glyphicon-plus">+</span>
                    </button>
                </span>
            </div>
            <button disabled={contador === props.initial} onClick={() => props.onAdd(contador)} className="button-5" role="button"><span><i className="bi bi-cart-plus-fill"></i></span> AGREGAR</button>
        </>
    );
}

export default ItemCount;