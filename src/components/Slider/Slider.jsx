import React from "react";
import "../Slider/Slider.css";
import slider1 from "../../assets/images/1.jpg";
import slider2 from "../../assets/images/2.jpg";
import slider3 from "../../assets/images/3.jpg";
import slider4 from "../../assets/images/4.jpg";
import slider5 from "../../assets/images/5.jpg";

const Slider = () => {
    return (
        <div className="header_bottom">
            <div className="header_bottom_right">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slider1} className="d-block w-100 slider" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={slider2} className="d-block w-100 slider" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={slider3} className="d-block w-100 slider" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={slider4} className="d-block w-100 slider" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={slider5} className="d-block w-100 slider" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="clear"></div>
        </div>
    );
}

export default Slider;