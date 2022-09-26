import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartContainer = () => {
    const { items, clear, removeItem } = useContext(CartContext);
    return (
        <div className="container">
            <div className="content_top my-3">
                <div className="heading">
                    <h3>CARRITO DE COMPRAS</h3>
                </div>
            </div>
            {items.length > 0 && (
                <div className="container overflow-auto">
                    <div className="row">
                        <div className="col-12">
                            <button onClick={() => clear()} className="btn btn-warning text-uppercase my-2">
                                <i className="bi bi-trash me-2"></i>
                                Vaciar Carrito
                            </button>
                            <Link to="/checkout" className="btn btn-success text-uppercase my-2 mx-2">
                                <i className="bi bi-credit-card-fill me-2"></i>
                                Checkout
                            </Link>
                            <table className="table text-center">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Imagen</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => (
                                        <tr key={index} className="border align-middle">
                                            <th className='align-middle' scope="row">{item.quantity}</th>
                                            <td className='align-middle'><img src={item.img} className="img-fluid img-thumbnail" style={{ width: "10rem" }} alt="..." /></td>
                                            <td className='align-middle'>{item.name}</td>
                                            <td className='align-middle'>$ {item.price}</td>
                                            <td className="align-middle"><button onClick={() => removeItem(item.id)} className="btn btn-danger text-uppercase mt-2">
                                                <i className="bi bi-trash mx-3"></i>
                                                Eliminar
                                            </button></td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot className="table-dark">
                                    <tr className="border align-middle">
                                        <th scope="row"></th>
                                        <td colSpan="2"></td>
                                        <td className="align-middle">Total: $<>{items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)}</></td>
                                        <th scope="row"></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            )}
            {items.length < 1 && (
                <div className="container full-height d-flex align-items-center justify-content-center ">
                    <div className="w-50">
                        <h3 className="text-center text-uppercase">
                            el carrito esta vacio
                        </h3>

                        <div className="my-5 d-flex">
                            <Link to="/" className="btn btn-primary w-100 text-uppercase">
                                volver a comprar
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartContainer