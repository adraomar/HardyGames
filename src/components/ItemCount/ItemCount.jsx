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
            <div className="input-group">
                <span className="input-group-btn">
                    <button type="button" onClick={disminuirContador} disabled={contador === props.initial} className="btn btn-warning btn-number" data-type="minus" data-field="quant[2]">
                        <span className="glyphicon glyphicon-minus">-</span>
                    </button>
                </span>
                <input type="number" name="quant[2]" className="form-control input-number text-center" value={contador} readOnly />
                <span className="input-group-btn">
                    <button type="button" onClick={aumentarContador} disabled={contador === props.stock} className="btn btn-warning btn-number" data-type="plus" data-field="quant[2]">
                        <span className="glyphicon glyphicon-plus">+</span>
                    </button>
                </span>
            </div>
            <button disabled={contador === props.initial} onClick={() => props.onAdd(contador)} className="btn btn-outline-success mt-3">
                <i className="bi bi-cart-plus-fill"></i> Agregar al carrito
            </button>

        </>
    );
}

export default ItemCount;