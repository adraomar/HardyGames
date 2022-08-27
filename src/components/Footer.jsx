import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrap">
                <div className="section group">
                    <div className="col_1_of_4 span_1_of_4">
                        <h4>Information</h4>
                        <ul>
                            <li><Link to={`/`}>About Us</Link></li>
                            <li><Link to={`/`}>Customer Service</Link></li>
                            <li><Link to={`/`}>Advanced Search</Link></li>
                            <li><Link to={`/`}>Orders and Returns</Link></li>
                            <li><Link to={`/`}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col_1_of_4 span_1_of_4">
                        <h4>Why buy from us</h4>
                        <ul>
                            <li><Link to={`/`}>About Us</Link></li>
                            <li><Link to={`/`}>Customer Service</Link></li>
                            <li><Link to={`/`}>Privacy Policy</Link></li>
                            <li><Link to={`/`}>Site Map</Link></li>
                            <li><Link to={`/`}>Search Terms</Link></li>
                        </ul>
                    </div>
                    <div className="col_1_of_4 span_1_of_4">
                        <h4>My account</h4>
                        <ul>
                            <li><Link to={`/`}>Sign In</Link></li>
                            <li><Link to={`/`}>View Cart</Link></li>
                            <li><Link to={`/`}>My Wishlist</Link></li>
                            <li><Link to={`/`}>Track My Order</Link></li>
                            <li><Link to={`/`}>Help</Link></li>
                        </ul>
                    </div>
                    <div className="col_1_of_4 span_1_of_4">
                        <h4>Contact</h4>
                        <ul>
                            <li><span>+91-123-456789</span></li>
                            <li><span>+00-123-000000</span></li>
                        </ul>
                        <div className="social-icons">
                            <h4>Follow Us</h4>
                            <ul>
                                <li><Link to={`/`}><img src="images/facebook.png" alt="" /></Link></li>
                                <li><Link to={`/`}><img src="images/twitter.png" alt="" /></Link></li>
                                <li><Link to={`/`}><img src="images/skype.png" alt="" /> </Link></li>
                                <li><Link to={`/`}> <img src="images/linkedin.png" alt="" /></Link></li>
                                <div className="clear"></div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copy_right">
                    <p>HardyGames 2022 - 2023 © Todos los derechos reservados | Diseño por <strong>Omar Adra</strong></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;