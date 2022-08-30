import React from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({items}) => {
    return (
        <>
            <div className="content_top my-3">
                <div className="heading">
                    <h3>TODOS LOS PRODUCTOS</h3>
                </div>
            </div>
            <ItemList items={items}></ItemList>
        </>
    );
}

export default ItemListContainer;