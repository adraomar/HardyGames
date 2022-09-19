import { addDoc, getFirestore, collection } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
    const { items, clear } = useContext(CartContext);

    const [formulario, setFormulario] = useState({
        buyer: {
            apellido: "",
            nombres: "",
            email: "",
            pais: "",
            ciudad: "",
            cPostal: ""
        },
        total: (items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)) + (((items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)) * 21) / 100),
        cart: items
    });


    const {
        buyer: { apellido, nombres, email, pais, ciudad, cPostal },
    } = formulario;

    let moneyFormat = Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "USD",
        useGrouping: true,
        maximumSignificantDigits: 2
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            buyer: {
                ...formulario.buyer,
                [name]: value,
            },
        });
    };

    const OnSubmit = (e) => {
        e.preventDefault();
        const db = getFirestore();
        let order = formulario;
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(({ id }) => {
            console.log(id);
            alert("Su orden se generó correctamente!");
        }).then(() => {
            clear();
            console.log("Se resetea el carrito");
        })
        
    };

    return (
        <div className="container">
            <div className="row">
                <div className="content_top my-3">
                    <div className="heading">
                        <h3>CHECKOUT</h3>
                    </div>
                </div>
                <div className="col-9 border p-3">
                    <h4 className="h4 my-3 pb-3 text-uppercase fw-semibold"><span className="badge text-bg-dark">1</span> Información personal</h4>
                    <form onSubmit={OnSubmit} className="row g-3">
                        <div className="col-md-4">
                            <label htmlFor="validationDefault01" className="form-label">Nombres</label>
                            <input name="nombres" value={nombres} onChange={handleChange} type="text" className="form-control" id="validationDefault01" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationDefault02" className="form-label">Apellido</label>
                            <input name="apellido" value={apellido} onChange={handleChange} type="text" className="form-control" id="validationDefault02" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationDefaultUsername" className="form-label">Correo electrónico</label>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                <input name="email" value={email} onChange={handleChange} type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="validationDefault03" className="form-label">Pais</label>
                            <input name="pais" value={pais} onChange={handleChange} type="text" className="form-control" id="validationDefault03" required />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationDefault04" className="form-label">Ciudad</label>
                            <input name="ciudad" value={ciudad} onChange={handleChange} type="text" className="form-control" id="validationDefault04" required />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationDefault05" className="form-label">Código Postal</label>
                            <input name="cPostal" value={cPostal} onChange={handleChange} type="text" className="form-control" id="validationDefault05" required />
                        </div>

                        {/* <h4 className="h4 mt-3 text-uppercase fw-semibold"><span className="badge text-bg-dark">2</span> Información de pago</h4>

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

                        <div className="col-12 mt-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                <label className="form-check-label" htmlFor="invalidCheck2">
                                    Acepto los términos y condiciones
                                </label>
                            </div>
                        </div> */}
                        <div className="col-12 my-3">
                            <input type="submit" className="btn btn-primary" value="Finalizar Compra" />
                        </div>
                    </form>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-uppercase fw-bold">Orden de compra</h5>
                            <ol className="list-group list-group-numbered my-2">
                                {items.map((item, index) => (
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">{item.name}</div>
                                        </div>

                                        <span className="badge bg-primary rounded-pill">{item.quantity}</span>
                                    </li>
                                ))}
                            </ol>
                            <div className="list-group">
                                <div className="list-group-item d-flex justify-content-between align-items-center">
                                    IVA (21%)
                                    <span><>{moneyFormat.format(((items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)) * 21) / 100)}</></span>
                                </div>
                                <div className="list-group-item d-flex justify-content-between align-items-center">
                                    Sub total
                                    <span><>{moneyFormat.format(items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0))}</></span>
                                </div>
                            </div>
                            <div className="list-group mt-2">
                                <div className="list-group-item d-flex justify-content-between align-items-center">
                                    Total
                                    <span><>{moneyFormat.format((items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)) + (((items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)) * 21) / 100))}</></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout