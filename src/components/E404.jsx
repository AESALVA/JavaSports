import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/error404.css";

function E404({ title }) {
  return (
    <div className="container-400">
      <div className="d-flex justify-content-center  container404 ">
        <h4 id="title-error">{title}!</h4>
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
