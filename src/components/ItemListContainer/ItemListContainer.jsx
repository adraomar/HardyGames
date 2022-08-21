import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
    const onAdd = (contador) => {
        console.log("Soy onAdd y el valor del contador es: ", contador);
    }

    return (
        <>
        <h1 className="h1 text-light"> Bienvenidos al ECommerce <strong>{props.titulo}</strong> tienda Online de Videojuegos, accesorios y merchandising.</h1>
        <ItemCount stock={5} initial={0} onAdd={onAdd}></ItemCount>
        </>    
    );
}

export default ItemListContainer;