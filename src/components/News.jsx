import { Container, Nav, Tooltip } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import SectionsContainer from "./SectionsContainer";
import NewsList from "./NewsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const News = ({ sizeCard, view, article, auth }) => {
  let stylesAtHome = "";
  view === "Home" && (stylesAtHome = `cardImagen`);
  // console.log(article.title);
  return (
    <>
      <Container className={`${stylesAtHome} ${sizeCard}`}>
        <Card>
          <Link to="/SectionsContainer" className="">
            <Card.Img
              variant="top"
              src="/img/imgSection.webp"
              className="fluid"
            />
          </Link>
          <Card.Body className="">
            <Card.Title className="text-dark text-center">
              {article.title}
            </Card.Title>
            <Card.Text>
              <span className="text-dark d-none d-md-block text-center">
                {article.imgTitle}
              </span>
            </Card.Text>
          </Card.Body>
          {auth.role === "admin" && (
            <Card.Footer className="d-flex justify-content-center">
              <Link to="Management">
                <OverlayTrigger
                  key="btn-des"
                  placement="bottom"
                  overlay={<Tooltip id="button">Destacar</Tooltip>}
                >
                  <Button variant="sm" className="mx-1 btn-news">
                    <FontAwesomeIcon icon={faStar} />
                  </Button>
                </OverlayTrigger>
              </Link>
              <Link to="Management">
                <OverlayTrigger
                  key="btn-upd"
                  placement="bottom"
                  overlay={<Tooltip id="button">Actualizar</Tooltip>}
                >
                  <Button variant="sm" className="mx-1 btn-news">
                    <FontAwesomeIcon icon={faPen} />
                  </Button>
                </OverlayTrigger>
              </Link>
              <Link to="Management">
                <OverlayTrigger
                  key="btn-dlt"
                  placement="bottom"
                  overlay={<Tooltip id="button">Eliminar</Tooltip>}
                >
                  <Button
                    variant="sm"
                    id="btn-eliminar"
                    className="mx-1  btn-news"
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </Button>
                </OverlayTrigger>
              </Link>
            </Card.Footer>
          )}
        </Card>
      </Container>
    </>
  );
};

export default News;
