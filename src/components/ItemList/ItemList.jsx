import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-2">
                {
                    items.map((elemento, index) =>
                        <Item key={index} item={elemento}></Item>
                    )
                }
                {
                    items.length < 1 &&
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="spinner-border text-success" role="status">
                                    <span className="visually-hidden">Cargando...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

export default ItemList;