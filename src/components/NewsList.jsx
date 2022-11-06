import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import News from "./News";
import "../styles/landing.css";

const NewsList = () => {
  return (
    <Container className="container-grid g-3">
      <News id="one-card" />
      <News id="two-card" />
      <News id="three-card" />
      <News id="four-card" />
      <div id="five-card">PUBLICIDAD</div>
      <div id="six-card">
        <News />
      </div>
      <News id="seven-card" />
      <News id="eight-card" />
    </Container>
  );
};

export default NewsList;
