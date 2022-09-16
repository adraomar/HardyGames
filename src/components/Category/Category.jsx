import React from 'react'
import Slider from '../Slider/Slider';
import Sidebar from '../Sidebar/Sidebar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import CartWidget from '../CartWidget/cartwidget';
import { useParams } from 'react-router-dom';

const Category = () => {
    const { name } = useParams();
    return (
        <>
            <main className="container-fluid">
                <div className="row">
                    <Slider />
                </div>
                <div className="row">
                    <div className="col-2">
                        <Sidebar />
                    </div>
                    <div className="col-8">
                        <ItemListContainer filter={name}/>
                    </div>
                    <div className="col-2">
                        <CartWidget />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Category