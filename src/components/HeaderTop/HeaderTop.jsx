import React from "react";
import logo from '../../assets/images/logo2.png';
import CartWidget from "../CartWidget/cartwidget";

const HeaderTop = () => {
    return (
        <div className="header_top">
            <div className="logo">
                <a href="/#"><img src={logo} alt="" /></a>
            </div>
            <div className="header_top_right">
                <CartWidget />
                <div className="clear"></div>
            </div>
            <div className="clear"></div>
        </div>
    );
}

export default HeaderTop;