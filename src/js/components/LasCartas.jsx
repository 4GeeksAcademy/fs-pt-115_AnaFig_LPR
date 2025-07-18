import React from "react";
const LasCartas = ({imagen}) => { //NI PUTA IDEA DE QUE ES EL PROPS NECESITO UNA EXPLICACIÓN
    return ( //                  primeras { Nos metemos a js {objeto}}
        <div className="card" style={{width: "18rem"}}>
            <img src={imagen} className="card-img-top" style={{height:"200px"}} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}
export default LasCartas;