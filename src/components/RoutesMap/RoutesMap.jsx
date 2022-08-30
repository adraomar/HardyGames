import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

const RoutesMap = ( { items } ) => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="*" element={<Main items={ items }/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesMap