import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ listItems }) => {
    const [items, setItems] = useState([]);

    let api_url = "";
    let api_key = "15c0ed5bc35d476baecf48a6c8529477";

    switch (listItems) {
        case 0:
            api_url = "https://api.rawg.io/api/games?key=" + api_key;
            break;
        case 1:
            api_url = "https://api.rawg.io/api/games?key=" + api_key + "&page_size=6";
            break;
        default:
            api_url = "https://api.rawg.io/api/games?key=" + api_key;
            break;
    }

    useEffect(() => {
        let productos;

        fetch(api_url)
            .then(dataJson => dataJson.json())
            .then(data => {
                productos = data.results;
            })


        new Promise((resolve) => {

            setTimeout(() => {
                resolve(productos);
            }, 2000);
        }).then((data) => {
            setItems(data);
        })
    }, [api_url])

    return (
        <>
            <ItemList items={items}></ItemList>
        </>
    );
}

export default ItemListContainer;