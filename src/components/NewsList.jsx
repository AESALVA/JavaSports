import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import News from "./News";
import "../styles/landing.css";

const NewsList = () => {
  return (
    <Container className="mb-5 d-flex justify-content-center flex-column ">
      <Row className="g-4 seconSection">
        {/* 1er columna */}
        <Col xs={6} md={8} className="">
          <Row>
            <Col>
              <News />
            </Col>
            <Col xs={12} className="d-md-none">
              <News />
            </Col>
          </Row>
        </Col>
        {/* 2da columna */}
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
      <Row className="g-4 seconSection d-md-none">
        <Col>
          <News />
        </Col>
      </Row>
    </Container>
  );
};

export default NewsList;
