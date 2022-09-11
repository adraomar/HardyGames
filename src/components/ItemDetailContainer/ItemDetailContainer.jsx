import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import db from '../../services';
import { collection, getDocs } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const getColData = async () => {
            try {
                const data = collection(db, "productos");
                const col = await getDocs(data);
                const res = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
                const array = res.find((e) => e.id === id);

                setItem(array);
            } catch (error) {
                console.log(error);
            }
        }

        getColData();

    }, [id])

    return (
        <>
            <div className="content_top my-3">
                <div className="heading">
                    <h3>INFORMACION DEL JUEGO</h3>
                </div>
            </div>
            <ItemDetail item={item} />
        </>
    );
}

export default ItemDetailContainer;