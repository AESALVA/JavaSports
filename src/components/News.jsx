import { Container, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import SectionsContainer from "./SectionsContainer";
import NewsList from "./NewsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
          {/* {auth.role === "admin" && ( */}
          <Card.Footer className="d-flex justify-content-center">
            <Link to="Management">
              <Button variant="warning sm">
                <FontAwesomeIcon icon={faStar} />
              </Button>
            </Link>
            <Link to="Management">
              <Button variant="success sm">
                <FontAwesomeIcon icon={faPen} />
              </Button>
            </Link>
            <Link to="Management">
              <Button variant="danger sm">
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            </Link>
          </Card.Footer>
          {/* )} */}
        </Card>
      </Container>
    </>
  );
};

export default News;
