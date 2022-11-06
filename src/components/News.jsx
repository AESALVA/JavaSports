import { Container, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import SectionsContainer from "./SectionsContainer";
import NewsList from "./NewsList";

const News = ({ sizeCard }) => {
  return (
    <>
      <Card className={`${sizeCard} cardImagen`}>
        <Link to="/SectionsContainer">
          <Card.Img variant="top" src="./img/LogoJS.jpg" className="fluid" />
        </Link>
        <Card.Body className="">
          <Card.Title className="text-dark text-center">Noticias</Card.Title>
          <Card.Text>
            <p className="text-dark d-none d-md-block text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default News;
