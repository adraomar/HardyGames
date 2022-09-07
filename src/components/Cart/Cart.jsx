import React from 'react'

const Cart = ({ item }) => {
    return (
        <>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={item.background_image} className="w-100 h-100" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title text-center">{item.name}</h5>
                            <div className="row my-2 border">
                                <div className="col col-10 text-uppercase">
                                    Cantidad
                                </div>
                                <div className="col col-2">{item.quantity}</div>
                            </div>
                            <div className="row my-2 border">
                                <div className="col col-7 text-uppercase">
                                    Precio
                                </div>
                                <div className="col col-5">USD ${item.suggestions_count}</div>
                            </div>
                            <button className="btn btn-danger text-uppercase mt-2 w-100">
                                <i className="bi bi-trash mx-3"></i>
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart