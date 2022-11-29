import { Container, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import publicity from "../styles/publicity.css";

const Publicity = ({ publicityType, sizeCard }) => {
  const types = [
    {
      type: "vertical",
      img: "https://www.cocacola.es/content/dam/one/es/es2/coca-cola/cczz/H243095_D156443_TCCC_CCZZ_THAT-MOMENT_STATIC_600x900_ES.jpg",
    },
    {
      type: "horizontal",
      img: "https://www.ejemplos.co/wp-content/uploads/2021/11/publicidad-coca-cola-800x393.jpg",
    },
  ];

  const urlPublicity = types.find((t) => t.type === publicityType).img;

  let publicityStyle = "";
  if (sizeCard === "horizontal") {
    publicityStyle = "w-100";
  } else {
    //vertical
    publicityStyle = "img-big";
  }
  return (
    <>
      <Container className={`${publicityStyle} cardImagen my-4`}>
        <Card>
          <Link to="/Aboutus" className="">
            <Card.Img variant="top" src={`${urlPublicity}`} className="fluid" />
          </Link>
        </Card>
      </Container>
    </>
  );
};

export default Publicity;
