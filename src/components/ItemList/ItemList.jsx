import React from "react";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-5 g-2">
                {
                    items.map((elemento, index) =>
                        <Item key={index} item={elemento}></Item>
                    )
                }
                {
                    items.length < 1 &&
                    <div className="spinner-border text-success text-center" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                }
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination pagination-lg justify-content-center mt-3">
                    <li className="page-item"><Link to={`/`} className="page-link bg-danger text-light">Anterior</Link></li>
                    <li className="page-item"><Link to={`/`} className="page-link link-dark">1</Link></li>
                    <li className="page-item"><Link to={`/`} className="page-link link-dark">2</Link></li>
                    <li className="page-item"><Link to={`/`} className="page-link link-dark">3</Link></li>
                    <li className="page-item"><Link to={`/`} className="page-link bg-success text-light">Siguiente</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default ItemList;