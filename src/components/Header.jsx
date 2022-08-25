import React from "react";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderTop from "./HeaderTop/HeaderTop";
import Navbar from "./Navbar/Navbar";


const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <div className="wrap">
                <HeaderTop />
                <HeaderBottom />
            </div>
        </div>
    );
}

export default Header;