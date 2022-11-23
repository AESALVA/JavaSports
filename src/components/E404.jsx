import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/joaquin.css";

function E404() {
  return (
    <div className="container-400">
      <div>
        <h1>Error 404</h1>
      </div>
      <div id="main404">
        {/* <img src="/src/img/arbitro.png" alt="arbitro" /> */}
      </div>
      <div>
        <Link to="/">
          <Button id="btn404" variant="light" className="">
            Volver al home
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default E404;

// <div id="main404">
// <div className="container404 d-flex justify-content-center">
//   <h1>Error 404</h1>
//   <Link to="/">
//     <Button
//       id="btn404"
//       variant="light"
//       className="d-flex justify-content-center align-items-center"
//     >
//       Volver al home
//     </Button>
//   </Link>
// </div>
// </div>
