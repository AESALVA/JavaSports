import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/joaquin.css";

function E404() {
  return (
    <div className="container-400">
      <div className="d-flex justify-content-center  container404 ">
        <h1>Error 404</h1>
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
export default E404;
