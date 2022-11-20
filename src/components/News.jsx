import { Container, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import SectionsContainer from "./SectionsContainer";
import NewsList from "./NewsList";

const News = ({ sizeCard, view, article }) => {
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
        </Card>
      </Container>
    </>
  );
};

export default News;
