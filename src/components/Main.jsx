import React from "react";
import Slider from "./Slider/Slider";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import CartWidget from "./CartWidget/cartwidget";
import Sidebar from "./Sidebar/Sidebar";

const Main = () => {
    return (
        <>
            <main className="container-fluid">
                <div className="row">
                    <Slider />
                </div>
                <div className="row">
                    <div className="col-2">
                        <Sidebar/>
                    </div>
                    <div className="col-8">
                        <ItemListContainer filter={"all"}/>
                    </div>
                    <div className="col-2">
                        <CartWidget />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;