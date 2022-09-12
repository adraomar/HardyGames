import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import db from '../../services';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ filter }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getColData = async () => {

            try {
                if (filter === "all") {
                    const data = collection(db, "productos");
                    const col = await getDocs(data);
                    const res = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
                    setItems(res);
                } else {
                    const data = query(
                        collection(db, "productos"),
                        where("category", "==", filter)
                    );
                    const col = await getDocs(data);
                    const res = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
                    setItems(res);
                }
            } catch (error) {
                console.log(error);
            }
        }
        
        getColData();

    }, [filter])
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