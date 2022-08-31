import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const RoutesMap = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={`/`} element={<Main />} />
                <Route path={`/item/:id`} element={<ItemDetailContainer />} />
                <Route path={`/category/:id`} element={<ItemListContainer />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesMap