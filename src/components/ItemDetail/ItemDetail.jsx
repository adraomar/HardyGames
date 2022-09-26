import React, { useState, useContext } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/cartwidget';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2'

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [counter, setCounter] = useState(0);

    const onAdd = (contador) => {

        const swalButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success mx-1',
                cancelButton: 'btn btn-danger mx-1'
            },
            buttonsStyling: false
        })

        swalButtons.fire({
            title: '¿Estás seguro?',
            text: `Se van a agregar (${contador}) del juego ${item.name} al carrito`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Agregar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalButtons.fire(
                    'Agregado(s)!',
                    'Tu(s) producto(s) fueron agregado(s) al carrito correctamente',
                    'success'
                )

                setCounter(contador);
                addItem(item, contador);

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalButtons.fire(
                    'Operacion cancelada!',
                    'Ningun producto(s) ha sido agregado al carrito!',
                    'error'
                )
            }
        })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <div className="section group">
                            <div className="cont-desc span_1_of_2">
                                <div className="product-details">
                                    <div className="grid images_3_of_2">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="desc span_3_of_2">
                                        <h2 className="h2">{item.name}</h2>
                                        <div>
                                            <h2 className="h2">Descripción del producto</h2>
                                        </div>

                                        <p>{item.description}</p>
                                        <div className="price">
                                            <p>Precio: <span>$ {item.price}</span></p>
                                        </div>
                                        <div className="available">
                                            <ul>
                                                <li><span>Plataformas:</span> &nbsp; {item.plataform}</li>
                                                <li><span>Tamaño:</span>&nbsp; 110 GB</li>
                                                <li><span>Unidades en Stock:</span>&nbsp; {item.stock}</li>
                                            </ul>
                                        </div>
                                        {
                                            counter !== 0 ?
                                                <><Link to={`/cart`} className="button-5 mb-3">Finalizar compra</Link><Link to={`/`} className="button-5 mb-3">Seguir comprando</Link></> :
                                                <ItemCount initial={0} stock={item.stock} onAdd={onAdd} />
                                        }

                                        <div className="wish-list">
                                            <ul>
                                                <li className="wish"><Link to={`/game/${item.id}`}>Añadir a favoritos</Link></li>
                                                <li className="compare"><Link to={`/game/${item.id}`}>Comparar productos</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail