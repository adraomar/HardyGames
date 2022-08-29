import React from 'react'
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    return (
        <>
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
                            <div className="share-desc">
                                <div className="share">
                                    <p>Número de unidades :</p><input className="text_box" type="text" />
                                </div>
                                <div className="button"><span><Link to={`/item/${item.id}`}>Añadir al carrito</Link></span></div>
                                <div className="clear"></div>
                            </div>
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
        </>
    )
}

export default ItemDetail