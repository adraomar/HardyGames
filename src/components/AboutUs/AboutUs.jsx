import React from 'react'
import image from "../../assets/images/3625129.jpg";

const AboutUs = () => {
    return (
        <main>

            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="h1 fw-bold text-danger">HardyGames - Sobre nosotros</h1>
                        <p className="lead text-muted my-3">Somos un negocio on-line dedicado a la venta de keys (llaves) para videojuegos, lo que te permitirá canjear estas llaves y adquirir el juego en las distintas plataformas en la que esté disponible.</p>
                        <p className="lead text-muted my-3">Esta web es producto del desarrollo para el proyecto final del curso de React JS dictado por Coderhouse</p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 d-flex align-items-center justify-content-center">
                        <div className="col">
                        <h2 className="h2 text-center mb-3 fw-bold text-success">Desarrollador</h2>
                            <div className="card shadow-sm">
                                <img src={image} alt=""/>

                                <div className="card-body">
                                    <p className="card-text text-center fw-bold mb-2">Omar Adra</p>
                                    <p className="card-text text-center fw-bold mb-2">adra.omar2@gmail.com</p>
                                    <div className="d-flex justify-content-center align-items-center my-3">
                                        <div className="btn-group">
                                        <a className="btn btn-sm fw-bold btn-outline-success mx-1" target="_blank" rel="noopener" href="https://www.linkedin.com/in/omar-alberto-adra-5164a7222/"><i className="bi bi-linkedin"></i> LinkedIn</a>
                                        <a className="btn btn-sm fw-bold btn-outline-success mx-1" target="_blank" rel="noopener" href="https://github.com/adraomar"><i className="bi bi-github"></i> GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default AboutUs