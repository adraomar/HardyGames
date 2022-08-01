import React from 'react';

const ItemListContainer = (props) => {
    return(
        <h1 className="h1 text-light"> Bienvenidos al ECommerce <strong>{props.titulo}</strong> tienda Online de Videojuegos, accesorios y merchandising.</h1>
    );
}

export default ItemListContainer;