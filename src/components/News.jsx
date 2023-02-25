import { Container, Tooltip } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const News = ({ sizeCard, view, article, auth }) => {
  let stylesAtHome = "";
  view === "Home" && (stylesAtHome = `cardImagen`);
  return (
    <>
      <Container className={`${stylesAtHome} ${sizeCard}`}>
        <Card className="card-news">
          <Link to={`/SectionsContainer/${article._id}`} className="">
            <Card.Img
              variant="top"
              src={article.img}
              className="fluid card-img-style"
              alt="notice_picture"
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
              <Link to="/Management">
                <OverlayTrigger
                  key="btn-details"
                  placement="bottom"
                  overlay={<Tooltip id="button">Administración</Tooltip>}
                >
                  <Button
                    variant="sm"
                    id="btn-details"
                    className="p-0 btn-news"
                  >
                    <FontAwesomeIcon icon={faFilePen} />
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
