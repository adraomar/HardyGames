import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        let productos = [{ id: 1, nombre: "Producto #1", precio: 100 }, { id: 2, nombre: "Producto #2", precio: 100 }, { id: 3, nombre: "Producto #3", precio: 100 },
        { id: 4, nombre: "Producto #4", precio: 100 }, { id: 5, nombre: "Producto #5", precio: 100 }, { id: 6, nombre: "Producto #6", precio: 100 },
        { id: 7, nombre: "Producto #7", precio: 100 }, { id: 8, nombre: "Producto #8", precio: 100 }, { id: 9, nombre: "Producto #9", precio: 100 }];

        new Promise((resolve) => {

            setTimeout(() => {
                resolve(productos);
            }, 2000);
        }).then((data) => {
            setItems(data);
        })
    }, [])

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 text-center align-center mt-3">
                <ItemList items={items}></ItemList>
            </div>

        </>
    );
}

export default ItemListContainer;