import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
                     <Link to="/" className="modal_styles"> <Button id="btn404" variant="light" className="d-flex justify-content-center align-items-center"> Volver al home</Button> </Link>
                    </div>
        </div>
    )
}
export default E404;
