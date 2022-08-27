import React from "react";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Slider from "./Slider/Slider";
import CartWidget from "./CartWidget/cartwidget";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <>
            <main className="container-fluid">
                <div className="row">
                    <Slider />
                    <CartWidget />
                </div>
                {/* <div className="row">
                    <div className="content_top my-3">
                        <div className="heading">
                            <h3>NOVEDADES EXCLUSIVAS</h3>
                        </div>
                    </div>
                    <ItemListContainer/>
                </div> */}
                <div className="row">
                    <div className="col-2">
                        <div className="header_bottom_left my-3">
                            <div className="categories">
                                <ul>
                                    <h3>Categoria</h3>
                                    <li><Link to={`/`}>Todos</Link></li>
                                    <li><Link to={`/`}>Acción</Link></li>
                                    <li><Link to={`/`}>Aventura</Link></li>
                                    <li><Link to={`/`}>Arcade</Link></li>
                                    <li><Link to={`/`}>Deportivos</Link></li>
                                    <li><Link to={`/`}>Estrategia</Link></li>
                                    <li><Link to={`/`}>Simulación</Link></li>
                                    <li><Link to={`/`}>RPG</Link></li>
                                    <li><Link to={`/`}>MOBAS</Link></li>
                                    <li><Link to={`/`}>Musicales</Link></li>
                                    <li><Link to={`/`}>Infantiles</Link></li>
                                    <li><Link to={`/`}>Carreras</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="content_top my-3">
                            <div className="heading">
                                <h3>TODOS LOS PRODUCTOS</h3>
                            </div>
                        </div>
                        <ItemListContainer/>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;