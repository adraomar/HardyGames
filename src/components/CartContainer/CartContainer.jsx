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
                                <i className="bi bi-trash mx-3"></i>
                                Vaciar Carrito
                            </button>
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
                    <div className="row">
                        <div className="content_top my-3">
                            <div className="heading">
                                <h3>CHECKOUT</h3>
                            </div>
                        </div>
                        <div className="col-9 border p-3">
                            <h4 className="h4 my-3 pb-3 text-uppercase fw-semibold"><span className="badge text-bg-dark">1</span> Información personal</h4>
                            <form className="row g-3">
                                <div className="col-md-4">
                                    <label htmlFor="validationDefault01" className="form-label">Nombres</label>
                                    <input type="text" className="form-control" id="validationDefault01" required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationDefault02" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" id="validationDefault02" required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationDefaultUsername" className="form-label">Correo electrónico</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                        <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationDefault03" className="form-label">Pais</label>
                                    <input type="text" className="form-control" id="validationDefault03" required />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationDefault04" className="form-label">Ciudad</label>
                                    <input type="text" className="form-control" id="validationDefault04" required />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationDefault05" className="form-label">Código Postal</label>
                                    <input type="number" className="form-control" id="validationDefault05" required />
                                </div>

                                <h4 className="h4 my-3 pb-3 text-uppercase fw-semibold"><span className="badge text-bg-dark">2</span> Información de pago</h4>

                                <div className="col-md-8">
                                    <label htmlFor="validationDefaultUsername" className="form-label">Nombre de titular</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend2"><i className="bi bi-person-fill"></i></span>
                                        <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="validationDefaultUsername" className="form-label">Fecha de Expiración</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend2"><i className="bi bi-calendar"></i></span>
                                        <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                    </div>
                                </div>

                                <div className="col-md-9">
                                    <label htmlFor="validationDefaultUsername" className="form-label">Número de tarjeta</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend2"><i className="bi bi-credit-card-2-front-fill"></i></span>
                                        <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="validationDefaultUsername" className="form-label">CCV</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend2"><i className="bi bi-file-lock2-fill"></i></span>
                                        <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                        <label className="form-check-label" htmlFor="invalidCheck2">
                                            Acepto los términos y condiciones
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 my-3">
                                    <button className="btn btn-primary" type="submit">Finalizar Compra</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-uppercase fw-bold">Orden de compra</h5>
                                    <ol className="list-group list-group-numbered my-2">
                                        {items.map((item) => (
                                            <>
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">{item.name}</div>
                                                    </div>
                                                    <span className="badge bg-primary rounded-pill">{item.quantity}</span>
                                                </li>
                                            </>
                                        ))}
                                    </ol>
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            IVA (21%)
                                            <span><>{((items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)) * 21) / 100}</></span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Sub total
                                            <span><>{items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)}</></span>
                                        </li>
                                    </ul>
                                    <ul className="list-group mt-2">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Total
                                            <span><>{(items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)) + (((items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)) * 21) / 100)}</></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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