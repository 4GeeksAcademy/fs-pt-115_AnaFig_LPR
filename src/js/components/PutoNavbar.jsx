import React from "react";
const PutoNavbar = () => {
    return (
        // ESTO ES UNA PUTA MIERDA NO SÉ COMO MIERDAS PONER EL TEXTO BLANCO SIN LA PUTA DATA 
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Services</a>
                        <a className="nav-link disabled" aria-disabled="true">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default PutoNavbar
