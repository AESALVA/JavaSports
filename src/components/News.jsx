import { Container, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import SectionsContainer from "./SectionsContainer";
import NewsList from "./NewsList";

const News = ({ sizeCard, mockSections, view }) => {
  let stylesAtHome = "";
  view === "Home" && (stylesAtHome = `cardImagen`);
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
              {mockSections.title}
            </Card.Title>
            <Card.Text>
              <span className="text-dark d-none d-md-block text-center">
                {mockSections.imgTitle}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default News;
