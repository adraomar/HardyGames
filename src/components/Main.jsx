import React from "react";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const Main = () => {
    return (
        <>
            <main className="main">
                <div className="wrap">
                    <div className="content">
                        <div className="content_top">
                            <div className="heading">
                                <h3>PRODUCTOS NUEVOS</h3>
                            </div>
                        </div>
                        <ItemListContainer listItems={1}/>
                        <div className="content_bottom">
                            <div className="heading">
                                <h3>TODOS LOS PRODUCTOS</h3>
                            </div>
                        </div>
                        <div className="section group">
                            <ItemListContainer listItems={0}/>
                        </div>
                    </div>
                </div>
            </main>
        </>

    );
}

export default Main;