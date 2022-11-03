import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
  return (
    <>
      <Card>
        <Container>
          <Card.Img variant="top" src="./img/deportes.jpg" />
        </Container>
        <Card.Body>
          <Card.Title className="text-dark">Card Title</Card.Title>
          <Card.Text>
            <p className="text-dark d-none d-md-block">
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
