import React from "react";
import Slider from "./Slider/Slider";
import { Link } from "react-router-dom";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const Main = () => {
    return (
        <>
            <main className="container-fluid">
                <div className="row">
                    <Slider />
                </div>
                <div className="row">
                    <div className="col-2">
                        <div className="header_bottom_left my-3">
                            <div className="categories">
                                <ul>
                                    <h3>Categoria</h3>
                                    <li><Link to={`/category/0`}>Todos</Link></li>
                                    <li><Link to={`/category/1`}>Acción</Link></li>
                                    <li><Link to={`/category/2`}>Aventura</Link></li>
                                    <li><Link to={`/category/3`}>Arcade</Link></li>
                                    <li><Link to={`/category/4`}>Deportivos</Link></li>
                                    <li><Link to={`/category/5`}>Estrategia</Link></li>
                                    <li><Link to={`/category/6`}>Simulación</Link></li>
                                    <li><Link to={`/category/7`}>RPG</Link></li>
                                    <li><Link to={`/category/8`}>MOBAS</Link></li>
                                    <li><Link to={`/category/9`}>Musicales</Link></li>
                                    <li><Link to={`/category/10`}>Infantiles</Link></li>
                                    <li><Link to={`/category/11`}>Carreras</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        <ItemListContainer />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;