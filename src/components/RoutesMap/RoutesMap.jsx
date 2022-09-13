import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "../Main";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import CartContainer from '../CartContainer/CartContainer';
import Category from '../Category/Category';
import Header from '../Header';
import Footer from '../Footer';

const RoutesMap = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={`/`} element={<Main />} />
                <Route path={`/game/:id`} element={<ItemDetailContainer />} />
                <Route path={`/category/:name`} element={<Category/>} />
                <Route path={`/cart`} element={<CartContainer />} />
                <Route path={`/about`} element={<Main />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesMap