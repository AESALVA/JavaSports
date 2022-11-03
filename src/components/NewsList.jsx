import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import News from "./News";
import "../styles/landing.css";

const NewsList = () => {
  return (
    <Container>
      {/* 1er seccion */}
      <Row className="g-4">
        <Col xs={6} md={8} className="">
          <Row>
            <Col md={12}>
              <News />
            </Col>
            <Col xs={12} className="d-md-none">
              <News />
            </Col>
          </Row>
        </Col>
        <Col xs={6} md={4}>
          <Row>
            <Col>
              <News />
            </Col>
            <Col>
              <News />
            </Col>
          </Row>
        </Col>
      </Row>
      {/* 2da seccion */}
    </Container>
  );
};

export default NewsList;
