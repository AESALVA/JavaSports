import { Container, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import SectionsContainer from "./SectionsContainer";
import NewsList from "./NewsList";

const News = ({ sizeCard, mockSections }) => {
  const styles1 = "cardImagen";
  const styles2 = "my-4";
  let general = ``;
  sizeCard !== "Home"
    ? (general = `${styles1} ${styles2} ${sizeCard}`)
    : (general = ``);
  return (
    <>
      <Container className={general}>
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
              {mockSections.title}
            </Card.Title>
            <Card.Text>
              <span className="text-dark d-none d-md-block text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default News;
