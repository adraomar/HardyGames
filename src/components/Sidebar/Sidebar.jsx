import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="header_bottom_left my-3">
                <div className="categories">
                    <ul>
                        <h3>Categoria</h3>
                        <li><Link to={`/category/all`}>Todos</Link></li>
                        <li><Link to={`/category/accion`}>Acción</Link></li>
                        <li><Link to={`/category/aventura`}>Aventura</Link></li>
                        <li><Link to={`/category/arcade`}>Arcade</Link></li>
                        <li><Link to={`/category/deportivos`}>Deportivos</Link></li>
                        <li><Link to={`/category/estrategias`}>Estrategia</Link></li>
                        <li><Link to={`/category/simulacion`}>Simulación</Link></li>
                        <li><Link to={`/category/rpg`}>RPG</Link></li>
                        <li><Link to={`/category/mobas`}>MOBAS</Link></li>
                        <li><Link to={`/category/musicales`}>Musicales</Link></li>
                        <li><Link to={`/category/infantiles`}>Infantiles</Link></li>
                        <li><Link to={`/category/carreras`}>Carreras</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar