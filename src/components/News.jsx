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
            {article.important === "true" &&
              (auth.role === "user" || auth.role === "admin") && (
                <div id="icons-destacada">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bookmark-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z" />
                  </svg>
                </div>
              )}
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
