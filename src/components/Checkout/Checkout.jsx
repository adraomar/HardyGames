import { addDoc, getFirestore, collection } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { items, clear } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const valorInicial = {
        buyer: {
            apellido: "",
            nombres: "",
            email: "",
            pais: "",
            ciudad: "",
            cPostal: "",
        },
        total: (items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)) + (((items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)) * 21) / 100),
        cart: items
    }

    const [order, setOrder] = useState(valorInicial);

    const capturarInputs = (e) => {
        const { name, value } = e.target;

        setOrder({
            ...order,
            buyer: {
                ...order.buyer,
                [name]: value,
            },
        });
    }

    const guardarDatos = async (e) => {
        const db = getFirestore();
        let ord = order;
        const orderCollection = collection(db, "orders");

        e.preventDefault();
        setLoading(true);

        const swalButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success mx-1',
                cancelButton: 'btn btn-danger mx-1'
            },
            buttonsStyling: false
        })

        await swalButtons.fire({
            title: '¿Confirmas que tus datos son correctos?',
            html: `Nombre: ${order.buyer.apellido}, ${order.buyer.nombres} <br>Correo: ${order.buyer.email} <br>País: ${order.buyer.pais}<br>Ciudad: ${order.buyer.ciudad}<br>Código postal: ${order.buyer.cPostal}`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                addDoc(orderCollection, ord).then(({ id }) => {
                    swalButtons.fire({
                        title: 'Compra realizada!',
                        html: `Se ha generado tu orden de compra correctamente. <br><br> ID: ${id}`,
                        icon: 'success'
                    })

                    setLoading(false);
                }).then(() => {
                    clear();
                    setOrder({ ...valorInicial });
                    navigate("/");
                })
                
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalButtons.fire(
                    'Operacion cancelada!',
                    'No se ha generado ninguna orden de compra',
                    'error'
                )

                setLoading(false);
            }
        })
    }

    const moneyFormat = Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "USD",
        useGrouping: true,
        maximumSignificantDigits: 2
    });

    function SubmitButton() {
        if (order.buyer.apellido && order.buyer.nombres && order.buyer.email && order.buyer.pais && order.buyer.ciudad && order.buyer.cPostal) {
            return <input type="submit" className="btn btn-primary" value="Finalizar Compra" />
        } else {
            return <input type="submit" className="btn btn-primary" value="Finalizar Compra" disabled />
        };
    };

    return (
        <div className="container">
            <div className="row">
                <div className="content_top my-3">
                    <div className="heading">
                        <h3>CHECKOUT</h3>
                    </div>
                </div>
                {
                    loading &&
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
                {
                    !loading &&
                    <>
                        <div className="col-9 border p-3">
                            <h4 className="h4 my-3 pb-3 text-uppercase fw-semibold"><span className="badge text-bg-dark">1</span> Información personal</h4>
                            <form onSubmit={guardarDatos} className="row g-3">
                                <div className="col-md-4">
                                    <label htmlFor="validationDefault01" className="form-label">Nombres</label>
                                    <input name="nombres" value={order.buyer.nombres} onChange={capturarInputs} type="text" className="form-control" id="validationDefault01" required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationDefault02" className="form-label">Apellido</label>
                                    <input name="apellido" value={order.buyer.apellido} onChange={capturarInputs} type="text" className="form-control" id="validationDefault02" required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationDefaultUsername" className="form-label">Correo electrónico</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                        <input name="email" value={order.buyer.email} onChange={capturarInputs} type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationDefault03" className="form-label">Pais</label>
                                    <input name="pais" value={order.buyer.pais} onChange={capturarInputs} type="text" className="form-control" id="validationDefault03" required />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationDefault04" className="form-label">Ciudad</label>
                                    <input name="ciudad" value={order.buyer.ciudad} onChange={capturarInputs} type="text" className="form-control" id="validationDefault04" required />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="validationDefault05" className="form-label">Código Postal</label>
                                    <input name="cPostal" value={order.buyer.cPostal} onChange={capturarInputs} type="text" className="form-control" id="validationDefault05" required />
                                </div>

                                <div className="col-12 my-3">
                                    <SubmitButton />
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
                    </>
                }
            </div>
        </div>
    )
}

export default Checkout