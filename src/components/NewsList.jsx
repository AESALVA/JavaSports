import Container from "react-bootstrap/Container";
import News from "./News";
import "../styles/landing.css";
import Publicity from "./Publicity";
import { Col, Row } from "react-bootstrap";

const NewsList = () => {
  return (
    <Container className="container-grid my-5">
      <div id="one-card">
        <News sizeCard="" />
      </div>
      <div id="two-card">
        <News sizeCard="" />
      </div>
      <div id="three-card">
        <News sizeCard="" />
      </div>
      <div id="four-card">
        <News sizeCard="" />
      </div>
      <div id="five-card" className="card-publicidad text-center">
        {/* PUBLICIDAD */}
        <Publicity publicityType="horizontal" />
      </div>
      <div id="six-card">
        <News sizeCard="" />
      </div>
      <div id="seven-card" className="mb-4">
        <News sizeCard="card-big" />
      </div>
      <div id="eight-card">
        <News sizeCard="" />
      </div>
      <div id="nine-card">
        <News sizeCard="" />
      </div>
      <div id="ten-card" className="card-publicidad text-center">
        {/* PUBLICIDAD */}
        <Publicity publicityType="vertical" />
      </div>
      <div id="eleven-card">
        <News sizeCard="" />
      </div>
      <div id="twelve-card">
        <News sizeCard="" />
      </div>
      <div id="thirteen-card">
        <News sizeCard="" />
      </div>
      <div id="fourteen-card">
        <News sizeCard="" />
      </div>
      <div id="fifteen-card" className="card-publicidad text-center">
        {/* PUBLICIDAD */}
        <Publicity publicityType="vertical" />
      </div>
      <div id="sixteen-card">
        <News sizeCard="" />
      </div>
      <div id="seventeen-card">
        <News sizeCard="card-big" />
      </div>
      <div id="eighteen-card" className="d-none d-md-block">
        <News sizeCard="" />
      </div>
      <div
        id="nineteen-card"
        className="d-flex d-none d-lg-flex align-items-center"
      >
        <Row>
          <Col>
            <News sizeCard="square" />
          </Col>
          <Col>
            <News sizeCard="square" />
          </Col>
        </Row>
        <Row>
          <Col>
            <News sizeCard="square" />
          </Col>
          <Col>
            <News sizeCard="square" />
          </Col>
        </Row>
      </div>
      <div id="twenty-card" className="d-none d-lg-block">
        <News sizeCard="card-big" />
      </div>
    </Container>
  );
};

export default NewsList;
