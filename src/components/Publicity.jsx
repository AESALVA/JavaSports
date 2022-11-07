import { Container, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Publicity = ({ publicityType, sizeCard }) => {
  const types = [
    {
      type: "horizontal",
      img: "",
    },
    { type: "vertical", img: "" },
  ];
  const urlPublicity = types.find((t) => t.type === publicityType);

  let publicityStyle = "";
  if (sizeCard === "horizontal") {
    publicityStyle = "w-100";
  } else {
    publicityStyle = "card-big";
  }

  return (
    <>
      <Container className="cardImagen">
        <Card className={`${publicityStyle} `}>
          <Link to="/SectionsContainer" className="">
            <Card.Img variant="top" src="..." className="fluid" />
          </Link>
          <Card.Body className="">
            <Card.Title className="text-dark text-center">
              PUBLICIDAD
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Publicity;
