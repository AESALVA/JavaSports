import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = ({ bigCard }) => {
  let styleCard = "";
  if (bigCard == "S") {
    styleCard = "bigCard";
  }
  return (
    <>
      <Card className={styleCard}>
        <Container>
          <Card.Img variant="top" src="./img/LogoJS.jpg" />
        </Container>
        <Card.Body>
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
