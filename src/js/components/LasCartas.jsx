import React from "react";
const LasCartas = ({ cartas }) => { //NI PUTA IDEA DE QUE ES EL PROPS NECESITO UNA EXPLICACIÓN
    return ( //                  primeras { Nos metemos a js {objeto}}
        <div className="card" style={{ width: "18rem" }}>
            <img src={cartas.img} className="card-img-top" style={{ height: "200px" }} alt="..." />
            <div className="card-body p-0">
                <h5 className="card-title m-0" style={{padding: "5px, 0 px"}}>{cartas.Título}</h5>
                <p className="card-text" style={{padding: "16px"}}> {cartas.texto}</p>
                <div className="bg-body-blackp-3 bg-body-secondary d-flex justify-content-center">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default LasCartas;
//NECESITO HACER ESTE PROYECTO DE NUEVO PARA ACLARAR MUCHAS DUDAS