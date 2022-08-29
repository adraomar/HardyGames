import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        let productos = [];

        fetch("https://api.rawg.io/api/games?key=15c0ed5bc35d476baecf48a6c8529477")
            .then(dataJson => dataJson.json())
            .then(data => {
                productos = data.results;
            })

        new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 3500);
        }).then((data) => {
            setItems(data);
        })
    }, [])

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