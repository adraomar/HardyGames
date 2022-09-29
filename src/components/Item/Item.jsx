import React from "react";
import '../Item/Item.css';
import { Link } from "react-router-dom";

const Item = ({ item, idx }) => {

    const array = item.plataform.split(", ");

    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <div id="card-title" className="content_top d-flex align-items-center justify-content-center">
                        <div className="heading">
                            <h3 className="h3 ">{item.name}</h3>
                        </div>
                    </div>
                    <Link to={`/game/${item.id}`}>
                        <img src={item.img} className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Disponibles
                                <span className="badge bg-primary rounded-pill">{item.stock}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Plataformas
                                <span className="fs-5">{array.map((e, index) => e === "PlayStation" ? <i key={index} className="bi bi-playstation mx-1"></i> : e === "XBOX" ? <i key={index} className="bi bi-xbox text-success mx-1"></i> : <i key={index} className="bi bi-pc-display text-info mx-1"></i>)}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Categoria
                                <span className="badge bg-primary rounded-pill text-uppercase">{item.category}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Precio (ARS)
                                <span className="badge bg-primary rounded-pill">$ {item.price}</span>
                            </li>
                        </ul>
                        <Link to={`/game/${item.id}`} className="btn btn-dark w-100 my-3">Más Detalles</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Item;