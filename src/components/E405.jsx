import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/e405.css"

export const e405 = () => {
  return (
    <div className="container-400">
      <div className="d-flex justify-content-center  container404 ">
        <h1>Debes iniciar sesión para ver las noticias</h1>
      </div>
      <div id="main404">
        <div className="mb-5">
          <Link to="/">
            <Button id="btn404" className="btn-light">
              Volver al home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default e405;
