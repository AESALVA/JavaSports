import React from "react";
import { Button } from "react-bootstrap";
import '../App.css';


function E404(){
    return(
        <div className="containerE404">
             <div id="main404">
                
                    <div className="container404">
                            <h1>Error 404</h1>
                    </div>
                   
            </div>
            <div className="d-flex align-items-center justify-content-center py-4">
                      <Button id="btn404" variant="light" className="d-flex justify-content-center align-items-center"> Volver al home</Button>
                    </div>
        </div>
    )
}
export default E404;