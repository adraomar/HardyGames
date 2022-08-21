import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
    return (
        <>
        <h1 className="h1 text-light"> Bienvenidos al ECommerce <strong>{props.titulo}</strong> tienda Online de Videojuegos, accesorios y merchandising.</h1>
        <ItemCount initial="0"></ItemCount>
        </>    
    );
}

export default ItemListContainer;