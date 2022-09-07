import React, { useState, useContext } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/cartwidget';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [counter, setCounter] = useState(0);

    const onAdd = (contador) => {
        alert(`Se han agregado '${contador}' copia(s) del juego '${item.name}`);
        setCounter(contador);
        addItem(item, contador);
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
                                        <img src={item.background_image} alt="" />
                                    </div>
                                    <div className="desc span_3_of_2">
                                        <h2>{item.name}</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore.</p>
                                        <div className="price">
                                            <p>Precio: <span>$ {item.suggestions_count}</span></p>
                                        </div>
                                        <div className="available">
                                            <ul>
                                                <li><span>Plataformas:</span> &nbsp; PC, PlayStation, XBOX</li>
                                                <li><span>Tamaño:</span>&nbsp; 110 GB</li>
                                                <li><span>Unidades en Stock:</span>&nbsp; 566</li>
                                            </ul>
                                        </div>
                                        {
                                            counter !== 0 ?
                                                <Link to={`/cart`} className="button-5 mb-3">Finalizar compra</Link> :
                                                <ItemCount initial={0} stock={5} onAdd={onAdd} />
                                        }

                                        <div className="wish-list">
                                            <ul>
                                                <li className="wish"><Link to={`/item/${item.id}`}>Añadir a favoritos</Link></li>
                                                <li className="compare"><Link to={`/item/${item.id}`}>Comparar productos</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="product_desc">
                                    <h2>Descripción del producto :</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                                        centuries, but also the leap into electronic typesetting, remaining essentially
                                        unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a type specimen book. It has survived
                                        not only five centuries, but also the leap into electronic typesetting, remaining
                                        essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                        an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                        has survived not only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <CartWidget item={item} count={counter}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail