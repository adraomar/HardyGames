import React from "react";
import '../Item/Item.css';
import { Link } from "react-router-dom";

const Item = ({ item }) => {

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
                        <div className="row row my-3 py-2 border d-flex aling-items-center">
                            <div className="col col-9">
                                <p className="fs-5 m-0 p-0 text-uppercase">
                                    DISPONIBLE
                                </p>
                            </div>
                            <div className="col col-3">
                                <span className="ml-3 fs-5 col col-6">{item.stock}</span>
                            </div>
                        </div>
                        <div className="row row my-3 py-2 border d-flex aling-items-center">
                            <div className="col col-8">
                                <p className="fs-5 m-0 p-0 text-uppercase">
                                    PLATAFORMA
                                </p>
                            </div>
                            <div className="col col-4">
                                <span className="ml-3 fs-5 col col-6">
                                    {/* <i className="bi bi-playstation mx-1"></i>
                                    <i className="bi bi-xbox me-1"></i>
                                    <i className="bi bi-pc-display me-1"></i> */}
                                    {item.plataform}

                                </span>
                            </div>
                        </div>
                        <div className="row row my-3 py-2 border d-flex aling-items-center">
                            <div className="col col-8">
                                <p className="fs-5 m-0 p-0 text-uppercase">
                                    Precio (USD)
                                </p>
                            </div>
                            <div className="col col-4">
                                <span className="ml-3 fs-5 col col-6 text-end">$ {item.price}</span>
                            </div>
                        </div>
                        <Link to={`/game/${item.id}`} className="btn btn-dark w-100">Ver Detalle</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Item;