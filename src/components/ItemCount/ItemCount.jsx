import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
    const [contador, setContador] = useState(props.initial);

    return (
        <>
            <button> - </button>
            <span className="text-light"> Contador: {contador} </span>
            <button> + </button>
        </>
    );
}

export default ItemCount;